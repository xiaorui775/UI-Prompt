// Single template module: Nature — Liquid Motion
// 液体流动 - Digital Ocean Dashboard Theme

import { demoHTML, customStyles } from './Demo';
import { fullPageHTML, fullPageStyles } from './LiquidFullPage';

export const liquid = {
  id: 'visual-nature-liquid',
  title: 'styles.visual.liquid.title',
  description: 'styles.visual.liquid.description',

  customPrompt: {
    'zh-CN': `请使用 TailwindCSS 创建一个 Liquid Motion（液体流动）风格的界面，以深海科技为主题，通过有机形态的 blob 变形动画和半透明渐变营造出流动、动态、未来感的视觉体验。

**核心设计要求**

1. **液体形态变形系统**
   - 使用复杂的 8 值 border-radius 创建有机形状：
     \`\`\`css
     border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
     \`\`\`
   - 通过 @keyframes 动画在 4 个关键帧之间变形：
     \`\`\`css
     @keyframes liquidMorph {
       0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0) rotate(0deg) scale(1); }
       25% { border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%; transform: translate(30px, -30px) rotate(90deg) scale(1.1); }
       50% { border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%; transform: translate(-20px, 40px) rotate(180deg) scale(0.95); }
       75% { border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%; transform: translate(40px, 20px) rotate(270deg) scale(1.05); }
     }
     \`\`\`
   - 动画周期应为 15-25 秒，使用 ease-in-out 缓动函数

2. **多层模糊背景**
   - 3-4 个 blob 层叠加，每层使用不同的动画时长和延迟
   - 容器层应用 filter: blur(30-60px) 创造融合效果
   - 使用 radial-gradient 定义 blob 颜色：
     \`\`\`css
     background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0.1) 50%, transparent 70%);
     \`\`\`

3. **深海科技配色**
   - 主背景渐变：#0a192f → #0d3b66 → #112240
   - 主要 blob：rgba(0, 229, 255, 0.35) 青蓝色
   - 次要 blob：rgba(100, 255, 218, 0.3) 青绿色
   - 点缀 blob：rgba(139, 92, 246, 0.25) 紫罗兰
   - 高亮色：#64ffda
   - 文字色：#ccd6f6（主）/ #8892b0（次）

4. **玻璃态卡片组件**
   - 半透明背景：rgba(17, 34, 64, 0.6)
   - backdrop-filter: blur(12px)
   - 边框发光：border: 1px solid rgba(100, 255, 218, 0.15)
   - hover 状态增强边框和阴影：
     \`\`\`css
     .card:hover {
       border-color: rgba(100, 255, 218, 0.4);
       transform: translateY(-4px);
       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
     }
     \`\`\`

5. **发光交互效果**
   - 按钮使用边框发光而非填充背景
   - hover 时添加 box-shadow 发光效果：
     \`\`\`css
     .btn:hover {
       box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
     }
     \`\`\`
   - 内部 ripple 效果使用 radial-gradient 扩展动画

6. **性能优化**
   - 所有动画元素添加 will-change: transform, border-radius
   - 使用 transform3d 启用 GPU 加速
   - blob 容器使用 pointer-events: none 避免交互阻断

**配色方案（深海科技）**

主色调：
- 背景深色：#0a192f, #0d3b66, #112240
- 高亮青绿：#64ffda, #00e5ff
- 点缀紫色：#8b5cf6

中性色：
- 主要文字：#ccd6f6, #e6f1ff
- 次要文字：#8892b0
- 边框/分割：rgba(136, 146, 176, 0.3)

**关键 CSS 类示例**

\`\`\`css
/* 液体背景容器 */
.liquid-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(60px);
  opacity: 0.6;
  pointer-events: none;
}

/* 液体 blob */
.liquid-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%);
  animation: liquidMorph 20s ease-in-out infinite;
  will-change: transform, border-radius;
}

/* 玻璃态卡片 */
.glass-card {
  background: rgba(17, 34, 64, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: rgba(100, 255, 218, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* 发光按钮 */
.glow-btn {
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #64ffda;
  border-radius: 8px;
  color: #64ffda;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  background: rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  transform: translateY(-2px);
}
\`\`\`

**间距系统（8px 基础单位）**
- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px

**重要提示**
- 所有 blob 动画应使用不同的 duration 和 delay 避免同步
- 内容层必须设置 z-index 高于背景层
- 移动端应减小 blob 尺寸和模糊程度以优化性能
- 避免在 blob 上使用 box-shadow，使用 radial-gradient 代替
- 文字应有足够对比度，必要时添加 text-shadow`,

    'en-US': `Please create a Liquid Motion style interface using TailwindCSS, featuring a deep ocean tech theme with organic blob morphing animations and translucent gradients to create a fluid, dynamic, and futuristic visual experience.

**Core Design Requirements**

1. **Liquid Shape Morphing System**
   - Use complex 8-value border-radius for organic shapes:
     \`\`\`css
     border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
     \`\`\`
   - Animate through 4 keyframes with @keyframes:
     \`\`\`css
     @keyframes liquidMorph {
       0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0) rotate(0deg) scale(1); }
       25% { border-radius: 60% 40% 30% 70% / 50% 60% 50% 40%; transform: translate(30px, -30px) rotate(90deg) scale(1.1); }
       50% { border-radius: 30% 70% 60% 40% / 60% 40% 50% 60%; transform: translate(-20px, 40px) rotate(180deg) scale(0.95); }
       75% { border-radius: 70% 30% 40% 60% / 40% 60% 70% 30%; transform: translate(40px, 20px) rotate(270deg) scale(1.05); }
     }
     \`\`\`
   - Animation cycles should be 15-25 seconds with ease-in-out timing

2. **Multi-layer Blur Backgrounds**
   - Stack 3-4 blob layers with different animation durations and delays
   - Apply filter: blur(30-60px) to container for blending effect
   - Define blob colors with radial-gradient:
     \`\`\`css
     background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, rgba(0, 229, 255, 0.1) 50%, transparent 70%);
     \`\`\`

3. **Deep Ocean Tech Color Palette**
   - Main background gradient: #0a192f → #0d3b66 → #112240
   - Primary blob: rgba(0, 229, 255, 0.35) cyan-blue
   - Secondary blob: rgba(100, 255, 218, 0.3) teal
   - Accent blob: rgba(139, 92, 246, 0.25) violet
   - Highlight: #64ffda
   - Text: #ccd6f6 (primary) / #8892b0 (secondary)

4. **Glassmorphism Card Components**
   - Semi-transparent background: rgba(17, 34, 64, 0.6)
   - backdrop-filter: blur(12px)
   - Glowing border: border: 1px solid rgba(100, 255, 218, 0.15)
   - Enhanced hover state:
     \`\`\`css
     .card:hover {
       border-color: rgba(100, 255, 218, 0.4);
       transform: translateY(-4px);
       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
     }
     \`\`\`

5. **Glow Interaction Effects**
   - Buttons use border glow instead of filled backgrounds
   - Add box-shadow glow on hover:
     \`\`\`css
     .btn:hover {
       box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
     }
     \`\`\`
   - Internal ripple effect using expanding radial-gradient

6. **Performance Optimization**
   - Add will-change: transform, border-radius to all animated elements
   - Use transform3d for GPU acceleration
   - Set pointer-events: none on blob containers

**Color Palette (Deep Ocean Tech)**

Primary colors:
- Background darks: #0a192f, #0d3b66, #112240
- Highlight teal: #64ffda, #00e5ff
- Accent purple: #8b5cf6

Neutral colors:
- Primary text: #ccd6f6, #e6f1ff
- Secondary text: #8892b0
- Borders/dividers: rgba(136, 146, 176, 0.3)

**Key CSS Class Examples**

\`\`\`css
/* Liquid background container */
.liquid-bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(60px);
  opacity: 0.6;
  pointer-events: none;
}

/* Liquid blob */
.liquid-blob {
  position: absolute;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.4) 0%, transparent 70%);
  animation: liquidMorph 20s ease-in-out infinite;
  will-change: transform, border-radius;
}

/* Glass card */
.glass-card {
  background: rgba(17, 34, 64, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: rgba(100, 255, 218, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Glow button */
.glow-btn {
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #64ffda;
  border-radius: 8px;
  color: #64ffda;
  transition: all 0.3s ease;
}

.glow-btn:hover {
  background: rgba(100, 255, 218, 0.1);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
  transform: translateY(-2px);
}
\`\`\`

**Spacing System (8px base unit)**
- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px

**Important Notes**
- All blob animations should use different durations and delays to avoid synchronization
- Content layer must have higher z-index than background layer
- Reduce blob size and blur intensity on mobile for performance
- Avoid box-shadow on blobs, use radial-gradient instead
- Text should have sufficient contrast, add text-shadow when necessary`
  },

  stylePrompt: {
    'zh-CN': `角色：你是一位专精于「深海科技数据可视化」的 UI 设计师，擅长运用流体动态效果和有机形态创造沉浸式的数据仪表板体验。你的设计灵感来自深海生物的发光特性和水下光影的流动美学。

场景定位：
- 主要应用于数据分析平台、监控仪表板、SaaS 产品后台
- 适合展示实时数据流、业务指标、系统状态等信息
- 界面应传达「专业、可靠、前沿」的品牌形象
- 用户群体为数据分析师、产品经理、技术团队

视觉设计理念：
- 以深海蓝色系为基底，营造沉浸式的数据探索环境
- 液体 blob 作为背景装饰，象征数据的流动性和活力
- 所有 UI 组件应有统一的玻璃态质感，呈现层次分明的信息架构
- 高亮色（青绿 #64ffda）仅用于关键数据和交互元素，保持视觉焦点
- 大量留白和清晰的网格系统，确保数据的可读性

材质与质感：
- 背景层：多个半透明渐变 blob 叠加，通过大面积模糊（blur 30-60px）创造深海般的氛围
- 卡片层：使用 backdrop-filter blur 实现玻璃态效果，边框带有微弱的青绿发光
- 按钮：透明背景配合发光边框，hover 时产生光晕扩散效果
- 图标：线性描边风格，颜色与高亮色保持一致
- 文字：主要内容使用浅色（#ccd6f6），次要信息使用灰色调（#8892b0）

交互体验：
- 所有 blob 动画应缓慢且有呼吸感，单次变形周期 15-25 秒
- 卡片 hover 时轻微上浮（translateY -4px）并增强边框发光
- 按钮交互应有明确的状态反馈：默认 → hover（发光）→ active（按压）
- 数据更新时可以有微妙的脉动动画，但避免分散注意力
- 页面滚动时背景 blob 可以有轻微的视差效果

数据展示规范：
- 数值使用大字号（24-48px）和粗体，确保一眼可见
- 趋势指标（上升/下降）使用颜色编码：青绿色表示正向，红色表示负向
- 图表应与整体配色协调，避免使用过于鲜艳的颜色
- 标签和说明文字使用小号字体和次要颜色，不与数据争夺注意力

氛围营造：
- 用户进入界面时应感受到「专业的数据指挥中心」氛围
- 流动的液体背景暗示数据的实时性和动态性
- 深色背景配合发光元素，营造高科技感但不压抑
- 整体视觉应让用户感到「一切尽在掌控」，信息清晰且易于理解
- 动效应该是辅助性的，增强体验但不干扰工作效率

技术实现要点：
- 使用 CSS Grid 或 Flexbox 构建响应式布局
- blob 动画使用纯 CSS @keyframes，不依赖 JavaScript
- 玻璃态效果通过 backdrop-filter: blur() 实现
- 所有动画元素添加 will-change 优化性能
- 移动端应简化 blob 数量和模糊程度，优先保证性能`,

    'en-US': `Role: You are a UI designer specializing in "Deep Ocean Tech Data Visualization," skilled at creating immersive data dashboard experiences through fluid dynamics and organic forms. Your design inspiration comes from the bioluminescent properties of deep-sea creatures and the flowing aesthetics of underwater light.

Scene Positioning:
- Primarily for data analytics platforms, monitoring dashboards, and SaaS product backends
- Ideal for displaying real-time data streams, business metrics, and system status
- Interface should convey a "professional, reliable, cutting-edge" brand image
- Target users are data analysts, product managers, and technical teams

Visual Design Philosophy:
- Deep ocean blue palette as the foundation, creating an immersive data exploration environment
- Liquid blobs as background decoration, symbolizing data fluidity and vitality
- All UI components should have unified glassmorphism texture, presenting clear information hierarchy
- Highlight color (teal #64ffda) only for key data and interactive elements to maintain visual focus
- Generous whitespace and clear grid system to ensure data readability

Materials & Textures:
- Background layer: Multiple semi-transparent gradient blobs overlaid, with heavy blur (30-60px) creating deep-sea atmosphere
- Card layer: backdrop-filter blur for glass effect, borders with subtle teal glow
- Buttons: Transparent background with glowing border, halo expansion effect on hover
- Icons: Linear stroke style, color consistent with highlight
- Text: Primary content in light colors (#ccd6f6), secondary info in gray tones (#8892b0)

Interaction Experience:
- All blob animations should be slow and breathing, single morph cycle 15-25 seconds
- Cards lift slightly on hover (translateY -4px) with enhanced border glow
- Buttons should have clear state feedback: default → hover (glow) → active (pressed)
- Subtle pulse animation for data updates, but avoid distracting attention
- Background blobs can have slight parallax effect on page scroll

Data Display Standards:
- Numbers use large font (24-48px) and bold weight, ensuring visibility at a glance
- Trend indicators (up/down) use color coding: teal for positive, red for negative
- Charts should harmonize with overall color scheme, avoid overly bright colors
- Labels and descriptions use smaller font and secondary colors, not competing with data

Atmosphere Creation:
- Users should feel a "professional data command center" atmosphere upon entering
- Flowing liquid background suggests real-time and dynamic nature of data
- Dark background with glowing elements creates high-tech feel without being oppressive
- Overall visual should make users feel "everything is under control," information clear and easy to understand
- Motion effects should be supportive, enhancing experience without disrupting work efficiency

Technical Implementation:
- Use CSS Grid or Flexbox for responsive layouts
- Blob animations using pure CSS @keyframes, no JavaScript dependency
- Glass effect achieved through backdrop-filter: blur()
- Add will-change to all animated elements for performance
- Simplify blob count and blur intensity on mobile, prioritize performance`
  },

  demoHTML,
  customStyles,
  fullPageHTML,
  fullPageStyles,
};

export default liquid;
