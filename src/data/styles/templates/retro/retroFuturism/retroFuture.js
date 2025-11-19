// Retro Future - 1980s DOS Terminal Style
// 复古未来 - 1980年代DOS终端风格

import { retroFutureFullPageHTML, retroFutureFullPageStyles } from './retroFutureFullPage';

export const retroFuture = {
  id: 'retro-futurism-dos',
  title: 'styles.retro.retroFuturism.retroFuture.title',
  description: 'styles.retro.retroFuturism.retroFuture.description',
  demoHTML: `
    <div class="bg-black p-4 font-mono text-green-400">
      <div class="border-2 border-green-400 p-4">
        <div class="mb-2">
          <span class="text-green-400">C:\\></span>
          <span class="animate-pulse">_</span>
        </div>
        <div class="text-sm space-y-1">
          <div>> SYSTEM READY</div>
          <div>> RETRO FUTURE ONLINE</div>
        </div>
        <div class="mt-3 text-amber-400 text-xs whitespace-pre">
┌──────────┐
│   DOS    │
└──────────┘
        </div>
      </div>
    </div>
  `,
  customStyles: '',
  demoBoxClass: 'bg-black',
  fullPageHTML: retroFutureFullPageHTML,
  fullPageStyles: retroFutureFullPageStyles,
  colorScheme: {
    'zh-CN': '磷光绿 (#00FF00)、琥珀黄 (#FFA500)、黑色背景 (#000000)',
    'en-US': 'Phosphor green (#00FF00), amber (#FFA500), black background (#000000)'
  },

  customPrompt: {
    'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Retro Future DOS Console」示例风格高度接近的 UI。
要求：保持 1980 年代 DOS 終端視覺、黑底磷光文字、ASCII 邊框和 CRT 掃描線等核心特徵，只允许替换文案與指令內容，而不改变整体界面结构与色彩语言。输出使用语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 黑客主題活動頁、復古科幻遊戲啟動畫面
- 展示系統監控、日誌輸出或部署進度的懷舊控制台
- 需要傳達「80年代科幻 + 終端界面」氛圍的品牌頁或實驗性 UI

【整体布局结构】
1. 背景層
   - 使用純黑或近黑背景 (#000000)，可以帶極輕微顆粒，以模擬老舊顯示器。
2. 主控制台窗口
   - 居中放置一個帶 ASCII 框線的「視窗」，擁有標題區和內容區：
     - 標題區顯示系統名稱、狀態或時間戳。
     - 內容區顯示命令提示符與系統輸出。
   - 外框使用雙線或粗線 ASCII 字元（如 ┏━┓、┃ ┃、┗━┛）。
3. 命令與輸出區
   - 多行 \`C:\\>\` 或類似提示符，後接命令與回應。
   - 可以加入簡短 ASCII Logo 或小塊狀圖表，均以字元繪製。

【色彩与材质】
1. 終端配色
   - 文本主色：磷光綠 (#00FF00) 或略偏冷綠，部分提示使用琥珀黃 (#FFA500)。
   - 背景：純黑 (#000000) 不帶漸變，確保對比度極高。
2. 磷光質感
   - 利用 text-shadow 建立輕微發光邊緣，例如 \`text-shadow: 0 0 5px #00ff00\`。
   - 適度控制光暈，保持可讀性，不要全屏泛光。

【CRT 與 ASCII 細節】
1. 掃描線
   - 可在整個視窗上疊加極淡的橫線紋理，模擬 CRT 掃描線。
2. ASCII 圖形
   - 使用 ┌─┐│└┘、═╔╗ 等字元構成框線與分隔條，避免現代 UI 元素（圓角卡片等）。
3. 等寬字體
   - 全局採用等寬字體（如 Courier New），確保 ASCII 圖形對齊。

【交互与動效】
1. 光標動畫
   - 使用閃爍下劃線或方塊作為光標，節奏約 1 秒一閃。
2. 命令輸出動畫
   - 新命令和輸出可以用淡入或打字機效果出現，營造操作過程感。
3. 整體動效
   - 避免過多現代動畫，只在光標、掃描線和偶爾的錯誤提示上使用細微動態。

【输出要求】
- 使用语义化 HTML 將背景、控制台窗與內容區分層結構化。
- 使用 TailwindCSS 风格原子类管理顏色、字體與間距，可額外定義類名實現 ASCII 邊框與掃描線。
- 生成的 UI 必須保留「黑底綠字 + ASCII 框線 + CRT 掃描線 + 閃爍光標」這些關鍵特徵，讓人一眼看出是 80 年代 DOS 終端風格控制台。`,

    'en-US': `You are a senior UI designer and front-end engineer. Generate a retro future DOS console style interface that looks very close to the current “Retro Future” demo.
Keep the 1980s DOS terminal visuals, black background with phosphor text, ASCII borders and CRT scanlines as the main traits. You may change messages and commands, but you should not change the overall console layout or color language. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenario]
- Hacker-themed event pages, retro sci-fi game intros
- Nostalgic consoles for system monitoring, logs or deployment progress
- Brand or experimental UIs that should feel like “80s sci-fi + terminal interface”

[Layout structure]
1. Background layer
   - Use a flat black (#000000) or near-black background, optionally with subtle grain to mimic old displays.
2. Main console window
   - Center a console “window” framed entirely in ASCII characters, with a header area and body:
     - Header: system name, status or timestamp.
     - Body: command prompts and system output.
   - Use double-line or heavy ASCII borders (┏━┓, ┃ ┃, ┗━┛ style) for the frame.
3. Commands and output
   - Show multiple \`C:\\>\`-style prompts followed by commands and textual responses.
   - Include small ASCII logos or box-drawn graphs as part of the content.

[Color and materials]
1. Terminal palette
   - Main text in phosphor green (#00FF00 or similar), with some prompts or warnings in amber (#FFA500).
   - Solid black background with very high contrast.
2. Phosphor glow
   - Use soft text-shadow like \`text-shadow: 0 0 5px #00ff00\` to suggest phosphor glow.
   - Keep glow controlled so text remains readable.

[CRT and ASCII details]
1. Scanlines
   - Overlay faint horizontal lines across the console window to simulate CRT scanlines.
2. ASCII graphics
   - Use box-drawing characters to create frames and separators instead of modern UI components.
3. Monospace fonts
   - Apply monospace fonts (e.g. Courier New) globally so ASCII art aligns correctly.

[Interaction and motion]
1. Cursor
   - Implement a blinking underscore or block cursor at the end of the active prompt, cycling roughly every second.
2. Command animation
   - Introduce new commands and outputs with short fade-in or typewriter effects to evoke live interaction.
3. Overall motion
   - Avoid modern transitions elsewhere; keep motion limited to cursor, scanlines and occasional alerts.

[Output requirements]
- Use semantic HTML to separate background, console window and content regions.
- Use Tailwind-style utilities for colors, typography and spacing, plus custom classes for ASCII borders and scanlines.
- The generated UI must preserve “black background + green phosphor text + ASCII frames + CRT scanlines + blinking cursor” so it is clearly recognized as an 80s DOS console.`
  },

  stylePrompt: {
    'zh-CN': `角色：你是专精于1980年代DOS终端风格的UI设计师，专注于磷光显示器美学和ASCII艺术。

核心设计语言：
1. DOS终端样式
2. CRT扫描线效果
3. ASCII字符装饰
4. 磷光文字发光

配色方案：
- 磷光绿：#00FF00
- 琥珀黄：#FFA500
- 黑色：#000000

技术实现：使用等宽字体、text-shadow发光、repeating-linear-gradient扫描线`,

    'en-US': `Role: DOS terminal style UI designer specializing in phosphor display aesthetics and ASCII art.

Core Design: Terminal, scan lines, ASCII art, phosphor glow.
Colors: Green #00FF00, Amber #FFA500, Black #000000.
Tech: Monospace fonts, text-shadow, repeating-linear-gradient.`
  }
};
