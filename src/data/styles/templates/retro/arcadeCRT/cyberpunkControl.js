// Cyberpunk Control Center Template
// 賽博龐克控制中心模板

import { cyberpunkControlFullPageHTML, cyberpunkControlFullPageStyles } from './cyberpunkControlFullPage.js';

export const cyberpunkControl = {
  id: 'retro-arcadeCRT-cyberpunk-control',
  title: 'styles.retro.arcadeCRT.preview.cyberpunkControl',
  description: 'styles.retro.arcadeCRT.preview.cyberpunkControlDesc',

  // Demo preview (mini version for template card)
  demoHTML: `
    <div style="background: #0a0a0a; padding: 30px; border: 3px solid #ff00ff; border-radius: 12px; box-shadow: 0 0 20px rgba(255,0,255,0.4);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 20px; font-weight: bold; color: #fff; text-shadow: 2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7);">CYBER CONTROL</span>
      </div>

      <!-- Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 15px;">
        <div style="background: rgba(0,0,0,0.6); border: 2px solid #ff00ff; border-radius: 6px; padding: 12px;">
          <div style="font-size: 10px; color: #888; margin-bottom: 4px;">CPU</div>
          <div style="font-size: 18px; font-weight: bold; color: #ff00ff; text-shadow: 0 0 10px #ff00ff;">78.5%</div>
        </div>
        <div style="background: rgba(0,0,0,0.6); border: 2px solid #00ffff; border-radius: 6px; padding: 12px;">
          <div style="font-size: 10px; color: #888; margin-bottom: 4px;">Memory</div>
          <div style="font-size: 18px; font-weight: bold; color: #00ffff; text-shadow: 0 0 10px #00ffff;">12.4 GB</div>
        </div>
      </div>

      <!-- Form -->
      <div style="background: rgba(0,0,0,0.6); border: 2px solid rgba(0,255,255,0.3); border-radius: 6px; padding: 12px; margin-bottom: 12px;">
        <div style="font-size: 10px; color: #00ffff; margin-bottom: 6px; text-shadow: 0 0 10px #00ffff;">System Name</div>
        <input type="text" value="CYBER-NODE-01" style="width: 100%; background: rgba(0,0,0,0.8); border: 1px solid rgba(0,255,255,0.3); border-radius: 4px; padding: 6px; color: #fff; font-size: 12px;" />
      </div>

      <!-- Buttons -->
      <div style="display: flex; gap: 10px;">
        <button style="flex: 1; background: linear-gradient(135deg, #ff00ff 0%, #cc00cc 100%); border: 2px solid #ff00ff; color: #fff; padding: 8px; border-radius: 6px; font-weight: bold; font-size: 11px; box-shadow: 0 0 15px rgba(255,0,255,0.4);">SAVE</button>
        <button style="flex: 1; background: rgba(0,0,0,0.6); border: 2px solid rgba(255,255,255,0.3); color: #fff; padding: 8px; border-radius: 6px; font-weight: bold; font-size: 11px;">CANCEL</button>
      </div>
    </div>
  `,

  customStyles: ``,

  // Full page preview
  fullPageHTML: cyberpunkControlFullPageHTML,
  fullPageStyles: cyberpunkControlFullPageStyles,

  // Template-level customPrompt
  customPrompt: {
    'zh-CN': `請創建一個賽博龐克控制中心頁面，包含以下元素：

**核心組件**
1. 系統儀表板 — CPU、記憶體、網路、儲存統計卡片（包含進度條）
2. 表單系統 — 文字輸入、選擇器、密碼欄位、核取方塊、單選按鈕、文字區域
3. 狀態反饋 — 載入動畫（旋轉器、進度條）、通知訊息（成功/警告/錯誤/資訊）、Toast 訊息
4. 數據可視化 — 統計卡片（帶趨勢指標）、時間軸、數據表格（帶分頁）
5. 互動控制 — 切換開關、範圍滑桿、標籤頁、手風琴面板

**視覺效果**
- CRT 掃描線效果（固定全屏覆蓋）
- RGB 色散文字（使用 text-shadow）
- 霓虹發光按鈕和邊框
- 數據流動效果（背景漸變動畫）
- 脈衝動畫（狀態指示器、計時器）

**配色方案**
- 背景: #0a0a0a（純黑）
- 霓虹粉: #ff00ff
- 霓虹藍: #00ffff
- 霓虹黃: #ffff00
- 霓虹綠: #00ff41
- 霓虹橙: #ff6600
- 霓虹紅: #ff0040

**響應式設計**
- 桌面: 多欄佈局
- 平板: 雙欄佈局
- 手機: 單欄佈局

請使用 TailwindCSS 創建，確保所有表單組件和互動元素都有完整的樣式。`,
    'en-US': `Please create a cyberpunk control center page with the following elements:

**Core Components**
1. System Dashboard — CPU, Memory, Network, Storage stat cards (with progress bars)
2. Form System — Text inputs, selects, password fields, checkboxes, radio buttons, textareas
3. Status Feedback — Loading animations (spinners, progress bars), notifications (success/warning/error/info), toast messages
4. Data Visualization — Stat cards (with trend indicators), timeline, data tables (with pagination)
5. Interactive Controls — Toggle switches, range sliders, tabs, accordion panels

**Visual Effects**
- CRT scanlines effect (fixed full-screen overlay)
- RGB chromatic aberration text (using text-shadow)
- Neon glow buttons and borders
- Data stream effects (background gradient animation)
- Pulse animations (status indicators, timers)

**Color Scheme**
- Background: #0a0a0a (pure black)
- Neon Magenta: #ff00ff
- Neon Cyan: #00ffff
- Neon Yellow: #ffff00
- Neon Green: #00ff41
- Neon Orange: #ff6600
- Neon Red: #ff0040

**Responsive Design**
- Desktop: Multi-column layout
- Tablet: Two-column layout
- Mobile: Single-column layout

Create using TailwindCSS with complete styling for all form components and interactive elements.`
  },

  // Template-level stylePrompt
  stylePrompt: {
    'zh-CN': `使用 TailwindCSS 創建賽博龐克控制中心界面，包含完整的表單組件、狀態反饋、數據可視化和實時監控系統。`,
    'en-US': `Create cyberpunk control center interface using TailwindCSS with complete form components, status feedback, data visualization, and real-time monitoring system.`
  }
};

export default cyberpunkControl;
