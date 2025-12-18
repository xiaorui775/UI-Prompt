/**
 * Prompt 內容加載器
 * 負責加載和解析雙語 Prompt 內容
 */

import { buildPromptPath } from './config/pathHelper.js';

/**
 * 通用文本獲取函數
 * @param {string} url - 請求 URL
 * @returns {Promise<string>} 文本內容
 */
async function fetchText(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.text();
    }
    return '';
  } catch {
    return '';
  }
}

/**
 * 解析 Markdown 格式的 Prompt 為雙語對象
 * @param {string} md - Markdown 內容
 * @returns {Object} 雙語對象 { 'zh-CN': '...', 'en-US': '...' }
 */
export function parsePromptMd(md) {
  if (!md || md.trim() === '') {
    return { 'zh-CN': '', 'en-US': '' };
  }

  // 提取中文版本
  const zhMatch = md.match(/## 中文版本[^\n]*\n([\s\S]*?)(?=\n---\n|\n## English|$)/);
  // 提取英文版本
  const enMatch = md.match(/## English Version[^\n]*\n([\s\S]*?)$/);

  return {
    'zh-CN': zhMatch ? zhMatch[1].trim() : '',
    'en-US': enMatch ? enMatch[1].trim() : ''
  };
}

/**
 * 動態加載 Template 級別的 Prompt 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} templateId - Template ID (可選，不傳則加載 Family 級別)
 * @returns {Promise<Object>} Prompt 對象 { customPrompt, stylePrompt }
 */
export async function loadTemplatePrompts(category, familyId, templateId = null) {
  // 使用 buildPromptPath 支持子路徑部署
  const basePath = templateId
    ? buildPromptPath(`styles/${category}/${familyId}/${templateId}`)
    : buildPromptPath(`styles/${category}/${familyId}`);

  const [customMd, styleMd] = await Promise.all([
    fetchText(`${basePath}/custom.md`),
    fetchText(`${basePath}/style.md`)
  ]);

  return {
    customPrompt: parsePromptMd(customMd),
    stylePrompt: parsePromptMd(styleMd)
  };
}

/**
 * 動態加載 Preview 專屬的 Prompt 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @param {string} previewId - Preview ID (e.g., 'dashboard', 'home-office')
 * @returns {Promise<Object>} Prompt 對象 { customPrompt, stylePrompt }
 */
export async function loadPreviewPrompts(category, familyId, previewId) {
  // 使用 buildPromptPath 支持子路徑部署
  const basePath = buildPromptPath(`styles/${category}/${familyId}/${previewId}`);

  const [customMd, styleMd] = await Promise.all([
    fetchText(`${basePath}/custom.md`),
    fetchText(`${basePath}/style.md`)
  ]);

  return {
    customPrompt: parsePromptMd(customMd),
    stylePrompt: parsePromptMd(styleMd)
  };
}

/**
 * 動態加載 Family 級別的 Prompt 內容
 * @param {string} category - 分類 ID
 * @param {string} familyId - Family ID
 * @returns {Promise<Object>} Prompt 對象 { customPrompt, stylePrompt }
 */
export async function loadFamilyPrompts(category, familyId) {
  return loadTemplatePrompts(category, familyId, null);
}

export default {
  parsePromptMd,
  loadTemplatePrompts,
  loadPreviewPrompts,
  loadFamilyPrompts
};
