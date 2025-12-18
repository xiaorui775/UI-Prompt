import { DEFAULT_LANGUAGE } from './i18n/languageConstants';
import { createLogger } from './logger';

const logger = createLogger('PromptGenerator');

/**
 * 統一的 Prompt 生成器
 * 整合 StyleCard 和 PreviewModal 的 Prompt 生成邏輯
 */
export class PromptGenerator {
  /**
   * 生成 AI Prompt（統一版本）
   * @param {object|string} titleOrStyle - 完整的 style 對象或 title 字符串（向後兼容）
   * @param {string|object} descriptionOrOptions - 風格描述或選項對象
   * @param {string} language - 語言代碼 ('zh-CN' | 'en-US')
   * @returns {string} - 返回 Prompt 內容或空字符串
   */
 static generate(titleOrStyle, descriptionOrOptions = {}, language = DEFAULT_LANGUAGE) {
    // ✨ Debug logging
    logger.debug('Input:', {
      titleOrStyle: titleOrStyle?.id || titleOrStyle,
      descriptionOrOptions,
      language,
      hasCustomPrompt: !!titleOrStyle?.customPrompt,
      hasStylePrompt: !!titleOrStyle?.stylePrompt
    });

    try {
      // 解析參数：支持舊格式 (title, description, language) 和新格式 (style, options)
      let style = null;
      let options = {};

      if (typeof titleOrStyle === 'object' && titleOrStyle !== null) {
        style = titleOrStyle;
        // 如果第二個參数是對象，視為選項
        if (typeof descriptionOrOptions === 'object' && descriptionOrOptions !== null) {
          options = descriptionOrOptions;
        }
      }

      // Extract options for prompt generation
      const {
        currentPreview = null,
        mode = 'preview', // 'preview' | 'card'
      } = options;

      // Card mode：优先使用模板/家族級 stylePrompt，其次才使用 customPrompt
      if (mode === 'card') {
        if (style?.stylePrompt?.[language]) {
          logger.debug('Using style.stylePrompt (card mode)');
          return style.stylePrompt[language];
        }
        if (style?.customPrompt?.[language]) {
          logger.debug('Using style.customPrompt (card mode)');
          return style.customPrompt[language];
        }
        logger.warn('No prompt found (card mode)');
        return '';
      }

      // Default preview mode：
      // 1. currentPreview.customPrompt（單個預覽专用 Prompt，例如色碼/佈局要求）
      // 2. style.customPrompt（家族級 / 流派級 Prompt）
      // 3. currentPreview.stylePrompt（單個預覽風格說明）
      // 4. style.stylePrompt（模板級風格說明）
      if (currentPreview?.customPrompt?.[language]) {
        logger.debug('Using currentPreview.customPrompt');
        return currentPreview.customPrompt[language];
      }

      if (style?.customPrompt?.[language]) {
        logger.debug('Using style.customPrompt');
        return style.customPrompt[language];
      }

      if (currentPreview?.stylePrompt?.[language]) {
        logger.debug('Using currentPreview.stylePrompt');
        return currentPreview.stylePrompt[language];
      }

      if (style?.stylePrompt?.[language]) {
        logger.debug('Using style.stylePrompt');
        return style.stylePrompt[language];
      }

      // Fallback: no prompt available
      logger.warn('No prompt available for language:', language);
      return '';
    } catch (error) {
      logger.error('Error generating prompt:', error);
      return '';
    }
  }
}

// 添加直接导出以兼容不同的导入方式
export function generatePrompt(title, description, language = DEFAULT_LANGUAGE) {
  return PromptGenerator.generate(title, description, language);
}

// 兼容舊的 PreviewPromptGenerator（向後兼容）
export class PreviewPromptGenerator {
  static generate(titleOrStyle, _description, _htmlContent, language, _previewDescription = '', _previewFeatures = [], _colorScheme = '', currentPreview = null) {
    return PromptGenerator.generate(titleOrStyle, { currentPreview }, language);
  }
}
