// 专用：將主應用中的樣式注入到 iframe，避免在預覽中使用 Tailwind CDN

// Performance optimization: Cache stylesheet queries to avoid repeated DOM traversals
let cachedStylesheets = null;
let cacheTimestamp = 0;
const CACHE_TTL = 30000; // 30 seconds cache TTL

/**
 * Clear stylesheet cache (useful for HMR or dynamic style changes)
 */
export function clearStylesheetCache() {
  cachedStylesheets = null;
  cacheTimestamp = 0;
}

/**
 * Get cached stylesheets or query and cache them
 * @returns {{ links: HTMLLinkElement[], styles: HTMLStyleElement[] }}
 */
function getCachedStylesheets() {
  const now = Date.now();
  if (!cachedStylesheets || now - cacheTimestamp > CACHE_TTL) {
    cachedStylesheets = {
      links: Array.from(document.querySelectorAll('link[rel="stylesheet"]')),
      styles: Array.from(document.querySelectorAll('style'))
    };
    cacheTimestamp = now;
  }
  return cachedStylesheets;
}

/**
 * 將當前页面的樣式表（<link rel="stylesheet"> 与 <style>）克隆並注入到 iframe 內部。
 * 目的：在預覽 iframe 中使用同一份編譯後的 Tailwind 与自定義樣式，移除對 CDN 的依賴。
 *
 * 注意：
 * - 要求 iframe 与主页為同源（本专案符合）。
 * - 會跳過重複注入（以 data 标記）。
 * - 使用緩存機制避免重複 DOM 查詢（30 秒 TTL）
 *
 * @param {HTMLIFrameElement} iframe
 */
export function injectAppStylesIntoIframe(iframe) {
  if (!iframe) return;
  const doc = iframe.contentDocument || iframe.contentWindow?.document;
  if (!doc) return;

  try {
    // 避免重複注入
    if (doc.documentElement && doc.documentElement.dataset && doc.documentElement.dataset.appStylesInjected) {
      return;
    }

    const targetHead = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

    // Use cached stylesheets for better performance
    const { links, styles } = getCachedStylesheets();

    // 1) 複製 <link rel="stylesheet" ...>
    links.forEach((lnk) => {
      const clone = doc.createElement('link');
      clone.rel = 'stylesheet';
      // 使用絕對 URL，避免相對路徑解析問題
      clone.href = lnk.href;
      // 盡可能復制屬性（如 media）
      if (lnk.media) clone.media = lnk.media;
      targetHead.appendChild(clone);
    });

    // 2) 複製內联 <style>
    styles.forEach((sty) => {
      const clone = doc.createElement('style');
      clone.textContent = sty.textContent || '';
      targetHead.appendChild(clone);
    });

    if (doc.documentElement && doc.documentElement.dataset) {
      doc.documentElement.dataset.appStylesInjected = '1';
    }
  } catch {
    // 静默失敗，保底不影響主流程
  }
}
