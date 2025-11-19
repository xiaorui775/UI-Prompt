// Arcade Hall Template - Self-Contained Version
// 街機大廳模板 - 自包含版本（無需外部 CDN）
// Now using self-contained version that works without external CDN dependencies

// Import original version (kept as backup)
// import { GLM_4_6_1_FullPageHTML, GLM_4_6_1_FullPageStyles } from './GLM-4.6-1-FullPage.js';

// Import self-contained version (NO external CDN required - all assets inline)
import { GLM_4_6_1_SelfContained_HTML, GLM_4_6_1_SelfContained_Styles } from './GLM-4.6-1-SelfContained.js';

export const GLM_4_6_1 = {
  id: 'Arcade-GLM-4.6-1',
  title: 'Created By GLM 4.6 ✅',  // ✅ indicates self-contained version

  // Full page preview - using self-contained version (works offline)
  fullPageHTML: GLM_4_6_1_SelfContained_HTML,
  fullPageStyles: GLM_4_6_1_SelfContained_Styles,

  // Note: This version includes:
  // - Inline Tailwind CSS utility classes (no CDN needed)
  // - Unicode emoji icons (replacing Font Awesome)
  // - System font fallbacks (replacing Google Fonts)
  // - All styles embedded in HTML
};

export default GLM_4_6_1;
