// Single template module: Light — Ambient Lighting
// 环境光 - 柔和的氛围光效

import { demoHTML, customStyles } from './Demo';

export const ambient = {
  id: 'visual-light-ambient',
  title: 'styles.visual.ambient.title',
  description: 'styles.visual.ambient.description',

  customPrompt: {
    'zh-CN': `核心理念：柔和光晕 + 径向渐变 + 模糊效果

设计要点：
1. 径向渐变 — radial-gradient(circle, color 0%, transparent 70%)
2. 大范围模糊 — filter: blur(60px)
3. 低透明度 — opacity: 0.6-0.8
4. 缓慢浮动 — animation: float 8s ease-in-out
5. 适用场景 — 氛围背景、柔和装饰、放松界面`,
    'en-US': `Core Concept: Soft halo + Radial gradient + Blur effect

Design Points:
1. Radial gradient — radial-gradient(circle, color 0%, transparent 70%)
2. Large blur — filter: blur(60px)
3. Low opacity — opacity: 0.6-0.8
4. Slow floating — animation: float 8s ease-in-out
5. Use cases — Atmospheric backgrounds, soft decorations, relaxation interfaces`
  },

  // 模板級 stylePrompt：敘事描述環境光風格
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长用「环境光」营造氛围的 UI 设计师，需要用柔和的光晕与模糊色斑，让界面看起来自然、放松而不刺眼。

场景定位：
- 常用于首頁 Hero 區、儀表板背景、音樂或冥想產品、個人網站的情緒版面。
- 光斑本身不承載關鍵資訊，而是作為襯托，讓卡片與文字更有空氣感。

视觉设计理念：
- 使用一到數個大面積徑向光斑，像是遠處的光源透過空氣散射到畫面上。
- 光的邊緣應該完全被 blur 柔化，避免明確圓圈或硬邊，看起來像「氣氛」而不是圖形。

材质与质感：
- 顏色多以品牌主色或鄰近色為基礎，透明度控制在 0.4–0.8 之間，避免搶過前景內容。
- 可以同時結合深色或中性色背景，讓光斑像遠處的霓虹或夕陽反射。

交互体验：
- 動畫節奏要緩慢（8–16 秒一個循環），常見做法是輕微的平移、縮放與透明度變化。
- 不與滑鼠或捲動直接綁定互動，以背景「持續呼吸」為主，避免讓使用者感到分心。

氛围营造：
- 整體氛圍偏「溫和、療癒、帶一點夢幻」，適合用來打破純色背景的單調。
- 讓使用者感覺界面背後有空間與光線，而不只是平面色塊。`,

    'en-US': `Role: You are a UI designer who specializes in ambient lighting, using soft halos and blurred color patches to create calm, gentle atmospheres.

Scene:
- Ideal for hero sections, dashboard backdrops, music or meditation products, and personal sites that need moodful backgrounds.
- The light blobs themselves never carry key information; they simply support cards and text with a sense of air and depth.

Visual philosophy:
- Use one or several large radial glows that feel like distant light sources bleeding into the scene.
- Edges of the light should be fully softened by blur so they read as atmosphere rather than hard circular graphics.

Material & texture:
- Colors are derived from the brand palette or its neighbors, with opacity around 0.4–0.8 so content remains legible.
- Ambient glows work well over dark or mid-tone backgrounds, suggesting neon in the distance or late-afternoon sunlight.

Interaction:
- Animation timing should be slow (8–16 second cycles), typically combining subtle translation, scale and opacity changes.
- Avoid direct mouse or scroll coupling; the background should “breathe” quietly instead of reacting aggressively to input.

Mood:
- The overall feeling is soft, relaxing and slightly dreamy, breaking the monotony of flat solids without becoming noisy.
- Users should sense light and depth behind the layout, as if the interface lives in a softly lit physical space.`
  },

  demoHTML,
  customStyles,
};

export default ambient;
