// Paper/Cutout Style Data
// 纸张剪贴风格数据

export const paperCutoutStyles = [
  {
    id: 'paperCutout',
    title: 'styles.visual.paperCutout.title',
    description: 'styles.visual.paperCutout.description',
    demoHTML: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">
      </head>
      <body>
        <!-- Paper/Cutout Style Demo -->
        <div class="paper-cutout-demo">
          <!-- Sticky Note Card -->
          <div class="sticky-note">
            <div class="sticky-pin"></div>
            <h4 class="sticky-title">Daily Task</h4>
            <p class="sticky-text">Design review at 2pm</p>
          </div>

          <!-- Paper Card -->
          <div class="paper-card">
            <div class="paper-clip"></div>
            <h4 class="paper-heading">Meeting Notes</h4>
            <p class="paper-body">Q4 planning discussion</p>
          </div>

          <!-- Collage Tags -->
          <div class="collage-group">
            <div class="collage-tag tag-pink">Ideas</div>
            <div class="collage-tag tag-blue">Tasks</div>
            <div class="collage-tag tag-green">Done</div>
          </div>
        </div>
      </body>
      </html>
    `,
    customStyles: `
      /* 演示容器 */
      .paper-cutout-demo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 16px;
        padding: 24px 16px;
        background: #FAF0E6;
        position: relative;
      }

      /* 便利贴样式 */
      .sticky-note {
        position: relative;
        padding: 18px 14px;
        background: linear-gradient(135deg, #FFF59D, #FFF176);
        border-radius: 2px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
        transform: rotate(-2deg);
        transition: all 0.3s ease;
        font-family: 'Caveat', cursive;
      }

      .sticky-note:hover {
        transform: rotate(0deg) translateY(-4px);
        box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
      }

      /* 图钉装饰 */
      .sticky-pin {
        position: absolute;
        top: -6px;
        right: 16px;
        width: 14px;
        height: 14px;
        background: #E57373;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      }

      .sticky-pin::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 5px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
      }

      .sticky-title {
        margin: 0 0 6px 0;
        font-size: 17px;
        font-weight: 700;
        color: #2C3E50;
      }

      .sticky-text {
        margin: 0;
        font-size: 13px;
        color: #34495E;
        line-height: 1.4;
      }

      /* 纸张卡片样式 */
      .paper-card {
        position: relative;
        padding: 18px 14px;
        background: #FFFAF0;
        border-radius: 2px;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
        transform: rotate(1deg);
        transition: all 0.3s ease;
        border-top: 3px dashed rgba(0,0,0,0.1);
      }

      .paper-card:hover {
        transform: rotate(0deg) translateY(-4px);
        box-shadow: 3px 3px 8px rgba(0,0,0,0.2);
      }

      /* 回形针装饰 */
      .paper-clip {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 20px;
        height: 6px;
        background: #90A4AE;
        border: 2px solid #78909C;
        border-radius: 3px;
        transform: rotate(15deg);
        box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
      }

      .paper-heading {
        margin: 0 0 6px 0;
        font-size: 16px;
        font-weight: 600;
        color: #2C3E50;
        font-family: 'Caveat', cursive;
      }

      .paper-body {
        margin: 0;
        font-size: 12px;
        color: #546E7A;
        line-height: 1.5;
      }

      /* 拼贴标签组 */
      .collage-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
      }

      .collage-tag {
        padding: 8px 14px;
        font-size: 12px;
        font-weight: 600;
        color: #2C3E50;
        border-radius: 2px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.12);
        transition: all 0.2s ease;
        cursor: pointer;
        font-family: 'Caveat', cursive;
      }

      .collage-tag:hover {
        transform: translateX(3px);
        box-shadow: 3px 3px 6px rgba(0,0,0,0.18);
      }

      .tag-pink {
        background: #F8BBD0;
        transform: rotate(-2deg);
      }

      .tag-blue {
        background: #90CAF9;
        transform: rotate(1deg);
      }

      .tag-green {
        background: #AED581;
        transform: rotate(-1deg);
      }
    `,
    // 透過預覽加載器動態載入完整頁面（避免首屏打包過大）
    fullPagePreviewId: 'paper-cutout',
    fullPageHTML: '', // 將在 paperCutoutFullPage.js 中定義
    fullPageStyles: '',
    // Paper Cutout 風格 StylePrompt（較長版敘事）
    stylePrompt: {
      'zh-CN': `角色：你是一位擅长纸张剪贴与手帐视觉语言的 UI 设计师，需要为灵感板、任务墙或个人记录工具设计一套 Paper/Cutout 风格界面。

