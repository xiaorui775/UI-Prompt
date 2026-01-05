# Ring Loading Animation

## 中文版本 (zh-CN)

請創建一個圓環（Ring）風格的加載動畫組件。

### 設計理念

圓環加載動畫是 Spinner 的變體，通過圓環邊框的旋轉或部分高亮來傳達加載狀態。相比完整的圓形 Spinner，Ring 動畫更加精緻和現代，邊框的粗細和缺口設計提供了更多視覺變化的可能性。

### 視覺特徵

**基本形態**
- 圓環形狀，只有邊框無填充
- 邊框粗細可調（2-8px）
- 可以是完整圓環或帶缺口的不完整圓環
- 通常為單色或雙色設計

**尺寸規格**
- **小型**：直徑 16-24px，邊框 2-3px
- **中型**：直徑 32-48px，邊框 3-4px
- **大型**：直徑 64-96px，邊框 4-6px
- 邊框粗細與直徑成比例

**顏色方案**
- **單色圓環**：
  - 整圓：淡色背景 + 部分段深色前景
  - 或只顯示部分圓弧（如 270 度）
- **雙色圓環**：
  - 背景圓環：淺灰色或淡化的品牌色
  - 前景圓環：品牌主色或對比色
  - 前景可以是部分圓弧或漸變
- **漸變圓環**：
  - 從起點到終點顏色漸變
  - 或透明度從 100% 漸變到 0%

**邊框樣式**
- **實線邊框**（最常見）
- **虛線邊框**：stroke-dasharray
- **圓形端點**：stroke-linecap: round
- **平直端點**：stroke-linecap: butt

### 動畫效果

**旋轉動畫（最常見）**
- 整個圓環旋轉
- 旋轉速度：0.8-1.5 秒一圈
- 旋轉方向：順時針
- 緩動函數：linear（勻速）
- 無限循環

**部分圓弧旋轉**
- 只有部分圓弧（如 270 度或 180 度）
- 圓弧旋轉，缺口跟隨
- 可選：圓弧長度也動態變化

**追逐動畫（Chasing Circles）**
- 兩個或多個圓弧在圓環上追逐
- 不同顏色或透明度
- 一個順時針，一個逆時針
- 在對角線位置相遇

**進度圓環（Determinate）**
- 圓弧長度表示進度百分比
- 從 0 度逐漸增長到 360 度
- 通常配合百分比數字顯示
- 可添加旋轉動畫增強動感

**脈沖圓環**
- 圓環旋轉同時邊框粗細或透明度脈動
- 創造呼吸或脈沖效果
- 適合強調狀態變化

### 交互體驗

**基本旋轉參數**
- 旋轉時長：1-1.5 秒
- 緩動：linear（勻速，不卡頓）
- 循環：infinite

**進階效果**
- 起始位置：從頂部（-90deg）開始
- 圓弧長度動畫：從短到長再到短
- 顏色循環：顏色隨旋轉變化
- 多層圓環：內外兩層反向旋轉

### 應用場景

**按鈕加載狀態**
- 小尺寸圓環（16-24px）
- 替換按鈕文字或在文字旁顯示
- 顏色與按鈕風格一致（白色或品牌色）
- 快速旋轉表示正在處理

**全頁加載**
- 大尺寸圓環（64-96px）
- 居中顯示於頁面中央
- 配合深色或淺色遮罩層
- 可選文字提示「加載中...」

**內容區加載**
- 中等尺寸（32-48px）
- 卡片或容器內居中
- 可選半透明背景
- 內容加載完成後淡出

**進度指示**
- 圓環填充表示進度
- 中心顯示百分比數字
- 用於上傳、下載、安裝等
- 可配合顏色變化（如接近完成時變綠）

**刷新/同步狀態**
- 小到中型圓環
- 旋轉表示正在刷新
- 完成後顯示勾選標記
- 常見於下拉刷新場景

### 技術實現要點

**CSS Border 實現**
```css
.ring-loader {
  border: 4px solid #f3f3f3; /* 背景圓環 */
  border-top: 4px solid #3498db; /* 前景圓弧 */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**SVG 實現（更靈活）**
```html
<svg class="ring-loader" viewBox="0 0 50 50">
  <circle
    cx="25" cy="25" r="20"
    fill="none"
    stroke="#f3f3f3"
    stroke-width="4"
  />
  <circle
    cx="25" cy="25" r="20"
    fill="none"
    stroke="#3498db"
    stroke-width="4"
    stroke-dasharray="90, 150"
    stroke-linecap="round"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

**進度圓環實現**
```javascript
// 根據進度百分比計算 stroke-dasharray
const circumference = 2 * Math.PI * radius;
const progress = 75; // 75%
const strokeDashoffset = circumference - (progress / 100) * circumference;
```

