/**
 * Family 加載器
 * 負責加載完整的 Family 數據（包含所有 Templates 和 Previews）
 *
 * ## Preview 處理優先級（由高到低）
 *
 * **Level 1: manifest.previews 嵌入內容**
 * - 條件: templateManifest.previews 存在且 preview.html 是非空字符串
 * - 來源: Template JSON 文件中直接嵌入的 HTML/CSS
 *
 * **Level 2: manifest.previews 引用 + templateContent**
 * - 條件: templateManifest.previews 存在但 preview.html 為空或路徑
 * - 來源: 從 public/data/content/ fetch 的 fullPageHTML/fullPageStyles
 *
 * **Level 3: 自動生成 preview（無 manifest.previews）**
 * - 條件: 沒有 manifest.previews，但有 fullPageJSX/fullPageHTML > MIN_PREVIEW_CONTENT_LENGTH
 *
 * **Level 4: Family 級別 preview 合併**
 * - 行為: 如果 Family 沒有 previews，合併所有 templates 的 previews
 *
 * **Level 5: Fallback 到 demoHTML**
 * - 條件: 以上都失敗，使用第一個 template 的 demo 內容
 */

import { createLogger } from '../../utils/logger';
import { MIN_PREVIEW_CONTENT_LENGTH } from '../../utils/constants';
import { STYLE_OVERRIDES } from './config/familyIdMap.js';
import { loadFamilyManifest, loadTemplateManifest } from './ManifestLoader.js';
import { loadTemplateContent, loadPreviewContent, loadFamilyContent } from './ContentLoader.js';
import { loadTemplatePrompts, loadPreviewPrompts } from './PromptLoader.js';

const logger = createLogger('FamilyLoader');

/**
 * 處理單個 Preview 的內容加載
 * @private
 */
async function processPreview(preview, category, familyId, templateContent, templatePrompts) {
  // 嘗試從 preview 專屬目錄加載內容
  const previewContent = await loadPreviewContent(category, familyId, preview.id);

  // 嘗試加載 preview 專屬的 prompts
  const previewPrompts = await loadPreviewPrompts(category, familyId, preview.id);

  // 檢測是否為 JSX 模式
  const jsxContent = previewContent.fullPageJSX
    || templateContent.fullPageJSX
    || previewContent.demoJSX
    || templateContent.demoJSX
    || ((typeof preview.demoJSX === 'string' && preview.demoJSX.length > 0) ? preview.demoJSX : '');
  const isJSX = !!jsxContent
    || previewContent.renderMode === 'jsx'
    || templateContent.renderMode === 'jsx'
    || preview.renderMode === 'jsx';

  // JSX 模式：優先使用從文件加載的 fullPageJSX
  const demoJSX = isJSX ? (jsxContent || '') : '';

  // HTML 模式：優先使用 preview 專屬內容
  let html = previewContent.fullPageHTML
    || templateContent.fullPageHTML
    || templateContent.demoHTML
    || ((typeof preview.html === 'string' && preview.html.length > 0) ? preview.html : '');

  let styles = previewContent.fullPageStyles
    || templateContent.fullPageStyles
    || templateContent.customStyles
    || ((typeof preview.styles === 'string' && preview.styles.length > 0) ? preview.styles : '');

  // 加載 preview 的 JS 腳本
  const script = previewContent.fullPageScript || '';

  // 應用風格覆蓋配置
  const override = STYLE_OVERRIDES[familyId];
  if (override && templateContent.demoHTML) {
    if (override.preferDemo) {
      html = templateContent.demoHTML;
    }
    if (override.forceCardStyle) {
      styles = templateContent.customStyles || styles;
    }
  }

  return {
    ...preview,
    // JSX 模式下傳遞 demoJSX 和 renderMode
    ...(isJSX && demoJSX ? {
      demoJSX,
      renderMode: 'jsx',
      styles,
      html: ''  // JSX 模式下清空 HTML
    } : {
      html,
      styles
    }),
    previewId: preview.previewId || preview.id,
    ...(script ? { script } : {}),
    // 傳遞 preview 專屬的 prompts
    customPrompt: previewPrompts.customPrompt || templatePrompts.customPrompt,
    stylePrompt: previewPrompts.stylePrompt || templatePrompts.stylePrompt
  };
}

/**
 * 處理單個 Template 的加載
 * @private
 */
