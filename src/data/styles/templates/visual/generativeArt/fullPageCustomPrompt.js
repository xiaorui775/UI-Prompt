/**
 * Generative Art - FullPage Custom Prompt
 * 生成藝術全屏實驗室頁面的 AI 指令（針對 visualTechGenerativeArtFullPageHTML）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Generative Art Lab 全屏页面」界面风格高度接近的 UI。
要求：保持整体布局、生成画布与控制面板的结构关系，以及色彩与光感的思路基本不变，只允许更换文案、品牌名称和参数标签。输出必须使用语义化 HTML 结构（header、main、section、aside、footer 等），并使用类似 TailwindCSS 的原子类（例如 flex、grid、gap-6、bg-slate-950、text-slate-100、bg-gradient-to-br、from-purple-700、to-indigo-900 等）来组织布局。

【使用场景】
- 场景：一个基于浏览器的生成艺术互动实验室，用于展示粒子系统、线条场和噪声场控制界面；
- 用户：创意编程爱好者、生成艺术家、视觉设计师、对算法艺术感兴趣的技术人员；
- 目标：让用户通过调整参数、切换色彩主题与形状类型，直观观察生成系统的响应，同时保持整個 UI 在視覺上統一、精緻且易於操作。

【整体布局结构】
請保持「標題區 + 控制面板 + 生成畫布」的三層結構：
1. 頂部標題區（Header）
2. 左側（或右側）控制面板（Control Panel / Aside）
3. 中央主畫布（Canvas Area / Main）

1. Header（頂部標題區）
- 使用 <header> 元素放置在頁面頂部，寬度覆蓋整個內層容器；
- 背景為半透明深色，底部可以有淡淡的漸變線條或發光分隔線；
- 內容包含：
  - 主標題文字，例如："GENERATIVE ART LAB"；
  - 副標題說明，例如："Interactive Generative Art Experiment" 或「算法艺术互动实验室」；
- 字型可使用等寬體或較具科技感的無襯線字體，主標題字距略大，配合左右延伸的細線裝飾強化「實驗室」感。

2. 主體區域佈局（Main Layout）
- 使用 <main> 元素包裹控制面板與畫布區域；
- 內部使用 CSS Grid 或 Flex 進行左右排列：
  - 桌面端：控制面板佔 30% 寬度左右，畫布佔 70%；
  - 行動端：控制面板與畫布上下堆疊，保持畫布在視覺上的優先級；
- 背景使用深色漸變，例如從深藍紫過渡到近黑，整體搭配星塵般的噪點背景或輕微的噪聲紋理。

3. 控制面板（Control Panel / Aside）
- 使用 <aside> 元素作為控制面板容器，內部再用 <section> 或 <div> 分組；
- 整體樣式：
  - 半透明深色背景（如 rgba(15, 23, 42, 0.9)）；
  - 細邊框和柔和發光（border + box-shadow）；
  - 內部有足夠的 padding 和元素間距（例如 p-4、space-y-4）；
- 控件分組建議：
  1）基礎參數組（Basic Parameters）
     - 粒子數量 slider（Particle Count）：帶數值顯示，例如 300；
     - 動畫速度 slider（Animation Speed）：顯示如 1.0x；
     - 粒子大小 slider（Particle Size）：顯示如 3px；
  2）視覺參數組（Visual Parameters）
     - 光暈強度（Glow Intensity）：百分比顯示；
     - 模糊程度（Blur Effect）：px 顯示；
     - 連線範圍（Connection Range）：px 顯示；
  3）主題 & 形狀組（Theme & Shape）
     - 顏色主題按鈕組（Color Theme）：Cyberpunk / Neon / Aurora / Matrix 等，按鈕為小膠囊形；
     - 形狀類型按鈕組（Shape Type）：Circle / Triangle / Square / Mixed 等；
  4）控制按鈕（Controls）
     - Reset to Default：重置到推薦狀態；
     - Randomize Seed：隨機種子，生成新圖；

- 每個 slider 控件：
  - 上方為 label + 當前數值（右側以小字體顯示數值）；
  - 下方為 <input type="range">，使用自訂樣式讓滑桿顏色對應主題色；

4. 生成畫布區（Canvas Area）
- 使用 <section> 或 <div> 容器，包含：
  - 一個佔據主要空間的 <canvas> 元素（或你可以用 <div> 模擬畫布，假設它由 JS 控制）；
  - 某些疊加層（overlay），例如當前主題標籤、幀率提示、粒子數量狀態小角標；
- 畫布容器樣式：
  - 背景為深色漸變或純深色（如 bg-slate-950）；
  - 內陰影與外發光並用，營造一個「數據宇宙視窗」；
  - 四角略帶圓角（如 rounded-2xl），邊框使用微亮的主題色；
- 內容方向：
  - 從左上或中心開始有大量粒子緩慢流動，形成類似星雲或能量場的結構；
  - 粒子之間部分有連線，距離小於連線範圍時以細線相接；
  - 部分粒子沿著隱形曲線或力場運動，形成漩渦、波紋或流線；
  - 滑鼠移動時，為方便 LLM 理解，可在描述中說明畫布會對滑鼠位置做出反應（吸引或排斥），但實際 HTML 中可以只放佔位說明文字或 data-* 屬性。 

【色彩與主題】
請在 Prompt 中清楚描述至少 3–4 組主題配色，並鼓勵 LLM 使用具體色值：
- Cyberpunk：品紅 (#ec4899)、青色 (#22d3ee)、紫色 (#8b5cf6)、深藍底 (#020617)；
- Neon Nights：藍 (#3b82f6)、紫 (#6366f1)、粉 (#f472b6)、近黑背景 (#020617)；
- Aurora：青綠 (#22c55e)、藍綠 (#14b8a6)、紫 (#8b5cf6)、深夜藍 (#020617)；
- Matrix：螢光綠 (#22c55e)、暗綠 (#166534)、深灰黑 (#020617)；

控制面板和畫布上的狀態文字可根據主題改變強調色，但整體仍維持深色基調與高對比度文字。

【交互與動效設計】
- 滑桿互動：改變粒子數量或連線範圍時，畫布上的視覺應逐漸調整，例如粒子密度增加、連線變多、整體亮度略升；
- 按鈕互動：主題按鈕在 hover / active 時可加強邊框和發光效果，按下時短暫縮小再回彈；
- 常駐動畫：
  - 粒子持續緩慢運動，速度受 Animation Speed 控制；
  - 連線的透明度與光暈隨 Glow Intensity 變化；
  - 模糊程度對應 Blur Effect，讓背景更柔和或清晰；
- 過度節奏：所有動畫與視覺變化的節奏應平滑，避免快速閃爍和劇烈跳變，尤其在光感與亮度變化上要克制。

【輸出格式要求】
1. 必須輸出完整 HTML 文檔（<html>、<head>、<body> 結構），head 中可簡要聲明頁面標題與使用的字體（例如現代等寬 / 無襯線字體）。
2. 在 body 中使用 header、main、aside、section、footer 等語義標籤描述結構，並使用 Tailwind 風格的原子類來控制布局與樣式；
3. 可以在頁面內聯 <style> 區塊，用於定義粒子發光、連線漸變、背景噪聲等自訂動畫與效果，但請保持代碼整潔；
4. 不必實作完整 JavaScript 粒子邏輯，可以用註釋或 data- 屬性表示交互意圖，例如 data-controls="particle-system"；
5. 文案可適度中英混合（如標題英語、副標中文），以凸顯實驗室與國際化感。

【額外提示與限制】
- 確保控制面板的可讀性，避免使用過於花哨的漸變背景；
- 不要加入與生成藝術無關的大圖示或插畫（例如寫實人物或產品照片）；
- 若需要展示數值或狀態，可用等寬字體和小尺寸數據標籤呈現，強化“儀表感”；
- 整體頁面應給人“可持續觀察”的感覺，而不是“只適合看 3 秒的炫技頁面”。

請根據以上說明，生成一個完整的 Generative Art Lab 風格 HTML 全頁示例，使其在佈局結構與動態藝術氛圍上與當前範例高度一致。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please generate a full-page Generative Art Lab interface whose visual style is highly similar to the existing "Generative Art Lab" demo.
Requirements: Keep the overall layout, the relationship between control panel and canvas, and the color/light logic very close to the described design. You may change copy, brand name and parameter labels, but the structure and visual language must remain consistent. Use semantic HTML (header, main, section, aside, footer) and Tailwind-like utility classes (e.g. flex, grid, gap-6, bg-slate-950, text-slate-100, bg-gradient-to-br, from-purple-700, to-indigo-900).

[Use Case]
- A browser-based generative art lab where users can explore particle systems, field lines and noise-driven motion by tweaking parameters;
- Targeted at creative coders, generative artists, visual designers and technically minded users who enjoy interactive visual experiments;
- The goal is to make the UI feel like a control room for a living visual system, not a static gallery of finished images.

[Overall Layout]
Keep a three-part structure: a header, a side control panel, and a main canvas area.
1. Header at the top
2. Control panel on the left or right
3. Large canvas taking up the remaining space

1. Header
- Implemented with <header>, spanning the content width;
- Background: semi-transparent dark strip with a soft gradient line or glow at the bottom;
- Content:
  - Main title such as "GENERATIVE ART LAB";
  - Subtitle like "Interactive Generative Art Experiment";
- Typography: slightly spaced uppercase letters, mono or tech-flavored sans serif, with subtle decorative lines on each side of the title.

2. Main Layout
- Wrap the control panel and canvas in <main>;
- On desktop, use a two-column layout where the control panel takes about 30% width and the canvas about 70%; on smaller screens, stack them vertically;
- Background: deep, subtle gradients in blues/purples with optional noise texture or small scattered stars to suggest a dark lab or cosmic environment.

3. Control Panel (Aside)
- Use <aside> for the panel, with inner <section> or <div> blocks for groups;
- Visual style:
  - Semi-transparent dark background (e.g. rgba(15, 23, 42, 0.9));
  - Thin borders and soft glows; generous padding and vertical spacing;
- Suggested parameter groups:
  1) Basic Parameters
     - Particle Count (slider + numeric label)
     - Animation Speed (slider + value like 1.0x)
     - Particle Size (slider + value in px)
  2) Visual Parameters
     - Glow Intensity (slider + percentage)
     - Blur Effect (slider + px value)
     - Connection Range (slider + px value)
  3) Theme & Shape
     - Color Theme buttons: Cyberpunk / Neon / Aurora / Matrix, pill-shaped buttons
     - Shape Type buttons: Circle / Triangle / Square / Mixed
  4) Controls
     - Reset to Default
     - Randomize Seed

- Each slider:
  - Label row with parameter name and value on the right;
  - A styled <input type="range"> whose track and thumb colors reflect the current theme.

4. Canvas Area
- A <section> or <div> containing:
  - A main <canvas> (or a <div> that is conceptually the canvas), filling most of the area;
  - Optional overlays: current theme tag, FPS indicator, particle count badge;
- Canvas container styling:
  - Dark gradient or solid deep background;
  - Inner shadow plus outer glow to feel like a portal or viewport;
  - Rounded corners and a bright, theme-colored border;
- Visual behavior (described in text so the LLM can recreate it):
  - Numerous particles drifting slowly, forming nebula-like structures;
  - Some particles are connected with thin lines when within a certain distance;
  - Particles may follow implicit curves or flow fields, forming swirls, waves or streams;
  - Pointer interaction is described as an attractor/repeller, but you may represent it via comments or data attributes rather than full JS.

[Color Themes]
Describe at least 3–4 color themes for the model to reuse:
- Cyberpunk: magenta (#ec4899), cyan (#22d3ee), purple (#8b5cf6), deep navy (#020617);
- Neon Nights: blue (#3b82f6), indigo (#6366f1), pink (#f472b6), near-black (#020617);
- Aurora: teal green (#22c55e), aqua (#14b8a6), violet (#8b5cf6), midnight blue (#020617);
- Matrix: bright green (#22c55e), dark green (#166534), deep gray-black (#020617).

[Interaction and Motion]
- Slider changes should produce smooth transitions in density, connectivity and brightness rather than abrupt jumps;
- Theme buttons should have clear hover/active feedback with glowing borders and slight scale changes;
- Continuous animation:
  - Particles drift at speeds affected by the Animation Speed parameter;
  - Connection lines and glow intensity react to Glow Intensity;
  - Overall blur/softness is controlled by the Blur slider;
- Motion rhythm: calm and watchable for long periods, avoiding rapid flashing.

[Output Requirements]
1. Generate a full HTML document with <html>, <head> and <body>. In <head>, include a simple <title> and reference to a modern font.
2. Use header, main, aside, section and footer elements to structure the layout; use nav, ul and li where appropriate.
3. Express layout and styles via Tailwind-like utility classes only (no external CSS file required in the example). You may inline a <style> block for keyframes and special effects.
4. You do not need to implement complete JavaScript logic for the particle system; clearly indicate where scripts would hook in using comments or data-* attributes.
5. Copy should keep a lab/experimental tone, mixing technical and artistic language, but avoid being overly marketing-heavy.

[Additional Notes]
- Maintain high text contrast and avoid placing long paragraphs directly over high-intensity visuals;
- Keep the control panel readable and structured; generative visuals should remain the primary dynamic element;
- Do not introduce large photographic content or unrelated illustrations; the art should come from the generative system itself;
- The page should feel like something users can leave open and observe, not a short-lived “visual stunt” page.

Based on all of the above, output a complete Generative Art Lab HTML page that feels closely related to the existing demo in both layout and generative-art atmosphere.`
};
