# Drag & Drop File Upload

## 中文版本 (zh-CN)

請創建一個拖放式文件上傳組件。

### 設計理念

Drag & Drop 文件上傳組件提供現代化的文件上傳體驗,將傳統的文件選擇器升級為直觀的拖放交互。設計哲學強調「降低操作門檻」,通過視覺化的拖放區域和清晰的狀態反饋,讓用戶無需理解複雜的上傳邏輯即可輕鬆完成文件上傳。整體設計追求友好性和可靠性的平衡,既要簡化操作流程,又要提供充分的進度反饋和錯誤處理。

### 視覺特徵

- **拖放區域**: 中央顯示大面積的虛線邊框矩形區域,使用淺灰背景 (#f9fafb)
- **圖標提示**: 區域中央顯示雲朵上傳或文件夾圖標,配合「拖放文件到此處」文字說明
- **點擊上傳**: 「或點擊選擇文件」按鈕或鏈接文字,觸發傳統文件選擇對話框
- **文件類型提示**: 小字號文字說明支持的文件類型,如「支持 JPG、PNG、PDF,最大 10MB」
- **拖動狀態**: 文件拖動到區域上方時,邊框變為實線並高亮(如藍色),背景顏色加深
- **文件列表**: 選擇文件後下方顯示文件列表,每個文件顯示圖標、名稱、大小、進度條、刪除按鈕
- **進度指示**: 上傳過程中顯示百分比進度條,使用品牌主色填充
- **狀態圖標**: 上傳成功顯示勾選圖標(綠色),失敗顯示錯誤圖標(紅色)

### 交互體驗

- **拖放上傳**: 從桌面或文件管理器拖動文件到拖放區域,鬆開鼠標自動開始上傳
- **點擊選擇**: 點擊拖放區域或「選擇文件」按鈕,打開系統文件選擇對話框
- **批量上傳**: 支持一次選擇或拖放多個文件,自動添加到上傳隊列
- **即時驗證**: 選擇文件後立即驗證文件類型和大小,不符合要求的文件顯示錯誤提示
- **進度跟蹤**: 每個文件獨立顯示上傳進度,支持並行上傳多個文件
- **取消上傳**: 上傳過程中可點擊取消按鈕中止上傳,已上傳部分丟棄
- **重新上傳**: 上傳失敗的文件顯示「重試」按鈕,點擊重新上傳
- **刪除文件**: 上傳成功或失敗後可點擊刪除按鈕從列表中移除文件
- **預覽縮略圖**: 圖片文件顯示縮略圖預覽,其他文件顯示類型圖標

### 適用場景

- **附件上傳**: 郵件、工單、表單等需要附加文件的場景
- **圖片上傳**: 頭像上傳、相冊上傳、商品圖片上傳
- **文檔管理**: 雲盤、文檔庫、知識庫的文件上傳
- **媒體上傳**: 視頻平台、音樂平台的媒體文件上傳
- **數據導入**: CSV、Excel 等數據文件的批量導入
- **簡歷上傳**: 招聘平台、求職網站的簡歷文件上傳
- **證件上傳**: 身份驗證、實名認證等需要上傳證件照片的場景
- **備份恢復**: 應用設置、數據備份文件的上傳和恢復

---

## English Version (en-US)

Please create a drag & drop file upload component.

### Design Philosophy

Drag & Drop file upload component provides modern file upload experience, upgrading traditional file selector to intuitive drag-drop interaction. The design philosophy emphasizes "lowering operational barriers" through visualized drop zone and clear status feedback, allowing users to easily complete file uploads without understanding complex upload logic. The overall design pursues balance between friendliness and reliability, both simplifying operational flow and providing sufficient progress feedback and error handling.

### Visual Characteristics

- **Drop Zone**: Central large dashed border rectangle area using light gray background (#f9fafb)
- **Icon Hint**: Cloud upload or folder icon displayed at center with "Drag and drop files here" text instruction
- **Click Upload**: "Or click to select files" button or link text triggering traditional file selection dialog
- **File Type Hint**: Small text explaining supported file types like "Supports JPG, PNG, PDF, max 10MB"
- **Drag State**: When file dragged over area, border changes to solid and highlights (like blue), background color deepens
- **File List**: File list displayed below after selection, each showing icon, name, size, progress bar, delete button
- **Progress Indicator**: Percentage progress bar displayed during upload using brand primary color fill
- **Status Icons**: Success shows checkmark icon (green), failure shows error icon (red)

### Interaction Experience

- **Drag & Drop Upload**: Dragging files from desktop or file manager to drop zone, releasing mouse auto-starts upload
- **Click Selection**: Clicking drop zone or "Select Files" button opens system file selection dialog
- **Batch Upload**: Supports selecting or dropping multiple files at once, auto-adding to upload queue
- **Instant Validation**: Immediately validates file type and size after selection, showing error message for non-compliant files
- **Progress Tracking**: Each file independently shows upload progress, supports parallel uploading of multiple files
- **Cancel Upload**: Cancel button during upload aborts upload, discarding uploaded portion
- **Retry Upload**: Failed uploads show "Retry" button for re-uploading
- **Delete Files**: Delete button available after successful or failed upload to remove file from list
- **Preview Thumbnails**: Image files show thumbnail previews, other files show type icons

### Use Cases

- **Attachment Upload**: Email, tickets, forms requiring file attachments
- **Image Upload**: Avatar upload, photo album upload, product image upload
- **Document Management**: File upload in cloud storage, document libraries, knowledge bases
- **Media Upload**: Media file upload for video platforms, music platforms
- **Data Import**: Batch import of CSV, Excel, and other data files
- **Resume Upload**: Resume file upload in recruitment platforms, job sites
- **ID Upload**: Uploading ID photos for identity verification, real-name authentication
- **Backup & Restore**: Uploading and restoring application settings, backup files