**性能優化**
- 使用 CSS transform 而非位置屬性
- SVG 優於多層 DOM 元素
- 避免過多同時運行的動畫
- GPU 加速：transform: translateZ(0)

### 無障礙考量

- 使用 `role="status"` 或 `role="progressbar"`
- 進度圓環需提供 aria-valuenow、aria-valuemin、aria-valuemax
- 不確定進度使用 `aria-busy="true"`
- 提供屏幕閱讀器文本：「加載中」
- SVG 設為 aria-hidden="true" 並提供替代文本

### 設計建議

**邊框粗細**
- 與圓環直徑成比例
- 過細：不清晰（< 2px）
- 過粗：笨重（> 直徑的 15%）
- 推薦：直徑的 8-12%

**顏色對比**
- 前景與背景圓環需有足夠對比
- 背景圓環可更淡（20-30% 透明度）
- 前景圓環顏色鮮明
- 暗色模式下調整顏色

**旋轉速度**
- 不宜過快（< 0.6s，眼花）
- 不宜過慢（> 2s，無動感）
- 推薦：1-1.5 秒一圈

**圓弧長度**
- 部分圓弧建議 180-270 度
- 太短（< 90 度）不明顯
- 太長（> 300 度）與完整圓區別小

### 設計風格變體

**極簡風格**
- 細邊框（2-3px）
- 單色或雙色
- 無漸變，純色填充
- 小圓角端點（可選）

**Material Design**
- 圓環顏色循環變化
- 圓弧長度動態變化
- 使用 Material 緩動曲線
- 品牌主色調

**iOS 風格**
- 灰色背景圓環
- 白色或藍色前景圓弧
- 圓形端點（stroke-linecap: round）
- 適中速度旋轉

**科技感**
- 霓虹色或漸變色
- 邊框發光效果（box-shadow）
- 多層圓環反向旋轉
- 快速旋轉

**Bootstrap 風格**
- 使用 Bootstrap 主題色
- 標準邊框粗細
- 可選條紋效果
- 配合進度百分比

### 與 Spinner 的區別

**相同點**
- 都是圓形旋轉動畫
- 都表示加載或處理狀態
- 都可無限循環

**不同點**
- Ring：只有邊框，中空
- Spinner：通常有缺口或漸變填充
- Ring 更輕盈、現代
- Spinner 更經典、通用

### 適用場景

- 按鈕點擊後的加載狀態
- 頁面或內容區加載
- 進度指示（上傳、下載）
- 數據刷新與同步
- 表單提交等待
- 幾乎所有需要旋轉加載指示的場景

---

## English Version (en-US)

Please create a Ring style loading animation component.

### Design Philosophy

Ring loading animation is a variant of Spinner, conveying loading state through rotation or partial highlighting of a ring border. Compared to complete circular Spinners, Ring animation is more refined and modern, with border thickness and gap design providing more visual variation possibilities.

### Visual Characteristics

**Basic Form**
- Ring shape with only border, no fill
- Adjustable border thickness (2-8px)
- Can be complete ring or incomplete ring with gap
- Typically monochrome or two-tone design

**Size Specifications**
- **Small**: Diameter 16-24px, border 2-3px
- **Medium**: Diameter 32-48px, border 3-4px
- **Large**: Diameter 64-96px, border 4-6px
- Border thickness proportional to diameter

**Color Schemes**
- **Monochrome ring**:
  - Full circle: Light background + partial segment dark foreground
  - Or show only partial arc (e.g., 270 degrees)
- **Two-tone ring**:
  - Background ring: Light gray or faded brand color
  - Foreground ring: Brand primary or contrast color
  - Foreground can be partial arc or gradient
- **Gradient ring**:
  - Color gradient from start to end
  - Or opacity gradient from 100% to 0%

**Border Styles**
- **Solid border** (most common)
- **Dashed border**: stroke-dasharray
- **Round endpoints**: stroke-linecap: round
- **Flat endpoints**: stroke-linecap: butt

### Animation Effects

**Rotation Animation (Most Common)**
- Entire ring rotates
- Rotation speed: 0.8-1.5 seconds per rotation
- Rotation direction: Clockwise
- Easing function: linear (constant speed)
- Infinite loop

**Partial Arc Rotation**
- Only partial arc (e.g., 270 or 180 degrees)
- Arc rotates with gap following
- Optional: Arc length also changes dynamically

**Chasing Animation**
- Two or more arcs chasing on ring
- Different colors or opacity
- One clockwise, one counterclockwise
- Meet at diagonal positions

**Progress Ring (Determinate)**
- Arc length represents progress percentage
- Gradually grows from 0 to 360 degrees
- Usually paired with percentage number display
- Can add rotation animation for enhanced dynamics

