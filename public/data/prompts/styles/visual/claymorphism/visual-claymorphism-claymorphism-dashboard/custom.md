# Custom Prompt

## 中文版本 (zh-CN)


创建一个具有 **Claymorphism（黏土态）** 风格特征的创意仪表板页面，整体呈现柔软、立体、玩具般的 3D 质感，使用 TailwindCSS 实现现代化的数据可视化和管理界面。

### 核心视觉特征

**黏土质感设计语言**：
- 所有 UI 元素采用柔软、圆润的 3D 凸起效果，模拟真实黏土材质
- 使用多层阴影创造深度感：外部阴影（drop shadow）+ 内部高光（inner highlight）
- 元素边缘采用极度圆润的圆角（border-radius: 24px-48px），营造手工捏制的触感
- 表面质感轻微哑光，避免过于光滑的塑料感
- 3D 凸起效果：使用 `box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5) inset`

**色彩系统**：
- 主色调：柔和的粉彩色系（pastel palette）
  - 背景：浅蓝灰 `#E8EDF5` 或浅紫灰 `#F0EDF6`
  - 主要元素：柔和蓝 `#A8C5E8`、柔和粉 `#F8BBD0`、柔和紫 `#D1C4E9`
  - 强调色：珊瑚橙 `#FFAB91`、薄荷绿 `#A5D6A7`、柠檬黄 `#FFF59D`
- 采用低饱和度色彩（saturation 40-60%），营造柔和亲和感
- 每个数据卡片使用不同色系，但保持整体色调和谐统一
- 阴影颜色与卡片颜色匹配，而非纯黑色（如蓝色卡片用深蓝阴影）

**深度与阴影**：
- 三层阴影系统创造真实立体感：
  - 第一层：柔和扩散阴影 `0 4px 8px rgba(主色, 0.15)`
  - 第二层：较深边缘阴影 `0 12px 24px rgba(主色, 0.12)`
  - 第三层：内部高光 `inset 0 -2px 4px rgba(255,255,255,0.6)`
- 悬停时阴影增强并略微上浮：`transform: translateY(-4px); box-shadow 增大 120%`
- 按压时阴影减弱并下沉：`transform: translateY(2px); box-shadow 减小 70%`

### 页面结构与组件

**仪表板布局**：
```
┌────────────────────────────────────────────────┐
│  [Logo]  仪表板  分析  报告  设定   [Profile] │ ← 顶部导航栏（黏土质感）
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  欢迎回来，Tom！                         │  │ ← Hero 区域（柔和背景渐变）
│  │  这是您今日的数据概览                   │  │
│  │  [查看详情]（黏土按钮）                 │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ 📊 销售│ │ 👥 用户│ │ 💰 收益│ │ 📈 增长│  │ ← 统计卡片网格（4 列）
│  │ 12,345 │ │ 8,921  │ │ $45.2K │ │ +23.5% │  │   每个卡片不同色彩
│  │ +12.3% │ │ +5.7%  │ │ +18.9% │ │ 本月   │  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────┐  │
│  │  📊 月度趋势图      │ │  🎯 目标进度    │  │ ← 图表区域（大卡片）
│  │  [折线图区域]       │ │  [环形进度条]   │  │
│  │                     │ │  完成度：78%    │  │
│  └─────────────────────┘ └─────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  最近活动                                │  │ ← 活动列表（时间轴）
│  │  ○ 新订单 #1234 - 2分钟前              │  │
│  │  ○ 用户注册 - 15分钟前                  │  │
│  │  ○ 付款成功 - 1小时前                   │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**顶部导航栏（Navbar）**：
- 整体采用浅色黏土质感，带有柔和凸起效果
- 导航项目采用圆润胶囊形状（pill shape），当前页面用更深的凸起表示
- Logo 区域使用彩色黏土徽章效果
- 用户头像采用 3D 圆形凸起，带有彩色边框

**统计卡片（Stat Cards）**：
- 每个卡片采用不同的粉彩色系（蓝、粉、紫、橙）
- 卡片内部结构：
  - 顶部：大号 emoji 图标（用作视觉识别）
  - 中部：超大数字（48px+），使用粗体字重
  - 底部：小型趋势指标（百分比 + 箭头图标）
- 卡片悬停时整体上浮 4px，阴影扩大
- 内部元素（数字、图标）也具有细微的内嵌黏土效果

**数据图表卡片**：
- 更大的黏土容器（min-height: 400px）
- 图表区域使用柔和的背景色分层
- 图表线条采用圆润的线帽（stroke-linecap: round）
- 数据点使用小型黏土球体标记
- 图例标签采用黏土标签样式（rounded pill）

**活动时间轴**：
- 每个活动项目是独立的黏土卡片
- 左侧圆点标记使用渐变色黏土球
- 时间戳采用柔和灰色文字
- 悬停时整个项目略微凸起

### 互动与动画效果

**黏土弹性动画**：
```css
/* 按钮点击时的黏土弹性效果 */
.clay-button:active {
  animation: clay-squish 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes clay-squish {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(0.95) translateY(2px); }
  100% { transform: scale(1) translateY(0); }
}
```

**悬停效果**：
- 卡片悬停时：`transform: translateY(-4px); box-shadow 放大至 120%`
- 过渡时间：`transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)`（弹性缓动）
- 内部元素（图标、数字）同时放大 5%：`transform: scale(1.05)`

**载入状态**：
- 骨架屏使用浅色黏土卡片，带有柔和的脉动动画
- 脉动效果：`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
- 数据更新时使用柔和的淡入效果

