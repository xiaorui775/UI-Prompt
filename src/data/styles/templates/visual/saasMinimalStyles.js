export const saasMinimalStyles = [
  {
    id: 'saas-minimal',
    title: 'styles.modern.saas-minimal.title',
    description: 'styles.modern.saas-minimal.description',
    features: {
      'zh-CN': ['大面积留白', '细边框分隔线', '低饱和灰阶', '单一强调色', '清晰层级', '专业克制'],
      'en-US': ['Generous Whitespace', 'Thin Borders', 'Low-saturation Grayscale', 'Single Accent Color', 'Clear Hierarchy', 'Professional Restraint']
    },
    useCases: {
      'zh-CN': ['知识管理', '任务管理', '文档协作', '开发者工具', '数据分析'],
      'en-US': ['Knowledge Management', 'Task Management', 'Document Collaboration', 'Developer Tools', 'Data Analytics']
    },
    tags: ['enterprise', 'minimal', 'saas'],
    primaryCategory: 'visualDesign',
    categories: ['visualDesign'],
    relatedStyles: ['swiss-design', 'material-design', 'apple-design'],
    demoHTML: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS Minimal Preview</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
      background: #FAFBFC;
      color: #1F2937;
      padding: 32px;
    }

    .saas-preview {
      max-width: 600px;
      margin: 0 auto;
    }

    .saas-title {
      font-size: 20px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 24px;
    }

    /* Button Group */
    .button-group {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }

    .saas-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 6px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .saas-btn-primary {
      background: #6366F1;
      color: white;
      border-color: #6366F1;
    }

    .saas-btn-primary:hover {
      background: #5558E3;
    }

    .saas-btn-secondary {
      background: white;
      color: #374151;
      border-color: #E5E7EB;
    }

    .saas-btn-secondary:hover {
      background: #F9FAFB;
      border-color: #D1D5DB;
    }

    .saas-btn-ghost {
      background: transparent;
      color: #6B7280;
      border-color: transparent;
    }

    .saas-btn-ghost:hover {
      background: #F9FAFB;
      color: #374151;
    }

    /* Stat Cards */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }

    .stat-card {
      background: white;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      padding: 20px;
      transition: all 0.2s ease;
    }

    .stat-card:hover {
      border-color: #D1D5DB;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }

    .stat-value {
      font-size: 28px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 13px;
      color: #6B7280;
      margin-bottom: 8px;
    }

    .stat-trend {
      font-size: 12px;
      color: #059669;
    }

    /* Search Input */
    .search-wrapper {
      margin-bottom: 24px;
    }

    .saas-search {
      width: 100%;
      padding: 10px 14px;
      font-size: 14px;
      color: #1F2937;
      background: white;
      border: 1px solid #E5E7EB;
      border-radius: 6px;
      transition: all 0.15s ease;
    }

    .saas-search:focus {
      outline: none;
      border-color: #6366F1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .saas-search::placeholder {
      color: #9CA3AF;
    }

    /* Document List */
    .doc-list {
      list-style: none;
      background: white;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      overflow: hidden;
    }

    .doc-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid #F3F4F6;
      transition: background 0.15s;
    }

    .doc-item:last-child {
      border-bottom: none;
    }

    .doc-item:hover {
      background: #FAFBFC;
    }

    .doc-name {
      font-size: 14px;
      color: #374151;
      font-weight: 500;
    }

    /* Badges */
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 4px 10px;
      font-size: 12px;
      font-weight: 500;
      border-radius: 12px;
      border: 1px solid;
    }

    .badge-success {
      background: #ECFDF5;
      color: #059669;
      border-color: #D1FAE5;
    }

    .badge-warning {
      background: #FEF3C7;
      color: #D97706;
      border-color: #FDE68A;
    }

    .badge-info {
      background: #EEF2FF;
      color: #6366F1;
      border-color: #C7D2FE;
    }
  </style>
