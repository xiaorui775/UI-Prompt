// Kawaii Minimal 風格定義
// ✅ 階段 3.2 優化: 移除所有靜態 import，改用動態加載
// 預期減少構建體積：25 KB

export const kawaiiMinimalStyles = [
  {
    id: 'kawaii-minimal',
    title: 'styles.visual.kawaii-minimal.title',
    description: 'styles.visual.kawaii-minimal.description',
    demoHTML: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem; background: linear-gradient(135deg, #FFF9F5 0%, #FFFFFF 100%); border-radius: 20px;">
        <!-- 標題區 -->
        <div style="text-align: center; margin-bottom: 2rem;">
          <svg width="64" height="64" viewBox="0 0 64 64" style="margin-bottom: 1rem;">
            <circle cx="32" cy="32" r="26" stroke="#FFB6D9" stroke-width="2.5" fill="none"/>
            <circle cx="24" cy="28" r="3" fill="#FFB6D9"/>
            <circle cx="40" cy="28" r="3" fill="#FFB6D9"/>
            <path d="M 20 38 Q 32 46 44 38" stroke="#FFB6D9" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </svg>
          <h2 style="font-size: 1.75rem; font-weight: 800; background: linear-gradient(135deg, #FFB6D9, #E6D5FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0;">Kawaii Minimal</h2>
          <p style="color: #666; margin-top: 0.5rem;">Sweet, simple & expressive</p>
        </div>

        <!-- 按鈕組 -->
        <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap;">
          <button style="padding: 0.75rem 1.75rem; border: none; border-radius: 50px; background: linear-gradient(135deg, #FFB6D9, #E6D5FF); color: #333; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(255, 182, 217, 0.3); transition: transform 0.3s;">
            Primary Button
          </button>
          <button style="padding: 0.75rem 1.75rem; border: 2px solid #E6D5FF; border-radius: 50px; background: #FFFFFF; color: #333; font-weight: 600; cursor: pointer; transition: transform 0.3s;">
            Secondary
          </button>
        </div>

        <!-- 卡片網格 -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <!-- 粉紅卡片 -->
          <div style="background: #FFFFFF; padding: 1.5rem; border-radius: 25px; border: 2px solid #FFB6D9; text-align: center; transition: transform 0.3s;">
            <svg width="40" height="40" viewBox="0 0 48 48" style="margin-bottom: 0.75rem;">
              <circle cx="24" cy="24" r="18" stroke="#FFB6D9" stroke-width="2" fill="none"/>
              <path d="M 18 20 L 22 24 L 30 16" stroke="#FFB6D9" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #333; margin: 0 0 0.5rem 0;">Feature One</h3>
            <p style="color: #666; margin: 0; font-size: 0.875rem;">Simple and delightful</p>
          </div>

          <!-- 紫色卡片 -->
          <div style="background: #FFFFFF; padding: 1.5rem; border-radius: 25px; border: 2px solid #E6D5FF; text-align: center; transition: transform 0.3s;">
            <svg width="40" height="40" viewBox="0 0 48 48" style="margin-bottom: 0.75rem;">
              <path d="M 24 8 L 28 20 L 40 20 L 30 28 L 34 40 L 24 32 L 14 40 L 18 28 L 8 20 L 20 20 Z" stroke="#E6D5FF" stroke-width="2" fill="none"/>
            </svg>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #333; margin: 0 0 0.5rem 0;">Feature Two</h3>
            <p style="color: #666; margin: 0; font-size: 0.875rem;">Colorful & friendly</p>
          </div>

          <!-- 綠色卡片 -->
          <div style="background: #FFFFFF; padding: 1.5rem; border-radius: 25px; border: 2px solid #D4F1D4; text-align: center; transition: transform 0.3s;">
            <svg width="40" height="40" viewBox="0 0 48 48" style="margin-bottom: 0.75rem;">
              <path d="M 24 10 L 24 24 M 24 24 L 38 24 M 24 24 L 24 38 M 24 24 L 10 24" stroke="#D4F1D4" stroke-width="2" fill="none" stroke-linecap="round"/>
              <circle cx="24" cy="24" r="4" stroke="#D4F1D4" stroke-width="2" fill="none"/>
            </svg>
            <h3 style="font-size: 1.125rem; font-weight: 700; color: #333; margin: 0 0 0.5rem 0;">Feature Three</h3>
            <p style="color: #666; margin: 0; font-size: 0.875rem;">Fresh & organic</p>
          </div>
        </div>

        <!-- 標籤雲 -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
          <span style="padding: 0.5rem 1.25rem; background: linear-gradient(135deg, #FFB6D9, #FFDBE9); border: 1.5px solid #FFB6D9; border-radius: 50px; color: #333; font-weight: 600; font-size: 0.875rem;">Design</span>
          <span style="padding: 0.5rem 1.25rem; background: linear-gradient(135deg, #E6D5FF, #F5EDFF); border: 1.5px solid #E6D5FF; border-radius: 50px; color: #333; font-weight: 600; font-size: 0.875rem;">UI/UX</span>
          <span style="padding: 0.5rem 1.25rem; background: linear-gradient(135deg, #D4F1D4, #E8F8E8); border: 1.5px solid #D4F1D4; border-radius: 50px; color: #333; font-weight: 600; font-size: 0.875rem;">Creative</span>
          <span style="padding: 0.5rem 1.25rem; background: linear-gradient(135deg, #FFF9E6, #FFFCF0); border: 1.5px solid #FFE5A0; border-radius: 50px; color: #333; font-weight: 600; font-size: 0.875rem;">Playful</span>
        </div>

        <style>
          @keyframes kawaiiBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
          button:hover {
            animation: kawaiiBounce 0.6s ease-in-out;
          }
          div[style*="border: 2px solid"]:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 16px rgba(255, 182, 217, 0.2);
          }
        </style>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'kawaii-minimal',
    // Kawaii Minimal 風格 StylePrompt（較長版）
    stylePrompt: {
      'zh-CN': `角色：你是一位专精于 Kawaii + Minimal 视觉语言的 UI 设计师，需要为面向年轻用户的仪表板或创意工具设计一套「可爱但不杂乱」的界面。

场景定位：
界面适用于插画工具、创意工作台、学习看板或轻量任务管理应用，目标用户多为学生、设计师或内容创作者。他们希望界面在情绪上给人鼓励、放松和陪伴感，同时仍然保持「好用」「清晰」「不会被过度装饰干扰」的使用体验。

视觉设计理念：
Kawaii Minimal 并不是简单地堆叠可爱元素，而是在清晰布局和信息层级之上，点缀少量「糖果色、笑脸和圆角」。背景保持非常柔和的奶油白或淡粉渐变，让整个画面显得明亮而轻盈；主卡片与模块保留极简结构，只在关键区域使用高饱和的糖果色渐变来表达情绪。整体要给人「干净、甜但不过度甜腻」的印象。

材质与质感：
视觉材质偏向平滑、柔软的塑料与贴纸感：大尺寸圆角卡片像被贴在白板上的色纸，按钮则像小软糖或圆角胶囊。大部分区域保持纯色或轻微渐变，不使用复杂纹理，以保持模块边界清晰。图标与小插图通过简化形体和明亮配色传达可爱感，而不是追求写实细节；适度使用手写感标题或手绘线条增强亲密感，但正文仍保持易读的系统无衬线字体。

交互体验：
交互强调「轻、软、弹」的感觉。按钮在悬停时略微上浮并伴随小幅弹跳或放大，像小软糖被轻轻弹起；卡片在 hover 时轻微提亮或产生 1–2 像素的位移，制造「被注意到」但不紧张的反馈。动效时长略长于常规企业 UI（200–300ms），缓动曲线偏向 ease-out 或带一点回弹，增强可爱与轻盈感。所有负面状态（错误、删除）也尽量以柔和的方式呈现，避免带来过度压力。

氛围营造：
整体氛围像是干净的文具桌或贴满贴纸的笔记本封面：到处都有小面积的可爱元素，但画面中心仍然留给内容本身。粉、紫、薄荷绿和奶油黄等糖果色只在按钮、标签、图标中出现，背景和大块区域仍使用低饱和浅色维持视觉平衡。使用时，用户应该感觉「这是一个会让自己心情变好、但又能认真完成任务的空间」。`,
      'en-US': `Role: You are a UI designer specialized in Kawaii + Minimal aesthetics, designing an interface that feels cute and friendly without becoming cluttered or childish.

Scenario Positioning:
This style suits illustration tools, creative dashboards, study planners, or light‑weight task managers aimed at younger users, students, and creators. The UI should offer emotional comfort and encouragement while staying functional, clear, and free from overwhelming decoration.

Visual Design Philosophy:
Kawaii Minimal builds cuteness on top of a clean, minimal layout. The background stays very soft—creamy whites and light pastels—while primary cards and modules keep simple structures with strong hierarchy. Candy colors, smiley icons, and rounded shapes are used as accents rather than the entire palette. The intended impression is “bright, sweet, approachable, but still tidy and usable”.

Materials & Textures:
Visual materials resemble smooth plastic and stickers: large high‑radius cards feel like color paper pieces, and buttons resemble small gummy candies or pill capsules. Most surfaces are flat color or gentle gradients with no heavy textures, so sections remain legible. Icons are simplified and expressive rather than realistic; handwritten‑style headings or doodle lines can be used sparingly to add personality, while body text remains in a clean sans‑serif font for readability.

Interaction Experience:
Interactions should feel light, soft, and slightly bouncy. Primary buttons float up a bit and may “bounce” subtly on hover; cards respond with mild lighting and tiny position shifts to signal focus without tension. Animation timings around 200–300ms with easing curves that gently overshoot create a playful yet controlled feel. Even error and destructive states should be presented in a gentle, non‑stressful way, keeping the emotional tone positive.

Atmosphere:
The overall mood is that of a neat stationery desk or a sticker‑decorated notebook cover. Cute elements are scattered across the interface, but content remains center stage. Candy pinks, lavenders, mint greens, and soft yellows appear mainly on buttons, tags, and icons, while large areas rely on desaturated light tones to avoid overload. Users should feel that this is a place where they can smile, relax, and still get real work done.`
    },
    // Kawaii Minimal CustomPrompt（模板級 AI 指令）
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个 **Kawaii Minimal（可爱极简）** 风格的界面，在保持结构简洁的前提下加入糖果色、圆角和表情化小元素。

**核心设计要求**

1. **柔和背景与整体气氛**
   - 背景使用奶油白 / 浅粉渐变：\`#FFF9F5 → #FFFFFF\`、\`from-rose-50 via-pink-50 to-white\`。
   - 气氛关键词：甜、轻、治愈、没有压力。

2. **圆角与卡片造型**
   - 卡片圆角半径偏大：\`20px–28px\`，按钮圆角可到 \`9999px\`（胶囊形）。
   - 阴影轻盈柔和：\`0 4px 12px rgba(255, 182, 217, 0.25)\` 之类。
   - Tailwind 示例：
     \`\`\`html
     <div class="bg-white rounded-[24px] shadow-[0_8px_24px_rgba(248,187,208,0.35)] border border-pink-100/80 p-6">
       <!-- Kawaii card content -->
     </div>
     \`\`\`

3. **糖果色配色系统**
   - 主色：粉红、薰衣草紫、薄荷绿、奶油黄。
   - 示例色值：
     - 粉：\`#FFB6D9\`、\`#FFDBE9\`
     - 紫：\`#E6D5FF\`
     - 绿：\`#D4F1D4\`
     - 黄：\`#FFF9E6\`
   - 按钮常用渐变：
     \`\`\`css
     .kawaii-btn-primary {
       background: linear-gradient(135deg, #FFB6D9, #E6D5FF);
       color: #333333;
     }
     \`\`\`

4. **表情化图标与排版**
   - 使用简单几何图形组合成可爱图标（星星、笑脸、爱心等）。
   - 标题可搭配轻微手写感字体或模拟效果，正文保持系统无衬线字体。
   - 字重：标题粗体，正文中等；字号不宜过小，保证可读性。

5. **微动效与「弹跳感」**
   - 按钮 hover 时使用轻微弹跳或上浮效果：
     \`\`\`css
     @keyframes kawaiiBounce {
       0%, 100% { transform: translateY(0); }
       50% { transform: translateY(-10px); }
     }
     .kawaii-button:hover {
       animation: kawaiiBounce 0.6s ease-in-out;
     }
     \`\`\`
   - 卡片 hover 使用轻微位移 + 阴影加深，但仍保持温和。

**配色方案（Kawaii Minimal）**

- 背景：\`#FFF9F5\`、\`#FFFFFF\`
- 主要糖果色：\`#FFB6D9\`、\`#E6D5FF\`、\`#D4F1D4\`、\`#FFF9E6\`
- 文本：\`#333333\`（标题）、\`#666666\`（正文）

**重要提示**
- 整体结构仍然是「极简」：模块数量不多、信息密度适中。
- 用颜色和圆角去传达可爱感，而不是堆叠复杂装饰。
- 文案与标签可以更俏皮，但注意保持清晰、易懂。`,
      'en-US': `Create a **Kawaii Minimal** style interface using TailwindCSS: simple layout, high-radius cards, candy gradients, and playful details without visual overload.

**Core Design Requirements**

1. **Soft Background**
   - Use creamy or pastel gradients like \`#FFF9F5 → #FFFFFF\`.
   - Mood keywords: sweet, light, comforting.

2. **Rounded Cards and Buttons**
   - Large radii for cards (20–28px) and pill-shaped buttons (\`rounded-full\`).
   - Soft pastel shadows for elevation.

3. **Candy Color Palette**
   - Pinks, lavender, mint, and soft yellow as main accents.
   - Use gradients on primary buttons and badges; keep text dark enough for legibility.

4. **Expressive Icons**
   - Simple geometric icons (stars, smile faces, hearts) and sticker-like tags.
   - Combine a playful subtitle with a clear, readable system font for content.

5. **Micro-interactions**
   - Gentle bounce or float on hover for primary buttons.
   - Slight lift and shadow increase on card hover while remaining soft.

**Important Notes**
- Keep the layout minimal and breathable; do not overload with decorations.
- Use vivid candy colors only for key elements; keep the rest neutral and light.
- Ensure typography and contrast remain usable despite the playful visuals.`
    }
  }
];
