# Custom Prompt

## 中文版本 (zh-CN)


创建「编织与经纬」(Woven & Weft) 风格的手工生活方式电商落地页，融合编织纹理、缝线装饰和温暖的布料美学。

### 核心设计理念
以布料为灵感的界面设计，通过编织纹理背景、缝线边框和手工质感，营造温暖、慢生活的购物体验。适用于手工艺品、家居纺织品、时尚服饰等强调质感和工艺的品牌。

### 视觉特征

**1. 背景纹理（三层叠加）**
```css
body {
  background-color: #f4f1ea; /* 亚麻色基底 */
  background-image:
    /* 噪点纹理（颗粒感） */
    url("data:image/svg+xml,...fractalNoise..."),
    /* 纵向编织线 */
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
    /* 横向编织线 */
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
}
```

**2. 缝线边框效果**
所有卡片和容器使用虚线边框模拟缝线：
```css
.stitched-container::after {
  content: '';
  position: absolute;
  inset: 6px; /* 与外边框保持间距 */
  border: 1px dashed rgba(61, 58, 54, 0.2);
  border-radius: 2px;
}
```

**3. 布料质感按钮**
- 按钮背景使用绝对定位的 `.btn-bg` 层模拟布料补丁
- 内部添加虚线缝合效果
- 悬停时轻微放大（`scale(1.02)`）+ 增亮（`brightness(1.1)`）
- 按下时缩小（`scale(0.98)`）+ 阴影变浅

### 色彩系统

**主色调**（温暖中性色）：
- 亚麻背景：`#f4f1ea`
- 卡片白色：`#ffffff`
- 主要文字：`#3d3a36`（深棕灰）
- 次要文字：`#6e6b66`（中灰棕）

**强调色**（大地色调）：
- 靛蓝（Denim）：`#5f7186` - 用于分类标签
- 陶土红（Clay）：`#b87e6b` - 用于小标题
- 鼠尾草绿（Sage）：`#8fa08e` - 用于 Newsletter 区块

### 排版系统

**字体组合**：
- 标题：`'Cormorant Garamond', serif` - 优雅衬线体，斜体用于品牌名
- 正文：`'Nunito Sans', sans-serif` - 现代无衬线，易读

**字阶**：
- Hero 标题：`4.5rem`（移动端调整为 `2.5rem`）
- 区块标题：`2.5rem`
- 产品标题：`1.5rem`
- 小标签：`0.75rem`（大写 + 字母间距 `0.1em`）

### 组件设计

**1. 产品卡片**
```html
<div class="stitched-container product-card">
  <div class="product-img-box">
    <img src="..." class="product-img">
  </div>
  <div class="product-info">
    <span class="product-cat">Table Linen</span>
    <h3 class="product-title">Raw Edge Napkins</h3>
    <p class="product-price">$45.00</p>
    <div class="swatches">
      <div class="swatch active" style="background: #e6e2d8;"></div>
      ...
    </div>
    <button class="btn btn-secondary">...</button>
  </div>
</div>
```

**2. Logo 缝布标签**
```css
.logo::before {
  content: '';
  position: absolute;
  inset: -4px 0;
  background: rgba(255,255,255,0.6);
  z-index: -1;
  transform: rotate(-1deg); /* 轻微倾斜 */
  border: 1px dashed var(--c-thread);
}
```

**3. 导航缝线下划线**
```css
nav a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  /* 虚线效果模拟缝线 */
  background-image: repeating-linear-gradient(90deg,
    var(--c-accent-clay), var(--c-accent-clay) 4px,
    transparent 4px, transparent 6px);
  transition: width 0.3s ease;
}
nav a:hover::before { width: 100%; }
```

**4. 材质色板（Swatches）**
- 圆形色板（`18px` 直径）
- 激活状态显示白色针头效果（`::after` 伪元素）
```css
.swatch.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

### 动画与交互

**过渡效果**：
- 统一使用 `cubic-bezier(0.4, 0, 0.2, 1)` 缓动
- 悬停卡片：`translateY(-2px)` + 阴影加深
- 避免过于流畅的动画，保持手工质感

**Toast 通知**：
- 固定在右下角
- 使用 `cubic-bezier(0.175, 0.885, 0.32, 1.275)` 弹性进入
- 内部也有缝线装饰（虚线边框）

### 布局结构

**Hero 区域**：
- 左右两栏（移动端改为单栏）
- 右侧图片使用分层边框模拟布料画框：
  - 外层偏移背景色块（`position: absolute`）
  - 内层图片带柔和圆角和阴影

**产品网格**：
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
```

**Newsletter 区块**：
- 全宽区块，背景色为 Sage Green
- 使用 45 度斜线纹理模拟牛仔布质感

### 响应式设计

**移动端（< 768px）**：
- Hero 改为单栏，图片置顶
- 导航隐藏（显示汉堡菜单）
- Newsletter 输入框改为垂直堆叠
- 字体大小适当缩小

### 实现关键点

1. **CSS 变量管理**：使用 `:root` 定义颜色、间距、阴影
2. **伪元素装饰**：大量使用 `::before` 和 `::after` 创建缝线效果
3. **iframe 安全**：如在 iframe 中渲染，确保 Google Fonts 可加载
4. **降级优雅**：图片加载失败时显示替代背景色
5. **语义化 HTML**：使用正确的标签（`<header>`, `<section>`, `<footer>`）

### 典型应用场景
- 手工艺品电商（编织、陶艺、木工）
- 家居纺织品商店（床品、桌布、窗帘）
- 时尚服饰品牌（亚麻服、天然纤维）
- 慢生活方式博客/杂志
- 咖啡/烘焙店官网

