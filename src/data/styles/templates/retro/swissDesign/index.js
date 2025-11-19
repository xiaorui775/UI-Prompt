// Swiss Design Family Aggregator
// 瑞士设计家族聚合器

import { swissDesign } from './swissDesign'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.swissDesign.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.swissDesign.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Swiss Design 瑞士设计」核心样式卡展示界面风格高度接近的 UI。
要求：保持严谨网格系统、极简二色配色（黑 / 白 + 瑞士红）和理性排版秩序，只允许替换文案与模块内容，不改变整体结构与排版逻辑。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 设计工作室 / 建筑事务所 / 艺术机构的官网或作品集列表页
- 现代主义主题专题页、展览介绍页
- 需要表达「理性、专业、秩序感」的品牌界面

【整体布局结构】
1. 网格基础
   - 使用明确的列系统（如 12 列网格）和固定的列间距（例如基于 8px 或 12px 的倍数）。
   - 所有文字块、图片块都对齐到网格，避免任意漂移。
2. 版面分区
   - 顶部为简洁的 Logo + 导航栏，通常左对齐 Logo，右侧为少量导航链接。
   - 中部为主视觉标题区，可以是大字号标题 + 少量说明文字。
   - 下方使用网格排列项目卡片 / 文案模块，形成清晰列表或分区。
3. 非对称平衡
   - 打破绝对左右对称，通过块状排布和留白形成平衡，而不是居中一切元素。

【色彩与材质】
1. 配色系统
   - 主要采用黑白二色：纯黑 #000000、纯白 #FFFFFF 作为主前景 / 背景色。
   - 瑞士红 #E30613 作为唯一大面积强调色，用于标题、标记条或关键按钮。
   - 若需要灰度，可使用少量浅灰（如 #E5E5E5）作为分隔线或辅助背景。
2. 质感与风格
   - 整体保持扁平、无阴影、无渐变、无纹理的现代主义平面设计。
   - 不使用拟物或玻璃效果，依靠排版与色块本身形成视觉张力。

【排版与网格】
1. 字体系统
   - 使用无衬线字体（如 Helvetica / Inter / SF Pro）作为主体字体。
   - 标题字号可在 48–72px 範圍，正文在 14–16px，辅文更小。
2. 对齐与间距
   - 全局采用左对齐排版，避免居中对齐造成的摇摆感。
   - 使用统一的行距和段落间距（例如基于 8px 的倍数），让内容有明确节奏。

【交互与动效】
1. Hover
   - 按钮和链接在悬停时以线条变粗、下划线出现或背景块轻微变暗 / 变亮为主，避免夸张动效。
2. 动画
   - 若需要过渡，可使用非常克制的位移或淡入动画（150–250ms），保持「干净、理性」的视觉感受。

【输出要求】
- 使用语义化 HTML（header / nav / main / section / footer）组织内容。
- 使用 TailwindCSS 风格原子类实现网格（grid / flex）、间距和排版，并确保所有模块对齐到统一网格。
- 生成结果必须保留「严格网格 + 黑白 + 瑞士红 + 左对齐排版」这些关键特征，让人一眼看出是瑞士设计风格。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a Swiss Design style interface that looks very close to the current “Swiss Design” core style card demo.
Keep the strict grid system, minimal black/white + Swiss red palette and rational typographic order. You may change copy and module content, but you should not change the overall structure or typographic logic. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Websites or portfolios for design studios, architecture offices or art institutions
- Modernist-themed campaign pages or exhibition intros
- Brand interfaces that must communicate rationality, professionalism and order

[Layout structure]
1. Grid foundation
   - Use a clear column system (for example a 12-column grid) with fixed gutters based on 8px or 12px increments.
   - All text blocks and images should align to this grid; avoid arbitrary offsets.
2. Page zones
   - Top area: simple logo plus navigation, typically left-aligned logo with a small set of links on the right.
   - Middle: a primary headline area with large type and a short supporting description.
   - Below: project cards or content modules arranged on the grid, forming clear lists or sections.
3. Asymmetric balance
   - Break perfect left/right symmetry; instead, use block positions and whitespace to create visual balance.

