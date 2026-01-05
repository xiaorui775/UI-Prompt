# Skeleton Loading Animation

## 中文版本 (zh-CN)

請創建一個骨架屏（Skeleton Screen）風格的加載動畫組件。

### 設計理念

骨架屏通過模擬即將加載內容的結構和佈局，提供比傳統 Spinner 更友好的等待體驗。它減少了用戶的感知等待時間，並預設內容的大致形態，讓界面過渡更加平滑自然。設計應準確反映實際內容的佈局結構。

### 視覺特徵

**基本形態**
- 使用灰色佔位塊模擬內容元素
- 包含文字行、圖片框、按鈕等佔位符
- 保持與實際內容相似的尺寸和間距
- 圓角與實際元素一致

**顏色方案**
- **淺色模式**：
  - 背景：#F3F4F6 或 #E5E7EB（淡灰色）
  - 高光：#FFFFFF 或更淺的灰色
- **暗色模式**：
  - 背景：#374151 或 #4B5563（深灰色）
  - 高光：#6B7280（稍淺的灰色）
- 顏色需與頁面背景形成微妙對比，不可過於突兀

**形狀元素**
- **文字行**：矩形條，高度 12-16px，圓角 4px
  - 標題行：較粗（20-24px），寬度 60-80%
  - 正文行：標準高度，寬度隨機（80-100%）
  - 最後一行：寬度較短（40-60%）模擬真實文本
- **圖片/頭像**：
  - 方形或圓形佔位符
  - 頭像：圓形，40-64px
  - 縮略圖：方形或 16:9 矩形
- **按鈕**：圓角矩形，高度 36-48px，寬度 80-120px
- **卡片**：完整的卡片輪廓，包含多個子元素

### 動畫效果

**閃光掃過動畫（Shimmer）- 最常見**
- 從左至右的漸變高光掃過骨架
- 漸變：透明 → 白色/淺色 → 透明
- 動畫時長：1.5-2.5 秒
- 無限循環，營造「正在加載」的動態感
- 緩動函數：linear 或 ease-in-out

**脈動動畫（Pulse）- 更簡潔**
- 整體透明度循環變化
- 不透明度：1 → 0.6 → 1
- 動畫時長：1.5-2 秒
- 適合極簡風格或性能受限場景

**波浪動畫（Wave）- 更動感**
- 多個元素依次閃光或脈動
- 序列化延遲，形成波浪效果
- 適合列表或卡片網格

### 應用場景與佈局

**社交媒體信息流**
- 模擬帖子卡片：頭像 + 標題 + 文本 + 圖片
- 多個卡片垂直排列
- 每個卡片內部元素對齊

**電商產品列表**
- 模擬產品卡片：圖片 + 標題 + 價格 + 按鈕
- 網格佈局（2-4 列）
- 圖片佔位符通常為正方形或 4:3

**文章/博客頁面**
- 頭部：大標題 + 作者信息 + 發佈時間
- 內容：多行文本佔位符
- 可選：圖片佔位符穿插其中

**用戶資料卡**
- 頭像（圓形）+ 姓名 + 描述
- 水平佈局或垂直佈局
- 可添加標籤或按鈕佔位符

**表格數據**
- 模擬表格行
- 每行包含多個單元格佔位符
- 表頭可使用實際標題或佔位符

**評論區**
- 頭像 + 用戶名 + 評論文本
- 嵌套結構（回復評論）
- 垂直堆疊，間距均勻

### 技術實現要點

**Shimmer 動畫實現（CSS）**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**響應式設計**
- 骨架佈局與實際內容響應式一致
- 移動端可簡化骨架結構
- 使用相同的 Grid/Flexbox 佈局

**性能優化**
- 使用 CSS 動畫而非 JavaScript
- 避免過多 DOM 元素（簡化骨架結構）
- 使用 `will-change: background-position`（謹慎）

### 設計最佳實踐

**準確性**
- 骨架佈局應儘量接近實際內容
- 元素尺寸、間距、對齊方式保持一致
- 避免加載後佈局跳動（Layout Shift）

**簡化**
- 骨架可比實際內容更簡化
- 省略次要細節，保留核心結構
- 避免過於複雜的骨架（影響性能）

**過渡**
- 從骨架到實際內容應平滑過渡
- 使用淡入效果（fade-in）
- 避免突兀的內容替換

**一致性**
- 整個應用使用統一的骨架風格
- 動畫速度、顏色、圓角保持一致

### 無障礙考量

- 使用 `aria-busy="true"` 標記加載狀態
- 提供屏幕閱讀器文本：「正在加載內容」
- 骨架元素設為 `aria-hidden="true"`
- 加載完成後移除 aria-busy 屬性

### 與其他加載方式對比

**優勢**
- 感知速度更快（佔位符立即顯示）
- 減少佈局偏移（CLS）
- 提供內容結構預覽
- 視覺上更現代、更友好

**劣勢**
- 實現成本較高（需設計骨架）
- 不適合結構不固定的內容
- 首次加載時骨架本身也需時間

**適用場景**
- 內容結構可預測的頁面
- 列表、卡片、表格等重複結構
- 初次加載或路由切換

**不適用場景**
- 快速加載場景（< 200ms）
- 結構高度動態的內容
- 簡單的表單提交等待

### 設計風格變體

**Facebook 風格**
- 灰色背景 + 白色閃光
- 閃光角度稍傾斜
- 圓形頭像 + 矩形文本

**LinkedIn 風格**
- 淺藍灰色背景
- 脈動動畫而非閃光
- 結構化卡片佈局

**Material Design**
- 波浪序列動畫
- 使用 Material 灰色調色板
- 提升陰影效果（可選）

