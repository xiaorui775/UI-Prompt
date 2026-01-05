# Dots Loading Animation

## 中文版本 (zh-CN)

請創建一個跳動圓點（Dots）風格的加載動畫組件。

### 設計理念

跳動圓點動畫通過多個圓點的序列化彈跳運動創造出俏皮、友好的加載體驗。這種動畫風格比 Spinner 更具親和力，傳達出輕鬆、非正式的品牌調性，適合面向消費者的產品。

### 視覺特徵

**基本形態**
- 通常由 3-5 個圓點組成（最常見是 3 個）
- 圓點大小一致，排列成水平直線
- 圓點之間間距均勻（通常為圓點直徑的 1-1.5 倍）
- 圓點顏色單一或漸變

**尺寸規格**
- **小型**：圓點直徑 4-6px，間距 6-8px
- **中型**：圓點直徑 8-12px，間距 12-16px
- **大型**：圓點直徑 16-20px，間距 24-30px
- 整體寬度：圓點數量 × (直徑 + 間距) - 間距

**顏色方案**
- **單色**：所有圓點同色，通過透明度變化表現動畫
- **漸變色**：從左到右顏色漸變（如藍→紫→粉）
- **主題色**：使用品牌主色，透明度 60-100%
- **暗色模式**：自動切換為淺色圓點

### 交互體驗

**動畫模式 1：垂直彈跳（最常見）**
- 圓點依次上下跳動
- 每個圓點延遲啟動（stagger delay）
- 延遲間隔：0.1-0.15 秒
- 彈跳高度：圓點直徑的 1.5-2 倍
- 緩動函數：ease-in-out 或 cubic-bezier

**動畫模式 2：縮放脈動**
- 圓點依次放大縮小
- 縮放範圍：0.6 → 1.2 → 0.6
- 序列化延遲，形成波浪效果
- 緩動函數：ease-in-out

**動畫模式 3：淡入淡出**
- 圓點透明度循環變化
- 不透明度：0.3 → 1 → 0.3
- 形成「流動」的視覺效果
- 適合極簡風格

**動畫參數**
- 單個圓點動畫時長：0.6-0.8 秒
- 總循環時長：1.2-1.5 秒
- 無限循環：infinite
- 延遲啟動確保連續性

### 應用場景

**聊天應用**
- 顯示「正在輸入...」狀態
- 圓點較小，配合文字提示
- 動畫輕柔，不搶眼

**搜索框**
- 搜索過程中顯示於輸入框內或旁邊
- 中小尺寸，簡潔明快
- 顏色與輸入框風格一致

**卡片加載**
- 內容卡片加載時居中顯示
- 中等尺寸，配合淡入淡出
- 可選文字說明「加載中...」

**按鈕內嵌**
- 按鈕點擊後顯示小圓點
- 圓點排列緊湊
- 顏色與按鈕文字顏色一致

**頁面轉場**
- 頁面切換時的過渡動畫
- 大尺寸圓點，居中顯示
- 可配合頁面淡出效果

### 佈局與定位

**水平居中**
- 使用 flexbox 或 grid 居中
- 父容器：display: flex; justify-content: center
- 圓點容器：display: flex; gap: [間距]

**垂直對齊**
- 通常與文字基線對齊（用於內聯顯示）
- 或垂直居中（用於塊級顯示）

**響應式調整**
- 移動端可適當縮小尺寸
- 保持圓點間距比例一致

### 技術實現要點

**CSS 實現**
```css
.dot {
  animation: bounce 0.6s infinite;
}
.dot:nth-child(2) {
  animation-delay: 0.1s;
}
.dot:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
}
```

**性能優化**
- 使用 transform 而非 margin/top
- 避免觸發重排（reflow）
- 使用 will-change: transform（謹慎使用）

### 無障礙考量

- 提供屏幕閱讀器文本：「加載中」
- 使用 `aria-label` 或 `aria-live`
- 圓點本身設為 `aria-hidden="true"`
- 避免過快閃爍（可能引發光敏性癲癇）

### 設計建議

- 圓點數量建議 3 個（簡潔清晰）
- 彈跳高度不宜過大（保持克制）
- 動畫速度適中，不快不慢
- 顏色對比度足夠（確保可見性）
- 暗色模式下使用淺色圓點

### 設計風格匹配

- **可愛風格**：彈跳動畫 + 明快配色
- **專業風格**：淡入淡出 + 中性配色
- **科技風格**：縮放脈動 + 品牌色
- **極簡風格**：透明度變化 + 灰色圓點

