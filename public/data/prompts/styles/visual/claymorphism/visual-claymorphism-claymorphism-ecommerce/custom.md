# Custom Prompt

## 中文版本 (zh-CN)


创建一个具有 **Claymorphism（黏土态）电商展示** 风格的在线商店页面，使用柔软的 3D 黏土质感呈现产品卡片、购物车和结帐流程，营造童趣且亲和力十足的购物体验，使用 TailwindCSS 实现。

### 核心视觉特征

**黏土质感电商设计语言**：
- 产品卡片采用蓬松柔软的 3D 凸起效果，像手工捏制的黏土展示架
- 使用多层阴影系统：外部柔和阴影 + 内部高光反射，创造真实黏土材质
- 所有按钮、标签、徽章均采用圆润的胶囊形状（border-radius: 20px-40px）
- 颜色饱和度控制在 40-60%，避免过于刺眼的对比
- 悬停时产品卡片整体上浮并轻微弹跳，模拟黏土弹性触感

**电商专属色彩系统**：
- 背景色：温暖的米白色 `#FAF9F6` 或浅米黄 `#FFF8E7`，营造温馨购物氛围
- 产品卡片色系：
  - 粉彩蓝 `#B3D9FF` - 电子产品类
  - 粉彩粉 `#FFD1DC` - 时尚服饰类
  - 粉彩绿 `#C1F0C1` - 健康食品类
  - 粉彩紫 `#E6D5F5` - 美妆护肤类
  - 粉彩黄 `#FFF4B8` - 家居生活类
- 价格标签使用醒目的珊瑚橙 `#FF8066` 或鲜亮的玫瑰红 `#FF6B9D`
- 「加入购物车」按钮使用充满活力的薄荷绿 `#7FE8C3` 或柠檬黄 `#FFE66D`
- 折扣标签使用高饱和度的橙红色 `#FF6347`，带有 3D 浮雕效果

**黏土材质深度效果**：
- 产品卡片阴影：
  ```css
  box-shadow:
    0 8px 20px rgba(product-color, 0.18),
    0 4px 8px rgba(product-color, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(product-color, 0.2);
  ```
- 悬停时阴影增强 150% 并上浮 6px
- 按钮点击时下沉 2px 并阴影缩小至 60%，模拟按压黏土的触感
- 徽章和标签使用更强烈的内嵌阴影，营造「刻印」效果

### 页面结构与组件

**电商页面布局**：
```
┌──────────────────────────────────────────────────┐
│ [Logo] 商店 分类 特惠 关于 [搜索] [购物车(3)] │ ← 顶部导航栏（黏土质感）
├──────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────┐   │
│ │ 🎉 春季大促销 - 全场 7 折！              │   │ ← 促销横幅（彩色黏土条）
│ │ [立即选购]（跳动的黏土按钮）              │   │
│ └────────────────────────────────────────────┘   │
│                                                    │
│ [电子产品] [服饰] [美妆] [食品] [家居]           │ ← 分类标签（黏土胶囊）
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🎧    │ │ 👕    │ │ 💄    │ │ 📱    │         │
│ │产品名称│ │产品名称│ │产品名称│ │产品名称│         │ ← 产品网格（黏土卡片）
│ │★★★★☆ │ │★★★★★ │ │★★★☆☆ │ │★★★★☆ │         │
│ │$99.99 │ │$49.99 │ │$29.99 │ │$199  │         │
│ │[加入购物车]│ │[加入购物车]│ │[加入购物车]│ │[加入购物车]│
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🏡    │ │ 🍎    │ │ 👟    │ │ 🎮    │         │
│ │[热卖]  │ │[新品]  │ │[-30%] │ │[限量]  │         │ ← 更多产品（含徽章标签）
│ │...    │ │...    │ │...    │ │...    │         │
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ [载入更多] （黏土按钮）                           │
└──────────────────────────────────────────────────┘
```

**顶部导航栏（Navbar）**：
- 整体采用柔和的奶油白黏土质感，带有轻微凸起
- Logo 区域使用彩色黏土徽章效果，带有品牌主色渐变
- 导航项目采用圆润胶囊形状，当前页面用更深的凸起和颜色强调
- 搜索框采用内嵌黏土效果（inset shadow），输入时边缘发光
- 购物车图标带有红色黏土数字徽章（悬浮在右上角）