**微互动细节**：
- 数字更新时使用滚动计数器动画（countUp effect）
- 百分比变化时带有颜色过渡（绿色增长、红色下降）
- 图表数据点悬停时显示黏土工具提示框
- 开关切换使用黏土滑块效果（slider knob 是 3D 球体）

### 技术实现细节

**核心 CSS 样式**：
```css
/* 基础黏土卡片类 */
.clay-card {
  background: linear-gradient(135deg, #E8EDF5 0%, #F0EDF6 100%);
  border-radius: 32px;
  padding: 32px;
  box-shadow:
    0 8px 16px rgba(168, 197, 232, 0.15),
    0 12px 32px rgba(168, 197, 232, 0.12),
    inset 0 -2px 8px rgba(255, 255, 255, 0.6),
    inset 0 2px 4px rgba(209, 196, 233, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 黏土按钮 */
.clay-button {
  background: linear-gradient(135deg, #FFAB91 0%, #FF8A65 100%);
  border-radius: 24px;
  padding: 16px 32px;
  box-shadow:
    0 6px 12px rgba(255, 171, 145, 0.25),
    0 2px 4px rgba(255, 138, 101, 0.35),
    inset 0 -1px 3px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.7);
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 统计数字 */
.clay-stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 53, 177, 0.3));
}
```

**TailwindCSS 配置扩展**：
```javascript
// tailwind.config.js 中添加黏土效果
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay': '0 8px 16px rgba(168,197,232,0.15), 0 12px 32px rgba(168,197,232,0.12), inset 0 -2px 8px rgba(255,255,255,0.6)',
        'clay-hover': '0 12px 24px rgba(168,197,232,0.2), 0 18px 48px rgba(168,197,232,0.15), inset 0 -2px 8px rgba(255,255,255,0.7)',
        'clay-pressed': '0 2px 4px rgba(168,197,232,0.15), inset 0 2px 8px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'clay': '32px',
        'clay-sm': '24px',
        'clay-lg': '48px',
      },
      colors: {
        'clay-blue': '#A8C5E8',
        'clay-pink': '#F8BBD0',
        'clay-purple': '#D1C4E9',
        'clay-coral': '#FFAB91',
        'clay-mint': '#A5D6A7',
        'clay-lemon': '#FFF59D',
        'clay-bg': '#E8EDF5',
      }
    }
  }
}
```

**响应式设计**：
- 桌面端（≥1024px）：统计卡片 4 列网格布局
- 平板端（768px-1023px）：统计卡片 2 列网格
- 移动端（<768px）：统计卡片单列堆叠
- 图表区域在移动端堆叠显示，并调整高度适应小屏幕

**无障碍考量**：
- 所有黏土元素保持足够的色彩对比度（WCAG AA 标准）
- 互动元素提供清晰的焦点指示器（focus ring 使用黏土风格）
- 图表提供替代文本描述
- 支持键盘导航，Tab 顺序符合逻辑

**性能优化**：
- 使用 CSS `will-change: transform` 优化动画性能
- 避免同时动画过多属性（仅使用 transform 和 opacity）
- 图表使用 Canvas 而非 SVG 以提升大数据集渲染性能
- 懒加载非首屏图表组件

### 设计目标与用户体验

**情感化设计**：
- 黏土质感带来友好、亲和、非威胁性的视觉体验
- 适合创意工作室、教育平台、儿童产品的仪表板场景
- 柔和色彩降低长时间使用的视觉疲劳
- 玩具般的质感让数据分析变得更有趣、更平易近人

