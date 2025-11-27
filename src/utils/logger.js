/**
 * 統一日誌工具
 *
 * 功能：
 * - 生產環境自動禁用 log 和 debug
 * - 保留 warn 和 error 用於問題追蹤
 * - 支持上下文前綴
 * - 符合 ESLint no-console 規則
 */

const isDev = import.meta.env.DEV;

/**
 * 創建帶上下文的日誌器
 * @param {string} context - 日誌上下文/模組名稱
 * @returns {Object} 日誌方法對象
 */
export function createLogger(context) {
  const prefix = context ? `[${context}]` : '';

  return {
    /**
     * 調試日誌（僅開發環境）
     */
    debug: (...args) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.log(prefix, ...args);
      }
    },

    /**
     * 信息日誌（僅開發環境）
     */
    info: (...args) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.log(prefix, '📘', ...args);
      }
    },

    /**
     * 成功日誌（僅開發環境）
     */
    success: (...args) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.log(prefix, '✅', ...args);
      }
    },

    /**
     * 警告日誌（所有環境）
     */
    warn: (...args) => {
      console.warn(prefix, ...args);
    },

    /**
     * 錯誤日誌（所有環境）
     */
    error: (...args) => {
      console.error(prefix, ...args);
    },

    /**
     * 分組日誌（僅開發環境）
     */
    group: (label, fn) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.group(prefix, label);
        fn();
        // eslint-disable-next-line no-console
        console.groupEnd();
      }
    },

    /**
     * 性能計時（僅開發環境）
     */
    time: (label) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.time(`${prefix} ${label}`);
      }
    },

    /**
     * 結束計時（僅開發環境）
     */
    timeEnd: (label) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.timeEnd(`${prefix} ${label}`);
      }
    }
  };
}

// 默認日誌器（無上下文）
export const logger = createLogger('');

// 預定義的模組日誌器
export const previewLogger = createLogger('Preview');
export const storeLogger = createLogger('Store');
export const routerLogger = createLogger('Router');
export const i18nLogger = createLogger('i18n');

export default logger;
