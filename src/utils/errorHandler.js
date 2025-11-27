/**
 * 統一錯誤處理工具模組
 *
 * 提供一致的錯誤處理模式，用於替代分散的 try-catch 邏輯
 *
 * 使用方式:
 * - 同步操作: tryCatch(() => riskyOperation())
 * - 異步操作: await asyncTryCatch(async () => await fetchData())
 * - 帶 fallback: tryCatch(() => parseJSON(str), {})
 * - 帶錯誤回調: tryCatch(() => op(), null, { onError: (e) => showToast(e.message) })
 */

// ===== 錯誤類型定義 =====

/**
 * 應用級別錯誤 - 用於預期的業務邏輯錯誤
 */
export class AppError extends Error {
  constructor(message, code = 'APP_ERROR', details = null) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.details = details;
    this.timestamp = new Date().toISOString();
  }
}

/**
 * 網絡錯誤
 */
export class NetworkError extends AppError {
  constructor(message, status = null, details = null) {
    super(message, 'NETWORK_ERROR', details);
    this.name = 'NetworkError';
    this.status = status;
  }
}

/**
 * 驗證錯誤
 */
export class ValidationError extends AppError {
  constructor(message, field = null, details = null) {
    super(message, 'VALIDATION_ERROR', details);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// ===== 核心錯誤處理函數 =====

/**
 * 同步 try-catch 包裝器
 * @param {Function} fn - 要執行的函數
 * @param {*} fallback - 錯誤時的默認返回值
 * @param {Object} options - 配置選項
 * @param {Function} options.onError - 錯誤回調函數
 * @param {boolean} options.rethrow - 是否重新拋出錯誤
 * @param {string} options.context - 錯誤上下文描述
 * @returns {*} 函數返回值或 fallback
 */
export function tryCatch(fn, fallback = null, options = {}) {
  const { onError, rethrow = false, context = '' } = options;

  try {
    return fn();
  } catch (error) {
    const enhancedError = enhanceError(error, context);

    // 記錄錯誤（僅在開發環境）
    if (import.meta.env.DEV) {
      console.error(`[ErrorHandler${context ? `: ${context}` : ''}]`, enhancedError);
    }

    // 執行錯誤回調
    if (onError && typeof onError === 'function') {
      onError(enhancedError);
    }

    // 重新拋出錯誤
    if (rethrow) {
      throw enhancedError;
    }

    return fallback;
  }
}

/**
 * 異步 try-catch 包裝器
 * @param {Function} asyncFn - 要執行的異步函數
 * @param {*} fallback - 錯誤時的默認返回值
 * @param {Object} options - 配置選項（同 tryCatch）
 * @returns {Promise<*>} 函數返回值或 fallback
 */
export async function asyncTryCatch(asyncFn, fallback = null, options = {}) {
  const { onError, rethrow = false, context = '' } = options;

  try {
    return await asyncFn();
  } catch (error) {
    const enhancedError = enhanceError(error, context);

    // 記錄錯誤（僅在開發環境）
    if (import.meta.env.DEV) {
      console.error(`[AsyncErrorHandler${context ? `: ${context}` : ''}]`, enhancedError);
    }

    // 執行錯誤回調
    if (onError && typeof onError === 'function') {
      onError(enhancedError);
    }

    // 重新拋出錯誤
    if (rethrow) {
      throw enhancedError;
    }

    return fallback;
  }
}

/**
 * 創建帶重試機制的異步操作
 * @param {Function} asyncFn - 要執行的異步函數
 * @param {Object} options - 配置選項
 * @param {number} options.maxRetries - 最大重試次數 (默認 3)
 * @param {number} options.delay - 重試間隔毫秒數 (默認 1000)
 * @param {Function} options.shouldRetry - 判斷是否應該重試的函數
 * @returns {Promise<*>} 函數返回值
 */
export async function withRetry(asyncFn, options = {}) {
  const {
    maxRetries = 3,
    delay = 1000,
    shouldRetry = () => true,
    onRetry,
    context = ''
  } = options;

  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await asyncFn();
    } catch (error) {
      lastError = enhanceError(error, context);

      if (attempt < maxRetries && shouldRetry(error, attempt)) {
        if (import.meta.env.DEV) {
          console.warn(`[Retry ${attempt}/${maxRetries}${context ? `: ${context}` : ''}]`, error.message);
        }

        if (onRetry && typeof onRetry === 'function') {
          onRetry(error, attempt);
        }

        await sleep(delay * attempt); // 指數退避
      } else {
        break;
      }
    }
  }

