# Professional Rich Text Editor

## 中文版本 (zh-CN)

請創建一個專業級富文本編輯器組件。

### 設計理念

Professional Rich Text 編輯器提供接近桌面文字處理軟件的在線編輯體驗,為內容創作者提供強大而直觀的格式化工具。設計哲學強調「功能豐富但不壓倒性」,通過合理的工具欄組織和漸進式功能披露,讓新手能快速上手,專業用戶能充分發揮。整體設計追求 WYSIWYG(所見即所得)的編輯體驗,確保編輯區域的視覺效果與最終輸出一致。

### 視覺特徵

- **工具欄佈局**: 頂部顯示分組的格式化工具欄,使用圖標按鈕和下拉菜單,邏輯分組(字體、段落、插入、樣式)
- **圖標設計**: 使用清晰易懂的圖標表示功能,如 B(粗體)、I(斜體)、U(下劃線)、鏈接圖標、圖片圖標等
- **按鈕狀態**: 當前格式的按鈕高亮顯示(如在粗體文本上時 B 按鈕激活),使用背景色或邊框標記
- **編輯區域**: 白色背景的編輯畫布,帶有微妙的邊框,模擬紙張質感
- **標尺**: 可選的頂部標尺顯示頁邊距和縮進設置
- **狀態欄**: 底部狀態欄顯示字數統計、段落計數、當前格式路徑(如 Body > Paragraph > Bold)
- **下拉菜單**: 字體選擇、字號選擇、標題級別等使用下拉菜單,顯示實時預覽
- **色彩選擇器**: 文字顏色和背景色選擇器,顯示常用色板和自定義顏色選項

### 交互體驗

- **即時格式化**: 選中文本後點擊工具欄按鈕,格式立即應用,無需確認
- **鍵盤快捷鍵**: 支持標準快捷鍵,如 Cmd/Ctrl+B(粗體)、Cmd/Ctrl+I(斜體)、Cmd/Ctrl+K(插入鏈接)
- **拖放插入**: 支持拖放圖片、文件到編輯區域,自動上傳並插入
- **表格編輯**: 插入表格後可通過右鍵菜單添加/刪除行列、合併單元格
- **鏈接編輯**: 選中文本後彈出鏈接輸入框,支持文本和 URL 編輯,可設置新窗口打開
- **圖片調整**: 插入的圖片可拖動調整大小,顯示尺寸手柄和對齊選項
- **列表嵌套**: 有序/無序列表支持多級嵌套,使用 Tab/Shift+Tab 調整縮進
- **撤銷重做**: 支持無限級撤銷重做,使用標準快捷鍵 Cmd/Ctrl+Z 和 Cmd/Ctrl+Shift+Z
- **源碼切換**: 可選的 HTML 源碼編輯模式,高級用戶可直接編輯底層代碼

### 適用場景

- **內容管理系統**: CMS 平台的文章編輯器,博客發布、新聞撰寫
- **郵件編輯**: 郵箱應用的郵件撰寫,支持富文本格式和附件
- **文檔協作**: 在線文檔編輯工具,多人實時協作編輯
- **論壇發帖**: 社區論壇、問答平台的帖子編輯器
- **產品描述**: 電商平台的商品詳情編輯,支持圖文混排
- **客戶支持**: 工單系統、客服平台的回復編輯器
- **知識庫**: 企業知識庫、幫助文檔的編寫和維護
- **教育平台**: 在線課程、作業提交的內容編輯

---

## English Version (en-US)

Please create a professional-grade rich text editor component.

### Design Philosophy

Professional Rich Text editor provides online editing experience approaching desktop word processing software, offering content creators powerful yet intuitive formatting tools. The design philosophy emphasizes "feature-rich but not overwhelming" through reasonable toolbar organization and progressive feature disclosure, allowing beginners to quickly get started while enabling professional users to fully utilize capabilities. The overall design pursues WYSIWYG (What You See Is What You Get) editing experience, ensuring visual consistency between editing area and final output.

### Visual Characteristics

- **Toolbar Layout**: Top displays grouped formatting toolbar using icon buttons and dropdown menus with logical grouping (font, paragraph, insert, styles)
- **Icon Design**: Uses clear, understandable icons representing functions like B(bold), I(italic), U(underline), link icon, image icon
- **Button States**: Buttons for current formats highlighted (like B button active when on bold text), marked with background color or border
- **Editing Area**: White background editing canvas with subtle border simulating paper texture
- **Ruler**: Optional top ruler showing margin and indentation settings
- **Status Bar**: Bottom status bar displays word count, paragraph count, current format path (like Body > Paragraph > Bold)
- **Dropdown Menus**: Font selection, font size, heading levels use dropdowns showing real-time preview
- **Color Pickers**: Text color and background color pickers displaying common color palette and custom color options

### Interaction Experience

- **Instant Formatting**: Format applies immediately after selecting text and clicking toolbar button, no confirmation needed
- **Keyboard Shortcuts**: Supports standard shortcuts like Cmd/Ctrl+B (bold), Cmd/Ctrl+I (italic), Cmd/Ctrl+K (insert link)
- **Drag & Drop Insert**: Supports dragging images, files into editing area with auto-upload and insertion
- **Table Editing**: After inserting table, right-click menu allows adding/deleting rows/columns, merging cells
- **Link Editing**: Link input box pops up after selecting text, supports text and URL editing, option to open in new window
- **Image Resizing**: Inserted images draggable for size adjustment, showing size handles and alignment options
- **List Nesting**: Ordered/unordered lists support multi-level nesting, using Tab/Shift+Tab for indentation adjustment
- **Undo/Redo**: Supports unlimited undo/redo using standard shortcuts Cmd/Ctrl+Z and Cmd/Ctrl+Shift+Z
- **Source Code Toggle**: Optional HTML source code editing mode allowing advanced users to directly edit underlying code

### Use Cases

- **Content Management Systems**: CMS platform article editors for blog publishing, news writing
- **Email Editing**: Email composition in mail applications supporting rich text formatting and attachments
- **Document Collaboration**: Online document editing tools with real-time multi-user collaborative editing
- **Forum Posting**: Post editors for community forums, Q&A platforms
- **Product Descriptions**: Product detail editing in e-commerce platforms supporting text-image mixed layout
- **Customer Support**: Reply editors in ticketing systems, customer service platforms
- **Knowledge Base**: Writing and maintaining enterprise knowledge bases, help documentation
- **Education Platforms**: Content editing for online courses, homework submissions
