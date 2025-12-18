# Custom Prompt

## 中文版本 (zh-CN)


设计一个仿 Android 14 系统设置的 Material You 风格介面，展现 Google 最新的动态主题和触感设计语言。

**核心视觉特征**：
- **动态取色系统**：从壁纸提取主题色，生成 13 种色调变体（Tone 0-100）
- **大圆角卡片**：28dp 超大圆角的设置分组卡片
- **沉浸式列表**：带有图标、标题、副标题、开关的设置项列表
- **触感反馈区域**：大面积可点击区域，明确的点击态反馈

**页面元素**：
1. **大型标题区**：
   - 可折叠的大标题（展开时 34sp，收起时 22sp）
   - 搜索栏入口
   - 用户头像快捷入口

2. **设置分组卡片**：
   - 圆角容器包裹相关设置项
   - 分组标题使用主题色
   - 卡片之间 16dp 间距

3. **设置项样式**：
   - 图标（24dp 圆形背景 + 图标）
   - 双行文字（标题 16sp + 描述 14sp）
   - 右侧控件（开关、箭头、数值）
   - 48dp 最小高度

4. **快捷开关区**：
   - 2x4 网格的快捷磁贴
   - 圆角药丸形状
   - 长按展开详情

**交互细节**：
- 点击时背景颜色渐变（50ms 淡入）
- 开关切换带有物理弹性动画
- 卡片展开时内容平滑推移
- 滚动时标题栏平滑收缩

**色彩方案**（基于蓝色种子色）：
- Primary Container: #D3E4FF
- On Primary Container: #001C38
- Surface: #FDFBFF
- Surface Variant: #E0E2EC
- Outline: #74777F

**字体规范**：
- 大标题：Google Sans, 34sp, Medium
- 卡片标题：Google Sans, 14sp, Medium
- 设置项标题：Roboto, 16sp, Regular
- 设置项描述：Roboto, 14sp, Regular, 0.6 opacity

---

## English Version (en-US)

Design an Android 14 system settings-style Material You interface, showcasing Google's latest dynamic theming and tactile design language.

**Core Visual Features**:
- **Dynamic Color Extraction**: Extract theme color from wallpaper, generate 13 tonal variants (Tone 0-100)
- **Large Rounded Cards**: 28dp extra-large rounded corner settings group cards
- **Immersive Lists**: Settings item lists with icons, titles, subtitles, and switches
- **Tactile Feedback Areas**: Large clickable areas with clear pressed state feedback

**Page Elements**:
1. **Large Title Area**:
   - Collapsible large title (34sp expanded, 22sp collapsed)
   - Search bar entry point
   - User avatar quick access

2. **Settings Group Cards**:
   - Rounded containers wrapping related settings
   - Group titles using theme color
   - 16dp spacing between cards

3. **Settings Item Style**:
   - Icon (24dp circular background + icon)
   - Two-line text (Title 16sp + Description 14sp)
   - Right-side controls (switch, arrow, value)
   - 48dp minimum height

4. **Quick Toggles Area**:
   - 2x4 grid of quick tiles
   - Rounded pill shape
   - Long-press to expand details

**Interaction Details**:
- Background color gradient on tap (50ms fade-in)
- Switch toggle with physical spring animation
- Card expansion with smooth content displacement
- Title bar smooth collapse on scroll

**Color Scheme** (based on blue seed color):
- Primary Container: #D3E4FF
- On Primary Container: #001C38
- Surface: #FDFBFF
- Surface Variant: #E0E2EC
- Outline: #74777F

**Typography Specs**:
- Large Title: Google Sans, 34sp, Medium
- Card Title: Google Sans, 14sp, Medium
- Item Title: Roboto, 16sp, Regular
- Item Description: Roboto, 14sp, Regular, 0.6 opacity

**Technical Implementation**:
- Use CSS `border-radius: 28px` for large rounded cards
- Apply `transition: background-color 50ms ease-out` for tap feedback
- Implement sticky positioning for collapsible header
- Use CSS Grid `repeat(4, 1fr)` for quick toggles layout
- Apply `overscroll-behavior: contain` for nested scroll areas