**促销横幅（Promo Banner）**：
- 使用渐变色黏土条（从粉橙到粉红）
- 文字采用 3D 凸起效果，带有轻微的投影
- CTA 按钮使用跳动动画（bounce animation），吸引用户注意
- 横幅两侧可选择添加装饰性的黏土形状（圆点、星星）

**分类标签（Category Pills）**：
- 每个分类采用不同色彩的黏土胶囊
- 选中状态：胶囊凸起并带有脉动动画
- 未选中状态：胶囊稍微内嵌，颜色较浅
- 悬停时胶囊轻微放大（scale: 1.05）并增加阴影

**产品卡片（Product Cards）**：
- 整体结构：
  - 顶部：产品图片（圆角，带有黏土相框效果）
  - 中部：
    - 产品名称（粗体，16-18px）
    - 评分星级（使用黄色黏土星星）
    - 简短描述（灰色，14px）
  - 底部：
    - 价格标签（大号，橙色渐变）
    - 「加入购物车」按钮（黏土质感，薄荷绿或柠檬黄）
- 徽章标签（Badge Labels）：
  - 热卖：红色黏土标签，右上角
  - 新品：蓝色黏土标签，左上角
  - 折扣：橙色黏土标签，带有「-30%」文字
  - 限量：紫色黏土标签，闪烁动画
- 悬停效果：
  - 整个卡片上浮 6px
  - 阴影增大 150%
  - 产品图片轻微缩放（scale: 1.08）
  - 「加入购物车」按钮颜色加深并带有脉动效果

**购物车侧边栏（Shopping Cart Sidebar）**：
- 从右侧滑入的黏土面板（backdrop 使用半透明黏土质感）
- 购物车项目列表：
  - 每个商品采用小型黏土卡片
  - 左侧：产品缩略图（圆角）
  - 中间：产品名称 + 数量控制器（黏土 +/- 按钮）
  - 右侧：价格（橙色）+ 删除按钮（红色黏土 X）
- 底部区域：
  - 总计金额（大号，带有黄色高光）
  - 「结帐」按钮（绿色黏土，全宽，带有微动画）

### 互动与动画效果

**产品卡片弹跳动画**：
```css
/* 悬停时的弹跳效果 */
.product-card:hover {
  animation: clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes clay-bounce {
  0% { transform: translateY(0) scale(1); }
  30% { transform: translateY(-8px) scale(1.02); }
  50% { transform: translateY(-6px) scale(1.03); }
  70% { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(-6px) scale(1.03); }
}
```

**加入购物车动画**：
- 点击「加入购物车」按钮时：
  1. 按钮下沉并触发「按压黏土」动画
  2. 产品图标飞向购物车图标（飞行轨迹带有弹性曲线）
  3. 购物车数字徽章弹跳并数字增加
  4. 显示黏土质感的成功提示（toast notification）

**分类切换动画**：
- 点击分类标签时，新产品卡片使用交错淡入动画（stagger fade-in）
- 每个卡片延迟 50ms 出现，从上到下、从左到右
- 出现时带有轻微的缩放和上浮效果

**徽章脉动动画**：
```css
/* 限量徽章的脉动效果 */
.badge-limited {
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 8px rgba(138, 43, 226, 0.3); }
  50% { transform: scale(1.1); box-shadow: 0 6px 12px rgba(138, 43, 226, 0.5); }
}
```

**价格标签闪烁效果**：
- 折扣价格带有轻微的「闪光扫过」动画（shine sweep）
- 使用 CSS `linear-gradient` 和 `background-position` 实现

### 技术实现细节

**核心 CSS 样式**：
```css
/* 产品卡片基础类 */
.product-card-clay {
  background: linear-gradient(135deg, #FFD1DC 0%, #FFC0CB 100%);
  border-radius: 28px;
  padding: 24px;
  box-shadow:
    0 8px 20px rgba(255, 192, 203, 0.18),
    0 4px 8px rgba(255, 192, 203, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(255, 192, 203, 0.2);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 加入购物车按钮 */
.add-to-cart-btn {
  background: linear-gradient(135deg, #7FE8C3 0%, #5FD4A0 100%);
  border-radius: 20px;
  padding: 12px 24px;
  box-shadow:
    0 6px 12px rgba(127, 232, 195, 0.3),
    0 2px 4px rgba(95, 212, 160, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.08),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.add-to-cart-btn:hover {
  background: linear-gradient(135deg, #5FD4A0 0%, #3FB87C 100%);
  box-shadow:
    0 8px 16px rgba(127, 232, 195, 0.4),
    0 4px 8px rgba(95, 212, 160, 0.5),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.9);
  transform: translateY(-2px) scale(1.02);
}

/* 徽章标签 */
.badge-clay {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #FF6347 0%, #FF4500 100%);
  border-radius: 16px;
  padding: 6px 12px;
  box-shadow:
    0 4px 8px rgba(255, 99, 71, 0.4),
    inset 0 -1px 2px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 700;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* 评分星星 */
.rating-stars-clay {
  display: inline-flex;
  gap: 4px;
}

.star-clay {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 2px 3px rgba(255, 215, 0, 0.4));
}

/* 价格标签 */
.price-tag-clay {
  font-size: 28px;
  font-weight: 900;
  background: linear-gradient(135deg, #FF8066 0%, #FF6B9D 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(255, 128, 102, 0.4));
  position: relative;
}

.price-tag-clay::before {
  content: '$';
  font-size: 18px;
  vertical-align: super;
}
```