### 適用場景

- 社交媒體應用
- 消息與聊天工具
- 輕量級內容加載
- 搜索與過濾操作
- 追求親和力的消費級產品

---

## English Version (en-US)

Please create a Dots style loading animation component.

### Design Philosophy

Bouncing dots animation creates a playful, friendly loading experience through sequenced bouncing motion of multiple dots. This animation style is more approachable than Spinner, conveying a relaxed, informal brand tone suitable for consumer-facing products.

### Visual Characteristics

**Basic Form**
- Typically composed of 3-5 dots (3 most common)
- Uniform dot sizes arranged in horizontal line
- Even spacing between dots (usually 1-1.5x dot diameter)
- Single color or gradient dots

**Size Specifications**
- **Small**: Dot diameter 4-6px, spacing 6-8px
- **Medium**: Dot diameter 8-12px, spacing 12-16px
- **Large**: Dot diameter 16-20px, spacing 24-30px
- Total width: Number of dots × (diameter + spacing) - spacing

**Color Schemes**
- **Monochrome**: All dots same color, animation shown through opacity changes
- **Gradient**: Color gradient from left to right (e.g., blue→purple→pink)
- **Theme color**: Use brand primary color, opacity 60-100%
- **Dark mode**: Auto-switch to light-colored dots

### Interaction Experience

**Animation Mode 1: Vertical Bounce (Most Common)**
- Dots bounce up and down sequentially
- Each dot starts with delay (stagger delay)
- Delay interval: 0.1-0.15 seconds
- Bounce height: 1.5-2x dot diameter
- Easing function: ease-in-out or cubic-bezier

**Animation Mode 2: Scale Pulse**
- Dots scale up and down sequentially
- Scale range: 0.6 → 1.2 → 0.6
- Sequential delay creating wave effect
- Easing function: ease-in-out

**Animation Mode 3: Fade In/Out**
- Dot opacity cycles
- Opacity: 0.3 → 1 → 0.3
- Creates "flowing" visual effect
- Suitable for minimalist style

**Animation Parameters**
- Single dot animation duration: 0.6-0.8 seconds
- Total cycle duration: 1.2-1.5 seconds
- Infinite loop: infinite
- Delayed start ensures continuity

### Application Scenarios

**Chat Applications**
- Display "typing..." status
- Smaller dots with text prompt
- Gentle animation, not eye-catching

**Search Box**
- Display inside or beside input box during search
- Small to medium size, clean and quick
- Color consistent with input box style

**Card Loading**
- Centered display when content card loading
- Medium size with fade in/out
- Optional text description "Loading..."

**Button Inline**
- Display small dots after button click
- Compact dot arrangement
- Color matches button text color

**Page Transitions**
- Transition animation when switching pages
- Large dots, centered display
- Can combine with page fade-out effect

### Layout and Positioning

**Horizontal Centering**
- Use flexbox or grid centering
- Parent container: display: flex; justify-content: center
- Dot container: display: flex; gap: [spacing]

**Vertical Alignment**
- Usually align with text baseline (for inline display)
- Or vertical center (for block display)

**Responsive Adjustment**
- Can moderately reduce size on mobile
- Maintain consistent dot spacing ratio

### Technical Implementation Points

**CSS Implementation**
```css
.dot {
  animation: bounce 0.6s infinite;
}
.dot:nth-child(2) {
  animation-delay: 0.1s;
}
.dot:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
}
```

**Performance Optimization**
- Use transform instead of margin/top
- Avoid triggering reflow
- Use will-change: transform (use cautiously)

### Accessibility Considerations

- Provide screen reader text: "Loading"
- Use `aria-label` or `aria-live`
- Dots themselves set to `aria-hidden="true"`
- Avoid overly fast flashing (may trigger photosensitive epilepsy)

### Design Recommendations

- Recommend 3 dots (clean and clear)
- Bounce height should not be excessive (maintain restraint)
- Moderate animation speed, neither fast nor slow
- Sufficient color contrast (ensure visibility)
- Use light-colored dots in dark mode

### Design Style Matching

- **Cute style**: Bounce animation + bright colors
- **Professional style**: Fade in/out + neutral colors
- **Tech style**: Scale pulse + brand colors
- **Minimalist style**: Opacity changes + gray dots

### Use Cases

- Social media applications
- Messaging and chat tools
- Lightweight content loading
- Search and filter operations
- Consumer products pursuing approachability