[Color and materials]
1. Palette
   - Primary: pure black (#000000) and pure white (#FFFFFF) as main foreground/background.
   - Accent: Swiss red (#E30613) as the single strong accent color for headings, bars or key buttons.
   - Optional: a very light grey (such as #E5E5E5) for rules or subtle backgrounds.
2. Style
   - Keep everything flat: no shadows, gradients or textures.
   - Avoid skeuomorphic or glassmorphism effects; let typography and colored blocks carry the design.

[Typography and grid]
1. Type system
   - Use sans-serif fonts (Helvetica, Inter, SF Pro or similar) for all copy.
   - Headings may range around 48–72px, body text around 14–16px, with smaller sizes for secondary labels.
2. Alignment and spacing
   - Rely on left-aligned text to avoid a wobbly feel from center alignment.
   - Use consistent line heights and vertical spacing based on an 8px unit to establish rhythm.

[Interaction and motion]
1. Hover
   - Indicate hover states with bolder lines, emerging underlines or slight background tone shifts, rather than large animations.
2. Motion
   - If transitions are used, keep them subtle (150–250ms fades or small shifts) so the interface remains clean and rational.

[Output requirements]
- Use semantic HTML (header / nav / main / section / footer) to structure content.
- Use Tailwind-style utilities for grid/flex layout, spacing and typography, ensuring all modules snap to a shared grid.
- The generated UI must preserve “strict grid + black/white + Swiss red + left-aligned typography” as key traits so it is immediately recognizable as Swiss Design.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名服务于设计工作室、建筑事务所和艺术机构的 UI 设计师，需要向非设计背景的同事说明 Swiss Design 瑞士设计家族的网页风格。

场景定位：这种风格适合作品集列表页、展览 / 项目介绍、品牌介绍页等，强调理性、专业、信息清晰，用来承载较多文本和图像内容，同时保持视觉上的秩序感。

视觉设计理念：界面建立在严格的网格系统之上：固定列宽和统一间距决定所有模块的位置，标题、图片和段落都对齐到同一基线。版式避免居中堆叠，而采用左对齐、块状组合和大面积留白，以构成「非对称但平衡」的现代主义平面设计。

材质与质感：整体保持绝对扁平，没有阴影、渐变和纹理，依靠色块和排版本身塑造节奏。颜色主要是黑与白，搭配少量瑞士红作为强调——例如用作标题、侧栏色块或关键按钮；灰度只承担分隔线和背景层次的辅助角色。

交互体验：交互反馈保持克制且功能导向：链接和按钮在悬停时可能略微改变文本粗细、出现细线下划线或轻度背景反差，而不会出现大幅缩放或复杂动效。若需要过渡，可使用简短的淡入淡出或位移，以保持界面冷静、理性。

整体氛围：Swiss Design 家族带来的是专业、克制和高度可读的视觉印象。用户进入页面时，不会被花哨特效分散注意力，而是很快理解信息结构，感受到品牌的秩序感和严谨态度。`,
  'en-US': `Role: You are a UI designer working for studios, architecture offices and art institutions, and you need to explain the Swiss Design family to teammates who are not designers.

Scene: This style suits portfolio lists, exhibition or project introductions and brand overview pages where clarity, professionalism and typographic order are more important than decorative effects.

Visual philosophy: The interface is built on a strict grid with fixed columns and consistent gutters. All elements—headlines, images and paragraphs—snap to this system. Instead of centered stacking, layouts rely on left-aligned blocks, asymmetry and generous whitespace to create a modernist, balanced composition.

Material and texture: The design is fully flat: no shadows, gradients or textures. Black and white dominate, with Swiss red used sparingly as a strong accent for headings, sidebars or key actions. Greys play a supporting role as dividers or subtle backgrounds, never competing with the primary palette.

Interaction experience: Interactions are calm and functional. Links or buttons may gain weight, a fine underline or a slight tone shift on hover, but not large scale changes or complex animations. When transitions are needed, they are short, minimal fades or small shifts so the layout remains composed.

Overall mood: The Swiss Design family signals precision, restraint and high readability. Users should immediately sense structure and hierarchy, trusting that content is organized and the brand is thoughtful and disciplined.`}

// Template list (templates that users can browse)
export const swissDesignTemplates = [
  swissDesign
]

export default swissDesignTemplates
