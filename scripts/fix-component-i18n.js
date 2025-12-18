#!/usr/bin/env node
/**
 * fix-component-i18n.js
 *
 * 修復組件 manifest.json 中的 i18n 問題
 * 將 i18n 鍵（如 "data.components.dataDisplay.list-view.title"）
 * 替換為直接的雙語文本對象
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 組件 ID 到翻譯的映射
const COMPONENT_TRANSLATIONS = {
  // Data Display
  'list-view': { 'zh-CN': '列表视图', 'en-US': 'List View' },
  'table-basic': { 'zh-CN': '基础表格', 'en-US': 'Basic Table' },
  'card-grid': { 'zh-CN': '卡片网格', 'en-US': 'Card Grid' },
  'statistics-card': { 'zh-CN': '统计卡片', 'en-US': 'Statistics Card' },
  'animated-counter': { 'zh-CN': '动画计数器', 'en-US': 'Animated Counter' },

  // Feedback
  'toast-notifications': { 'zh-CN': 'Toast 通知', 'en-US': 'Toast Notifications' },
  'modal-dialog': { 'zh-CN': '模态对话框', 'en-US': 'Modal Dialog' },
  'reaction-picker': { 'zh-CN': '表情选择器', 'en-US': 'Reaction Picker' },

  // Advanced
  'code-editor': { 'zh-CN': '代码编辑器', 'en-US': 'Code Editor' },
  'custom-scrollbar': { 'zh-CN': '自定义滚动条', 'en-US': 'Custom Scrollbar' },
  'range-slider': { 'zh-CN': '范围滑块', 'en-US': 'Range Slider' },
  'map-picker': { 'zh-CN': '地图选择器', 'en-US': 'Map Picker' },
  'rich-text-editor': { 'zh-CN': '富文本编辑器', 'en-US': 'Rich Text Editor' },
  'file-upload': { 'zh-CN': '文件上传', 'en-US': 'File Upload' },
  'scrollbar-thumb': { 'zh-CN': '滚动条滑块', 'en-US': 'Scrollbar Thumb' },
  'kanban-board': { 'zh-CN': '看板', 'en-US': 'Kanban Board' },
  'color-picker': { 'zh-CN': '颜色选择器', 'en-US': 'Color Picker' },
  'query-builder': { 'zh-CN': '查询构建器', 'en-US': 'Query Builder' },
  'calendar-date-picker': { 'zh-CN': '日历日期选择', 'en-US': 'Calendar Date Picker' },

  // Input
  'rich-textarea': { 'zh-CN': '富文本输入框', 'en-US': 'Rich Textarea' },
  'tags-input': { 'zh-CN': '标签输入', 'en-US': 'Tags Input' },
  'autocomplete-search': { 'zh-CN': '自动补全搜索', 'en-US': 'Autocomplete Search' },
};

// 變體 ID 到翻譯的映射
const VARIANT_TRANSLATIONS = {
  // Design Systems
  'minimalism': { 'zh-CN': '极简风格', 'en-US': 'Minimalism' },
  'minimalist': { 'zh-CN': '极简风格', 'en-US': 'Minimalist' },
  'material-design': { 'zh-CN': 'Material Design', 'en-US': 'Material Design' },
  'material': { 'zh-CN': 'Material Design', 'en-US': 'Material Design' },
  'bootstrap5': { 'zh-CN': 'Bootstrap 5', 'en-US': 'Bootstrap 5' },
  'bootstrap': { 'zh-CN': 'Bootstrap', 'en-US': 'Bootstrap' },
  'ant-design': { 'zh-CN': 'Ant Design', 'en-US': 'Ant Design' },

  // Visual Styles
  'neumorphism': { 'zh-CN': '拟态风格', 'en-US': 'Neumorphism' },
  'glassmorphism': { 'zh-CN': '玻璃拟态', 'en-US': 'Glassmorphism' },
  'neo-brutalism': { 'zh-CN': '新残酷主义', 'en-US': 'Neo Brutalism' },
  'skeuomorphism': { 'zh-CN': '拟物风格', 'en-US': 'Skeuomorphism' },
  'flat-design': { 'zh-CN': '扁平设计', 'en-US': 'Flat Design' },
  'minimal-flat': { 'zh-CN': '极简扁平', 'en-US': 'Minimal Flat' },

  // Tech & Future
  'cyberpunk': { 'zh-CN': '赛博朋克', 'en-US': 'Cyberpunk' },
  'neon-cyberpunk': { 'zh-CN': '霓虹赛博朋克', 'en-US': 'Neon Cyberpunk' },
  'terminal-cli': { 'zh-CN': '终端风格', 'en-US': 'Terminal CLI' },

  // Effects
  'gradient-rainbow': { 'zh-CN': '渐变彩虹', 'en-US': 'Gradient Rainbow' },
  'gradient-effects': { 'zh-CN': '渐变效果', 'en-US': 'Gradient Effects' },

  // Range Slider Variants
  'minimal-vertical': { 'zh-CN': '极简垂直滑块', 'en-US': 'Minimal Vertical' },
  'glassmorphism-dual': { 'zh-CN': '双滑块玻璃态', 'en-US': 'Glassmorphism Dual' },
  'bootstrap-price-filter': { 'zh-CN': 'Bootstrap 价格筛选', 'en-US': 'Bootstrap Price Filter' },
  'material-brightness': { 'zh-CN': 'Material 亮度调节', 'en-US': 'Material Brightness' },
  'neumorphism-volume': { 'zh-CN': '拟态音量调节', 'en-US': 'Neumorphism Volume' },

  // Scrollbar Variants
  'minimal-modern': { 'zh-CN': '现代极简', 'en-US': 'Minimal Modern' },
  'brand-customizable': { 'zh-CN': '品牌定制', 'en-US': 'Brand Customizable' },
  'interactive-enhanced': { 'zh-CN': '交互增强', 'en-US': 'Interactive Enhanced' },

  // Modal Variants
  'bottom-sheet': { 'zh-CN': '底部弹出', 'en-US': 'Bottom Sheet' },
  'side-drawer': { 'zh-CN': '侧边抽屉', 'en-US': 'Side Drawer' },
  'notification': { 'zh-CN': '通知弹窗', 'en-US': 'Notification' },
  'image-preview': { 'zh-CN': '图片预览', 'en-US': 'Image Preview' },

  // Default
  'default': { 'zh-CN': '默认样式', 'en-US': 'Default' },
};

// 組件描述模板
const COMPONENT_DESCRIPTIONS = {
  'list-view': { 'zh-CN': '用于展示数据列表的组件', 'en-US': 'Component for displaying data lists' },
  'table-basic': { 'zh-CN': '基础数据表格组件', 'en-US': 'Basic data table component' },
  'card-grid': { 'zh-CN': '网格布局的卡片展示组件', 'en-US': 'Grid layout card display component' },
  'statistics-card': { 'zh-CN': '用于展示统计数据的卡片组件', 'en-US': 'Card component for displaying statistics' },
  'animated-counter': { 'zh-CN': '带动画效果的数字计数器', 'en-US': 'Animated number counter' },
  'toast-notifications': { 'zh-CN': '轻量级的消息通知组件', 'en-US': 'Lightweight message notification component' },
  'modal-dialog': { 'zh-CN': '模态弹窗对话框组件', 'en-US': 'Modal popup dialog component' },
  'reaction-picker': { 'zh-CN': '表情/反应选择组件', 'en-US': 'Emoji/reaction picker component' },
  'code-editor': { 'zh-CN': '代码编辑器组件', 'en-US': 'Code editor component' },
  'custom-scrollbar': { 'zh-CN': '自定义样式的滚动条', 'en-US': 'Custom styled scrollbar' },
  'range-slider': { 'zh-CN': '范围选择滑块组件', 'en-US': 'Range selection slider component' },
  'map-picker': { 'zh-CN': '地图位置选择器', 'en-US': 'Map location picker' },
  'rich-text-editor': { 'zh-CN': '富文本编辑器组件', 'en-US': 'Rich text editor component' },
  'file-upload': { 'zh-CN': '文件上传组件', 'en-US': 'File upload component' },
  'scrollbar-thumb': { 'zh-CN': '滚动条滑块样式', 'en-US': 'Scrollbar thumb styles' },
  'kanban-board': { 'zh-CN': '看板任务管理组件', 'en-US': 'Kanban task management board' },
  'color-picker': { 'zh-CN': '颜色选择器组件', 'en-US': 'Color picker component' },
  'query-builder': { 'zh-CN': '可视化查询构建器', 'en-US': 'Visual query builder' },
  'calendar-date-picker': { 'zh-CN': '日历日期选择组件', 'en-US': 'Calendar date picker component' },
  'rich-textarea': { 'zh-CN': '增强型文本输入框', 'en-US': 'Enhanced textarea component' },
  'tags-input': { 'zh-CN': '标签输入组件', 'en-US': 'Tags input component' },
  'autocomplete-search': { 'zh-CN': '自动补全搜索框', 'en-US': 'Autocomplete search input' },
};

// 變體描述模板
function getVariantDescription(variantId, componentId) {
  const variantName = VARIANT_TRANSLATIONS[variantId] || { 'zh-CN': variantId, 'en-US': variantId };
  const componentName = COMPONENT_TRANSLATIONS[componentId] || { 'zh-CN': componentId, 'en-US': componentId };

  return {
    'zh-CN': `${variantName['zh-CN']}风格的${componentName['zh-CN']}实现`,
    'en-US': `${componentName['en-US']} implementation in ${variantName['en-US']} style`
  };
}

// 檢查是否是 i18n 鍵
function isI18nKey(value) {
  return typeof value === 'string' && value.startsWith('data.components.');
}

// 檢查對象是否包含 i18n 鍵
function hasI18nKeys(obj) {
  if (!obj || typeof obj !== 'object') return false;
  return Object.values(obj).some(v => isI18nKey(v));
}

// 處理單個 manifest 文件
function processManifest(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const manifest = JSON.parse(content);
  let modified = false;

  const componentId = manifest.id;

  // 修復組件名稱
  if (manifest.component?.name && hasI18nKeys(manifest.component.name)) {
    manifest.component.name = COMPONENT_TRANSLATIONS[componentId] || {
      'zh-CN': componentId,
      'en-US': componentId
    };
    modified = true;
  }

  // 修復組件描述
  if (manifest.component?.description && hasI18nKeys(manifest.component.description)) {
    manifest.component.description = COMPONENT_DESCRIPTIONS[componentId] || {
      'zh-CN': `${componentId} 组件`,
      'en-US': `${componentId} component`
    };
    modified = true;
  }

  // 修復變體
  if (Array.isArray(manifest.variants)) {
    manifest.variants = manifest.variants.map(variant => {
      const variantId = variant.id;

      // 修復變體名稱
      if (variant.name && hasI18nKeys(variant.name)) {
        variant.name = VARIANT_TRANSLATIONS[variantId] || {
          'zh-CN': variantId,
          'en-US': variantId
        };
        modified = true;
      }

      // 修復變體描述
      if (variant.description && hasI18nKeys(variant.description)) {
        variant.description = getVariantDescription(variantId, componentId);
        modified = true;
      }

      return variant;
    });
  }

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } else {
    console.log(`⏭️  Skipped (no i18n keys): ${filePath}`);
    return false;
  }
}

// 主函數
function main() {
  const baseDir = path.join(__dirname, '../src/data/components/generated');
  let fixedCount = 0;
  let totalCount = 0;

  // 遞歸查找所有 manifest.json
  function findManifests(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        findManifests(fullPath);
      } else if (entry.name === 'manifest.json') {
        totalCount++;
        try {
          if (processManifest(fullPath)) {
            fixedCount++;
          }
        } catch (error) {
          console.error(`❌ Error processing ${fullPath}:`, error.message);
        }
      }
    }
  }

  console.log('🔧 Fixing component i18n issues...\n');
  findManifests(baseDir);

  console.log(`\n📊 Summary: Fixed ${fixedCount}/${totalCount} manifest files`);
}

main();
