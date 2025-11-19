// Single template module: Nature — Aurora Borealis
// 极光 - 北极光的流动色彩

import { demoHTML, customStyles } from './Demo';

export const aurora = {
  id: 'visual-nature-aurora',
  title: 'styles.visual.aurora.title',
  description: 'styles.visual.aurora.description',

  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Aurora 极光背景」示例风格高度接近的界面背景。
要求：保持多層流動色帶、強模糊與水平漂移效果，只允許調整色彩組合與細節，不改變整體「夜空 + 掃過的極光帶」構圖。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 科幻或自然主題網站的 Hero 區背景
- 產品啟動畫面、音樂 / 藝術相關落地頁
- 需要營造夢幻、飄渺、安靜氛圍的插畫式背景

【整体布局结构】
1. 背景層
   - 深色夜空（藍黑 / 深紫）作為基底，可帶少量星點或漸變。
   - 在背景上方疊加 2–4 條橫向極光帶，每條覆蓋寬度大於畫面寬度，以便平滑滑動。
2. 前景層（可選）
   - 可以在底部加山脈剪影或城市天際線剪影，但需保持低對比與簡化造型，避免搶走極光主體。

【色彩与材质】
1. 色彩組合
   - 使用青綠、天藍、紫色等冷色為主，有時加入少量粉色或金色作為點綴。
2. 模糊
   - 對極光帶施加較大的模糊半徑（約 30–50px）以獲得柔和邊緣。
3. 透明度
   - 每條極光帶的整體不透明度在 0.4–0.8 之間，避免完全不透明以保留層次感。

【動效与空間感】
1. 水平流動
   - 使用緩慢的 translateX 或背景位置變化，讓極光帶在 15–25 秒週期內從畫面一側漂移到另一側。
2. 輕微縮放
   - 可在動畫中加入輕微的 scaleY 變化，模擬極光時而變高、時而變低的波動。
3. 亮度波動
   - 透過透明度變化或疊加一層較亮的色帶實現亮度起伏。

【输出要求】
- 使用语义化 HTML 以容器包裹極光背景，方便後續在其上放置文案與按鈕。
- 使用 TailwindCSS 原子類控制背景顏色與佈局，極光漸變與動畫建議在自定義類中實作。
- 生成背景必須保留「深色夜空 + 多層流動冷色極光帶 + 緩慢水平漂移」這些關鍵特徵。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate an Aurora Borealis background that looks very close to the current “Aurora” demo.
Keep the multi-layer flowing gradient bands, strong blur and slow horizontal drift. You may tweak color combinations and fine details, but you should not change the overall composition of “night sky with sweeping aurora bands”. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Hero backgrounds for sci-fi or nature-themed websites
- Intro screens for products, music or art-related landing pages
- Illustration-style backdrops where a dreamy, calm atmosphere is needed

[Layout structure]
1. Background layer
   - Use a deep night-sky base (blue-black or dark purple), optionally with subtle stars or gradients.
   - Overlay 2–4 horizontal aurora bands that extend beyond the viewport width so they can slide smoothly.
2. Foreground layer (optional)
   - Add simple silhouettes of mountains or skylines at the bottom, kept low-contrast and minimal so the aurora remains primary.

[Color and material]
1. Color palette
   - Base the bands on cool hues: teals, cyans, blues and purples, with occasional pink or gold accents.
2. Blur
   - Apply relatively strong blur (around 30–50px) to the bands for soft edges.
3. Opacity
   - Keep each band’s opacity around 0.4–0.8 to maintain layering and depth.

[Motion and depth]
1. Horizontal flow
   - Animate aurora bands with slow translateX or background-position changes over 15–25 second cycles.
2. Subtle scaling
   - Add gentle scaleY variation to mimic aurora curtains rising and falling.
3. Brightness variation
   - Vary opacity or overlay a brighter band to simulate brightness pulses.

[Output requirements]
- Use semantic HTML to wrap the aurora background so text and buttons can be placed above it.
- Use Tailwind-style utilities for base layout and background colors; implement aurora gradients and animations via custom classes.
- The generated background must preserve “dark night sky + multiple flowing cool-toned aurora bands + slow horizontal drift” as key traits.`
  },

  // 模板級 stylePrompt：用敘事方式描述極光風格的設計理念
  stylePrompt: {
    'zh-CN': `角色：你是一位擅長「極光與夜空」風格的 UI 設計師，熟悉如何用冷色漸變和柔和光帶營造安靜、夢幻的視覺氛圍。

场景定位：
- 适用於自然主題網站、科幻產品登錄頁、音樂或藝術活動的沉浸式首頁背景。
- 希望讓使用者有「仰望夜空」的感受，同時保留足夠留白放置標題、敘述與按鈕。

视觉设计理念：
- 以深色夜空作為基底，覆蓋多層冷色極光帶，讓色彩像絲帶一樣在遠處緩慢流動。
- 避免過於硬朗的直線與銳角，所有邊界都應該被模糊與漸變柔化。
- 強調寧靜與距離感，不以眩目的高對比為主，而是用層次與光感堆疊空間。

材质与质感：
- 背景接近純黑或深藍紫，帶輕微噪點或星點，模擬夜空深度。
- 極光帶使用 3–5 種冷色（青綠、天藍、紫色），透過模糊和透明度創造「霧狀光幕」。
- 可以在遠處加入淡淡的山脈或地平線剪影，但要保持低飽和與低對比。

交互体验：
- 整體偏靜態與舒緩，若有動態，只應在極光帶上做緩慢的水平漂移與亮度起伏。
- 任何按鈕與文字的 hover 效果都應該克制，例如輕微的亮度提升或柔和陰影，而非劇烈動畫。

氛围营造：
- 使用大面積陰暗背景 + 適度的光帶亮點，讓視線自然集中在中上方的標題區。
- 整體氛圍應該是安靜、冷冽但不壓迫，像深夜的高緯度城市邊緣，看著遠方的極光緩慢流動。`,

    'en-US': `Role: You are a UI designer specialized in aurora and night-sky atmospheres, skilled at using cool gradients and soft light bands to create calm, dreamy backgrounds.

Scene:
- Used for nature-themed sites, sci-fi product landings, or immersive intros for music and art projects.
- The user should feel as if they are looking up at the night sky while still having clear space for title, copy and primary actions.

Visual philosophy:
- Start from a deep night-sky base and layer multiple cool-toned aurora bands that drift slowly across the horizon.
- Avoid hard edges and sharp corners; all transitions between colors should be softened by blur and opacity.
- Emphasize calmness and depth rather than high contrast, letting layered light define the space.

Material & texture:
- Background is near-black or deep blue-violet with subtle noise or star speckles to suggest distance.
- Aurora bands use teals, cyans, blues and purples, blended with blur and partial transparency to feel like misty light curtains.
- Optional silhouettes of mountains or skylines may appear at the bottom but must stay low-saturation and low-contrast.

Interaction:
- Motion should be slow and gentle: horizontal drifting of the aurora bands, occasional breathing in brightness or height.
- Hover states for text and buttons should remain restrained (slight glow or brightness changes), never aggressive flashing.

Mood:
- The composition should naturally focus attention on the central or upper area where headings and CTAs live.
- Overall the scene should feel quiet, distant and slightly magical, like watching aurora move slowly over a remote northern landscape.`
  },

  demoHTML,
  customStyles,
};

export default aurora;
