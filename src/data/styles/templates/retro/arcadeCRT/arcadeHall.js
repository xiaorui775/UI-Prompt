// Arcade Hall Template
// 街機大廳模板

import { arcadeHallFullPageHTML, arcadeHallFullPageStyles } from './arcadeHallFullPage.js';

export const arcadeHall = {
  id: 'retro-arcadeCRT-arcade-hall',
  title: 'styles.retro.arcadeCRT.preview.arcadeGameHall',
  description: 'styles.retro.arcadeCRT.preview.arcadeGameHallDesc',

  // Demo preview (mini version for template card)
  demoHTML: `
    <div style="background: #0a0a0a; padding: 30px; border: 3px solid #00ffff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,255,255,0.4);">
      <div style="text-align: center; margin-bottom: 20px;">
        <span style="font-size: 24px; font-weight: bold; color: #fff; text-shadow: 2px 0 0 rgba(255,0,255,0.7), -2px 0 0 rgba(0,255,255,0.7);">NEON ARCADE</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
        <div style="background: rgba(0,0,0,0.8); border: 2px solid #00ff41; border-radius: 8px; padding: 15px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 10px;">👾</div>
          <div style="color: #00ffff; font-size: 12px; text-shadow: 0 0 10px #00ffff;">SPACE INVADERS</div>
        </div>
        <div style="background: rgba(0,0,0,0.8); border: 2px solid #ffff00; border-radius: 8px; padding: 15px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 10px;">⚫</div>
          <div style="color: #ffff00; font-size: 12px; text-shadow: 0 0 10px #ffff00;">PAC-MAZE</div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button style="background: linear-gradient(180deg, #ff00ff 0%, #8b008b 100%); border: 2px solid #ff00ff; color: #fff; padding: 10px 20px; border-radius: 6px; font-weight: bold; box-shadow: 0 0 15px rgba(255,0,255,0.6);">INSERT COIN</button>
      </div>
    </div>
  `,

  customStyles: ``,

  // Full page preview
  fullPageHTML: arcadeHallFullPageHTML,
  fullPageStyles: arcadeHallFullPageStyles,

  // Template-level customPrompt
  customPrompt: {
    'zh-CN': `請創建一個街機遊戲大廳頁面，包含以下元素：

**核心組件**
1. CRT 掃描線效果 — 全屏覆蓋的掃描線動畫
2. 遊戲卡片展示 — 使用 grid 佈局展示多個遊戲（SPACE INVADERS、PAC-MAZE、BLOCK BREAKER 等）
3. 街機櫃展示 — 3D 透視效果的街機櫃，包含螢幕、搖桿、按鈕、LED 燈帶
4. 排行榜系統 — 顯示玩家名稱、分數、排名獎章
5. 投幣系統 — 投幣口視覺效果、硬幣掉落動畫、剩餘點數顯示

**視覺效果**
- RGB 色散文字效果（使用 text-shadow）
- 霓虹發光效果（使用 box-shadow）
- CRT 掃描線（使用 linear-gradient + animation）
- 像素化圖標和按鈕
- 閃爍文字（使用 steps() 動畫）

**配色方案**
- 背景: #0a0a0a（純黑）
- 霓虹粉: #ff00ff
- 霓虹藍: #00ffff
- 霓虹黃: #ffff00
- 霓虹綠: #00ff41
- 霓虹橙: #ff6600

請使用 TailwindCSS 創建，確保響應式設計（手機、平板、桌面）。`,
    'en-US': `Please create an arcade game hall page with the following elements:

**Core Components**
1. CRT Scanlines Effect — Full-screen scanline animation overlay
2. Game Card Display — Grid layout showcasing multiple games (SPACE INVADERS, PAC-MAZE, BLOCK BREAKER, etc.)
3. Arcade Cabinet Showcase — 3D perspective arcade cabinets with screens, joysticks, buttons, LED strips
4. Leaderboard System — Display player names, scores, ranking medals
5. Coin System — Coin slot visual, coin drop animation, remaining credits display

**Visual Effects**
- RGB chromatic aberration text (using text-shadow)
- Neon glow effects (using box-shadow)
- CRT scanlines (using linear-gradient + animation)
- Pixelated icons and buttons
- Blinking text (using steps() animation)

**Color Scheme**
- Background: #0a0a0a (pure black)
- Neon Magenta: #ff00ff
- Neon Cyan: #00ffff
- Neon Yellow: #ffff00
- Neon Green: #00ff41
- Neon Orange: #ff6600

Create using TailwindCSS with responsive design (mobile, tablet, desktop).`
  },

  // Template-level stylePrompt
  stylePrompt: {
    'zh-CN': `使用 TailwindCSS 創建街機大廳界面，包含完整的遊戲卡片、街機櫃、排行榜和投幣系統。`,
    'en-US': `Create arcade hall interface using TailwindCSS with complete game cards, arcade cabinets, leaderboards, and coin system.`
  }
};

export default arcadeHall;