**TailwindCSS 配置扩展**：
```javascript
// tailwind.config.js 中添加电商黏土效果
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay-product': '0 8px 20px rgba(255,192,203,0.18), 0 4px 8px rgba(255,192,203,0.12), inset 0 -3px 6px rgba(255,255,255,0.7)',
        'clay-product-hover': '0 12px 30px rgba(255,192,203,0.25), 0 6px 12px rgba(255,192,203,0.18), inset 0 -3px 6px rgba(255,255,255,0.8)',
        'clay-button': '0 6px 12px rgba(127,232,195,0.3), inset 0 -1px 2px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8)',
        'clay-badge': '0 4px 8px rgba(255,99,71,0.4), inset 0 -1px 2px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.6)',
      },
      colors: {
        'clay-product-pink': '#FFD1DC',
        'clay-product-blue': '#B3D9FF',
        'clay-product-green': '#C1F0C1',
        'clay-product-purple': '#E6D5F5',
        'clay-product-yellow': '#FFF4B8',
        'clay-price': '#FF8066',
        'clay-cart-btn': '#7FE8C3',
        'clay-badge-hot': '#FF6347',
        'clay-bg-warm': '#FAF9F6',
      },
      animation: {
        'clay-bounce': 'clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'pulse-badge': 'pulse-badge 2s ease-in-out infinite',
      },
      keyframes: {
        'clay-bounce': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-8px) scale(1.02)' },
          '50%': { transform: 'translateY(-6px) scale(1.03)' },
          '70%': { transform: 'translateY(-8px) scale(1.02)' },
          '100%': { transform: 'translateY(-6px) scale(1.03)' },
        },
        'pulse-badge': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 8px rgba(138, 43, 226, 0.3)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 6px 12px rgba(138, 43, 226, 0.5)' },
        },
      },
    }
  }
}
```

**响应式设计**：
- 桌面端（≥1280px）：产品网格 4 列
- 大平板端（1024px-1279px）：产品网格 3 列
- 小平板端（768px-1023px）：产品网格 2 列
- 移动端（<768px）：产品网格 1 列（卡片更大，图片更突出）
- 购物车侧边栏在移动端改为全屏模态框

**无障碍考量**：
- 所有产品卡片提供 aria-label 描述产品信息
- 「加入购物车」按钮提供视觉和触觉反馈（vibration API）
- 价格标签使用足够的色彩对比度（WCAG AA）
- 评分星星提供替代文本（「4.5 out of 5 stars」）
- 徽章标签颜色编码不作为唯一信息传达方式（附带文字）

**性能优化**：
- 产品图片使用懒加载（Intersection Observer）
- 无限滚动加载采用虚拟滚动技术（仅渲染可见区域）
- 动画使用 `will-change: transform` 优化性能
- 购物车状态使用 localStorage 持久化，减少 API 调用

### 设计目标与用户体验

**情感化购物体验**：
- 黏土质感营造轻松、无压力的购物氛围
- 童趣的视觉风格降低购物决策焦虑
- 柔和色彩让用户愿意长时间浏览商品
- 玩具般的互动效果增加购物乐趣

**适用场景**：
- 儿童玩具电商平台
- 手工艺品和创意商品商店
- 健康食品和有机产品店
- 时尚配饰和小众品牌电商
- 适合追求差异化和年轻化品牌形象的商家

**品牌价值传达**：
- 强调产品的手工感和独特性
- 传递友好、温暖、可信赖的品牌形象
- 吸引追求个性化和趣味性的年轻消费者
- 通过视觉差异化在竞争激烈的电商市场中脱颖而出

