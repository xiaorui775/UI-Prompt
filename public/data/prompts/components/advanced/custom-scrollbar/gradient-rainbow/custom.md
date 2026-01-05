# Gradient Rainbow Custom Scrollbar

## 中文版本 (zh-CN)

請創建一個 Gradient Rainbow 風格的自定義滾動條組件。

### 設計理念

Gradient Rainbow 滾動條運用彩虹色譜的漸變效果,創造充滿活力、歡快愉悅的視覺體驗。設計哲學強調色彩的情感表達和視覺衝擊力,通過流動的色彩漸變傳遞積極、創意和包容性。滾動條不僅是功能組件,更是界面中的色彩亮點,為用戶帶來驚喜和愉悅感。設計理念融合了現代漸變趨勢和彩虹文化的象徵意義。

### 視覺特徵

- **彩虹漸變**: 滑塊使用完整的彩虹色譜漸變,從紅→橙→黃→綠→藍→靛→紫,使用 linear-gradient 實現平滑過渡
- **多層次漸變**: 可以是線性漸變 (從上到下) 或徑向漸變,也可使用 conic-gradient 創造旋轉彩虹效果
- **柔和軌道**: 軌道使用淡色漸變背景 (從淺灰到更淺灰) 或半透明彩虹漸變,避免與滑塊競爭視覺焦點
- **圓潤形狀**: 使用較大的圓角 (border-radius: 8-12px) 強化友好、親和的視覺感受
- **光澤效果**: 可選的高光層,使用白色半透明漸變疊加,模擬光滑表面的反光
- **色彩飽和度**: 高飽和度色彩配合高亮度,創造鮮豔奪目的視覺效果

### 交互體驗

- **漸變流動**: 懸停或滾動時,漸變色帶沿滑塊方向平滑移動,使用 background-position 或 animation 實現
- **色彩脈衝**: 可選的色彩飽和度脈衝動畫,在 80%-100% 之間週期性變化
- **彩虹擴展**: 懸停時滑塊寬度擴展同時漸變範圍也擴大,增強視覺衝擊力
- **光澤掃描**: 光澤高光沿滑塊表面移動,模擬光線掃過的動態效果
- **平滑過渡**: 所有動畫使用 ease-in-out 緩動函數,創造流暢優雅的動態感
- **拖動增強**: 拖動時增加 drop-shadow 或 box-shadow 提升滑塊的視覺層次

### 適用場景

- **創意平台**: 設計工具、創意社區、藝術分享平台等需要展現創造力的場景
- **兒童產品**: 兒童教育網站、遊戲平台、親子互動應用
- **LGBTQ+ 主題**: 彩虹旗象徵的包容性和多元化項目,社區網站
- **娛樂媒體**: 音樂播放器、視頻平台、社交媒體等需要活潑氛圍的應用
- **品牌展示**: 年輕化品牌、時尚產品、生活方式品牌的網站
- **節日活動**: 慶典活動網站、派對邀請頁面、慶祝性質的臨時頁面
- **正能量內容**: 激勵、勵志、心理健康等需要傳遞積極情緒的平台

---

## English Version (en-US)

Please create a Gradient Rainbow style custom scrollbar component.

### Design Philosophy

Gradient Rainbow scrollbar employs rainbow spectrum gradient effects to create vibrant, cheerful visual experiences. The design philosophy emphasizes emotional expression and visual impact of colors, conveying positivity, creativity, and inclusiveness through flowing color gradients. The scrollbar is not merely a functional component but a colorful highlight in the interface, bringing surprise and delight to users. The design concept merges modern gradient trends with rainbow culture's symbolic meaning.

### Visual Characteristics

- **Rainbow Gradient**: Thumb uses complete rainbow spectrum gradient from red→orange→yellow→green→blue→indigo→violet, achieving smooth transitions with linear-gradient
- **Multi-Layer Gradients**: Can be linear gradient (top to bottom) or radial gradient, also can use conic-gradient for rotating rainbow effect
- **Soft Track**: Track uses light gradient background (light gray to lighter gray) or semi-transparent rainbow gradient, avoiding visual competition with thumb
- **Rounded Shape**: Uses larger border-radius (8-12px) to reinforce friendly, approachable visual feel
- **Glossy Effect**: Optional highlight layer using semi-transparent white gradient overlay, simulating smooth surface reflection
- **Color Saturation**: High saturation colors combined with high brightness, creating vivid dazzling visual effects

### Interaction Experience

- **Gradient Flow**: On hover or scroll, gradient color band smoothly moves along thumb direction using background-position or animation
- **Color Pulse**: Optional color saturation pulse animation, periodically varying between 80%-100%
- **Rainbow Expansion**: On hover, thumb width expands while gradient range also enlarges, enhancing visual impact
- **Gloss Scan**: Glossy highlight moves along thumb surface, simulating dynamic light sweep effect
- **Smooth Transitions**: All animations use ease-in-out easing function, creating fluid elegant dynamic feel
- **Drag Enhancement**: Adds drop-shadow or box-shadow during drag to elevate thumb's visual hierarchy

### Use Cases

- **Creative Platforms**: Design tools, creative communities, art sharing platforms requiring creativity showcase
- **Children's Products**: Children's educational websites, gaming platforms, parent-child interactive applications
- **LGBTQ+ Themes**: Rainbow flag symbolized inclusivity and diversity projects, community websites
- **Entertainment Media**: Music players, video platforms, social media requiring lively atmosphere
- **Brand Showcases**: Youth-oriented brands, fashion products, lifestyle brand websites
- **Festival Events**: Celebration event websites, party invitation pages, celebratory temporary pages
- **Positive Content**: Motivational, inspirational, mental health platforms requiring positive emotion transmission
