# Wave Loading Animation

## 中文版本 (zh-CN)

請創建一個波浪（Wave）風格的加載動畫組件。

### 設計理念

波浪動畫通過多個元素的序列化上下運動，模擬水波、聲波或能量波動的視覺效果。這種動畫風格動感十足且具有節奏感,傳達出「流動」與「活力」,適合需要強調動態過程的加載場景。

### 視覺特徵

**基本形態**
- 由 3-5 個垂直條形元素組成（最常見 4-5 個）
- 條形排列成水平直線
- 條形寬度一致,高度可變
- 間距均勻,通常為條形寬度的 0.5-1 倍

**尺寸規格**
- **小型**：條形高度 12-20px,寬度 3-4px,間距 4-6px
- **中型**：條形高度 24-40px,寬度 4-6px,間距 6-8px
- **大型**：條形高度 48-80px,寬度 6-10px,間距 10-14px
- 整體寬度：條形數量 × (寬度 + 間距) - 間距

**顏色方案**
- **單色波浪**：所有條形同色,品牌主色或中性灰
- **漸變色**：從左到右顏色漸變（如藍→綠→黃）
- **音頻風格**：彩虹色或霓虹色（如音樂播放器）
- **透明度變化**：條形透明度隨高度變化

**形狀變體**
- **圓角矩形**：頂部圓角（border-radius: 4px 4px 0 0）
- **完全圓角**：兩端圓角（border-radius: 4px）
- **尖端形**：頂部尖角,底部平整
- **圓點組**：用圓點替代矩形條

### 動畫效果

**高度波動動畫（最常見）**
- 條形依次上下伸縮
- 每個條形延遲啟動,形成波浪效果
- 高度變化範圍：20% → 100% → 20%（或其他比例）
- 序列延遲：0.1-0.15 秒

**縮放波動**
- 條形垂直方向縮放
- transform: scaleY(0.3) → scaleY(1) → scaleY(0.3)
- 從底部基線縮放（transform-origin: bottom）

**透明度波浪**
- 條形高度固定,透明度循環變化
- opacity: 0.3 → 1 → 0.3
- 配合高度變化使用效果更佳

### 交互體驗

**動畫參數**
- 單個條形動畫時長：0.6-1 秒
- 序列延遲：0.1-0.15 秒
- 總波浪循環：1.2-1.8 秒
- 緩動函數：ease-in-out 或 cubic-bezier(0.4, 0, 0.6, 1)
- 無限循環：infinite

**波浪模式**
- **單向波浪**：從左到右依次波動
- **雙向波浪**：從中心向兩側擴散
- **往返波浪**：從左到右,再從右到左
- **隨機波浪**：隨機延遲,模擬自然波動

**節奏變化**
- 音頻風格：快速波動（0.4-0.6 秒）
- 標準加載：適中（0.8-1 秒）
- 柔和背景：緩慢（1.2-1.5 秒）

### 應用場景

**音頻/音樂播放器**
- 模擬音頻波形或音量條
- 快速波動,彩色或漸變色
- 可根據實際音量數據調整高度
- 通常 5-7 個條形

**語音識別/錄音**
- 顯示「正在聆聽」或「正在錄音」狀態
- 條形隨聲音強度波動
- 綠色或品牌色
- 可選：麥克風圖標配合

**下載/上傳進度**
- 表示數據傳輸中
- 藍色或品牌色
- 配合速度或進度百分比顯示

**AI 思考/處理中**
- 表示 AI 正在思考或生成內容
- 柔和的波動,不過於激烈
- 紫色或科技感顏色
- 可配合文字「正在思考...」

**搜索/過濾中**
- 表示正在搜索或過濾數據
- 中等速度波動
- 顏色與搜索框風格一致

**背景數據同步**
- 表示後台數據同步狀態
- 小尺寸,置於狀態欄或角落
- 顏色低調,不干擾主界面

### 佈局與定位

**水平居中**
- 使用 flexbox 居中
- 父容器：display: flex; justify-content: center; align-items: flex-end
- 條形從底部對齊向上伸展

**垂直對齊**
- 條形底部對齊（最常見）
- 或中線對齊（條形雙向伸縮）

**響應式調整**
- 移動端可減少條形數量（3-4 個）
- 保持條形間距比例

### 技術實現要點

**CSS 動畫實現**
```css
.wave-bar {
  animation: wave 1s ease-in-out infinite;
  transform-origin: bottom;
}

.wave-bar:nth-child(1) { animation-delay: 0s; }
.wave-bar:nth-child(2) { animation-delay: 0.1s; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; }
.wave-bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes wave {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
}
```

