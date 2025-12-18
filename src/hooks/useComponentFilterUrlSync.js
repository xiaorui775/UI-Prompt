import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from './useDebounce';
import {
  getStringParam,
  setStringParam,
  isValidCategory
} from '../utils/urlParamsHelper';

/**
 * useComponentFilterUrlSync - AllComponentsPage 篩選狀態 ↔ URL 同步
 * Filter state to URL synchronization hook for AllComponentsPage
 *
 * 特點 Features:
 *   - 搜索關鍵字使用 debounce（300ms）- Search query uses debounce (300ms)
 *   - 分類切換立即同步 - Category change syncs immediately
 *
 * @param {string[]} validCategoryIds - 有效分類 ID 列表 - Valid category IDs list
 * @returns {Object}
 *   - searchQuery: 當前搜索關鍵字 - Current search query
 *   - setSearchQuery: 更新搜索關鍵字 - Update search query
 *   - debouncedSearchQuery: 防抖後的搜索關鍵字（用於篩選）- Debounced search query (for filtering)
 *   - activeCategory: 當前分類 ID - Current category ID
 *   - setActiveCategory: 更新分類 - Update category
 *   - clearFilters: 清除所有篩選 - Clear all filters
 */
export function useComponentFilterUrlSync(validCategoryIds) {
  const [searchParams, setSearchParams] = useSearchParams();

  // ========== 1. 從 URL 初始化狀態（僅一次）==========
  // Initialize state from URL (only once)
  const initialSearchQuery = useMemo(() =>
    getStringParam(searchParams, 'q')
  , []); // eslint-disable-line react-hooks/exhaustive-deps

  const initialCategory = useMemo(() => {
    const cat = getStringParam(searchParams, 'category', 'all');
    return isValidCategory(cat, [...validCategoryIds, 'all']) ? cat : 'all';
  }, [validCategoryIds]); // eslint-disable-line react-hooks/exhaustive-deps

  const [searchQuery, setSearchQueryInternal] = useState(initialSearchQuery);
  const [activeCategory, setActiveCategoryInternal] = useState(initialCategory);

  // ========== 2. Debounce 搜索關鍵字 ==========
  // Debounce search query
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // 使用 ref 追蹤上一次同步的 debounced 值（避免重複同步）
  // Use ref to track last synced debounced value (avoid duplicate sync)
  const lastSyncedQuery = useRef(initialSearchQuery);

  // ========== 3. 搜索關鍵字 debounced 同步 ==========
  // Debounced sync search query to URL
  useEffect(() => {
    if (debouncedSearchQuery === lastSyncedQuery.current) {
      return; // 已同步，跳過 - Already synced, skip
    }

    lastSyncedQuery.current = debouncedSearchQuery;

    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      setStringParam(newParams, 'q', debouncedSearchQuery);
      return newParams;
    }, { replace: true });
  }, [debouncedSearchQuery, setSearchParams]);

  // ========== 4. 分類立即同步 ==========
  // Immediately sync category
  const setActiveCategory = useCallback((categoryId) => {
    setActiveCategoryInternal(categoryId);

    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (categoryId === 'all') {
        newParams.delete('category'); // 默認值不顯示 - Default value not shown
      } else {
        newParams.set('category', categoryId);
      }
      return newParams;
    }, { replace: true });
  }, [setSearchParams]);

  // ========== 5. 清除篩選 ==========
  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchQueryInternal('');
    setActiveCategoryInternal('all');
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  // ========== 6. 監聽 URL 變化（瀏覽器導航）==========
  // Listen to URL changes (browser navigation)
  useEffect(() => {
    const query = getStringParam(searchParams, 'q');
    const category = getStringParam(searchParams, 'category', 'all');

    setSearchQueryInternal(prev => query !== prev ? query : prev);

    const validCategory = isValidCategory(category, [...validCategoryIds, 'all'])
      ? category
      : 'all';
    setActiveCategoryInternal(prev => validCategory !== prev ? validCategory : prev);
  }, [searchParams, validCategoryIds]);

  return {
    searchQuery,
    setSearchQuery: setSearchQueryInternal,
    debouncedSearchQuery,
    activeCategory,
    setActiveCategory,
    clearFilters
  };
}
