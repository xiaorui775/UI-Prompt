// Modern Brutalism - Developer Workspace Template

import { brutalismFullPageHTML, brutalismFullPageStyles } from './brutalismFullPage';

export const modernBrutalismDevWorkspace = {
  id: 'modern-brutalism-dev-workspace',
  title: 'styles.modern.brutalism.preview.developerWorkspace',
  description: 'styles.modern.brutalism.preview.developerWorkspaceDesc',

  // Card demo HTML
  demoHTML: `
    <div class="space-y-6 text-center">
      <h4 class="text-4xl font-bold">RAW</h4>
      <button class="px-8 py-3 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition-colors duration-200">
        ENTER
      </button>
    </div>
  `,

  customStyles: '',

  // Complete page preview
  fullPageHTML: brutalismFullPageHTML,
  fullPageStyles: brutalismFullPageStyles,
  fullPagePreviewId: 'modern-brutalism-dev-workspace',

  // Color scheme
  colorScheme: {
    'zh-cn': '主色黑色 (#000000)、白色 (#ffffff)、强调色红色 (#ff0000)、次色浅灰 (#cccccc)、深灰 (#f5f5f5)',
    'en-US': 'Primary black (#000000), white (#ffffff), accent red (#ff0000), secondary light gray (#cccccc), dark gray (#f5f5f5)'
  },

  // Feature highlights for this variant
  features: [
    '代碼編輯器界面：行號、語法高亮、文件標籤',
    '終端命令窗口：黑色背景、綠色文字、命令歷史',
    'Git 提交時間軸：提交卡片、作者信息、分支標記',
    'API 調試工具：HTTP 方法選擇、請求/響應區',
    '文件樹導航：資料夾結構、彩色文件圖標',
    '系統監控面板：CPU/記憶體/磁盤/網絡進度條',
    '快捷鍵卡片：常用命令展示、快捷鍵組合',
    '狀態指示燈：在線/同步/就緒 LED 燈效果'
  ]
};