场景定位：
界面好像一块被贴满便利贴、纸条和标签的软木板或书桌背景，适合做灵感收集、任务分类、日常计划或创意 Moodboard。用户希望在这个界面上快速记录想法、标记优先级、移动卡片，就像在实体笔记本或墙面上贴纸条一样自然。

视觉设计理念：
Paper/Cutout 风格的核心是「让界面看起来像由真实纸片拼贴而成」。模块不再是标准化的扁平卡片，而是略微错位、角度不同、质感各异的纸张组合。布局上依然需要清晰的层次和信息结构，但允许一定程度的不对齐、旋转和重叠，以营造真实桌面或灵感板的随意感。整体色彩偏向暖色和文具色（浅黄、浅粉、浅蓝、牛皮纸色等），避免冷硬电子感。

材质与质感：
每一种元素都对应一种纸质：便利贴像荧光便签纸，略透明、边缘有轻微卷起；纸卡像会议记录或打印纸条，表面偏白或米色，有轻微阴影与虚线装饰；拼贴标签则像手帐贴纸，颜色更饱和、形状更自由。所有纸张都有适度的投影（2–4 像素偏移），并通过 1–2 度的小角度旋转打破「像素完美对齐」带来的生硬感。局部可以加入回形针、图钉、胶带等装饰，进一步强化物理感。

交互体验：
交互应模拟真实纸片操作的感受。悬停时，便利贴和标签可以稍微抬起一点、阴影加深，好像被手指轻轻托起；点击或拖拽时，元素略微放大或加深阴影，让用户感觉自己正在「拿起这张纸」。动效节奏不宜过快，以 180–260ms 的平滑过渡为主，避免与简洁文具风格冲突。选中状态可通过在纸张下方加一层浅色「胶带」或高亮描边来表示，而不是传统的高亮背景条。

氛围营造：
整体氛围像是创意工作者的桌面或灵感墙：略微凌乱但有秩序，充满手写标注和颜色标签，但又不会淹没内容本身。局部的手写字体、曲线图标和不完全对齐的标签，营造出「这是我的私人空间」的亲密感。用户在使用这个界面时，应感到自己是在「动手整理纸张」而不是在操作冷冰冰的数字面板。`,
      'en-US': `Role: You are a UI designer specializing in paper collage and scrapbook‑inspired interfaces, designing a Paper/Cutout style board for ideas, tasks, or personal notes.

Scenario Positioning:
The interface behaves like a cork board or desk covered with sticky notes, index cards, and labels. It is ideal for inspiration boards, lightweight project walls, day‑to‑day planning, or personal journaling. Users expect to jot down thoughts quickly, group and rearrange notes, and visually mark priorities as if working with physical paper.

Visual Design Philosophy:
The core idea is to make the UI look as if it is composed of real paper pieces. Modules are not perfectly aligned boxes but slightly rotated, offset cards with varied sizes and colors. The information hierarchy remains clear, yet the overall composition embraces imperfection and layering, just like a real moodboard. Colors lean toward stationery tones—pale yellows, pinks, blues, and kraft browns—rather than cold digital hues.

Materials & Textures:
Each element maps to a different “paper type”: sticky notes resemble fluorescent note paper with soft gradients; main cards feel like memo sheets with dashed headers; collage tags act like stickers with stronger colors and bolder typography. Shadows are small but visible, giving the illusion that pieces are lifted off the background. Slight rotation and overlapping edges keep the layout lively and tactile. Decorative details such as pins, clips, or tape strips can be used sparingly to strengthen the physical metaphor.

Interaction Experience:
Interactions should mimic handling paper. On hover, notes and tags lift subtly with deeper shadows, as if a finger is about to pick them up. On click or drag, elements can scale up a bit or shift position to suggest grabbing and moving. Animations are smooth and moderate in speed (around 180–260ms), supporting the cozy stationery feeling rather than a high‑tech vibe. Selection can be indicated by an extra highlight border or a “taped” effect under the card instead of the usual solid highlight bar.

