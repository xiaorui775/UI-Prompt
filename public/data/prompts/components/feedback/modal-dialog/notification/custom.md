# Notification Modal Dialog

## 中文版本 (zh-CN)

請創建一個通知樣式（Notification Style）的模態對話框組件。

### 設計理念

通知樣式的對話框輕量、快速、不打斷。它像是一個禮貌的提醒，傳達重要信息但不強迫用戶立即行動。適合系統消息、成功提示、警告通知等場景。

### 視覺特徵

**整體風格**
- 尺寸較小（最大寬度 320-400px）
- 位置靈活：右上角、右下角或頂部居中
- 圓角適中（8-12px）
- 輕柔的陰影，表現浮動感
- 可帶有左側彩色邊條表示類型

**類型指示**
- 成功：綠色邊條/圖標
- 警告：黃色/橙色邊條/圖標
- 錯誤：紅色邊條/圖標
- 信息：藍色邊條/圖標
- 圖標位於左側，增強識別

**內容結構**
- 圖標 + 標題 + 描述文字
- 標題簡短有力（可選）
- 描述文字 1-2 行為宜
- 可選：操作鏈接或按鈕

**關閉機制**
- 右上角小型關閉按鈕
- 自動消失（3-8秒）
- 懸停時暫停計時器
- 可選：進度條顯示剩餘時間

### 交互體驗

**出現動畫**
- 從側邊滑入
- 或從上/下淡入滑入
- 動畫輕快，約 200ms

**消失動畫**
- 向側邊滑出
- 或淡出縮小
- 高度塌陷動畫（多條通知時）

**堆疊行為**
- 多條通知垂直堆疊
- 新通知在頂部或底部
- 可設置最大顯示數量
- 超出時隱藏或合併

### 無遮罩設計

- 通常不需要遮罩層
- 不阻止用戶與頁面交互
- 多用於非阻塞式通知

### 適用場景

- 表單提交成功/失敗
- 後台操作完成通知
- 系統狀態更新
- 新消息提醒
- 網絡狀態變化
- 文件上傳進度

---

## English Version (en-US)

Please create a Notification Style modal dialog component.

### Design Philosophy

Notification style dialogs are lightweight, quick, and non-interrupting. They act like polite reminders, conveying important information without forcing immediate user action. Suitable for system messages, success prompts, warning notifications.

### Visual Characteristics

**Overall Style**
- Smaller size (max-width 320-400px)
- Flexible positioning: top-right, bottom-right, or top-center
- Moderate border radius (8-12px)
- Soft shadow expressing floating feel
- Can have colored left border indicating type

**Type Indicators**
- Success: green border/icon
- Warning: yellow/orange border/icon
- Error: red border/icon
- Info: blue border/icon
- Icon on left side for enhanced recognition

**Content Structure**
- Icon + Title + Description text
- Title brief and impactful (optional)
- Description 1-2 lines ideal
- Optional: action links or buttons

**Dismissal Mechanisms**
- Small close button at top-right
- Auto-dismiss (3-8 seconds)
- Timer pauses on hover
- Optional: progress bar showing remaining time

### Interaction Experience

**Appearance Animation**
- Slide in from side
- Or fade-in with slide from top/bottom
- Snappy animation, around 200ms

**Dismissal Animation**
- Slide out to side
- Or fade-out with shrink
- Height collapse animation (for multiple notifications)

**Stacking Behavior**
- Multiple notifications stack vertically
- New notifications at top or bottom
- Can set maximum display count
- Hide or merge when exceeded

### No Overlay Design

- Typically doesn't need overlay
- Doesn't block user interaction with page
- Mostly used for non-blocking notifications

### Use Cases

- Form submission success/failure
- Background operation completion
- System status updates
- New message reminders
- Network status changes
- File upload progress