**品牌适配性**：
- 适合年轻化、创意驱动的品牌形象
- 强调人性化、易用性、趣味性
- 可通过调整主色调适应不同品牌色系
- 保持专业度的同时不失亲和力

---

## English Version (en-US)

Create a creative dashboard page with **Claymorphism** style characteristics, presenting a soft, three-dimensional, toy-like 3D texture, using TailwindCSS to implement a modern data visualization and management interface.

### Core Visual Characteristics

**Clay Texture Design Language**:
- All UI elements feature soft, rounded 3D raised effects that simulate real clay material
- Use multi-layered shadows to create depth: outer shadow (drop shadow) + inner highlight
- Element edges use extremely rounded corners (border-radius: 24px-48px) to create a hand-sculpted touch
- Surface texture is slightly matte, avoiding overly smooth plastic feel
- 3D raised effect: `box-shadow: 0 8px 16px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5) inset`

**Color System**:
- Main palette: soft pastel colors
  - Background: light blue-gray `#E8EDF5` or light purple-gray `#F0EDF6`
  - Primary elements: soft blue `#A8C5E8`, soft pink `#F8BBD0`, soft purple `#D1C4E9`
  - Accent colors: coral orange `#FFAB91`, mint green `#A5D6A7`, lemon yellow `#FFF59D`
- Use low saturation colors (saturation 40-60%) to create soft affinity
- Each data card uses different color schemes while maintaining overall harmonious tone
- Shadow colors match card colors rather than pure black (e.g., blue cards use deep blue shadows)

**Depth & Shadows**:
- Three-layer shadow system creates realistic three-dimensionality:
  - First layer: soft diffused shadow `0 4px 8px rgba(primary-color, 0.15)`
  - Second layer: deeper edge shadow `0 12px 24px rgba(primary-color, 0.12)`
  - Third layer: inner highlight `inset 0 -2px 4px rgba(255,255,255,0.6)`
- Hover state: shadows enhance and slightly float up: `transform: translateY(-4px); box-shadow increases 120%`
- Pressed state: shadows diminish and sink down: `transform: translateY(2px); box-shadow decreases 70%`

### Page Structure & Components

**Dashboard Layout**:
```
┌────────────────────────────────────────────────┐
│  [Logo] Dashboard Analytics Reports Settings  │ ← Top navbar (clay texture)
│                                     [Profile]  │
├────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐  │
│  │  Welcome back, Tom!                      │  │ ← Hero section (soft gradient bg)
│  │  Here's your daily data overview         │  │
│  │  [View Details] (clay button)            │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ 📊 Sales│ │ 👥 Users│ │ 💰 Revenue│ │ 📈 Growth│ ← Stat cards grid (4 cols)
│  │ 12,345 │ │ 8,921  │ │ $45.2K │ │ +23.5% │  │   Each card different color
│  │ +12.3% │ │ +5.7%  │ │ +18.9% │ │ Monthly│  │
│  └────────┘ └────────┘ └────────┘ └────────┘  │
│                                                  │
│  ┌─────────────────────┐ ┌─────────────────┐  │
│  │  📊 Monthly Trends  │ │  🎯 Goal Progress│ ← Chart area (large cards)
│  │  [Line chart area]  │ │  [Ring progress] │  │
│  │                     │ │  Completion: 78% │  │
│  └─────────────────────┘ └─────────────────┘  │
│                                                  │
│  ┌──────────────────────────────────────────┐  │
│  │  Recent Activities                       │  │ ← Activity timeline
│  │  ○ New order #1234 - 2 mins ago         │  │
│  │  ○ User registration - 15 mins ago      │  │
│  │  ○ Payment successful - 1 hour ago      │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

**Top Navigation Bar (Navbar)**:
- Overall light clay texture with soft raised effect
- Navigation items use rounded pill shapes, current page shown with deeper raise
- Logo area uses colorful clay badge effect
- User avatar uses 3D circular raise with colored border

**Stat Cards**:
- Each card uses different pastel color scheme (blue, pink, purple, orange)
- Card internal structure:
  - Top: large emoji icon (used for visual identification)
  - Middle: extra-large number (48px+), using bold font weight
  - Bottom: small trend indicator (percentage + arrow icon)
- Card hovers up 4px on hover, shadow expands
- Internal elements (numbers, icons) also have subtle inset clay effect

**Data Chart Cards**:
- Larger clay containers (min-height: 400px)
- Chart area uses soft background color layering
- Chart lines use rounded line caps (stroke-linecap: round)
- Data points marked with small clay spheres
- Legend labels use clay label style (rounded pill)

**Activity Timeline**:
- Each activity item is an independent clay card
- Left side circular markers use gradient clay balls
- Timestamps use soft gray text
- Entire item slightly raises on hover

### Interaction & Animation Effects

**Clay Elastic Animation**:
```css
/* Clay elastic effect on button click */
.clay-button:active {
  animation: clay-squish 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes clay-squish {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(0.95) translateY(2px); }
  100% { transform: scale(1) translateY(0); }
}
```

**Hover Effects**:
- Card hover: `transform: translateY(-4px); box-shadow increases to 120%`
- Transition time: `transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` (elastic easing)
- Internal elements (icons, numbers) simultaneously scale up 5%: `transform: scale(1.05)`

**Loading States**:
- Skeleton screens use light clay cards with soft pulsing animation
- Pulse effect: `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
- Data updates use soft fade-in effect

