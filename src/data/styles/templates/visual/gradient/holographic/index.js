// Single template module: Gradient — Holographic
// 全息渐变 - 彩虹光谱般的全息效果

import { demoHTML, customStyles } from './Demo';

export const holographic = {
  id: 'visual-gradient-holographic',
  title: 'styles.visual.holographic.title',
  description: 'styles.visual.holographic.description',

  customPrompt: {
    'zh-CN': `核心理念：彩虹光谱 + 动态变化 + 全息效果

设计要点：
1. 7 色彩虹渐变 — #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff
2. 循环渐变 — 首尾颜色相同创造无缝循环
3. 扩大背景尺寸 — background-size: 200% 200%
4. 动画移动 — 改变 background-position 创造流动效果
5. 文字阴影 — text-shadow 增强可读性`,
    'en-US': `Core Concept: Rainbow spectrum + Dynamic shift + Holographic effect

Design Points:
1. 7-color rainbow — #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff
2. Looped gradient — Same start/end color for seamless loop
3. Enlarged background — background-size: 200% 200%
4. Animated movement — Change background-position for flow effect
5. Text shadow — text-shadow for readability`
  },

  demoHTML,
  customStyles,
};

export default holographic;