async function processTemplate(styleEntry, category, familyId) {
  const templateId = typeof styleEntry === 'string' ? styleEntry : styleEntry.id;
  const entryTitle = typeof styleEntry === 'object' ? styleEntry.title : null;

  logger.debug(`加載模板: ${templateId}`);

  // 並行加載 manifest、content、prompts
  const [templateManifest, templateContent, templatePrompts] = await Promise.all([
    loadTemplateManifest(category, familyId, templateId),
    loadTemplateContent(category, familyId, templateId),
    loadTemplatePrompts(category, familyId, templateId)
  ]);

  logger.debug(`模板 ${templateId} 內容:`,
    templateContent.demoHTML ? `${templateContent.demoHTML.length} chars` : '(empty)',
    'fullPageHTML:', templateContent.fullPageHTML ? `${templateContent.fullPageHTML.length} chars` : '(empty)',
    'fullPageJSX:', templateContent.fullPageJSX ? `${templateContent.fullPageJSX.length} chars` : '(empty)');

  // 合併 title
  const resolvedTitle = entryTitle || templateManifest?.title || templateId;

  // ========================================================
  // Preview 處理邏輯 (Level 1-3)
  // ========================================================
  let processedPreviews = [];

  // Level 1 & 2: manifest.previews 存在時的處理
  if (templateManifest?.previews && Array.isArray(templateManifest.previews) && templateManifest.previews.length > 0) {
    processedPreviews = await Promise.all(
      templateManifest.previews.map(preview =>
        processPreview(preview, category, familyId, templateContent, templatePrompts)
      )
    );

    const firstPreview = processedPreviews[0];
    const contentType = firstPreview?.renderMode === 'jsx' ? 'JSX' : 'HTML';
    const contentLength = firstPreview?.renderMode === 'jsx' ? firstPreview?.demoJSX?.length : firstPreview?.html?.length;
    logger.debug(`模板 ${templateId} 從 manifest 處理了 ${processedPreviews.length} 個 previews, ${contentType}: ${contentLength || 0} chars`);
  }
  // Level 3A: 自動生成 JSX preview
  else if (templateContent.fullPageJSX && templateContent.fullPageJSX.length > MIN_PREVIEW_CONTENT_LENGTH) {
    processedPreviews = [{
      id: templateId.replace(/^.*-/, ''),
      name: resolvedTitle,
      type: 'fullpage',
      renderMode: templateContent.renderMode || 'jsx',
      jsxMode: templateContent.jsxMode,
      demoJSX: templateContent.fullPageJSX,
      styles: templateContent.fullPageStyles || templateContent.customStyles || '',
      previewId: templateId
    }];
    logger.debug(`模板 ${templateId} 自動生成 preview, JSX: ${templateContent.fullPageJSX.length} chars, mode: ${templateContent.renderMode || 'jsx'}`);
  }
  // Level 3B: 自動生成 HTML preview
  else if (templateContent.fullPageHTML && templateContent.fullPageHTML.length > MIN_PREVIEW_CONTENT_LENGTH) {
    processedPreviews = [{
      id: templateId.replace(/^.*-/, ''),
      name: resolvedTitle,
      type: 'fullpage',
      html: templateContent.fullPageHTML,
      styles: templateContent.fullPageStyles || templateContent.customStyles || '',
      previewId: templateId
    }];
    logger.debug(`模板 ${templateId} 自動生成 preview, HTML: ${templateContent.fullPageHTML.length} chars`);
  }
  // Level 3C: 回退到 demoHTML
  else if (templateContent.demoHTML && templateContent.demoHTML.length > 0) {
    processedPreviews = [{
      id: templateId.replace(/^.*-/, ''),
      name: resolvedTitle,
      type: 'demo',
      html: templateContent.demoHTML,
      styles: templateContent.customStyles || '',
      previewId: templateId,
      isIncomplete: true
    }];
    logger.debug(`模板 ${templateId} 回退到 demoHTML: ${templateContent.demoHTML.length} chars（標記為不完整）`);
  }

  return {
    id: templateId,
    title: resolvedTitle,
    ...templateManifest,
    ...templateContent,
    ...templatePrompts,
    ...(processedPreviews.length > 0 ? { previews: processedPreviews } : {})
  };
}

