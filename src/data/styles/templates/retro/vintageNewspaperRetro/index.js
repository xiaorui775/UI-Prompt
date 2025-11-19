// Vintage Newspaper Family Aggregator
// 复古报纸家族聚合器

import { vintageNewspaper } from './vintageNewspaper'
import { demoHTML, customStyles as demoCustomStyles } from './Demo'

// Demo UI for style card display
export const name = 'styles.retro.vintageNewspaperRetro.title'
export const demoUI = demoHTML
export const customStyles = demoCustomStyles
export const description = 'styles.retro.vintageNewspaperRetro.description'

// Family-level customPrompt (简短 Prompt，100-300字)
export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Vintage Newspaper」核心样式卡展示界面风格高度接近的复古报纸风 UI。
要求：保持多栏报纸排版、米黄色纸张质感、黑白为主的印刷配色和适度的旧化效果，只允许替换标题、文章内容和模块顺序，不改变整体排版系统与视觉气质。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 新闻媒体 / 文学杂志的专题页或栏目页
- 历史档案、年表时间线、文化项目展示页
- 需要呈现「纸质报刊 / 文献档案」氛围的内容型界面

【整体布局结构】
1. 页面框架
   - 整体仿照一张 A3 / A2 报纸版面，周围留出窄边距作为纸张边缘。
   - 顶部为报头区域，包含报纸标题、副标与日期信息；下方为多栏内容区域。
2. 多栏排版
   - 使用 2–3 栏内容布局，每栏宽度接近，间距固定，模拟传统排版网格。
   - 重要标题可以跨栏铺排，次级标题和正文限制在单栏之内。
3. 内容模块
   - 常见模块包括：头条文章、次要新闻、侧边小栏目、引语 / 评论框等。