**Micro-interaction Details**:
- Number updates use rolling counter animation (countUp effect)
- Percentage changes come with color transitions (green for growth, red for decline)
- Chart data points show clay tooltip boxes on hover
- Toggle switches use clay slider effect (slider knob is a 3D sphere)

### Technical Implementation Details

**Core CSS Styles**:
```css
/* Base clay card class */
.clay-card {
  background: linear-gradient(135deg, #E8EDF5 0%, #F0EDF6 100%);
  border-radius: 32px;
  padding: 32px;
  box-shadow:
    0 8px 16px rgba(168, 197, 232, 0.15),
    0 12px 32px rgba(168, 197, 232, 0.12),
    inset 0 -2px 8px rgba(255, 255, 255, 0.6),
    inset 0 2px 4px rgba(209, 196, 233, 0.3);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Clay button */
.clay-button {
  background: linear-gradient(135deg, #FFAB91 0%, #FF8A65 100%);
  border-radius: 24px;
  padding: 16px 32px;
  box-shadow:
    0 6px 12px rgba(255, 171, 145, 0.25),
    0 2px 4px rgba(255, 138, 101, 0.35),
    inset 0 -1px 3px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.7);
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Stat numbers */
.clay-stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #5E35B1 0%, #7E57C2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 53, 177, 0.3));
}
```

**TailwindCSS Config Extension**:
```javascript
// Add clay effects in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'clay': '0 8px 16px rgba(168,197,232,0.15), 0 12px 32px rgba(168,197,232,0.12), inset 0 -2px 8px rgba(255,255,255,0.6)',
        'clay-hover': '0 12px 24px rgba(168,197,232,0.2), 0 18px 48px rgba(168,197,232,0.15), inset 0 -2px 8px rgba(255,255,255,0.7)',
        'clay-pressed': '0 2px 4px rgba(168,197,232,0.15), inset 0 2px 8px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'clay': '32px',
        'clay-sm': '24px',
        'clay-lg': '48px',
      },
      colors: {
        'clay-blue': '#A8C5E8',
        'clay-pink': '#F8BBD0',
        'clay-purple': '#D1C4E9',
        'clay-coral': '#FFAB91',
        'clay-mint': '#A5D6A7',
        'clay-lemon': '#FFF59D',
        'clay-bg': '#E8EDF5',
      }
    }
  }
}
```

**Responsive Design**:
- Desktop (≥1024px): 4-column grid layout for stat cards
- Tablet (768px-1023px): 2-column grid for stat cards
- Mobile (<768px): single-column stacking for stat cards
- Chart areas stack vertically on mobile with adjusted heights for smaller screens

**Accessibility Considerations**:
- All clay elements maintain sufficient color contrast (WCAG AA standard)
- Interactive elements provide clear focus indicators (focus ring uses clay style)
- Charts provide alternative text descriptions
- Support keyboard navigation with logical tab order

**Performance Optimization**:
- Use CSS `will-change: transform` to optimize animation performance
- Avoid animating too many properties simultaneously (only use transform and opacity)
- Charts use Canvas instead of SVG for better rendering performance with large datasets
- Lazy load non-above-the-fold chart components

### Design Goals & User Experience

**Emotional Design**:
- Clay texture brings friendly, approachable, non-threatening visual experience
- Suitable for dashboards in creative studios, educational platforms, children's products
- Soft colors reduce visual fatigue during extended use
- Toy-like texture makes data analysis more fun and approachable

**Brand Adaptability**:
- Suitable for youthful, creativity-driven brand images
- Emphasizes humanization, usability, and playfulness
- Can be adapted to different brand color schemes by adjusting primary colors
- Maintains professionalism while keeping approachability
