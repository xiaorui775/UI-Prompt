/**
 * ShardCache - Client-side LRU cache for shard data
 *
 * Features:
 * - LRU (Least Recently Used) eviction strategy
 * - SIZE-BASED limit (max 5MB) - OPTIMIZATION: Better handling of uneven shard sizes
 * - Avoids duplicate HTTP requests
 * - Automatic cleanup when capacity exceeded
 *
 * Performance Benefits:
 * - Eliminates redundant network requests
 * - Instant category switching after initial load
 * - Reduced server load
 * - Fair treatment of different-sized shards (visual: 831KB vs layout: 5.5KB)
 *
 * @module utils/shardCache
 */

// Maximum cache size in bytes (5MB)
const MAX_CACHE_SIZE_BYTES = 5 * 1024 * 1024;

// Fallback count limit for safety
const MAX_CACHE_COUNT = 20;

/**
 * LRU Cache implementation for shard data with size-based eviction
 *
 * Uses Map to maintain insertion order.
 * When accessing an item, move it to the end (most recently used).
 * When cache exceeds size limit, remove oldest items (LRU eviction).
 *
 * OPTIMIZATION: Changed from count-based (10 items) to size-based (5MB)
 * This prevents large shards (visual: 831KB) from unfairly evicting many small shards
 */
class ShardCache {
  /**
   * @param {number} maxSizeBytes - Maximum cache size in bytes
   */
  constructor(maxSizeBytes = MAX_CACHE_SIZE_BYTES) {
    this.cache = new Map();
    this.sizeMap = new Map();  // Track size of each entry
    this.currentSize = 0;
    this.maxSizeBytes = maxSizeBytes;

    // Statistics for monitoring
    this._stats = {
      hits: 0,
      misses: 0,
      evictions: 0
    };
  }

  /**
   * Calculate approximate byte size of a value
   * @private
   * @param {*} value - Value to measure
   * @returns {number} - Approximate size in bytes
   */
  _calculateSize(value) {
    try {
      const json = JSON.stringify(value);
      return json.length * 2;  // UTF-16 = 2 bytes per char
    } catch {
      return 0;
    }
  }

  /**
   * Get cached shard data
   * @param {string} key - Shard key (e.g., 'layout', 'visual')
   * @returns {Object|null} - Cached shard data or null if not found
   */
  get(key) {
    if (!this.cache.has(key)) {
      this._stats.misses++;
      return null;
    }

    this._stats.hits++;

    // LRU: Move to end (mark as most recently used)
    const value = this.cache.get(key);
    const size = this.sizeMap.get(key);
    this.cache.delete(key);
    this.sizeMap.delete(key);
    this.cache.set(key, value);
    this.sizeMap.set(key, size);

    return value;
  }

  /**
   * Set cached shard data with size-based eviction
   * @param {string} key - Shard key
   * @param {Object} value - Shard data to cache
   */
  set(key, value) {
    const entrySize = this._calculateSize(value);

    // If key already exists, remove old entry first
    if (this.cache.has(key)) {
      this.currentSize -= this.sizeMap.get(key) || 0;
      this.cache.delete(key);
      this.sizeMap.delete(key);
    }

    // LRU eviction: remove oldest entries until we have space
    while (
      (this.currentSize + entrySize > this.maxSizeBytes || this.cache.size >= MAX_CACHE_COUNT) &&
      this.cache.size > 0
    ) {
      const oldestKey = this.cache.keys().next().value;
      this.currentSize -= this.sizeMap.get(oldestKey) || 0;
      this.sizeMap.delete(oldestKey);
      this.cache.delete(oldestKey);
      this._stats.evictions++;
    }

    this.cache.set(key, value);
    this.sizeMap.set(key, entrySize);
    this.currentSize += entrySize;
  }

  /**
   * Check if key exists in cache
   * @param {string} key - Shard key
   * @returns {boolean}
   */
  has(key) {
    return this.cache.has(key);
  }

  /**
   * Clear all cached data
   */
  clear() {
    this.cache.clear();
    this.sizeMap.clear();
    this.currentSize = 0;
  }

  /**
   * Get cache statistics
   * @returns {Object} - Cache stats including size, hit rate, and memory usage
   */
  getStats() {
    const totalRequests = this._stats.hits + this._stats.misses;
    const hitRate = totalRequests > 0 ? (this._stats.hits / totalRequests * 100).toFixed(1) : 0;

    return {
      size: this.cache.size,
      maxSizeBytes: this.maxSizeBytes,
      currentSizeBytes: this.currentSize,
      keys: Array.from(this.cache.keys()),
      memoryUsage: this._formatBytes(this.currentSize),
      hits: this._stats.hits,
      misses: this._stats.misses,
      hitRate: `${hitRate}%`,
      evictions: this._stats.evictions
    };
  }

  /**
   * Format bytes to human-readable string
   * @private
   * @param {number} bytes - Byte count
   * @returns {string} - Human-readable size
   */
  _formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  /**
   * Estimate memory usage (for backwards compatibility)
   * @private
   * @returns {string} - Human-readable memory size
   */
  _estimateMemoryUsage() {
    return this._formatBytes(this.currentSize);
  }
}

/**
 * Global singleton instance
 * @type {ShardCache}
 */
export const shardCache = new ShardCache();

/**
 * Export the class for testing
 */
export default shardCache;
