/**
 * Style ID 解析器
 * 負責解析風格 ID 為 category、familyId、templateId
 */

import registry from '../styles/_registry.json';
import { FAMILY_ID_MAP, normalizeId } from './config/familyIdMap.js';
import { createLogger } from '../../utils/logger';

const logger = createLogger('StyleIdParser');

/**
 * 獲取所有可用的分類
 * @returns {Array<string>} 分類 ID 數組
 */
export function getAvailableCategories() {
  return ['core', 'visual', 'retro', 'layout', 'interaction'];
}

/**
 * 根據 style ID 解析分類和 family
 * @param {string} styleId - 風格 ID (如 'core-skeuomorphism-tech-corp-homepage')
 * @returns {Object} { category, familyId, templateId }
 */
export function parseStyleId(styleId) {
  if (!styleId) return { category: '', familyId: '', templateId: '' };

  const parts = styleId.split('-');
  if (parts.length < 2) return { category: '', familyId: '', templateId: '' };

  const category = parts[0];
  const remainder = styleId.replace(new RegExp(`^${category}-`), '');
  const remainderParts = remainder.split('-').filter(Boolean);
  const firstSegment = remainderParts[0] || '';
  const mappedFirst = FAMILY_ID_MAP[firstSegment] || firstSegment;

  // 嘗試利用 registry 中的 family 列表進行模糊匹配，解決像 visual-tech-3d-elements 這類多段 ID
  const normalizedStyle = normalizeId(remainder);
  const categoryEntry = registry?.categories?.[category];

  // ✅ 首選：直接使用樣式 ID 去掉分類後的首段作為 family（支援別名映射，如 os → retroOS）
  // 但若 registry 找到更長的 family 匹配，會以 registry 為準（修復 dark-academia 等多段 family）
  let familyId = mappedFirst || '';
  let currentFamilyNorm = normalizeId(familyId);

  if (categoryEntry?.families?.length) {
    let bestMatch = { id: '', norm: '' };

    // 檢查首段推導出的 family 是否在 registry 中存在
    const isCurrentFamilyValid = categoryEntry.families.some((famId) => {
      const resolvedFam = FAMILY_ID_MAP[famId] || famId;
      return normalizeId(resolvedFam) === currentFamilyNorm;
    });

    const considerCandidate = (candidateId) => {
      const norm = normalizeId(candidateId);
      if (!norm) return;
      // 避免過短別名（如 os）誤匹配到尾段（如 futurism-dos）
      if (norm.length <= 2 && normalizedStyle !== norm && !normalizedStyle.startsWith(norm)) return;
      if (!normalizedStyle.includes(norm)) return;
      if (norm.length > bestMatch.norm.length) {
        bestMatch = { id: candidateId, norm };
      }
    };

    // 1) 使用 registry 定義的 family id
    categoryEntry.families.forEach((famId) => {
      considerCandidate(FAMILY_ID_MAP[famId] || famId);
    });

    // 2) 使用映射表別名
    Object.entries(FAMILY_ID_MAP).forEach(([alias, real]) => {
      considerCandidate(alias);
      considerCandidate(real);
    });

    if (bestMatch.id) {
      // 將別名映射為真正的 familyId（例如 url 中的 `os` → `retroOS`）
      const resolvedBest = FAMILY_ID_MAP[bestMatch.id] || bestMatch.id;
      const bestNorm = bestMatch.norm || normalizeId(resolvedBest);

      // 若目前 familyId 为空，或首段 family 不在 registry 中，或 bestMatch 更長更精準，則覆蓋。
      if (!familyId || !isCurrentFamilyValid || bestNorm.length > currentFamilyNorm.length) {
        familyId = resolvedBest;
        currentFamilyNorm = bestNorm;
      }
    }
  }

  // 後備：仍無法解析時，退回第二段為 family
  if (!familyId) {
    const rawFamilyId = parts[1];
    familyId = FAMILY_ID_MAP[rawFamilyId] || rawFamilyId;
  }

  const templateId = (familyId && styleId !== `${category}-${familyId}`) ? styleId : '';

  logger.debug(`parseStyleId: ${styleId} → category=${category || '(none)'}, familyId=${familyId || '(none)'}, templateId=${templateId || '(none)'}`);

  return { category, familyId, templateId };
}

export default {
  getAvailableCategories,
  parseStyleId
};