**高度變化實現**
```css
@keyframes wave-height {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}
```

**性能優化**
- 使用 transform: scaleY() 優於直接改變 height
- 避免同時動畫過多條形（限制在 5-7 個）
- GPU 加速：will-change: transform

### 無障礙考量

- 提供屏幕閱讀器文本：「加載中」或「正在處理」
- 使用 aria-live="polite" 或 role="status"
- 條形本身設為 aria-hidden="true"
- 避免過快波動（可能引起不適）

**Reduced Motion 支持**
```css
@media (prefers-reduced-motion: reduce) {
  .wave-bar {
    animation: none;
    height: 60%; /* 靜態中等高度 */
  }
}
```

### 設計建議

**條形數量**
- 3 個：極簡,適合小空間
- 4-5 個：標準,最常用
- 6-8 個：適合音頻視覺化

**高度變化範圍**
- 最小高度：20-30%（不完全消失）
- 最大高度：100%
- 避免高度差過大（保持優雅）

**顏色選擇**
- 單色：專業、簡潔
- 漸變：動感、現代
- 彩虹色：活潑、娛樂化
- 確保與背景對比度足夠

**速度控制**
- 快速：娛樂、音頻相關
- 適中：一般加載
- 緩慢：背景狀態

### 設計風格變體

**極簡風格**
- 細條形,單色
- 緩慢柔和的波動
- 小圓角或無圓角

**音頻風格**
- 彩色或漸變條形
- 快速激烈的波動
- 頂部圓角

**科技風格**
- 霓虹色或發光效果
- 條形邊緣模糊或發光
- 快速精準的波動

**Material Design**
- 使用 Material 緩動曲線
- 品牌主色
- 適中的波動節奏

**有機風格**
- 不規則高度變化
- 柔和曲線
- 自然色調

### 適用場景

- 音頻/音樂播放器
- 語音識別與錄音
- AI 思考與處理狀態
- 數據加載與同步
- 搜索與過濾操作
- 實時通信狀態指示
- 任何需要強調「流動」與「活力」的場景

---

## English Version (en-US)

Please create a Wave style loading animation component.

### Design Philosophy

Wave animation simulates the visual effect of water waves, sound waves, or energy fluctuations through sequential up-and-down movement of multiple elements. This animation style is dynamic and rhythmic, conveying "flow" and "vitality," suitable for loading scenarios that need to emphasize dynamic processes.

### Visual Characteristics

**Basic Form**
- Composed of 3-5 vertical bar elements (most commonly 4-5)
- Bars arranged in horizontal line
- Uniform bar width, variable height
- Even spacing, typically 0.5-1x bar width

**Size Specifications**
- **Small**: Bar height 12-20px, width 3-4px, spacing 4-6px
- **Medium**: Bar height 24-40px, width 4-6px, spacing 6-8px
- **Large**: Bar height 48-80px, width 6-10px, spacing 10-14px
- Total width: Number of bars × (width + spacing) - spacing

**Color Schemes**
- **Monochrome wave**: All bars same color, brand primary or neutral gray
- **Gradient**: Color gradient from left to right (e.g., blue→green→yellow)
- **Audio style**: Rainbow or neon colors (like music players)
- **Opacity variation**: Bar opacity changes with height

**Shape Variants**
- **Rounded rectangle**: Top rounded (border-radius: 4px 4px 0 0)
- **Fully rounded**: Both ends rounded (border-radius: 4px)
- **Pointed**: Top pointed, bottom flat
- **Dot group**: Replace rectangle bars with dots

### Animation Effects

**Height Fluctuation Animation (Most Common)**
- Bars extend and contract up and down sequentially
- Each bar starts with delay, forming wave effect
- Height change range: 20% → 100% → 20% (or other ratios)
- Sequential delay: 0.1-0.15 seconds

**Scale Fluctuation**
- Bars scale in vertical direction
- transform: scaleY(0.3) → scaleY(1) → scaleY(0.3)
- Scale from bottom baseline (transform-origin: bottom)

**Opacity Wave**
- Fixed bar height, opacity cycles
- opacity: 0.3 → 1 → 0.3
- Better effect when combined with height changes

### Interaction Experience

