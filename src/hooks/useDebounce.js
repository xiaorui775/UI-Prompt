import { useState, useEffect } from 'react';

/**
 * useDebounce - 防抖 hook
 *
 * 延遲更新值，直到停止變化一段時間後才更新。
 * 適用於搜索輸入、視窗調整等需要減少觸發頻率的場景。
 *
 * @param {any} value - 需要防抖的值
 * @param {number} delay - 延遲毫秒數 (預設 300ms)
 * @returns {any} 防抖後的值
 *
 * @example
 * const [searchQuery, setSearchQuery] = useState('');
 * const debouncedQuery = useDebounce(searchQuery, 300);
 *
 * // debouncedQuery 會在停止輸入 300ms 後更新
 * useEffect(() => {
 *   // 執行搜索...
 * }, [debouncedQuery]);
 */
export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
