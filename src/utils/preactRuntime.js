/**
 * Preact 運行時生成器
 * 為 iframe 創建完整的 Preact 執行環境
 */

// Preact CDN URLs (使用 esm.sh 獲得更好的兼容性)
const PREACT_CDN = 'https://esm.sh/preact@10.24.0';
const PREACT_HOOKS_CDN = 'https://esm.sh/preact@10.24.0/hooks';

/**
 * 生成 iframe 的完整 HTML 文檔
 */
export function generatePreactIframeHTML(options = {}) {
  const {
    compiledCode = '',
    customStyles = '',
    title = 'Preact Preview',
    tailwindVersion = '3.4.0',
    mountId = 'root',
    theme = 'light'
  } = options;

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com/${tailwindVersion}"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {}
      }
    }
  </script>

  <!-- Preact UMD Bundle -->
  <script src="https://unpkg.com/preact@10.24.0/dist/preact.umd.js"></script>
  <script src="https://unpkg.com/preact@10.24.0/hooks/dist/hooks.umd.js"></script>

  <!-- 設置全局變量 -->
  <script>
    // 將 Preact 暴露為全局變量
    window.preact = {
      h: preact.h,
      render: preact.render,
      Fragment: preact.Fragment,
      Component: preact.Component,
      createContext: preact.createContext,
      createRef: preact.createRef,
      cloneElement: preact.cloneElement,
      // Hooks
      useState: preactHooks.useState,
      useEffect: preactHooks.useEffect,
      useRef: preactHooks.useRef,
      useMemo: preactHooks.useMemo,
      useCallback: preactHooks.useCallback,
      useReducer: preactHooks.useReducer,
      useContext: preactHooks.useContext,
      useLayoutEffect: preactHooks.useLayoutEffect,
      useImperativeHandle: preactHooks.useImperativeHandle,
      useDebugValue: preactHooks.useDebugValue,
      useErrorBoundary: preactHooks.useErrorBoundary,
      useId: preactHooks.useId
    };

    // 為了與 React 代碼兼容，也暴露為 React
    window.React = window.preact;
    window.ReactDOM = {
      render: preact.render,
      hydrate: preact.hydrate,
      createPortal: preact.createPortal
    };
  </script>

  <!-- 自定義樣式 -->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      min-height: 100vh;
    }

    #${mountId} {
      min-height: 100vh;
    }

    /* 錯誤顯示樣式 */
    .runtime-error {
      background: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
      padding: 16px;
      border-radius: 8px;
      margin: 16px;
      font-family: monospace;
      white-space: pre-wrap;
    }

    ${customStyles}
  </style>
</head>
<body>
  <div id="${mountId}"></div>

  <!-- 錯誤處理 -->
  <script>
    window.onerror = function(message, source, lineno, colno, error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = \`
          <div class="runtime-error">
            <strong>運行時錯誤:</strong>
            <br/>\${message}
            <br/>位置: 第 \${lineno} 行, 第 \${colno} 列
          </div>
        \`;
      }
      return true;
    };
  </script>

  <!-- 用戶代碼 -->
  <script>
    try {
      ${compiledCode}
    } catch (error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = \`
          <div class="runtime-error">
            <strong>執行錯誤:</strong>
            <br/>\${error.message}
            <br/>\${error.stack || ''}
          </div>
        \`;
      }
    }
  </script>
</body>
</html>`;
}

/**
 * 生成支持 Framer Motion 替代品的 HTML
 * 使用 @preact/signals 和 CSS 動畫
 */
