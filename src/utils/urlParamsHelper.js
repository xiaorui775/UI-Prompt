/**
 * URL 參數處理工具函數集
 * URL Parameters Helper Utilities
 *
 * 提供陣列/字符串參數的序列化、反序列化和驗證功能
 * Provides serialization, deserialization, and validation for array/string parameters
 */

/**
 * 從 URLSearchParams 讀取多值參數（陣列）
 * Read multi-value parameters (array) from URLSearchParams
 *
 * @param {URLSearchParams} params - URL 參數對象
 * @param {string} key - 參數名
 * @returns {string[]} - 參數值陣列
 *
 * @example
 *   ?categories=modern&categories=retro
 *   → ['modern', 'retro']
 */
export function getArrayParam(params, key) {
  return params.getAll(key).filter(Boolean);
}

/**
 * 將陣列參數設置到 URLSearchParams
 * Set array parameters to URLSearchParams
 *
 * @param {URLSearchParams} params - 目標參數對象
 * @param {string} key - 參數名
 * @param {string[]} values - 參數值陣列
 *
 * 策略 Strategy:
 *   - 空陣列 → 刪除該參數（保持 URL 簡潔）
 *   - 非空 → 多次 append（支持重複參數）
 */
export function setArrayParam(params, key, values) {
  params.delete(key); // 先清空
  if (values && values.length > 0) {
    values.forEach(value => {
      if (value) params.append(key, value);
    });
  }
}

/**
 * 從 URLSearchParams 讀取字符串參數
 * Read string parameter from URLSearchParams
 *
 * @param {URLSearchParams} params - URL 參數對象
 * @param {string} key - 參數名
 * @param {string} defaultValue - 默認值
 * @returns {string} - 參數值
 */
export function getStringParam(params, key, defaultValue = '') {
  return params.get(key) || defaultValue;
}

/**
 * 設置字符串參數（空值自動刪除）
 * Set string parameter (automatically delete if empty)
 *
 * @param {URLSearchParams} params - 目標參數對象
 * @param {string} key - 參數名
 * @param {string} value - 參數值
 */
export function setStringParam(params, key, value) {
  if (!value || value.trim() === '') {
    params.delete(key);
  } else {
    params.set(key, value);
  }
}

/**
 * 驗證分類 ID 是否有效
 * Validate if category ID is valid
 *
 * @param {string} categoryId - 分類 ID
 * @param {string[]} validCategories - 有效分類 ID 列表
 * @returns {boolean} - 是否有效
 */
export function isValidCategory(categoryId, validCategories) {
  return validCategories.includes(categoryId);
}

/**
 * 過濾無效的分類 ID
 * Filter out invalid category IDs
 *
 * @param {string[]} categories - 分類 ID 陣列
 * @param {string[]} validCategories - 有效分類 ID 列表
 * @returns {string[]} - 有效的分類 ID
 */
export function filterValidCategories(categories, validCategories) {
  return categories.filter(cat => isValidCategory(cat, validCategories));
}

/**
 * 驗證標籤 ID 是否有效
 * Validate if tag ID is valid
 *
 * @param {string} tagId - 標籤 ID
 * @param {Object} allTags - 所有標籤對象 { era: {...}, visual: {...}, ... }
 * @returns {boolean} - 是否有效
 */
export function isValidTag(tagId, allTags) {
  return Object.values(allTags).some(group =>
    Object.keys(group).includes(tagId)
  );
}

/**
 * 過濾無效的標籤 ID
 * Filter out invalid tag IDs
 *
 * @param {string[]} tags - 標籤 ID 陣列
 * @param {Object} allTags - 所有標籤對象
 * @returns {string[]} - 有效的標籤 ID
 */
export function filterValidTags(tags, allTags) {
  return tags.filter(tag => isValidTag(tag, allTags));
}
