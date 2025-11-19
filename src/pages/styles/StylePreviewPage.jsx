import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { PreviewPromptGenerator } from '../../utils/promptGenerator';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { PreviewSelector } from '../../components/preview/PreviewSelector';
import { hasMultiplePreviews } from '../../utils/previewsHelper';
import { DataVisualizationPreview } from '../../components/preview/DataVisualizationPreview';
import appCssUrl from '../../index.css?url';
// 新增：動態預覽加載器，與 PreviewModal 保持一致
import { loadPreview } from '../../utils/previewLoader';

/**
 * 獨立風格預覽頁面
 * - 支持 URL 分享（如 /styles/preview/glassmorphism）
 * - 支持瀏覽器歷史導航
 * - 支持多預覽切換
 * - 支持 React 組件預覽
 */
export function StylePreviewPage() {
  // 从 loader 获取已验证的风格数据
  const { style } = useLoaderData();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  // 新增：異步預覽內容與載入狀態（用於依 previewId 動態載入完整頁面）
  const [asyncPreview, setAsyncPreview] = useState(null);
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);

  // 提取風格數據
  const {
    title,
    description = '',
    demoHTML = '',
    customStyles = '',
    fullPageHTML = '',
    fullPageStyles = '',
    // 新增：支援以 ID 動態載入完整頁面預覽
    fullPagePreviewId = '',
    previews = [],
    colorScheme = null,
    variant = null
  } = style;

  // 將 title 從翻譯鍵轉換為翻譯值
  const displayTitle = typeof title === 'string' && title.includes('.')
    ? t(title)
    : title;

  const isReactPreview = !!(variant && variant.reactComponent);
  const previewsList = Array.isArray(previews) ? previews : [];

  // 移除外部資源（避免因無網路或被阻擋導致預覽卡在載入）
  const stripExternalAssets = (html) => {
    if (!html) return html;
    try {
      return html
        .replace(/<script[^>]+src=["']https?:\/\/[^"']+["'][^>]*>\s*<\/script>/gi, '')
        .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, '');
    } catch {
      return html;
    }
  };

  // 將資料中的 Markdown 章節標記做最小轉換
  const normalizeMarkdownHeadings = (html) => {
    if (!html) return html;
    let out = html;
    out = out
      .replace(/(^|\n)##\s*配色方案/g, '$1<h3 class="md-section-title">配色方案</h3>')
      .replace(/(^|\n)##\s*Color\s*Scheme/g, '$1<h3 class="md-section-title">Color Scheme</h3>');
    out = out.replace(/(^|\n)##\s*(配色方案|Color\s*Scheme)[\t ]*\n[\s\S]*?(?=(\n\s*<|$))/g, '$1');
    out = out.replace(/<h3[^>]*md-section-title[^>]*>(配色方案|Color\s*Scheme)<\/h3>\s*([^<]+)(?=(\s*<|$))/g, '');
    return out;
  };

  // 找到第一個 full 類型預覽的索引作為默認值
  const getDefaultIndex = () => {
    if (previewsList && previewsList.length > 0) {
      const firstFullIndex = previewsList.findIndex(p => p.type === 'full');
      return firstFullIndex >= 0 ? firstFullIndex : 0;
    }
    return 0;
  };

  // 重置預覽索引
  useEffect(() => {
    setActiveIndex(getDefaultIndex());
    setIsLoading(true);
  }, [style.id]);

  // 預覽切換時，顯示 Loading 視覺（避免先渲染到回退內容）
  useEffect(() => {
    setIsLoading(true);
  }, [activeIndex]);

  // 新增：當切換預覽或進入頁面時，若當前預覽具備 previewId，透過動態載入取得 html/styles
  useEffect(() => {
    const current = (previewsList && previewsList.length > 0)
      ? previewsList[Math.min(activeIndex, previewsList.length - 1)] || previewsList[0]
      : null;

    // 若無多預覽配置，回退到風格級 fullPagePreviewId（動態載入完整頁）
    const previewId = current?.previewId || fullPagePreviewId;

    // 重置上次結果
    setAsyncPreview(null);

    if (!previewId) {
      // 沒有 async loader，直接由 iframe onLoad 關閉 Loading
      setIsLoadingPreview(false);
      return;
    }

    let cancelled = false;
    setIsLoadingPreview(true);
    loadPreview(previewId)
      .then(({ html, styles }) => {
        if (cancelled) return;
        setAsyncPreview({ html: html || '', styles: styles || '' });
      })
      .catch((err) => {
        console.error(`預覽載入失敗: ${previewId}`, err);
        // 標記已嘗試但失敗，使用空內容以觸發後續回退邏輯
        if (!cancelled) setAsyncPreview({ html: '', styles: '' });
      })
      .finally(() => {
        if (!cancelled) setIsLoadingPreview(false);
      });

    return () => { cancelled = true; };
  }, [activeIndex, previewsList]);

  // 載入逾時後備
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [style.id]);

  // ESC 鍵返回
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        window.close();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [navigate]);

  const buildPreviewHTML = () => {
    // 新增：若已成功透過 previewId 異步載入，優先返回該內容
    if (asyncPreview && !isLoadingPreview && (asyncPreview.html || asyncPreview.styles)) {
      const sanitizedStyles = DOMPurify.sanitize(asyncPreview.styles || '');
      const processedHTML = normalizeMarkdownHeadings(
        stripExternalAssets(getDemoHTML(asyncPreview.html || '', language))
      );
      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${sanitizedStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${processedHTML}
</body>
</html>`;
    }

    // 若提供多個預覽，優先採用當前預覽的內容
    if (previewsList && previewsList.length > 0) {
      const current = previewsList[Math.min(activeIndex, previewsList.length - 1)] || previewsList[0];

      // 若當前預覽有 previewId（需異步載入），在載入完成前不要使用回退內容，避免顯示不正確
      if (current?.previewId) {
        if (asyncPreview === null || isLoadingPreview) {
          // 回傳輕量骨架頁面，等待載入完成
          return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('loading')}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;}
  .center{display:flex;align-items:center;justify-content:center;height:60vh;color:#666}</style>
</head>
<body><div class="center">${t('loading')}</div></body>
</html>`;
        }
        // 已有 async 預覽，前面頂部路徑會 return；理論上不會走到這裡
      }

      let previewHTML = current.html || '';
      let previewStyles = current.styles || '';

      // 佔位符回退
      if (previewHTML && previewHTML.includes('使用原有的 demoHTML')) {
        previewHTML = demoHTML || '';
      }
      if (previewStyles && (previewStyles.includes('使用原有的 customStyles') || previewStyles.includes('fullPageStyles'))) {
        previewStyles = `${fullPageStyles || ''}\n${customStyles || ''}`.trim();
      }

      if (!previewHTML) {
        if (fullPageHTML) {
          previewHTML = fullPageHTML;
          previewStyles = fullPageStyles || customStyles || '';
        } else {
          const extractFullPageContent = (html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
            const hiddenElements = doc.querySelectorAll('[style*="display: none"]');
            if (hiddenElements.length > 0) {
              const fullPageElement = hiddenElements[0];
              fullPageElement.removeAttribute('style');
              return fullPageElement.outerHTML;
            }
            return html;
          };
          previewHTML = extractFullPageContent(demoHTML);
          previewStyles = customStyles || '';
        }
      }

      const processedHTML = getDemoHTML(previewHTML, language);
      const normalizedHTML = stripExternalAssets(normalizeMarkdownHeadings(processedHTML));

      if (current.type === 'full') {
        return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${previewStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${normalizedHTML}
</body>
</html>`;
      }

      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.title', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${previewStyles || current.styles || ''}
  </style>
</head>
<body class="preview-fullscreen">
  ${normalizedHTML}
</body>
</html>`;
    }

    // 如果有完整頁面 HTML，優先使用
    if (fullPageHTML) {
      const processedHTML = getDemoHTML(fullPageHTML, language);
      const normalizedHTML = stripExternalAssets(normalizeMarkdownHeadings(processedHTML));

      return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.fullTitle', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${fullPageStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${normalizedHTML}
</body>
</html>`;
    }

    // 後備方案
    const extractFullPageContent = (html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
      const hiddenElements = doc.querySelectorAll('[style*="display: none"]');
      if (hiddenElements.length > 0) {
        const fullPageElement = hiddenElements[0];
        fullPageElement.removeAttribute('style');
        return fullPageElement.outerHTML;
      }
      return html;
    };

    const previewContent = extractFullPageContent(demoHTML);
    const processedPreviewContent = getDemoHTML(previewContent, language);
    const normalizedPreviewContent = stripExternalAssets(normalizeMarkdownHeadings(processedPreviewContent));

    return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t('preview.title', { title: displayTitle })}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${customStyles}
  </style>
</head>
<body class="preview-fullscreen">
  ${normalizedPreviewContent}
</body>
</html>`;
  };

  // 生成 Prompt
  const currentPreview = previewsList && previewsList.length > 0 ? previewsList[activeIndex] : null;
  const previewDescription = currentPreview?.description
    ? (typeof currentPreview.description === 'object'
        ? currentPreview.description[language]
        : t(currentPreview.description))
    : '';
  const previewFeatures = currentPreview?.features || [];
  const previewColorScheme = currentPreview?.colorScheme?.[language] || colorScheme?.[language] || '';

  // ✨ 傳入完整 style 對象以支持自定義 stylePrompt
  const promptContent = PreviewPromptGenerator.generate(
    style,
    description,
    (previewsList && previewsList.length > 0 ? (previewsList[activeIndex]?.html || previewsList[0]?.html || '') : (fullPageHTML || demoHTML)),
    language,
    previewDescription,
    previewFeatures,
    previewColorScheme,
    currentPreview  // ✨ 傳遞當前激活的預覽對象
  );

  // 檢查是否為數據可視化類型
  const isDataVisualization = currentPreview?.type === 'data-visualization';

  return (
    <>
      <div className="fixed inset-0 z-50 bg-white flex flex-col">
        <header className="border-b p-4 flex flex-col md:flex-row justify-between items-start md:items-center bg-white gap-3 md:gap-2">
          <h3 className="text-lg font-semibold">{t('preview.header', { title: displayTitle })}</h3>
          <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-stretch md:items-center w-full md:w-auto">
            {/* 預覽選擇器 */}
            {hasMultiplePreviews(previewsList) && (
              <div className="w-full md:w-auto md:mr-2">
                <PreviewSelector
                  previews={previewsList}
                  activeIndex={activeIndex}
                  onChange={setActiveIndex}
                  variant="auto"
                />
              </div>
            )}
            <div className="flex gap-2">
              <button
                onClick={() => setShowPrompt(true)}
                className="flex-1 md:flex-none px-4 py-2 text-sm rounded border hover:bg-gray-100 transition-colors"
              >
                {t('buttons.prompt')}
              </button>
              <button
                onClick={() => window.close()}
                className="flex-1 md:flex-none px-4 py-2 text-sm rounded border hover:bg-gray-100 transition-colors"
              >
                ✕ {t('buttons.close')}
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto custom-scrollbar relative">
          {/* Loading Overlay */}
          {!isReactPreview && isLoading && (
            <div className="absolute inset-0 bg-white dark:bg-gray-900 z-10 flex items-center justify-center">
              <div className="minimalism-loader">
                <div className="minimalism-loader-dot"></div>
                <div className="minimalism-loader-dot"></div>
                <div className="minimalism-loader-dot"></div>
              </div>
            </div>
          )}

          {isDataVisualization ? (
            <DataVisualizationPreview
              isOpen={true}
              onClose={() => window.close()}
              style={{
                title: displayTitle,
                description: description
              }}
              initialScenario={currentPreview?.scenario}
            />
          ) : isReactPreview ? (
            (() => {
              const ReactComp = variant.reactComponent;
              return (
                <div className="w-full h-full overflow-auto p-4">
                  <ReactComp autoStart={true} mode="full" />
                </div>
              );
            })()
          ) : (
            <iframe
              key={`${style.id}:${activeIndex}:${asyncPreview ? 'ready' : 'loading'}`}
              title={t('preview.header', { title: displayTitle })}
              srcDoc={buildPreviewHTML()}
              className="w-full min-h-[600px] border-0"
              onLoad={() => setIsLoading(false)}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          )}
        </div>
      </div>

      {/* Prompt 抽屜 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={t('preview.promptTitle', { title: displayTitle })}
        content={promptContent}
      />
    </>
  );
}

// 帶錯誤邊界的導出版本
export function StylePreviewPageWithErrorBoundary() {
  return <StylePreviewPage />;
}
