# Bootstrap Toast Notifications

## 中文版本 (zh-CN)

請創建一個 Bootstrap 風格的輕量級通知（Toast）組件。

### 設計理念

Bootstrap 風格的 Toast 通知遵循實用主義設計原則，強調清晰、一致且開箱即用的視覺風格。通知應該具有明確的視覺層級、標準化的配色方案和可預測的交互行為，適用於快速開發和跨項目一致性。

### 視覺特徵

**整體風格**
- 白色背景卡片（#FFFFFF）
- 清晰的邊框（1px solid rgba(0,0,0,0.1)）
- 輕到中等陰影（box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15)）
- 小圓角（0.25rem 或 4px），符合 Bootstrap 規範
- 結構化佈局：標題區 + 內容區

**標題欄設計**
- 可選的標題欄（Toast Header）
- 背景色略深於主體（#F8F9FA）
- 小圖標 + 標題文字 + 時間戳
- 右側關閉按鈕（× 符號）
- 底部細分隔線（border-bottom）

**顏色系統與狀態**
Bootstrap 標準語義色彩系統：
- **成功（Success）**：綠色左側強調條 (#198754)
- **錯誤（Danger）**：紅色左側強調條 (#DC3545)
- **警告（Warning）**：黃色左側強調條 (#FFC107)
- **信息（Info）**：藍色左側強調條 (#0DCAF0)
- **主要（Primary）**：品牌藍色 (#0D6EFD)
- 強調條寬度：3-4px，左側邊框

**排版設計**
- 標題字體：font-weight: 700（bold），font-size: 0.875rem
- 內容文字：font-size: 0.875rem（14px），line-height: 1.5
- 時間戳：小字號，淡灰色（text-muted）
- 使用系統字體堆疊或 Bootstrap 默認字體

**圖標設計**
- 使用 Bootstrap Icons 或 Font Awesome
- 圖標顏色與狀態類型對應
- 圖標大小約 16-20px
- 位於標題左側或內容起始處

**按鈕設計**
- 關閉按鈕（Close Button）：
  - 使用 Bootstrap 標準樣式
  - 位於右上角
  - 懸停時背景變化
  - 可選 data-bs-dismiss 屬性
- 操作按鈕：
  - 使用 Bootstrap 按鈕組件（btn btn-sm）
  - 位於內容區底部
  - 按鈕組間距適中

### 交互體驗

- 淡入動畫：從右側滑入並淡入（fade + slide）
- 動畫時長：150-200ms（符合 Bootstrap 過渡時長）
- 自動關閉時間：5 秒（可配置）
- 懸停時暫停自動關閉
- 點擊關閉按鈕或操作後立即關閉
- 多個通知縱向堆疊，最新的在最上方

### 尺寸與定位

- 寬度固定：350px（Bootstrap 默認）
- 最大寬度：100%（響應式）
- 高度自適應內容
- 常見位置：
  - 右上角（top-0 end-0）
  - 右下角（bottom-0 end-0）
  - 上方中央（top-0 start-50 translate-middle-x）
- 使用 Bootstrap Position 工具類
- 邊距：1rem（16px）

### 佈局結構

標準 Bootstrap Toast 結構：
```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <!-- 可選標題欄 -->
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <!-- 內容區 -->
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

### 響應式設計

- 桌面端：固定寬度，定位於角落
- 平板端：寬度略窄，適應屏幕
- 移動端：
  - 接近全寬（max-width: calc(100% - 2rem)）
  - 位於頂部或底部
  - 字體大小可微調

### 無障礙設計

- 使用語義化 ARIA 屬性：
  - `role="alert"` 或 `role="status"`
  - `aria-live="assertive"` 或 `"polite"`
  - `aria-atomic="true"`
- 關閉按鈕包含 `aria-label="Close"`
- 確保鍵盤可訪問性
- 顏色對比度符合 WCAG 標準

### 適用場景

- Bootstrap 框架的項目
- 企業級管理後台
- 快速原型開發
- 需要統一設計規範的多團隊協作項目
- 內容管理系統（CMS）

### 擴展變體

- **自動隱藏 Toast**：配置 autohide 和 delay 屬性
- **堆疊容器**：使用 `.toast-container` 包裹多個 Toast
- **帶操作按鈕的 Toast**：在 body 中添加按鈕組
- **僅內容 Toast**：省略 header，直接顯示 body

---

## English Version (en-US)

Please create a Bootstrap style toast notification component.

### Design Philosophy

Bootstrap-style toast notifications follow pragmatic design principles, emphasizing clarity, consistency, and out-of-the-box visual styling. Notifications should have clear visual hierarchy, standardized color schemes, and predictable interaction behaviors, suitable for rapid development and cross-project consistency.

### Visual Characteristics

**Overall Style**
- White background card (#FFFFFF)
- Clear border (1px solid rgba(0,0,0,0.1))
- Light to medium shadow (box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15))
- Small border radius (0.25rem or 4px), following Bootstrap specs
- Structured layout: header area + content area

**Header Design**
- Optional toast header
- Background slightly darker than body (#F8F9FA)
- Small icon + title text + timestamp
- Close button on right (× symbol)
- Bottom dividing line (border-bottom)

**Color System and States**
Bootstrap standard semantic color system:
- **Success**: Green left accent bar (#198754)
- **Danger**: Red left accent bar (#DC3545)
- **Warning**: Yellow left accent bar (#FFC107)
- **Info**: Cyan left accent bar (#0DCAF0)
- **Primary**: Brand blue (#0D6EFD)
- Accent bar width: 3-4px, left border

**Typography Design**
- Title font: font-weight: 700 (bold), font-size: 0.875rem
- Content text: font-size: 0.875rem (14px), line-height: 1.5
- Timestamp: Small size, muted gray (text-muted)
- Use system font stack or Bootstrap default fonts

**Icon Design**
- Use Bootstrap Icons or Font Awesome
- Icon colors correspond to status types
- Icon size approximately 16-20px
- Located to left of title or at content start

**Button Design**
- Close button:
  - Use Bootstrap standard style
  - Located in top-right
  - Background changes on hover
  - Optional data-bs-dismiss attribute
- Action buttons:
  - Use Bootstrap button component (btn btn-sm)
  - Located at bottom of content area
  - Moderate spacing between button groups

### Interaction Experience

- Fade-in animation: Slide in from right with fade (fade + slide)
- Animation duration: 150-200ms (following Bootstrap transition duration)
- Auto-close time: 5 seconds (configurable)
- Pause auto-close on hover
- Close immediately after clicking close button or action
- Multiple notifications stack vertically with newest on top

### Size and Positioning

- Fixed width: 350px (Bootstrap default)
- Max width: 100% (responsive)
- Height adapts to content
- Common positions:
  - Top-right (top-0 end-0)
  - Bottom-right (bottom-0 end-0)
  - Top-center (top-0 start-50 translate-middle-x)
- Use Bootstrap Position utility classes
- Margin: 1rem (16px)

### Layout Structure

Standard Bootstrap Toast structure:
```html
<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <!-- Optional header -->
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="...">
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <!-- Content area -->
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
```

### Responsive Design

- Desktop: Fixed width, positioned in corners
- Tablet: Slightly narrower width, adapts to screen
- Mobile:
  - Near full-width (max-width: calc(100% - 2rem))
  - Positioned at top or bottom
  - Font sizes can be fine-tuned

### Accessibility Design

- Use semantic ARIA attributes:
  - `role="alert"` or `role="status"`
  - `aria-live="assertive"` or `"polite"`
  - `aria-atomic="true"`
- Close button includes `aria-label="Close"`
- Ensure keyboard accessibility
- Color contrast meets WCAG standards

### Use Cases

- Bootstrap framework projects
- Enterprise admin dashboards
- Rapid prototyping
- Multi-team collaborative projects requiring unified design standards
- Content Management Systems (CMS)

### Extended Variants

- **Auto-hide Toast**: Configure autohide and delay properties
- **Stacking Container**: Use `.toast-container` to wrap multiple Toasts
- **Toast with Action Buttons**: Add button groups in body
- **Content-only Toast**: Omit header, display body directly
