/**
 * 路徑處理工具
 * 統一處理子路徑部署的 BASE_URL 問題
 *
 * @module data/loaders/config/pathHelper
 */

/**
 * Get BASE_URL for deployment compatibility
 * Supports subdirectory deployments (e.g., /app/)
 * @type {string}
 */
export const BASE_URL = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');

/**
 * 構建內容文件的完整 URL
 * @param {string} relativePath - 相對路徑（如 'styles/visual/glass/demo.html'）
 * @returns {string} 完整 URL
 *
 * @example
 * buildContentPath('styles/visual/glass/demo.html')
 * // => '/data/content/styles/visual/glass/demo.html' (根部署)
 * // => '/app/data/content/styles/visual/glass/demo.html' (子路徑部署)
 */
export function buildContentPath(relativePath) {
  return `${BASE_URL}/data/content/${relativePath}`;
}

/**
 * 構建 Prompt 文件的完整 URL
 * @param {string} relativePath - 相對路徑
 * @returns {string} 完整 URL
 */
export function buildPromptPath(relativePath) {
  return `${BASE_URL}/data/prompts/${relativePath}`;
}

/**
 * 構建任意 public 目錄下文件的完整 URL
 * @param {string} relativePath - 相對於 public/ 的路徑
 * @returns {string} 完整 URL
 *
 * @example
 * buildPublicPath('data/preview-id-map.json')
 * // => '/data/preview-id-map.json' (根部署)
 * // => '/app/data/preview-id-map.json' (子路徑部署)
 */
export function buildPublicPath(relativePath) {
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${BASE_URL}/${cleanPath}`;
}

/**
 * 構建組件內容路徑
 * @param {string} relativePath - 相對路徑
 * @returns {string} 完整 URL
 */
export function buildComponentContentPath(relativePath) {
  return `${BASE_URL}/data/content/components/${relativePath}`;
}

/**
 * 構建組件 Prompt 路徑
 * @param {string} relativePath - 相對路徑
 * @returns {string} 完整 URL
 */
export function buildComponentPromptPath(relativePath) {
  return `${BASE_URL}/data/prompts/components/${relativePath}`;
}

export default {
  BASE_URL,
  buildContentPath,
  buildPromptPath,
  buildPublicPath,
  buildComponentContentPath,
  buildComponentPromptPath
};
