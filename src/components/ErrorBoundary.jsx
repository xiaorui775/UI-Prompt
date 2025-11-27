import { Component } from 'react';
import { formatErrorMessage } from '../utils/errorHandler';

/**
 * 通用錯誤邊界組件
 *
 * 用於捕獲子組件樹中的 JavaScript 錯誤，防止整個應用崩潰
 *
 * 使用方式:
 * <ErrorBoundary fallback={<CustomError />}>
 *   <YourComponent />
 * </ErrorBoundary>
 *
 * 或使用默認 UI:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染顯示降級 UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 記錄錯誤信息
    this.setState({ errorInfo });

    // 開發環境下輸出錯誤
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary] Caught error:', error);
      console.error('[ErrorBoundary] Component stack:', errorInfo?.componentStack);
    }

    // 調用外部錯誤處理回調
    if (this.props.onError && typeof this.props.onError === 'function') {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });

    // 調用外部重置回調
    if (this.props.onReset && typeof this.props.onReset === 'function') {
      this.props.onReset();
    }
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, FallbackComponent, language = 'zh-CN' } = this.props;

    if (hasError) {
      // 優先使用自定義 fallback
      if (fallback) {
        return fallback;
      }

      // 使用 FallbackComponent（帶 props）
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={error}
            errorInfo={errorInfo}
            resetError={this.handleReset}
          />
        );
      }

      // 默認錯誤 UI
      return (
        <DefaultErrorUI
          error={error}
          errorInfo={errorInfo}
          onReset={this.handleReset}
          language={language}
        />
      );
    }

    return children;
  }
}

/**
 * 默認錯誤 UI 組件（Minimalism 風格）
 */
function DefaultErrorUI({ error, errorInfo, onReset, language }) {
  const isDev = import.meta.env.DEV;

  const messages = {
    'zh-CN': {
      title: '組件渲染錯誤',
      subtitle: '此區域發生了意外錯誤',
      retry: '重試',
      reload: '重新加載頁面',
      details: '錯誤詳情'
    },
    'en-US': {
      title: 'Component Render Error',
      subtitle: 'An unexpected error occurred in this area',
      retry: 'Retry',
      reload: 'Reload Page',
      details: 'Error Details'
    }
  };

  const t = messages[language] || messages['zh-CN'];

  return (
    <div className="min-h-[200px] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {t.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Error Message */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
          {formatErrorMessage(error, language)}
        </p>

        {/* Dev Mode: Show Stack Trace */}
        {isDev && errorInfo?.componentStack && (
          <details className="mb-4">
            <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
              {t.details}
            </summary>
            <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 overflow-auto max-h-40">
              {error?.stack || errorInfo.componentStack}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            {t.retry}
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-3 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          >
            {t.reload}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;

// Note: withErrorBoundary HOC moved to utils/errorHandler.js to avoid react-refresh warnings
