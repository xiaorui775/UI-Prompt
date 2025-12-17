/**
 * Loaders 統一導出
 *
 * 此模組整合所有風格數據加載器，提供統一的 API：
 *
 * ## 模組結構
 *
 * - **FamilyLoader**: 加載完整 Family 數據（含 5-tier preview fallback）
 * - **ManifestLoader**: 加載 manifest.json 文件
 * - **ContentLoader**: 加載 HTML/CSS/JSX 內容文件
 * - **PromptLoader**: 加載和解析雙語 Prompt 內容
 * - **StyleIdParser**: 解析風格 ID 為 category/familyId/templateId
 * - **config/familyIdMap**: ID 映射表和風格覆蓋配置
 *
 * ## 使用方式
 *
 * ```javascript
 * // 推薦：從統一入口導入
 * import { loadFullFamily, parseStyleId, loadTemplateContent } from '../data/loaders';
 *
 * // 或導入特定模組
 * import { loadFullFamily } from '../data/loaders/FamilyLoader';
 * ```
 */

// ========== FamilyLoader ==========
export { loadFullFamily } from './FamilyLoader.js';

// ========== ManifestLoader ==========
export {
  loadFamilyManifest,
  loadTemplateManifest,
  loadCategory
} from './ManifestLoader.js';

// ========== ContentLoader ==========
export {
  fetchText,
  loadTemplateContent,
  loadPreviewContent,
  loadFamilyContent
} from './ContentLoader.js';

// ========== PromptLoader ==========
export {
  parsePromptMd,
  loadTemplatePrompts,
  loadPreviewPrompts,
  loadFamilyPrompts
} from './PromptLoader.js';

// ========== StyleIdParser ==========
export {
  getAvailableCategories,
  parseStyleId
} from './StyleIdParser.js';

// ========== Config ==========
export {
  FAMILY_ID_MAP,
  STYLE_OVERRIDES,
  normalizeId,
  resolveAlias
} from './config/familyIdMap.js';

// ========== Path Helper ==========
export {
  BASE_URL,
  buildContentPath,
  buildPromptPath,
  buildPublicPath,
  buildComponentContentPath,
  buildComponentPromptPath
} from './config/pathHelper.js';

// ========== Default Export: 提供便捷的對象式導出 ==========
import { loadFullFamily } from './FamilyLoader.js';
import { loadFamilyManifest, loadTemplateManifest, loadCategory } from './ManifestLoader.js';
import { loadTemplateContent, loadPreviewContent, loadFamilyContent } from './ContentLoader.js';
import { loadTemplatePrompts } from './PromptLoader.js';
import { getAvailableCategories, parseStyleId } from './StyleIdParser.js';

export default {
  loadFamilyManifest,
  loadTemplateManifest,
  loadTemplateContent,
  loadPreviewContent,
  loadFamilyContent,
  loadTemplatePrompts,
  loadFullFamily,
  loadCategory,
  getAvailableCategories,
  parseStyleId
};
