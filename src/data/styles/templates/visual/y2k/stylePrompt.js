/**
 * Y2K / Frutiger Aero - Style Prompt
 * Y2K 千禧年美學風格的設計理念說明
 */

export const stylePrompt = {
  'zh-CN': `角色：你是一位专精于 Y2K / Frutiger Aero 风格的 UI 设计师兼前端工程师。

场景定位：
Y2K / Frutiger Aero 风格源于 1998–2005 年左右的數位視覺美學，常見於早期網路服務、系統工具、作業系統桌面和企業形象頁。這種風格在當代的再演繹，適用於：懷舊科技主題著陸頁、產品 Dashboard、個人工作台、與「90s/00s 網路文化」相關的應用、以及希望傳達「樂觀科技」「早期網路夢」氛圍的品牌。目標用戶多半對早期 Windows / XP / 玻璃泡泡桌布有情感連結，或是喜愛復古＋未來混搭的視覺風格。

视觉设计理念：
Y2K 不是單純的「彩色＋漸變」，而是一套以「玻璃質感、青藍色天空、肥厚圓角、泡泡與反光」為核心的樂觀科技美學。設計哲學可概括為：
- 如同操作系統桌面的儀表盤，而非極簡扁平的控制台；
- 集中展現「乾淨、明亮、略帶塑料感」的 UI 元素，而不是陰鬱或工業感；
- 使用大量光暈、高光與柔焦，而非銳利陰影與深色塊；
- 介面整體應該看起來“柔軟而可愛”，但仍然保持理性的資訊結構。

材质与质感：
- 背景：典型為從非常淺的青色 / 藍色 / 綠色漸變而成的「天空」背景（例如 #ECFEFF、#EFF6FF、#CCFBF1），可搭配柔和雲層或模糊光斑；
- 玻璃卡片：內容區域使用半透明白色卡片（如 rgba(255,255,255,0.7)），帶有內陰影與外陰影，同時保留一圈較亮的邊框，模擬玻璃或塑膠材質；
- 泡泡與高光：以圓形或不規則圓角形狀呈現大氣泡和小高光點，疊加在背景或卡片角落，營造立體“水珠”效果；
- 反光與漸變：使用從青色到藍色再到翡翠綠的漸變填充 Logo、按鈕、標題文字，配合內外發光讓界面表面看起來光滑而濕潤；
- 邊界與分隔：多使用柔和邊界與細白線分隔區塊，避免沉重的深色描邊。

色彩系统：
- 主背景色：極淺的青藍漸變 (#ECFEFF、#EFF6FF、#CCFBF1)，給人晴朗天空或水面的聯想；
- 主品牌色：明亮青色與藍色（#06B6D4 / Cyan-500、#3B82F6 / Blue-500、#22D3EE 等），用於 Logo、主按鈕、重要標題；
- 輔助色：翡翠綠 (#10B981 / Emerald-500) 強化「清新自然」感，小面積用於狀態與標籤；
- 高光色：純白或接近白色的高光塊，用於泡泡和玻璃高光區域；
- 文字色：深灰藍 (#0F172A、#1E293B) 作為主文案顏色，次級文字使用中灰，避免黑色過於生硬。

布局与信息层次：
- 頂部導航欄：
  - 使用玻璃態導覽列（backdrop-blur-xl + 半透明白），內含 Logo 氣泡、品牌名稱和導航連結；
  - 導航按鈕可採用圓角 pill 形狀，hover 時增加光暈與邊框亮度；
- Hero / 概覽區：
  - 上方可有一個主卡片展示「今日概覽 / 工作台名稱」，背景為玻璃卡片，內含用戶頭像、歡迎文案與一兩個主動作按鈕；
  - Hero 內可擺放一兩顆較大的漸變氣泡作為背景裝飾；
- 中心內容區：
  - 採用 2–3 欄栅格佈局的卡片集合，例如統計卡、專案卡、待辦列表、活動時間軸；
  - 每張卡片皆帶玻璃效果，四角圓潤，內有柔和陰影與邊框；
- 底部 / 次要區塊：
  - 可以使用一條略深的玻璃條展示系統狀態、版權資訊或次要 CTA。

交互体验：
- 懸停（Hover）：
  - 卡片與按鈕在 hover 時略微上浮（例如 translateY(-2px)）、增強外發光與邊框亮度，營造柔軟、可觸摸的感覺；
  - 文字或圖示的陰影可在 hover 時稍微加強，讓元素更醒目；
- 按壓（Active）：
  - 按下按鈕時整體略微縮小（scale(0.97)）並降低光感，營造「按下去」的視覺回饋；
- 動態效果：
  - 泡泡裝飾可使用緩慢的上下浮動動效（類似睡眠螢幕保護程式），節奏在 6–10 秒一個周期，避免讓人感到浮躁；
  - 某些背景光斑可以輕微移動或閃爍，以增添呼吸感；
- 滑動與切換：
  - 對於多 Tab 區域，可以使用柔和的滑動過渡，而不是突兀切換。

氛围营造：
- 整體氛圍應該是「樂觀、乾淨、略帶童趣的科技感」：像是 Windows XP 時代的桌布＋玻璃按鈕，卻用現代的版面與字體規範重新整理；
- 用戶進入頁面時應感到輕鬆愉快，而不是被高對比或暗色風格壓迫；
- 色彩與光感應該讓人聯想到「晴朗早晨」「清澈水面」或「玻璃裝飾品櫃」；
- 儘管視覺偏可愛與輕量，資訊本身仍需要清晰、有條理，不應被過量裝飾淹沒。

适用与不适用场景：
- 适用：
  - 個人工作台、創意和設計相關產品的 Dashboard；
  - 需要表達「友好、親近、略帶懷舊」的科技品牌；
  - 與 Y2K / 早期網路文化相關的活動頁與社群平台；
- 不适用：
  - 嚴肅金融 / 政府 / 醫療等需要高度權威感與穩定感的主系統；
  - 強調極簡禪意、冷淡風的品牌；
  - 需要長時間閱讀大量嚴肅文字的產品（建議僅在 Hero 使用此風格）。

设计关键词总结（供 LLM 参考）：
Y2K、Frutiger Aero、氣泡、玻璃態、青藍漸變、玻璃卡片、半透明白、內陰影、外發光、儀表板、早期網路、樂觀科技、懷舊 UI。`,

  'en-US': `Role: You are a UI designer and front-end engineer specializing in Y2K / Frutiger Aero aesthetics.

Scene Positioning:
The Y2K / Frutiger Aero style is rooted in late 1990s to early 2000s visual culture: bright skies, glassy bubbles, soft gradients and optimistic tech branding. In modern reinterpretations, this style fits nostalgic tech landing pages, dashboards, personal workspaces, apps referencing early web culture, and brands that want to evoke "optimistic technology" and "early internet dream" vibes. Typical users may feel nostalgic about early Windows / XP era desktops or simply enjoy soft, bubbly interfaces.

Visual Design Philosophy:
Y2K is not just "colorful gradients". It is a visual language built around glassy surfaces, cyan-blue skies, thick rounded corners and light reflections. Key principles:
- The interface feels like an operating system desktop or control center rather than a flat, ultra-minimal console;
- Surfaces appear clean, bright and slightly plastic rather than dark or industrial;
- Heavy use of glow, highlights and soft focus instead of sharp shadows and heavy outlines;
- Everything should feel soft and touchable while still maintaining clear information hierarchy.

Materials and Textures:
- Background: very light cyan/blue/teal gradients (e.g. #ECFEFF, #EFF6FF, #CCFBF1), evoking sky, water and glass;
- Glass cards: semi-transparent white cards (rgba(255,255,255,0.7)) with inner and outer shadows and a bright border, simulating glass or polished plastic;
- Bubbles and highlights: round or blobby shapes with bright highlights placed behind or around content, adding a "soap bubble" or "water droplet" feel;
- Gradient fills: cyan-blue-emerald gradients for logos, buttons and key text, sometimes combined with gentle glow to suggest wet, glossy surfaces;
- Dividers: subtle white lines or faint gradients to separate sections without harsh rules.

Color System:
- Background: soft cyan-blue gradients (#ECFEFF, #EFF6FF, #CCFBF1);
- Primary colors: bright cyan and blue (#06B6D4 / Cyan-500, #3B82F6 / Blue-500, #22D3EE);
- Accent colors: emerald greens (#10B981 / Emerald-500) for success, freshness and nature cues;
- Highlights: pure or near-white highlights for bubbles and shine;
- Text: dark blue-grays (#0F172A, #1E293B) for primary copy, mid-grays for secondary text.

Layout and Information Hierarchy:
- Top navigation bar:
  - Glassmorphism navbar (backdrop blur + translucent white) with a bubble-style logo, brand name and navigation links;
  - Navigation items as rounded pills with soft hover glows;
- Hero / overview section:
  - A main glass card showing the workspace name, user avatar, welcome message and primary CTAs;
  - One or two large gradient bubbles behind the card for decoration;
- Main content grid:
  - 2–3 column layout of glass cards: stats cards, project cards, to-do lists, activity timelines;
  - Each card uses rounded corners, inner/outer shadows and clear typographic hierarchy;
- Footer / secondary strip:
  - A slightly darker, still translucent strip for status info, copyright or secondary actions.

Interaction Experience:
- Hover:
  - Cards and buttons gently lift (e.g. translateY(-2px)), with stronger glow and border brightness, emphasizing soft tactility;
  - Text shadows or icon glows become slightly more pronounced on hover;
- Active:
  - Pressed buttons shrink a bit (scale ~0.97) and dim slightly, creating a physical button feel;
- Motion:
  - Decorative bubbles can drift slowly up and down with long animation durations (6–10 seconds) to avoid feeling jittery;
  - Background light spots or halos may pulse softly to add breathing motion;
- Transitions:
  - Tab changes and panel transitions should be smooth and soft rather than abrupt.

Atmosphere:
The overall mood should be optimistic, clean and slightly playful: like a refreshed Windows XP desktop reimagined with modern typography and layout. Users should feel welcomed and energized instead of overwhelmed by contrast or darkness. Colors and light should evoke clear mornings, water surfaces and glass ornaments. Despite the playful tone, information layout must remain structured and easy to scan.

Suitable and Unsuitable Use Cases:
- Suitable:
  - Personal dashboards and workspaces for creatives or knowledge workers;
  - Tech brands wanting a friendly, nostalgic or "early internet" aura;
  - Campaigns, landing pages or communities referencing Y2K aesthetics;
- Unsuitable:
  - Serious financial, governmental or medical systems that rely on authority and restraint;
  - Brands built on ultra-minimal, monochrome or zen-like aesthetics;
  - Very text-heavy reading experiences (limit Y2K visuals to the hero in such cases).

Key Style Keywords (for LLM reference):
Y2K, Frutiger Aero, bubbles, glassmorphism, cyan-blue gradients, glass cards, semi-transparent white, inner shadow, outer glow, dashboard, early internet, optimistic tech, nostalgic UI.`
};
