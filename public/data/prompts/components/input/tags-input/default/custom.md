# Colorful Tags Input

## 中文版本 (zh-CN)

請創建一個色彩豐富、互動友好的標籤輸入組件。

### 設計理念

這個設計採用「視覺分類」的核心理念——通過顏色編碼讓標籤具有視覺識別性，幫助用戶快速理解和管理複雜的標籤集合。設計強調輕量級的交互、優雅的視覺組織和直觀的標籤管理體驗。組件應該讓標籤管理變得像整理彩色便利貼一樣簡單有趣，同時提供建議機制來加速標籤輸入。

### 視覺特徵

- **容器設計**: 圓角矩形框（`rounded-lg`）帶有粗邊框（`border-2`），最小高度設計容納多行標籤
- **標籤卡片**: 採用圓角膠囊形狀（`rounded-full`），每個標籤使用不同的淺色背景配對應深色文字
  - 藍色系：`bg-blue-100` + `text-blue-800`
  - 綠色系：`bg-green-100` + `text-green-800`
  - 紫色系：`bg-purple-100` + `text-purple-800`
  - 黃色系：`bg-yellow-100` + `text-yellow-800`
- **刪除按鈕**: 使用 X 圖標，預設透明（`opacity-0`），懸停時顯示（`group-hover:opacity-100`）
- **建議標籤**: 灰色背景（`bg-gray-100`）的可點擊按鈕，帶有 `+` 前綴
- **輸入框**: 內嵌在標籤容器底部的無邊框輸入框，與標籤自然融合
- **區域分隔**: 使用小標題區分「已選標籤」和「建議標籤」

### 交互體驗

- **即時添加**: 在輸入框中輸入後按 Enter 或逗號即可添加標籤
- **懸停顯示刪除**: 標籤卡片使用 `group` 類，懸停時刪除按鈕優雅地淡入顯示
- **點擊快速添加**: 建議標籤區域的按鈕可一鍵添加標籤到輸入區
- **顏色自動分配**: 新添加的標籤自動分配不同顏色，形成視覺多樣性
- **拖拽排序**: 支持拖拽標籤重新排序（可選功能）
- **重複檢測**: 自動檢測並防止添加重複標籤
- **平滑過渡**: 標籤添加/刪除時使用淡入淡出動畫（`transition-opacity`）
- **建議懸停**: 建議標籤按鈕懸停時背景加深（`hover:bg-gray-200`）

### 適用場景

- **內容標記系統**: 博客文章、筆記、書籤的標籤管理
- **技能標籤**: 個人簡歷、職位描述中的技能標籤輸入
- **分類管理**: 項目分類、任務標籤、文件夾標記
- **社交標籤**: 社交媒體貼文的話題標籤（Hashtags）
- **過濾器構建**: 搜尋過濾條件的可視化輸入
- **關鍵詞管理**: SEO 關鍵詞、廣告投放關鍵詞管理
- **團隊協作**: 任務分配、成員標記、專案標籤

這個設計特別適合需要管理多維度分類信息的場景，通過色彩和交互讓複雜的標籤管理變得輕鬆愉快。

---

## English Version (en-US)

Please create a colorful and interaction-friendly tags input component.

### Design Philosophy

This design adopts the core principle of "visual categorization"—using color coding to give tags visual identity, helping users quickly understand and manage complex tag collections. The design emphasizes lightweight interactions, elegant visual organization, and intuitive tag management experience. The component should make tag management as simple and fun as organizing colorful sticky notes, while providing suggestion mechanisms to accelerate tag input.

### Visual Characteristics

- **Container Design**: Rounded rectangle box (`rounded-lg`) with thick border (`border-2`), minimum height designed to accommodate multiple rows of tags
- **Tag Cards**: Pill-shaped with rounded corners (`rounded-full`), each tag uses a different light background paired with corresponding dark text
  - Blue scheme: `bg-blue-100` + `text-blue-800`
  - Green scheme: `bg-green-100` + `text-green-800`
  - Purple scheme: `bg-purple-100` + `text-purple-800`
  - Yellow scheme: `bg-yellow-100` + `text-yellow-800`
- **Delete Buttons**: Use X icons, default transparent (`opacity-0`), visible on hover (`group-hover:opacity-100`)
- **Suggested Tags**: Clickable buttons with gray background (`bg-gray-100`), prefixed with `+`
- **Input Field**: Borderless input box embedded at the bottom of tag container, naturally blending with tags
- **Section Separation**: Use small headings to distinguish "Selected Tags" and "Suggested Tags"

### Interaction Experience

- **Instant Addition**: Press Enter or comma after typing in input box to add tags
- **Hover to Show Delete**: Tag cards use `group` class, delete button gracefully fades in on hover
- **Click to Quick Add**: Buttons in suggestion area can add tags to input area with one click
- **Auto Color Assignment**: Newly added tags automatically get different colors, creating visual diversity
- **Drag to Reorder**: Support drag-and-drop tag reordering (optional feature)
- **Duplicate Detection**: Automatically detect and prevent adding duplicate tags
- **Smooth Transitions**: Tag addition/deletion uses fade-in/fade-out animations (`transition-opacity`)
- **Suggestion Hover**: Suggestion tag buttons darken background on hover (`hover:bg-gray-200`)

### Use Cases

- **Content Tagging Systems**: Tag management for blog posts, notes, bookmarks
- **Skill Tags**: Skill tag input in resumes and job descriptions
- **Category Management**: Project categorization, task labels, folder markers
- **Social Tags**: Topic hashtags for social media posts
- **Filter Builders**: Visual input for search filter conditions
- **Keyword Management**: SEO keywords, advertising campaign keyword management
- **Team Collaboration**: Task assignment, member tagging, project labels

This design is particularly suitable for scenarios requiring multi-dimensional classification information management, making complex tag management easy and enjoyable through color and interaction.
