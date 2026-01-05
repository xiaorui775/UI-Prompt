# Glassmorphism Reaction Picker

## 中文版本 (zh-CN)

請創建一個玻璃態（Glassmorphism）風格的表情反應選擇器（Reaction Picker）組件。

### 設計理念

玻璃態反應選擇器將磨砂玻璃的質感與表情選擇功能結合，創造出夢幻、現代且極具視覺吸引力的交互體驗。選擇器應該像一片懸浮的毛玻璃面板，透過它能隱約看到背景內容，營造出輕盈、高級的科技美感。

### 視覺特徵

**整體風格**
- 半透明背景，模糊效果顯著
- 細膩的玻璃邊緣效果
- 柔和的陰影與高光
- 現代感十足的圓角設計

**容器設計**
- 背景：rgba(255, 255, 255, 0.15) 或 rgba(255, 255, 255, 0.2)
- 背景模糊：backdrop-filter: blur(16px) 或 blur(20px)
- 邊框：1px solid rgba(255, 255, 255, 0.25)
- 陰影：box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
- 圓角：16-24px（較大圓角增強柔和感）
- 可選：微妙的內發光效果

**玻璃層次效果**
- 背景透明度根據環境調整（60-80%）
- 模糊強度適中，確保背景可見但不干擾
- 邊緣高光模擬光線折射
- 可選頂部或側面漸變高光

**表情顯示**
- 表情尺寸：28-36px（稍大以配合玻璃效果）
- 表情周圍可選淡彩圈或光暈
- 顏色鮮明以確保在半透明背景下可見
- 間距適中，保持呼吸感

**懸停效果**
- 圓形半透明高亮背景
- 背景：rgba(255, 255, 255, 0.3)
- 輕微放大（scale 1.15）
- 可選微光效果或光暈增強
- 過渡流暢（200-250ms）

**選中狀態**
- 更明顯的半透明背景
- 可選發光環繞效果（box-shadow: 0 0 12px rgba(主色, 0.5)）
- 輕微縮放保持

### 交互體驗

**出現動畫**
- 從觸發點淡入並輕微放大（scale 0.9 → 1）
- 模糊效果同步漸入（避免突然出現）
- 動畫時長：250-350ms
- 緩動曲線：cubic-bezier(0.16, 1, 0.3, 1)

**表情選擇動畫**
- 點擊時輕微縮放反饋（scale 0.95 → 1）
- 圓形漣漪效果（使用半透明白色）
- 選中後微妙的光暈閃爍
- 可選：粒子或光點飄散效果

**面板收起**
- 淡出並輕微縮小（scale 1 → 0.95）
- 模糊效果同步淡出
- 與出現動畫對稱

**懸停交互**
- 表情懸停時玻璃背景微妙變亮
- 其他表情輕微淡化（可選）
- 整體創造聚焦效果

### 顏色與透明度

**淺色背景環境**
- 容器背景：rgba(255, 255, 255, 0.6-0.8)
- 邊框：rgba(255, 255, 255, 0.3)
- 懸停背景：rgba(0, 0, 0, 0.05)
- 選中背景：rgba(品牌色, 0.2)

**深色背景環境**
- 容器背景：rgba(255, 255, 255, 0.08-0.15)
- 邊框：rgba(255, 255, 255, 0.15)
- 懸停背景：rgba(255, 255, 255, 0.1)
- 選中背景：rgba(品牌色, 0.25)

**彩色/漸變背景環境**
- 容器背景：rgba(255, 255, 255, 0.2-0.3)
- 可略帶背景色調（如淡紫、淡藍）
- 確保表情顏色對比度足夠

### 佈局設計

**水平快速反應**
- 表情水平排列成一行
- 兩端圓角呈膠囊形狀
- 間距適中，觸控友好
- 末端可選「更多」按鈕（半透明圖標）

**網格式面板**
- 4-5 列網格佈局
- 每個表情單元格帶懸停效果
- 頂部可選分類標籤（玻璃態標籤）
- 底部可選最近使用區域

**分組式佈局**
- 不同類別用細線分隔
- 分隔線：1px solid rgba(255, 255, 255, 0.2)
- 類別標題使用較小字號

### 視覺增強

**高光效果**
- 頂部添加線性漸變高光
- background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 50%)
- 模擬真實玻璃光線反射

