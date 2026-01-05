# Modern Autocomplete Search

## 中文版本 (zh-CN)

請創建一個現代、實用風格的自動完成搜尋組件。

### 設計理念

這個設計體現了現代應用中「智能輔助」的核心理念——通過預測性建議來減少用戶的認知負擔。設計強調即時反饋、清晰的視覺層次和流暢的鍵盤導航體驗。組件應該像一個智能助手，在用戶輸入的同時提供有價值的建議，同時保持界面的簡潔與優雅。

### 視覺特徵

- **搜尋框設計**: 簡潔的圓角矩形輸入框，左側搜尋圖標，右側鍵盤快捷鍵提示（如 `↓` 按鍵）
- **建議下拉框**: 白色背景的卡片式容器，帶有細膩的邊框和陰影，營造懸浮感
- **建議項目**: 每個建議項包含彩色圓形圖標（藍、綠、紫、橙等）、主標題、副標題描述
- **分組標籤**: 使用淺灰色背景的分隔區域來區分不同的建議分組
- **狀態標籤**: 「熱門」、「新」等小標籤使用不同顏色來標識項目特性
- **顏色方案**: 主色使用藍色（focus 狀態），灰色系作為中性色，彩色圖標增添活力

### 交互體驗

- **即時過濾**: 輸入內容時，建議列表即時更新並高亮匹配的部分
- **懸停反饋**: 鼠標懸停在建議項上時，背景變為淺灰色（`hover:bg-gray-50`）
- **鍵盤導航**: 支持方向鍵上下選擇，Enter 確認，ESC 關閉
- **焦點狀態**: 輸入框獲得焦點時顯示藍色外圈（`focus:ring-2 focus:ring-blue-500`）
- **防抖輸入**: 實現輸入防抖，避免頻繁的搜尋請求
- **過渡動畫**: 下拉框的展開/收起使用平滑的淡入淡出效果
- **視覺提示**: 底部顯示操作提示（如「使用方向鍵導航，ESC 關閉」）

### 適用場景

- **搜尋引擎和內容查找**: 為用戶提供智能搜尋建議，加快查找速度
- **表單選擇器**: 在大量選項中快速篩選和選擇（如國家/城市選擇器）
- **命令面板**: 應用內的快速命令輸入（Command Palette）
- **框架/庫選擇**: 開發工具中的技術棧選擇器
- **用戶搜尋**: 在社交應用中搜尋用戶、標籤或內容
- **電商產品搜尋**: 提供產品建議和分類導航

這個設計特別適合需要處理大量數據、頻繁搜尋操作的應用場景，通過智能建議來提升用戶效率。

---

## English Version (en-US)

Please create a modern, practical autocomplete search component.

### Design Philosophy

This design embodies the core principle of "intelligent assistance" in modern applications—reducing cognitive load through predictive suggestions. The design emphasizes immediate feedback, clear visual hierarchy, and smooth keyboard navigation experience. The component should act like a smart assistant, providing valuable suggestions while users type, while maintaining interface simplicity and elegance.

### Visual Characteristics

- **Search Input Design**: Clean rounded rectangular input box with search icon on the left and keyboard shortcut hint on the right (e.g., `↓` key)
- **Suggestion Dropdown**: Card-style container with white background, subtle borders and shadows creating a floating effect
- **Suggestion Items**: Each suggestion includes a colored circular icon (blue, green, purple, orange, etc.), main title, and subtitle description
- **Group Labels**: Light gray background separator areas to distinguish different suggestion groups
- **Status Badges**: Small badges like "Popular" and "New" using different colors to identify item characteristics
- **Color Scheme**: Primary blue for focus states, gray tones as neutral colors, colorful icons adding vibrancy

### Interaction Experience

- **Real-time Filtering**: Suggestion list updates instantly as users type, highlighting matching portions
- **Hover Feedback**: Background changes to light gray (`hover:bg-gray-50`) when hovering over suggestions
- **Keyboard Navigation**: Support arrow keys for navigation, Enter to confirm, ESC to close
- **Focus States**: Input box shows blue ring when focused (`focus:ring-2 focus:ring-blue-500`)
- **Debounced Input**: Implements input debouncing to avoid frequent search requests
- **Transition Animations**: Smooth fade-in/fade-out effects for dropdown expand/collapse
- **Visual Hints**: Bottom displays operation hints (e.g., "Use arrow keys to navigate, ESC to close")

### Use Cases

- **Search Engines and Content Discovery**: Provide intelligent search suggestions to speed up finding
- **Form Selectors**: Quick filtering and selection among many options (e.g., country/city selector)
- **Command Palettes**: Quick command input within applications
- **Framework/Library Selection**: Tech stack selectors in development tools
- **User Search**: Search users, tags, or content in social applications
- **E-commerce Product Search**: Provide product suggestions and category navigation

This design is particularly suitable for application scenarios that need to handle large amounts of data and frequent search operations, improving user efficiency through intelligent suggestions.
