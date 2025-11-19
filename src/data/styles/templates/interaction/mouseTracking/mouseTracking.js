// Mouse Tracking Interaction Style
import {
  mouseTrackingFullPageHTML,
  mouseTrackingFullPageStyles
} from './mouseTrackingFullPage';

export const mouseTracking = {
  id: 'interaction-mouse-tracking',
  title: 'styles.interaction.mouseTracking.title',
  description: 'styles.interaction.mouseTracking.description',
  demoHTML: `
    <div class="int-demo-container">
      <div class="int-hologram-card">
        <div class="int-hologram-glow"></div>
        <div class="int-card-content">
          <div class="int-neon-text">HOVER</div>
          <div class="int-tech-lines"></div>
        </div>
      </div>
    </div>
  `,
  customStyles: `
    .int-demo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    .int-hologram-card {
      position: relative;
      width: 120px;
      height: 120px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
      border: 1px solid rgba(59, 130, 246, 0.5);
      border-radius: 12px;
      overflow: hidden;
      box-shadow:
        0 0 20px rgba(59, 130, 246, 0.3),
        inset 0 0 20px rgba(59, 130, 246, 0.1);
    }

    .int-hologram-glow {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
      animation: int-glow-pulse 3s ease-in-out infinite;
    }

    .int-card-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 0.5rem;
    }

    .int-neon-text {
      font-size: 1.25rem;
      font-weight: 700;
      color: #60a5fa;
      text-shadow: 0 0 10px rgba(96, 165, 250, 0.8);
      letter-spacing: 0.1em;
    }

    .int-tech-lines {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #60a5fa, transparent);
      box-shadow: 0 0 8px rgba(96, 165, 250, 0.5);
    }

    @keyframes int-glow-pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
  `,
  fullPageHTML: mouseTrackingFullPageHTML,
  fullPageStyles: mouseTrackingFullPageStyles,
  previews: [],
  // 互動樣式級 customPrompt：滑鼠追蹤全息卡片
  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Mouse Tracking 全息卡片」示例界面交互风格高度接近的 UI 模块。
要求：保留中央发光卡片、全息光晕与鼠标/指针交互反馈，只允许替换文案、色板和周围布局。输出语义化 HTML 与 TailwindCSS 原子类（或等价工具类），并实现：
- 一个居中的矩形卡片，背景为蓝紫渐变或类似的高科技色彩；
- 卡片底层有柔和的径向光晕，缓慢呼吸式动画；
- 鼠标移动到卡片区域时，卡片或光晕会根据指针位置产生位移/亮度变化，营造「被追踪」的全息感。

可将此模块嵌入登陆页 Hero、控制面板或交互动效展示区，但交互体验必须与当前示例一样轻盈、流畅且科技感十足。`,
    'en-US': `You are a senior UI designer and front-end engineer. Generate a mouse-tracking hologram card interaction that looks very close to the current “Mouse Tracking” demo.
Keep the central glowing card, holographic glow and pointer-driven feedback. You may change copy, colors and surrounding layout, but not the core interaction pattern. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

Requirements:
- A centered rectangular card with a blue/purple tech gradient background.
- A soft radial glow layer beneath the card with a slow breathing animation.
- When the pointer moves over the card area, the card and/or glow respond to cursor position (for example slight translation, tilt or brightness shift) to create a tracked hologram feel.

You may embed this module in a hero section, control panel or interaction gallery, but the overall feel must remain light, smooth and strongly “sci-fi UI” as in the current demo.`
  },
  // 互動樣式級 stylePrompt：Mouse Tracking 交互語言
  stylePrompt: {
    'zh-CN': `角色：你是一位专精于「滑鼠追踪 / 指针跟随」交互的 UI 设计师，擅长运用光效与位移营造科幻感。

设计理念：
- 通过卡片与光晕对用户指针位置做连续反馈，让界面感觉「感知到用户的存在」；
- 交互应流畅、克制，不抢占主要信息，却能明显提升科技氛围。

核心设计要点：
1. 感应区域：通常为卡片本身或其周围容器，监听鼠标/指针位置。
2. 反馈形式：可采用平移、缩放、倾斜、亮度变化或光斑跟随等方式，幅度应适中。
3. 光效语言：使用蓝色、青色、紫色等冷色系渐变和发光阴影，营造全息 HUD 质感。
4. 性能与顺滑度：动画需使用硬件加速属性（如 transform），避免卡顿。

适用场景：
- 科技产品介绍页、控制面板、登陆页 Hero 动效、交互展示模块等。`,
    'en-US': `Role: You are a UI designer focused on mouse-tracking and pointer-following interactions, using light and motion to create sci-fi feel.

Design philosophy:
- Let cards and glows continuously react to cursor position so the interface appears aware of the user.
- Keep motion smooth and restrained so it enhances the experience without overpowering content.

Key points:
1. Sensing area: typically the card or its container listens to pointer position.
2. Response: use modest translation, scale, tilt or brightness changes, or a glow that follows the cursor.
3. Light language: favor cool gradients (blue, cyan, purple) and glow shadows to evoke a holographic HUD.
4. Performance: prefer transform-based animations and hardware-accelerated properties to maintain smoothness.

Use cases:
- Tech product landing heroes, dashboards, control panels and interaction galleries where you want a subtle but impressive “alive” effect.`
  }
};
