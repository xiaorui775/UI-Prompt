# Spinner Loading Animation

## 中文版本 (zh-CN)

請創建一個旋轉器（Spinner）風格的加載動畫組件。

### 設計理念

Spinner 是最經典和普遍的加載動畫形式，通過圓形的連續旋轉運動傳達「系統正在處理」的信息。設計應該簡潔流暢，旋轉速度適中，既能明確表示加載狀態，又不會讓用戶感到眩暈或焦慮。

### 視覺特徵

**基本形態**
- 圓環形狀，通常為不完整的圓（缺口設計）
- 線條粗細適中（2-4px）
- 缺口角度通常為 90-120 度
- 顏色單一或漸變，保持視覺簡潔

**顏色方案**
- **單色版本**：使用品牌主色或中性灰色
- **漸變版本**：從主色淡化到透明，營造運動感
- **多彩版本**（謹慎使用）：Google 風格的多色段
- 推薦透明度：實體部分 100%，淡化部分 20-30%

**尺寸規格**
- 小型（Small）：16-24px - 用於按鈕內、列表項
- 中型（Medium）：32-48px - 用於卡片、表單區域
- 大型（Large）：64-96px - 用於全頁加載
- 線條粗細與尺寸成正比

**形狀變體**
- **標準圓環**：最常見，缺口位於圓周某處
- **雙圓環**：內外兩層圓環反向旋轉
- **虛線圓環**：使用虛線邊框（stroke-dasharray）
- **圓點尾跡**：圓環由圓點組成，模擬運動軌跡

### 交互體驗

**動畫特性**
- 旋轉方向：順時針（標準）
- 旋轉速度：0.8-1.2 秒一圈（推薦 1 秒）
- 緩動函數：linear（勻速旋轉）
- 無限循環：animation-iteration-count: infinite

**動畫細節**
- 使用 CSS transform: rotate() 實現
- 從 0deg 旋轉到 360deg
- 避免使用 JavaScript 計時器（性能差）
- 可選：缺口位置也跟隨旋轉

**進階效果**
- 旋轉同時伴隨輕微縮放脈動（可選）
- 顏色循環漸變（如 Material Design 風格）
- 多層圓環以不同速度旋轉

### 應用場景

**按鈕內加載**
- 小尺寸 Spinner
- 替換按鈕文字或在文字旁顯示
- 顏色與按鈕風格一致

**內容區加載**
- 中等尺寸 Spinner
- 居中顯示於容器內
- 可選遮罩層（半透明背景）

**全頁加載**
- 大尺寸 Spinner
- 固定於視窗中央
- 配合深色或淺色遮罩層
- 可選加載文字提示

**數據加載狀態**
- 表格、列表加載時顯示
- 尺寸根據容器調整
- 可替換為骨架屏（Skeleton）

### 技術實現要點

- 使用 CSS `animation` 和 `@keyframes`
- 優先使用 SVG 或 CSS 邊框實現
- 確保高 DPI 屏幕下清晰顯示
- 支持暗色模式（顏色自動適配）
- 性能優化：使用 transform 而非 position

### 無障礙考量

- 使用 `role="status"` 或 `aria-live="polite"`
- 提供屏幕閱讀器文本：「加載中」
- 隱藏裝飾性 SVG：`aria-hidden="true"`
- 避免過快旋轉引起不適（> 0.6s/圈）

### 設計建議

- 保持簡潔，避免過度裝飾
- 顏色與品牌風格一致
- 提供不同尺寸變體
- 考慮暗色模式下的視覺效果
- 旋轉速度不宜過快或過慢

### 適用場景

- 幾乎所有類型的 Web 應用
- API 請求等待狀態
- 表單提交過程
- 頁面內容加載
- 最通用的加載指示器

---

## English Version (en-US)

Please create a Spinner style loading animation component.

### Design Philosophy

Spinner is the most classic and universal loading animation form, conveying "system is processing" through continuous circular rotation motion. The design should be concise and smooth, with moderate rotation speed—clearly indicating loading state without causing user dizziness or anxiety.

### Visual Characteristics

**Basic Form**
- Ring shape, typically incomplete circle (gap design)
- Moderate line thickness (2-4px)
- Gap angle typically 90-120 degrees
- Single color or gradient, maintaining visual simplicity

**Color Schemes**
- **Monochrome version**: Use brand primary color or neutral gray
- **Gradient version**: Fade from primary color to transparent, creating motion sense
- **Multicolor version** (use cautiously): Google-style multi-segment colors
- Recommended opacity: Solid part 100%, faded part 20-30%

**Size Specifications**
- Small: 16-24px - For buttons, list items
- Medium: 32-48px - For cards, form areas
- Large: 64-96px - For full-page loading
- Line thickness proportional to size

**Shape Variants**
- **Standard ring**: Most common, gap at some point on circumference
- **Double ring**: Inner and outer rings rotating in opposite directions
- **Dashed ring**: Using dashed borders (stroke-dasharray)
- **Dot trail**: Ring composed of dots, simulating motion trajectory

### Interaction Experience

**Animation Properties**
- Rotation direction: Clockwise (standard)
- Rotation speed: 0.8-1.2 seconds per rotation (recommended 1s)
- Easing function: linear (constant speed rotation)
- Infinite loop: animation-iteration-count: infinite

**Animation Details**
- Implemented using CSS transform: rotate()
- Rotate from 0deg to 360deg
- Avoid JavaScript timers (poor performance)
- Optional: Gap position also follows rotation

**Advanced Effects**
- Rotation accompanied by slight scale pulsation (optional)
- Color cycle gradients (Material Design style)
- Multi-layer rings rotating at different speeds

### Application Scenarios

**Button Loading**
- Small-sized Spinner
- Replace button text or display beside text
- Color consistent with button style

**Content Area Loading**
- Medium-sized Spinner
- Centered display within container
- Optional overlay (semi-transparent background)

**Full-Page Loading**
- Large-sized Spinner
- Fixed at viewport center
- Paired with dark or light overlay
- Optional loading text prompt

**Data Loading State**
- Display when tables, lists loading
- Size adjusts based on container
- Can be replaced with Skeleton screen

### Technical Implementation Points

- Use CSS `animation` and `@keyframes`
- Prefer SVG or CSS border implementation
- Ensure clarity on high DPI screens
- Support dark mode (automatic color adaptation)
- Performance optimization: Use transform instead of position

### Accessibility Considerations

- Use `role="status"` or `aria-live="polite"`
- Provide screen reader text: "Loading"
- Hide decorative SVG: `aria-hidden="true"`
- Avoid overly fast rotation causing discomfort (> 0.6s/rotation)

### Design Recommendations

- Keep simple, avoid excessive decoration
- Colors consistent with brand style
- Provide different size variants
- Consider visual effects in dark mode
- Rotation speed should not be too fast or slow

### Use Cases

- Nearly all types of web applications
- API request waiting states
- Form submission processes
- Page content loading
- Most universal loading indicator
