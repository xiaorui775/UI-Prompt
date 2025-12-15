/**
 * 內容加載器
 * 負責加載 HTML/CSS/JSX 內容文件
 */

import { isValidPreactJSX, detectJSXMode, validateJSX } from '../../utils/jsxPreprocessor';
import { createLogger } from '../../utils/logger';

const logger = createLogger('ContentLoader');

/**
 * 通用文本獲取函數
 * @param {string} url - 請求 URL
 * @returns {Promise<string>} 文本內容
 */
export async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    }
    return '';
  } catch {
    return '';
  }
}

/**
 * 處理 JSX 文件驗證
 * @param {string} jsxContent - JSX 原始內容
 * @param {string} basePath - 文件路徑（用於日誌）
 * @returns {Object} { jsx, renderMode, jsxMode }
 */
function processJSX(jsxContent, basePath) {
  if (!jsxContent) {
    return { jsx: '', renderMode: undefined, jsxMode: null };
  }

  const jsxMode = detectJSXMode(jsxContent);

  if (jsxMode === 'preact-h') {
    if (isValidPreactJSX(jsxContent)) {
      return { jsx: jsxContent, renderMode: 'jsx', jsxMode };
    } else {
      logger.warn(`Preact JSX 驗證失敗，改用 HTML 模式: ${basePath}`);
      return { jsx: '', renderMode: undefined, jsxMode: null };
    }
  } else if (jsxMode === 'react') {
    const validation = validateJSX(jsxContent, 'react');
    if (validation.valid) {
      logger.debug(`檢測到 React JSX 模式: ${basePath}`);
      return { jsx: jsxContent, renderMode: 'react-jsx', jsxMode };
    } else {
      logger.warn(`React JSX 驗證失敗: ${basePath}`, validation.errors);
      return { jsx: '', renderMode: undefined, jsxMode: null };
    }
  } else {
    logger.debug(`無法識別 JSX 模式，改用 HTML: ${basePath}`);
    return { jsx: '', renderMode: undefined, jsxMode: null };
  }
}

/**
 * 動態加載 Template 的 HTML/CSS/JSX 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} 內容對象 { demoHTML, customStyles, fullPageHTML, fullPageStyles, fullPageJSX, ... }
 */
export async function loadTemplateContent(category, familyId, templateId) {
  // 使用 public 資料夾路徑（Vite 會正確服務這些靜態文件）
  const basePath = `/data/content/styles/${category}/${familyId}/${templateId}`;

  const [demoHtml, demoCss, fullPageHtml, fullPageCss] = await Promise.all([
    fetchText(`${basePath}/demo.html`),
    fetchText(`${basePath}/demo.css`),
    fetchText(`${basePath}/fullpage.html`),
    fetchText(`${basePath}/fullpage.css`)
  ]);

  // ========================================
  // JSX 文件加載（優先級：fullpage.jsx > demo.jsx）
  // 支持 Preact h() 和 React JSX 兩種模式
  // ========================================
  let fullPageJsxRaw = await fetchText(`${basePath}/fullpage.jsx`);
  let demoJsxRaw = '';
  let effectiveJsx = '';
  let renderMode = undefined;
  let jsxMode = null;

  // 優先嘗試 fullpage.jsx
  if (fullPageJsxRaw) {
    const result = processJSX(fullPageJsxRaw, basePath);
    if (result.jsx) {
      effectiveJsx = result.jsx;
      renderMode = result.renderMode;
      jsxMode = result.jsxMode;
    }
  }

  // 如果 fullpage.jsx 不存在或無效，嘗試 demo.jsx
  if (!effectiveJsx) {
    demoJsxRaw = await fetchText(`${basePath}/demo.jsx`);
    if (demoJsxRaw) {
      const result = processJSX(demoJsxRaw, basePath);
      if (result.jsx) {
        effectiveJsx = result.jsx;
        renderMode = result.renderMode;
        jsxMode = result.jsxMode;
        logger.debug(`使用 demo.jsx: ${basePath}`);
      }
    }
  }

  return {
    demoHTML: demoHtml,
    customStyles: demoCss,
    fullPageHTML: fullPageHtml,
    fullPageStyles: fullPageCss,
    fullPageJSX: effectiveJsx,
    ...(effectiveJsx ? { demoJSX: effectiveJsx } : {}),
    // 提供 renderMode 和 jsxMode 信息
    ...(renderMode ? { renderMode } : {}),
    ...(jsxMode ? { jsxMode } : {})
  };
}

/**
 * 動態加載 Preview 級別的內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} previewId - Preview ID (e.g., 'dashboard', 'home-office')
 * @returns {Promise<Object>} 內容對象 { fullPageHTML, fullPageStyles, fullPageScript, fullPageJSX, ... }
 */
export async function loadPreviewContent(category, familyId, previewId) {
  // 使用 public 資料夾路徑
  const basePath = `/data/content/styles/${category}/${familyId}/${previewId}`;

  // 先嘗試 JSX，再回退 HTML
  const [fullPageHtml, fullPageCss, fullPageJs, fullPageJsxRaw, demoJsxRaw] = await Promise.all([
    fetchText(`${basePath}/fullpage.html`),
    fetchText(`${basePath}/fullpage.css`),
    fetchText(`${basePath}/fullpage.js`),
    fetchText(`${basePath}/fullpage.jsx`),
    fetchText(`${basePath}/demo.jsx`)
  ]);

  // 校驗 JSX 有效性
  let fullPageJsx = '';
  let renderMode = undefined;
  let jsxMode = null;

  // 優先嘗試 fullpage.jsx
  if (fullPageJsxRaw) {
    const result = processJSX(fullPageJsxRaw, basePath);
    if (result.jsx) {
      fullPageJsx = result.jsx;
      renderMode = result.renderMode;
      jsxMode = result.jsxMode;
    }
  }

  // 如果 fullpage.jsx 不存在或無效，嘗試 demo.jsx
  if (!fullPageJsx && demoJsxRaw) {
    const result = processJSX(demoJsxRaw, basePath);
    if (result.jsx) {
      fullPageJsx = result.jsx;
      renderMode = result.renderMode;
      jsxMode = result.jsxMode;
      logger.debug(`使用 demo.jsx: ${basePath}`);
    }
  }

  return {
    fullPageHTML: fullPageHtml,
    fullPageStyles: fullPageCss,
    fullPageScript: fullPageJs,
    fullPageJSX: fullPageJsx,
    ...(fullPageJsx ? { demoJSX: fullPageJsx } : {}),
    ...(renderMode ? { renderMode } : {}),
    ...(jsxMode ? { jsxMode } : {})
  };
}

/**
 * 動態加載 Family 級別的內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @returns {Promise<Object>} Family 內容對象 { demoHTML, customStyles }
 */
export async function loadFamilyContent(category, familyId) {
  // 使用 public 資料夾路徑
  const basePath = `/data/content/styles/${category}/${familyId}`;

  const [demoHtml, demoCss] = await Promise.all([
    fetchText(`${basePath}/demo.html`),
    fetchText(`${basePath}/demo.css`)
  ]);

  return {
    demoHTML: demoHtml,
    customStyles: demoCss
  };
}

export default {
  fetchText,
  loadTemplateContent,
  loadPreviewContent,
  loadFamilyContent
};
