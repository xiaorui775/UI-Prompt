# Material Design Toast Notifications

## 中文版本 (zh-CN)

請創建一個 Material Design 風格的輕量級通知（Toast）組件。

### 設計理念

Material Design 的 Toast 通知（也稱為 Snackbar）遵循「數字材料」的設計語言，強調清晰的層級關係和有意義的動效。通知應該像一張從底部浮起的紙片，承載著重要的臨時消息。

### 視覺特徵

**整體風格**
- 深灰色背景（#323232 或相似色調），確保與內容形成對比
- 顯著的提升陰影（elevation 6-8dp），表現明確的 Z 軸深度
- 小到中等圓角（4-8px），符合 Material 設計規範
- 單行或雙行文本佈局，緊湊但易讀

**圖標與顏色系統**
- 可選的狀態圖標，使用 Material Icons 圖標集
- 成功：綠色主題 (#4CAF50)
- 錯誤：紅色主題 (#F44336)
- 警告：琥珀色主題 (#FF9800)
- 信息：藍色主題 (#2196F3)
- 圖標可作為左側強調色條或內聯圖標

**排版設計**
- 使用 Roboto 或類似的無襯線字體
- 文字顏色為白色或高對比度淺色（#FFFFFF 或 #F5F5F5）
- 字體大小適中（14-16px），字重 regular 或 medium
- 遵循 8dp 網格系統進行內外邊距設置

**操作按鈕**
- Material Text Button 樣式
- 操作按鈕使用品牌主色或對比色
- 可選：Undo 撤銷操作、Retry 重試等
- 必須包含波紋（Ripple）點擊效果

### 交互體驗

- 從底部滑入動畫，使用 Material 標準緩動曲線
- 進入時間 250-300ms，退出時間 150-200ms
- 可通過左右滑動手勢關閉（移動端）
- 自動關閉時間為 4-6 秒
- 懸停時暫停計時器，離開後恢復
- 多個通知時，新通知替換舊通知（不堆疊）

### 尺寸與定位

- 寬度響應式：
  - 桌面端：344-400px 固定寬度
  - 移動端：接近屏幕寬度，左右留 8dp 邊距
- 高度自適應內容，單行約 48-52px
- 位置：底部居中或左下角
- 距離底部邊距：48-56dp（桌面）或 16dp（移動）

### 動畫與過渡

- 進入：從下方滑入並淡入（translateY + opacity）
- 退出：向下滑出並淡出
- 替換：舊通知滑出的同時新通知滑入
- 手勢關閉：跟隨手指滑動方向

### 無障礙設計

- 使用 `role="status"` 或 `role="alert"` ARIA 屬性
- 確保顏色對比度符合 WCAG AA 標準（至少 4.5:1）
- 操作按鈕可通過鍵盤訪問
- 屏幕閱讀器友好的文本結構

### 適用場景

- Android 風格的 Web 應用
- Google 產品生態的網站
- 需要統一設計語言的企業應用
- 追求現代感與功能性的產品

---

## English Version (en-US)

Please create a Material Design style toast notification component.

### Design Philosophy

Material Design toast notifications (also called Snackbars) follow the "digital material" design language, emphasizing clear hierarchy and meaningful motion. Notifications should appear like a paper sheet floating up from the bottom, carrying important temporary messages.

### Visual Characteristics

**Overall Style**
- Dark gray background (#323232 or similar), ensuring contrast with content
- Prominent elevation shadow (6-8dp), expressing clear Z-axis depth
- Small to medium border radius (4-8px), following Material design specs
- Single or double-line text layout, compact yet readable

**Icons and Color System**
- Optional status icons using Material Icons set
- Success: Green theme (#4CAF50)
- Error: Red theme (#F44336)
- Warning: Amber theme (#FF9800)
- Info: Blue theme (#2196F3)
- Icons can be left accent bars or inline icons

**Typography Design**
- Use Roboto or similar sans-serif fonts
- Text color white or high-contrast light color (#FFFFFF or #F5F5F5)
- Moderate font size (14-16px), regular or medium weight
- Follow 8dp grid system for padding and margins

**Action Buttons**
- Material Text Button style
- Action buttons use brand primary or contrast color
- Optional: Undo, Retry actions, etc.
- Must include Ripple click effect

### Interaction Experience

- Slide-in animation from bottom using Material standard easing curves
- Entry time 250-300ms, exit time 150-200ms
- Can dismiss via left/right swipe gesture (mobile)
- Auto-close time 4-6 seconds
- Pause timer on hover, resume on leave
- For multiple notifications, new replaces old (no stacking)

### Size and Positioning

- Responsive width:
  - Desktop: 344-400px fixed width
  - Mobile: Near screen width with 8dp margins
- Height adapts to content, single line ~48-52px
- Position: Bottom-center or bottom-left
- Bottom margin: 48-56dp (desktop) or 16dp (mobile)

### Animation and Transitions

- Enter: Slide up from bottom with fade-in (translateY + opacity)
- Exit: Slide down with fade-out
- Replace: Old slides out while new slides in
- Gesture dismiss: Follows finger swipe direction

### Accessibility Design

- Use `role="status"` or `role="alert"` ARIA attributes
- Ensure color contrast meets WCAG AA standards (minimum 4.5:1)
- Action buttons accessible via keyboard
- Screen reader-friendly text structure

### Use Cases

- Android-style web applications
- Google product ecosystem websites
- Enterprise applications requiring unified design language
- Products pursuing modernity and functionality
