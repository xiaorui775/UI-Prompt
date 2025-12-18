/**
 * LRUCache - 最近最少使用緩存
 *
 * 🚀 性能優化：
 * - 限制緩存大小，避免內存無限增長
 * - O(1) 時間複雜度的 get/set 操作
 * - 自動淘汰最久未使用的項目
 *
 * @template K - 鍵類型
 * @template V - 值類型
 */
export class LRUCache {
  /**
   * 創建 LRU 緩存實例
   * @param {number} maxSize - 最大緩存條目數（默認 30）
   */
  constructor(maxSize = 30) {
    this.maxSize = maxSize;
    this.cache = new Map();

    // 統計數據（用於調試和監控）
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0
    };
  }

  /**
   * 獲取緩存項
   * @param {K} key - 緩存鍵
   * @returns {V|undefined} 緩存值或 undefined
   */
  get(key) {
    if (!this.cache.has(key)) {
      this.stats.misses++;
      return undefined;
    }

    // 訪問時更新順序（移到最後 = 最近使用）
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    this.stats.hits++;
    return value;
  }

  /**
   * 設置緩存項
   * @param {K} key - 緩存鍵
   * @param {V} value - 緩存值
   * @returns {LRUCache} 返回 this 以支持鏈式調用
   */
  set(key, value) {
    // 如果鍵已存在，先刪除再添加（更新順序）
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // 如果達到上限，淘汰最舊的項目（Map 的第一個項目）
    else if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
      this.stats.evictions++;
    }

    this.cache.set(key, value);
    return this;
  }

  /**
   * 檢查鍵是否存在
   * @param {K} key - 緩存鍵
   * @returns {boolean} 是否存在
   */
  has(key) {
    return this.cache.has(key);
  }

  /**
   * 刪除緩存項
   * @param {K} key - 緩存鍵
   * @returns {boolean} 是否成功刪除
   */
  delete(key) {
    return this.cache.delete(key);
  }

  /**
   * 清空緩存
   */
  clear() {
    this.cache.clear();
    this.stats = { hits: 0, misses: 0, evictions: 0 };
  }

  /**
   * 獲取當前緩存大小
   * @returns {number} 緩存條目數
   */
  get size() {
    return this.cache.size;
  }

  /**
   * 獲取緩存統計信息
   * @returns {Object} 統計數據
   */
  getStats() {
    const total = this.stats.hits + this.stats.misses;
    const hitRate = total > 0 ? (this.stats.hits / total * 100).toFixed(1) : 0;

    return {
      ...this.stats,
      size: this.cache.size,
      maxSize: this.maxSize,
      hitRate: `${hitRate}%`
    };
  }

  /**
   * 獲取所有緩存鍵（按訪問順序，最舊在前）
   * @returns {K[]} 緩存鍵數組
   */
  keys() {
    return [...this.cache.keys()];
  }

  /**
   * 獲取所有緩存值（按訪問順序，最舊在前）
   * @returns {V[]} 緩存值數組
   */
  values() {
    return [...this.cache.values()];
  }

  /**
   * 遍歷緩存（按訪問順序，最舊在前）
   * @param {Function} callback - 回調函數 (value, key) => void
   */
  forEach(callback) {
    this.cache.forEach((value, key) => callback(value, key));
  }
}

/**
 * 創建全局預覽緩存實例
 * 單例模式，整個應用共享一個緩存
 */
let globalPreviewCache = null;

/**
 * 獲取全局預覽緩存實例
 * @param {number} maxSize - 最大緩存條目數（首次調用時有效）
 * @returns {LRUCache} LRU 緩存實例
 */
export function getPreviewCache(maxSize = 30) {
  if (!globalPreviewCache) {
    globalPreviewCache = new LRUCache(maxSize);
  }
  return globalPreviewCache;
}

/**
 * 重置全局預覽緩存（僅用於測試）
 */
export function resetPreviewCache() {
  if (globalPreviewCache) {
    globalPreviewCache.clear();
  }
  globalPreviewCache = null;
}

export default LRUCache;
