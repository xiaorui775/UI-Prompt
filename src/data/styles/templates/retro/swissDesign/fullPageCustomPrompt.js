/**
 * Swiss Design - FullPage Custom Prompt
 * 瑞士設計風格完整頁面的專屬 AI 指令（針對 swissDesignFullPageHTML）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名专精于瑞士设计（Swiss Design / International Typographic Style）的 UI 设计师兼前端工程师，请生成一个与当前「Swiss Style Design Studio 全屏页面」界面风格高度接近的 UI。
要求：保持严格网格系统、极简黑白 + 瑞士红配色、无装饰排版和理性布局逻辑基本不变，只允许替换文案、品牌名称与项目案例名称，不改变整体区块结构与信息层级。输出必须使用语义化 HTML 结构（header、nav、main、section、footer 等）以及类似 TailwindCSS 的原子类（例如 grid、gap-8、max-w-5xl、text-black、bg-white、border-black 等）來描述佈局。

【使用场景】
- 一家以瑞士现代主义為核心的設計工作室官網首頁；
- 主要目標：以極簡方式展示工作室理念、數據實力、代表案例與服務項目；
- 面向客戶：重視品牌嚴謹度、喜歡清晰結構與理性排版的企業客戶與文化機構。

【整體版面結構】
請基於 swissDesignFullPageHTML 的內容結構，完整描述並生成：
1. 頂部導航欄（Header / Navigation）
2. Hero 首屏（Studio 標題區）
3. 關鍵統計區（Studio Stats）
4. 作品集區（Selected Work / Portfolio）
5. 服務列表區（Services）
6. 關於 / 理念區（About / Philosophy）
7. 聯絡 / Footer 區（Contact / Footer）

1. 頂部導航欄（Header / Navigation）
- 使用 <header> 元素包裹一個 .swiss-header 容器，其內為一個 max-width 的中心網格：
  - 左側 Logo 區：
    - 內容為一個簡潔文字 Logo，如 "STUDIO" 或品牌名稱，字重可略重，全部大寫；
    - 與左側邊距、上方留白對齊網格；
  - 右側主導航：
    - 使用一行水平方向的連結列表，如 WORK、SERVICES、ABOUT、CONTACT、EN / DE；
    - 所有連結使用全大寫、等寬或無襯線字體、字距略加大；
    - hover 狀態可改為下劃線或文字顏色切換（例如從 #000 切換為瑞士紅 #E30613）。
- 整體背景為純白，無陰影、無漸變，底部可視需要加一條極細黑線分隔主體。

2. Hero 首屏（Studio Hero）
- 使用 <section> 包裹，內含一個兩欄網格：
  - 左欄：
    - 小型強調標記（可用一條細紅線或一個紅色小方塊），放在標題前作為視覺起點；
    - 主標題：兩行大字，例如 "PRECISION" / "IN DESIGN"，全部大寫、字重中等、行距緊密；
    - 副標題：用 1–2 句簡短文字說明工作室專長，例如 "A Swiss design studio specializing in timeless visual communication through grid systems, typography, and clarity."；
    - 主要 CTA 按鈕：例如 "VIEW OUR WORK"，使用黑底白字或白底黑字，邊框清晰，無圓角或很小的圓角；
  - 右欄：
    - 幾何視覺標記：可為一個大面積的黑色矩形、紅色垂直條或由黑白色塊組成的網格，象徵海報構圖；
- 留白：Hero 區域上下保留充足留白，讓大標題與幾何圖形呼吸。

3. 關鍵統計區（Studio Stats）
- 使用 <section> 放置 3–4 個關鍵統計數字，如 PROJECTS、YEARS、AWARDS、SATISFACTION；
- 版面為均分的網格，例如四欄：
  - 每個項目：
    - 大號數字（如 250+、15、40+、98%）使用粗體，靠左對齊；
    - 下方小字說明（PROJECTS / YEARS / AWARDS / SATISFACTION）全大寫，字重較細；
    - 右上或右下可以有一條小紅線或紅色小方塊作為強調；
- 背景保持白色，使用極細的灰線或黑線做欄位分界即可，避免重度邊框。

4. 作品集區（Selected Work / Portfolio）
- 使用 <section> 包裹，分為標題行與作品網格兩部分：
  - 標題行：左側為標題文字 "SELECTED WORK"，右側可以加一條長黑線延伸至右邊，形成典型瑞士設計的標題 + 線條結構；
  - 作品網格：使用 2 或 3 欄排列作品卡片，每張卡片為一個嚴格居於網格的矩形：
    - 左側為數字代號（01 / 02 / 03 / ...），使用大號數字，靠上或靠左；
    - 右側為作品標題（如 HELVETICA MUSEUM、GRID SYSTEM BOOK 等）以及分類標籤（BRANDING / WEB、EDITORIAL / PRINT 等）；
- 卡片背景可維持白色，只使用邊框和文字建立層次；可在部分作品卡背後放置大紅色矩形作為強調區塊，但需節制使用。

5. 服務列表區（Services）
- 使用 <section>，同樣有標題行與多條服務項目列表：
  - 標題行："SERVICES" + 水平線條；
  - 服務條目：採用「編號 + 文字」的結構：
    - 左側為 01 / 02 / 03 等編號，右側為服務名稱（VISUAL IDENTITY、EDITORIAL DESIGN 等）與一段簡短說明文字；
    - 所有內容左對齊，間距基於固定的垂直 grid 單位；
- 字體與風格延續前文：無衬線、無陰影、無漸變，重點在字距與行距的秩序。

6. 關於 / 理念區（About / Philosophy）
- 使用 <section>，可分為兩欄：左欄為關於文字，右欄為團隊 / 理念補充；
- 內容重點放在描述工作室如何應用網格、字體與色塊傳達清晰資訊；
- 文本區塊寬度限制（例如 max-w-md）以保證閱讀舒適度；
- 不需額外插圖，只需巧妙安排文字塊與少量紅色輔助線條即可。

7. 聯絡 / Footer 區（Contact / Footer）
- 底部使用 <footer>，背景仍為白色：
  - 左側顯示工作室名稱與所在地，如 "SWISS DESIGN STUDIO — ZURICH"；
  - 右側列出聯絡方式（Email / Phone / Social），使用小尺寸字體和大寫文字；
- 底部可使用極細黑線或小型瑞士紅方塊作為結尾視覺元素。

【色彩與樣式約束】
- 顏色：
  - 主色：黑 (#000000)、白 (#FFFFFF)、瑞士紅 (#E30613)；
  - 灰階：可用少量中性灰（#808080、#E5E5E5 等）作為分隔線或次要文字；
- 禁用：
  - 不使用漸變、陰影（除了非常輕微的內部結構用線）、圓角（可選擇全部 0 圓角）；
  - 不使用插畫、貼圖或照片作為主視覺；
- 字體：
  - 使用無衬線字體（如 Helvetica / Inter / system UI），所有標題和導航均可使用大寫形式；
- 排版：
  - 左對齊為主，行距緊湊但保持可讀性；
  - 使用固定基準單位（如 4px / 8px）控制 margin / padding。

【交互與動效】
- 懸停：
  - 導航連結與按鈕在 hover 時可用簡單的下划線或文字變色（變為瑞士紅），避免放大或位移過大；
- 過渡：
  - 若有動效，使用 150–250ms 的顏色或不透明度過渡即可，整體保持「安靜」的視覺節奏；
- 不建議：
  - 不使用大幅滑動、彈跳或旋轉動畫，避免破壞瑞士設計的穩定氣質。

【輸出要求】
1. 生成一個完整的 HTML 文檔，包含 <html>、<head>、<body>；
2. head 中簡要說明使用 sans-serif 字體（例如以註釋形式標註 "Use Helvetica or system sans-serif" 即可）；
3. body 中使用 header、nav、main、section、footer 組織內容，使用 Tailwind 風格原子類實現 grid、flex、gap、margin、padding 與文字樣式；
4. 所有區塊必須對齊同一套網格邏輯，保持高一致性；
5. 文案可以自由改寫，但用詞應保持專業、克制、偏向設計與品牌語境。

請根據以上完整說明，輸出一個保持瑞士設計核心特徵的 Studio Landing Page HTML 範例，使版面一眼就能被辨識為「瑞士設計 / 國際排印風格」的變體。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please create a full-page Swiss Design studio landing page whose layout and visual language closely match the existing "Swiss Style Design Studio" demo.
Requirements: Keep the strict grid system, minimal black/white + Swiss red color palette, and objective typographic hierarchy. You may change copy, brand name and project titles, but the overall sections and information hierarchy must remain the same. Use semantic HTML (header, nav, main, section, footer) and Tailwind-like utility classes (grid, gap-8, max-w-5xl, text-black, bg-white, border-black).

[Use Case]
- Landing page for a Swiss Design-oriented studio focusing on modernist visual communication;
- Goal: briefly present studio philosophy, key metrics, selected work, and services in a rational, grid-based layout;
- Audience: clients who value clarity, order and typographic rigor.

[Overall Layout]
Mirror the structure of the existing fullpage:
1. Top header with logo and navigation
2. Hero section with studio title and short description
3. Studio stats section
4. Selected work / portfolio grid
5. Services list
6. About / philosophy section
7. Contact / footer section

1. Header / Navigation
- Use <header> containing a centered nav grid;
- Left: a simple text logo (e.g. "STUDIO") set in uppercase sans-serif, aligned to the grid;
- Right: a horizontal row of navigation links (WORK, SERVICES, ABOUT, CONTACT, EN / DE), all uppercase, lightly spaced;
- Background: pure white, optional thin bottom border as separator; no shadows or gradients.

2. Hero Section
- Two-column grid:
  - Left column:
    - A small accent mark (red line or square) above or beside the main heading;
    - A large, two-line headline (e.g. "PRECISION / IN DESIGN") in uppercase, medium weight, tight leading;
    - A short paragraph describing the studio in one or two sentences;
    - A primary CTA button (e.g. "VIEW OUR WORK") with a simple rectangular shape, black-on-white or white-on-black, no rounded corners or only minimal radius;
  - Right column:
    - A strong geometric mark (black rectangle, red bar, or black-white composition) that evokes a poster-like composition.

3. Studio Stats
- A section with 3–4 key metrics laid out in equal-width columns:
  - Large numbers (e.g. 250+, 15, 40+, 98%) in bold, left-aligned;
  - Labels in uppercase below each number (PROJECTS, YEARS, AWARDS, SATISFACTION);
  - Optional small red accent marks inside each card (lines or small blocks).

4. Selected Work / Portfolio
- Section header: title "SELECTED WORK" plus a horizontal line extending toward the right;
- Below, a grid of project items:
  - Each item: a numeric index (01, 02, 03, etc.) and a block with project title and category labels (BRANDING / WEB, EDITORIAL / PRINT, etc.);
  - Background mostly white; use borders and type to create structure. Some items may have a red block behind the index or category as a visual accent.

5. Services
- Section header "SERVICES" with a horizontal line;
- A vertical list of services:
  - Each row: a numeric index (01, 02, 03...), a service title (VISUAL IDENTITY, EDITORIAL DESIGN, etc.) and a short description;
  - All text left-aligned, using consistent vertical rhythm.

6. About / Philosophy
- A split layout with text columns:
  - One column describing the studio philosophy and approach to grids, type and color;
  - Another column for studio background, clients, or methodology;
- Limit line length for readability (e.g. max-width on text blocks);
- Decoration limited to simple lines or small red marks.

7. Contact / Footer
- Use <footer> with a white background:
  - Left: studio name and location (e.g. "SWISS DESIGN STUDIO — ZURICH");
  - Right: contact details (email, phone, possibly social links) in small uppercase text;
- The bottom edge may include a thin black rule or small red square.

[Color and Style Constraints]
- Colors:
  - Primary: black (#000000), white (#FFFFFF), Swiss red (#E30613);
  - Optional grays for dividers and secondary text (#808080, #E5E5E5);
- Prohibitions:
  - No gradients, no heavy shadows, minimal or zero border-radius;
  - No large illustrative images or photography dominating the layout;
- Typography:
  - Sans-serif (Helvetica or equivalent), uppercase for headings and navigation, tight tracking and leading;
- Layout:
  - Strict left alignment and grid-based spacing, using consistent increments for margins and paddings.

[Interaction and Motion]
- Hover:
  - Links and buttons change via simple underline or color shifts (e.g. black to Swiss red), no large scale jumps;
- Transitions:
  - Use subtle 150–250ms color or opacity transitions where needed;
- Avoid dynamic effects such as bouncing, sliding or rotation that would break the calm, rational tone.

[Output Requirements]
1. Output a complete HTML document (<html>, <head>, <body>);
2. In <head>, include a <title> and a note about using a sans-serif font (e.g. via comment);
3. In <body>, structure content with header, nav, main, section and footer, and control layout with Tailwind-like utility classes (grid, flex, gap, padding, typography);
4. Align all components to a coherent grid system; whitespace must feel intentional and measured;
5. Keep copy professional, restrained and design-oriented.

Based on all of the above, output a full Swiss Design studio landing page in HTML that clearly reads as an International Typographic Style-inspired layout closely related to the existing demo.`
};
