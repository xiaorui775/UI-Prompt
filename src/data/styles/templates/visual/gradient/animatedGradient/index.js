// Single template module: Gradient — Animated Gradient
// 动态渐变 - 持续变化的渐变背景

import { demoHTML, customStyles } from './Demo';

export const animatedGradient = {
  id: 'visual-gradient-animated-gradient',
  title: 'styles.visual.animatedGradient.title',
  description: 'styles.visual.animatedGradient.description',

  customPrompt: {
    'zh-CN': `核心理念：动态流动 + 背景动画 + 视觉吸引

设计要点：
1. 扩大背景 — background-size: 400% 400% 为动画留空间
2. 位置动画 — 改变 background-position 创造移动效果
3. 动画时长 — 6s-10s 平滑流畅，不要太快
4. 缓动函数 — ease 或 ease-in-out 创造自然节奏
5. 适用场景 — Hero 区域、特色卡片、吸引注意力的元素`,
    'en-US': `Core Concept: Dynamic flow + Background animation + Visual attraction

Design Points:
1. Enlarged background — background-size: 400% 400% for animation space
2. Position animation — Change background-position for movement effect
3. Animation duration — 6s-10s smooth flow, not too fast
4. Easing function — ease or ease-in-out for natural rhythm
5. Use cases — Hero sections, feature cards, attention-grabbing elements`
  },

  demoHTML,
  customStyles,
};

export default animatedGradient;