</head>
<body>
  <div class="saas-preview">
    <h2 class="saas-title">SaaS Dashboard</h2>

    <!-- Button Group -->
    <div class="button-group">
      <button class="saas-btn saas-btn-primary">Create</button>
      <button class="saas-btn saas-btn-secondary">Edit</button>
      <button class="saas-btn saas-btn-ghost">Delete</button>
    </div>

    <!-- Stat Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">247</div>
        <div class="stat-label">Documents</div>
        <div class="stat-trend">↑ 12% this month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">18</div>
        <div class="stat-label">Team Members</div>
        <div class="stat-trend">↑ 2 new this week</div>
      </div>
    </div>

    <!-- Search Input -->
    <div class="search-wrapper">
      <input type="text" class="saas-search" placeholder="Search documentation...">
    </div>

    <!-- Document List -->
    <ul class="doc-list">
      <li class="doc-item">
        <span class="doc-name">API Guide</span>
        <span class="badge badge-success">Published</span>
      </li>
      <li class="doc-item">
        <span class="doc-name">Tutorial</span>
        <span class="badge badge-warning">Draft</span>
      </li>
      <li class="doc-item">
        <span class="doc-name">Overview</span>
        <span class="badge badge-info">In Review</span>
      </li>
    </ul>
  </div>
</body>
</html>
    `,
    // 使用 demoHTML 作為完整頁面預覽(包含完整的 HTML 和內聯樣式)
    fullPageHTML: '',  // 留空,使用 demoHTML
    fullPageStyles: '',  // 樣式已內聯在 demoHTML 的 <style> 標籤中
    // SaaS Minimal 風格 StylePrompt（較長版，貼近 core 設計說明）
    stylePrompt: {
      'zh-CN': `角色：你是一位专精于企业级 SaaS 极简设计的 UI 设计师，需要为知识库、任务管理或开发者工具构建一套「极简但有强烈秩序感」的仪表板界面。

场景定位：
界面主要用于中大型团队的日常协作与信息管理：查看文档、管理任务、阅读报表、协调项目。用户希望界面看起来专业、克制、可信赖，能够承载复杂信息却不显得沉重。使用场景往往是长时间的工作与阅读，而非短暂浏览，因此需要同时兼顾可读性与视觉耐久性。

视觉设计理念：
SaaS Minimal 强调「大面积留白 + 低饱和灰阶 + 单一品牌色」的设计语言。背景几乎始终保持浅灰或接近白色，内容区通过细边框、轻阴影和对齐良好的栅格来组织信息。品牌色（通常是一种稳定的蓝色或紫色）只用于主操作按钮、关键状态和重要链接，避免多种强调色造成视觉噪音。界面给人的第一感觉应是干净、有逻辑且可靠。

材质与质感：
整体材质偏向扁平与轻量化：卡片与面板大多为纯色浅底，搭配 1px 的浅灰边框和微弱阴影。阴影更多用于分离层级而非制造立体质感，通常是 0–1 像素高度的小阴影（例如 0 1px 3px rgba(0,0,0,0.04)）。输入框、按钮和徽章的圆角在 4–8px 之间，既不会过于硬朗，也不会变成完全圆形，保持理性、理工气质。色彩上避免高饱和度和强对比，文字多用深灰而非纯黑。

交互体验：
交互节奏要干净、直接、不打扰用户思考。按钮 hover 时的反馈主要体现在背景色略微加深、阴影略微增强或边框颜色变得清晰，而不是夸张的位移与放大。输入框聚焦时通过品牌色描边与淡淡的外圈阴影提示当前输入位置，同时遵守可访问性对比要求。表格行在悬停时使用轻微背景高亮，帮助用户在横向阅读长表头时保持行对齐。动画时长保持在 120–200ms 左右，曲线可以采用 ease-out 或标准系统缓动曲线，整体感觉是「流畅但不戏剧化」。