export function generatePreactWithAnimationHTML(options = {}) {
  const {
    compiledCode = '',
    customStyles = '',
    title = 'Preact Preview with Animation',
    mountId = 'root',
    theme = 'light'
  } = options;

  return `<!DOCTYPE html>
<html lang="en" class="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Preact + Signals -->
  <script src="https://unpkg.com/preact@10.24.0/dist/preact.umd.js"></script>
  <script src="https://unpkg.com/preact@10.24.0/hooks/dist/hooks.umd.js"></script>
  <script src="https://unpkg.com/@preact/signals-core@1.8.0/dist/signals-core.umd.js"></script>
  <script src="https://unpkg.com/@preact/signals@1.3.0/dist/signals.umd.js"></script>

  <script>
    // 設置全局變量
    window.preact = {
      h: preact.h,
      render: preact.render,
      Fragment: preact.Fragment,
      Component: preact.Component,
      createContext: preact.createContext,
      useState: preactHooks.useState,
      useEffect: preactHooks.useEffect,
      useRef: preactHooks.useRef,
      useMemo: preactHooks.useMemo,
      useCallback: preactHooks.useCallback,
      useReducer: preactHooks.useReducer,
      useContext: preactHooks.useContext
    };

    // Signals 作為動畫狀態管理
    window.preactSignals = {
      signal: preactSignals.signal,
      computed: preactSignals.computed,
      effect: preactSignals.effect,
      batch: preactSignals.batch,
      useSignal: preactSignals.useSignal,
      useComputed: preactSignals.useComputed
    };

    window.React = window.preact;
  </script>

  <!-- 動畫工具函數 -->
  <script>
    // 簡單的動畫工具函數，模擬 Framer Motion 的基本功能
    window.motion = {
      // 創建動畫組件
      div: function(props) {
        const { initial, animate, transition, ...rest } = props;
        const style = { ...rest.style };

        if (animate) {
          Object.keys(animate).forEach(key => {
            style[key] = animate[key];
          });
        }

        if (transition) {
          style.transition = \`all \${transition.duration || 0.3}s \${transition.ease || 'ease'}\`;
        }

        return preact.h('div', { ...rest, style });
      },

      // 其他常用元素
      span: function(props) {
        return this.div({ ...props, as: 'span' });
      },

      button: function(props) {
        const { initial, animate, transition, whileHover, whileTap, ...rest } = props;
        return preact.h('button', rest);
      }
    };

    // AnimatePresence 的簡單實現
    window.AnimatePresence = function({ children }) {
      return children;
    };
  </script>

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .runtime-error {
      background: #fee2e2;
      border: 1px solid #ef4444;
      color: #dc2626;
      padding: 16px;
      border-radius: 8px;
      margin: 16px;
      font-family: monospace;
    }

    ${customStyles}
  </style>
</head>
<body>
  <div id="${mountId}"></div>

  <script>
    window.onerror = function(message, source, lineno, colno, error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="runtime-error"><strong>Error:</strong> ' + message + '</div>';
      }
      return true;
    };
  </script>

  <script>
    try {
      ${compiledCode}
    } catch (error) {
      const container = document.getElementById('${mountId}');
      if (container) {
        container.innerHTML = '<div class="runtime-error"><strong>Error:</strong> ' + error.message + '</div>';
      }
    }
  </script>
</body>
</html>`;
}

/**
 * 獲取 Preact 版本信息
 */
export function getPreactVersion() {
  return {
    preact: '10.24.0',
    hooks: '10.24.0',
    signals: '1.3.0'
  };
}

/**
 * 計算預計的總體積（KB）
 */
export function estimateBundleSize(options = {}) {
  const {
    includeSignals = false,
    includeAnimation = false
  } = options;

  let total = 0;

  // 基礎 Preact
  total += 4;   // preact core
  total += 2;   // hooks

  // 可選
  if (includeSignals) {
    total += 3; // signals
  }

  if (includeAnimation) {
    total += 1; // 簡單動畫工具
  }

  // Tailwind CSS (from CDN, 按需生成)
  total += 0; // CDN 不計入本地 bundle

  return {
    total: `~${total}KB`,
    breakdown: {
      preact: '4KB',
      hooks: '2KB',
      signals: includeSignals ? '3KB' : '0KB',
      animation: includeAnimation ? '1KB' : '0KB'
    },
    note: 'Tailwind CSS 從 CDN 加載，不計入 bundle'
  };
}

export default {
  generatePreactIframeHTML,
  generatePreactWithAnimationHTML,
  getPreactVersion,
  estimateBundleSize
};