/**
 * 加載完整的 Family 數據（包含所有 Templates）
 *
 * @param {string} category - 分類 ID (core, visual, retro, interaction, layout)
 * @param {string} familyId - Family ID (e.g., skeuomorphism, glassmorphism)
 * @returns {Promise<Object>} 完整的 Family 數據，包含所有 templates 和 previews
 */
export async function loadFullFamily(category, familyId) {
  logger.debug(`開始加載: ${category}/${familyId}`);

  // 1. 加載 Family Manifest
  const manifest = await loadFamilyManifest(category, familyId);
  if (!manifest) {
    logger.warn(`Manifest 加載失敗: ${category}/${familyId}`);
    return null;
  }
  logger.debug(`Manifest 已加載:`, manifest.id, '模板數:', manifest.templates?.length || 0);

  // 2. 加載 Family 級別內容
  let familyContent = await loadFamilyContent(category, familyId);
  logger.debug(`Family 內容:`, familyContent.demoHTML ? `${familyContent.demoHTML.length} chars` : '(empty)');

  const familyPrompts = await loadTemplatePrompts(category, familyId, null);
  logger.debug(`Family Prompts 已加載`);

  // 3. 加載所有 Templates
  const templateIds = manifest.templates || manifest.styles || [];
  logger.debug(`開始加載 ${templateIds.length} 個模板...`);

  const templates = await Promise.all(
    templateIds.map(styleEntry => processTemplate(styleEntry, category, familyId))
  );
  logger.debug(`所有模板加載完成`);

  // 4. 如果 Family 級別沒有 demoHTML，使用第一個 Template 的內容
  if (!familyContent.demoHTML && templates.length > 0) {
    const firstTemplate = templates[0];
    familyContent = {
      demoHTML: firstTemplate.demoHTML || firstTemplate.fullPageHTML || '',
      customStyles: firstTemplate.customStyles || firstTemplate.fullPageStyles || ''
    };
    logger.debug(`使用第一個模板的內容作為 Family 內容`);
  }

  // 提取 Family 元數據
  const familyMeta = manifest.family || {};
  const familyTitle = familyMeta.name || familyMeta;
  const familyDesc = familyMeta.description || {};

  const result = {
    id: manifest.id || `${category}-${familyId}`,
    category: manifest.category || category,
    familyId: familyId,
    title: familyContent?.title || familyTitle,
    description: familyDesc,
    ...familyContent,
    ...familyPrompts,
    templates
  };

  // ========================================================
  // Level 4: Family 級別 preview 合併
  // ========================================================
  if (!result.previews && templates.length > 0) {
    const allPreviews = [];

    templates.forEach(t => {
      if (t.previews && t.previews.length > 0) {
        t.previews.forEach(preview => {
          const hasContent = preview.html?.length > MIN_PREVIEW_CONTENT_LENGTH || preview.demoJSX?.length > MIN_PREVIEW_CONTENT_LENGTH;
          if (hasContent) {
            allPreviews.push({
              ...preview,
              templateId: t.id,
              templateTitle: t.title || t.id,
              name: preview.name || t.title || t.id,
              customPrompt: preview.customPrompt || t.customPrompt,
              stylePrompt: preview.stylePrompt || t.stylePrompt
            });
          }
        });
      }
    });

    if (allPreviews.length > 0) {
      result.previews = allPreviews;
      // 使用第一個 preview 作為默認的 fullPage 內容
      const firstPreview = allPreviews[0];
      if (firstPreview.renderMode === 'jsx' && firstPreview.demoJSX) {
        result.demoJSX = firstPreview.demoJSX;
        result.renderMode = 'jsx';
        result.fullPageStyles = firstPreview.styles || '';
      } else {
        result.fullPageHTML = firstPreview.html;
        result.fullPageStyles = firstPreview.styles || '';
      }
      logger.debug(`合併了 ${allPreviews.length} 個 previews 來自 ${templates.length} 個模板`);
    }
  }

  logger.debug(`加載完成: ${result.id}, demoHTML: ${result.demoHTML?.length || 0} chars, fullPageHTML: ${result.fullPageHTML?.length || 0} chars, previews: ${result.previews?.length || 0}, 模板: ${templates.length}`);
  logger.debug(`Final ID: "${result.id}" (${result.id?.length} chars)`);

  return result;
}

export default {
  loadFullFamily
};