**邊緣發光**
- 可選外發光效果
- box-shadow: 0 0 20px rgba(255, 255, 255, 0.1)
- 增強浮動感

**動態效果（可選）**
- 微妙的色彩流動背景
- 光點或粒子飄動
- 增強科幻/夢幻氛圍

### 應用場景

**現代 Web 應用**
- 社交平台反應功能
- 評論區表情選擇
- 漸變或圖片背景的網站

**iOS/macOS 風格界面**
- 符合 Apple 設計語言
- 與系統 UI 風格統一
- 高級感設計系統

**創意/設計類產品**
- 設計工具的反應功能
- 藝術類應用的交互元素
- 強調美感的產品

**遊戲/娛樂應用**
- 遊戲內快速反應
- 直播互動表情
- 夢幻風格 UI

### 技術實現要點

**玻璃效果 CSS**
```css
.glass-reaction-picker {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

**高光層**
```css
.glass-reaction-picker::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  border-radius: 20px 20px 0 0;
  pointer-events: none;
}
```

**懸停效果**
```css
.reaction-item:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.15);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}
```

**瀏覽器兼容**
- 檢測 backdrop-filter 支持
- 無支持時回退到純色半透明背景
- Safari 需要 -webkit- 前綴

### 無障礙設計

- 確保表情與背景對比度足夠
- 選中狀態除顏色外還需形狀/尺寸區分
- 提供表情文字說明（aria-label）
- 鍵盤導航支持
- 屏幕閱讀器友好

### 性能考量

- backdrop-filter 可能影響性能
- 移動端可降低模糊強度（blur 10-12px）
- 避免過大區域使用玻璃效果
- 使用 will-change 優化動畫

### 設計建議

**背景要求**
- 玻璃效果需要有色彩或紋理的背景才明顯
- 純白背景下效果不佳
- 建議使用漸變、圖片或彩色背景

**透明度平衡**
- 過透明：內容不清晰
- 不夠透明：失去玻璃感
- 推薦：60-80% 透明度

**模糊強度**
- 過強：背景不可見
- 過弱：失去毛玻璃效果
- 推薦：12-20px blur

### 適用場景

- 具有豐富背景的現代 Web 應用
- iOS/macOS 風格的界面設計
- 創意與設計類產品
- 社交媒體平台
- 追求高級感與現代感的產品
- 漸變或圖片背景的網頁

---

## English Version (en-US)

Please create a Glassmorphism style reaction picker component.

### Design Philosophy

Glassmorphism reaction picker combines frosted glass texture with emoji selection functionality, creating a dreamy, modern, and visually appealing interaction experience. The picker should appear like a floating frosted glass panel, through which background content is vaguely visible, creating a lightweight, premium tech aesthetic.

### Visual Characteristics

**Overall Style**
- Semi-transparent background with prominent blur effect
- Delicate glass edge effects
- Soft shadows and highlights
- Modern rounded corner design

**Container Design**
- Background: rgba(255, 255, 255, 0.15) or rgba(255, 255, 255, 0.2)
- Background blur: backdrop-filter: blur(16px) or blur(20px)
- Border: 1px solid rgba(255, 255, 255, 0.25)
- Shadow: box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
- Border radius: 16-24px (larger radius enhances softness)
- Optional: Subtle inner glow effect

**Glass Layering Effect**
- Background transparency adjusts based on environment (60-80%)
- Moderate blur intensity, ensuring background visible but not distracting
- Edge highlights simulating light refraction
- Optional top or side gradient highlights

**Emoji Display**
- Emoji size: 28-36px (slightly larger to match glass effect)
- Optional light colored circles or halos around emojis
- Bright colors ensuring visibility on semi-transparent background
- Moderate spacing, maintaining breathing room

**Hover Effect**
- Circular semi-transparent highlight background
- Background: rgba(255, 255, 255, 0.3)
- Slight enlargement (scale 1.15)
- Optional shimmer effect or enhanced halo
- Smooth transition (200-250ms)

**Selected State**
- More prominent semi-transparent background
- Optional glowing ring effect (box-shadow: 0 0 12px rgba(primary-color, 0.5))
- Maintains slight scale

### Interaction Experience

**Appearance Animation**
- Fade in from trigger point with slight scale (scale 0.9 → 1)
- Blur effect synchronously fades in (avoiding sudden appearance)
- Animation duration: 250-350ms
- Easing curve: cubic-bezier(0.16, 1, 0.3, 1)

**Emoji Selection Animation**
- Slight scale feedback on click (scale 0.95 → 1)
- Circular ripple effect (using semi-transparent white)
- Subtle halo flash after selection
- Optional: Particle or light dot dispersal effect

**Panel Collapse**
- Fade out with slight shrink (scale 1 → 0.95)
- Blur effect synchronously fades out
- Symmetric with appearance animation

**Hover Interaction**
- Glass background subtly brightens on emoji hover
- Other emojis slightly fade (optional)
- Creates overall focus effect

### Colors and Transparency

**Light Background Environment**
- Container background: rgba(255, 255, 255, 0.6-0.8)
- Border: rgba(255, 255, 255, 0.3)
- Hover background: rgba(0, 0, 0, 0.05)
- Selected background: rgba(brand-color, 0.2)

**Dark Background Environment**
- Container background: rgba(255, 255, 255, 0.08-0.15)
- Border: rgba(255, 255, 255, 0.15)
- Hover background: rgba(255, 255, 255, 0.1)
- Selected background: rgba(brand-color, 0.25)

**Colorful/Gradient Background Environment**
- Container background: rgba(255, 255, 255, 0.2-0.3)
- Can have slight background tint (e.g., light purple, light blue)
- Ensure emoji color contrast is sufficient

### Layout Design

**Horizontal Quick Reactions**
- Emojis arranged horizontally in one row
- Capsule shape with rounded ends
- Moderate spacing, touch-friendly
- Optional "more" button at end (semi-transparent icon)

**Grid Panel**
- 4-5 column grid layout
- Each emoji cell has hover effect
- Optional category tabs at top (glass-style tabs)
- Optional recently used area at bottom

**Grouped Layout**
- Different categories separated by fine lines
- Separator: 1px solid rgba(255, 255, 255, 0.2)
- Category titles use smaller font size

### Visual Enhancements

**Highlight Effect**
- Add linear gradient highlight at top
- background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 50%)
- Simulates real glass light reflection

**Edge Glow**
- Optional outer glow effect
- box-shadow: 0 0 20px rgba(255, 255, 255, 0.1)
- Enhances floating sensation

**Dynamic Effects (Optional)**
- Subtle color-flowing background
- Floating light dots or particles
- Enhances sci-fi/dreamy atmosphere

### Application Scenarios

**Modern Web Applications**
- Social platform reaction features
- Comment section emoji selection
- Websites with gradient or image backgrounds

**iOS/macOS Style Interfaces**
- Follows Apple design language
- Unified with system UI style
- Premium design systems

**Creative/Design Products**
- Reaction features in design tools
- Interactive elements in art applications
- Products emphasizing aesthetics

**Game/Entertainment Apps**
- In-game quick reactions
- Livestream interaction emojis
- Dreamy-style UI

### Technical Implementation Points

**Glass Effect CSS**
```css
.glass-reaction-picker {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

**Highlight Layer**
```css
.glass-reaction-picker::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  border-radius: 20px 20px 0 0;
  pointer-events: none;
}
```

**Hover Effect**
```css
.reaction-item:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.15);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}
```

**Browser Compatibility**
- Detect backdrop-filter support
- Fallback to solid semi-transparent background when unsupported
- Safari requires -webkit- prefix

### Accessibility Design

- Ensure sufficient contrast between emojis and background
- Selected state needs shape/size distinction beyond color
- Provide emoji text descriptions (aria-label)
- Keyboard navigation support
- Screen reader friendly

### Performance Considerations

- backdrop-filter may affect performance
- Mobile can reduce blur intensity (blur 10-12px)
- Avoid glass effect on large areas
- Use will-change to optimize animations

### Design Recommendations

**Background Requirements**
- Glass effect needs colorful or textured backgrounds to be prominent
- Effect not good on pure white backgrounds
- Recommend gradients, images, or colored backgrounds

**Transparency Balance**
- Too transparent: Content unclear
- Not transparent enough: Loses glass feel
- Recommended: 60-80% transparency

**Blur Intensity**
- Too strong: Background invisible
- Too weak: Loses frosted glass effect
- Recommended: 12-20px blur

### Use Cases

- Modern web apps with rich backgrounds
- iOS/macOS style interface designs
- Creative and design products
- Social media platforms
- Products pursuing premium and modern aesthetics
- Webpages with gradient or image backgrounds
