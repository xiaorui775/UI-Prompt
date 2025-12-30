/**
 * Detect whether a fetched HTML document is actually the app shell (index.html)
 * returned by SPA fallback (e.g., when requesting a missing content file).
 *
 * This is used to prevent embedding the app inside preview iframes, which can
 * manifest as duplicated "preview headers" (nested app rendering).
 */
export function isUiStyleAppIndexHtml(html) {
  if (!html || typeof html !== 'string') return false;

  const lower = html.toLowerCase();

  // Fast fail: not an HTML document
  const looksLikeHtmlDoc = lower.includes('<html') || lower.includes('<!doctype');
  if (!looksLikeHtmlDoc) return false;

  // Stable marker (added in this repo's index.html)
  if (lower.includes('name="ui-style-app"') || lower.includes("name='ui-style-app'")) {
    return true;
  }

  // Vite dev markers
  if (lower.includes('/@vite/client') || lower.includes('/src/main.jsx')) {
    return true;
  }

  // Production app markers (avoid false positives on user templates)
  if (lower.includes('__ui_style_sw_cleanup_done__')) return true;
  if (lower.includes('uiprompt.site')) return true;

  // 🛡️ Task 4: 移除弱檢測
  // 原本的 "ui style prompt" + "id=\"root\"" 複合條件已被移除，
  // 因為可能誤傷用戶模板（例如：React 模板使用 id="root"）。
  // 上述 4 個檢測（meta tag、Vite 標記、SW 標記、域名）已足夠精確。

  return false;
}

export default isUiStyleAppIndexHtml;
