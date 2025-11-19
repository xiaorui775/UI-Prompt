// Single template module: Gradient — Color Transition
// 色彩过渡 - 平滑的颜色变换

import { demoHTML, customStyles } from './Demo';

export const colorTransition = {
  id: 'visual-gradient-color-transition',
  title: 'styles.visual.colorTransition.title',
  description: 'styles.visual.colorTransition.description',

  customPrompt: {
    'zh-CN': `核心理念：平滑过渡 + 多色融合 + 流动感

设计要点：
1. 3-4 种颜色 — linear-gradient(135deg, color1, color2, color3)
2. 相近色系 — 选择色相接近的颜色创造和谐过渡
3. 均匀分布 — 颜色停止点均匀分布，无需手动指定百分比
4. 渐变方向 — 135deg 斜向或 90deg 垂直
5. 适用场景 — 背景、大面积色块、品牌视觉`,
    'en-US': `Core Concept: Smooth transition + Multi-color blend + Flow feel

Design Points:
1. 3-4 colors — linear-gradient(135deg, color1, color2, color3)
2. Similar hues — Choose adjacent hues for harmonious transition
3. Even distribution — Color stops evenly distributed, no manual percentages needed
4. Gradient direction — 135deg diagonal or 90deg vertical
5. Use cases — Backgrounds, large color blocks, brand visuals`
  },

  demoHTML,
  customStyles,
};

export default colorTransition;
