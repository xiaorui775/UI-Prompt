/**
 * useRemoteCategories - 統一的遠端分類數據加載 Hook
 *
 * 為列表頁面提供統一的數據加載、錯誤處理和重試機制。
 * 適用於 AllStylesPage 和 AllComponentsPage。
 *
 * @module hooks/useRemoteCategories
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { createLogger } from '../utils/logger';

const logger = createLogger('useRemoteCategories');

/**
 * 遠端分類數據加載 Hook
 *
 * @param {Function} loaderFn - 加載函數 (例如 loadComponentCategories 或 loadStyleMetadataOnly)
 * @param {Object} [options] - 可選配置
 * @param {string} [options.loggerName] - Logger 名稱（用於調試）
 * @param {boolean} [options.loadOnMount] - 是否在掛載時自動加載（默認 true）
 * @returns {Object} 狀態和操作
 * @returns {Array} returns.data - 加載的分類數據
 * @returns {boolean} returns.isLoading - 是否正在加載
 * @returns {boolean} returns.isError - 是否發生錯誤
 * @returns {Error|null} returns.error - 錯誤對象（如果有）
 * @returns {Function} returns.retry - 重試函數
 * @returns {Function} returns.refresh - 強制刷新函數
 *
 * @example
 * // 在 AllComponentsPage 中使用
 * import { loadComponentCategories } from '../data/components/loaders';
 *
 * function AllComponentsPage() {
 *   const { data: categories, isLoading, isError, retry } = useRemoteCategories(
 *     loadComponentCategories,
 *     { loggerName: 'AllComponentsPage' }
 *   );
 *
 *   if (isLoading) return <Skeleton />;
 *   if (isError) return <ErrorState onRetry={retry} />;
 *   return <CategoryList data={categories} />;
 * }
 *
 * @example
 * // 在 AllStylesPage 中使用
 * import { loadStyleMetadataOnly } from '../data/components/loaders';
 *
 * function AllStylesPage() {
 *   const { data: categories, isLoading, isError } = useRemoteCategories(
 *     loadStyleMetadataOnly,
 *     { loggerName: 'AllStylesPage' }
 *   );
 *   // ...
 * }
 */
export function useRemoteCategories(loaderFn, options = {}) {
  const {
    loggerName = 'RemoteCategories',
    loadOnMount = true
  } = options;

  // State
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(loadOnMount);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // Refs for cleanup
  const mountedRef = useRef(true);
  const loaderRef = useRef(loaderFn);

  // Keep loader ref updated
  useEffect(() => {
    loaderRef.current = loaderFn;
  }, [loaderFn]);

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /**
   * 重試加載（不清除緩存）
   */
  const retry = useCallback(() => {
    setRetryCount((c) => c + 1);
  }, []);

  /**
   * 強制刷新（清除緩存）
   */
  const refresh = useCallback(() => {
    setRetryCount((c) => c + 1);
  }, []);

  // Main loading effect
  useEffect(() => {
    if (!loadOnMount && retryCount === 0) {
      return;
    }

    const loadData = async () => {
      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        // 重試時強制刷新緩存
        const forceRefresh = retryCount > 0;
        const result = await loaderRef.current(forceRefresh);

        if (mountedRef.current) {
          setData(result || []);
          setIsError(false);
        }
      } catch (err) {
        if (mountedRef.current) {
          logger.error(`[${loggerName}] Failed to load categories`, err);
          setIsError(true);
          setError(err);
        }
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
        }
      }
    };

    loadData();
  }, [retryCount, loadOnMount, loggerName]);

  return {
    data,
    isLoading,
    isError,
    error,
    retry,
    refresh
  };
}

export default useRemoteCategories;
