/**
 * IndexedDB Cache Layer
 *
 * Provides persistent browser-side caching for compiled JSX and other content.
 * This cache survives page reloads and browser restarts.
 *
 * OPTIMIZATION: Eliminates repeated compilation/fetch for returning visitors.
 * Uses 24-hour TTL to ensure content freshness while maximizing cache hits.
 *
 * @module utils/indexedDBCache
 */

import { previewLogger as logger } from './logger';

const DB_NAME = 'ui-style-cache';
const DB_VERSION = 1;
const STORE_NAME = 'compiled-jsx';
const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_ENTRIES = 200;

/**
 * IndexedDB Cache instance (singleton)
 * @type {IDBDatabase|null}
 */
let dbInstance = null;

/**
 * Database open promise (for deduplication)
 * @type {Promise|null}
 */
let dbOpenPromise = null;

/**
 * Open or get the IndexedDB database
 * @returns {Promise<IDBDatabase>}
 */
async function openDB() {
  // Return existing connection
  if (dbInstance) {
    return dbInstance;
  }

  // Return in-progress open
  if (dbOpenPromise) {
    return dbOpenPromise;
  }

  dbOpenPromise = new Promise((resolve, reject) => {
    // Check if IndexedDB is available
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB not available'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      logger.warn('Failed to open IndexedDB:', request.error);
      reject(request.error);
    };

    request.onsuccess = () => {
      dbInstance = request.result;

      // Handle connection close
      dbInstance.onclose = () => {
        dbInstance = null;
        dbOpenPromise = null;
      };

      resolve(dbInstance);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create object store with auto-incrementing key
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });

  return dbOpenPromise;
}

/**
 * Get a cached value
 * @param {string} key - Cache key
 * @returns {Promise<any|null>} Cached value or null if not found/expired
 */
export async function getCached(key) {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve) => {
      const request = store.get(key);

      request.onsuccess = () => {
        const entry = request.result;

        if (!entry) {
          resolve(null);
          return;
        }

        // Check TTL
        const age = Date.now() - entry.timestamp;
        if (age > TTL_MS) {
          // Expired - delete in background
          deleteEntry(key);
          resolve(null);
          return;
        }

        logger.debug(`IndexedDB cache hit: ${key}`);
        resolve(entry.value);
      };

      request.onerror = () => {
        logger.warn('IndexedDB get error:', request.error);
        resolve(null);
      };
    });
  } catch (error) {
    logger.warn('IndexedDB cache get failed:', error.message);
    return null;
  }
}

/**
 * Set a cached value
 * @param {string} key - Cache key
 * @param {any} value - Value to cache
 * @returns {Promise<boolean>} True if successful
 */
export async function setCached(key, value) {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const entry = {
      key,
      value,
      timestamp: Date.now()
    };

    return new Promise((resolve) => {
      const request = store.put(entry);

      request.onsuccess = () => {
        logger.debug(`IndexedDB cache set: ${key}`);
        resolve(true);

        // Cleanup old entries in background
        cleanupOldEntries();
      };

      request.onerror = () => {
        logger.warn('IndexedDB set error:', request.error);
        resolve(false);
      };
    });
  } catch (error) {
    logger.warn('IndexedDB cache set failed:', error.message);
    return false;
  }
}

/**
 * Delete a cached entry
 * @param {string} key - Cache key
 * @returns {Promise<boolean>}
 */
async function deleteEntry(key) {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve) => {
      const request = store.delete(key);
      request.onsuccess = () => resolve(true);
      request.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

/**
 * Clean up old entries (LRU eviction based on timestamp)
 * Runs periodically to keep cache size manageable
 */
async function cleanupOldEntries() {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('timestamp');

    // Count entries
    const countRequest = store.count();

    countRequest.onsuccess = () => {
      const count = countRequest.result;

      // Only cleanup if over limit
      if (count <= MAX_ENTRIES) return;

      const toDelete = count - MAX_ENTRIES;
      let deleted = 0;

      // Open cursor on timestamp index (oldest first)
      const cursorRequest = index.openCursor();

      cursorRequest.onsuccess = (event) => {
        const cursor = event.target.result;

        if (cursor && deleted < toDelete) {
          cursor.delete();
          deleted++;
          cursor.continue();
        } else if (deleted > 0) {
          logger.debug(`IndexedDB cleanup: removed ${deleted} old entries`);
        }
      };
    };
  } catch (error) {
    logger.warn('IndexedDB cleanup failed:', error.message);
  }
}

/**
 * Clear all cached entries
 * @returns {Promise<boolean>}
 */
export async function clearCache() {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    return new Promise((resolve) => {
      const request = store.clear();

      request.onsuccess = () => {
        logger.debug('IndexedDB cache cleared');
        resolve(true);
      };

      request.onerror = () => {
        logger.warn('IndexedDB clear error:', request.error);
        resolve(false);
      };
    });
  } catch (error) {
    logger.warn('IndexedDB cache clear failed:', error.message);
    return false;
  }
}

/**
 * Get cache statistics
 * @returns {Promise<{count: number, oldestTimestamp: number|null, newestTimestamp: number|null}>}
 */
export async function getCacheStats() {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('timestamp');

    return new Promise((resolve) => {
      const stats = {
        count: 0,
        oldestTimestamp: null,
        newestTimestamp: null
      };

      // Get count
      const countRequest = store.count();
      countRequest.onsuccess = () => {
        stats.count = countRequest.result;
      };

      // Get oldest
      const oldestRequest = index.openCursor();
      oldestRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          stats.oldestTimestamp = cursor.value.timestamp;
        }
      };

      // Get newest
      const newestRequest = index.openCursor(null, 'prev');
      newestRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          stats.newestTimestamp = cursor.value.timestamp;
        }
      };

      transaction.oncomplete = () => {
        resolve(stats);
      };

      transaction.onerror = () => {
        resolve(stats);
      };
    });
  } catch {
    return { count: 0, oldestTimestamp: null, newestTimestamp: null };
  }
}

/**
 * Check if IndexedDB is available
 * @returns {boolean}
 */
export function isIndexedDBAvailable() {
  return typeof indexedDB !== 'undefined';
}

export default {
  getCached,
  setCached,
  clearCache,
  getCacheStats,
  isIndexedDBAvailable
};
