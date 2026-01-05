# Bottom Sheet Modal Dialog

## 中文版本 (zh-CN)

請創建一個底部抽屜（Bottom Sheet）風格的模態對話框組件。

### 設計理念

底部抽屜是移動優先設計的典型代表，從屏幕底部滑出，符合單手操作的人體工學。它更像是一個臨時的操作面板，而非傳統的居中對話框。

### 視覺特徵

**整體風格**
- 固定於視窗底部
- 頂部大圓角（16-24px），底部直角
- 白色或淺色背景
- 輕柔的頂部陰影向上投射
- 最大高度通常不超過屏幕的 90%

**拖拽指示器**
- 頂部居中的小橫條（handle/grabber）
- 通常為圓角的灰色小矩形
- 寬度約 32-48px，高度 4-5px
- 位於頂部 padding 區域

**內容區域**
- 寬鬆的內邊距
- 內容過多時可滾動
- 底部留有安全區域（safe area）適配
- 可分區顯示不同操作

**按鈕設計**
- 按鈕通常較大，適合觸控
- 可使用全寬按鈕
- 垂直排列或網格排列
- 主要操作放在視覺焦點位置

### 交互體驗

**滑動手勢**
- 從底部向上滑入
- 向下滑動可關閉
- 支持拖拽調整高度（可選）
- 彈性阻尼效果

**狀態變化**
- 可展開為全屏
- 可收起為迷你狀態
- 吸附到預設高度點

**遮罩層**
- 點擊遮罩可關閉
- 遮罩透明度可隨拖拽高度變化
- 無遮罩模式（持久底部面板）

### 響應式考慮

- 桌面端可考慮限制最大寬度並居中
- 或在桌面端轉換為傳統模態框
- 平板端可使用側邊半屏

### 適用場景

- 移動端優先的 Web 應用
- 分享菜單
- 篩選和排序選項
- 快捷操作面板
- 評論和回覆輸入
- 支付確認界面

---

## English Version (en-US)

Please create a Bottom Sheet style modal dialog component.

### Design Philosophy

Bottom sheet is a quintessential mobile-first design pattern, sliding up from the screen bottom, ergonomically suited for one-handed operation. It functions more like a temporary action panel rather than a traditional centered dialog.

### Visual Characteristics

**Overall Style**
- Fixed to viewport bottom
- Large top border radius (16-24px), square bottom corners
- White or light-colored background
- Soft top shadow casting upward
- Maximum height typically not exceeding 90% of screen

**Drag Indicator**
- Small horizontal bar centered at top (handle/grabber)
- Usually a rounded gray small rectangle
- Width approximately 32-48px, height 4-5px
- Located in top padding area

**Content Area**
- Generous padding
- Scrollable when content overflows
- Safe area padding at bottom
- Can display different actions in sections

**Button Design**
- Buttons typically larger for touch
- Can use full-width buttons
- Vertical or grid arrangement
- Primary action placed at visual focus position

### Interaction Experience

**Swipe Gestures**
- Slides up from bottom
- Swipe down to close
- Supports drag to adjust height (optional)
- Elastic damping effect

**State Changes**
- Can expand to full screen
- Can collapse to mini state
- Snaps to preset height points

**Overlay**
- Click overlay to close
- Overlay opacity can change with drag height
- No-overlay mode (persistent bottom panel)

### Responsive Considerations

- Desktop can limit max-width and center
- Or convert to traditional modal on desktop
- Tablet can use side half-screen

### Use Cases

- Mobile-first web applications
- Share menus
- Filter and sort options
- Quick action panels
- Comments and reply input
- Payment confirmation interfaces
