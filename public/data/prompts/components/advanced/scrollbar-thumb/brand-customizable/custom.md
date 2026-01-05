# Brand Customizable Scrollbar Thumb

## 中文版本 (zh-CN)

請創建一個 Brand Customizable 風格的品牌可定制滾動條滑塊組件。

### 設計理念

Brand Customizable 滾動條滑塊專為品牌識別和定制化需求設計,允許通過簡單的 CSS 變量或主題配置快速適配不同品牌的視覺系統。設計哲學強調「一次設計,多次復用」,通過靈活的顏色、尺寸和樣式參數,讓滑塊能夠無縫融入各種品牌的設計語言。核心理念是提供強大的定制能力,同時保持代碼簡潔和維護性。

### 視覺特徵

- **CSS 變量驅動**: 所有視覺屬性通過 CSS 自定義屬性定義,如 --brand-primary、--thumb-width、--thumb-radius
- **品牌色應用**: 滑塊默認使用品牌主色,軌道使用品牌主色的 10-20% 透明度版本
- **可配置圓角**: 支持從完全方形 (0px) 到完全圓形 (50%) 的任意圓角值
- **尺寸靈活性**: 滑塊寬度、高度、軌道厚度都可通過變量調整,適應不同設計需求
- **多主題支持**: 內置淺色、深色、高對比度等多種主題預設,一鍵切換
- **裝飾可選**: 可選的邊框、陰影、漸變等裝飾效果,通過變量控制開關
- **響應式縮放**: 支持根據視口大小自動調整滑塊尺寸,確保移動端友好

### 交互體驗

- **可配置動畫**: 懸停、拖動、淡入淡出的動畫速度和緩動函數都可自定義
- **交互狀態定制**: 靜止、懸停、激活、禁用等狀態的顏色和樣式完全可配置
- **過渡時長控制**: 通過 --transition-duration 變量統一控制所有過渡動畫時長
- **陰影定制**: 支持自定義陰影顏色、模糊半徑、擴散範圍,匹配品牌視覺風格
- **可訪問性選項**: 可配置高對比度模式、大號觸摸目標等無障礙功能
- **動畫開關**: 尊重用戶的 prefers-reduced-motion 設置,可完全禁用動畫
- **鍵盤焦點樣式**: 可定制的鍵盤焦點指示器,使用品牌色或自定義樣式

### 適用場景

- **白標產品**: SaaS 平台需要為不同客戶提供品牌定制的滾動條樣式
- **多品牌系統**: 集團公司旗下多個品牌共用一套代碼庫,通過主題切換適配
- **設計系統**: 企業級設計系統需要提供可配置的滾動條組件給各產品線
- **WordPress 主題**: 主題開發者需要提供滾動條定制選項給最終用戶
- **組件庫**: 開源或商業 UI 組件庫需要提供高度可定制的滾動條組件
- **企業門戶**: 大型企業內部多個系統需要統一視覺風格但又有細微差異
- **可視化編輯器**: 網站構建器、主題編輯器需要實時預覽滾動條樣式變化
- **A/B 測試**: 需要快速測試不同滾動條設計對用戶體驗影響的場景

---

## English Version (en-US)

Please create a Brand Customizable style scrollbar thumb component.

### Design Philosophy

Brand Customizable scrollbar thumb is specifically designed for brand identity and customization needs, allowing quick adaptation to different brand visual systems through simple CSS variables or theme configuration. The design philosophy emphasizes "design once, reuse many times," enabling the thumb to seamlessly integrate into various brand design languages through flexible color, size, and style parameters. The core concept is providing powerful customization capabilities while maintaining code simplicity and maintainability.

### Visual Characteristics

- **CSS Variable Driven**: All visual properties defined through CSS custom properties like --brand-primary, --thumb-width, --thumb-radius
- **Brand Color Application**: Thumb defaults to brand primary color, track uses 10-20% transparency version of brand primary
- **Configurable Rounding**: Supports any border-radius value from fully square (0px) to fully circular (50%)
- **Size Flexibility**: Thumb width, height, track thickness all adjustable through variables, adapting to different design needs
- **Multi-Theme Support**: Built-in light, dark, high-contrast theme presets with one-click switching
- **Optional Decoration**: Optional border, shadow, gradient decorative effects controlled through variable switches
- **Responsive Scaling**: Supports auto-adjusting thumb size based on viewport, ensuring mobile-friendliness

### Interaction Experience

- **Configurable Animations**: Animation speed and easing functions for hover, drag, fade in/out are all customizable
- **Interaction State Customization**: Colors and styles for idle, hover, active, disabled states are fully configurable
- **Transition Duration Control**: Unified control of all transition animation durations through --transition-duration variable
- **Shadow Customization**: Supports customizing shadow color, blur radius, spread range matching brand visual style
- **Accessibility Options**: Configurable high contrast mode, large touch targets, and other accessibility features
- **Animation Toggle**: Respects user's prefers-reduced-motion setting, can completely disable animations
- **Keyboard Focus Style**: Customizable keyboard focus indicator using brand colors or custom styles

### Use Cases

- **White Label Products**: SaaS platforms needing brand-customized scrollbar styles for different clients
- **Multi-Brand Systems**: Group companies with multiple brands sharing one codebase, adapting through theme switching
- **Design Systems**: Enterprise design systems needing configurable scrollbar components for product lines
- **WordPress Themes**: Theme developers needing scrollbar customization options for end users
- **Component Libraries**: Open-source or commercial UI component libraries needing highly customizable scrollbar components
- **Enterprise Portals**: Large enterprise internal systems requiring unified visual style with subtle variations
- **Visual Editors**: Website builders, theme editors needing real-time scrollbar style preview
- **A/B Testing**: Scenarios requiring quick testing of different scrollbar designs' impact on user experience
