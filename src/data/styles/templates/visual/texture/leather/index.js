// Single template module: Texture — Leather Texture
// 皮革质感 - 奢华的皮质材料

import { demoHTML, customStyles } from './Demo';

export const leather = {
  id: 'visual-texture-leather',
  title: 'styles.visual.leather.title',
  description: 'styles.visual.leather.description',

  customPrompt: {
    'zh-CN': `核心理念：皮质纹理 + 深色调 + 奢华感

设计要点：
1. 径向渐变 — radial-gradient(ellipse at top, dark, darker)
2. 噪点纹理 — SVG feTurbulence 创造皮革质感
3. 内外阴影 — inset 阴影 + 深外阴影增加立体感
4. 缝线效果 — dashed border 模拟缝合线
5. 适用场景 — 高端界面、奢侈品展示、专业工具`,
    'en-US': `Core Concept: Leather texture + Dark tones + Luxury feel

Design Points:
1. Radial gradient — radial-gradient(ellipse at top, dark, darker)
2. Noise texture — SVG feTurbulence creates leather feel
3. Inner-outer shadows — Inset shadow + deep outer shadow adds depth
4. Stitching effect — Dashed border simulates stitching
5. Use cases — Premium interfaces, luxury displays, professional tools`
  },

  // 模板級 stylePrompt：描述皮革質感介面的視覺與使用情境
  stylePrompt: {
    'zh-CN': `角色：你是一位擅长「皮革质感」与高端材质表现的 UI 设计师，需要用深色皮面、縫線與金屬細節，打造穩重而奢華的介面。

场景定位：
- 適合金融、專業工具、樂器或收藏管理、復古精品品牌等需要「可靠 + 高價值感」的場景。
- 皮革區塊通常作為背景板或主要控制面板，不宜過多堆疊以免畫面沉重。

视觉设计理念：
- 使用大面積深棕或深黑皮革背景，搭配邊緣高光與內陰影，營造略微隆起的厚實面板感。
- 功能模組（按鈕、旋鈕、標籤）可嵌入皮革面板中，像實體設備上的控制器一樣有重量感。

材质与质感：
- 透過徑向漸變和噪點疊加模擬皮革纖維與壓痕，避免過度平滑導致「塑膠感」。
- 縫線可用虛線邊框或小圓點表示，搭配微小內陰影，讓邊緣看起來像真實縫合。

交互体验：
- 按鈕與開關的 hover / active 狀態應該像真實物件被按下：亮部略暗、陰影方向改變或整體下壓。
- 動畫節奏偏克制，以 150–250ms 的過渡為主，不做浮誇彈跳，符合「專業儀表」的感覺。

氛围营造：
- 整體氛圍沉穩、厚重且帶一點復古器材的儀式感，讓人聯想到老式音響、旅行箱或皮革筆記本。
- 使用者應感覺介面值得信賴、經久耐用，而不是一次性、輕薄的 UI。`,

    'en-US': `Role: You are a UI designer specializing in leather textures and premium materials, using deep leather surfaces, stitching and metal accents to convey weight and luxury.

Scene:
- Fits financial tools, professional dashboards, instrument or collection managers, and heritage or boutique brands that need “reliable + high-value” visuals.
- Leather panels usually serve as background boards or primary control surfaces; too many stacked layers can make the layout feel heavy.

Visual philosophy:
- Build large, dark brown or black leather backgrounds with edge highlights and inner shadows so panels feel thick and slightly raised.
- Functional modules (buttons, knobs, labels) should feel inset into the leather, like controls on a physical device.

Material & texture:
- Combine radial gradients with noise overlays to simulate leather grain, creases and pressure marks, avoiding overly smooth “plastic” surfaces.
- Stitching can be represented with dashed or dotted borders plus subtle inner shadow so edges look genuinely sewn.

Interaction:
- Hover and active states should mimic physical press: highlights dim slightly, shadow directions change, and elements appear to sink a bit.
- Animation timing is restrained (around 150–250ms), favoring smooth transitions over bouncy effects to match a serious instrument panel vibe.

Mood:
- The overall mood is steady, weighty and somewhat nostalgic, evoking vintage audio gear, travel trunks or leather notebooks.
- Users should feel the interface is trustworthy and built to last rather than disposable or flimsy.`
  },

  demoHTML,
  customStyles,
};

export default leather;
