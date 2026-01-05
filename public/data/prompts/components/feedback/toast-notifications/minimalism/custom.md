# Minimalism Toast Notifications

## 中文版本 (zh-CN)

請創建一個極簡主義風格的輕量級通知（Toast）組件。

### 設計理念

極簡主義的 Toast 通知專注於傳遞信息的本質，拒絕多餘的裝飾與視覺噪音。通知應該像一陣清風，輕輕傳達消息後優雅退場，不干擾用戶的主要任務流程。

### 視覺特徵

**整體風格**
- 純白色或極淺灰背景，保持視覺清爽
- 極細的邊框（1px）或無邊框設計
- 輕盈的陰影效果，僅用於提供細微的浮起感
- 小圓角（4-8px），保持幾何簡潔性

**圖標設計**
- 使用單色線性圖標（2px 描邊）
- 圖標顏色與消息類型對應，但保持柔和
- 成功：深綠色或灰綠色
- 錯誤：深紅色或灰紅色
- 警告：深黃色或琥珀色
- 信息：深藍色或灰藍色

**排版設計**
- 使用單一中性字體，字重適中
- 消息文本採用深灰色（#333 或 #555）
- 行高舒適（1.5-1.6），易於閱讀
- 文字對齊左側，保持自然閱讀流

**按鈕設計**
- 關閉按鈕極度簡化，可能僅是一個 X 符號
- 無背景色，僅在懸停時顯示微妙變化
- 可選操作按鈕使用純文字樣式

### 交互體驗

- 滑入動畫流暢且快速（200-250ms）
- 淡出時透明度平滑過渡
- 無彈跳或縮放效果，保持克制
- 懸停時可暫停自動關閉計時器
- 關閉動畫簡潔，向上滑出並淡化

### 尺寸與定位

- 寬度固定且適中（320-360px）
- 高度根據內容自適應，但保持緊湊
- 通常定位於右上角或上方中央
- 多個通知縱向堆疊，間距統一（8-12px）

### 適用場景

- 內容導向的應用程序（如閱讀、寫作工具）
- 追求專業與優雅的企業級產品
- 需要不干擾用戶注意力的通知場景
- 高端品牌或設計類網站

---

## English Version (en-US)

Please create a minimalism style toast notification component.

### Design Philosophy

Minimalist toast notifications focus on the essence of message delivery, rejecting excess decoration and visual noise. Notifications should be like a gentle breeze—softly conveying messages before gracefully departing without disrupting the user's primary workflow.

### Visual Characteristics

**Overall Style**
- Pure white or very light gray background, maintaining visual freshness
- Ultra-thin borders (1px) or borderless design
- Light shadow effects, only providing subtle floating sensation
- Small border radius (4-8px), maintaining geometric simplicity

**Icon Design**
- Use monochrome linear icons (2px stroke)
- Icon colors correspond to message types but remain soft
- Success: Dark green or gray-green
- Error: Dark red or gray-red
- Warning: Dark yellow or amber
- Info: Dark blue or gray-blue

**Typography Design**
- Use single neutral font with moderate weight
- Message text in dark gray (#333 or #555)
- Comfortable line height (1.5-1.6) for readability
- Left-aligned text maintaining natural reading flow

**Button Design**
- Close button extremely simplified, possibly just an X symbol
- No background color, only subtle changes on hover
- Optional action buttons use text-only style

### Interaction Experience

- Smooth and quick slide-in animation (200-250ms)
- Transparent fade-out transition
- No bounce or scale effects, maintaining restraint
- Hovering can pause auto-close timer
- Concise close animation, sliding up and fading

### Size and Positioning

- Fixed moderate width (320-360px)
- Height adapts to content but remains compact
- Usually positioned in top-right or top-center
- Multiple notifications stack vertically with uniform spacing (8-12px)

### Use Cases

- Content-oriented applications (reading, writing tools)
- Professional and elegant enterprise products
- Notification scenarios requiring minimal user attention disruption
- Premium brand or design-focused websites
