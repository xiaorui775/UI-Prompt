/**
 * buildPreviewHTML - 預覽 HTML 構建工具
 *
 * 提供：
 * - HTML 清理和標準化
 * - 外部資源移除
 * - 預覽文檔構建
 */

import DOMPurify from 'dompurify';
import { getDemoHTML } from '../../../utils/i18n/demoI18n';
import appCssUrl from '../../../index.css?url';

// ========== 工具函數 ==========

/**
 * 將 Markdown 章節標記做最小轉換，並清理純文字色彩說明
 * @param {string} html - 原始 HTML
 * @returns {string} 處理後的 HTML
 */
export function normalizeMarkdownHeadings(html) {
  if (!html) return html;

  let out = html;

  // 1) 將 Markdown 標題轉為 H3
  out = out
    .replace(/(^|\n)##\s*配色方案/g, '$1<h3 class="md-section-title">配色方案</h3>')
    .replace(/(^|\n)##\s*Color\s*Scheme/g, '$1<h3 class="md-section-title">Color Scheme</h3>');

  // 2) 清理：移除緊接在「配色方案/Color Scheme」標題後的純文字描述
  out = out.replace(/(^|\n)##\s*(配色方案|Color\s*Scheme)[\t ]*\n[\s\S]*?(?=(\n\s*<|$))/g, '$1');
  out = out.replace(/<h3[^>]*md-section-title[^>]*>(配色方案|Color\s*Scheme)<\/h3>\s*([^<]+)(?=(\s*<|$))/g, '');

  return out;
}

/**
 * 移除外部資源（避免因無網路或被阻擋導致預覽卡住）
 * @param {string} html - 原始 HTML
 * @returns {string} 處理後的 HTML
 */
export function stripExternalAssets(html) {
  if (!html) return html;
  try {
    return html
      // 移除外部腳本
      .replace(/<script[^>]+src=["']https?:\/\/[^"']+["'][^>]*>\s*<\/script>/gi, '')
      // 移除外部樣式連結
      .replace(/<link[^>]+href=["']https?:\/\/[^"']+["'][^>]*>/gi, '');
  } catch {
    return html;
  }
}

/**
 * 從 HTML 中提取隱藏的完整頁面內容
 * @param {string} html - 原始 HTML
 * @returns {string} 提取的內容
 */
export function extractFullPageContent(html) {
  if (!html) return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
  const hiddenElements = doc.querySelectorAll('[style*="display: none"]');

  if (hiddenElements.length > 0) {
    const fullPageElement = hiddenElements[0];
    fullPageElement.removeAttribute('style');
    return fullPageElement.outerHTML;
  }

  return html;
}

// ========== 交互腳本 ==========

// 工具按鈕交互腳本（用於 paint-toolbox 等組件）
const INTERACTIVE_SCRIPT = `(function(){function i(){try{document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.tool-button');if(!b)return;var c=b.closest&&b.closest('.paint-toolbox');if(!c)return;var a=c.querySelectorAll&&c.querySelectorAll('.tool-button.active');if(a){a.forEach?a.forEach(function(el){el.classList.remove('active')}):Array.prototype.forEach.call(a,function(el){el.classList.remove('active')});}b.classList.add('active');},true);}catch(_){} } if(document.readyState==='complete'||document.readyState==='interactive'){i();}else{document.addEventListener('DOMContentLoaded',i,{once:true});}})();`;

// ========== HTML 構建器 ==========

/**
 * 處理並清理 HTML 內容
 * @param {string} html - 原始 HTML
 * @param {string} language - 語言代碼
 * @returns {string} 清理後的 HTML
 */
function processHTML(html, language) {
  const processed = getDemoHTML(html || '', language);
  const normalized = stripExternalAssets(normalizeMarkdownHeadings(processed));
  return DOMPurify.sanitize(normalized);
}

/**
 * 清理 CSS 樣式
 * @param {string} styles - 原始 CSS
 * @returns {string} 清理後的 CSS
 */
function sanitizeStyles(styles) {
  return DOMPurify.sanitize(styles || '');
}

/**
 * 構建完整的 HTML 文檔
 * @param {Object} options - 構建選項
 * @returns {string} 完整的 HTML 文檔
 */
function buildHTMLDocument({
  title,
  language,
  styles,
  content,
  bodyClass = 'preview-fullscreen'
}) {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>
    ${styles}
  </style>
</head>
<body class="${bodyClass}">
  ${content}
  <script>${INTERACTIVE_SCRIPT}</script>
</body>
</html>`;
}

/**
 * 構建加載中骨架頁面
 * @param {string} language - 語言代碼
 * @param {string} loadingText - 加載提示文字
 * @returns {string} 骨架頁面 HTML
 */
function buildLoadingHTML(language, loadingText) {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loadingText}</title>
  <link rel="stylesheet" href="${appCssUrl}">
  <style>body{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto;} .center{display:flex;align-items:center;justify-content:center;height:60vh;color:#666}</style>
</head>
<body><div class="center">${loadingText}</div>
  <script>${INTERACTIVE_SCRIPT}</script>
</body>
</html>`;
}

// ========== 主構建函數 ==========

/**
 * 構建預覽 HTML
 *
 * @param {Object} options - 構建選項
 * @param {Object} options.previewContent - 異步加載的預覽內容 { html, styles }
 * @param {Array} options.previewsList - 預覽列表
 * @param {number} options.activeIndex - 當前活躍索引
 * @param {string} options.fullPagePreviewId - 完整頁面預覽 ID
 * @param {string} options.fullPageHTML - 完整頁面 HTML
 * @param {string} options.fullPageStyles - 完整頁面樣式
 * @param {string} options.htmlContent - 卡片級 HTML 內容
 * @param {string} options.customStyles - 自定義樣式
 * @param {string} options.language - 語言代碼
 * @param {string} options.displayTitle - 顯示標題
 * @param {Function} options.t - 翻譯函數
 * @returns {string} 完整的預覽 HTML 文檔
 */
export function buildPreviewHTML({
  previewContent,
  previewsList,
  activeIndex,
  fullPagePreviewId,
  fullPageHTML,
  fullPageStyles,
  htmlContent,
  customStyles,
  language,
  displayTitle,
  t
}) {
  // 1. 優先使用異步加載的內容
  if (previewContent && (previewContent.html || previewContent.styles)) {
    return buildHTMLDocument({
      title: t('preview.fullTitle', { title: displayTitle }),
      language,
      styles: sanitizeStyles(previewContent.styles),
      content: processHTML(previewContent.html, language)
    });
  }

  // 2. 使用多預覽列表
  if (previewsList && previewsList.length > 0) {
    const current = previewsList[Math.min(activeIndex, previewsList.length - 1)];

    // 2a. 若需要異步加載但內容尚未到位，顯示骨架頁面
    if ((current?.previewId || fullPagePreviewId) && !previewContent) {
      return buildLoadingHTML(language, t('loading'));
    }

    // 2b. 解析當前預覽的 HTML 和樣式
    let previewHTML = current.html || '';
    let previewStyles = current.styles || '';

    // 佔位符回退
    if (previewHTML.includes('使用原有的 demoHTML')) {
      previewHTML = htmlContent || '';
    }
    if (previewStyles.includes('使用原有的 customStyles') || previewStyles.includes('fullPageStyles')) {
      previewStyles = `${fullPageStyles || ''}\n${customStyles || ''}`.trim();
    }

    // 如果沒有 HTML，嘗試使用 fullPageHTML 或提取隱藏內容
    if (!previewHTML) {
      if (fullPageHTML) {
        previewHTML = fullPageHTML;
        previewStyles = fullPageStyles || customStyles || '';
      } else {
        previewHTML = extractFullPageContent(htmlContent);
        previewStyles = customStyles || '';
      }
    }

    const titleKey = current.type === 'full' ? 'preview.fullTitle' : 'preview.title';

    return buildHTMLDocument({
      title: t(titleKey, { title: displayTitle }),
      language,
      styles: sanitizeStyles(previewStyles),
      content: processHTML(previewHTML, language)
    });
  }

  // 3. 使用完整頁面 HTML
  if (fullPageHTML) {
    return buildHTMLDocument({
      title: t('preview.fullTitle', { title: displayTitle }),
      language,
      styles: sanitizeStyles(fullPageStyles),
      content: processHTML(fullPageHTML, language)
    });
  }

  // 4. 後備：從 htmlContent 提取隱藏內容
  const extractedContent = extractFullPageContent(htmlContent);

  return buildHTMLDocument({
    title: t('preview.title', { title: displayTitle }),
    language,
    styles: sanitizeStyles(customStyles),
    content: processHTML(extractedContent, language)
  });
}

export default buildPreviewHTML;
