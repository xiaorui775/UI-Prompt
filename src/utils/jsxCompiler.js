/**
 * JSX 編譯器工具
 * 使用 Sucrase 將 JSX 轉換為可執行的 JavaScript
 */

// 編譯結果緩存
const compilationCache = new Map();

/**
 * 生成簡單的 hash 用於緩存 key
 */
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

/**
 * 檢測代碼是否包含 JSX 語法
 */
export function containsJSX(code) {
  if (!code || typeof code !== 'string') return false;

  // 先移除 <style> 和 <script> 標籤內容，避免 CSS/JS 中的 {} 觸發誤判
  const codeWithoutStyleScript = code
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  // 檢測常見的 JSX 模式
  const jsxPatterns = [
    /<[A-Z][a-zA-Z]*[\s/>]/,  // 組件標籤 <ComponentName
    /<\/[A-Z][a-zA-Z]*>/,      // 組件關閉標籤 </ComponentName>
    /return\s*\(\s*</,          // return (<
    /=>\s*\(\s*</,              // => (<
    /=>\s*</,                   // => <
    /useState\s*\(/,            // React hooks
    /useEffect\s*\(/,
    /useRef\s*\(/,
    /useMemo\s*\(/,
    /useCallback\s*\(/
  ];

  // 移除了 /\{.*?\}/ 模式，因為它會錯誤匹配 CSS 中的 {}
  return jsxPatterns.some(pattern => pattern.test(codeWithoutStyleScript));
}

/**
 * 檢測代碼是否是完整的 React 組件
 */
export function isReactComponent(code) {
  if (!code || typeof code !== 'string') return false;

  const componentPatterns = [
    /function\s+[A-Z][a-zA-Z]*\s*\(/,  // function ComponentName(
    /const\s+[A-Z][a-zA-Z]*\s*=.*=>/,   // const ComponentName = () =>
    /class\s+[A-Z][a-zA-Z]*\s+extends/  // class ComponentName extends
  ];

  return componentPatterns.some(pattern => pattern.test(code));
}

/**
 * 使用 Sucrase 編譯 JSX
 * 動態加載編譯器以減少首次加載時間
 */
export async function compileJSX(jsxCode, options = {}) {
  const {
    useCache = true,
    componentName = 'App'
  } = options;

  if (!jsxCode || typeof jsxCode !== 'string') {
    throw new Error('無效的 JSX 代碼');
  }

  // 檢查緩存
  const cacheKey = simpleHash(jsxCode);
  if (useCache && compilationCache.has(cacheKey)) {
    return compilationCache.get(cacheKey);
  }

  try {
    // 動態加載 Sucrase
    const { transform } = await import('sucrase');

    // 包裝用戶代碼為完整的可執行模塊
    let wrappedCode = jsxCode;

    // 如果代碼不是完整的組件，嘗試包裝它
    if (!isReactComponent(jsxCode) && containsJSX(jsxCode)) {
      wrappedCode = `
function ${componentName}() {
  ${jsxCode}
}
`;
    }

    // 使用 Sucrase 轉換 JSX
    const result = transform(wrappedCode, {
      transforms: ['jsx', 'imports'],
      jsxPragma: 'h',
      jsxFragmentPragma: 'Fragment',
      production: true
    });

    const compiledCode = result.code;

    // 緩存結果
    if (useCache) {
      compilationCache.set(cacheKey, compiledCode);

      // 限制緩存大小
      if (compilationCache.size > 100) {
        const firstKey = compilationCache.keys().next().value;
        compilationCache.delete(firstKey);
      }
    }

    return compiledCode;

  } catch (error) {
    // 增強錯誤信息
    const enhancedError = new Error(
      `JSX 編譯錯誤: ${error.message}`
    );
    enhancedError.originalError = error;
    enhancedError.sourceCode = jsxCode;

    throw enhancedError;
  }
}

/**
 * 編譯並包裝為可在 iframe 中執行的完整代碼
 */
export async function compileForIframe(jsxCode, options = {}) {
  const {
    componentName = 'App',
    mountId = 'root'
  } = options;

  const compiledCode = await compileJSX(jsxCode, { ...options, componentName });

  // 包裝為完整的可執行模塊
  return `
(function() {
  const { h, render, Fragment, useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, createContext } = window.preact;
  const { useSignal } = window.preactSignals || {};

  ${compiledCode}

  // 渲染組件
  const container = document.getElementById('${mountId}');
  if (container) {
    render(h(${componentName}, null), container);
  }
})();
`;
}

/**
 * 清除編譯緩存
 */
export function clearCompilationCache() {
  compilationCache.clear();
}

/**
 * 獲取緩存統計信息
 */
export function getCacheStats() {
  return {
    size: compilationCache.size,
    keys: Array.from(compilationCache.keys())
  };
}

export default {
  containsJSX,
  isReactComponent,
  compileJSX,
  compileForIframe,
  clearCompilationCache,
  getCacheStats
};
