# Glassmorphism Toast Notifications

## 中文版本 (zh-CN)

請創建一個玻璃態（Glassmorphism）風格的輕量級通知（Toast）組件。

### 設計理念

玻璃態 Toast 通知模擬真實世界中磨砂玻璃的視覺特性，通過半透明和背景模糊創造出輕盈、現代且極具層次感的通知體驗。通知應該像一片懸浮的毛玻璃，既不完全遮擋背景，又能清晰傳達信息。

### 視覺特徵

**整體風格**
- 半透明白色或淺色背景（70-85% 透明度）
- 強烈的背景模糊效果（backdrop-blur 8-16px）
- 細緻的半透明白色邊框（border: 1px solid rgba(255,255,255,0.18)）
- 中等圓角（8-12px），營造柔和的玻璃形態
- 柔和的陰影，增強浮動感（shadow: 0 8px 32px rgba(0,0,0,0.1)）

**玻璃層次效果**
- 可選漸變背景，從上到下透明度微調
- 玻璃表面可添加微妙的高光效果
- 內部內容與玻璃背景形成清晰對比
- 邊緣可選微光效果，模擬光線折射

**圖標與顏色**
- 圖標使用半透明或實色設計
- 成功：淡綠色或青色系（#10B981 with opacity）
- 錯誤：淡紅色或粉紅系（#EF4444 with opacity）
- 警告：淡黃色或琥珀系（#F59E0B with opacity）
- 信息：淡藍色或紫色系（#3B82F6 with opacity）
- 圖標周圍可添加柔和發光效果

**排版設計**
- 文字顏色根據背景調整，通常為深灰或黑色（保證可讀性）
- 可選：文字添加微妙陰影增強層次
- 字體採用現代無襯線字體，字重 medium
- 行高適中，確保在玻璃背景下清晰可讀

**按鈕設計**
- 關閉按鈕也採用玻璃態效果
- 懸停時增加透明度或添加光暈
- 操作按鈕使用更透明的玻璃效果或實色填充
- 點擊時可添加漣漪或發光動畫

### 交互體驗

- 滑入時同步應用模糊效果（避免模糊突然出現）
- 淡入淡出動畫配合輕微的縮放（scale 0.95 → 1）
- 懸停時玻璃效果可微妙變化（更亮或更清晰）
- 關閉時向上浮起並淡出，模擬玻璃消散
- 動畫時長適中（300-400ms），使用流暢的緩動曲線

### 尺寸與定位

- 寬度適中（300-380px）
- 高度自適應，但保持緊湊
- 通常定位於右上角或上方中央
- 多個通知堆疊時，每個都有獨立的玻璃效果
- 間距稍大（12-16px），避免玻璃效果重疊混淆

### 背景與環境

- 最佳效果需要有色彩或紋理的背景
- 避免在純白背景上使用（玻璃效果不明顯）
- 建議使用漸變色或圖片背景的應用場景
- 確保文字在模糊背景下依然清晰可讀

### 性能考量

- 背景模糊效果可能影響性能，建議限制通知數量
- 移動端可適度降低模糊強度（blur 6-10px）
- 使用 will-change 屬性優化動畫性能

### 適用場景

- 現代科技產品或 SaaS 平台
- 具有豐富背景圖像或漸變色的網站
- iOS/macOS 風格的 Web 應用
- 追求高級感與現代感的設計系統

---

## English Version (en-US)

Please create a Glassmorphism style toast notification component.

### Design Philosophy

Glassmorphism toast notifications simulate the visual properties of frosted glass in the real world, creating lightweight, modern, and highly layered notification experiences through semi-transparency and background blur. Notifications should appear like floating frosted glass panels—neither completely obscuring the background nor failing to clearly convey information.

### Visual Characteristics

**Overall Style**
- Semi-transparent white or light background (70-85% opacity)
- Strong background blur effect (backdrop-blur 8-16px)
- Delicate semi-transparent white border (border: 1px solid rgba(255,255,255,0.18))
- Medium border radius (8-12px) creating soft glass form
- Soft shadows enhancing floating sensation (shadow: 0 8px 32px rgba(0,0,0,0.1))

**Glass Layering Effects**
- Optional gradient background with subtle opacity adjustments from top to bottom
- Glass surface can include subtle highlight effects
- Inner content forms clear contrast with glass background
- Edge can have optional shimmer effects simulating light refraction

**Icons and Colors**
- Icons use semi-transparent or solid designs
- Success: Light green or cyan tones (#10B981 with opacity)
- Error: Light red or pink tones (#EF4444 with opacity)
- Warning: Light yellow or amber tones (#F59E0B with opacity)
- Info: Light blue or purple tones (#3B82F6 with opacity)
- Icons can have soft glow effects around them

**Typography Design**
- Text color adjusts based on background, typically dark gray or black (ensuring readability)
- Optional: Text with subtle shadows for enhanced depth
- Modern sans-serif fonts, medium weight
- Moderate line height ensuring clarity on glass background

**Button Design**
- Close button also uses glassmorphism effect
- Increased opacity or added halo on hover
- Action buttons use more transparent glass effect or solid fill
- Click can trigger ripple or glow animations

### Interaction Experience

- Slide-in synchronizes blur effect application (avoiding sudden blur appearance)
- Fade in/out animations paired with slight scaling (scale 0.95 → 1)
- Subtle glass effect changes on hover (brighter or clearer)
- Floats upward and fades when closing, simulating glass dissipation
- Moderate animation duration (300-400ms) with smooth easing curves

### Size and Positioning

- Moderate width (300-380px)
- Adaptive height but remains compact
- Usually positioned in top-right or top-center
- When multiple notifications stack, each has independent glass effect
- Slightly larger spacing (12-16px) to avoid glass effect overlap confusion

### Background and Environment

- Best effect requires colorful or textured backgrounds
- Avoid pure white backgrounds (glass effect not prominent)
- Recommended for application scenarios with gradient or image backgrounds
- Ensure text remains clearly readable on blurred backgrounds

### Performance Considerations

- Background blur effects may impact performance; limit notification quantity
- Mobile devices can moderately reduce blur intensity (blur 6-10px)
- Use will-change property to optimize animation performance

### Use Cases

- Modern tech products or SaaS platforms
- Websites with rich background images or gradients
- iOS/macOS style web applications
- Design systems pursuing premium and modern aesthetics
