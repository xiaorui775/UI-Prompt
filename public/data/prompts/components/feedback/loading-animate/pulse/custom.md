# Pulse Loading Animation

## 中文版本 (zh-CN)

請創建一個脈沖（Pulse）風格的加載動畫組件。

### 設計理念

脈沖動畫通過元素的規律性縮放或透明度變化，模擬心跳或呼吸般的律動感。這種動畫風格柔和、低調，傳達出「系統活躍但不急迫」的狀態，適合需要持續顯示但不搶眼的加載場景。

### 視覺特徵

**基本形態**
- 單個圓形或方形元素
- 從中心向外擴散的同心圓效果（可選）
- 顏色單一或漸變
- 邊緣可選模糊效果，增強柔和感

**尺寸規格**
- **小型**：24-32px - 用於按鈕、圖標旁
- **中型**：48-64px - 用於卡片、內容區
- **大型**：80-120px - 用於全頁加載或焦點區域
- 脈沖幅度：原始尺寸的 1.1-1.3 倍

**顏色方案**
- **單色脈沖**：使用品牌主色或中性灰
- **漸變脈沖**：中心到邊緣透明度遞減
- **多層脈沖**：多個同心圓層疊，顏色或透明度不同
- **呼吸效果**：脈沖時顏色明暗交替

**形狀變體**
- **圓形脈沖**：最常見，適合圖標或頭像
- **方形脈沖**：適合卡片或容器
- **橢圓脈沖**：適合特定佈局需求
- **波紋擴散**：從中心向外擴散的多層圓環

### 動畫效果

**縮放脈沖（Scale Pulse）**
- 元素從原始尺寸放大再縮回
- 縮放範圍：scale(1) → scale(1.2) → scale(1)
- 動畫時長：1-1.5 秒
- 緩動函數：ease-in-out 或 cubic-bezier(0.4, 0, 0.6, 1)
- 無限循環

**透明度脈沖（Opacity Pulse）**
- 元素透明度循環變化
- 不透明度：1 → 0.5 → 1 或 1 → 0.3 → 1
- 適合背景層或疊加層
- 可與縮放同時使用

**波紋擴散（Ripple Effect）**
- 從中心向外擴散的圓環
- 圓環逐漸放大並淡出
- 可有多個圓環依次擴散
- 動畫時長：1.5-2 秒

**組合脈沖**
- 縮放 + 透明度同時變化
- 多層元素以不同速度脈沖
- 顏色飽和度或亮度變化

### 交互體驗

**動畫參數**
- 脈沖頻率：0.8-1.5 秒一次
- 不宜過快（避免引起不適）
- 不宜過慢（失去動感）
- 循環次數：infinite（持續脈沖）

**緩動曲線**
- ease-in-out：平滑加速減速
- cubic-bezier(0.4, 0, 0.2, 1)：Material Design 風格
- ease：標準緩動
- 避免使用 linear（過於機械）

**多元素協調**
- 多個脈沖元素可同步或交錯
- 交錯延遲：0.1-0.2 秒
- 創造波浪或序列效果

### 應用場景

**位置標記**
- 地圖上的位置點脈沖
- 突出當前位置或關注點
- 通常為圓形，顏色鮮明
- 波紋向外擴散

**通知指示器**
- 小紅點或徽章脈沖
- 提示有新消息或未讀通知
- 尺寸較小（8-12px）
- 顏色通常為紅色或品牌色

**頭像狀態**
- 用戶在線狀態指示
- 頭像邊緣或角落的小圓點脈沖
- 綠色表示在線，灰色離線
- 脈沖表示「活躍中」

**按鈕等待狀態**
- 點擊按鈕後的脈沖效果
- 按鈕本身或內部圖標脈沖
- 表示請求正在處理
- 顏色與按鈕風格一致

**焦點引導**
- 引導用戶注意特定元素
- 元素周圍的脈沖光暈
- 用於新手引導或提示
- 脈沖逐漸淡出（非無限）

**背景加載**
- 容器或卡片的脈沖背景
- 整體透明度變化
- 表示內容正在加載
- 適合大面積區域

### 技術實現要點

