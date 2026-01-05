# Bounce Loading Animation

## 中文版本 (zh-CN)

請創建一個彈跳球（Bounce）風格的加載動畫組件。

### 設計理念

彈跳球動畫通過模擬真實物理世界中球體的彈跳運動，創造出活潑、動感且具有親和力的加載體驗。這種動畫風格生動有趣，能有效緩解用戶等待的焦慮感，特別適合面向消費者或需要輕鬆氛圍的產品。

### 視覺特徵

**基本形態**
- 一個或多個圓形球體
- 球體在垂直方向上下彈跳
- 可選：球體在彈跳時有輕微形變（擠壓拉伸）
- 陰影增強真實感

**尺寸規格**
- **單球模式**：
  - 小型：直徑 16-24px
  - 中型：直徑 32-48px
  - 大型：直徑 64-80px
- **多球模式**（通常 2-3 個球）：
  - 球體直徑：12-24px
  - 球體間距：直徑的 1-1.5 倍

**顏色方案**
- **單色**：品牌主色或中性灰
- **漸變球**：球體本身使用漸變色
- **多色球**：每個球不同顏色（如紅、黃、藍）
- **發光球**：球體邊緣添加光暈效果
- 陰影：深灰色或黑色，透明度 10-30%

**形狀細節**
- **標準球體**：正圓形
- **形變效果**（可選）：
  - 接觸地面時：垂直壓扁，水平拉寬
  - 最高點時：垂直拉長，水平收窄
  - 模擬真實物理彈性

### 動畫效果

**垂直彈跳動畫**
- 球體從地面彈起到最高點，再落回地面
- 彈跳高度：球體直徑的 2-4 倍
- 上升：快速加速（ease-out）
- 下降：加速下落（ease-in）
- 循環：無限重複

**彈跳軌跡曲線**
- 使用物理曲線模擬重力
- 上升階段：cubic-bezier(0.33, 1, 0.68, 1)
- 下降階段：cubic-bezier(0.32, 0, 0.67, 0)
- 或使用關鍵幀精確控制

**形變動畫（可選）**
- 0%（地面）：scaleY(0.8) scaleX(1.2)
- 50%（最高點）：scaleY(1.2) scaleX(0.8)
- 100%（地面）：scaleY(0.8) scaleX(1.2)

**陰影動畫**
- 球體高度越高，陰影越淡、越小
- 球體在地面時，陰影最深、最大
- 陰影模糊半徑隨高度變化

### 多球協調模式

**交替彈跳（最常見）**
- 2-3 個球依次彈跳
- 延遲啟動：0.1-0.2 秒
- 形成連續的波浪效果

**同步彈跳**
- 所有球同時彈跳
- 可以是同高度或不同高度
- 適合強調整體性

**隨機彈跳**
- 每個球獨立彈跳，隨機延遲
- 模擬自然隨機性
- 更具趣味性

**追逐模式**
- 後面的球追逐前面的球
- 創造動態追逐效果

### 交互體驗

**動畫參數**
- 單次彈跳時長：0.5-0.8 秒
- 彈跳高度：30-60px（根據球體尺寸）
- 緩動函數：
  - 上升：ease-out 或 cubic-bezier(0.33, 1, 0.68, 1)
  - 下降：ease-in 或 cubic-bezier(0.32, 0, 0.67, 0)
- 無限循環

**物理真實感**
- 模擬重力加速度
- 可選：每次彈跳高度遞減（衰減彈跳）
- 可選：彈跳到一定次數後重置

**視覺細節**
- 球體頂部添加高光（模擬光源）
- 底部陰影跟隨球體運動
- 彈跳時輕微旋轉（可選）

### 應用場景

**遊戲/娛樂應用**
- 加載頁面或關卡轉換
- 彩色球體，活潑配色
- 可添加聲音效果（可選）

**兒童/教育產品**
- 友好可愛的加載動畫
- 明亮多彩的球體
- 可配合卡通角色

