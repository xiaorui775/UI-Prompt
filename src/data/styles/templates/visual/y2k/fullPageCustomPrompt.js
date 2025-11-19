/**
 * Y2K / Frutiger Aero - FullPage Custom Prompt
 * Y2K 風格儀表板完整頁面的 AI 指令（針對 y2kFullPageHTML）
 */

export const fullPageCustomPrompt = {
  'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Y2K / Frutiger Aero Dashboard 全屏页面」界面风格高度接近的 UI。
要求：保持整体布局结构、色彩体系和玻璃泡泡质感基本不变，只允许替换文案、品牌名称、圖示和具體數據內容。输出必须使用语义化 HTML 结构（header、main、section、aside、footer 等），并使用类似 TailwindCSS 的原子类（例如 flex、grid、gap-6、bg-gradient-to-br、from-cyan-50、via-blue-50、to-teal-50、backdrop-blur-xl、rounded-3xl 等）來描述佈局與樣式。

【使用场景】
- 場景：面向個人或小型團隊的雲端工作台 / Home Office Dashboard，結合日常任務、專案狀態與團隊活動概覽；
- 氛圍：溫暖、明亮、略帶童趣，像是 2000 年代的作業系統桌面升級版，充滿玻璃按鈕與氣泡裝飾；
- 用戶：喜歡復古 Y2K / Frutiger Aero 風格的創意工作者、設計師、開發者，或希望自己的 Dashboard 看起來「清爽又可愛」的使用者。

【整體佈局結構】
請保持以下全頁佈局結構：
1. 頂部玻璃導航欄（Header / Navbar）
2. 主內容區（Main Content）
   - 左上：Hero / 今日概覽卡片
   - 中間：統計卡片區與專案卡片區
   - 右側：活動時間軸、通知或快速操作
3. 底部次要資訊或輕量 Footer

1. 頂部導航欄（Glassmorphism Navbar）
- 使用 <nav> 包裹，置於畫面頂部，sticky top-0，背景為半透明白色（例如 bg-white/70）搭配 backdrop-blur-xl，底部有細白色邊框與柔和陰影；
- 左側：
  - 氣泡風格 Logo：一個圓角方形或圓形，填充青藍漸變，內有簡潔字母或圖示；
  - 品牌名稱：例如 "AeroDesk" 或類似名稱，使用漸變文字（bg-clip-text + text-transparent）；
- 中間：
  - 導航連結（Dashboard、Projects、Schedule、Settings 等），以圓角膠囊按鈕呈現，hover 時背景變為半透明白且增加陰影；
- 右側：
  - 搜尋輸入框或簡化圖示按鈕，一個通知圖示（帶小藍點表示新通知）與使用者頭像；

2. 主背景與頁面容器
- 整體頁面背景：使用從 cyan-50 → blue-50 → teal-50 的平滑漸變，營造清新天空與清水混合的感覺；
- 在背景上可以疊加大型模糊泡泡（絕對定位的圓形 div，使用漸變 + blur），分布在左上、右下等位置，透明度低以避免搶走內容焦點；
- 內容容器：使用 max-w-7xl mx-auto px-6 py-8 包裹主要內容，保持寬度適中且留有足夠留白。

3. Hero / 今日概覽區塊（Hero Overview Card）
- 位置：主內容區最上方，跨越 2–3 欄的寬度；
- 使用大尺寸玻璃卡片：
  - 背景：bg-white/80 + backdrop-blur-xl；
  - 邊框：border-2 border-white/70；
  - 陰影：shadow-2xl 並可加入內陰影效果；
- 內容：
  - 左側：使用者頭像（可為圓形圖片或漸變圓形佔位符）、歡迎標題（如 "Good morning, Alex"）、簡短描述（今天的任務概覽）；
  - 右側：兩個主動作按鈕，例如 "New Task" 及 "Start Focus Session"，按鈕使用青藍漸變背景 + 白字 + 圓角、hover 時增強光感；
  - 背景 / 角落可加一兩顆模糊氣泡裝飾。

4. 統計卡片區（Stats Cards）
- Hero 下方，用 grid 顯示 3–4 個統計卡片：
  - 每張卡片為小型玻璃卡片，背景半透明白，帶柔和陰影與圓角；
  - 內容包括：統計數字（如 "24 Tasks"）、小標題（"Today" / "This Week"）、簡短標籤（例如 "On Track"）；
  - 數字可採用青藍漸變文字，以突出重點；
  - 在卡片角落放置小圖示圓標（icon bubble）。

5. 專案與工作區卡片（Projects / Work Area）
- 使用 2–3 欄 grid 排列多張專案卡片：
  - 每張卡片：
    - 標題為專案名稱，搭配顏色 chip 標註狀態（Active / Planning / Review 等）；
    - 內含簡短描述、成員頭像群組（圓形頭像重疊）、進度條（Progress bar）採用青藍漸變填充；
    - 底部可放置快速操作按鈕（如 "Open"、"Share"）；
  - 卡片外觀延續玻璃態風格。

6. 右側活動時間軸與提醒（Activity Timeline / Notifications）
- 使用 <section> 容器置於右側欄：
  - 活動時間軸：
    - 垂直線條 + 節點圓點，每個節點包含時間（如 09:30）、事件標題（"Team Standup"）和簡短描述；
    - 節點圓點可使用青藍或翡翠綠實心圓，搭配外發光；
  - 通知卡片：
    - 若有未讀通知，可使用小型玻璃卡片列出幾條最新提醒；

7. 底部區域（Footer / Secondary Info）
- 使用 <footer>，背景為稍深的半透明白條；
- 左側顯示版權或簡短標語；
- 右側可以放 1–2 個次要連結（如 "Preferences"、"Help"）。

【色彩與樣式規範】
請在 Prompt 中明確規範以下 Y2K 色彩和樣式元素：
- 頁面背景：bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50；
- 卡片背景：bg-white/70–90 + backdrop-blur-xl + 邊框 border-white/60–80；
- 主色：cyan / blue / teal（#06B6D4, #3B82F6, #22D3EE, #2DD4BF）；
- 強調色：emerald (#10B981)，小面積用於成功狀態；
- 按鈕樣式：圓角、漸變背景、投影柔和，hover 狀態略微放大與加強光暈；
- 字體：現代無襯線，標題可使用稍大字距與粗體；
- 行距與間距：保持充足留白，避免擁擠。

【交互與動效設計】
- 卡片與按鈕 hover：
  - 使用 transition-all duration-200–300 的平滑過渡；
  - 視覺效果包含輕微位移（-translate-y-1）、陰影加強以及邊框亮度提升；
- 動畫裝飾：
  - 大型背景泡泡可使用慢速上下浮動 animation（如 8s–12s 循環）；
  - 某些高光可以使用很輕微的 scale 或 opacity 呼吸動畫；
- 請避免高頻閃爍與強烈晃動，以免干擾長時間使用。

【輸出格式要求】
1. 請輸出完整 HTML 文檔（含 <html>、<head>、<body> 結構），head 中可附上頁面標題與一個 Google Fonts 或系統字體說明（文字即可，不必真的引入）；
2. 在 body 中使用 header、nav、main、section、aside、footer 等語義標籤，並使用 Tailwind 風格原子類控制佈局與樣式；
3. 可在頁面中加入 <style> 區塊定義少量自訂動畫（如泡泡浮動、高光呼吸），但請保持代碼簡潔；
4. 文案內容可以自由發揮，但語氣建議保持溫暖、專業且帶一點輕鬆，不要太嚴肅也不要太搞笑；
5. 保證文字與背景對比度足夠，避免將主要文案直接放在過亮的漸變區域上。

【額外提示與限制】
- 不要使用過暗或高對比的深色區塊破壞整體清透感；
- 盡量保留 Y2K 風格的核心元素：玻璃卡片、氣泡、高光、青藍漸變；
- 在響應式佈局中，窄視窗時優先顯示 Hero 和最關鍵的統計與任務資訊，其餘區塊可排在下方；
- 不要引入寫實人物照片作為主視覺（除非以小頭像形式出現）；主視覺應由漸變、氣泡與玻璃卡片構成。

請根據以上說明，生成一個完整的 Y2K / Frutiger Aero 風格儀表板 HTML 頁面，使其在佈局結構、色彩與玻璃泡泡質感上與現有範例高度一致。`,

  'en-US': `You are a senior UI designer and front-end engineer. Please generate a full-page Y2K / Frutiger Aero dashboard interface whose visual style is highly similar to the existing Y2K full page demo.
Requirements: Keep the overall layout, glassy/bubbly texture and cyan-blue gradient system very close to the described design. You may change copy, brand name and point values, but the structural logic and visual language must remain consistent. Use semantic HTML (header, main, section, aside, footer) and Tailwind-like utility classes (flex, grid, gap-6, bg-gradient-to-br, from-cyan-50, via-blue-50, to-teal-50, backdrop-blur-xl, rounded-3xl, etc.).

[Use Case]
- A home office dashboard or personal/team workspace with a nostalgic Y2K aesthetic;
- Target users are creatives, designers and developers who enjoy soft, glassy, early-2000s-inspired UIs;
- The interface should feel like a modernized XP-era desktop: bright, optimistic and full of glass buttons and bubbles.

[Overall Layout]
Maintain a three-part structure:
1. Glassmorphism top navbar (header)
2. Main dashboard area (main)
   - Hero overview card
   - Stats cards grid
   - Project cards and activity timeline
3. Lightweight footer strip

1. Top Navbar
- <nav> at the top with backdrop blur and translucent white background, sticky positioning;
- Left: bubble-style logo (gradient-filled round or rounded-square shape) plus brand name in gradient text;
- Middle: navigation links (Dashboard, Projects, Schedule, Settings) as pill-shaped buttons with soft hover states;
- Right: search input or icon, notification bell with a small cyan dot for unread alerts, and a user avatar.

2. Background and Container
- Use bg-gradient-to-br from cyan-50 via blue-50 to teal-50 for the page background;
- Add large, blurred circular "bubble" shapes with low opacity as decorative elements in the corners;
- Wrap the main content in a centered container (e.g. max-w-7xl mx-auto px-6 py-8) with generous spacing.

3. Hero / Today Overview
- Place a large glass card near the top of the main area, spanning multiple columns.
- Card style: semi-transparent white background, backdrop blur, white border, outer shadow and optional inner glow;
- Content:
  - Left: user avatar, greeting (e.g. "Good morning"), a short description of today's focus;
  - Right: two primary CTAs (e.g. "New Task", "Start Focus Session") as gradient buttons;
  - Behind or around the card, include one or two decorative gradient bubbles.

4. Stats Cards
- Under the hero, provide a grid of 3–4 small glass cards showing key metrics (tasks today, active projects, focus sessions, etc.);
- Each card uses a light, glassy background, rounded corners and soft shadow;
- Include a large numeric value, label, and optional tag like "On track"; numeric values may use gradient text.

5. Projects and Work Area
- Use a two- or three-column grid for project cards:
  - Each card shows project name, status chip, short description, participant avatars and a gradient-filled progress bar;
  - Quick actions such as "Open" or "Share" can appear at the bottom of cards.

6. Activity Timeline and Notifications
- On the right column (desktop) or lower on mobile, include:
  - Activity timeline: vertical line with circular nodes, each showing time, event title and brief description;
  - Optional notifications card listing recent alerts in small glass cards.

7. Footer / Secondary Info
- A slim footer bar with a slightly darker translucent background;
- Left: copyright or a short brand message;
- Right: secondary links (Preferences, Help, etc.).

[Color and Style Guidelines]
- Page background: cyan-blue-teal gradient (from-cyan-50 via-blue-50 to-teal-50);
- Cards: semi-transparent white with blur and soft white borders;
- Primary colors: cyan, blue and teal (#06B6D4, #3B82F6, #22D3EE, #2DD4BF);
- Accent: emerald (#10B981) for success or positive states;
- Buttons: rounded, gradient-filled, soft shadows, with hover states that slightly enlarge and brighten;
- Typography: modern sans serif with clear hierarchy and comfortable line heights.

[Interaction and Motion]
- Hover:
  - Cards and buttons gently elevate (small negative translateY) with stronger shadows and brighter borders;
- Motion decorations:
  - Large background bubbles float slowly (8–12s cycles);
  - Subtle breathing animations for highlights are allowed but should not distract from content;
- Avoid fast flashing or aggressive movement.

[Output Requirements]
1. Output a complete HTML document (<html>, <head>, <body>). In <head>, include a sensible <title> and a note about using a modern sans-serif font;
2. Use header, nav, main, section, aside and footer elements appropriately;
3. Express layout and style through Tailwind-like utility classes. You may inline a <style> block for keyframes and special effects;
4. Copy should feel warm, professional and slightly playful; avoid overly serious or overly jokey tone;
5. Ensure sufficient contrast for text; do not place long paragraphs directly on top of very bright gradients.

[Additional Notes]
- Preserve core Y2K traits: glass cards, bubbles, cyan-blue gradients, inner shadows and outer glows;
- In responsive layouts, hero and key stats should stay near the top, with secondary sections flowing beneath;
- Do not rely on large photographic hero images; the main aesthetic should come from gradients, bubbles and glass surfaces.

Based on all the above, output a complete Y2K / Frutiger Aero dashboard HTML page that looks and feels like a close sibling of the existing Y2K demo.`
};