**極簡風格**
- 純灰色佔位符
- 無動畫或僅淡入淡出
- 最小化視覺干擾

### 適用場景

- 社交媒體信息流
- 電商產品列表頁
- 新聞/博客文章頁
- 用戶資料頁面
- 評論區加載
- 任何內容結構可預測的界面

---

## English Version (en-US)

Please create a Skeleton Screen style loading animation component.

### Design Philosophy

Skeleton screens provide a friendlier waiting experience than traditional Spinners by simulating the structure and layout of content to be loaded. They reduce perceived waiting time and preset the approximate form of content, making interface transitions smoother and more natural. Design should accurately reflect the layout structure of actual content.

### Visual Characteristics

**Basic Form**
- Use gray placeholder blocks to simulate content elements
- Include placeholders for text lines, image frames, buttons, etc.
- Maintain similar sizes and spacing to actual content
- Border radius consistent with actual elements

**Color Schemes**
- **Light Mode**:
  - Background: #F3F4F6 or #E5E7EB (light gray)
  - Highlight: #FFFFFF or lighter gray
- **Dark Mode**:
  - Background: #374151 or #4B5563 (dark gray)
  - Highlight: #6B7280 (slightly lighter gray)
- Colors should form subtle contrast with page background, not too abrupt

**Shape Elements**
- **Text Lines**: Rectangular bars, height 12-16px, border-radius 4px
  - Title line: Thicker (20-24px), width 60-80%
  - Body lines: Standard height, random width (80-100%)
  - Last line: Shorter width (40-60%) simulating real text
- **Images/Avatars**:
  - Square or circular placeholders
  - Avatar: Circular, 40-64px
  - Thumbnail: Square or 16:9 rectangle
- **Buttons**: Rounded rectangle, height 36-48px, width 80-120px
- **Cards**: Complete card outline containing multiple sub-elements

### Animation Effects

**Shimmer Animation - Most Common**
- Left-to-right gradient highlight sweeps across skeleton
- Gradient: Transparent → white/light → transparent
- Animation duration: 1.5-2.5 seconds
- Infinite loop, creating "loading" dynamic feel
- Easing function: linear or ease-in-out

**Pulse Animation - Simpler**
- Overall opacity cycles
- Opacity: 1 → 0.6 → 1
- Animation duration: 1.5-2 seconds
- Suitable for minimalist style or performance-limited scenarios

**Wave Animation - More Dynamic**
- Multiple elements shimmer or pulse sequentially
- Sequential delay creating wave effect
- Suitable for lists or card grids

### Application Scenarios and Layouts

**Social Media Feed**
- Simulate post cards: Avatar + title + text + image
- Multiple cards stacked vertically
- Internal elements aligned within each card

**E-commerce Product List**
- Simulate product cards: Image + title + price + button
- Grid layout (2-4 columns)
- Image placeholders typically square or 4:3

**Article/Blog Page**
- Header: Large title + author info + publish time
- Content: Multiple text line placeholders
- Optional: Image placeholders interspersed

**User Profile Card**
- Avatar (circular) + name + description
- Horizontal or vertical layout
- Can add tag or button placeholders

**Table Data**
- Simulate table rows
- Each row contains multiple cell placeholders
- Header can use actual titles or placeholders

**Comment Section**
- Avatar + username + comment text
- Nested structure (reply comments)
- Vertically stacked with even spacing

### Technical Implementation Points

**Shimmer Animation Implementation (CSS)**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Responsive Design**
- Skeleton layout responsive consistent with actual content
- Mobile can simplify skeleton structure
- Use same Grid/Flexbox layout

**Performance Optimization**
- Use CSS animations instead of JavaScript
- Avoid too many DOM elements (simplify skeleton structure)
- Use `will-change: background-position` (cautiously)

### Design Best Practices

**Accuracy**
- Skeleton layout should closely match actual content
- Element sizes, spacing, alignment remain consistent
- Avoid layout shift after loading

**Simplification**
- Skeleton can be more simplified than actual content
- Omit minor details, retain core structure
- Avoid overly complex skeletons (affects performance)

**Transition**
- Smooth transition from skeleton to actual content
- Use fade-in effect
- Avoid abrupt content replacement

**Consistency**
- Use unified skeleton style throughout application
- Animation speed, colors, border radius remain consistent

### Accessibility Considerations

- Use `aria-busy="true"` to mark loading state
- Provide screen reader text: "Loading content"
- Skeleton elements set to `aria-hidden="true"`
- Remove aria-busy attribute after loading completes

### Comparison with Other Loading Methods

**Advantages**
- Faster perceived speed (placeholders show immediately)
- Reduced layout shift (CLS)
- Provides content structure preview
- Visually more modern and friendly

**Disadvantages**
- Higher implementation cost (need to design skeleton)
- Not suitable for content with unfixed structure
- Skeleton itself needs time on first load

**Suitable Scenarios**
- Pages with predictable content structure
- Lists, cards, tables, and other repetitive structures
- Initial load or route switching

**Unsuitable Scenarios**
- Fast loading scenarios (< 200ms)
- Highly dynamic content structures
- Simple form submissions waiting

### Design Style Variants

**Facebook Style**
- Gray background + white shimmer
- Shimmer angle slightly tilted
- Circular avatar + rectangular text

**LinkedIn Style**
- Light blue-gray background
- Pulse animation instead of shimmer
- Structured card layout

**Material Design**
- Wave sequential animation
- Use Material gray color palette
- Elevation shadow effects (optional)

**Minimalist Style**
- Pure gray placeholders
- No animation or just fade in/out
- Minimize visual interference

### Use Cases

- Social media feeds
- E-commerce product listing pages
- News/blog article pages
- User profile pages
- Comment section loading
- Any interface with predictable content structure
