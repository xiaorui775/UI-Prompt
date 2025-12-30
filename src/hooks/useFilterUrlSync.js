import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from './useDebounce';
import {
  getArrayParam,
  setArrayParam,
  getStringParam,
  setStringParam,
  filterValidCategories,
  filterValidTags
} from '../utils/urlParamsHelper';
import { primaryCategories, allTags } from '../data/metadata/categoryMetadata';

/**
 * useFilterUrlSync - AllStylesPage 篩選狀態 ↔ URL 同步 Hook
 * Filter state to URL synchronization hook for AllStylesPage
 *
 * 🚀 性能優化：
 * - 搜索關鍵字使用 debounce（300ms）減少篩選計算頻率
 * - 分類/標籤切換立即同步（無需 debounce）
 *
 * 🛠️ Task 6: URL 同步時序說明
 * ────────────────────────────────────────────────────
 * | 操作類型     | UI 更新  | 篩選計算  | URL 同步  |
 * |-------------|----------|----------|----------|
 * | 搜索關鍵字   | 即時     | 300ms    | 300ms    |
 * | 分類切換     | 即時     | 即時     | 即時     |
 * | 標籤切換     | 即時     | 即時     | 即時     |
 * | 匹配模式     | 即時     | 即時     | 即時     |
 * ────────────────────────────────────────────────────
 *
 * 使用範例：
 * - UI 顯示：使用 `filters.keyword`（即時反映用戶輸入）
 * - 篩選計算：使用 `debouncedFilters`（減少計算頻率）
 * - URL 反映：關鍵字延遲 300ms，其他即時
 *
 * 功能 Features:
 * - 從 URL 初始化篩選狀態 - Initialize filter state from URL
 * - 搜索關鍵字防抖同步到 URL - Debounced sync keyword to URL
 * - 分類/標籤立即同步到 URL - Immediate sync categories/tags to URL
 * - 監聯 URL 變化（支持瀏覽器前進/後退）- Listen to URL changes (browser back/forward)
 * - 提供 clearFilters 方法 - Provide clearFilters method
 *
 * @returns {Object}
 *   - filters: 當前篩選狀態對象（即時）- Current filter state (immediate)
 *   - debouncedFilters: 防抖後的篩選狀態（用於實際篩選）- Debounced filter state (for actual filtering)
 *   - setFilters: 更新篩選狀態（同時同步 URL）- Update filters (sync to URL)
 *   - clearFilters: 清除所有篩選（導航到乾淨 URL）- Clear all filters (navigate to clean URL)
 */
export function useFilterUrlSync() {
  const [searchParams, setSearchParams] = useSearchParams();

  // ========== 1. 從 URL 初始化狀態（僅一次）==========
  // Initialize state from URL (only once)
  const initialFilters = useMemo(() => {
    const keyword = getStringParam(searchParams, 'q');
    const categories = getArrayParam(searchParams, 'categories');
    const tags = getArrayParam(searchParams, 'tags');
    const matchMode = getStringParam(searchParams, 'matchMode', 'any');

    // 有效分類 ID 列表 - Valid category IDs list
    const validCategoryIds = Object.keys(primaryCategories);

    return {
      keyword,
      categories: filterValidCategories(categories, validCategoryIds),
      tags: filterValidTags(tags, allTags),
      matchMode: ['any', 'all'].includes(matchMode) ? matchMode : 'any'
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [filters, setFiltersInternal] = useState(initialFilters);

  // ========== 2. Debounce 搜索關鍵字 ==========
  // Debounce search keyword for performance optimization
  const debouncedKeyword = useDebounce(filters.keyword, 300);

  // 使用 ref 追蹤上一次同步的 debounced 值（避免重複同步）
  // Use ref to track last synced debounced value (avoid duplicate sync)
  const lastSyncedKeyword = useRef(initialFilters.keyword);

  // 計算防抖後的完整篩選狀態（用於實際篩選）
  // Compute debounced filters for actual filtering
  const debouncedFilters = useMemo(() => ({
    ...filters,
    keyword: debouncedKeyword
  }), [filters, debouncedKeyword]);

  // ========== 3. 搜索關鍵字 debounced 同步到 URL ==========
  // Debounced sync keyword to URL
  useEffect(() => {
    if (debouncedKeyword === lastSyncedKeyword.current) {
      return; // 已同步，跳過 - Already synced, skip
    }

    lastSyncedKeyword.current = debouncedKeyword;

    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      setStringParam(newParams, 'q', debouncedKeyword);
      return newParams;
    }, { replace: true });
  }, [debouncedKeyword, setSearchParams]);

  // ========== 4. 更新篩選（分類/標籤立即同步 URL，關鍵字由 debounce 處理）==========
  // Update filters (categories/tags sync immediately, keyword handled by debounce)
  const setFilters = useCallback((newFilters) => {
    setFiltersInternal(newFilters);

    // 分類/標籤/匹配模式立即同步到 URL
    // Sync categories/tags/matchMode to URL immediately
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);

      // 分類（陣列）- Categories (array)
      setArrayParam(newParams, 'categories', newFilters.categories);

      // 標籤（陣列）- Tags (array)
      setArrayParam(newParams, 'tags', newFilters.tags);

      // 匹配模式（僅在非默認值時保留）- Match mode (only keep if non-default)
      if (newFilters.matchMode === 'all') {
        newParams.set('matchMode', 'all');
      } else {
        newParams.delete('matchMode'); // 默認值不顯示在 URL
      }

      // 注意：關鍵字不在這裡同步，由 debounce effect 處理
      // Note: keyword is NOT synced here, handled by debounce effect

      return newParams;
    }, { replace: true }); // 使用 replace 避免污染瀏覽器歷史
  }, [setSearchParams]);

  // ========== 5. 清除篩選 ==========
  // Clear all filters
  const clearFilters = useCallback(() => {
    const emptyFilters = {
      keyword: '',
      categories: [],
      tags: [],
      matchMode: 'any'
    };
    setFiltersInternal(emptyFilters);
    lastSyncedKeyword.current = ''; // 重置追蹤 - Reset tracking

    // 導航到乾淨 URL（移除所有篩選參數）
    // Navigate to clean URL (remove all filter params)
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  // ========== 6. 監聽 URL 變化（處理瀏覽器前進/後退）==========
  // Listen to URL changes (handle browser back/forward)
  useEffect(() => {
    const keyword = getStringParam(searchParams, 'q');
    const categories = getArrayParam(searchParams, 'categories');
    const tags = getArrayParam(searchParams, 'tags');
    const matchMode = getStringParam(searchParams, 'matchMode', 'any');

    const validCategoryIds = Object.keys(primaryCategories);

    const urlFilters = {
      keyword,
      categories: filterValidCategories(categories, validCategoryIds),
      tags: filterValidTags(tags, allTags),
      matchMode: ['any', 'all'].includes(matchMode) ? matchMode : 'any'
    };

    // 僅在實際變化時更新狀態（避免循環）
    // Only update state when actually changed (avoid loop)
    setFiltersInternal(prev => {
      if (
        prev.keyword === urlFilters.keyword &&
        JSON.stringify(prev.categories) === JSON.stringify(urlFilters.categories) &&
        JSON.stringify(prev.tags) === JSON.stringify(urlFilters.tags) &&
        prev.matchMode === urlFilters.matchMode
      ) {
        return prev; // 無變化，不觸發重渲染 - No change, don't trigger re-render
      }
      return urlFilters;
    });
  }, [searchParams]);

  return {
    filters,
    debouncedFilters,
    setFilters,
    clearFilters
  };
}
