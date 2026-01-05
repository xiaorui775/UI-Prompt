# Side Drawer Modal Dialog

## 中文版本 (zh-CN)

請創建一個側邊抽屜（Side Drawer）風格的模態對話框組件。

### 設計理念

側邊抽屜從屏幕邊緣滑入，提供更大的內容空間和持久的上下文。它適合展示詳細信息、導航菜單或多步驟流程，用戶可以在不完全離開當前頁面的情況下完成任務。

### 視覺特徵

**整體風格**
- 從左側或右側滑入（右側更常見）
- 全屏高度
- 寬度通常為 320-480px，或屏幕的 30-50%
- 內側有陰影投射到主內容區
- 直角或僅一側圓角

**頭部區域**
- 包含標題和關閉按鈕
- 關閉按鈕通常為箭頭（←）或 X
- 可選：返回導航（多層抽屜時）
- 底部可有分隔線

**內容區域**
- 充足的內邊距
- 支持滾動（獨立於頁面滾動）
- 可包含複雜的表單或列表
- 支持內部導航或標籤切換

**底部操作區（可選）**
- 固定在抽屜底部
- 包含主要操作按鈕
- 與內容區域有視覺分隔

### 交互體驗

**開啟動畫**
- 從邊緣滑入，配合淡入
- 速度適中，約 250-300ms
- 主內容可輕微縮放或位移

**關閉方式**
- 點擊關閉按鈕
- 點擊遮罩層
- 向邊緣滑動（可選）
- ESC 鍵

**多層抽屜**
- 支持在抽屜中打開新抽屜
- 可堆疊或平鋪顯示
- 需要清晰的導航層級

### 響應式設計

- 移動端可變為全屏或底部抽屜
- 平板端保持側邊，可調整寬度
- 桌面端可固定顯示（無遮罩）

### 適用場景

- 詳情面板（查看/編輯項目詳情）
- 購物車側邊欄
- 設置和配置面板
- 通知中心
- 用戶資料編輯
- 多步驟表單向導

---

## English Version (en-US)

Please create a Side Drawer style modal dialog component.

### Design Philosophy

Side drawer slides in from screen edge, providing larger content space and persistent context. It's suitable for displaying detailed information, navigation menus, or multi-step processes, allowing users to complete tasks without completely leaving the current page.

### Visual Characteristics

**Overall Style**
- Slides in from left or right side (right more common)
- Full screen height
- Width typically 320-480px, or 30-50% of screen
- Shadow casting inward onto main content area
- Square corners or rounded only on one side

**Header Area**
- Contains title and close button
- Close button typically arrow (←) or X
- Optional: back navigation (for nested drawers)
- May have bottom divider

**Content Area**
- Ample padding
- Supports scrolling (independent of page scroll)
- Can contain complex forms or lists
- Supports internal navigation or tab switching

**Bottom Action Area (Optional)**
- Fixed at drawer bottom
- Contains primary action buttons
- Visual separation from content area

### Interaction Experience

**Opening Animation**
- Slides in from edge with fade-in
- Moderate speed, approximately 250-300ms
- Main content can slightly scale or shift

**Closing Methods**
- Click close button
- Click overlay
- Swipe toward edge (optional)
- ESC key

**Nested Drawers**
- Supports opening new drawer within drawer
- Can stack or tile display
- Needs clear navigation hierarchy

### Responsive Design

- Mobile can become full-screen or bottom sheet
- Tablet maintains side position with adjustable width
- Desktop can display persistently (no overlay)

### Use Cases

- Detail panels (viewing/editing item details)
- Shopping cart sidebar
- Settings and configuration panels
- Notification center
- User profile editing
- Multi-step form wizards