Atmosphere:
The overall mood is that of a creative person’s desk or wall: slightly messy but intentional, with many small handwritten cues and colored labels. The interface should feel like a personal space where ideas are collected and rearranged, not a rigid enterprise dashboard. Users should feel as though they are actually shuffling pieces of paper around, even though everything is digital.`
    },
    // Paper Cutout CustomPrompt（模板級 AI 指令）
    customPrompt: {
      'zh-CN': `请使用 TailwindCSS 创建一个 **Paper / Cutout（纸张剪贴）** 风格界面，围绕便利贴、纸卡与拼贴标签构建一个像桌面灵感板的 UI。

**核心设计要求**

1. **纸面背景与桌面氛围**
   - 背景可使用浅奶油色或米色：\`#FAF0E6\`、\`#FFF8E1\`。
   - 可以加入轻微纸纹理或噪点，模拟纸张/软木板表面。

2. **便利贴与纸卡造型**
   - 便利贴：略带旋转、轻微阴影、顶部有图钉或胶带。
   - 纸卡：矩形或稍有撕边感，顶部可加虚线/装饰边。
   - CSS 示例：
     \`\`\`css
     .sticky-note {
       background: linear-gradient(135deg, #FFF59D, #FFF176);
       border-radius: 2px;
       box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
       transform: rotate(-2deg);
     }
     .paper-card {
       background: #FFFAF0;
       box-shadow: 2px 2px 6px rgba(0,0,0,0.15);
       border-top: 3px dashed rgba(0,0,0,0.1);
     }
     \`\`\`

3. **拼贴标签与颜色系统**
   - 使用小色块标签（Ideas / Tasks / Done 等），每个标签有不同的纸张色块：
     - 粉：\`#F8BBD0\`、蓝：\`#90CAF9\`、绿：\`#AED581\`。
   - 标签略有旋转和阴影，鼠标悬停时水平微微位移。

4. **手写感排版**
   - 标题可以使用手写感字体（或模拟）：字号略大、字距稍紧。
   - 正文使用常规无衬线或略带人文感的字体，保证可读性。

5. **布局结构建议**
   - 上方：1–2 个主纸卡（如「Meeting Notes」「Daily Task」）。
   - 下方：拼贴标签或小纸条网格，用于展示分类或状态。
   - Tailwind 布局示例：
     \`\`\`html
     <div class="grid gap-4 md:grid-cols-3 bg-amber-50 p-6">
       <!-- sticky note, paper card, collage tags -->
     </div>
     \`\`\`

**重要提示**
- 保持轻微、自然的不对称（少量旋转和错位），让画面更像真实桌面。
- 阴影强度适中，不要过于数字化（避免强烈、高对比的 UI 阴影）。
- 文案可以稍微轻松、有手帐感，但结构仍需清晰。`,
      'en-US': `Create a **Paper / Cutout** style interface using TailwindCSS, focusing on sticky notes, paper cards, and collage tags arranged like a physical inspiration board.

**Core Design Requirements**

1. **Paper Background**
   - Use warm off-white or cream tones (\`#FAF0E6\`, \`#FFF8E1\`) and optional subtle grain.

2. **Sticky Notes and Cards**
   - Slight rotation and soft drop shadows to simulate taped or pinned notes.
   - Optional dashed top borders or clips to emphasize the paper feel.

3. **Collage Tags**
   - Small colored tags (pink, blue, green) with hand-written style labels.
   - Slight rotation differences and hover shifts for a lively collage effect.

4. **Typography**
   - Handwritten-style headings paired with clean sans-serif body text.
   - Emphasize casual, personal tone while preserving readability.

5. **Layout**
   - Use a simple grid (2–3 columns) to place sticky notes, cards, and tag groups.
   - Leave comfortable gaps between elements to keep the board airy.

**Important Notes**
- Embrace slight misalignment and rotation to avoid feeling too rigid.
- Keep colors warm and friendly, like stationery supplies.
- Avoid heavy UI chrome; the paper objects themselves are the main design language.`
    }
  }
];

export default paperCutoutStyles;
