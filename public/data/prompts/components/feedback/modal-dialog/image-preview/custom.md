# Image Preview Modal Dialog

## 中文版本 (zh-CN)

請創建一個圖片預覽（Image Preview）風格的模態對話框組件。

### 設計理念

圖片預覽模態框專為展示視覺內容而設計，讓圖片成為絕對主角。深色背景、最小化的 UI 元素、沉浸式的瀏覽體驗，讓用戶專注於圖片本身。

### 視覺特徵

**整體風格**
- 深色或純黑背景（85-95% 透明度）
- 對話框幾乎全屏
- 無明顯邊框或邊界
- 圖片居中顯示
- UI 控件半透明，不喧賓奪主

**圖片展示**
- 保持原始比例
- 適應容器大小（contain 模式）
- 可放大查看細節（zoom 功能）
- 高分辨率圖片支持

**控制元素**
- 關閉按鈕：右上角，白色或半透明
- 導航箭頭：左右兩側（多圖時）
- 縮放控制：可選的放大/縮小按鈕
- 全屏按鈕：可選
- 所有控件懸停時顯示，空閒時淡出

**信息展示（可選）**
- 圖片標題/描述
- 圖片序號（如 3/10）
- 縮略圖導航條
- EXIF 信息

### 交互體驗

**導航方式**
- 點擊左右箭頭
- 鍵盤左右方向鍵
- 滑動手勢（觸控設備）
- 縮略圖點擊跳轉

**縮放交互**
- 雙擊放大/還原
- 滾輪縮放
- 捏合縮放（觸控）
- 拖動平移（放大時）

**關閉方式**
- 點擊關閉按鈕
- 點擊背景區域
- ESC 鍵
- 向下滑動（移動端）

**過渡動畫**
- 圖片從縮略圖位置展開
- 圖片切換使用滑動或淡入淡出
- 關閉時縮回原位置

### 手勢支持

- 左右滑動切換圖片
- 上下滑動關閉預覽
- 雙指縮放
- 單指拖動（放大後）

### 適用場景

- 相冊和圖庫應用
- 電商產品圖片查看
- 社交媒體圖片瀏覽
- 作品集展示
- 文檔附件預覽

---

## English Version (en-US)

Please create an Image Preview style modal dialog component.

### Design Philosophy

Image preview modals are designed specifically for showcasing visual content, making images the absolute focus. Dark backgrounds, minimized UI elements, immersive browsing experience—let users focus on the images themselves.

### Visual Characteristics

**Overall Style**
- Dark or pure black background (85-95% opacity)
- Dialog nearly full-screen
- No obvious borders or boundaries
- Images centered
- UI controls semi-transparent, not attention-competing

**Image Display**
- Maintains original aspect ratio
- Fits container size (contain mode)
- Can zoom to view details
- High-resolution image support

**Control Elements**
- Close button: top-right, white or semi-transparent
- Navigation arrows: left and right sides (for multiple images)
- Zoom controls: optional zoom in/out buttons
- Fullscreen button: optional
- All controls visible on hover, fade when idle

**Information Display (Optional)**
- Image title/description
- Image index (e.g., 3/10)
- Thumbnail navigation bar
- EXIF information

### Interaction Experience

**Navigation Methods**
- Click left/right arrows
- Keyboard arrow keys
- Swipe gestures (touch devices)
- Thumbnail click to jump

**Zoom Interactions**
- Double-click to zoom/reset
- Scroll wheel zoom
- Pinch to zoom (touch)
- Drag to pan (when zoomed)

**Closing Methods**
- Click close button
- Click background area
- ESC key
- Swipe down (mobile)

**Transition Animations**
- Image expands from thumbnail position
- Image switching uses slide or crossfade
- Shrinks back to original position on close

### Gesture Support

- Left/right swipe to switch images
- Up/down swipe to close preview
- Two-finger pinch to zoom
- Single finger drag (when zoomed in)

### Use Cases

- Albums and gallery applications
- E-commerce product image viewing
- Social media image browsing
- Portfolio showcases
- Document attachment previews
