# Bootstrap Price Filter Range Slider

## 中文版本 (zh-CN)

請創建一個 Bootstrap Price Filter 風格的價格篩選範圍滑桿組件。

### 設計理念

Bootstrap Price Filter 範圍滑桿基於 Bootstrap 設計系統的實用主義哲學,強調功能性、可訪問性和跨瀏覽器兼容性。設計理念聚焦於電商場景中的價格篩選需求,提供清晰的視覺層次、直觀的操作反饋和穩定可靠的性能。整體風格遵循 Bootstrap 的「移動優先」和「內容至上」原則,確保在各種設備和屏幕尺寸下都能提供一致的用戶體驗。

### 視覺特徵

- **Bootstrap 色彩**: 使用 Bootstrap 標準色彩系統,軌道為 #dee2e6 (gray-300),範圍高亮使用 #0d6efd (primary-blue)
- **圓角設計**: 軌道和滑塊使用 Bootstrap 標準圓角 (border-radius: 0.25rem / 4px)
- **雙滑塊佈局**: 兩個對稱的滑塊,每個 14x14px,帶有白色填充和藍色邊框 (2px solid #0d6efd)
- **陰影反饋**: 滑塊使用 Bootstrap 標準陰影 (box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075))
- **標籤樣式**: 最小值和最大值標籤使用 Bootstrap 徽章樣式 (.badge),帶有淺灰背景
- **柵格對齊**: 整體佈局遵循 Bootstrap 柵格系統,便於與其他 Bootstrap 組件集成
- **響應式尺寸**: 軌道高度 6px,在移動端自動調整為 8px,確保觸摸友好

### 交互體驗

- **即時反饋**: 拖動滑塊時,數值標籤實時更新,範圍高亮區域同步變化
- **懸停狀態**: 懸停時滑塊陰影加深 (box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15)),邊框顏色變為 #0b5ed7
- **焦點指示**: 鍵盤焦點時滑塊周圍出現 Bootstrap 標準焦點環 (outline: 0.25rem solid rgba(13,110,253,0.25))
- **防碰撞邏輯**: 兩個滑塊不能交叉,當接近時自動限制移動範圍
- **平滑過渡**: 所有狀態變化使用 Bootstrap 標準過渡時間 (transition: all 0.15s ease-in-out)
- **觸摸支持**: 滑塊觸摸區域擴大至 44x44px,符合 iOS 和 Android 可訪問性指南
- **鍵盤控制**: 支持箭頭鍵(步進調整)、Home/End鍵(跳至最小/最大值)

### 適用場景

- **電商網站**: 商品列表頁的價格篩選器,支持設定價格範圍
- **分類廣告**: 二手商品、房產租售平台的價格區間選擇
- **旅遊預訂**: 酒店、機票價格範圍篩選,預算控制工具
- **數據儀表板**: 使用 Bootstrap 構建的企業後台管理系統的數據過濾
- **SaaS 產品**: 訂閱價格選擇、套餐篩選、額度調整
- **市場分析**: 股票、基金等金融產品的價格區間篩選
- **Bootstrap 生態**: 任何基於 Bootstrap 框架構建的 Web 應用,確保設計一致性

---

## English Version (en-US)

Please create a Bootstrap Price Filter style price filtering range slider component.

### Design Philosophy

Bootstrap Price Filter range slider is based on Bootstrap design system's pragmatic philosophy, emphasizing functionality, accessibility, and cross-browser compatibility. The design concept focuses on price filtering needs in e-commerce scenarios, providing clear visual hierarchy, intuitive operational feedback, and stable reliable performance. The overall style follows Bootstrap's "mobile-first" and "content-first" principles, ensuring consistent user experience across various devices and screen sizes.

### Visual Characteristics

- **Bootstrap Colors**: Uses Bootstrap standard color system with #dee2e6 (gray-300) track and #0d6efd (primary-blue) range highlight
- **Rounded Design**: Track and thumbs use Bootstrap standard border-radius (0.25rem / 4px)
- **Dual Thumb Layout**: Two symmetric thumbs each 14x14px with white fill and blue border (2px solid #0d6efd)
- **Shadow Feedback**: Thumbs use Bootstrap standard shadow (box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075))
- **Label Styling**: Minimum and maximum value labels use Bootstrap badge style (.badge) with light gray background
- **Grid Alignment**: Overall layout follows Bootstrap grid system for easy integration with other Bootstrap components
- **Responsive Sizing**: Track height 6px, automatically adjusts to 8px on mobile for touch-friendliness

### Interaction Experience

- **Instant Feedback**: Value labels update real-time during thumb dragging, range highlight area synchronizes changes
- **Hover State**: Thumb shadow deepens on hover (box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15)), border color changes to #0b5ed7
- **Focus Indicator**: Bootstrap standard focus ring appears around thumb during keyboard focus (outline: 0.25rem solid rgba(13,110,253,0.25))
- **Collision Prevention Logic**: Two thumbs cannot cross, movement range automatically limited when approaching
- **Smooth Transitions**: All state changes use Bootstrap standard transition time (transition: all 0.15s ease-in-out)
- **Touch Support**: Thumb touch area expanded to 44x44px, meeting iOS and Android accessibility guidelines
- **Keyboard Control**: Supports arrow keys (step adjustment), Home/End keys (jump to min/max values)

### Use Cases

- **E-commerce Websites**: Price filters on product listing pages supporting price range setting
- **Classified Ads**: Price interval selection for second-hand goods, real estate rental/sale platforms
- **Travel Booking**: Hotel, flight price range filtering, budget control tools
- **Data Dashboards**: Data filtering in Bootstrap-built enterprise backend management systems
- **SaaS Products**: Subscription price selection, package filtering, quota adjustment
- **Market Analysis**: Price interval filtering for stocks, funds, and other financial products
- **Bootstrap Ecosystem**: Any web application built on Bootstrap framework ensuring design consistency