  throw lastError;
}

// ===== React 專用錯誤處理 =====

/**
 * 創建 React 組件的錯誤狀態處理器
 * @param {Function} setError - React setState 函數
 * @param {Function} setLoading - 可選的 loading 狀態函數
 * @returns {Object} 包含 handleError 和 clearError 的對象
 */
export function createErrorState(setError, setLoading = null) {
  return {
    handleError: (error, context = '') => {
      const enhancedError = enhanceError(error, context);

      if (import.meta.env.DEV) {
        console.error(`[ComponentError${context ? `: ${context}` : ''}]`, enhancedError);
      }

      setError({
        message: enhancedError.message,
        code: enhancedError.code || 'UNKNOWN_ERROR',
        details: enhancedError.details,
        timestamp: enhancedError.timestamp || new Date().toISOString()
      });

      if (setLoading) {
        setLoading(false);
      }
    },
    clearError: () => {
      setError(null);
    }
  };
}

/**
 * 用於 async useEffect 的安全執行器
 * @param {Function} asyncFn - 異步函數
 * @param {Object} options - 配置選項
 * @returns {Function} 清理函數
 */
export function safeAsyncEffect(asyncFn, options = {}) {
  const { onError, context = '' } = options;
  let isCancelled = false;

  (async () => {
    try {
      await asyncFn(() => isCancelled);
    } catch (error) {
      if (!isCancelled) {
        const enhancedError = enhanceError(error, context);

        if (import.meta.env.DEV) {
          console.error(`[AsyncEffect${context ? `: ${context}` : ''}]`, enhancedError);
        }

        if (onError && typeof onError === 'function') {
          onError(enhancedError);
        }
      }
    }
  })();

  return () => {
    isCancelled = true;
  };
}

// ===== 輔助函數 =====

/**
 * 增強錯誤信息
 * @param {Error} error - 原始錯誤
 * @param {string} context - 上下文描述
 * @returns {Error} 增強後的錯誤
 */
function enhanceError(error, context) {
  if (error instanceof AppError) {
    if (context && !error.context) {
      error.context = context;
    }
    return error;
  }

  const enhanced = new AppError(
    error.message || 'Unknown error occurred',
    error.code || 'UNKNOWN_ERROR',
    {
      originalError: error.name,
      stack: error.stack,
      context
    }
  );

  return enhanced;
}

/**
 * 休眠函數
 * @param {number} ms - 毫秒數
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 格式化錯誤為用戶友好的消息
 * @param {Error} error - 錯誤對象
 * @param {string} language - 語言代碼 ('zh-CN' | 'en-US')
 * @returns {string} 用戶友好的錯誤消息
 */
export function formatErrorMessage(error, language = 'zh-CN') {
  const messages = {
    'zh-CN': {
      NETWORK_ERROR: '網絡連接失敗，請檢查您的網絡設置',
      VALIDATION_ERROR: '輸入數據驗證失敗',
      APP_ERROR: '操作失敗，請稍後重試',
      UNKNOWN_ERROR: '發生未知錯誤'
    },
    'en-US': {
      NETWORK_ERROR: 'Network connection failed, please check your network settings',
      VALIDATION_ERROR: 'Input validation failed',
      APP_ERROR: 'Operation failed, please try again later',
      UNKNOWN_ERROR: 'An unknown error occurred'
    }
  };

  const lang = messages[language] || messages['zh-CN'];
  const code = error.code || 'UNKNOWN_ERROR';

  return lang[code] || error.message || lang.UNKNOWN_ERROR;
}

// ===== 導出默認錯誤處理器 =====

export default {
  tryCatch,
  asyncTryCatch,
  withRetry,
  createErrorState,
  safeAsyncEffect,
  formatErrorMessage,
  AppError,
  NetworkError,
  ValidationError
};

/**
 * 使用 ErrorBoundary 的推薦方式：
 *
 * 1. 直接包裝組件：
 * import ErrorBoundary from '../components/ErrorBoundary';
 *
 * <ErrorBoundary fallback={<div>Error occurred</div>}>
 *   <YourComponent />
 * </ErrorBoundary>
 *
 * 2. 在路由中使用（已配置）：
 * 所有路由已通過 RouteError 組件處理錯誤
 */
