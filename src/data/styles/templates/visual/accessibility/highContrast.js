// Modern Accessibility - High Contrast Template

import {
  accessibilityHighContrastFullPageHTML,
  accessibilityHighContrastFullPageStyles
} from './accessibilityHighContrastFullPage';

export const modernAccessibilityHighContrast = {
  id: 'modern-accessibility-high-contrast',
  title: 'styles.accessibilityHighContrast.title',
  description: 'styles.accessibilityHighContrast.description',
  demoHTML: `
    <div class="p-6 bg-black text-white space-y-4">
      <h3 class="text-2xl font-bold border-b-2 border-white pb-2">High Contrast Mode</h3>
      <p class="text-lg leading-relaxed">
        Designed for maximum readability with enhanced color contrast ratios (WCAG AAA compliance).
      </p>
      <div class="flex gap-4">
        <button class="px-6 py-3 bg-white text-black font-bold hover:bg-yellow-400 hover:text-black transition-colors border-2 border-white">
          Primary Action
        </button>
        <button class="px-6 py-3 bg-transparent text-white font-bold border-2 border-white hover:bg-white hover:text-black transition-colors">
          Secondary
        </button>
      </div>
    </div>
  `,
  customStyles: '',
  fullPageHTML: accessibilityHighContrastFullPageHTML,
  fullPageStyles: accessibilityHighContrastFullPageStyles,
  fullPagePreviewId: 'modern-accessibility-high-contrast',
  colorScheme: {
    'zh-cn': '主色纯黑 (#000000)、纯白 (#ffffff)、焦点黄 (#ffff00)、错误红 (#ff0000)、成功绿 (#00ff00)',
    'en-US': 'Primary pure black (#000000), pure white (#ffffff), focus yellow (#ffff00), error red (#ff0000), success green (#00ff00)'
  },
  features: [
    '極高對比度：黑白配色確保 21:1 對比度 (WCAG AAA)',
    '粗體文字：所有文字使用 700 權重提升可讀性',
    '明確焦點狀態：使用黃色邊框標示當前焦點元素',
    '大尺寸元素：按鈕、表單控件使用放大尺寸 (48px 最小觸控目標)',
    '無漸層無陰影：避免視覺混淆的純色設計',
    '鍵盤導航友好：所有交互元素支持 Tab 鍵導航',
    '屏幕閱讀器優化：完整的 ARIA 標籤和語義化 HTML',
    '清晰的錯誤提示：使用圖標+文字+顏色三重提示'
  ]
};
