// 事件驱动系统 - EventBus
// 用于导览教学系统的步骤自动前进

class TutorialEventBus {
  constructor() {
    this.listeners = {};
    this.eventHistory = []; // 记录事件历史
  }

  /**
   * 触发事件
   * @param {string} event - 事件名称
   * @param {any} data - 事件数据
   */
  emit(event, data = null) {
    // 记录事件历史
    this.eventHistory.push({
      event,
      data,
      timestamp: Date.now()
    });

    // 触发所有监听器
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in event listener for "${event}":`, error);
        }
      });
    }

    // 调试日志
    if (process.env.NODE_ENV === 'development') {
      console.log(`[TutorialEvent] ${event}`, data);
    }
  }

  /**
   * 注册事件监听器
   * @param {string} event - 事件名称
   * @param {Function} callback - 回调函数
   * @returns {Function} 取消监听的函数
   */
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);

    // 返回取消监听的函数
    return () => this.off(event, callback);
  }

  /**
   * 取消事件监听
   * @param {string} event - 事件名称
   * @param {Function} callback - 回调函数
   */
  off(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        cb => cb !== callback
      );
    }
  }

  /**
   * 一次性监听器（触发一次后自动取消）
   * @param {string} event - 事件名称
   * @param {Function} callback - 回调函数
   */
  once(event, callback) {
    const onceCallback = (data) => {
      callback(data);
      this.off(event, onceCallback);
    };
    this.on(event, onceCallback);
  }

  /**
   * 清空所有监听器
   */
  clear() {
    this.listeners = {};
    this.eventHistory = [];
  }

  /**
   * 获取事件历史
   */
  getHistory() {
    return this.eventHistory;
  }

  /**
   * 检查事件是否已触发
   * @param {string} event - 事件名称
   * @param {number} withinMs - 在多少毫秒内（可选）
   */
  hasTriggered(event, withinMs = null) {
    const found = this.eventHistory.find(item => item.event === event);
    if (!found) return false;

    if (withinMs !== null) {
      const elapsed = Date.now() - found.timestamp;
      return elapsed <= withinMs;
    }

    return true;
  }
}

// 创建单例实例
export const tutorialEvents = new TutorialEventBus();

// 导出事件名称常量（防止拼写错误）
export const TUTORIAL_EVENTS = {
  // 核心操作事件
  DRAG_START: 'dragStart',
  DROPPED: 'dropped',
  COMPONENT_SELECTED: 'componentSelected',
  PROP_CHANGED: 'propChanged',

  // 进阶功能事件
  PROMPT_GENERATED: 'promptGenerated',
  PROMPT_COPIED: 'promptCopied',
  EXPORT_OPENED: 'exportOpened',

  // 导览控制事件
  TUTORIAL_START: 'tutorialStart',
  TUTORIAL_COMPLETE: 'tutorialComplete',
  TUTORIAL_SKIP: 'tutorialSkip',
  STEP_CHANGE: 'stepChange',

  // 超时和帮助事件
  STEP_TIMEOUT: 'stepTimeout',
  HELP_REQUESTED: 'helpRequested',
  DEMO_PLAYED: 'demoPlayed'
};

// 辅助函数：等待特定事件触发
export function waitForEvent(event, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      tutorialEvents.off(event, handler);
      reject(new Error(`Event "${event}" timeout after ${timeout}ms`));
    }, timeout);

    const handler = (data) => {
      clearTimeout(timer);
      resolve(data);
    };

    tutorialEvents.once(event, handler);
  });
}
