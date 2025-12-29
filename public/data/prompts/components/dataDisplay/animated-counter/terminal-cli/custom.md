# Terminal CLI - Animated Counter

## Prompt (en-US)

### Style Characteristics
Terminal CLI animated counters mimic command-line interfaces and retro computer terminals, using monospace fonts, ASCII characters, and terminal-style text rendering. Numbers appear with cursor blinks, typewriter effects, or matrix-style character cycling. Perfect for developer tools, hacker-themed interfaces, and retro computing aesthetics.

### Color Scheme
- **Background**: Dark terminal (#0c0c0c, #1e1e1e, #000000)
- **Text (Number)**: Terminal green (#00ff00), amber (#ffb000), white (#ffffff), or cyan (#00ffff)
- **Cursor**: Blinking block or underscore, same color as text
- **Prefix/Label**: Dim terminal color rgba(0,255,0,0.7) or rgba(255,255,255,0.6)
- **Border (optional)**: Terminal green or white, ASCII box-drawing characters

### Design Details
- **Borders**: ASCII box-drawing (╔═╗║║╚═╝) or simple 1px solid terminal color
- **Border Radius**: 0 (strictly rectangular for terminal aesthetic)
- **Shadows**: None or minimal scan-line effect
- **Spacing**: Monospace-aligned padding, typically 16-24px
- **Typography**:
  - Font family: 'Courier New', 'Monaco', 'Consolas', monospace
  - Number: 2-4rem/700, letter-spacing: 0.05em for readability
  - Label: 0.875-1rem/400 with "> " or "$ " prefix
- **Animation**:
  - Character cycling: Rapid random character changes before settling
  - Typewriter: Characters appear one-by-one with cursor
  - Blink: Cursor blinks at 530ms intervals (standard terminal rate)
- **Effects**:
  - Optional scan lines: Subtle horizontal lines rgba(255,255,255,0.02)
  - CRT curvature: border-radius with pseudo-elements (optional)
  - Flicker: Occasional subtle opacity change for authenticity

---

## 提示詞 (zh-CN)

### 風格特點
終端機 CLI 動畫計數器模仿命令行界面和復古計算機終端，使用等寬字體、ASCII 字符和終端風格文字渲染。數字以光標閃爍、打字機效果或矩陣式字符循環出現。適合開發工具、黑客主題界面和復古計算美學。

### 配色方案
- **背景**：深色終端 (#0c0c0c, #1e1e1e, #000000)
- **文字（數字）**：終端綠 (#00ff00)、琥珀 (#ffb000)、白色 (#ffffff) 或青色 (#00ffff)
- **光標**：閃爍方塊或下劃線，與文字同色
- **前綴/標籤**：暗淡終端色 rgba(0,255,0,0.7) 或 rgba(255,255,255,0.6)
- **邊框（可選）**：終端綠或白色，ASCII 框線字符

### 細節設計
- **邊框**：ASCII 框線（╔═╗║║╚═╝）或簡單 1px solid 終端色
- **圓角**：0（嚴格矩形保持終端美學）
- **陰影**：無或最小掃描線效果
- **間距**：等寬對齊 padding，通常 16-24px
- **字體**：
  - 字體系列：'Courier New', 'Monaco', 'Consolas', monospace
  - 數字：2-4rem/700，letter-spacing: 0.05em 提升可讀性
  - 標籤：0.875-1rem/400 帶 "> " 或 "$ " 前綴
- **動畫**：
  - 字符循環：定格前快速隨機字符變化
  - 打字機：字符逐個出現配合光標
  - 閃爍：光標以 530ms 間隔閃爍（標準終端速率）
- **效果**：
  - 可選掃描線：細微水平線 rgba(255,255,255,0.02)
  - CRT 曲率：使用偽元素 border-radius（可選）
  - 閃爍：偶爾細微 opacity 變化增加真實感