氛围营造：
整体氛围是现代、理性、偏冷静的企业工作台：页面中充满结构化内容、清晰层级和适量的统计信息，但视觉语言始终保持收敛。大面积留白让每个模块周围都有呼吸空间，减轻信息密度带来的压力；单一品牌色保证长期使用时不会产生「视觉疲劳」。用户在使用该界面时，应感到「这里是一个可以放心托付业务的工具」，而不是短期活动页或视觉实验项目。`,
      'en-US': `Role: You are a UI designer focused on enterprise SaaS minimalism, designing a dashboard for knowledge management, task tracking, or developer tooling where clarity and order are critical.

Scenario Positioning:
The interface is used by teams to manage documents, projects, and operational metrics on a daily basis. Users expect a professional, restrained, trustworthy look that can host complex information without feeling heavy. Sessions are often long—reading, editing, navigating—so readability and long‑term comfort are just as important as first impressions.

Visual Design Philosophy:
SaaS Minimal emphasizes “generous whitespace + low‑saturation grays + a single accent color”. Backgrounds stay almost entirely light and neutral; information is organized using thin dividers, subtle borders, and a well‑defined grid. A single brand color (often a blue or purple) is reserved for primary actions, key states, and important links, avoiding multi‑accent chaos. The first impression should be “clean, logical, reliable”.

Materials & Textures:
The visual material is light and flat. Cards and panels are mostly solid light surfaces with 1px soft gray borders and very subtle shadows. Shadows exist to separate layers, not to simulate heavy depth—think 0 1px 3px rgba(0,0,0,0.04). Inputs, buttons, and badges use small, consistent radii (around 4–8px) to feel modern and precise without being harsh. Colors avoid strong saturation; text is typically deep gray instead of pure black to reduce eye strain.

Interaction Experience:
Interactions should be straightforward and non‑intrusive. Hover states primarily adjust background tone, border color, and shadow intensity rather than causing large movement. Focus states for inputs use the accent color and a soft outline to clearly indicate cursor position while maintaining accessibility contrast. Table rows highlight gently on hover to support horizontal scanning across wide tables. Animation durations remain short (120–200ms) with standard easing curves so the interface feels responsive but never theatrical.

Atmosphere:
The atmosphere is that of a modern, rational workbench: structured content, clear hierarchy, and measured use of metrics. Whitespace gives breathing room around each module, counterbalancing data density. The single accent color ties the system together and avoids long‑term visual fatigue. Users should feel that this is a dependable tool they can live in for hours each day, not a one‑off campaign site or visual experiment.`
    },
    // 將原本 prompt 字段提升為 customPrompt，供 AI Prompt 使用
    customPrompt: {
      'zh-CN': `【全页预览设计文档】

【风格概述】

风格名称: SaaS 极简主义
设计理念: 企业级 SaaS 产品的极简设计风格,通过大面积留白、低饱和灰阶和单一强调色,创造清晰、专业、高效的用户界面。强调内容优先、减少视觉干扰、提升信息传达效率。

【配色方案】

