/**
 * Shared Application Constants
 *
 * Centralized constants to eliminate duplication and ensure consistency.
 * Follows the pattern established in utils/i18n/languageConstants.js
 *
 * @module utils/constants
 */

// ========== UI Constants ==========

/**
 * Virtual scrolling threshold - switch to virtual scroll when items exceed this count
 * Used by: AllStylesPage, AllComponentsPage
 * Note: Lowered to 15 to enable virtualization earlier for better scroll performance
 * with larger datasets (100-200 items). At 15 items, users already need to scroll multiple times,
 * so enabling virtualization prevents initial scroll jank.
 */
export const VIRTUAL_SCROLL_THRESHOLD = 15;

/**
 * Number of skeleton cards to show during loading
 * Used by: AllStylesPage (masonry layout), AllComponentsPage (grid layout)
 */
export const SKELETON_COUNTS = {
  STYLES: 6,     // Masonry layout (larger cards)
  COMPONENTS: 8  // Grid layout (smaller cards)
};

// ========== Data Loader Constants ==========

/**
 * Minimum characters for valid preview content
 * Content below this threshold is considered invalid/placeholder
 * Used by: jsonStyleLoader, jsonComponentLoader
 */
export const MIN_PREVIEW_CONTENT_LENGTH = 100;

// ========== Cache Constants ==========

/**
 * Maximum number of entries in various caches
 */
export const CACHE_SIZES = {
  SANITIZE: 200,   // DOMPurify cache (sanitizeCache.js)
  MANIFEST: 100,   // Manifest cache (loaders)
  COMPONENT: 50    // Component cache (loaders)
};

// ========== Timeout Constants ==========

/**
 * Loading timeout in milliseconds
 * Used by: usePreviewPageState, preview components
 */
export const LOADING_TIMEOUT_MS = 2000;
