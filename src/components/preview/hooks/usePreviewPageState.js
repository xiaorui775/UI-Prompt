/**
 * usePreviewPageState - 預覽頁面狀態管理 Hook
 *
 * 用於 StylePreviewPage 組件，管理：
 * - UI 狀態 (showPrompt, isLoading, activeIndex)
 * - URL 參數初始化
 * - 鍵盤事件處理（ESC 關閉）
 * - PostMessage 通信（iframe 空狀態消息處理）
 * - Loading 超時後備
 *
 * @module usePreviewPageState
 */

import { useState, useEffect, useCallback } from 'react';

/**
 * 預覽頁面狀態管理 Hook
 *
 * @param {Object} options - 配置選項
 * @param {string} options.styleId - 風格 ID（用於依賴追蹤）
 * @param {Array} options.previewsList - 預覽列表數組
 * @param {string} options.defaultPreviewId - 默認預覽 ID
 * @param {URLSearchParams} options.searchParams - URL 搜索參數（從 useSearchParams 獲取）
 *
 * @returns {Object} 狀態和操作方法
 * @returns {boolean} returns.showPrompt - Prompt 抽屜是否顯示
 * @returns {Function} returns.setShowPrompt - 設置 Prompt 抽屜顯示狀態
 * @returns {boolean} returns.isLoading - 主加載狀態
 * @returns {Function} returns.setIsLoading - 設置主加載狀態
 * @returns {number} returns.activeIndex - 當前激活的預覽索引
 * @returns {Function} returns.setActiveIndex - 設置激活的預覽索引
 * @returns {boolean} returns.isFullPageMode - 是否為純 HTML 完整頁面模式
 * @returns {Function} returns.getDefaultIndex - 獲取默認預覽索引的回調
 *
 * @example
 * const { showPrompt, isLoading, activeIndex, setActiveIndex } = usePreviewPageState({
 *   styleId: 'glassmorphism-v1',
 *   previewsList: style.previews,
 *   defaultPreviewId: style.defaultPreviewId,
 *   searchParams
 * });
 */
export function usePreviewPageState({
  styleId,
  previewsList = [],
  defaultPreviewId = '',
  searchParams,
  language = 'en-US', // eslint-disable-line no-unused-vars -- Reserved for future i18n use
  isLoadingPreviewRef = null
}) {
  // ========== Core State ==========

  const [showPrompt, setShowPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndexState] = useState(0);

  /**
   * 統一的索引切換入口：先開啟遮罩再切換索引
   * 這可避免「索引已變更但遮罩尚未出現」導致的舊內容閃爍
   */
  const setActiveIndex = useCallback((next) => {
    setIsLoading(true);
    setActiveIndexState(next);
  }, []);

  // ========== Derived Values ==========

  /**
   * 檢測是否為「純 HTML 完整頁面」模式（無頂部 Header）
   * 從 URL 參數 ?full=1 或 ?fullpage=1 判斷
   */
  const isFullPageMode =
    searchParams.get('full') === '1' ||
    searchParams.get('fullpage') === '1';

  /**
   * 找到第一個 full 類型預覽的索引作為默認值
   * 優先匹配 defaultPreviewId，其次匹配 type === 'full'
   *
   * @returns {number} 默認預覽索引
   */
  const getDefaultIndex = useCallback(() => {
    if (previewsList && previewsList.length > 0) {
      // 優先匹配 defaultPreviewId
      if (defaultPreviewId) {
        const matchedIndex = previewsList.findIndex(p => p.id === defaultPreviewId);
        if (matchedIndex >= 0) {
          return matchedIndex;
        }
      }
      // 其次匹配第一個 full 類型
      const firstFullIndex = previewsList.findIndex(p => p.type === 'full');
      return firstFullIndex >= 0 ? firstFullIndex : 0;
    }
    return 0;
  }, [previewsList, defaultPreviewId]);

  // ========== Effects ==========

  /**
   * Effect 1: URL 參數初始化
   * 從 URL 參數讀取 previewIndex，如果無效則使用默認索引
   * 依賴: styleId, previewsList, searchParams
   */
  useEffect(() => {
    const urlPreviewIndex = searchParams.get('previewIndex');
    if (urlPreviewIndex !== null) {
      const index = parseInt(urlPreviewIndex, 10);
      // 驗證索引有效性
      if (!isNaN(index) && index >= 0 && index < previewsList.length) {
        setActiveIndexState(index);
      } else {
        setActiveIndexState(getDefaultIndex());
      }
    } else {
      setActiveIndexState(getDefaultIndex());
    }
    setIsLoading(true);
  }, [styleId, previewsList, searchParams, getDefaultIndex]);

  /**
   * Effect 2: Loading 超時後備
   * 如果 2 秒內未完成加載，強制關閉 Loading
   * 避免無限加載狀態
   */
  useEffect(() => {
    // 如果正在載入預覽內容（例如需要抓取 previewId / 編譯 JSX），不要太早關閉遮罩，
    // 否則可能出現「內容未準備好但遮罩先消失」的閃爍。
    // 仍保留最終上限，避免極端情況下無限 Loading。
    const CHECK_INTERVAL_MS = 2000;
    const MAX_LOADING_MS = 12000;

    const startedAt = Date.now();
    let timerId = null;

    const tick = () => {
      const elapsed = Date.now() - startedAt;
      const isPreviewLoading = Boolean(isLoadingPreviewRef?.current);

      if (!isPreviewLoading || elapsed >= MAX_LOADING_MS) {
        setIsLoading(false);
        return;
      }

      timerId = window.setTimeout(tick, CHECK_INTERVAL_MS);
    };

    timerId = window.setTimeout(tick, CHECK_INTERVAL_MS);

    return () => {
      if (timerId) window.clearTimeout(timerId);
    };
  }, [styleId, activeIndex, isLoadingPreviewRef]);

  /**
   * Effect 3: ESC 鍵關閉窗口
   * 監聽 Escape 鍵，關閉預覽窗口
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        window.close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  /**
   * Effect 4: PostMessage 通信處理
   * 監聽來自 iframe 空狀態頁面的消息
   * 當用戶點擊空狀態的「AI Prompt」按鈕時，觸發打開 Prompt 抽屜
   *
   * 安全性：僅接受同源消息
   */
  useEffect(() => {
    const handleMessage = (event) => {
      // 確保消息來自同源或可信來源
      if (event.origin !== window.location.origin) return;

      // 處理 openPrompt 動作
      if (event.data && event.data.action === 'openPrompt') {
        setShowPrompt(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // ========== Return ==========

  return {
    // UI 狀態
    showPrompt,
    setShowPrompt,
    isLoading,
    setIsLoading,
    activeIndex,
    setActiveIndex,

    // 計算值
    isFullPageMode,

    // 工具函數
    getDefaultIndex
  };
}

export default usePreviewPageState;