**CSS 縮放脈沖**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.pulse-loader {
  animation: pulse 1.5s ease-in-out infinite;
}
```

**波紋擴散效果**
```css
@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple {
  animation: ripple 1.5s ease-out infinite;
}
```

**多層波紋**
- 創建多個絕對定位的圓形元素
- 每個元素延遲啟動動畫
- 形成連續擴散的視覺效果

**性能優化**
- 使用 transform 而非 width/height
- 使用 opacity 而非 color（性能更好）
- 避免過多同時脈沖的元素
- GPU 加速：transform: translateZ(0)

### 無障礙考量

- 避免過快或過強的脈沖（可能引起光敏反應）
- 提供選項禁用動畫（prefers-reduced-motion）
- 屏幕閱讀器忽略裝飾性脈沖：aria-hidden="true"
- 如用於狀態指示，提供文字說明

**Reduced Motion 支持**
```css
@media (prefers-reduced-motion: reduce) {
  .pulse-loader {
    animation: none;
    opacity: 0.7; /* 靜態半透明 */
  }
}
```

### 設計建議

**節奏控制**
- 脈沖速度應與場景匹配
- 緊急操作：略快（1 秒）
- 一般等待：適中（1.5 秒）
- 背景狀態：較慢（2 秒）

**視覺強度**
- 重要提示：縮放幅度大，顏色鮮明
- 背景加載：縮放幅度小，顏色柔和
- 避免過於強烈的脈沖（干擾用戶）

**顏色選擇**
- 與品牌色或主題色一致
- 暗色模式下調整顏色亮度
- 確保足夠的對比度

**組合使用**
- 可與其他加載動畫組合
- 脈沖 + 旋轉（如心跳圖標旋轉）
- 脈沖 + 文字提示

### 設計風格變體

**極簡風格**
- 透明度脈沖，無縮放
- 灰色或單一品牌色
- 動畫緩慢柔和

**Material Design**
- 波紋擴散效果
- 使用 Material 緩動曲線
- 品牌主色調

**科技感**
- 多層同心圓擴散
- 霓虹色或漸變色
- 邊緣發光效果

**有機感**
- 不規則的脈沖節奏
- 模擬呼吸或心跳
- 柔和的曲線緩動

### 適用場景

- 地圖位置標記
- 通知徽章和提示
- 在線狀態指示
- 按鈕加載狀態
- 焦點引導與提示
- 背景加載狀態
- 實時數據更新指示

---

## English Version (en-US)

Please create a Pulse style loading animation component.

### Design Philosophy

Pulse animation simulates heartbeat or breathing-like rhythm through regular scaling or opacity changes of elements. This animation style is gentle and understated, conveying a "system active but not urgent" state, suitable for loading scenarios that need continuous display but not eye-catching.

### Visual Characteristics

**Basic Form**
- Single circular or square element
- Concentric circle effect expanding from center (optional)
- Single color or gradient
- Optional edge blur effect for enhanced softness

**Size Specifications**
- **Small**: 24-32px - For buttons, beside icons
- **Medium**: 48-64px - For cards, content areas
- **Large**: 80-120px - For full-page loading or focus areas
- Pulse amplitude: 1.1-1.3x original size

**Color Schemes**
- **Monochrome pulse**: Use brand primary color or neutral gray
- **Gradient pulse**: Transparency decreases from center to edge
- **Multi-layer pulse**: Multiple concentric circles with different colors or opacity
- **Breathing effect**: Color alternates between light and dark during pulse

**Shape Variants**
- **Circular pulse**: Most common, suitable for icons or avatars
- **Square pulse**: Suitable for cards or containers
- **Elliptical pulse**: Suitable for specific layout needs
- **Ripple diffusion**: Multi-layer rings expanding outward from center

### Animation Effects

**Scale Pulse**
- Element scales up from original size then shrinks back
- Scale range: scale(1) → scale(1.2) → scale(1)
- Animation duration: 1-1.5 seconds
- Easing function: ease-in-out or cubic-bezier(0.4, 0, 0.6, 1)
- Infinite loop

**Opacity Pulse**
- Element opacity cycles
- Opacity: 1 → 0.5 → 1 or 1 → 0.3 → 1
- Suitable for background layers or overlays
- Can be used simultaneously with scaling

**Ripple Effect**
- Rings expanding outward from center
- Rings gradually scale up and fade out
- Multiple rings can expand sequentially
- Animation duration: 1.5-2 seconds

**Combined Pulse**
- Scale + opacity change simultaneously
- Multi-layer elements pulse at different speeds
- Color saturation or brightness changes

### Interaction Experience

**Animation Parameters**
- Pulse frequency: 0.8-1.5 seconds per pulse
- Not too fast (avoid causing discomfort)
- Not too slow (lose dynamism)
- Loop count: infinite (continuous pulse)

**Easing Curves**
- ease-in-out: Smooth acceleration and deceleration
- cubic-bezier(0.4, 0, 0.2, 1): Material Design style
- ease: Standard easing
- Avoid linear (too mechanical)

**Multi-element Coordination**
- Multiple pulse elements can sync or stagger
- Stagger delay: 0.1-0.2 seconds
- Create wave or sequence effects

### Application Scenarios

**Location Markers**
- Location point pulse on maps
- Highlight current location or point of interest
- Typically circular with bright colors
- Ripples expand outward

**Notification Indicators**
- Small badge or dot pulse
- Indicate new messages or unread notifications
- Smaller size (8-12px)
- Color typically red or brand color

**Avatar Status**
- User online status indication
- Small dot pulse at avatar edge or corner
- Green for online, gray for offline
- Pulse indicates "active"

**Button Waiting State**
- Pulse effect after button click
- Button itself or internal icon pulses
- Indicates request is processing
- Color consistent with button style

**Focus Guidance**
- Guide user attention to specific elements
- Pulse halo around element
- For onboarding or prompts
- Pulse gradually fades (not infinite)

**Background Loading**
- Pulse background of container or card
- Overall opacity change
- Indicates content is loading
- Suitable for large areas

### Technical Implementation Points

**CSS Scale Pulse**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

.pulse-loader {
  animation: pulse 1.5s ease-in-out infinite;
}
```

