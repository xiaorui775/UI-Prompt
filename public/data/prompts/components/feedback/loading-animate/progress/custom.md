# Progress Bar Loading Animation

## 中文版本 (zh-CN)

請創建一個進度條（Progress Bar）風格的加載動畫組件。

### 設計理念

進度條動畫通過線性或循環的視覺進展提供明確的加載狀態反饋。它既可以顯示確定的進度百分比（determinate），也可以表示不確定的等待狀態（indeterminate）。設計應清晰直觀，讓用戶了解操作正在進行。

### 視覺特徵

**基本形態**
- 水平長條形狀（最常見）
- 背景軌道 + 前景進度條
- 軌道：淺色背景，表示總進度範圍
- 進度條：深色或彩色填充，表示當前進度

**尺寸規格**
- **高度**：
  - 極細：2-3px（極簡風格，如頁面頂部進度條）
  - 細型：4-6px（標準尺寸）
  - 中型：8-12px（易於點擊或顯眼場景）
  - 粗型：16-24px（需要顯示百分比文字）
- **寬度**：通常為容器 100%，或固定寬度如 200-400px
- **圓角**：高度的 50%（完全圓角）或 2-4px（小圓角）

**顏色方案**
- **軌道背景**：
  - 淺色模式：#E5E7EB、#F3F4F6（淡灰色）
  - 暗色模式：#374151、#4B5563（深灰色）
- **進度條填充**：
  - 品牌主色（#3B82F6、#10B981）
  - 狀態色：成功綠、警告黃、錯誤紅
  - 漸變色：從左到右顏色漸變

### 動畫類型

**類型 1：不確定進度（Indeterminate）**
- 進度條在軌道上來回滑動或循環移動
- 用於無法預估完成時間的操作
- 動畫模式：
  - **滑動模式**：進度條從左滑到右，然後重新開始
  - **循環模式**：進度條循環移動，形成無限循環
  - **脈沖模式**：進度條寬度和位置同時變化

**類型 2：確定進度（Determinate）**
- 進度條根據實際百分比填充
- 配合數字顯示（如 45%）
- 平滑過渡：width 從 0% 增長到目標百分比
- 過渡時長：200-300ms

### 交互體驗

**不確定進度動畫參數**
- 動畫時長：1.5-2.5 秒一個循環
- 進度條寬度：軌道寬度的 20-40%
- 緩動函數：
  - 線性：linear（勻速滑動）
  - Material Design：cubic-bezier(0.4, 0, 0.6, 1)
- 無限循環：infinite

**確定進度動畫參數**
- 寬度過渡：transition: width 0.3s ease-out
- 避免倒退動畫（進度只能增加，不減少）
- 接近 100% 時可加速完成感

**進階效果**
- 條紋效果：使用 repeating-linear-gradient
- 動態條紋：條紋向右移動，增強運動感
- 發光效果：進度條邊緣添加微光或陰影
- 脈沖高光：光點從左滑到右

### 應用場景

**頁面頂部進度條**
- 極細型（2-3px）
- 固定於頁面頂部
- 顏色鮮明，與頁面對比強
- 用於頁面導航或資源加載

**文件上傳/下載**
- 中等高度（8-12px）
- 顯示確定進度百分比
- 配合文件名和速度信息
- 可取消操作按鈕

**表單提交**
- 細型或中型
- 位於提交按鈕下方或內部
- 不確定進度動畫
- 提交完成後變為成功狀態

**多步驟流程**
- 展示當前步驟進度
- 分段進度條（Segmented Progress）
- 每段可獨立著色表示完成狀態

**視頻/音頻播放器**
- 可交互的進度條
- 懸停顯示時間提示
- 拖拽改變進度

### 佈局與定位

**容器結構**
```html
<div class="progress-container">
  <div class="progress-track">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
  <span class="progress-label">45%</span>
</div>
```

**定位方式**
- **頁面頂部**：position: fixed; top: 0; z-index: 9999
- **容器內**：相對定位，寬度 100%
- **按鈕內**：絕對定位，覆蓋按鈕背景

### 技術實現要點

**CSS 動畫（不確定進度）**
```css
@keyframes indeterminate {
  0% { left: -40%; }
  100% { left: 100%; }
}

.progress-bar {
  position: absolute;
  width: 40%;
  animation: indeterminate 2s linear infinite;
}
```

**條紋效果**
```css
background: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 10px,
  rgba(255,255,255,0.1) 10px,
  rgba(255,255,255,0.1) 20px
);
```

**性能優化**
- 使用 transform 替代 left/right（GPU 加速）
- 避免頻繁更新 width（使用節流）
- 確定進度使用 CSS transition 自動過渡

### 無障礙考量