---

## English Version (en-US)

Create an online store page with **Claymorphism E-commerce** style, using soft 3D clay texture to present product cards, shopping cart, and checkout process, creating a playful and highly approachable shopping experience using TailwindCSS.

### Core Visual Characteristics

**Clay Texture E-commerce Design Language**:
- Product cards feature puffy soft 3D raised effects, like hand-sculpted clay display shelves
- Use multi-layer shadow system: outer soft shadow + inner highlight reflection, creating realistic clay material
- All buttons, labels, badges use rounded capsule shapes (border-radius: 20px-40px)
- Color saturation controlled at 40-60%, avoiding overly harsh contrasts
- Product cards float up and bounce slightly on hover, simulating clay elastic touch

**E-commerce Specific Color System**:
- Background: warm off-white `#FAF9F6` or light cream `#FFF8E7`, creating cozy shopping atmosphere
- Product card color schemes:
  - Pastel blue `#B3D9FF` - Electronics category
  - Pastel pink `#FFD1DC` - Fashion apparel category
  - Pastel green `#C1F0C1` - Health food category
  - Pastel purple `#E6D5F5` - Beauty cosmetics category
  - Pastel yellow `#FFF4B8` - Home living category
- Price tags use eye-catching coral orange `#FF8066` or bright rose red `#FF6B9D`
- "Add to Cart" button uses vibrant mint green `#7FE8C3` or lemon yellow `#FFE66D`
- Discount labels use high-saturation orange-red `#FF6347` with 3D embossed effect

**Clay Material Depth Effect**:
- Product card shadow:
  ```css
  box-shadow:
    0 8px 20px rgba(product-color, 0.18),
    0 4px 8px rgba(product-color, 0.12),
    inset 0 -3px 6px rgba(255, 255, 255, 0.7),
    inset 0 1px 3px rgba(product-color, 0.2);
  ```
- Hover state: shadow increases 150% and floats up 6px
- Button click: sinks 2px and shadow shrinks to 60%, simulating pressing clay touch
- Badges and labels use stronger inset shadows, creating "imprinted" effect

### Page Structure & Components

**E-commerce Page Layout**:
```
┌──────────────────────────────────────────────────┐
│ [Logo] Shop Categories Deals About [Search] [Cart(3)] │ ← Top navbar (clay texture)
├──────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────┐   │
│ │ 🎉 Spring Sale - 30% Off Everything!      │   │ ← Promo banner (colorful clay bar)
│ │ [Shop Now] (bouncing clay button)          │   │
│ └────────────────────────────────────────────┘   │
│                                                    │
│ [Electronics] [Fashion] [Beauty] [Food] [Home]   │ ← Category pills (clay capsules)
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🎧    │ │ 👕    │ │ 💄    │ │ 📱    │         │
│ │Product│ │Product│ │Product│ │Product│         │ ← Product grid (clay cards)
│ │★★★★☆ │ │★★★★★ │ │★★★☆☆ │ │★★★★☆ │         │
│ │$99.99 │ │$49.99 │ │$29.99 │ │$199  │         │
│ │[Add Cart]│ │[Add Cart]│ │[Add Cart]│ │[Add Cart]│
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐         │
│ │ 🏡    │ │ 🍎    │ │ 👟    │ │ 🎮    │         │
│ │[Hot]   │ │[New]   │ │[-30%]  │ │[Limited]│       │ ← More products (with badge labels)
│ │...    │ │...    │ │...    │ │...    │         │
│ └───────┘ └───────┘ └───────┘ └───────┘         │
│                                                    │
│ [Load More] (clay button)                         │
└──────────────────────────────────────────────────┘
```

**Top Navigation Bar (Navbar)**:
- Overall soft cream white clay texture with slight raise
- Logo area uses colorful clay badge effect with brand primary color gradient
- Navigation items use rounded pill shapes, current page shown with deeper raise and color emphasis
- Search box uses inset clay effect (inset shadow), edges glow on input
- Shopping cart icon with red clay number badge (floating on top right)

**Promo Banner**:
- Use gradient clay bar (from pink-orange to pink)
- Text uses 3D raised effect with slight drop shadow
- CTA button uses bounce animation to attract user attention
- Optional decorative clay shapes on banner sides (dots, stars)

**Category Pills**:
- Each category uses different colored clay capsule
- Selected state: capsule raises with pulsing animation
- Unselected state: capsule slightly inset, lighter color
- Hover: capsule slightly enlarges (scale: 1.05) with increased shadow