**Ripple Diffusion Effect**
```css
@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ripple {
  animation: ripple 1.5s ease-out infinite;
}
```

**Multi-layer Ripples**
- Create multiple absolutely positioned circular elements
- Each element starts animation with delay
- Form continuous diffusion visual effect

**Performance Optimization**
- Use transform instead of width/height
- Use opacity instead of color (better performance)
- Avoid too many simultaneously pulsing elements
- GPU acceleration: transform: translateZ(0)

### Accessibility Considerations

- Avoid overly fast or strong pulses (may cause photosensitive reactions)
- Provide option to disable animations (prefers-reduced-motion)
- Screen readers ignore decorative pulses: aria-hidden="true"
- If used for status indication, provide text description

**Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .pulse-loader {
    animation: none;
    opacity: 0.7; /* Static semi-transparent */
  }
}
```

### Design Recommendations

**Rhythm Control**
- Pulse speed should match scenario
- Urgent operations: Slightly faster (1s)
- General waiting: Moderate (1.5s)
- Background status: Slower (2s)

**Visual Intensity**
- Important prompts: Large scale amplitude, bright colors
- Background loading: Small scale amplitude, soft colors
- Avoid overly strong pulses (disturb users)

**Color Selection**
- Consistent with brand or theme colors
- Adjust color brightness in dark mode
- Ensure sufficient contrast

**Combined Use**
- Can combine with other loading animations
- Pulse + rotation (e.g., heartbeat icon rotating)
- Pulse + text prompt

### Design Style Variants

**Minimalist Style**
- Opacity pulse, no scaling
- Gray or single brand color
- Slow gentle animation

**Material Design**
- Ripple diffusion effect
- Use Material easing curves
- Brand primary color

**Tech Style**
- Multi-layer concentric circle expansion
- Neon or gradient colors
- Edge glow effects

**Organic Feel**
- Irregular pulse rhythm
- Simulate breathing or heartbeat
- Soft curve easing

### Use Cases

- Map location markers
- Notification badges and prompts
- Online status indicators
- Button loading states
- Focus guidance and prompts
- Background loading states
- Real-time data update indicators
