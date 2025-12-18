/**
 * 內容加載器
 * 負責加載 HTML/CSS/JSX 內容文件
 */

import { isValidPreactJSX, detectJSXMode, validateJSX } from '../../utils/jsxPreprocessor';
import { createLogger } from '../../utils/logger';
import { buildContentPath } from './config/pathHelper.js';

const logger = createLogger('ContentLoader');

/**
 * 通用文本獲取函數
 * @param {string} url - 請求 URL
 * @param {Object} options - 選項
 * @param {boolean} options.silent - 是否靜默模式（不輸出警告）
 * @returns {Promise<string>} 文本內容
 */
export async function fetchText(url, options = {}) {
  const { silent = false } = options;

  try {
    // Node.js/Undici 的 fetch() 需要 absolute URL；瀏覽器可接受相對路徑。
    // 這裡統一處理，避免在測試/SSR 環境出現「Failed to parse URL from /...」噪音。
    let requestUrl = url;
    const isAbsoluteUrl = typeof requestUrl === 'string' && /^[a-zA-Z][a-zA-Z\\d+.-]*:/.test(requestUrl);
    const isRelativeUrl = typeof requestUrl === 'string' && !isAbsoluteUrl;

    if (isRelativeUrl) {
      const baseHref = globalThis?.location?.href;
      if (typeof baseHref === 'string' && baseHref.length > 0) {
        requestUrl = new URL(requestUrl, baseHref).toString();
      } else {
        // 在無 base 的環境（常見於 Node 測試）無法解析相對 URL，直接返回空字串即可。
        return '';
      }
    }

    const response = await fetch(requestUrl);

    if (!response.ok) {
      // Log non-200 responses with status for debugging
      if (!silent) {
        logger.debug(`HTTP ${response.status} for ${requestUrl}`);
      }
      return '';
    }

    const text = await response.text();

    // Guard against Vite SPA fallback returning index.html for missing files
    // When a requested file doesn't exist, Vite dev server may return index.html (200 OK)
    // instead of 404. Detect this by checking if the response looks like HTML
    // when we're expecting CSS, JSX, or JS content.
    const isHtmlContent = text.trim().toLowerCase().startsWith('<!doctype') ||
                         text.trim().toLowerCase().startsWith('<html');
    const expectsNonHtml = requestUrl.endsWith('.css') ||
                          requestUrl.endsWith('.jsx') ||
                          requestUrl.endsWith('.js');

    if (isHtmlContent && expectsNonHtml) {
      if (!silent) {
        logger.warn(`SPA fallback detected for ${requestUrl}, returning empty string`);
        logger.warn(`This usually indicates a missing file or permission issue (should be chmod 644)`);
      }
      return '';
    }

    return text;
  } catch (err) {
    if (!silent) {
      logger.error(`Fetch failed for ${url}: ${err.message}`);
    }
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
 * OPTIMIZATION: All files now loaded in parallel to eliminate waterfall delays
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} 內容對象 { demoHTML, customStyles, fullPageHTML, fullPageStyles, fullPageJSX, ... }
 */
export async function loadTemplateContent(category, familyId, templateId) {
  // 使用 buildContentPath 支持子路徑部署
  const basePath = buildContentPath(`styles/${category}/${familyId}/${templateId}`);

  // OPTIMIZATION: Fetch ALL files in parallel (HTML, CSS, JSX)
  // This eliminates sequential waterfall for JSX files (saves 100-200ms)
  const [demoHtml, demoCss, fullPageHtml, fullPageCss, fullPageJsxRaw, demoJsxRaw] = await Promise.all([
    fetchText(`${basePath}/demo.html`),
    fetchText(`${basePath}/demo.css`),
    fetchText(`${basePath}/fullpage.html`),
    fetchText(`${basePath}/fullpage.css`),
    fetchText(`${basePath}/fullpage.jsx`),
    fetchText(`${basePath}/demo.jsx`)
  ]);

  // ========================================
  // JSX 文件處理（優先級：fullpage.jsx > demo.jsx）
  // 支持 Preact h() 和 React JSX 兩種模式
  // ========================================
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
  if (!effectiveJsx && demoJsxRaw) {
    const result = processJSX(demoJsxRaw, basePath);
    if (result.jsx) {
      effectiveJsx = result.jsx;
      renderMode = result.renderMode;
      jsxMode = result.jsxMode;
      logger.debug(`使用 demo.jsx: ${basePath}`);
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
  // 使用 buildContentPath 支持子路徑部署
  const basePath = buildContentPath(`styles/${category}/${familyId}/${previewId}`);

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
  // 使用 buildContentPath 支持子路徑部署
  const basePath = buildContentPath(`styles/${category}/${familyId}`);

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
  loadFamilyContent,
  diagnoseContentLoading
};

/**
 * Diagnose content loading issues for a template
 * Useful for debugging missing content or permission problems
 * @param {string} category - Category ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} Diagnostic report
 */
export async function diagnoseContentLoading(category, familyId, templateId) {
  const basePath = buildContentPath(`styles/${category}/${familyId}/${templateId}`);
  const files = ['demo.html', 'demo.css', 'fullpage.html', 'fullpage.css', 'demo.jsx', 'fullpage.jsx'];

  const results = await Promise.all(
    files.map(async (file) => {
      const url = `${basePath}/${file}`;
      try {
        const response = await fetch(url);
        const text = response.ok ? await response.text() : '';

        // Check for SPA fallback
        const isHtmlContent = text.trim().toLowerCase().startsWith('<!doctype') ||
                             text.trim().toLowerCase().startsWith('<html');
        const expectsNonHtml = file.endsWith('.css') || file.endsWith('.jsx') || file.endsWith('.js');
        const isSpaFallback = isHtmlContent && expectsNonHtml;

        return {
          file,
          url,
          status: response.status,
          hasContent: text.length > 0 && !isSpaFallback,
          contentLength: isSpaFallback ? 0 : text.length,
          error: isSpaFallback ? 'SPA_FALLBACK' : (response.ok ? null : `HTTP_${response.status}`)
        };
      } catch (err) {
        return {
          file,
          url,
          status: 0,
          hasContent: false,
          contentLength: 0,
          error: err.message
        };
      }
    })
  );

  const hasAnyContent = results.some(r => r.hasContent);
  const spaFallbacks = results.filter(r => r.error === 'SPA_FALLBACK');
  const httpErrors = results.filter(r => r.error && r.error.startsWith('HTTP_'));

  return {
    basePath,
    files: results,
    summary: {
      hasAnyContent,
      totalFiles: files.length,
      successfulFiles: results.filter(r => r.hasContent).length,
      spaFallbackCount: spaFallbacks.length,
      httpErrorCount: httpErrors.length,
      likelyPermissionIssue: spaFallbacks.length > 0 && !hasAnyContent,
      recommendation: spaFallbacks.length > 0
        ? 'Check file permissions (should be 644) or verify files exist. Run: npm run fix:permissions'
        : hasAnyContent
          ? 'Content loaded successfully'
          : 'No content files found - verify template path is correct'
    }
  };
}