**Product Cards**:
- Overall structure:
  - Top: product image (rounded corners with clay frame effect)
  - Middle:
    - Product name (bold, 16-18px)
    - Rating stars (yellow clay stars)
    - Short description (gray, 14px)
  - Bottom:
    - Price tag (large, orange gradient)
    - "Add to Cart" button (clay texture, mint green or lemon yellow)
- Badge Labels:
  - Hot: red clay label, top right
  - New: blue clay label, top left
  - Discount: orange clay label with "-30%" text
  - Limited: purple clay label with blinking animation
- Hover effects:
  - Entire card floats up 6px
  - Shadow increases 150%
  - Product image slight zoom (scale: 1.08)
  - "Add to Cart" button darkens with pulsing effect

**Shopping Cart Sidebar**:
- Clay panel sliding in from right (backdrop uses semi-transparent clay texture)
- Cart item list:
  - Each item uses small clay card
  - Left: product thumbnail (rounded)
  - Middle: product name + quantity controller (clay +/- buttons)
  - Right: price (orange) + remove button (red clay X)
- Bottom area:
  - Total amount (large, with yellow highlight)
  - "Checkout" button (green clay, full width, with micro-animation)

### Interaction & Animation Effects

**Product Card Bounce Animation**:
```css
/* Bounce effect on hover */
.product-card:hover {
  animation: clay-bounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes clay-bounce {
  0% { transform: translateY(0) scale(1); }
  30% { transform: translateY(-8px) scale(1.02); }
  50% { transform: translateY(-6px) scale(1.03); }
  70% { transform: translateY(-8px) scale(1.02); }
  100% { transform: translateY(-6px) scale(1.03); }
}
```

**Add to Cart Animation**:
- When "Add to Cart" button is clicked:
  1. Button sinks and triggers "press clay" animation
  2. Product icon flies towards cart icon (flight path with elastic curve)
  3. Cart number badge bounces and number increases
  4. Show clay-textured success toast notification

**Category Switch Animation**:
- When clicking category pill, new product cards use staggered fade-in animation
- Each card appears with 50ms delay, top to bottom, left to right
- Appear with slight scale and float-up effect

**Badge Pulsing Animation**:
```css
/* Pulsing effect for limited badge */
.badge-limited {
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 8px rgba(138, 43, 226, 0.3); }
  50% { transform: scale(1.1); box-shadow: 0 6px 12px rgba(138, 43, 226, 0.5); }
}
```

**Price Tag Shine Effect**:
- Discount prices have slight "shine sweep" animation
- Implemented using CSS `linear-gradient` and `background-position`

### Technical Implementation Details

[CSS styles and technical details provided in Chinese version above - same technical implementation]

**Responsive Design**:
- Desktop (≥1280px): 4-column product grid
- Large tablet (1024px-1279px): 3-column product grid
- Small tablet (768px-1023px): 2-column product grid
- Mobile (<768px): 1-column product grid (larger cards, more prominent images)
- Shopping cart sidebar becomes full-screen modal on mobile

**Accessibility Considerations**:
- All product cards provide aria-label describing product information
- "Add to Cart" button provides visual and tactile feedback (vibration API)
- Price tags use sufficient color contrast (WCAG AA)
- Rating stars provide alternative text ("4.5 out of 5 stars")
- Badge label colors not used as sole information delivery method (accompanied by text)

**Performance Optimization**:
- Product images use lazy loading (Intersection Observer)
- Infinite scroll uses virtual scrolling technique (only render visible area)
- Animations use `will-change: transform` for performance optimization
- Cart state persisted using localStorage, reducing API calls

### Design Goals & User Experience

**Emotional Shopping Experience**:
- Clay texture creates relaxed, pressure-free shopping atmosphere
- Playful visual style reduces shopping decision anxiety
- Soft colors encourage users to browse products for extended periods
- Toy-like interactive effects add shopping fun

**Applicable Scenarios**:
- Children's toy e-commerce platforms
- Handcrafted and creative product stores
- Health food and organic product shops
- Fashion accessories and niche brand e-commerce
- Suitable for merchants pursuing differentiation and youthful brand image

**Brand Value Communication**:
- Emphasize product's handcrafted feel and uniqueness
- Convey friendly, warm, trustworthy brand image
- Attract young consumers pursuing personalization and playfulness
- Stand out in competitive e-commerce market through visual differentiation
