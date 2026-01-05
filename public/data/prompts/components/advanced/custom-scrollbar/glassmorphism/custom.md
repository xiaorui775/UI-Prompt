# Glassmorphism Custom Scrollbar

## 中文版本 (zh-CN)

請創建一個 Glassmorphism 風格的自定義滾動條組件。

### 設計理念

Glassmorphism 滾動條靈感來自磨砂玻璃效果，通過半透明、模糊和多層次的視覺設計創造出輕盈、現代的未來感。設計哲學強調「透過表面看世界」的概念，滾動條本身成為一個半透明的窗口，允許背景內容透過模糊效果呈現，同時保持功能性和可用性。整體設計追求空靈、精緻的視覺體驗。

### 視覺特徵

- **玻璃效果**: 滾動條軌道和滑塊使用 backdrop-filter: blur(10px) 實現背景模糊，創造磨砂玻璃質感
- **半透明層**: 滑塊使用漸變背景 rgba(255,255,255,0.1) 至 rgba(255,255,255,0.2)，帶有輕微的透明度變化
- **邊框光澤**: 1px 半透明白色邊框 (rgba(255,255,255,0.18)) 模擬玻璃邊緣的反光效果
- **色彩柔和**: 避免純色，使用柔和的半透明色彩，在深色和淺色背景下都能保持優雅
- **多層次感**: 通過組合背景模糊、半透明色彩和微妙陰影創造深度感和層次感
- **光暈效果**: 懸停時可添加柔和的光暈 (box-shadow: 0 4px 30px rgba(0,0,0,0.1))

### 交互體驗

- **模糊漸變**: 懸停時背景模糊強度從 blur(10px) 增強至 blur(15px)，過渡時間 300ms
- **透明度變化**: 滑塊在靜止、懸停、拖動三種狀態下透明度分別為 0.1、0.2、0.3
- **平滑過渡**: 所有視覺變化使用 ease-out 緩動函數，營造輕盈飄逸的動態感
- **光影互動**: 拖動時添加內陰影效果，模擬玻璃表面的光線折射
- **色彩呼吸**: 可選的微妙色彩過渡動畫，從白色到淡藍色或淡紫色，強化玻璃質感

### 適用場景

- **現代化 Web 應用**: 追求前衛視覺設計的 SaaS 產品、設計工具平台
- **深色主題界面**: Glassmorphism 在深色背景下效果最佳，適合夜間模式應用
- **媒體展示網站**: 攝影作品集、視頻平台等需要突出內容的場景
- **高端品牌網站**: 奢侈品、科技產品等需要精緻視覺效果的品牌展示
- **創意作品集**: 設計師、藝術家個人網站，需要獨特視覺風格的場景

---

## English Version (en-US)

Please create a Glassmorphism style custom scrollbar component.

### Design Philosophy

Glassmorphism scrollbar draws inspiration from frosted glass effects, creating a light, modern futuristic feel through semi-transparent, blurred, and multi-layered visual design. The design philosophy emphasizes "seeing the world through surfaces" concept, where the scrollbar becomes a semi-transparent window allowing background content to show through blurred effects while maintaining functionality and usability. The overall design pursues an ethereal, refined visual experience.

### Visual Characteristics

- **Glass Effect**: Scrollbar track and thumb use backdrop-filter: blur(10px) to achieve background blur, creating frosted glass texture
- **Semi-Transparent Layer**: Thumb uses gradient background from rgba(255,255,255,0.1) to rgba(255,255,255,0.2) with subtle opacity variation
- **Border Gloss**: 1px semi-transparent white border (rgba(255,255,255,0.18)) simulates glass edge reflection effect
- **Soft Colors**: Avoids pure colors, uses soft semi-transparent colors that remain elegant on both dark and light backgrounds
- **Multi-Layer Depth**: Creates depth and hierarchy through combination of background blur, semi-transparent colors, and subtle shadows
- **Glow Effect**: Adds soft glow on hover (box-shadow: 0 4px 30px rgba(0,0,0,0.1))

### Interaction Experience

- **Blur Gradient**: Background blur intensity increases from blur(10px) to blur(15px) on hover with 300ms transition
- **Opacity Changes**: Thumb opacity is 0.1 (idle), 0.2 (hover), 0.3 (dragging) across three states
- **Smooth Transitions**: All visual changes use ease-out easing function, creating light floating dynamic feel
- **Light Interaction**: Adds inner shadow effect when dragging, simulating light refraction on glass surface
- **Color Breathing**: Optional subtle color transition animation from white to light blue or purple, enhancing glass texture

### Use Cases

- **Modern Web Applications**: SaaS products and design tool platforms pursuing avant-garde visual design
- **Dark Theme Interfaces**: Glassmorphism works best on dark backgrounds, suitable for night mode applications
- **Media Showcase Websites**: Photography portfolios, video platforms requiring content emphasis
- **Premium Brand Websites**: Luxury goods, tech products requiring refined visual effects for brand presentation
- **Creative Portfolios**: Designer and artist personal websites requiring unique visual style
