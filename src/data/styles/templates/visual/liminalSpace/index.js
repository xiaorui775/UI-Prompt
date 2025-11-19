// Liminal Space - 邊界空間 / 曖昧過渡空間設計
// Visual Substyle (單一模板)

import {
  liminalSpaceVacantFullPageHTML,
  liminalSpaceVacantFullPageStyles
} from './liminalSpaceVacantFullPage'
import {
  liminalSpaceMuseumFullPageHTML,
  liminalSpaceMuseumFullPageStyles
} from './liminalSpaceMuseumFullPage'

// Demo HTML for StyleCard preview
export const demoHTML = `
<div class="liminal-demo-wrapper">
  <div class="liminal-demo-card">
    <div class="liminal-card-glow"></div>
    <div class="liminal-card-content">
      <h3 class="liminal-card-title">TERMINAL_A</h3>
      <p class="liminal-card-text">// Vacant Terminal Site</p>
      <div class="liminal-status">
        <span class="liminal-led pink"></span>
        <span class="liminal-status-text">INACTIVE</span>
      </div>
    </div>
  </div>
</div>
`

// Custom Styles for StyleCard preview (reference existing CSS in index.css)
export const customStyles = `
/* Liminal Space Demo Styles - 已存在於 src/index.css (行 1251-1472) */
/* 此處僅作引用說明，實際樣式使用全局 CSS */
`