**Pulse Ring**
- Ring rotates while border thickness or opacity pulses
- Creates breathing or pulsing effect
- Suitable for emphasizing state changes

### Interaction Experience

**Basic Rotation Parameters**
- Rotation duration: 1-1.5 seconds
- Easing: linear (constant speed, no stuttering)
- Loop: infinite

**Advanced Effects**
- Start position: Begin from top (-90deg)
- Arc length animation: Short to long to short
- Color cycling: Color changes with rotation
- Multi-layer rings: Inner and outer layers rotate in opposite directions

### Application Scenarios

**Button Loading State**
- Small ring (16-24px)
- Replace button text or display beside text
- Color consistent with button style (white or brand color)
- Fast rotation indicates processing

**Full-Page Loading**
- Large ring (64-96px)
- Centered on page
- Paired with dark or light overlay
- Optional text prompt "Loading..."

**Content Area Loading**
- Medium size (32-48px)
- Centered in card or container
- Optional semi-transparent background
- Fade out after content loads

**Progress Indication**
- Ring fill represents progress
- Center displays percentage number
- For uploads, downloads, installations, etc.
- Can pair with color changes (e.g., turn green when near completion)

**Refresh/Sync Status**
- Small to medium ring
- Rotation indicates refreshing
- Show checkmark when complete
- Common in pull-to-refresh scenarios

### Technical Implementation Points

**CSS Border Implementation**
```css
.ring-loader {
  border: 4px solid #f3f3f3; /* Background ring */
  border-top: 4px solid #3498db; /* Foreground arc */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**SVG Implementation (More Flexible)**
```html
<svg class="ring-loader" viewBox="0 0 50 50">
  <circle
    cx="25" cy="25" r="20"
    fill="none"
    stroke="#f3f3f3"
    stroke-width="4"
  />
  <circle
    cx="25" cy="25" r="20"
    fill="none"
    stroke="#3498db"
    stroke-width="4"
    stroke-dasharray="90, 150"
    stroke-linecap="round"
  >
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

**Progress Ring Implementation**
```javascript
// Calculate stroke-dasharray based on progress percentage
const circumference = 2 * Math.PI * radius;
const progress = 75; // 75%
const strokeDashoffset = circumference - (progress / 100) * circumference;
```

**Performance Optimization**
- Use CSS transform instead of position properties
- SVG preferred over multi-layer DOM elements
- Avoid too many simultaneously running animations
- GPU acceleration: transform: translateZ(0)

### Accessibility Considerations

- Use `role="status"` or `role="progressbar"`
- Progress ring needs aria-valuenow, aria-valuemin, aria-valuemax
- Indeterminate progress uses `aria-busy="true"`
- Provide screen reader text: "Loading"
- SVG set to aria-hidden="true" with alternative text

### Design Recommendations

**Border Thickness**
- Proportional to ring diameter
- Too thin: Unclear (< 2px)
- Too thick: Clunky (> 15% of diameter)
- Recommended: 8-12% of diameter

**Color Contrast**
- Foreground and background rings need sufficient contrast
- Background ring can be lighter (20-30% opacity)
- Foreground ring color vivid
- Adjust colors in dark mode

**Rotation Speed**
- Not too fast (< 0.6s, dizzying)
- Not too slow (> 2s, lacks dynamics)
- Recommended: 1-1.5 seconds per rotation

**Arc Length**
- Partial arc recommended 180-270 degrees
- Too short (< 90 degrees) not obvious
- Too long (> 300 degrees) little distinction from full circle

### Design Style Variants

**Minimalist Style**
- Thin border (2-3px)
- Monochrome or two-tone
- No gradient, solid fill
- Small rounded endpoints (optional)

**Material Design**
- Ring color cycles
- Arc length changes dynamically
- Use Material easing curves
- Brand primary color

**iOS Style**
- Gray background ring
- White or blue foreground arc
- Round endpoints (stroke-linecap: round)
- Moderate speed rotation

**Tech Style**
- Neon or gradient colors
- Border glow effect (box-shadow)
- Multi-layer rings rotating in opposite directions
- Fast rotation

**Bootstrap Style**
- Use Bootstrap theme colors
- Standard border thickness
- Optional stripe effects
- Paired with progress percentage

### Differences from Spinner

**Similarities**
- Both are circular rotation animations
- Both indicate loading or processing state
- Both can loop infinitely

**Differences**
- Ring: Only border, hollow center
- Spinner: Usually has gap or gradient fill
- Ring more lightweight, modern
- Spinner more classic, universal

### Use Cases

- Button loading state after click
- Page or content area loading
- Progress indication (uploads, downloads)
- Data refresh and sync
- Form submission waiting
- Nearly all scenarios requiring rotating loading indicators
