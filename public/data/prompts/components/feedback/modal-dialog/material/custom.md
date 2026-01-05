# Material Design Modal Dialog

## 中文版本 (zh-CN)

請創建一個 Material Design 風格的模態對話框組件。

### 設計理念

Material Design 基於「數字紙張」的隱喻，強調有意義的動效和清晰的層級關係。對話框應該像一張浮起的卡片，有明確的深度感和物理特性。

### 視覺特徵

**整體風格**
- 白色背景卡片，邊緣清晰
- 顯著的提升陰影，表現 Z 軸高度（通常為 24dp 的陰影）
- 中等圓角（4-8dp），符合 Material 規範
- 明確的表面層級，對話框明顯高於背景

**排版設計**
- 標題使用 Material 推薦的 H6 字型規格
- 內容區域寬鬆，符合 8dp 網格系統
- 對話框寬度通常為 280-560dp
- 邊距遵循 24dp 的標準間距

**按鈕設計**
- 使用 Material 按鈕規範：Text Button 或 Contained Button
- 主要操作使用品牌主色調
- 按鈕置於右下角，按照操作重要性排列
- 必須包含波紋（Ripple）效果

**顏色系統**
- 遵循 Material 調色板
- 主色調用於強調元素
- 遮罩層使用標準的 32% 黑色

### 交互體驗

- 進入動畫：從觸發點擴展或淡入上滑
- 離開動畫：收縮回觸發點或淡出下沉
- 所有動效使用 Material 標準緩動曲線
- 動畫時長 150-300ms
- 焦點狀態清晰可見

### 適用場景

- Android 風格的 Web 應用
- Google 產品生態的配套網站
- 需要統一設計語言的企業應用
- 追求一致性和可預測性的產品

---

## English Version (en-US)

Please create a Material Design style modal dialog component.

### Design Philosophy

Material Design is based on the "digital paper" metaphor, emphasizing meaningful motion and clear hierarchy. The dialog should appear like a floating card with distinct depth perception and physical properties.

### Visual Characteristics

**Overall Style**
- White background card with sharp edges
- Prominent elevation shadow expressing Z-axis height (typically 24dp shadow)
- Medium border radius (4-8dp) following Material specifications
- Clear surface hierarchy with dialog distinctly above background

**Typography Design**
- Title uses Material-recommended H6 type specification
- Spacious content area following 8dp grid system
- Dialog width typically 280-560dp
- Margins follow 24dp standard spacing

**Button Design**
- Uses Material button specs: Text Button or Contained Button
- Primary action uses brand primary color
- Buttons placed in bottom-right, arranged by action importance
- Must include Ripple effect

**Color System**
- Follows Material color palette
- Primary color for emphasis elements
- Overlay uses standard 32% black

### Interaction Experience

- Enter animation: expand from trigger point or fade-in with upward slide
- Exit animation: collapse to trigger point or fade-out with downward sink
- All motion uses Material standard easing curves
- Animation duration 150-300ms
- Focus states clearly visible

### Use Cases

- Android-style web applications
- Companion websites for Google product ecosystem
- Enterprise applications requiring unified design language
- Products pursuing consistency and predictability