**運動/健身應用**
- 模擬運動球（籃球、足球）
- 配合品牌主色
- 強調動感與活力

**創意/設計工具**
- 展示品牌個性
- 獨特的彈跳節奏
- 可定制球體樣式

**移動應用**
- 下拉刷新動畫
- 頁面轉場加載
- 小巧輕快的球體

### 佈局與定位

**垂直佈局**
- 球體在垂直軌道上彈跳
- 軌道高度：彈跳高度 + 球體直徑
- 底部基線對齊

**水平排列（多球）**
- 多個球水平排列
- 間距均勻
- 使用 flexbox 或 grid 居中

**容器設置**
- 容器高度需容納完整彈跳軌跡
- 確保陰影不被裁切
- 居中對齊於父容器

### 技術實現要點

**CSS 動畫實現**
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

.bounce-ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #3498db;
  animation: bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
}

/* 陰影動畫 */
@keyframes shadow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(0.5);
  }
}

.bounce-shadow {
  animation: shadow 0.6s ease-in-out infinite;
}
```

**形變效果**
```css
@keyframes bounce-squash {
  0%, 100% {
    transform: translateY(0) scaleY(0.8) scaleX(1.2);
  }
  50% {
    transform: translateY(-40px) scaleY(1.2) scaleX(0.8);
  }
}
```

**多球延遲**
```css
.bounce-ball:nth-child(1) { animation-delay: 0s; }
.bounce-ball:nth-child(2) { animation-delay: 0.2s; }
.bounce-ball:nth-child(3) { animation-delay: 0.4s; }
```

**性能優化**
- 使用 transform 而非 top/margin
- GPU 加速：will-change: transform
- 避免同時運行過多彈跳動畫
- 陰影使用偽元素而非額外 DOM

### 無障礙考量

- 提供屏幕閱讀器文本：「加載中」
- 使用 aria-live="polite" 或 role="status"
- 球體本身設為 aria-hidden="true"
- 避免過快彈跳（可能引起不適）
- 支持 prefers-reduced-motion

**Reduced Motion 支持**
```css
@media (prefers-reduced-motion: reduce) {
  .bounce-ball {
    animation: none;
    opacity: 0.7; /* 靜態半透明 */
  }
}
```

### 設計建議

**彈跳高度**
- 與球體尺寸成比例
- 小球：2-3 倍直徑
- 大球：1.5-2.5 倍直徑
- 避免過高（失去視線）

**彈跳速度**
- 快速：0.4-0.5 秒（活潑）
- 適中：0.6-0.8 秒（標準）
- 緩慢：1-1.2 秒（優雅）

**球體數量**
- 1 個：簡潔，適合小空間
- 2-3 個：最常見，平衡
- 4+ 個：可能過於複雜

**顏色選擇**
- 單球：品牌主色
- 多球：互補色或同色系
- 確保與背景對比明顯
- 暗色模式下調整亮度

### 設計風格變體

**極簡風格**
- 單色球體
- 無形變，純彈跳
- 細微陰影
- 緩慢優雅的節奏

**Material Design**
- 使用 Material 緩動曲線
- 品牌色球體
- 提升陰影效果
- 適中速度

**卡通風格**
- 誇張的形變效果
- 明亮多彩的配色
- 快速活潑的彈跳
- 可添加眼睛等表情（可選）

**科技感**
- 霓虹色或發光球體
- 光暈效果
- 快速精準的彈跳
- 暗色背景

**復古風格**
- 經典色調（紅、黃、藍）
- 適中的彈跳速度
- 柔和的陰影

### 適用場景

- 遊戲與娛樂應用
- 兒童與教育產品
- 運動與健身應用
- 社交媒體平台
- 移動應用加載
- 任何需要輕鬆、活潑氛圍的產品

### 與其他動畫的區別

- **vs Dots**：Bounce 更具物理真實感
- **vs Pulse**：Bounce 有明確的軌跡運動
- **vs Spinner**：Bounce 更活潑、非正式
- **vs Wave**：Bounce 是垂直運動，Wave 是高度變化

---

## English Version (en-US)

Please create a Bounce style loading animation component.

### Design Philosophy

Bouncing ball animation creates a lively, dynamic, and approachable loading experience by simulating the bouncing motion of spheres in the real physical world. This animation style is vivid and interesting, effectively alleviating user anxiety during waiting, particularly suitable for consumer-facing products or those requiring a relaxed atmosphere.

### Visual Characteristics

**Basic Form**
- One or multiple circular spheres
- Spheres bounce up and down vertically
- Optional: Spheres have slight deformation during bounce (squash and stretch)
- Shadows enhance realism

**Size Specifications**
- **Single Ball Mode**:
  - Small: Diameter 16-24px
  - Medium: Diameter 32-48px
  - Large: Diameter 64-80px
- **Multi-ball Mode** (typically 2-3 balls):
  - Ball diameter: 12-24px
  - Ball spacing: 1-1.5x diameter

**Color Schemes**
- **Monochrome**: Brand primary color or neutral gray
- **Gradient ball**: Ball itself uses gradient color
- **Multicolor balls**: Each ball different color (e.g., red, yellow, blue)
- **Glowing ball**: Ball edge with halo effect
- Shadow: Dark gray or black, opacity 10-30%

**Shape Details**
- **Standard sphere**: Perfect circle
- **Deformation effect** (optional):
  - Touching ground: Vertically squashed, horizontally widened
  - At peak: Vertically stretched, horizontally narrowed
  - Simulating real physical elasticity

### Animation Effects

**Vertical Bounce Animation**
- Ball bounces from ground to peak, then falls back
- Bounce height: 2-4x ball diameter
- Ascent: Quick acceleration (ease-out)
- Descent: Accelerated fall (ease-in)
- Loop: Infinite repeat

**Bounce Trajectory Curve**
- Use physics curve to simulate gravity
- Ascent phase: cubic-bezier(0.33, 1, 0.68, 1)
- Descent phase: cubic-bezier(0.32, 0, 0.67, 0)
- Or use keyframes for precise control

**Deformation Animation (Optional)**
- 0% (ground): scaleY(0.8) scaleX(1.2)
- 50% (peak): scaleY(1.2) scaleX(0.8)
- 100% (ground): scaleY(0.8) scaleX(1.2)

**Shadow Animation**
- Higher ball, lighter and smaller shadow
- Ball on ground, darkest and largest shadow
- Shadow blur radius changes with height

### Multi-ball Coordination Modes

**Alternating Bounce (Most Common)**
- 2-3 balls bounce sequentially
- Delayed start: 0.1-0.2 seconds
- Form continuous wave effect

**Synchronized Bounce**
- All balls bounce simultaneously
- Can be same or different heights
- Suitable for emphasizing unity

**Random Bounce**
- Each ball bounces independently with random delay
- Simulating natural randomness
- More playful

**Chase Mode**
- Trailing balls chase leading balls
- Creates dynamic chase effect

### Interaction Experience

**Animation Parameters**
- Single bounce duration: 0.5-0.8 seconds
- Bounce height: 30-60px (based on ball size)
- Easing function:
  - Ascent: ease-out or cubic-bezier(0.33, 1, 0.68, 1)
  - Descent: ease-in or cubic-bezier(0.32, 0, 0.67, 0)
- Infinite loop

**Physical Realism**
- Simulate gravitational acceleration
- Optional: Bounce height decreases each time (decaying bounce)
- Optional: Reset after certain number of bounces

**Visual Details**
- Highlight on ball top (simulating light source)
- Bottom shadow follows ball movement
- Slight rotation during bounce (optional)

### Application Scenarios

**Game/Entertainment Apps**
- Loading pages or level transitions
- Colorful balls, lively colors
- Can add sound effects (optional)

**Children/Education Products**
- Friendly cute loading animation
- Bright colorful balls
- Can pair with cartoon characters

**Sports/Fitness Apps**
- Simulate sports balls (basketball, soccer)
- Paired with brand colors
- Emphasize dynamics and vitality

**Creative/Design Tools**
- Showcase brand personality
- Unique bounce rhythm
- Customizable ball styles

**Mobile Apps**
- Pull-to-refresh animation
- Page transition loading
- Small quick balls

### Layout and Positioning

**Vertical Layout**
- Ball bounces on vertical track
- Track height: Bounce height + ball diameter
- Bottom baseline alignment

**Horizontal Arrangement (Multi-ball)**
- Multiple balls arranged horizontally
- Even spacing
- Use flexbox or grid centering

**Container Setup**
- Container height must accommodate full bounce trajectory
- Ensure shadow not clipped
- Centered in parent container

### Technical Implementation Points

**CSS Animation Implementation**
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

.bounce-ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #3498db;
  animation: bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
}

/* Shadow animation */
@keyframes shadow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.1;
    transform: scale(0.5);
  }
}

.bounce-shadow {
  animation: shadow 0.6s ease-in-out infinite;
}
```

