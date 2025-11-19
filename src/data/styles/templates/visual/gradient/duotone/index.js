// Single template module: Gradient — Duotone
// 双色调 - 两种颜色的高对比渐变

import { demoHTML, customStyles } from './Demo';

export const duotone = {
  id: 'visual-gradient-duotone',
  title: 'styles.visual.duotone.title',
  description: 'styles.visual.duotone.description',

  customPrompt: {
    'zh-CN': `核心理念：双色对比 + 简洁明快 + 现代感

设计要点：
1. 高对比双色 — 选择对比强烈的两种颜色
2. 经典组合 — #FF0080 + #7928CA（粉紫），#FF6B6B + #4ECDC4（红青）
3. 渐变角度 — 135deg 最常用，也可尝试 90deg 或 180deg
4. 纯色渐变 — 不使用中间色，只有起始和结束两色
5. 适用场景 — CTA 按钮、Hero 区域、强调卡片`,
    'en-US': `Core Concept: Dual-color contrast + Clean and crisp + Modern feel

Design Points:
1. High-contrast dual colors — Choose strongly contrasting colors
2. Classic combos — #FF0080 + #7928CA (pink-purple), #FF6B6B + #4ECDC4 (red-cyan)
3. Gradient angle — 135deg most common, also try 90deg or 180deg
4. Pure gradient — No intermediate colors, only start and end
5. Use cases — CTA buttons, Hero sections, emphasis cards`
  },

  demoHTML,
  customStyles,
};

export default duotone;
