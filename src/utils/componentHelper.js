/**
 * componentHelper.js - Component utilities for consistent category handling
 *
 * Provides a single source of truth for category key mappings,
 * eliminating hardcoded categoryKeyMap in multiple files.
 */

import registry from '../data/components/_registry.json';

/**
 * Get navigation key from registry for a given category ID
 * Falls back to categoryId if not found in registry
 *
 * @param {string} categoryId - The category ID (e.g., 'navigation', 'input')
 * @returns {string} The nav key for i18n (e.g., 'navigation', 'inputEnhanced')
 */
export function getCategoryNavKey(categoryId) {
  const config = registry.categories?.[categoryId];
  return config?.key || categoryId;
}

/**
 * Build complete categoryKeyMap from registry
 * Useful for debugging or validation
 *
 * @returns {Object} Map of categoryId to navKey
 */
export function buildCategoryKeyMap() {
  const map = {};
  for (const [id, config] of Object.entries(registry.categories || {})) {
    map[id] = config.key || id;
  }
  return map;
}

/**
 * Get category metadata from registry
 *
 * @param {string} categoryId - The category ID
 * @returns {Object|null} Category config or null if not found
 */
export function getCategoryConfig(categoryId) {
  return registry.categories?.[categoryId] || null;
}

/**
 * Get all category IDs from registry
 *
 * @returns {string[]} Array of category IDs
 */
export function getAllCategoryIds() {
  return Object.keys(registry.categories || {});
}
