/**
 * Kinetic Typography - Custom Prompt
 * 動態排版風格的 AI Prompt 模板
 */

export const customPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师,请使用 TailwindCSS 创建一个与当前「动态排版（Kinetic Typography）」风格高度接近的 UI。

**核心理念**
动态排版通过 CSS 动画让文字本身成为视觉焦点,使用脉冲、弹跳、渐变等效果营造强烈视觉冲击力。文字不再是静态信息载体,而是动态的视觉元素。

**核心设计要求**

1. **动态文字动画**
   - 脉冲效果:
     \`\`\`css
     @keyframes text-pulse {
       0%, 100% { transform: scale(1); opacity: 1; }
       50% { transform: scale(1.2); opacity: 0.8; letter-spacing: 0.2em; }
     }
     .pulse-text {
       animation: text-pulse 2s ease-in-out infinite;
     }
     \`\`\`
   - 浮动效果:
     \`\`\`css
     @keyframes text-float {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-20px); }
     }
     \`\`\`

2. **彩虹渐变文字**
   - 渐变背景裁剪:
     \`\`\`css
     .gradient-text {
       background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
       background-size: 300% 300%;
       -webkit-background-clip: text;
       background-clip: text;
       -webkit-text-fill-color: transparent;
       animation: gradient-flow 3s ease infinite;
     }
     @keyframes gradient-flow {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

3. **发光效果**
   - 多层阴影:
     \`\`\`css
     .glow-text {
       text-shadow:
         0 0 10px rgba(59, 130, 246, 0.8),
         0 0 20px rgba(59, 130, 246, 0.6),
         0 0 40px rgba(59, 130, 246, 0.4);
     }
     \`\`\`

4. **字符级动画**
   - 波浪弹跳:
     \`\`\`css
     @keyframes char-wave {
       0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
       25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
       50% { transform: translateY(0) rotate(0deg) scale(1); }
       75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
     }
     .char {
       display: inline-block;
       animation: char-wave 2s ease-in-out infinite;
     }
     .char:nth-child(1) { animation-delay: 0s; }
     .char:nth-child(2) { animation-delay: 0.1s; }
     \`\`\`

5. **打字机效果**
   - 打字动画:
     \`\`\`css
     @keyframes typing {
       from { width: 0; }
       to { width: 100%; }
     }
     @keyframes blink {
       0%, 50% { border-color: transparent; }
       51%, 100% { border-color: #3b82f6; }
     }
     .typewriter {
       overflow: hidden;
       border-right: 2px solid #3b82f6;
       white-space: nowrap;
       animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
     }
     \`\`\`

6. **数字计数动画**
   - JavaScript 实现:
     \`\`\`javascript
     const counter = document.querySelector('.count-up');
     const target = parseInt(counter.getAttribute('data-target'));
     let current = 0;
     const increment = target / 100;
     const timer = setInterval(() => {
       current += increment;
       if (current >= target) {
         counter.textContent = target;
         clearInterval(timer);
       } else {
         counter.textContent = Math.floor(current);
       }
     }, 20);
     \`\`\`

**配色方案**

主色调（霓虹彩虹）:
- 蓝色: #3b82f6 (text-blue-500)
- 粉色: #ec4899 (text-pink-500)
- 黄色: #fbbf24 (text-yellow-400)
- 绿色: #10b981 (text-green-500)
- 紫色: #8b5cf6 (text-purple-500)

背景与对比:
- 深色背景: #000000 (bg-black), #0f0f0f
- 高对比文字: #ffffff (text-white)

**关键 CSS 类示例**

\`\`\`css
/* 动态标题 */
.kinetic-heading {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 3s ease infinite, text-float 2s ease-in-out infinite;
}

/* 打字机效果 */
.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #3b82f6;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
}

/* 字符波浪 */
.char-wave {
  display: inline-block;
  animation: char-wave 1.5s ease-in-out infinite;
}

/* 数字跳动 */
.pulse-price {
  animation: price-pulse 2s ease-in-out infinite;
  background: linear-gradient(135deg, #3b82f6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes price-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
\`\`\`

**动画规范**
- 慢速动画: 2-3s (主标题、背景渐变)
- 中速动画: 1-1.5s (字符、卡片)
- 快速动画: 0.5-0.75s (按钮、交互反馈)
- 缓动函数: ease-in-out (流畅自然)

**布局建议**
- 使用 \`clamp()\` 实现响应式字体大小
- 每屏最多 3-5 个动态元素,避免过度刺激
- 重要内容使用动画吸引注意,次要内容保持静态
- Hero 区域使用最大号动态标题 (8rem+)

**重要提示**
- ✅ 所有文字动画使用 \`transform\` + \`opacity\` (GPU 加速)
- ✅ 避免过度使用动画,每屏最多 3-5 个动态元素
- ✅ 支持 \`@media (prefers-reduced-motion: reduce)\` 可访问性
- ✅ 确保文字可读性,对比度至少 4.5:1
- ✅ 使用 \`will-change\` 提示浏览器优化动画元素
- ❌ 不要在正文段落使用动画,仅标题和重点元素
- ❌ 避免使用 \`animation-iteration-count: infinite\` 在非装饰性元素`,

  'en-US': `You are now a senior UI designer and front-end engineer. Please use TailwindCSS to create a UI that closely matches the current "Kinetic Typography" style.

**Core Philosophy**
Kinetic typography uses CSS animations to make text itself the visual focus, creating strong visual impact through pulsing, bouncing, and gradient effects. Text is no longer a static information carrier but a dynamic visual element.

**Core Design Requirements**

1. **Dynamic Text Animations**
   - Pulse effect:
     \`\`\`css
     @keyframes text-pulse {
       0%, 100% { transform: scale(1); opacity: 1; }
       50% { transform: scale(1.2); opacity: 0.8; letter-spacing: 0.2em; }
     }
     .pulse-text {
       animation: text-pulse 2s ease-in-out infinite;
     }
     \`\`\`
   - Float effect:
     \`\`\`css
     @keyframes text-float {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-20px); }
     }
     \`\`\`

2. **Rainbow Gradient Text**
   - Gradient background clip:
     \`\`\`css
     .gradient-text {
       background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
       background-size: 300% 300%;
       -webkit-background-clip: text;
       background-clip: text;
       -webkit-text-fill-color: transparent;
       animation: gradient-flow 3s ease infinite;
     }
     @keyframes gradient-flow {
       0%, 100% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
     }
     \`\`\`

3. **Glow Effects**
   - Multi-layer shadow:
     \`\`\`css
     .glow-text {
       text-shadow:
         0 0 10px rgba(59, 130, 246, 0.8),
         0 0 20px rgba(59, 130, 246, 0.6),
         0 0 40px rgba(59, 130, 246, 0.4);
     }
     \`\`\`

4. **Character-level Animations**
   - Wave bounce:
     \`\`\`css
     @keyframes char-wave {
       0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
       25% { transform: translateY(-20px) rotate(-10deg) scale(1.2); }
       50% { transform: translateY(0) rotate(0deg) scale(1); }
       75% { transform: translateY(-10px) rotate(10deg) scale(1.1); }
     }
     .char {
       display: inline-block;
       animation: char-wave 2s ease-in-out infinite;
     }
     .char:nth-child(1) { animation-delay: 0s; }
     .char:nth-child(2) { animation-delay: 0.1s; }
     \`\`\`

5. **Typewriter Effect**
   - Typing animation:
     \`\`\`css
     @keyframes typing {
       from { width: 0; }
       to { width: 100%; }
     }
     @keyframes blink {
       0%, 50% { border-color: transparent; }
       51%, 100% { border-color: #3b82f6; }
     }
     .typewriter {
       overflow: hidden;
       border-right: 2px solid #3b82f6;
       white-space: nowrap;
       animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
     }
     \`\`\`

6. **Number Counter Animation**
   - JavaScript implementation:
     \`\`\`javascript
     const counter = document.querySelector('.count-up');
     const target = parseInt(counter.getAttribute('data-target'));
     let current = 0;
     const increment = target / 100;
     const timer = setInterval(() => {
       current += increment;
       if (current >= target) {
         counter.textContent = target;
         clearInterval(timer);
       } else {
         counter.textContent = Math.floor(current);
       }
     }, 20);
     \`\`\`

**Color Scheme**

Primary Colors (Neon Rainbow):
- Blue: #3b82f6 (text-blue-500)
- Pink: #ec4899 (text-pink-500)
- Yellow: #fbbf24 (text-yellow-400)
- Green: #10b981 (text-green-500)
- Purple: #8b5cf6 (text-purple-500)

Background & Contrast:
- Dark background: #000000 (bg-black), #0f0f0f
- High contrast text: #ffffff (text-white)

**Key CSS Class Examples**

\`\`\`css
/* Dynamic heading */
.kinetic-heading {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  background: linear-gradient(45deg, #3b82f6, #ec4899, #fbbf24, #10b981);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 3s ease infinite, text-float 2s ease-in-out infinite;
}

/* Typewriter effect */
.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid #3b82f6;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
}

/* Character wave */
.char-wave {
  display: inline-block;
  animation: char-wave 1.5s ease-in-out infinite;
}

/* Pulsing price */
.pulse-price {
  animation: price-pulse 2s ease-in-out infinite;
  background: linear-gradient(135deg, #3b82f6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes price-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
\`\`\`

**Animation Guidelines**
- Slow animations: 2-3s (main titles, background gradients)
- Medium animations: 1-1.5s (characters, cards)
- Fast animations: 0.5-0.75s (buttons, interaction feedback)
- Easing function: ease-in-out (smooth and natural)

**Layout Recommendations**
- Use \`clamp()\` for responsive font sizes
- Maximum 3-5 animated elements per viewport to avoid overstimulation
- Use animations for important content to attract attention, keep secondary content static
- Use largest dynamic titles in Hero section (8rem+)

**Important Notes**
- ✅ All text animations use \`transform\` + \`opacity\` (GPU acceleration)
- ✅ Avoid overusing animations, maximum 3-5 dynamic elements per screen
- ✅ Support \`@media (prefers-reduced-motion: reduce)\` for accessibility
- ✅ Ensure text readability with contrast ratio of at least 4.5:1
- ✅ Use \`will-change\` to hint browser for animation optimization
- ❌ Don't animate body paragraphs, only titles and key elements
- ❌ Avoid \`animation-iteration-count: infinite\` on non-decorative elements`
};