// Main Liminal Space style object
export const liminalSpace = {
  id: 'visual-liminalSpace',
  title: 'styles.visual.liminalSpace.title',
  description: 'styles.visual.liminalSpace.description',

  // Demo HTML and Styles (for StyleCard preview)
  demoHTML,
  customStyles,

  // CustomPrompt (雙語 AI 指令)
  customPrompt: {
    'zh-CN': `請使用 TailwindCSS 創建一個 **Liminal Space（邊界空間）** 風格的界面。

**核心設計理念**

Liminal Space 是一種介於存在與虛無之間的曖昧過渡空間設計風格，營造出空曠、不安、介於真實與虛幻之間的數位美學體驗。

---

## 核心設計要求

### 1. **曖昧空間感**
   - 設計理念：介於"存在"與"不存在"之間，曖昧、過渡、空曠的空間感
   - CSS 示例：
\`\`\`css
.liminal-space {
  background: linear-gradient(135deg, #1a1d24 0%, #2c3038 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
\`\`\`

### 2. **深灰基調 + 霓虹雙色系**
   - 配色方案：
     * 主背景：#1a1d24, #2c3038（深灰基調）
     * 霓虹粉紅：#ff006a（強調色 1）
     * 霓虹青藍：#00ffcc（強調色 2）
     * 灰色文字：#5f6472, #8a8f9e, #3d4250
   - CSS 示例：
\`\`\`css
.liminal-text-primary {
  color: #8a8f9e;
}

.liminal-neon-pink {
  color: #ff006a;
  text-shadow: 0 0 10px rgba(255, 0, 106, 0.8),
               0 0 20px rgba(255, 0, 106, 0.6);
}

.liminal-neon-cyan {
  color: #00ffcc;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}
\`\`\`

### 3. **多層背景效果（霧化、噪點、掃描線）**
   - 技術手法：疊加多層透明背景效果，營造數位質感
   - CSS 示例：
\`\`\`css
/* 霧化層 */
.liminal-fog {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%);
}

/* 噪點紋理 */
.liminal-noise {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.3;
}

/* 掃描線動畫 */
.liminal-scanlines {
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  animation: scanlineMove 20s linear infinite;
}

@keyframes scanlineMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}
\`\`\`

### 4. **漂浮粒子動畫**
   - 設計要點：緩慢、隨機漂浮的霓虹粒子，增強空間感
   - CSS 示例：
\`\`\`css
.liminal-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ff006a 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.6);
  animation: liminalFloat 12s ease-in-out infinite;
}

@keyframes liminalFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-15px) translateX(8px);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) translateX(-5px);
    opacity: 0.5;
  }
}
\`\`\`

### 5. **霓虹發光文字效果**
   - 技術手法：多層陰影模擬霓虹燈管發光
   - CSS 示例：
\`\`\`css
.liminal-neon-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ff006a;
  text-shadow:
    0 0 10px rgba(255, 0, 106, 0.8),
    0 0 20px rgba(255, 0, 106, 0.6),
    0 0 40px rgba(255, 0, 106, 0.4),
    0 0 80px rgba(255, 0, 106, 0.2);
  animation: neonFlicker 3s ease-in-out infinite;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
  55% { opacity: 0.88; }
  60% { opacity: 1; }
}
\`\`\`

### 6. **玻璃態組件（Glassmorphism）**
   - 設計要點：半透明背景 + 模糊效果，製造曖昧層次感
   - CSS 示例：
\`\`\`css
.liminal-glass {
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.3);
}
\`\`\`

### 7. **終端/系統界面美學**
   - 設計要點：等寬字體、系統代碼感、終端視覺語言
   - CSS 示例：
\`\`\`css
.liminal-terminal {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  color: #8a8f9e;
}

.liminal-system-text {
  font-size: 0.75rem;
  color: #5f6472;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

/* LED 狀態指示燈 */
.liminal-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff006a;
  box-shadow: 0 0 10px rgba(255, 0, 106, 0.8);
  animation: ledPulse 2s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
\`\`\`

### 8. **緩慢、不安的過渡效果**
   - 設計要點：6-8 秒長的過渡動畫，營造不安定感
   - CSS 示例：
\`\`\`css
.liminal-transition {
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\`

---

## 配色方案（完整參考）

**主色調**
- 深灰基調 1：#1a1d24
- 深灰基調 2：#2c3038
- 深灰基調 3：#252830, #2f3440

**強調色**
- 霓虹粉紅：#ff006a
- 霓虹青藍：#00ffcc

**文字顏色**
- 主要文字：#8a8f9e
- 次要文字：#5f6472
- 輔助文字：#3d4250

---

## 關鍵組件 CSS 示例

### 卡片組件（深層陰影）
\`\`\`css
.liminal-card {
  background: rgba(47, 52, 64, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.4),
    0 80px 160px rgba(0, 0, 0, 0.5);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 50px 100px rgba(0, 0, 0, 0.35),
    0 75px 150px rgba(0, 0, 0, 0.45),
    0 100px 200px rgba(0, 0, 0, 0.55);
}
\`\`\`

### 霓虹按鈕
\`\`\`css
.liminal-button {
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  box-shadow:
    0 0 15px rgba(0, 255, 204, 0.4),
    inset 0 0 15px rgba(0, 255, 204, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-button:hover {
  background: rgba(0, 255, 204, 0.1);
  box-shadow:
    0 0 25px rgba(0, 255, 204, 0.7),
    inset 0 0 25px rgba(0, 255, 204, 0.2);
}
\`\`\`

### 表單輸入框
\`\`\`css
.liminal-input {
  padding: 1rem;
  background: rgba(26, 29, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #8a8f9e;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.3em;
  text-align: center;
  transition: all 0.6s;
}

.liminal-input:focus {
  border-color: #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.6);
}
\`\`\`

---

## 間距系統

- 超大間距（區塊之間）：8rem
- 大間距（組件之間）：4rem
- 中間距（卡片網格間隙）：3-4rem
- 小間距（元素之間）：1-2rem
- 微間距（內部元素）：0.5-1rem

---

## 字體系統

- 主標題：clamp(2rem, 8vw, 4.5rem)
- 副標題：clamp(0.9rem, 2vw, 1.2rem)
- 正文：1rem / 0.85rem
- 小標籤：0.75rem / 0.65rem
- 字體家族：'Courier New', monospace（終端風格）

---

## 重要提示

1. **緩慢過渡**：所有交互動畫使用 6-8 秒過渡時間，製造不安定感
2. **多層疊加**：背景效果必須使用 3-5 層疊加（霧化、噪點、掃描線、暈影）
3. **霓虹發光**：所有強調元素使用多層 box-shadow 或 text-shadow 模擬霓虹效果
4. **深層陰影**：卡片組件使用 4-5 層深層陰影，營造空間深度
5. **等寬字體**：所有文字必須使用 Courier New 或 monospace 字體
6. **曖昧層次**：大量使用半透明背景（rgba）和 backdrop-filter 製造曖昧感
7. **避免飽和色**：除霓虹強調色外，其他顏色保持低飽和度灰調
8. **LED 動畫**：狀態指示使用脈衝動畫（ledPulse）`,

    'en-US': `Please create a **Liminal Space** style interface using TailwindCSS.

**Core Design Concept**

Liminal Space is an ambiguous transitional space design style that exists between presence and nothingness, creating a vacant, unsettling, digital aesthetic experience between reality and virtuality.

---

## Core Design Requirements

### 1. **Ambiguous Spatial Feel**
   - Design Concept: Space between "existence" and "non-existence" - ambiguous, transitional, and vacant
   - CSS Example:
\`\`\`css
.liminal-space {
  background: linear-gradient(135deg, #1a1d24 0%, #2c3038 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
\`\`\`

### 2. **Dark Gray Base + Neon Dual Color System**
   - Color Scheme:
     * Main Background: #1a1d24, #2c3038 (dark gray base)
     * Neon Pink: #ff006a (accent color 1)
     * Neon Cyan: #00ffcc (accent color 2)
     * Gray Text: #5f6472, #8a8f9e, #3d4250
   - CSS Example:
\`\`\`css
.liminal-text-primary {
  color: #8a8f9e;
}

.liminal-neon-pink {
  color: #ff006a;
  text-shadow: 0 0 10px rgba(255, 0, 106, 0.8),
               0 0 20px rgba(255, 0, 106, 0.6);
}

.liminal-neon-cyan {
  color: #00ffcc;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}
\`\`\`

### 3. **Multi-Layer Background Effects (Fog, Noise, Scanlines)**
   - Technical Approach: Layered transparent background effects for digital texture
   - CSS Example:
\`\`\`css
/* Fog Layer */
.liminal-fog {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 100%);
}

/* Noise Texture */
.liminal-noise {
  background-image: url("data:image/svg+xml,...");
  opacity: 0.3;
}

/* Scanline Animation */
.liminal-scanlines {
  background-image: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    transparent 1px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 3px
  );
  animation: scanlineMove 20s linear infinite;
}

@keyframes scanlineMove {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}
\`\`\`

### 4. **Floating Particle Animation**
   - Design Point: Slow, randomly floating neon particles to enhance spatial feel
   - CSS Example:
\`\`\`css
.liminal-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ff006a 0%, transparent 70%);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 0, 106, 0.6);
  animation: liminalFloat 12s ease-in-out infinite;
}

@keyframes liminalFloat {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.4;
  }
  33% {
    transform: translateY(-15px) translateX(8px);
    opacity: 0.7;
  }
  66% {
    transform: translateY(10px) translateX(-5px);
    opacity: 0.5;
  }
}
\`\`\`

### 5. **Neon Glow Text Effect**
   - Technical Approach: Multi-layer shadows simulating neon tube glow
   - CSS Example:
\`\`\`css
.liminal-neon-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ff006a;
  text-shadow:
    0 0 10px rgba(255, 0, 106, 0.8),
    0 0 20px rgba(255, 0, 106, 0.6),
    0 0 40px rgba(255, 0, 106, 0.4),
    0 0 80px rgba(255, 0, 106, 0.2);
  animation: neonFlicker 3s ease-in-out infinite;
}

@keyframes neonFlicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.92; }
  55% { opacity: 0.88; }
  60% { opacity: 1; }
}
\`\`\`

### 6. **Glassmorphism Components**
   - Design Point: Semi-transparent background + blur effect for ambiguous layering
   - CSS Example:
\`\`\`css
.liminal-glass {
  background: rgba(37, 40, 48, 0.6);
  backdrop-filter: blur(20px) saturate(80%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 60px rgba(0, 0, 0, 0.3);
}
\`\`\`

### 7. **Terminal/System Interface Aesthetics**
   - Design Point: Monospace font, system code feel, terminal visual language
   - CSS Example:
\`\`\`css
.liminal-terminal {
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  color: #8a8f9e;
}

.liminal-system-text {
  font-size: 0.75rem;
  color: #5f6472;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

/* LED Status Indicator */
.liminal-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff006a;
  box-shadow: 0 0 10px rgba(255, 0, 106, 0.8);
  animation: ledPulse 2s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
\`\`\`

### 8. **Slow, Unsettling Transition Effects**
   - Design Point: 6-8 second long transition animations for unsettling feel
   - CSS Example:
\`\`\`css
.liminal-transition {
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}
\`\`\`

---

## Color Scheme (Complete Reference)

**Primary Colors**
- Dark Gray Base 1: #1a1d24
- Dark Gray Base 2: #2c3038
- Dark Gray Base 3: #252830, #2f3440

**Accent Colors**
- Neon Pink: #ff006a
- Neon Cyan: #00ffcc

**Text Colors**
- Primary Text: #8a8f9e
- Secondary Text: #5f6472
- Tertiary Text: #3d4250

---

## Key Component CSS Examples

### Card Component (Deep Shadows)
\`\`\`css
.liminal-card {
  background: rgba(47, 52, 64, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 40px 80px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.4),
    0 80px 160px rgba(0, 0, 0, 0.5);
  transition: all 6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-card:hover {
  transform: translateY(-5px);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 50px 100px rgba(0, 0, 0, 0.35),
    0 75px 150px rgba(0, 0, 0, 0.45),
    0 100px 200px rgba(0, 0, 0, 0.55);
}
\`\`\`

### Neon Button
\`\`\`css
.liminal-button {
  padding: 1rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid #00ffcc;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  box-shadow:
    0 0 15px rgba(0, 255, 204, 0.4),
    inset 0 0 15px rgba(0, 255, 204, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.liminal-button:hover {
  background: rgba(0, 255, 204, 0.1);
  box-shadow:
    0 0 25px rgba(0, 255, 204, 0.7),
    inset 0 0 25px rgba(0, 255, 204, 0.2);
}
\`\`\`

### Form Input
\`\`\`css
.liminal-input {
  padding: 1rem;
  background: rgba(26, 29, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #8a8f9e;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.3em;
  text-align: center;
  transition: all 0.6s;
}

.liminal-input:focus {
  border-color: #00ffcc;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.6);
}
\`\`\`

---

## Spacing System

- Extra Large (between sections): 8rem
- Large (between components): 4rem
- Medium (card grid gaps): 3-4rem
- Small (between elements): 1-2rem
- Micro (internal elements): 0.5-1rem

---

## Typography System

- Main Title: clamp(2rem, 8vw, 4.5rem)
- Subtitle: clamp(0.9rem, 2vw, 1.2rem)
- Body Text: 1rem / 0.85rem
- Small Labels: 0.75rem / 0.65rem
- Font Family: 'Courier New', monospace (terminal style)

---

## Important Notes

1. **Slow Transitions**: All interactive animations use 6-8 second transition times for unsettling feel
2. **Multi-Layer Stack**: Background effects must use 3-5 layers (fog, noise, scanlines, vignette)
3. **Neon Glow**: All accent elements use multi-layer box-shadow or text-shadow for neon effect
4. **Deep Shadows**: Card components use 4-5 layers of deep shadows for spatial depth
5. **Monospace Font**: All text must use Courier New or monospace font
6. **Ambiguous Layers**: Extensive use of semi-transparent backgrounds (rgba) and backdrop-filter for ambiguity
7. **Avoid Saturated Colors**: Except neon accents, keep all colors low-saturation gray tones
8. **LED Animation**: Status indicators use pulse animation (ledPulse)`
  },

  // 敘事型 StylePrompt：描述 Liminal Space 的設計氛圍
  stylePrompt: {
    'zh-CN': `角色：你是一名擅長 Liminal Space（邊界空間）風格的 UI 設計師，需要設計一個看起來像「介於現實場景與數位夢境之間的空場」。

場景定位：
- 適合敘事型網站、實驗性作品集、概念展示頁或遊戲 / 影集的宣傳頁。
- 畫面上應該只隱約暗示用途（終端、候車廳、走廊、展廳等），但不出現具體人物與日常雜物。

視覺設計理念：
- 強調「空、靜、略不安」的情緒：空間很大、元素很少、顏色偏冷或偏灰。
- 利用遠近透視、消失點與長陰影讓畫面看起來比實際內容更遼闊，讓使用者意識到「這裡沒有被完全使用」。

材質與質感：
- 背景以深灰、冷藍為主，疊加霧化層、噪點與掃描線，營造老舊攝影機或監控畫面的感覺。
- 霓虹色只有少量點綴（狀態燈、指示文字、標語），像是在冷空間中唯一的「活物」。

交互體驗：
- 動畫節奏偏慢且略帶不穩定：光暈偶爾閃爍、掃描線緩慢移動、粒子不規則飄動。
- 交互回饋不應過度熱情，只做輕微亮度或位置變化，好像系統遲鈍地回應使用者。

氛圍營造：
- 整體氛圍是「深夜、無人、介於開機與關機之間」的空間，適合承載寂寞感、懷舊感或末世感題材。
- 使用者在瀏覽時，應有置身空曠場地、聽著遠處冷風聲音的心理聯想，而不只是看一個普通 landing page。`,
    'en-US': `Role: You are a UI designer focused on Liminal Space aesthetics, crafting an interface that feels like an empty in‑between place between reality and a digital dream.

Scene:
- Suitable for narrative websites, experimental portfolios, concept pages or promo sites for games and shows with eerie, contemplative moods.
- The screen should hint at function (terminal, concourse, corridor, gallery, etc.) without showing people or everyday clutter.

Visual philosophy:
- Emphasize emptiness, stillness and a faint sense of unease: large spaces, minimal objects, cool or desaturated colors.
- Use perspective, vanishing points and long shadows so the environment feels larger than the content actually shown, suggesting unused volume.

Material & texture:
- Base the background on deep grays and cold blues, layered with fog, noise and scanlines to evoke security camera or old VHS footage.
- Neon accents are rare and intentional (status LEDs, labels, signage), acting as the only “living” hints in an otherwise inert scene.

Interaction:
- Animation timing is slow and slightly irregular: glows flicker occasionally, scanlines drift, particles float unpredictably.
- Interaction feedback stays distant—small brightness or position shifts rather than eager, bouncy reactions, as if the system responds reluctantly.

Mood:
- Overall the mood is late-night, empty and liminal—between open and closed, online and offline, past and future.
- Users should feel like they are standing in a deserted public space hearing distant HVAC noise, rather than browsing a typical marketing page.`
  },

  // Preview templates
  previews: [
    {
      id: 'vacant-space',
      name: 'styles.visual.liminalSpace.preview.vacantSpace',
      type: 'full',
      description: {
        'zh-CN': 'VACANT_SPACE.EXE - 展示數位虛空空間，包含霧化導航、卡片網格、系統訪問表單和霓虹效果',
        'en-US': 'VACANT_SPACE.EXE - Digital void space with glassmorphism navigation, card grid, system access form and neon effects'
      },
      html: liminalSpaceVacantFullPageHTML,
      styles: liminalSpaceVacantFullPageStyles,
      colorScheme: {
        'zh-CN': '深灰基調 #1a1d24/#2c3038、霓虹粉紅 #ff006a、霓虹青藍 #00ffcc、灰色文字 #5f6472/#8a8f9e/#3d4250',
        'en-US': 'Dark gray base #1a1d24/#2c3038, neon pink #ff006a, neon cyan #00ffcc, gray text #5f6472/#8a8f9e/#3d4250'
      }
    },
    {
      id: 'digital-museum',
      name: 'styles.visual.liminalSpace.preview.digitalMuseum',
      type: 'full',
      description: {
        'zh-CN': '數位博物館檔案館 - 冷清神秘的博物館系統，包含鼠標探照燈、檔案卡片、監控攝像頭、訪問控制表單和系統日誌',
        'en-US': 'Digital Museum Archive - Cold and mysterious museum system with mouse spotlight, archive cards, security cameras, access control form and system logs'
      },
      html: liminalSpaceMuseumFullPageHTML,
      styles: liminalSpaceMuseumFullPageStyles,
      colorScheme: {
        'zh-CN': '深灰基調 #0f1419/#1a1d24/#141820、霓虹粉紅 #ff006a、霓虹青藍 #00ffcc、灰色文字 #5f6472/#8a8f9e/#3d4250',
        'en-US': 'Dark gray base #0f1419/#1a1d24/#141820, neon pink #ff006a, neon cyan #00ffcc, gray text #5f6472/#8a8f9e/#3d4250'
      }
    }
  ]
}

export default liminalSpace