**Animation Parameters**
- Single bar animation duration: 0.6-1 second
- Sequential delay: 0.1-0.15 seconds
- Total wave cycle: 1.2-1.8 seconds
- Easing function: ease-in-out or cubic-bezier(0.4, 0, 0.6, 1)
- Infinite loop: infinite

**Wave Patterns**
- **Unidirectional wave**: Sequential fluctuation left to right
- **Bidirectional wave**: Expand from center to both sides
- **Round-trip wave**: Left to right, then right to left
- **Random wave**: Random delays, simulating natural fluctuation

**Rhythm Variation**
- Audio style: Fast fluctuation (0.4-0.6s)
- Standard loading: Moderate (0.8-1s)
- Soft background: Slow (1.2-1.5s)

### Application Scenarios

**Audio/Music Player**
- Simulate audio waveform or volume bars
- Fast fluctuation, colorful or gradient
- Can adjust height based on actual volume data
- Typically 5-7 bars

**Voice Recognition/Recording**
- Display "listening" or "recording" status
- Bars fluctuate with sound intensity
- Green or brand color
- Optional: Microphone icon accompaniment

**Download/Upload Progress**
- Indicate data transmission
- Blue or brand color
- Display with speed or progress percentage

**AI Thinking/Processing**
- Indicate AI is thinking or generating content
- Gentle fluctuation, not too intense
- Purple or tech-style colors
- Can pair with text "Thinking..."

**Search/Filtering**
- Indicate searching or filtering data
- Moderate speed fluctuation
- Color consistent with search box style

**Background Data Sync**
- Indicate background data sync status
- Small size, placed in status bar or corner
- Subtle color, non-intrusive to main interface

### Layout and Positioning

**Horizontal Centering**
- Use flexbox centering
- Parent container: display: flex; justify-content: center; align-items: flex-end
- Bars aligned at bottom, extending upward

**Vertical Alignment**
- Bars aligned at bottom (most common)
- Or center-aligned (bars extend bidirectionally)

**Responsive Adjustment**
- Mobile can reduce bar count (3-4)
- Maintain bar spacing ratio

### Technical Implementation Points

**CSS Animation Implementation**
```css
.wave-bar {
  animation: wave 1s ease-in-out infinite;
  transform-origin: bottom;
}

.wave-bar:nth-child(1) { animation-delay: 0s; }
.wave-bar:nth-child(2) { animation-delay: 0.1s; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; }
.wave-bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes wave {
  0%, 100% { transform: scaleY(0.3); }
  50% { transform: scaleY(1); }
}
```

**Height Change Implementation**
```css
@keyframes wave-height {
  0%, 100% { height: 20%; }
  50% { height: 100%; }
}
```

**Performance Optimization**
- Use transform: scaleY() instead of directly changing height
- Avoid animating too many bars simultaneously (limit to 5-7)
- GPU acceleration: will-change: transform

### Accessibility Considerations

- Provide screen reader text: "Loading" or "Processing"
- Use aria-live="polite" or role="status"
- Bars themselves set to aria-hidden="true"
- Avoid overly fast fluctuation (may cause discomfort)

**Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .wave-bar {
    animation: none;
    height: 60%; /* Static medium height */
  }
}
```

### Design Recommendations

**Bar Count**
- 3: Minimalist, suitable for small spaces
- 4-5: Standard, most commonly used
- 6-8: Suitable for audio visualization

**Height Change Range**
- Minimum height: 20-30% (not completely disappearing)
- Maximum height: 100%
- Avoid excessive height difference (maintain elegance)

**Color Selection**
- Monochrome: Professional, clean
- Gradient: Dynamic, modern
- Rainbow: Lively, entertainment-oriented
- Ensure sufficient contrast with background

**Speed Control**
- Fast: Entertainment, audio-related
- Moderate: General loading
- Slow: Background status

### Design Style Variants

**Minimalist Style**
- Thin bars, monochrome
- Slow gentle fluctuation
- Small or no rounded corners

**Audio Style**
- Colorful or gradient bars
- Fast intense fluctuation
- Top rounded corners

**Tech Style**
- Neon or glowing effects
- Bar edges blurred or glowing
- Fast precise fluctuation

**Material Design**
- Use Material easing curves
- Brand primary color
- Moderate fluctuation rhythm

**Organic Style**
- Irregular height changes
- Soft curves
- Natural tones

### Use Cases

- Audio/music players
- Voice recognition and recording
- AI thinking and processing states
- Data loading and synchronization
- Search and filter operations
- Real-time communication status indicators
- Any scenario needing to emphasize "flow" and "vitality"
