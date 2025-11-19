// Aggregator for Interaction templates (互動風格聚合器)
// 統一從 mouseTracking 子模板匯出分類層級資訊與模板列表
import {
  interactionTemplateStyles,
  name,
  demoUI,
  customStyles,
  description,
} from './mouseTracking'

// 分類名稱 (i18n key)
export { name }

// 用於分類卡片展示的 Demo UI 與樣式
export { demoUI, customStyles }

// 分類描述 (i18n key)
export { description }

// 互動風格模板列表
export { interactionTemplateStyles }

// 預設導出完整模板陣列，與其他風格分類保持一致
export default interactionTemplateStyles

