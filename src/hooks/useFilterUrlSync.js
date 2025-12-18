import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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
 * 功能 Features:
 * - 從 URL 初始化篩選狀態 - Initialize filter state from URL
 * - 篩選變化時立即同步到 URL - Sync to URL immediately when filters change
 * - 監聽 URL 變化（支持瀏覽器前進/後退）- Listen to URL changes (browser back/forward)
 * - 提供 clearFilters 方法 - Provide clearFilters method
 *
 * @returns {Object}
 *   - filters: 當前篩選狀態對象 - Current filter state
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

  // ========== 2. 更新篩選並同步 URL ==========
  // Update filters and sync to URL
  const setFilters = useCallback((newFilters) => {
    setFiltersInternal(newFilters);

    // 立即同步到 URL（不 debounce，保持響應性）
    // Sync to URL immediately (no debounce, keep responsive)
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);

      // 關鍵字 - Keyword
      setStringParam(newParams, 'q', newFilters.keyword);

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

      return newParams;
    }, { replace: true }); // 使用 replace 避免污染瀏覽器歷史
  }, [setSearchParams]);

  // ========== 3. 清除篩選 ==========
  // Clear all filters
  const clearFilters = useCallback(() => {
    const emptyFilters = {
      keyword: '',
      categories: [],
      tags: [],
      matchMode: 'any'
    };
    setFiltersInternal(emptyFilters);

    // 導航到乾淨 URL（移除所有篩選參數）
    // Navigate to clean URL (remove all filter params)
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  // ========== 4. 監聽 URL 變化（處理瀏覽器前進/後退）==========
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
    setFilters,
    clearFilters
  };
}