【色彩与材质】
1. 配色
   - 纸张底色：米黄色 / 浅棕色（例如 #F4E8C1、#EBD9B5），整体略带旧化感。
   - 文字：主文本为纯黑 #000000；次要信息可用深棕或深灰。
   - 装饰线条：深棕 (#4A3C31) 或深灰用于分隔线、边框与小图标。
2. 质感
   - 为背景加入细微纸张纹理与颗粒噪点，模拟印刷纸质感。
   - 可在局部添加淡淡的折痕、磨损或咖啡渍效果，但不影响正文可读性。

【排版与层级】
1. 标题层级
   - 报头字体较大，使用粗衬线字体；文章标题次之，副标题再小一档。
   - 正文行宽适中，行距略紧，以营造「内容密集」感。
2. 对齐与分隔
   - 文本主体左右对齐（两端对齐）以贴近报纸排版视觉。
   - 使用横线、双线、点线等分隔版块，避免视觉混乱。

【交互与动效】
1. Hover
   - 链接在悬停时可以加粗或增加简单下划线，但避免现代高亮色块。
   - 卡片 / 版块 hover 时可略微提亮背景或加重边框，模拟「翻阅」的关注效果。
2. 动效
   - 动画应极为克制，可使用轻微淡入或滚动出现效果，避免浮夸动效破坏纸媒氛围。

【输出要求】
- 使用语义化 HTML（header / main / article / aside / footer）搭建报纸式结构。
- 使用 TailwindCSS 风格原子类控制多栏布局（grid / columns）、间距与排版。
- 生成结果必须保留「米黄色纸张 + 多栏排版 + 黑白印刷 + 适度旧化」这些关键特征，让人一眼感到是复古报纸页面。`,

  'en-US': `You are a senior UI designer and front-end engineer. Generate a vintage newspaper style interface that looks very close to the current “Vintage Newspaper” core style card demo.
Keep the multi-column newspaper layout, beige paper texture, primarily black-and-white print palette and subtle aging effects. You may change headlines, article content and module ordering, but you should not change the overall typographic system or visual mood. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Thematic pages or sections for news media and literary magazines
- Historical archives, timelines and cultural project showcases
- Content-heavy interfaces that should feel like printed newspapers or document records

[Layout structure]
1. Page frame
   - Structure the layout like a single broadsheet page with narrow outer margins suggesting paper edges.
   - The top contains the masthead: newspaper title, subtitle and date; the body below is a multi-column content area.
2. Multi-column layout
   - Use 2–3 columns of similar width with fixed gaps to mimic traditional grids.
   - Major headlines may span across columns, while regular articles stay within a single column.
3. Content modules
   - Typical modules include a lead story, secondary articles, small sidebars and pull-quote boxes.

[Color and materials]
1. Palette
   - Paper background: warm beige / light brown (for example #F4E8C1, #EBD9B5) with a slightly aged feel.
   - Text: primary body text in pure black (#000000); secondary information in dark brown or dark grey.
   - Decorative lines: dark brown (#4A3C31) or deep grey for dividers, borders and small icons.
2. Texture
   - Add subtle paper grain and fine noise across the background to simulate print stock.
   - Optionally introduce faint folds, wear or coffee stains, but never enough to hinder readability.

[Typography and hierarchy]
1. Heading hierarchy
   - Masthead uses large, bold serif type; article headlines are smaller, with subheadings one step below.
   - Body text has moderate line length and slightly tight leading to give a dense content impression.
2. Alignment and separators
   - Justify body text to both left and right edges to emulate newspaper setting.
   - Use rules (single, double, dotted) to separate sections and prevent visual clutter.

[Interaction and motion]
1. Hover
   - Links may become bolder or gain a simple underline on hover, avoiding modern bright highlight blocks.
   - When hovering article blocks, slightly brighten the paper background or emphasize the border to suggest focus.
2. Motion
   - Animations should be minimal: gentle fades or scroll-in effects only, to preserve the print-like atmosphere.

[Output requirements]
- Use semantic HTML (header / main / article / aside / footer) to build the newspaper-like structure.
- Use Tailwind-style utilities for multi-column layout (grid / CSS columns), spacing and typography.
- The generated UI must preserve “beige paper + multi-column layout + black-and-white print + subtle aging” as key cues so it clearly reads as a vintage newspaper page.`
};

// Family-level stylePrompt（风格说明书）
export const stylePrompt = {
  'zh-CN': `角色设定：你是一名负责文化项目与媒体专题页的设计师，需要用通俗语言向编辑团队说明 Vintage Newspaper 复古报纸家族的界面风格。

场景定位：这种风格适合新闻 / 杂志专题页、历史档案 / 年表页面、文学或研究项目的展示站点，用来营造「纸本文献」的阅读仪式感，而不是轻量型博客或社交时间线。

视觉设计理念：整体布局像一张完整报纸版面：上方是报头和日期，下方是多栏正文区，标题字号层级清晰，重要内容可以跨栏排版。界面更强调文字信息的密度与编排节奏，而不是大面积图片或彩色背景。

材质与质感：背景接近米黄色或浅棕色，带有纸张纤维与细颗粒噪点，局部可能有轻微磨损或折痕；文字以黑色为主，深棕 / 深灰作为辅助信息色。分隔线、多栏边框和小图标都采用低调的线性风格，避免出现现代 UI 中常见的高饱和按钮。

交互体验：链接与可点击区在悬停时只做小幅变化，如加粗、出现下划线或轻微提亮背景，不会出现夸张的色块反转或强烈阴影。若有滚动或淡入动画，也应节奏缓慢、位移轻微，让阅读体验接近翻阅纸质刊物。

整体氛围：Vintage Newspaper 家族强调严肃、可靠又略带怀旧的人文气质。用户进入页面时，应感觉像在翻开一份旧报或档案盒，内容比视觉更重要，但版面本身也带有温度与故事性。`,
  'en-US': `Role: You are a designer working with editors on cultural and media projects, and you need to explain the Vintage Newspaper family in plain language.

Scene: This style suits feature articles for news and magazines, historical archive or timeline sites and literary or research project showcases. It aims to create the ritual of reading printed documents rather than a casual blog or social feed.

Visual philosophy: The layout mimics a full newspaper page: masthead and date at the top; multi-column body text below with clear heading hierarchy. Important pieces may span columns, while regular stories stay within a single column. The design emphasizes text density, rhythm and typographic structure instead of large hero images or colorful shapes.

Material and texture: The background is warm beige or light brown with subtle paper grain, noise and the occasional soft crease, while text is mostly black with dark brown/grey as secondary tones. Dividing rules, borders and icons are understated line elements; bright modern UI buttons are intentionally avoided to keep the page grounded in print culture.

Interaction experience: Links and interactive zones change only slightly on hover—bolder weight, a simple underline, a gentle background tint—but never with aggressive color inversions or heavy shadows. Any scroll-in or fade animation should be slow and minimal so it still feels like reading a printed spread.

Overall mood: The Vintage Newspaper family conveys seriousness, trustworthiness and a quiet sense of nostalgia. Users should feel as if they are opening an old newspaper or file folder, where content matters most but the page itself still carries warmth and history.`}

// Template list (templates that users can browse)
export const vintageNewspaperRetroTemplates = [
  vintageNewspaper
]

export default vintageNewspaperRetroTemplates