---

## English Version (en-US)

Create a "Woven & Weft" style handcrafted lifestyle e-commerce landing page, blending woven textures, stitched decorations, and warm fabric aesthetics.

### Core Design Philosophy
A fabric-inspired interface design that creates a warm, slow-living shopping experience through woven texture backgrounds, stitched borders, and handcrafted quality. Suitable for handicraft, home textile, and fashion brands emphasizing texture and craftsmanship.

### Visual Characteristics

**1. Background Texture (Triple Layer)**
```css
body {
  background-color: #f4f1ea; /* Linen base */
  background-image:
    /* Noise texture (grain) */
    url("data:image/svg+xml,...fractalNoise..."),
    /* Vertical weave lines */
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
    /* Horizontal weave lines */
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px);
}
```

**2. Stitched Border Effect**
All cards and containers use dashed borders to simulate stitching:
```css
.stitched-container::after {
  content: '';
  position: absolute;
  inset: 6px; /* Gap from outer border */
  border: 1px dashed rgba(61, 58, 54, 0.2);
  border-radius: 2px;
}
```

**3. Fabric Texture Buttons**
- Button background uses absolutely positioned `.btn-bg` layer to simulate fabric patch
- Interior dashed stitching effect
- Hover: slight scale up (`scale(1.02)`) + brightness increase (`brightness(1.1)`)
- Active: scale down (`scale(0.98)`) + shallow shadow

### Color System

**Primary Palette** (Warm Neutrals):
- Linen Background: `#f4f1ea`
- Card White: `#ffffff`
- Primary Text: `#3d3a36` (deep brown-gray)
- Secondary Text: `#6e6b66` (medium gray-brown)

**Accent Colors** (Earth Tones):
- Denim: `#5f7186` - for category labels
- Clay: `#b87e6b` - for subtitles
- Sage: `#8fa08e` - for Newsletter section

### Typography System

**Font Pairing**:
- Headings: `'Cormorant Garamond', serif` - elegant serif, italic for brand name
- Body: `'Nunito Sans', sans-serif` - modern sans-serif, readable

**Type Scale**:
- Hero Heading: `4.5rem` (adjust to `2.5rem` on mobile)
- Section Heading: `2.5rem`
- Product Title: `1.5rem`
- Small Labels: `0.75rem` (uppercase + letter-spacing `0.1em`)

### Component Design

**1. Product Card**
```html
<div class="stitched-container product-card">
  <div class="product-img-box">
    <img src="..." class="product-img">
  </div>
  <div class="product-info">
    <span class="product-cat">Table Linen</span>
    <h3 class="product-title">Raw Edge Napkins</h3>
    <p class="product-price">$45.00</p>
    <div class="swatches">
      <div class="swatch active" style="background: #e6e2d8;"></div>
      ...
    </div>
    <button class="btn btn-secondary">...</button>
  </div>
</div>
```

**2. Logo Sewn Patch**
```css
.logo::before {
  content: '';
  position: absolute;
  inset: -4px 0;
  background: rgba(255,255,255,0.6);
  z-index: -1;
  transform: rotate(-1deg); /* Slight tilt */
  border: 1px dashed var(--c-thread);
}
```

**3. Navigation Stitched Underline**
```css
nav a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  /* Dashed effect simulating stitching */
  background-image: repeating-linear-gradient(90deg,
    var(--c-accent-clay), var(--c-accent-clay) 4px,
    transparent 4px, transparent 6px);
  transition: width 0.3s ease;
}
nav a:hover::before { width: 100%; }
```

**4. Material Swatches**
- Circular swatches (`18px` diameter)
- Active state shows white pin head effect (`::after` pseudo-element)
```css
.swatch.active::after {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
```

### Animation & Interaction

**Transitions**:
- Uniformly use `cubic-bezier(0.4, 0, 0.2, 1)` easing
- Card hover: `translateY(-2px)` + shadow deepening
- Avoid overly smooth animations, maintain handcrafted feel

**Toast Notification**:
- Fixed at bottom-right
- Elastic entry using `cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- Interior also has stitching decoration (dashed border)

### Layout Structure

**Hero Section**:
- Two-column layout (single column on mobile)
- Right image uses layered borders simulating fabric photo frame:
  - Outer offset background color block (`position: absolute`)
  - Inner image with soft border-radius and shadow

**Product Grid**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}
```

**Newsletter Section**:
- Full-width block, Sage Green background
- Uses 45-degree diagonal texture simulating denim fabric

### Responsive Design

**Mobile (< 768px)**:
- Hero changes to single column, image at top
- Navigation hidden (show hamburger menu)
- Newsletter inputs stack vertically
- Font sizes appropriately reduced

### Implementation Key Points

1. **CSS Variable Management**: Define colors, spacing, shadows in `:root`
2. **Pseudo-Element Decoration**: Extensive use of `::before` and `::after` for stitching effects
3. **iframe Safety**: Ensure Google Fonts can load when rendering in iframe
4. **Graceful Degradation**: Show fallback background color when images fail to load
5. **Semantic HTML**: Use proper tags (`<header>`, `<section>`, `<footer>`)

### Typical Use Cases
- Handicraft e-commerce (weaving, pottery, woodwork)
- Home textile stores (bedding, tablecloths, curtains)
- Fashion brands (linen clothing, natural fibers)
- Slow-living lifestyle blogs/magazines
- Coffee/bakery shop websites
