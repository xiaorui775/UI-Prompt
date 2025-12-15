/**
 * usePromptContent - 統一的 Prompt 內容生成 Hook
 *
 * 封裝 Prompt 生成邏輯，包含錯誤處理和日誌記錄。
 * 適用於 ComponentDetailPage、ComponentPreviewPage 和 StylePreviewPage。
 *
 * @module hooks/usePromptContent
 */

import { useMemo } from 'react';
import { createLogger } from '../utils/logger';

const logger = createLogger('usePromptContent');

/**
 * Prompt 內容生成 Hook
 *
 * @param {Function} generator - Prompt 生成函數，應返回字符串
 * @param {Array} deps - useMemo 依賴數組
 * @param {Object} [options] - 可選配置
 * @param {string} [options.loggerName] - Logger 名稱（用於調試）
 * @param {string} [options.fallback] - 生成失敗時的回退值（默認空字符串）
 * @returns {string} 生成的 Prompt 內容
 *
 * @example
 * // 在 ComponentDetailPage 中使用
 * const promptContent = usePromptContent(
 *   () => promptGenerator.generateForVariant(
 *     selectedVariant,
 *     componentId,
 *     category,
 *     language
 *   ),
 *   [selectedVariant, componentId, category, language],
 *   { loggerName: 'ComponentDetailPage' }
 * );
 *
 * @example
 * // 在 StylePreviewPage 中使用
 * const promptContent = usePromptContent(
 *   () => PreviewPromptGenerator.generate(
 *     style,
 *     style.description || '',
 *     previewsList?.[activeIndex]?.html || style.fullPageHTML || style.demoHTML || '',
 *     language,
 *     '',
 *     [],
 *     '',
 *     currentPreview
 *   ),
 *   [style, activeIndex, previewsList, currentPreview, language],
 *   { loggerName: 'StylePreviewPage' }
 * );
 */
export function usePromptContent(generator, deps, options = {}) {
  const {
    loggerName = 'PromptContent',
    fallback = ''
  } = options;

  return useMemo(() => {
    try {
      const result = generator();
      return result ?? fallback;
    } catch (error) {
      logger.error(`[${loggerName}] Error generating prompt:`, error);
      return fallback;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * 創建帶有預設配置的 Prompt 生成器
 *
 * @param {Object} config - 預設配置
 * @param {string} [config.loggerName] - Logger 名稱
 * @param {string} [config.fallback] - 回退值
 * @returns {Function} 配置好的 usePromptContent 函數
 *
 * @example
 * // 創建預配置的 hook
 * const useComponentPrompt = createPromptContentHook({
 *   loggerName: 'ComponentPrompt',
 *   fallback: 'Unable to generate prompt'
 * });
 *
 * // 在組件中使用
 * const promptContent = useComponentPrompt(
 *   () => promptGenerator.generateForVariant(...),
 *   [deps]
 * );
 */
export function createPromptContentHook(config = {}) {
  return (generator, deps) => usePromptContent(generator, deps, config);
}

export default usePromptContent;
