# Bootstrap Modal Dialog

## 中文版本 (zh-CN)

請創建一個 Bootstrap 風格的模態對話框組件。

### 設計理念

Bootstrap 風格追求實用、一致和可靠的設計語言，強調功能性和可訪問性。對話框應該簡潔明確，結構規範，讓用戶立即理解如何操作。

### 視覺特徵

**整體風格**
- 純白色背景，無花哨裝飾
- 統一的小圓角（0.3rem 約 5px）
- 清晰的邊框分隔各區域
- 標準化的陰影效果

**結構分區**
- 明確的三段式結構：Header、Body、Footer
- Header：包含標題和關閉按鈕，底部有分隔線
- Body：主要內容區域，適當內邊距
- Footer：操作按鈕區，頂部有分隔線，按鈕右對齊

**排版規範**
- 標題使用 h5 級別，字重 500
- 內容文字使用系統默認字體
- 統一的內邊距（通常 1rem）
- 分隔線使用淺灰色

**按鈕設計**
- 遵循 Bootstrap 按鈕類型
- Primary（藍色）：主要操作
- Secondary（灰色）：次要操作
- Danger（紅色）：危險操作
- 按鈕間距標準化
- 懸停和激活狀態明顯

**關閉按鈕**
- 位於 Header 右上角
- 使用標準的 × 符號
- 有明確的懸停效果

### 交互體驗

- 簡單的淡入淡出效果
- 可選的滑入效果
- 點擊遮罩層可配置是否關閉
- ESC 鍵支持關閉
- 焦點管理完善

### 響應式設計

- 小屏幕時對話框接近全寬
- 中等屏幕時居中顯示，限制最大寬度
- 內容過長時 Body 區域可滾動
- 觸控設備友好的按鈕尺寸

### 適用場景

- 企業後台管理系統
- 表單提交確認
- 快速搭建的 MVP 產品
- 需要標準化 UI 的團隊項目

---

## English Version (en-US)

Please create a Bootstrap style modal dialog component.

### Design Philosophy

Bootstrap style pursues practical, consistent, and reliable design language, emphasizing functionality and accessibility. The dialog should be clean and clear, structurally standardized, allowing users to immediately understand how to operate.

### Visual Characteristics

**Overall Style**
- Pure white background with no fancy decorations
- Unified small border radius (0.3rem ≈ 5px)
- Clear borders separating regions
- Standardized shadow effect

**Structural Sections**
- Clear three-part structure: Header, Body, Footer
- Header: contains title and close button, border-bottom divider
- Body: main content area with appropriate padding
- Footer: action button area, border-top divider, buttons right-aligned

**Typography Standards**
- Title uses h5 level, font-weight 500
- Content uses system default font
- Unified padding (typically 1rem)
- Dividers use light gray

**Button Design**
- Follows Bootstrap button types
- Primary (blue): main action
- Secondary (gray): secondary action
- Danger (red): dangerous action
- Standardized button spacing
- Obvious hover and active states

**Close Button**
- Located at Header top-right
- Uses standard × symbol
- Clear hover effect

### Interaction Experience

- Simple fade in/out effects
- Optional slide-in effect
- Configurable backdrop click to close
- ESC key support for closing
- Complete focus management

### Responsive Design

- Near full-width on small screens
- Centered with max-width on medium screens
- Body scrollable when content overflows
- Touch-friendly button sizes

### Use Cases

- Enterprise admin management systems
- Form submission confirmations
- Quickly built MVP products
- Team projects needing standardized UI