**Deformation Effect**
```css
@keyframes bounce-squash {
  0%, 100% {
    transform: translateY(0) scaleY(0.8) scaleX(1.2);
  }
  50% {
    transform: translateY(-40px) scaleY(1.2) scaleX(0.8);
  }
}
```

**Multi-ball Delay**
```css
.bounce-ball:nth-child(1) { animation-delay: 0s; }
.bounce-ball:nth-child(2) { animation-delay: 0.2s; }
.bounce-ball:nth-child(3) { animation-delay: 0.4s; }
```

**Performance Optimization**
- Use transform instead of top/margin
- GPU acceleration: will-change: transform
- Avoid running too many bounce animations simultaneously
- Use pseudo-elements for shadows instead of extra DOM

### Accessibility Considerations

- Provide screen reader text: "Loading"
- Use aria-live="polite" or role="status"
- Balls themselves set to aria-hidden="true"
- Avoid overly fast bouncing (may cause discomfort)
- Support prefers-reduced-motion

**Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .bounce-ball {
    animation: none;
    opacity: 0.7; /* Static semi-transparent */
  }
}
```

### Design Recommendations

**Bounce Height**
- Proportional to ball size
- Small ball: 2-3x diameter
- Large ball: 1.5-2.5x diameter
- Avoid too high (lose sight)

**Bounce Speed**
- Fast: 0.4-0.5 seconds (lively)
- Moderate: 0.6-0.8 seconds (standard)
- Slow: 1-1.2 seconds (elegant)

**Ball Count**
- 1: Concise, suitable for small spaces
- 2-3: Most common, balanced
- 4+: May be too complex

**Color Selection**
- Single ball: Brand primary color
- Multi-ball: Complementary or analogous colors
- Ensure clear contrast with background
- Adjust brightness in dark mode

### Design Style Variants

**Minimalist Style**
- Monochrome ball
- No deformation, pure bounce
- Subtle shadow
- Slow elegant rhythm

**Material Design**
- Use Material easing curves
- Brand color balls
- Elevation shadow effects
- Moderate speed

**Cartoon Style**
- Exaggerated deformation effects
- Bright colorful palette
- Fast lively bouncing
- Can add eyes or expressions (optional)

**Tech Style**
- Neon or glowing balls
- Halo effects
- Fast precise bouncing
- Dark background

**Retro Style**
- Classic colors (red, yellow, blue)
- Moderate bounce speed
- Soft shadows

### Use Cases

- Game and entertainment apps
- Children and education products
- Sports and fitness apps
- Social media platforms
- Mobile app loading
- Any product requiring relaxed, lively atmosphere

### Distinctions from Other Animations

- **vs Dots**: Bounce has more physical realism
- **vs Pulse**: Bounce has clear trajectory motion
- **vs Spinner**: Bounce more lively, informal
- **vs Wave**: Bounce is vertical motion, Wave is height variation
