# Custom Prompt

## 中文版本 (zh-CN)


设计一个遵循 Google Material Design 3 规范的现代化企业应用介面，强调层次感、动态表面和适应性色彩系统。

**核心设计原则**：
- **Material You 动态色彩**：从主题色种子生成完整的色调调色板，支持浅色/深色模式自动切换
- **海拔层级系统**：使用 5 级海拔（0dp、1dp、3dp、6dp、8dp、12dp）表达 UI 层次
- **状态层叠加**：hover、focus、pressed、dragged 状态通过半透明复盖层表达
- **形状系统**：圆角从 0dp（无）到 28dp（完全圆形）的 6 级形状比例

**视觉元素**：
- **表面容器**：带有微妙色调偏移的卡片（Surface、Surface Container、Surface Container High）
- **FAB 浮动按钮**：大型主要操作按钮，带有海拔阴影和涟漪效果
- **导航组件**：Navigation Rail（侧边栏）或 Bottom Navigation（底部导航）
- **Chip 标签**：输入型、过滤型、建议型、辅助型四种变体
- **文字排版**：使用 Roboto 字体家族，遵循 Type Scale（Display、Headline、Title、Body、Label）

**交互动效**：
- **涟漪效果（Ripple）**：所有可点击元素的触摸反馈，从触摸点扩散
- **容器变形**：卡片展开、缩合、位移的流畅动画（300-500ms）
- **共享轴动画**：页面切换时的向前/向后层次过渡
- **强调动画**：重要操作完成时的视觉确认（如勾选动画）

**页面结构**：
1. **顶部应用栏**：标题、导航图标、操作图标，支持滚动时收缩
2. **主内容区**：卡片式布局，使用 8dp 网格系统
3. **底部操作栏**：FAB 按钮和底部导航的组合
4. **抽屉导航**：Modal 或 Standard 抽屉式导航

**色彩方案**：
- 主色：Primary (#6750A4)、On Primary (#FFFFFF)
- 次要色：Secondary (#625B71)、Tertiary (#7D5260)
- 表面：Surface (#FEF7FF)、Surface Container (#F3EDF7)
- 错误：Error (#B3261E)

---

## English Version (en-US)

Design a modern enterprise application interface following Google Material Design 3 specifications, emphasizing layering, dynamic surfaces, and adaptive color systems.

**Core Design Principles**:
- **Material You Dynamic Color**: Generate complete tonal palettes from a seed color, supporting automatic light/dark mode switching
- **Elevation System**: Use 5 elevation levels (0dp, 1dp, 3dp, 6dp, 8dp, 12dp) to express UI hierarchy
- **State Layer Overlay**: Express hover, focus, pressed, dragged states through semi-transparent overlays
- **Shape System**: 6-level shape scale from 0dp (none) to 28dp (fully rounded)

**Visual Elements**:
- **Surface Containers**: Cards with subtle tonal shifts (Surface, Surface Container, Surface Container High)
- **FAB Floating Button**: Large primary action button with elevation shadow and ripple effect
- **Navigation Components**: Navigation Rail (sidebar) or Bottom Navigation
- **Chips**: Input, Filter, Suggestion, Assist - four variant types
- **Typography**: Roboto font family following Type Scale (Display, Headline, Title, Body, Label)

**Interactive Motion**:
- **Ripple Effect**: Touch feedback for all clickable elements, expanding from touch point
- **Container Transform**: Smooth card expand, collapse, displacement animations (300-500ms)
- **Shared Axis Animation**: Forward/backward hierarchy transitions during page navigation
- **Emphasis Animation**: Visual confirmation for important action completion (like checkmark animation)

**Page Structure**:
1. **Top App Bar**: Title, navigation icon, action icons, supports scroll-triggered collapse
2. **Main Content Area**: Card-based layout using 8dp grid system
3. **Bottom Action Bar**: Combination of FAB button and bottom navigation
4. **Drawer Navigation**: Modal or Standard drawer navigation

**Color Scheme**:
- Primary: Primary (#6750A4), On Primary (#FFFFFF)
- Secondary: Secondary (#625B71), Tertiary (#7D5260)
- Surface: Surface (#FEF7FF), Surface Container (#F3EDF7)
- Error: Error (#B3261E)

**Technical Implementation**:
- Use CSS custom properties for dynamic theming with `--md-sys-color-*` tokens
- Apply `box-shadow` with multiple layers for Material elevation
- Implement `@keyframes` for ripple expansion animation
- Use `transition` with `cubic-bezier(0.2, 0, 0, 1)` for Material motion
- Apply `backdrop-filter` for elevated surface tinting