主色调低饱和灰阶 (#FAFBFC 背景, #F9FAFB 次级背景, #FFFFFF 卡片背景)、文字灰阶 (#111827 标题, #374151 正文, #6B7280 次要文字, #9CA3AF 辅助文字)、边框灰阶 (#E5E7EB 主边框, #F3F4F6 次边框, #D1D5DB 深边框)、强调色紫色 (#6366F1 主要强调, #5558E3 悬停状态, #EEF2FF 浅背景, #C7D2FE 浅边框)、功能色成功绿 (#059669, #ECFDF5, #D1FAE5)、警告黄 (#D97706, #FEF3C7, #FDE68A)

【此预览主题】

模拟现代知识库/文档管理平台,展示企业级 SaaS 产品的专业设计。包含侧边导航、顶部面包屑、全局搜索、文档编辑器、数据统计卡片、表格视图、团队协作等核心功能模块,完整呈现 SaaS Minimal 风格的设计特点。

【核心 SaaS Minimal 特征】

1. 大面积留白：组件间距 24-32px、内边距充足、内容区域宽敞、视觉呼吸感强
2. 细边框分隔：1px 边框、低对比度边框色、微妙的视觉分隔、不喧宾夺主
3. 低饱和灰阶：背景色浅灰系、文字色深灰系、避免纯黑和纯白、柔和视觉体验
4. 单一强调色：紫色 #6366F1 作为唯一品牌色、用于主要操作和状态、保持视觉一致性
5. 清晰视觉层级：标题 28px、小标题 16px、正文 14px、辅助文字 12px、字重明确区分
6. 专业克制设计：无多余装饰、功能优先、交互明确、符合企业级审美
7. 微妙交互反馈：悬停状态轻微背景变化、聚焦状态紫色边框和阴影、过渡动画 0.15s
8. 一致的圆角：卡片 8px、按钮 6px、输入框 6px、徽章 12px、头像 50%

【页面结构】

此预览页面包含 8 个核心区域,完整展示了 SaaS Minimal 风格的所有方面:

1. 侧边导航栏 (240px 固定宽度)
   - Logo 品牌区域
   - 多层级菜单导航
   - 激活状态指示
   - 图标 + 文字组合
   - 设置入口

2. 顶部导航栏 (60px 高度)
   - 面包屑路径导航
   - 全局搜索框
   - 用户信息和菜单

3. 主内容区域 (响应式布局)
   - 页面标题和描述
   - 按钮样式展示 (Primary/Secondary/Ghost)
   - 表单输入组件
   - 数据统计卡片网格
   - 文档列表表格
   - 团队活动时间线

4. 按钮系统
   - Primary Button: 紫色背景、白色文字、用于主要操作
   - Secondary Button: 白色背景、灰色边框、用于次要操作
   - Ghost Button: 透明背景、用于辅助操作
   - 带图标按钮组合

5. 表单元素
   - 文本输入框: 细边框、聚焦时紫色边框 + 阴影
   - 下拉选择框: 与输入框样式一致
   - 复选框: 紫色主题、清晰的选中状态

6. 数据展示
   - 统计卡片: 大数字 + 趋势指示 + 图标
   - 表格视图: 斑马纹、悬停高亮、清晰的表头
   - 徽章标签: 不同状态的颜色编码

7. 交互组件
   - 模态对话框: 居中显示、阴影层叠、清晰的头部/内容/尾部分区
   - 下拉菜单: 浮动面板、微妙阴影、分隔线
   - 搜索建议: 实时反馈

8. 协作元素
   - 用户头像: 圆形、渐变色背景、缩写字母
   - 活动时间线: 时间戳、用户信息、操作描述

【视觉特征】

排版设计:
- 标题使用 28px 粗体,营造层级感
- 正文使用 14px 常规字重,确保可读性
- 行高 1.5-1.6,提供舒适阅读体验
- 字体使用系统默认字体栈,保证跨平台一致性

色彩运用:
- 背景采用浅灰色 #FAFBFC,减少眼睛疲劳
- 文字使用深灰色而非纯黑,更加柔和
- 紫色作为唯一强调色,用于按钮、链接、激活状态
- 功能色用于状态指示 (成功、警告、信息)

空间布局:
- 侧边栏固定 240px,主内容区域自适应
- 内容区左右留白 32px,顶部留白 32px
- 卡片内边距 24px,提供充足呼吸空间
- 组件间距 20-32px,创造视觉分组

边框样式:
- 主边框 1px solid #E5E7EB,微妙分隔
- 次边框 1px solid #F3F4F6,更加轻盈
- 悬停时边框颜色略微加深
- 聚焦时边框颜色变为紫色

阴影效果:
- 卡片悬停: 轻微阴影 0 1px 3px rgba(0,0,0,0.04)
- 下拉菜单: 明显阴影 0 10px 15px rgba(0,0,0,0.1)
- 模态框: 强阴影 0 20px 25px rgba(0,0,0,0.1)
- 输入框聚焦: 紫色阴影 0 0 0 3px rgba(99,102,241,0.1)

【技术实现要点】

1. 响应式设计: 使用 Flexbox 和 Grid 实现自适应布局
2. 性能优化: CSS transition 仅作用于 transform/opacity 属性
3. 可访问性:
   - 颜色对比度符合 WCAG AA 标准
   - 键盘导航支持
   - 语义化 HTML 标签
   - ARIA 属性支持
4. 交互细节:
   - 0.15s 过渡动画,流畅但不拖沓
   - 悬停状态明确,提供即时反馈
   - 聚焦状态清晰,支持键盘操作
   - 禁用状态透明度降低

【使用此预览页面的建议】

设计参考:
- 观察留白比例,学习如何通过空间创造层次感
- 注意边框和阴影的微妙运用,避免过度设计
- 学习单一强调色的使用策略,保持视觉一致性
- 理解文字大小和字重的层级关系

开发实现:
- 复制核心 CSS 变量定义
- 提取可复用组件样式 (按钮、输入框、卡片)
- 参考响应式布局实现
- 学习交互状态的实现方式

交互体验:
- 体验各种悬停效果的触发
- 测试表单输入的聚焦状态
- 尝试打开模态框和下拉菜单
- 观察状态切换的过渡动画

品牌定制:
- 将紫色 #6366F1 替换为品牌色
- 调整灰阶色彩以匹配品牌调性
- 修改圆角大小以适配设计风格
- 调整间距以符合内容密度需求

提示: 使用浏览器开发者工具检查元素,查看完整的 CSS 样式和 HTML 结构实现细节。注意观察悬停和聚焦状态的样式变化,学习如何通过微妙的视觉反馈提升用户体验。`,
      'en-US': `【Full Page Preview Design Documentation】

【Style Overview】

Style Name: SaaS Minimal
Design Philosophy: Minimalist design style for enterprise SaaS products, creating clear, professional, and efficient user interfaces through generous whitespace, low-saturation grayscale, and single accent color. Emphasizes content-first approach, reduces visual clutter, and improves information delivery efficiency.

【Color Scheme】

Primary Grayscale Low-saturation (#FAFBFC background, #F9FAFB secondary background, #FFFFFF card background), Text Grayscale (#111827 titles, #374151 body, #6B7280 secondary text, #9CA3AF helper text), Border Grayscale (#E5E7EB primary border, #F3F4F6 secondary border, #D1D5DB dark border), Accent Color Purple (#6366F1 primary accent, #5558E3 hover state, #EEF2FF light background, #C7D2FE light border), Functional Colors Success Green (#059669, #ECFDF5, #D1FAE5), Warning Yellow (#D97706, #FEF3C7, #FDE68A)

【Preview Theme】

Simulates a modern knowledge base/document management platform, showcasing professional design for enterprise SaaS products. Includes sidebar navigation, top breadcrumbs, global search, document editor, data statistic cards, table view, team collaboration, and other core functional modules, fully presenting the design characteristics of SaaS Minimal style.

【Core SaaS Minimal Features】

1. Generous Whitespace: Component spacing 24-32px, ample padding, spacious content areas, strong visual breathing room
2. Thin Borders: 1px borders, low-contrast border colors, subtle visual separation, non-intrusive
3. Low-saturation Grayscale: Light gray backgrounds, dark gray text, avoid pure black and white, soft visual experience
4. Single Accent Color: Purple #6366F1 as the only brand color, used for primary actions and states, maintain visual consistency
5. Clear Visual Hierarchy: Title 28px, subtitle 16px, body 14px, helper text 12px, clear font-weight distinction
6. Professional Restraint: No unnecessary decoration, function-first, clear interactions, meets enterprise aesthetics
7. Subtle Interaction Feedback: Hover states with slight background changes, focus states with purple border and shadow, 0.15s transition animations
8. Consistent Border Radius: Cards 8px, buttons 6px, inputs 6px, badges 12px, avatars 50%

【Page Structure】

This preview page contains 8 core areas, fully demonstrating all aspects of SaaS Minimal style:

1. Sidebar Navigation (240px fixed width)
   - Logo brand area
   - Multi-level menu navigation
   - Active state indication
   - Icon + text combination
   - Settings entry

2. Top Navigation Bar (60px height)
   - Breadcrumb path navigation
   - Global search box
   - User info and menu

3. Main Content Area (responsive layout)
   - Page title and description
   - Button style showcase (Primary/Secondary/Ghost)
   - Form input components
   - Data statistic card grid
   - Document list table
   - Team activity timeline

4. Button System
   - Primary Button: Purple background, white text, for primary actions
   - Secondary Button: White background, gray border, for secondary actions
   - Ghost Button: Transparent background, for auxiliary actions
   - Icon + button combination

5. Form Elements
   - Text input: Thin border, purple border + shadow on focus
   - Select dropdown: Consistent with input style
   - Checkbox: Purple theme, clear checked state

6. Data Display
   - Statistic cards: Large numbers + trend indicators + icons
   - Table view: Zebra stripes, hover highlight, clear headers
   - Badge tags: Color-coded different states

7. Interactive Components
   - Modal dialog: Centered display, shadow layering, clear header/content/footer sections
   - Dropdown menu: Floating panel, subtle shadow, dividers
   - Search suggestions: Real-time feedback

8. Collaboration Elements
   - User avatars: Circular, gradient background, abbreviated letters
   - Activity timeline: Timestamps, user info, action descriptions

【Visual Features】

Typography:
- Titles use 28px bold to create hierarchy
- Body text uses 14px regular weight to ensure readability
- Line height 1.5-1.6 for comfortable reading
- Font uses system default font stack for cross-platform consistency

Color Usage:
- Background uses light gray #FAFBFC to reduce eye fatigue
- Text uses dark gray instead of pure black for softer appearance
- Purple as the only accent color for buttons, links, active states
- Functional colors for status indication (success, warning, info)

Spatial Layout:
- Sidebar fixed 240px, main content area responsive
- Content area left/right padding 32px, top padding 32px
- Card padding 24px for ample breathing space
- Component spacing 20-32px to create visual grouping

Border Styles:
- Primary border 1px solid #E5E7EB for subtle separation
- Secondary border 1px solid #F3F4F6 for lighter appearance
- Border color slightly darkens on hover
- Border color changes to purple on focus

Shadow Effects:
- Card hover: Subtle shadow 0 1px 3px rgba(0,0,0,0.04)
- Dropdown menu: Noticeable shadow 0 10px 15px rgba(0,0,0,0.1)
- Modal: Strong shadow 0 20px 25px rgba(0,0,0,0.1)
- Input focus: Purple shadow 0 0 0 3px rgba(99,102,241,0.1)

【Technical Implementation Points】

1. Responsive Design: Use Flexbox and Grid for adaptive layout
2. Performance Optimization: CSS transitions only affect transform/opacity properties
3. Accessibility:
   - Color contrast meets WCAG AA standards
   - Keyboard navigation support
   - Semantic HTML tags
   - ARIA attribute support
4. Interaction Details:
   - 0.15s transition animations, smooth but not sluggish
   - Clear hover states for immediate feedback
   - Clear focus states for keyboard operation support
   - Reduced opacity for disabled states

【Suggestions for Using This Preview Page】

Design Reference:
- Observe whitespace ratios to learn how to create hierarchy through space
- Notice subtle use of borders and shadows to avoid over-design
- Learn strategies for using a single accent color to maintain visual consistency
- Understand hierarchical relationships of text sizes and weights

Development Implementation:
- Copy core CSS variable definitions
- Extract reusable component styles (buttons, inputs, cards)
- Reference responsive layout implementation
- Learn implementation methods for interaction states

Interaction Experience:
- Experience triggering various hover effects
- Test focus states of form inputs
- Try opening modals and dropdown menus
- Observe transition animations for state changes

Brand Customization:
- Replace purple #6366F1 with brand color
- Adjust grayscale colors to match brand tone
- Modify border radius to fit design style
- Adjust spacing to meet content density requirements

Tip: Use browser developer tools to inspect elements and view complete CSS styles and HTML structure implementation details. Pay attention to style changes in hover and focus states to learn how to enhance user experience through subtle visual feedback.`
    }
  }
];
