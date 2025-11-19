import { useState, useMemo, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import { PromptButton } from '../prompt/PromptButton';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewButton } from '../preview/PreviewButton';
import { PreviewModal } from '../preview/PreviewModal';
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { TagGroup } from './TagChip';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
import appCssUrl from '../../index.css?url';

export function StyleCard({
  title,
  description,
  demoHTML,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '', // ✅ 階段 3.1: 新增動態加載 ID
  demoBoxClass = 'bg-gray-50',
  demoBoxStyle = '',
  // 新增的標籤相關屬性
  tags = [],
  onTagClick,
  // 可選：多預覽
  previews = [],
  // 配色方案
  colorScheme = null,
  // React 組件預覽 (用於交互式組件)
  variant = null,
  // 新增：風格 ID (用於數據識別)
  id = null,
  // 新增：佈局模式 (控制 iframe 容器的顯示方式)
  layoutMode = 'centered', // 'centered' | 'fullWidth' | 'fullPage'
  // ✨ 新增：自定義 Prompt 支持
  customPrompt = null, // 簡短 Prompt（用於 StyleCard）
  stylePrompt = null // 風格 Prompt（用於 PreviewModal）
}) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { language, t } = useLanguage();
  const iframeRef = useRef(null);
  // 語系對應的 demo HTML 須先計算，供 iframe 注入使用
  const currentDemoHTML = getDemoHTML(demoHTML, language);

  // 在 iframe 中渲染 demo，避免自定義 CSS 外溢影響全域（如 Header/Menu）
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // 對 demoHTML 進行清理與樣式抽取，避免外部資源與 style 樣式被剝除
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

    const extractBodyInner = (html) => {
      if (!html) return '';
      const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (match) return match[1];
      return html
        .replace(/<!doctype[^>]*>/i, '')
        .replace(/<\/?html[^>]*>/gi, '')
        .replace(/<\/?head[^>]*>[\s\S]*?<\/?head>/gi, '')
        .replace(/<\/?body[^>]*>/gi, '');
    };

    const extractInlineStyles = (html) => {
      if (!html) return { html: '', styles: '' };
      const styles = [];
      const without = html.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, css) => {
        styles.push(css || '');
        return '';
      });
      return { html: without, styles: styles.join('\n') };
    };

    const sanitizeCss = (css) => {
      if (!css) return '';
      return css
        .replace(/@import[^;]*https?:[^;]*;/gi, '')
        .replace(/url\(("|')?javascript:[^\)]*\)/gi, '');
    };

    const noExternal = stripExternalAssets(currentDemoHTML || '');
    const { html: noStyleHtml, styles: inlineStyles } = extractInlineStyles(noExternal);
    const bodyInner = extractBodyInner(noStyleHtml);
    const sanitizedHTML = DOMPurify.sanitize(bodyInner || '');
    const combinedStyles = sanitizeCss(`${inlineStyles || ''}\n${customStyles || ''}`);

    // 檢測是否需要全寬佈局（明確指定或自動檢測）
    const isFullWidthLayout = layoutMode === 'fullWidth' ||
                              layoutMode === 'fullPage' ||
                              customStyles.includes('grid-container') ||
                              customStyles.includes('masonry-container');

    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="${appCssUrl}" />
<style>
  html, body { margin: 0; padding: 0; height: 100%; }
  *, *::before, *::after { box-sizing: border-box; }
  /* demo 容器，根據 layoutMode 調整顯示方式 */
  .demo-root {
    height: 100%;
    ${isFullWidthLayout
      ? 'display: block; width: 100%; padding: 0;'
      : 'display: flex; align-items: center; justify-content: center; padding: 24px;'
    }
  }
  ${combinedStyles}
</style>
</head>
<body>
  <div class="demo-root">${sanitizedHTML}</div>
</body>
</html>`;

    try {
      doc.open();
      doc.write(html);
      doc.close();

      // 在 iframe 內部初始化最小互動：
      // - 支援「paint-toolbox」中的工具按鈕切換 active 狀態
      // - 採用事件委派，避免逐一綁定
      const initInteractivity = () => {
        try {
          const d = iframe.contentDocument || iframe.contentWindow?.document;
          if (!d) return;
          // 工具箱切換：.paint-toolbox 內 .tool-button 單選 active
          d.addEventListener('click', (e) => {
            const btn = e.target.closest?.('.tool-button');
            if (!btn) return;
            const container = btn.closest?.('.paint-toolbox');
            if (!container) return;
            container.querySelectorAll?.('.tool-button.active')?.forEach((el) => el.classList.remove('active'));
            btn.classList.add('active');
          }, true);
        } catch {
          // 忽略 iframe 內初始互動失敗，不影響主要渲染
        }
      };

      if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
        initInteractivity();
      } else {
        doc.addEventListener('DOMContentLoaded', initInteractivity, { once: true });
      }
    } catch {
      // Ignore write errors
    }
  }, [currentDemoHTML, customStyles, layoutMode]);

  const renderText = (value) => {
    let result = '';

    // 如果值是對象（i18n 對象格式，如 { 'zh-cn': '...', 'zh-CN': '...', 'en-US': '...' }）
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // 首先嘗試當前語言的精確匹配，然後嘗試大小寫變體
      result = value[language];
      if (!result && language === LANGUAGES.ZH_CN) {
        result = value[LANGUAGES.ZH_CN_LOWER];
      } else if (!result && language === LANGUAGES.ZH_CN_LOWER) {
        result = value[LANGUAGES.ZH_CN];
      }
      // 如果還是沒有，則回退到中文或英文
      if (!result) {
        result = value[LANGUAGES.ZH_CN] || value[LANGUAGES.ZH_CN_LOWER] || value[LANGUAGES.EN_US] || '';
      }
    }
    // 如果值以 'raw:' 開頭，移除前綴並直接返回
    else if (typeof value === 'string' && value.toLowerCase().startsWith('raw:')) {
      result = value.slice(4);
    }
    // 如果值看起來已經是翻譯後的內容（包含中文字符），則直接返回
    else if (typeof value === 'string' && /[\u4e00-\u9fff]/.test(value)) {
      result = value;
    }
    // 如果值包含點號，可能是翻譯鍵，嘗試翻譯
    else if (typeof value === 'string' && value.includes('.')) {
      const translation = t(value);
      // 如果翻譯結果與原值相同，說明翻譯鍵不存在，直接返回原值
      result = translation !== value ? translation : value;
    }
    // 其他情況嘗試翻譯
    else if (typeof value === 'string') {
      result = t(value);
    }

    // 確保返回值始終是字符串，避免顯示 [object Object]
    return String(result || '');
  };

  const handleGetPrompt = () => {
    setShowPrompt(true);
  };

  const handlePreview = () => {
    if (id) {
      // 在新标签页中打开预览页面
      const previewUrl = getStylePreviewUrl(id);
      const fullUrl = window.location.origin + previewUrl;
      window.open(fullUrl, '_blank');
    } else {
      // 後備方案：模態框預覽（當沒有 id 時）
      console.warn('StyleCard: 缺少 id 屬性，使用模態框預覽');
      setShowPreview(true);
    }
  };

  const displayTitle = renderText(title);
  const displayDescription = renderText(description);

  // ✨ 構建 style 對象以支持自定義 Prompt
  const styleObject = {
    title: displayTitle,
    description: displayDescription,
    customPrompt,
    stylePrompt,
    demoHTML,
    fullPageHTML
  };

  // For StyleCard, prefer short customPrompt; fallback to stylePrompt
  const promptContent = PromptGenerator.generate(
    styleObject,
    { mode: 'card' },
    language
  );
  
  // 解析 demoBoxStyle：支援多宣告、移除分號、kebab 轉 camelCase
  const parseStyleString = (str) => {
    if (!str || typeof str !== 'string') return {};
    const toCamel = (k) => (k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
    return str
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .reduce((acc, decl) => {
        const idx = decl.indexOf(':');
        if (idx === -1) return acc;
        let key = decl.slice(0, idx).trim();
        let value = decl.slice(idx + 1).trim();
        if (!key) return acc;
        // 去除值末尾分號與多餘空白
        if (value.endsWith(';')) value = value.slice(0, -1).trim();
        key = toCamel(key);
        acc[key] = value;
        return acc;
      }, {});
  };

  const demoBoxInlineStyle = useMemo(() => parseStyleString(demoBoxStyle), [demoBoxStyle]);


  return (
    <>
      <div className="minimal-card bg-white rounded-lg overflow-hidden relative">
        {/* 演示區：改為 iframe 沙箱，隔離自定義 CSS 對全域的影響 */}
        <div className={`demo-box ${demoBoxClass}`} style={demoBoxInlineStyle}>
          <iframe
            ref={iframeRef}
            title={`style-demo-${id || displayTitle}`}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>

        {/* 内容区域 */}
        <div className="p-6">
          {/* 標題和分類徽章 */}
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold flex-1">{displayTitle}</h3>
          </div>

          <p className="text-gray-600 text-sm mb-3">{displayDescription}</p>

          {/* 標籤組 */}
          {tags && tags.length > 0 && (
            <div className="mb-4">
              <TagGroup
                tags={tags}
                language={language}
                size="sm"
                clickable={!!onTagClick}
                onTagClick={onTagClick}
                maxDisplay={4}
              />
            </div>
          )}

          {/* 按钮组 - 底部统一列 */}
          <div className="flex items-center justify-center gap-2">
            <PromptButton onClick={handleGetPrompt} />
            <div className="flex gap-1">
              <PreviewButton onClick={handlePreview} />
            </div>
          </div>
        </div>
      </div>

      {/* Prompt 抽屉 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={displayTitle}
        content={promptContent}
      />

      {/* Preview 模态框 */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        title={displayTitle}
        description={displayDescription}
        htmlContent={demoHTML}
        customStyles={customStyles}
        fullPageHTML={fullPageHTML}
        fullPageStyles={fullPageStyles}
        fullPagePreviewId={fullPagePreviewId}
        previews={previews}
        colorScheme={colorScheme}
        variant={variant}
        stylePrompt={stylePrompt}
      />
    </>
  );
}