- 使用 `<progress>` HTML5 原生元素（推薦）
- 或添加 `role="progressbar"` ARIA 屬性
- 確定進度：`aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- 不確定進度：`aria-busy="true"`
- 提供文字說明：`aria-label="正在加載"`

### 設計建議

- 軌道與進度條顏色對比明顯
- 圓角統一，保持視覺一致
- 百分比文字清晰可讀
- 避免過於花哨的動畫（保持專業）
- 暗色模式下調整顏色確保可見

### 變體風格

**Material Design**
- 雙層進度條動畫
- 使用 Material 緩動曲線
- 條紋向右移動

**極簡風格**
- 極細進度條（2px）
- 無條紋，純色填充
- 快速淡入淡出

**Bootstrap 風格**
- 標準高度（16px）
- 條紋 + 動畫
- 多種語義顏色

**霓虹風格**
- 發光效果進度條
- 漸變色或多彩配色
- 脈沖光效

### 適用場景

- 文件上傳下載界面
- 表單提交等待
- 頁面路由切換
- 多媒體播放控制
- 安裝嚮導或多步驟流程
- 幾乎所有需要進度反饋的場景

---

## English Version (en-US)

Please create a Progress Bar style loading animation component.

### Design Philosophy

Progress bar animations provide clear loading state feedback through linear or cyclical visual progression. It can display both determinate progress percentages and indeterminate waiting states. The design should be clear and intuitive, letting users know operations are in progress.

### Visual Characteristics

**Basic Form**
- Horizontal bar shape (most common)
- Background track + foreground progress bar
- Track: Light background representing total progress range
- Progress bar: Dark or colored fill representing current progress

**Size Specifications**
- **Height**:
  - Extra thin: 2-3px (minimalist style, e.g., page top progress)
  - Thin: 4-6px (standard size)
  - Medium: 8-12px (clickable or prominent scenarios)
  - Thick: 16-24px (needs to display percentage text)
- **Width**: Usually 100% of container, or fixed width like 200-400px
- **Border radius**: 50% of height (fully rounded) or 2-4px (small radius)

**Color Schemes**
- **Track Background**:
  - Light mode: #E5E7EB, #F3F4F6 (light gray)
  - Dark mode: #374151, #4B5563 (dark gray)
- **Progress Fill**:
  - Brand primary color (#3B82F6, #10B981)
  - Status colors: success green, warning yellow, error red
  - Gradient: Left to right color gradient

### Animation Types

**Type 1: Indeterminate Progress**
- Progress bar slides back and forth or cycles on track
- Used for operations with unpredictable completion time
- Animation modes:
  - **Slide mode**: Progress bar slides left to right, then restarts
  - **Loop mode**: Progress bar cycles continuously
  - **Pulse mode**: Progress bar width and position change simultaneously

**Type 2: Determinate Progress**
- Progress bar fills based on actual percentage
- Paired with numerical display (e.g., 45%)
- Smooth transition: width grows from 0% to target percentage
- Transition duration: 200-300ms

### Interaction Experience

**Indeterminate Progress Animation Parameters**
- Animation duration: 1.5-2.5 seconds per cycle
- Progress bar width: 20-40% of track width
- Easing function:
  - Linear: linear (constant speed slide)
  - Material Design: cubic-bezier(0.4, 0, 0.6, 1)
- Infinite loop: infinite

**Determinate Progress Animation Parameters**
- Width transition: transition: width 0.3s ease-out
- Avoid backward animation (progress only increases)
- Can accelerate when approaching 100% for completion feel

**Advanced Effects**
- Stripe effect: Use repeating-linear-gradient
- Animated stripes: Stripes move right, enhancing motion
- Glow effect: Add subtle light or shadow to progress bar edge
- Pulse highlight: Light spot slides left to right

### Application Scenarios

**Page Top Progress Bar**
- Extra thin (2-3px)
- Fixed at page top
- Bright color with strong page contrast
- For page navigation or resource loading

**File Upload/Download**
- Medium height (8-12px)
- Display determinate progress percentage
- Paired with filename and speed info
- Cancelable operation button

**Form Submission**
- Thin or medium size
- Located below or inside submit button
- Indeterminate progress animation
- Turns to success state after completion

**Multi-step Process**
- Show current step progress
- Segmented progress bar
- Each segment can be colored independently for completion status

**Video/Audio Player**
- Interactive progress bar
- Hover displays time tooltip
- Drag to change progress

### Layout and Positioning

**Container Structure**
```html
<div class="progress-container">
  <div class="progress-track">
    <div class="progress-bar" style="width: 45%"></div>
  </div>
  <span class="progress-label">45%</span>
</div>
```

**Positioning Methods**
- **Page top**: position: fixed; top: 0; z-index: 9999
- **Inside container**: Relative positioning, width 100%
- **Inside button**: Absolute positioning, overlay button background

### Technical Implementation Points

**CSS Animation (Indeterminate Progress)**
```css
@keyframes indeterminate {
  0% { left: -40%; }
  100% { left: 100%; }
}

.progress-bar {
  position: absolute;
  width: 40%;
  animation: indeterminate 2s linear infinite;
}
```

**Stripe Effect**
```css
background: repeating-linear-gradient(
  45deg,
  transparent,
  transparent 10px,
  rgba(255,255,255,0.1) 10px,
  rgba(255,255,255,0.1) 20px
);
```

**Performance Optimization**
- Use transform instead of left/right (GPU acceleration)
- Avoid frequent width updates (use throttling)
- Determinate progress uses CSS transition for auto-transition

### Accessibility Considerations

- Use `<progress>` HTML5 native element (recommended)
- Or add `role="progressbar"` ARIA attribute
- Determinate progress: `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Indeterminate progress: `aria-busy="true"`
- Provide text description: `aria-label="Loading"`

### Design Recommendations

- Clear contrast between track and progress bar colors
- Unified border radius, maintaining visual consistency
- Clear readable percentage text
- Avoid overly fancy animations (maintain professionalism)
- Adjust colors in dark mode to ensure visibility

### Style Variants

**Material Design**
- Dual-layer progress bar animation
- Use Material easing curves
- Stripes move right

**Minimalist Style**
- Extra thin progress bar (2px)
- No stripes, solid fill
- Quick fade in/out

**Bootstrap Style**
- Standard height (16px)
- Stripes + animation
- Multiple semantic colors

**Neon Style**
- Glowing progress bar
- Gradient or multicolor scheme
- Pulse light effects

### Use Cases

- File upload/download interfaces
- Form submission waiting
- Page route switching
- Multimedia playback controls
- Installation wizards or multi-step processes
- Nearly all scenarios requiring progress feedback
