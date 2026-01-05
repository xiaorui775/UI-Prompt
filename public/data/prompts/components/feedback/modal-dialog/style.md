# Style Prompt

## 中文版本 (zh-CN)

模態對話框是一種打斷式交互組件，通過遮罩層覆蓋背景內容，強制用戶聚焦於對話框中的重要信息或操作，直到完成任務或主動關閉。

### 使用場景

適用於需要用戶立即關注和響應的場景：確認刪除等危險操作、用戶登錄註冊表單、重要通知和警告信息、多步驟引導流程、圖片和視頻預覽。模態對話框打斷當前流程，確保用戶在繼續之前處理對話框內容。

### 視覺特徵

採用分層設計：半透明深色遮罩層（`bg-black/50`）覆蓋背景，對話框容器居中浮動，使用白色或淺色背景（`bg-white`）配合陰影（`shadow-xl`）營造層次感。對話框通常包含三個區域：標題欄（含關閉按鈕）、內容區（可滾動）、操作按鈕區（確認/取消）。圓角（`rounded-lg`）和適度內邊距確保視覺舒適度。

### 交互體驗

對話框打開時伴隨淡入和輕微縮放動畫（fade-in + scale），吸引用戶注意。支持多種關閉方式：點擊遮罩層、點擊關閉按鈕、按下 ESC 鍵。焦點自動鎖定在對話框內，Tab 鍵在可交互元素間循環，關閉後焦點返回觸發元素。主要操作按鈕（確認）使用填充色（`bg-blue-600`），次要操作（取消）使用透明或灰色背景，視覺層級清晰。

### 設計變體

- **極簡風格**：細邊框、簡潔配色、輕陰影，強調內容而非裝飾
- **Material Design**：提升陰影、波紋效果按鈕、流暢動畫
- **玻璃態**：毛玻璃背景（`backdrop-blur`）、半透明邊框、現代感
- **新粗野主義**：粗黑邊框、撞色按鈕、硬陰影、強視覺衝擊
- **底部抽屜**：從底部滑入、適合移動端、拖拽把手
- **側邊抽屜**：從側邊滑入、全高顯示、適合導航或詳情

### 無障礙要點

使用 `role="dialog"` 和 `aria-modal="true"` 標識模態行為，通過 `aria-labelledby` 關聯標題。實現焦點陷阱（Focus Trap）確保鍵盤用戶不會 Tab 到對話框外的元素。所有操作可通過鍵盤完成，確保螢幕閱讀器用戶能正確理解對話框結構和操作流程。

---

## English Version (en-US)

Modal Dialog is an interrupting interaction component that overlays background content with a mask layer, forcing users to focus on important information or actions within the dialog until the task is completed or actively closed.

### Usage Scenarios

Suitable for scenarios requiring immediate user attention and response: confirming dangerous operations like deletion, user login/registration forms, critical notifications and warnings, multi-step guided workflows, image and video previews. Modal dialogs interrupt the current flow, ensuring users handle the dialog content before proceeding.

### Visual Characteristics

Employs a layered design: semi-transparent dark overlay (`bg-black/50`) covers the background, with a centered floating dialog container using white or light background (`bg-white`) combined with shadow (`shadow-xl`) to create depth. Dialogs typically include three sections: header (with close button), content area (scrollable), and action button area (confirm/cancel). Rounded corners (`rounded-lg`) and moderate padding ensure visual comfort.

### Interaction Experience

Dialog opens with fade-in and subtle scale animation (fade-in + scale) to capture user attention. Supports multiple closing methods: clicking overlay, clicking close button, pressing ESC key. Focus is automatically trapped within the dialog, Tab key cycles through interactive elements, and focus returns to trigger element after closing. Primary action buttons (confirm) use filled colors (`bg-blue-600`), while secondary actions (cancel) use transparent or gray backgrounds, creating clear visual hierarchy.

### Design Variants

- **Minimalism**: Thin borders, clean colors, light shadows, emphasizing content over decoration
- **Material Design**: Elevated shadows, ripple effect buttons, smooth animations
- **Glassmorphism**: Frosted glass background (`backdrop-blur`), semi-transparent borders, modern feel
- **Neo Brutalism**: Bold black borders, contrasting buttons, hard shadows, strong visual impact
- **Bottom Sheet**: Slides in from bottom, mobile-friendly, drag handle
- **Side Drawer**: Slides in from side, full-height display, suitable for navigation or details

### Accessibility Highlights

Uses `role="dialog"` and `aria-modal="true"` to identify modal behavior, linking title via `aria-labelledby`. Implements Focus Trap to ensure keyboard users cannot Tab to elements outside the dialog. All operations accessible via keyboard, ensuring screen reader users can correctly understand dialog structure and operation flow.
