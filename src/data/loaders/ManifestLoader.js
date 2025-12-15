/**
 * Manifest 加載器
 * 負責加載 Family 和 Template 的 manifest.json 文件
 */

import { createLogger } from '../../utils/logger';

const logger = createLogger('ManifestLoader');

/**
 * 動態導入 Family Manifest
 * @param {string} category - 分類 ID (core, visual, retro, etc.)
 * @param {string} familyId - Family ID (skeuomorphism, flatDesign, etc.)
 * @returns {Promise<Object>} Family manifest 對象
 */
export async function loadFamilyManifest(category, familyId) {
  try {
    const manifest = await import(`../styles/generated/${category}/${familyId}/manifest.json`);
    return manifest.default || manifest;
  } catch (error) {
    logger.warn(`無法加載 Family manifest: ${category}/${familyId}`, error);
    return null;
  }
}

/**
 * 動態導入 Template Manifest
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} Template manifest 對象
 */
export async function loadTemplateManifest(category, familyId, templateId) {
  try {
    const manifest = await import(`../styles/generated/${category}/${familyId}/${templateId}.json`);
    return manifest.default || manifest;
  } catch {
    // 模板 JSON 已刪除，返回基本結構（從 public/data/content/ 加載實際內容）
    return { id: templateId };
  }
}

/**
 * 加載整個分類的所有 Families
 * @param {string} category - 分類 ID
 * @returns {Promise<Array>} Family 數據數組
 */
export async function loadCategory(category) {
  // 這需要一個 category 索引文件來知道有哪些 families
  // 暫時返回空數組，需要另外實現
  logger.warn(`loadCategory(${category}) 尚未完整實現`);
  return [];
}

export default {
  loadFamilyManifest,
  loadTemplateManifest,
  loadCategory
};
