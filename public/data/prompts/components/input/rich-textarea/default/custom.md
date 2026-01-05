# Rich Text Editor with Toolbar

## 中文版本 (zh-CN)

請創建一個功能豐富、工具列驅動的富文本編輯器組件。

### 設計理念

這個設計體現了「所見即所得（WYSIWYG）」的編輯理念——讓用戶在編輯過程中直接看到最終的格式化效果，無需切換預覽模式。設計強調工具的可發現性、直觀的格式化操作和即時的視覺反饋。組件應該像一個專業的文字處理器，提供豐富的格式化選項，同時保持界面的整潔和易用性。

### 視覺特徵

- **工具列設計**: 位於頂部的淺灰色工具列（`border-gray-200`），包含多個格式化按鈕
- **按鈕圖標**: 使用 SVG 圖標表示不同功能（粗體、斜體、標題、列表、鏈接、代碼）
- **分隔線**: 垂直細線（`w-px bg-gray-300`）將相關功能分組
- **編輯區**: 白色背景的可編輯區域（`contenteditable="true"`），帶有最小高度約束
- **焦點狀態**: 編輯區獲得焦點時顯示藍色外圈（`focus:ring-2 focus:ring-blue-500`）
- **統計欄**: 底部顯示字數和字符統計，配合操作按鈕（清空、保存）
- **按鈕組**: 使用不同的背景色區分主要操作（藍色保存）和次要操作（灰色清空）
- **圓角設計**: 工具列頂部圓角（`rounded-t-lg`），編輯區底部圓角（`rounded-b-lg`）無縫銜接

### 交互體驗

- **即時格式化**: 選中文字後點擊工具列按鈕，立即應用格式化效果
- **懸停提示**: 工具列按鈕懸停時顯示淺灰色背景（`hover:bg-gray-100`）和 tooltip 提示
- **鍵盤快捷鍵**: 支持常用快捷鍵（Ctrl+B 粗體、Ctrl+I 斜體等）
- **即時統計**: 編輯內容時，字數和字符統計實時更新
- **自動保存提示**: 定時自動保存，並顯示「已保存」狀態提示
- **清空確認**: 點擊清空按鈕時彈出確認對話框，避免誤操作
- **按鈕過渡**: 所有按鈕使用平滑的顏色過渡（`transition-colors`）
- **內容預覽**: 編輯區內的格式化內容（粗體、斜體、列表）即時渲染

### 適用場景

- **內容管理系統**: 博客文章、新聞內容的富文本編輯
- **評論和討論**: 支持格式化的評論輸入框
- **筆記應用**: 個人筆記、文檔編輯器
- **郵件編寫**: 支持格式化的郵件正文編輯
- **項目文檔**: 項目說明、README 文件編輯
- **表單長文本**: 產品描述、活動詳情等需要格式化的表單字段
- **協作編輯**: 多人實時協作的文檔編輯器
- **社交媒體**: 支持富文本的社交媒體貼文編輯

這個設計特別適合需要提供專業文字編輯體驗的應用場景，通過直觀的工具列和即時反饋讓用戶輕鬆創建格式化內容。工具列的模塊化設計也便於根據需求添加或移除特定功能。

---

## English Version (en-US)

Please create a feature-rich, toolbar-driven rich text editor component.

### Design Philosophy

This design embodies the "WYSIWYG (What You See Is What You Get)" editing principle—allowing users to see the final formatted result directly during editing without switching to preview mode. The design emphasizes tool discoverability, intuitive formatting operations, and immediate visual feedback. The component should function like a professional word processor, providing rich formatting options while maintaining interface cleanliness and usability.

### Visual Characteristics

- **Toolbar Design**: Light gray toolbar at the top (`border-gray-200`) containing multiple formatting buttons
- **Button Icons**: SVG icons representing different functions (bold, italic, heading, list, link, code)
- **Dividers**: Vertical thin lines (`w-px bg-gray-300`) grouping related functions
- **Editing Area**: Editable area with white background (`contenteditable="true"`) with minimum height constraints
- **Focus States**: Editing area shows blue ring when focused (`focus:ring-2 focus:ring-blue-500`)
- **Statistics Bar**: Bottom displays word and character counts alongside action buttons (clear, save)
- **Button Groups**: Different background colors distinguish primary actions (blue save) from secondary actions (gray clear)
- **Rounded Design**: Toolbar top rounded corners (`rounded-t-lg`) seamlessly connect with editing area bottom rounded corners (`rounded-b-lg`)

### Interaction Experience

- **Instant Formatting**: Clicking toolbar buttons after selecting text immediately applies formatting effects
- **Hover Tooltips**: Toolbar buttons show light gray background (`hover:bg-gray-100`) and tooltip hints on hover
- **Keyboard Shortcuts**: Support common shortcuts (Ctrl+B for bold, Ctrl+I for italic, etc.)
- **Real-time Statistics**: Word and character counts update in real-time while editing
- **Auto-save Indicators**: Periodic auto-save with "Saved" status indicator
- **Clear Confirmation**: Clicking clear button shows confirmation dialog to prevent accidental actions
- **Button Transitions**: All buttons use smooth color transitions (`transition-colors`)
- **Content Preview**: Formatted content in editing area (bold, italic, lists) renders instantly

### Use Cases

- **Content Management Systems**: Rich text editing for blog posts and news content
- **Comments and Discussions**: Formatted comment input boxes
- **Note-taking Applications**: Personal notes and document editors
- **Email Composition**: Formatted email body editing
- **Project Documentation**: Project descriptions and README file editing
- **Form Long Text**: Product descriptions, event details, and other form fields requiring formatting
- **Collaborative Editing**: Real-time collaborative document editors
- **Social Media**: Rich text post editing for social media platforms

This design is particularly suitable for application scenarios requiring professional text editing experiences, making it easy for users to create formatted content through intuitive toolbars and immediate feedback. The modular toolbar design also facilitates adding or removing specific features based on requirements.
