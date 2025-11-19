// 新趨勢風格數據 - New Trend Styles
// ✅ 階段 3.2 優化: 移除所有靜態 import，改用動態加載
// 預期減少構建體積：55 KB

export const newTrendStyles = [
  {
    id: 'maximalism',
    title: 'styles.newTrend.maximalism.title',
    description: 'styles.newTrend.maximalism.description',
    demoHTML: `
      <div class="w-full h-full p-4 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 relative overflow-hidden">
        <!-- 背景裝飾元素 -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-2 left-2 w-16 h-16 bg-yellow-300 rounded-full"></div>
          <div class="absolute top-8 right-4 w-12 h-12 bg-green-400 rotate-45"></div>
          <div class="absolute bottom-4 left-8 w-20 h-20 bg-blue-400 rounded-full"></div>
          <div class="absolute bottom-2 right-2 w-14 h-14 bg-red-400"></div>
        </div>

        <!-- 主要內容 -->
        <div class="relative z-10 text-center space-y-2">
          <h4 class="text-3xl font-black text-white drop-shadow-lg">MORE</h4>
          <p class="text-white font-bold text-sm drop-shadow">IS MORE!</p>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'p-0',
    colorScheme: 'styles.newTrend.maximalism.colorScheme',
    // 極繁主義風格的 CustomPrompt（給 LLM 的生成指令）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Maximalism 极繁主义」核心样式卡展示界面风格高度接近的页面。
要求：保持高饱和、多元素、舞台式视觉的整体气质，只允许替换文案、插图及具体配色组合，不允许将版面简化为极简或低密度布局。输出语义化 HTML 结构和 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 艺术博物馆或当代艺术展览 Landing Page
- 音乐 / 文化节宣传页、创意品牌活动页
- 需要传达「More is more」「信息很满但很有趣」的体验型页面

【整体布局结构】
1. 顶部区域
   - 使用带有渐变或半透明背景的导航栏，Logo 与主导航项可以使用彩色标签或徽章形式呈现。
   - 导航文字可以略大且粗体，配合小图标或 Emoji 强化「节日感」。
2. Hero 标题区
   - 使用超大字号、粗体标题（例如 MORE IS MORE!），置于画面中心或稍偏上位置。
   - 标题周围用若干彩色徽章、标签、Icon 或 Emoji 环绕，营造视觉爆炸感。
3. 内容区块
   - 可以采用多列卡片或模块化区域，每块内容卡片都有自己的高饱和渐变背景、边框和装饰图形。
   - 允许信息密度较高，但必须通过标题、分组和合理的留白将信息组织成可识别的块。

【色彩与材质】
1. 配色策略
   - 同屏中可同时出现多种高饱和颜色（粉、紫、橙、蓝、翠绿等），但需要通过大小和位置控制，避免所有元素同时抢眼。
   - 背景可以是强烈渐变或图案纹理，前景卡片再叠加自己的渐变或纯色，形成层层叠加。
2. 材质质感
   - 使用粗边框、强阴影和发光外框，让卡片像一张张海报或贴纸被贴在舞台上。
   - 可以在背景中加入光斑、颗粒噪点或光束线条，增加炫目、庆典氛围。

【图形元素与排版】
1. 图形
   - 使用几何形状（圆、三角形、矩形）、Emoji、图标和小插画自由散布，但要注意围绕某个主视觉中心。
2. 文本排版
   - 标题字重极粗（black / extrabold），字距可略扩展，强化视觉存在感。
   - 分组标题和标签也可以使用全部大写或带背景块的形式，强化「海报」感。

【交互与动效】
1. 悬停
   - 卡片和按钮在 hover 时可以轻微放大、旋转或加强阴影，并让边框或渐变变更亮。
2. 动画
   - 可以给背景元素或小徽章添加缓慢浮动或闪烁高光，但避免高频闪烁，以免视觉疲劳。
   - 动效节奏可稍快于常规企业页面，但不要超过 300ms 的快速抖动。

【输出要求】
- 使用语义化 HTML：header、nav、main、section 组织导航、Hero 和内容区域。
- 使用 TailwindCSS 原子类控制多彩背景（如 bg-gradient-to-br）、阴影（shadow-2xl）、圆角和布局。
- 生成的 UI 必须让人一眼感到「视觉极度丰富，同时仍看得见层级与结构」，明确属于 Maximalism 极繁主义风格变体。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Maximalism style page that looks very close to the current “Maximalism” core style card demo.
Keep the high-saturation, element-dense, stage-like aesthetic; you may change copy, illustrations and specific color combinations, but you must not simplify the layout into a minimal or low-density design. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Landing pages for museums, contemporary art exhibitions and cultural festivals.
- Bold creative brand or campaign homepages where “more is more” is part of the identity.
- Experiences that should feel visually packed, loud and entertaining, yet still navigable.

[Layout structure]
1. Header
   - Use a gradient or semi-transparent header bar with a strong logo and navigation links styled as colorful pills or badges.
   - Navigation text can be bold and slightly oversized, optionally with emojis or icons to express festivity.
2. Hero section
   - Place an oversized, heavy headline (e.g. “MORE IS MORE!”) at or near the center of the viewport.
   - Surround the headline with badges, tags and decorative icons or emojis to create a visual explosion focal point.
3. Content blocks
   - Use multi-column cards or modules where each card has its own saturated gradient or bold solid color, plus strong borders and shadows.
   - Allow rich content but group it clearly: strong titles, subheadings and consistent spacing maintain readability.

[Color and material]
1. Palette
   - Combine multiple saturated hues (pinks, purples, oranges, blues, emeralds) in a single view; control dominance via size and placement.
   - Backgrounds may be strong gradients or patterns, with foreground cards stacking additional gradients or solids.
2. Rendering
   - Cards, chips and buttons carry thick borders, pronounced shadows and glow-like outlines so they feel like poster fragments pasted together.
   - Background layers can include light flares, noise or streaks to simulate stage lighting or neon festival signage.

[Interaction and motion]
1. Hover
   - On hover, cards and buttons can scale up slightly, strengthen shadows and bright borders, and feel theatrically responsive.
2. Motion
   - Use gentle floating, pulsing or shimmering for decorative elements; avoid fast flicker that would cause eye strain.
   - Keep motion timings lively but controlled (roughly 180–300ms for typical UI transitions).

[Output requirements]
- Use semantic HTML (header/nav/main/section) to structure the page.
- Use Tailwind-style utilities for gradients, layout, spacing, shadows and typography.
- The resulting UI must clearly embody Maximalism: visually dense, multi-colored and celebratory, while preserving enough hierarchy and grouping to remain usable.`
    },
    // 極繁主義風格的敘事型 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长极繁主义（Maximalism）视觉风格的 UI 设计师，需要打造一个「一眼就感到爆炸丰富」的艺术或文化页面。

场景定位：
- 适用于艺术博物馆、展览活动页、创意品牌 Landing Page 或音乐 / 文化节的宣传站。
- 页面要传达“More is more”的态度：信息、色彩和装饰都很多，但仍需保持结构和可用性。

视觉设计理念：
- 在同一画面中大胆堆叠多种高饱和色彩（粉、紫、橙、蓝、翠绿等）以及几何形状、表情符号与渐变块。
- 大字号、粗字体标题置于中心或视线焦点位置，周围用标签、徽章、装饰符号（如 💎✨👑）围绕，形成视觉爆点。
- 不追求「留白」，而追求带节奏的「填满」：每个区域都有内容或装饰，但透过分组和层次让用户仍然能读懂结构。

材质与质感：
- 大量使用渐变背景、荧光感高光以及带发光边框的卡片，营造舞台灯光或夜店灯牌的感觉。
- 卡片、徽章和按钮多采用粗边框、强阴影与高对比度颜色，使每个元素都像独立海报碎片被拼贴在一起。

交互体验：
- 悬停与点击反馈可以稍微夸张：例如轻微放大、阴影加深、彩色描边亮度提升，让交互本身也带「戏剧感」。
- 动画节奏可比普通界面略快，但要避免眩目闪烁：以平滑位移、缩放和发光变化为主，而非频繁闪烁。

氛围营造：
- 整体氛围应该是热闹、张扬、庆典式的，让用户有走进当代艺术馆或夜间艺术节的感觉。
- 用户在浏览时应感到「信息很多但很有趣」，愿意在页面上四处探索不同角落。`,

      'en-US': `Role: You are a UI designer specializing in Maximalism, creating a “more is more” visual experience for an art or culture-focused page.

Scene:
- Suited for museum or exhibition sites, festival and event landings, or bold creative brand homepages.
- The page should feel visually packed and loud, yet still navigable and structurally readable.

Visual philosophy:
- Combine many saturated colors (pink, purple, orange, blue, emerald, etc.) with geometric shapes, emojis and gradient panels in the same viewport.
- Use oversized, heavy headings at the center or main focal area, surrounded by badges, tags and decorative icons like 💎✨👑 to create a visual explosion.
- Favor “organized fullness” over minimalism: nearly every region hosts content or decoration, but grouping and hierarchy keep it understandable.

Material & texture:
- Rely on strong gradients, glow effects and thick framed cards to evoke stage lighting or neon signage.
- Cards, chips and buttons should feel like poster fragments pasted together—bold borders, pronounced shadows and high color contrast.

Interaction:
- Hover and active states may be somewhat dramatic: light scaling, deeper shadows, brighter outlines, so interaction itself feels performative.
- Animation timing can be livelier than in neutral UIs, but avoid eye-straining flicker—prefer smooth motion and glow changes.

Mood:
- Overall, the mood is festive, exuberant and theatrical, like walking into a contemporary art show or night-time street festival.
- Users should feel there is “a lot going on, in a fun way” and be encouraged to explore every corner of the page.`
    },
    fullPageHTML: `
      <!-- 極繁主義藝術博物館完整頁面 -->
      <div class="min-h-screen bg-black text-white overflow-x-hidden maximalism-page">

        <!-- 背景裝飾層 -->
        <div class="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-black opacity-80 pointer-events-none"></div>
        <div class="fixed inset-0 max-particles pointer-events-none"></div>

        <!-- 頂部華麗導航 -->
        <nav class="fixed top-0 left-0 right-0 z-50 max-nav">
          <div class="max-nav-main">
            <div class="flex items-center justify-between px-8 py-4">
              <!-- Logo 區 -->
              <div class="flex items-center gap-4">
                <div class="max-logo">
                  <span class="text-4xl">🏛️</span>
                </div>
                <div>
                  <h1 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 max-glow">
                    MAXIMUS MUSEUM
                  </h1>
                  <p class="text-xs text-pink-300 tracking-widest">WHERE ART MEETS EXTRAVAGANCE</p>
                </div>
              </div>

              <!-- 主導航 -->
              <div class="hidden lg:flex items-center gap-8">
                <a href="javascript:void(0)" class="max-nav-link">Collections</a>
                <a href="javascript:void(0)" class="max-nav-link">Exhibitions</a>
                <a href="javascript:void(0)" class="max-nav-link">Artists</a>
                <a href="javascript:void(0)" class="max-nav-link">Events</a>
                <a href="javascript:void(0)" class="max-nav-link">About</a>
              </div>

              <!-- 右側工具 -->
              <div class="flex items-center gap-4">
                <div class="max-search-box">
                  <input type="text" placeholder="Search masterpieces..." class="max-search-input" />
                  <span class="text-xl">🔍</span>
                </div>
                <button class="max-btn-primary">Visit</button>
              </div>
            </div>

            <!-- 次級導航 -->
            <div class="max-subnav px-8 py-3 flex gap-4 overflow-x-auto">
              <button class="max-badge">🔥 Trending</button>
              <button class="max-badge">🌟 Renaissance</button>
              <button class="max-badge">💎 Modern Art</button>
              <button class="max-badge">🎨 Impressionism</button>
              <button class="max-badge">👑 Baroque</button>
              <button class="max-badge">✨ Contemporary</button>
              <button class="max-badge">🏺 Ancient</button>
            </div>
          </div>
        </nav>

        <!-- Hero 區域 (視差裝飾) -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
          <!-- 裝飾元素層 -->
          <div class="absolute inset-0 max-decorations">
            <div class="max-deco-circle" style="top: 10%; left: 5%; width: 200px; height: 200px;"></div>
            <div class="max-deco-square" style="top: 20%; right: 10%; width: 150px; height: 150px;"></div>
            <div class="max-deco-triangle" style="bottom: 30%; left: 15%;"></div>
            <div class="max-deco-circle" style="bottom: 10%; right: 20%; width: 180px; height: 180px;"></div>
            <svg class="absolute top-1/4 left-1/3 w-32 h-32 max-deco-svg" viewBox="0 0 100 100">
              <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="url(#gold-gradient)" stroke-width="2"/>
            </svg>
          </div>

          <!-- 主內容 -->
          <div class="relative z-10 text-center max-w-5xl mx-auto px-6">
            <div class="mb-8">
              <span class="max-label">✨ EXPERIENCE MAGNIFICENCE ✨</span>
            </div>

            <h2 class="text-7xl md:text-9xl font-black mb-6 max-hero-title">
              <span class="max-word">MORE</span>
              <span class="max-word">IS</span>
              <span class="max-word">MORE</span>
            </h2>

            <p class="text-2xl md:text-3xl text-pink-200 mb-8 max-subtitle">
              Immerse yourself in a world where every detail matters,<br/>
              every color sings, and every moment is a masterpiece.
            </p>

            <div class="flex justify-center gap-6 mb-12">
              <button class="max-btn-hero max-btn-gold">🎨 Explore Gallery</button>
              <button class="max-btn-hero max-btn-outline">📅 Book Tour</button>
            </div>

            <!-- 懸浮預覽卡片 -->
            <div class="flex justify-center gap-6 flex-wrap">
              <div class="max-preview-card" style="animation-delay: 0s;">
                <div class="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-6xl">
                  🎨
                </div>
                <p class="mt-2 font-bold">Renaissance</p>
              </div>
              <div class="max-preview-card" style="animation-delay: 0.2s;">
                <div class="aspect-square bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center text-6xl">
                  👑
                </div>
                <p class="mt-2 font-bold">Baroque</p>
              </div>
              <div class="max-preview-card" style="animation-delay: 0.4s;">
                <div class="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-6xl">
                  💎
                </div>
                <p class="mt-2 font-bold">Modern</p>
              </div>
            </div>
          </div>

          <!-- 滾動提示 -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 max-scroll-hint">
            <p class="text-sm text-pink-300 mb-2">Scroll to Discover</p>
            <div class="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center pt-2">
              <div class="w-1 h-2 bg-pink-400 rounded-full max-scroll-dot"></div>
            </div>
          </div>
        </section>

        <!-- 展覽卡片網格 -->
        <section class="relative py-20 px-8">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
              <h3 class="text-5xl font-black mb-4 max-section-title">
                ✨ FEATURED EXHIBITIONS ✨
              </h3>
              <p class="text-xl text-pink-200">A curated collection of visual splendor</p>
            </div>

            <!-- 不規則網格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- 展覽卡片 1 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">🎭</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">The Golden Era</h4>
                    <p class="text-sm text-pink-200 mb-4">Renaissance Masters Collection</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">🎨 Painting</span>
                      <span class="max-tag">📅 1400-1600</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 展覽卡片 2 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">👑</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">Royal Splendor</h4>
                    <p class="text-sm text-pink-200 mb-4">Baroque Grandeur & Drama</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">👑 Baroque</span>
                      <span class="max-tag">📅 1600-1750</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 展覽卡片 3 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">💎</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">Modern Visions</h4>
                    <p class="text-sm text-pink-200 mb-4">Contemporary Expressions</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">💎 Modern</span>
                      <span class="max-tag">📅 1900-Now</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 展覽卡片 4 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">🌸</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">Light & Color</h4>
                    <p class="text-sm text-pink-200 mb-4">Impressionist Masterworks</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">🌸 Impressionism</span>
                      <span class="max-tag">📅 1860-1890</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 展覽卡片 5 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">🏺</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">Ancient Wonders</h4>
                    <p class="text-sm text-pink-200 mb-4">Timeless Artifacts</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">🏺 Ancient</span>
                      <span class="max-tag">📅 3000BC-500AD</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 展覽卡片 6 -->
              <div class="max-exhibition-card">
                <div class="max-card-frame">
                  <div class="aspect-[3/4] bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 rounded-lg overflow-hidden">
                    <div class="h-full flex items-center justify-center text-8xl">✨</div>
                  </div>
                  <div class="max-card-overlay">
                    <h4 class="text-2xl font-black mb-2">Digital Dreams</h4>
                    <p class="text-sm text-pink-200 mb-4">New Media Art</p>
                    <div class="flex gap-2 flex-wrap">
                      <span class="max-tag">✨ Digital</span>
                      <span class="max-tag">📅 2020-Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 時間軸 -->
        <section class="relative py-20 px-8 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
              <h3 class="text-5xl font-black mb-4 max-section-title">
                📅 EXHIBITION TIMELINE 📅
              </h3>
              <p class="text-xl text-pink-200">Journey through our celebrated history</p>
            </div>

            <div class="max-timeline">
              <!-- 時間軸節點 1 -->
              <div class="max-timeline-item">
                <div class="max-timeline-icon">🎨</div>
                <div class="max-timeline-content">
                  <h4 class="text-2xl font-black mb-2">Renaissance Revival</h4>
                  <p class="text-pink-200 mb-2">January - March 2025</p>
                  <p class="text-sm">An unprecedented collection of Renaissance masterpieces featuring works from the greatest artists of the era.</p>
                </div>
              </div>

              <!-- 時間軸節點 2 -->
              <div class="max-timeline-item">
                <div class="max-timeline-icon">👑</div>
                <div class="max-timeline-content">
                  <h4 class="text-2xl font-black mb-2">Baroque Brilliance</h4>
                  <p class="text-pink-200 mb-2">April - June 2025</p>
                  <p class="text-sm">Experience the drama and grandeur of the Baroque period with ornate sculptures and theatrical paintings.</p>
                </div>
              </div>

              <!-- 時間軸節點 3 -->
              <div class="max-timeline-item">
                <div class="max-timeline-icon">💎</div>
                <div class="max-timeline-content">
                  <h4 class="text-2xl font-black mb-2">Modern Marvels</h4>
                  <p class="text-pink-200 mb-2">July - September 2025</p>
                  <p class="text-sm">Discover groundbreaking works from modern masters pushing the boundaries of artistic expression.</p>
                </div>
              </div>

              <!-- 時間軸節點 4 -->
              <div class="max-timeline-item">
                <div class="max-timeline-icon">✨</div>
                <div class="max-timeline-content">
                  <h4 class="text-2xl font-black mb-2">Digital Frontiers</h4>
                  <p class="text-pink-200 mb-2">October - December 2025</p>
                  <p class="text-sm">Explore the intersection of technology and art in this cutting-edge digital exhibition.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="relative py-16 px-8 mt-20 bg-gradient-to-t from-black via-purple-900/40 to-transparent">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-4xl">🏛️</span>
                  <h4 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                    MAXIMUS
                  </h4>
                </div>
                <p class="text-pink-200 text-sm">Where art becomes an experience, and every visit is a journey through magnificence.</p>
              </div>

              <div>
                <h5 class="font-black text-lg mb-4 text-pink-300">Collections</h5>
                <ul class="space-y-2 text-sm">
                  <li><a href="javascript:void(0)" class="max-footer-link">🎨 Renaissance</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">👑 Baroque</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">💎 Modern</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">✨ Contemporary</a></li>
                </ul>
              </div>

              <div>
                <h5 class="font-black text-lg mb-4 text-pink-300">Visit</h5>
                <ul class="space-y-2 text-sm">
                  <li><a href="javascript:void(0)" class="max-footer-link">📅 Plan Your Visit</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">🎟️ Tickets</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">🕐 Hours</a></li>
                  <li><a href="javascript:void(0)" class="max-footer-link">📍 Location</a></li>
                </ul>
              </div>

              <div>
                <h5 class="font-black text-lg mb-4 text-pink-300">Connect</h5>
                <div class="flex gap-3 mb-4">
                  <a href="javascript:void(0)" class="max-social-btn">📱</a>
                  <a href="javascript:void(0)" class="max-social-btn">💬</a>
                  <a href="javascript:void(0)" class="max-social-btn">📧</a>
                  <a href="javascript:void(0)" class="max-social-btn">🌐</a>
                </div>
                <p class="text-xs text-pink-300">Subscribe to our newsletter for exclusive updates</p>
              </div>
            </div>

            <div class="border-t-2 border-pink-500/30 pt-8 text-center">
              <p class="text-sm text-pink-300">
                © 2025 Maximus Museum. All rights reserved. | Crafted with ✨ Maximalist Love ✨
              </p>
            </div>
          </div>
        </footer>

        <!-- SVG Gradients -->
        <svg width="0" height="0" style="position: absolute;">
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#FF69B4;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    `,
    fullPageStyles: `
      /* 極繁主義核心樣式 */

      @keyframes maxGlow {
        0%, 100% {
          text-shadow: 0 0 20px #FFD700, 0 0 40px #FF69B4, 0 0 60px #9370DB;
        }
        50% {
          text-shadow: 0 0 30px #FFD700, 0 0 60px #FF69B4, 0 0 90px #9370DB;
        }
      }

      @keyframes maxFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }

      @keyframes maxPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.9; }
      }

      @keyframes maxShine {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }

      @keyframes maxParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
      }

      @keyframes maxScrollDot {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(12px); }
      }

      @keyframes maxRotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* 頁面基礎 */
      .maximalism-page {
        font-family: 'Georgia', 'Times New Roman', serif;
        position: relative;
      }

      /* 粒子背景 */
      .max-particles::before,
      .max-particles::after {
        content: '✨';
        position: absolute;
        font-size: 20px;
        animation: maxParticle 8s linear infinite;
      }

      .max-particles::before {
        left: 10%;
        animation-delay: 0s;
      }

      .max-particles::after {
        left: 80%;
        animation-delay: 4s;
      }

      /* 導航樣式 */
      .max-nav {
        backdrop-filter: blur(20px);
        background: linear-gradient(to bottom,
          rgba(0, 0, 0, 0.9),
          rgba(75, 0, 130, 0.8)
        );
        border-bottom: 3px solid;
        border-image: linear-gradient(to right, #FFD700, #FF69B4, #9370DB) 1;
        box-shadow: 0 10px 40px rgba(255, 105, 180, 0.3);
      }

      .max-nav-main {
        background: linear-gradient(135deg,
          rgba(212, 175, 55, 0.1),
          rgba(255, 105, 180, 0.1),
          rgba(147, 112, 219, 0.1)
        );
      }

      .max-logo {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        animation: maxPulse 2s ease-in-out infinite;
      }

      .max-glow {
        animation: maxGlow 3s ease-in-out infinite;
      }

      .max-nav-link {
        position: relative;
        padding: 8px 16px;
        font-weight: bold;
        color: #FFD700;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        border-radius: 8px;
      }

      .max-nav-link:hover {
        border-color: #FF69B4;
        background: rgba(255, 105, 180, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 20px rgba(255, 105, 180, 0.4);
      }

      .max-search-box {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .max-search-input {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid #FF69B4;
        border-radius: 20px;
        padding: 8px 16px;
        color: white;
        outline: none;
        transition: all 0.3s ease;
      }

      .max-search-input:focus {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
      }

      .max-btn-primary {
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        border: none;
        padding: 10px 24px;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
      }

      .max-btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(255, 215, 0, 0.6);
      }

      .max-subnav {
        background: rgba(147, 112, 219, 0.3);
        border-top: 1px solid rgba(255, 105, 180, 0.3);
      }

      .max-badge {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 105, 180, 0.2));
        border: 2px solid #FFD700;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 0.875rem;
        font-weight: bold;
        color: #FFD700;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      .max-badge:hover {
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        color: black;
        transform: scale(1.1);
      }

      /* Hero 區裝飾 */
      .max-decorations {
        opacity: 0.4;
      }

      .max-deco-circle {
        position: absolute;
        border-radius: 50%;
        border: 4px solid #FFD700;
        animation: maxFloat 6s ease-in-out infinite;
        box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
      }

      .max-deco-square {
        position: absolute;
        border: 4px solid #FF69B4;
        animation: maxFloat 8s ease-in-out infinite;
        transform: rotate(45deg);
        box-shadow: 0 0 40px rgba(255, 105, 180, 0.5);
      }

      .max-deco-triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-bottom: 140px solid #9370DB;
        animation: maxFloat 7s ease-in-out infinite;
        filter: drop-shadow(0 0 40px rgba(147, 112, 219, 0.5));
      }

      .max-deco-svg {
        animation: maxRotate 20s linear infinite;
      }

      /* Hero 文字 */
      .max-label {
        display: inline-block;
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        padding: 8px 24px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 0.875rem;
        letter-spacing: 2px;
        animation: maxPulse 2s ease-in-out infinite;
      }

      .max-hero-title {
        line-height: 1;
        background: linear-gradient(135deg, #FFD700, #FF69B4, #9370DB, #FFD700);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: maxShine 3s linear infinite;
        text-shadow: 0 10px 40px rgba(255, 215, 0, 0.5);
      }

      .max-word {
        display: inline-block;
        animation: maxFloat 3s ease-in-out infinite;
      }

      .max-word:nth-child(2) {
        animation-delay: 0.2s;
      }

      .max-word:nth-child(3) {
        animation-delay: 0.4s;
      }

      .max-subtitle {
        animation: maxPulse 4s ease-in-out infinite;
      }

      /* Hero 按鈕 */
      .max-btn-hero {
        padding: 16px 40px;
        font-size: 1.125rem;
        font-weight: bold;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 3px solid transparent;
      }

      .max-btn-gold {
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: black;
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.5);
      }

      .max-btn-gold:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 15px 40px rgba(255, 215, 0, 0.7);
      }

      .max-btn-outline {
        background: transparent;
        border-color: #FF69B4;
        color: #FF69B4;
      }

      .max-btn-outline:hover {
        background: #FF69B4;
        color: white;
        transform: translateY(-5px) scale(1.05);
      }

      /* 預覽卡片 */
      .max-preview-card {
        width: 140px;
        animation: maxFloat 4s ease-in-out infinite;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .max-preview-card:hover {
        transform: translateY(-10px) scale(1.1);
      }

      /* 滾動提示 */
      .max-scroll-hint {
        animation: maxPulse 2s ease-in-out infinite;
      }

      .max-scroll-dot {
        animation: maxScrollDot 1.5s ease-in-out infinite;
      }

      /* 區塊標題 */
      .max-section-title {
        background: linear-gradient(135deg, #FFD700, #FF69B4, #9370DB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: maxGlow 3s ease-in-out infinite;
      }

      /* 展覽卡片 */
      .max-exhibition-card {
        transition: all 0.3s ease;
        animation: maxFloat 5s ease-in-out infinite;
      }

      .max-exhibition-card:nth-child(2n) {
        animation-delay: 1s;
      }

      .max-exhibition-card:hover {
        transform: translateY(-10px) scale(1.05);
      }

      .max-card-frame {
        position: relative;
        padding: 12px;
        background: linear-gradient(135deg, #FFD700, #FF69B4, #9370DB);
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
        transition: all 0.3s ease;
      }

      .max-card-frame:hover {
        box-shadow: 0 20px 60px rgba(255, 215, 0, 0.6);
      }

      .max-card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
        padding: 24px;
        border-radius: 0 0 20px 20px;
        transform: translateY(60%);
        transition: all 0.3s ease;
      }

      .max-exhibition-card:hover .max-card-overlay {
        transform: translateY(0);
      }

      .max-tag {
        display: inline-block;
        background: rgba(255, 215, 0, 0.2);
        border: 1px solid #FFD700;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.75rem;
        color: #FFD700;
      }

      /* 時間軸 */
      .max-timeline {
        position: relative;
        padding-left: 80px;
      }

      .max-timeline::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(to bottom, #FFD700, #FF69B4, #9370DB);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
      }

      .max-timeline-item {
        position: relative;
        margin-bottom: 60px;
        animation: maxFloat 6s ease-in-out infinite;
      }

      .max-timeline-item:nth-child(2n) {
        animation-delay: 1s;
      }

      .max-timeline-icon {
        position: absolute;
        left: -80px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        border: 4px solid #1A1A1A;
      }

      .max-timeline-content {
        background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 105, 180, 0.1));
        padding: 24px;
        border-radius: 16px;
        border: 2px solid #FF69B4;
        box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
        transition: all 0.3s ease;
      }

      .max-timeline-content:hover {
        transform: translateX(10px);
        box-shadow: 0 15px 40px rgba(255, 105, 180, 0.5);
      }

      /* Footer */
      .max-footer-link {
        color: #FF69B4;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .max-footer-link:hover {
        color: #FFD700;
        transform: translateX(5px);
      }

      .max-social-btn {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #FFD700, #FF69B4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
      }

      .max-social-btn:hover {
        transform: translateY(-5px) scale(1.1);
        box-shadow: 0 10px 25px rgba(255, 215, 0, 0.6);
      }

      /* 響應式調整 */
      @media (max-width: 768px) {
        .max-hero-title {
          font-size: 3rem;
        }

        .max-timeline {
          padding-left: 60px;
        }

        .max-timeline-icon {
          left: -60px;
          width: 40px;
          height: 40px;
          font-size: 1.5rem;
        }
      }
    `
  },
  {
    id: 'scandi',
    title: 'styles.newTrend.scandi.title',
    description: 'styles.newTrend.scandi.description',
    demoHTML: `
      <div class="w-full h-full bg-gray-50 p-6 space-y-4">
        <!-- 簡約卡片 -->
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div class="flex-1">
              <div class="h-2 bg-gray-300 rounded w-2/3 mb-1"></div>
              <div class="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="h-2 bg-gray-100 rounded"></div>
            <div class="h-2 bg-gray-100 rounded w-5/6"></div>
          </div>
        </div>

        <!-- 自然元素 -->
        <div class="flex gap-2 justify-center">
          <div class="w-8 h-8 bg-green-100 rounded-full border border-green-200"></div>
          <div class="w-8 h-8 bg-blue-50 rounded-full border border-blue-100"></div>
          <div class="w-8 h-8 bg-amber-50 rounded-full border border-amber-100"></div>
        </div>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'scandi',
    colorScheme: 'styles.newTrend.scandi.colorScheme',
    customStyles: '',
    demoBoxClass: 'bg-gray-50 p-0',
    // 北歐極簡風格的 CustomPrompt（給 LLM 的生成指令）
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Scandi 北欧极简」示例界面风格高度接近的 UI。
要求：保持大量白色与浅灰、极少量柔和彩色点缀以及工整栅格布局的整体气质，只允许替换文案、图标与局部模块，不允许引入高饱和大色块或复杂纹理。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 个人仪表板：展示今日任务、日程、习惯追踪和简单统计信息。
- 轻量级 SaaS 工具：如待办管理、个人财务概览、学习进度面板。
- 任何需要「安静、理性、不打扰」体验的日常工具型界面。

【整体布局结构】
1. 外层容器
   - 使用浅灰背景包裹主要内容，例如 bg-gray-50，左右留有充足边距。
2. 卡片区
   - 多张白色卡片按栅格排列（单列或双列），每张卡片使用小圆角、轻阴影和细边框。
   - 卡片内部典型结构：头像 / 图标 + 文本骨架条（灰色占位条）+ 简单状态信息。
3. 自然元素区
   - 在卡片下方或侧边增加少量彩色圆形或小块区域，作为状态 / 分类色点，颜色柔和、面积较小。

【色彩与材质】
1. 基底颜色
   - 背景：白色、浅灰（如 #f9fafb、#f3f4f6）。
   - 文本：深灰（#111827、#374151），避免使用纯黑。
2. 强调色
   - 使用少量绿色、浅蓝、暖黄作为「自然感」点缀，例如绿色用于完成状态、蓝色用于信息、黄橙用于提醒。
3. 材质与质感
   - 卡片与按钮表面接近纸张或薄木板的感觉：无强烈高光，阴影短而柔。
   - 图标采用简单线框或极简填色，不做写实阴影或 3D 效果。

【交互与动效】
1. 悬停反馈
   - 对卡片和按钮使用非常轻微的背景提亮或阴影变化，动画时长约 120–180ms。
2. 按钮行为
   - 主按钮可使用纯色填充（如柔和的蓝或绿），但阴影与边框都要保持克制。

【输出要求】
- 使用语义化 HTML（main、section、header）组织卡片区和自然元素区。
- 使用 TailwindCSS 原子类控制颜色、间距和排版（如 bg-gray-50、shadow-sm、rounded-lg）。
- 生成的界面必须保留「大量白+浅灰 + 少量柔和点色 + 工整排版」的北欧极简特征，让人一眼感到安静、实用且有一点温度。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Scandinavian Minimal (Scandi) style interface that looks very close to the current demo.
Keep the large white and light-gray surfaces, tiny muted color accents and orderly grid layout. You may change copy, icons and specific modules, but you must not introduce large saturated color blocks or heavy textures. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Personal dashboards: tasks, schedule, habit tracking and light analytics.
- Lightweight SaaS tools such as to-do managers, personal finance summaries or learning progress views.
- Any everyday tool UI that should feel calm, unobtrusive and quietly supportive.

[Layout structure]
1. Outer container
   - Use a pale gray background (e.g. bg-gray-50) with comfortable padding on all sides.
2. Card area
   - Arrange white cards in one or two columns; each card has small radii, soft shadows and subtle borders.
   - Typical card content: avatar or icon, skeleton-like gray bars for text, and perhaps a small state indicator.
3. Natural accents
   - Place a few small circular color spots (greens, blues, ambers) to represent categories or statuses; keep them visually light.

[Color and material]
1. Base colors
   - Backgrounds: whites and very light grays.
   - Text: dark grays instead of pure black to reduce harshness.
2. Accents
   - Muted greens, soft blues and warm yellows used sparingly for tags, status pills or small icons.
3. Rendering
   - Surfaces should feel like paper or thin wood: no strong highlights or deep shadows; use short, diffused drop shadows instead.
   - Icons are simple outline or minimal solid shapes, more like signage than illustration.

[Interaction]
1. Hover
   - Cards and buttons react with tiny background lifts or border tints, with fast but gentle transitions (around 120–180ms).
2. Primary actions
   - Primary buttons may use solid fills in the accent color family, but avoid heavy shadows or dramatic gradients.

[Output requirements]
- Use semantic sections (main/section/header) to structure the layout.
- Use Tailwind utilities for spacing, alignment and neutral color palette.
- The resulting UI must clearly express Scandi minimalism: bright, quiet, orderly and warm enough to feel like a tidy Nordic apartment.`},
    // 北歐極簡風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长北欧（Scandi）极简风格的 UI 设计师，需要设计一个安静、明亮、功能清晰的日常工具界面。

场景定位：
- 适用于个人仪表板、习惯追踪、日程管理或轻量级 SaaS 应用。
- 用户期待界面“看起来简单、用起来直接、不打扰日常节奏”。

视觉设计理念：
- 以大量白色和浅灰为基底，搭配非常少量的柔和彩色点（如绿色、浅蓝、暖黄）作为状态或分类标记。
- 布局强调整齐、对齐和节奏感：明显的分组、清晰的间距层级，没有多余线条和装饰。

材质与质感：
- 元素表面接近“纸 + 薄木板”的感觉：浅背景、轻阴影、小圆角，尽量避免厚重的发光和强渐变。
- 图标可以是简单线框或极简填色图形，不追求写实，而更像简洁的图示。

交互体验：
- 悬停状态改变极轻：轻微背景提亮、边框从浅灰变为略深或带一点主色，动画时间短而干净。
- 重点按钮可使用纯色填充，但仍保持克制，不使用过大阴影或高对比渐变。

氛围营造：
- 整体氛围应该像整理良好的北欧公寓：干净、明亮、安静且有一点温度。
- 用户在使用时应感到界面“不会催促我”，反而像一张随时可以书写的干净桌面。`,

      'en-US': `Role: You are a UI designer focusing on Scandinavian minimalism, crafting a calm, bright and straightforward interface for everyday tools.

Scene:
- Suitable for personal dashboards, habit trackers, scheduling tools or lightweight SaaS products.
- Users expect the UI to “look simple, work directly, and never get in the way”.

Visual philosophy:
- Rely on large areas of white and very light gray, with small touches of muted color (greens, soft blues, warm yellows) to mark status or categories.
- Layout is about order and rhythm: clear grouping, generous spacing and strict alignment, with no unnecessary adornments.

Material & texture:
- Surfaces should feel like paper and thin wood: pale backgrounds, subtle shadows, modest corner radius; avoid heavy glows or loud gradients.
- Icons are simple outlines or minimal filled shapes—more like clear signage than detailed illustration.

Interaction:
- Hover feedback is gentle: slight background lift, border tinting towards the primary color, short and clean transitions.
- Primary buttons may use solid fills but remain modest—no oversized shadows or aggressive gradients.

Mood:
- The interface should feel like a tidy Scandinavian apartment: bright, quiet and comfortable without shouting for attention.
- Users should feel that the UI respects their pace and simply gives them a clear, uncluttered surface to work on.`
    }
  },
  {
    id: 'memphis',
    title: 'styles.newTrend.memphis.title',
    description: 'styles.newTrend.memphis.description',
    demoHTML: `
      <div class="w-full h-full bg-yellow-300 p-4 relative overflow-hidden">
        <!-- Memphis 幾何圖案 -->
        <div class="absolute inset-0">
          <!-- 圓點 -->
          <div class="absolute top-4 left-4 w-3 h-3 bg-black rounded-full"></div>
          <div class="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div class="absolute bottom-6 left-12 w-2 h-2 bg-pink-500 rounded-full"></div>

          <!-- 線條 -->
          <div class="absolute top-12 left-8 w-16 h-1 bg-black rotate-45"></div>
          <div class="absolute bottom-12 right-4 w-12 h-1 bg-pink-500 -rotate-12"></div>

          <!-- 波浪線 -->
          <svg class="absolute top-20 right-2 w-16 h-4" viewBox="0 0 100 20">
            <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke="#000" stroke-width="2" fill="none"/>
          </svg>
        </div>

        <!-- 主要形狀 -->
        <div class="relative z-10 flex items-center justify-center h-full">
          <div class="relative">
            <!-- 三角形背景 -->
            <div class="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-cyan-400"></div>
            <!-- 圓形疊加 -->
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full border-4 border-black"></div>
            <!-- 正方形 -->
            <div class="absolute -bottom-2 -left-2 w-8 h-8 bg-black rotate-12"></div>
          </div>
        </div>
      </div>
    `,
    // ✅ 階段 3.2: 改用動態加載 ID
    fullPagePreviewId: 'memphis',
    colorScheme: 'styles.newTrend.memphis.colorScheme',
    customStyles: '',
    demoBoxClass: 'p-0',
    // Memphis 幾何風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Memphis 80 年代几何」示例界面风格高度接近的 UI。
要求：保留高饱和黄色背景、黑色与彩色的几何符号、波浪线与随机散布的装饰形状，只允许替换文案、图案与局部配色，不允许将画面改为极简或低对比布局。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 青少年 / 校园产品的活动页或登陆页
- 轻量小游戏入口、创意工作坊报名页
- 带有「趣味、反叛、反极简」品牌调性的宣传页

【整体布局结构】
1. 背景层
   - 使用大面积纯色或高饱和渐变背景（如亮黄），其上散布小尺寸几何形状（圆点、粗线、波浪线）。
   - 形状可通过 absolute 定位分布在四周，形成轻微的视觉噪点。
2. 主内容区域
   - 居中放置主几何组合（如三角形 + 圆形 + 方块），作为画面焦点。
   - 可在其旁边或下方放置标题、副标题与主要按钮，用简短英文或单词营造海报感。

【色彩与材质】
1. 配色策略
   - 背景使用明亮基色（如黄色），前景几何使用黑色和对比色（青、粉、蓝、红）。
   - 通过控制各形状面积与数量，避免所有元素同时抢占注意力。
2. 材质质感
   - 采用平涂色块，无渐变或仅轻度渐变，使画面更贴近平面插画风。
   - 适度使用粗描边和纯黑轮廓，营造复古印刷海报的感觉。

【交互与动效】
1. 悬停行为
   - 对主几何组合和按钮施加轻微旋转或位移（例如 rotate-6、-translate-y-1），仿佛纸片被轻轻拨动。
2. 动画
   - 装饰形状可有缓慢漂移或微小震动，但频率要低，避免造成晃动眩晕。

【输出要求】
- 使用语义化 HTML 将装饰背景与主内容分层（例如外层容器 + 背景装饰层 + 主内容层）。
- 使用 Tailwind 原子类实现背景色、绝对定位、旋转和圆角等效果。
- 生成的 UI 必须保持「高饱和背景 + 散布几何符号 + 强烈图形对比」的 Memphis 核心特征，让人一眼联想到 80 年代复古派对海报。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Memphis 1980s geometric style interface that looks very close to the current demo.
Keep the bright yellow background, bold black strokes and scattered colorful geometric elements (dots, lines, triangles, wavy strokes). You may change copy, icons and specific colors, but you must not turn the layout into a minimalist or low-contrast design. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Landing pages for youth or campus products, playful campaigns and mini-games.
- Entry pages for creative workshops or artistic experiments with a “fun / rebellious / anti-minimal” tone.

[Layout structure]
1. Background layer
   - Use a large solid or gradient background (typically bright yellow) with small geometric decorations positioned using absolute coordinates.
   - Include circles, short lines and wavy strokes placed around the edges to create a sense of rhythm and visual noise.
2. Main shape cluster
   - Center a composition made of a triangle, circle and square (or similar shapes), acting as the main focal point.
   - Around or below this cluster, place a short headline, optional subtitle and a primary button in contrasting colors.

[Color and material]
1. Palette
   - Base: bright yellow or a comparable vivid base; accents: cyan, pink, blue, red and black.
   - Balance the palette by controlling relative area: large background, medium main shape cluster, small decorative elements.
2. Rendering
   - Prefer flat fills and bold strokes; avoid heavy gradients or 3D shading so the design feels like print-era poster art.

[Interaction and motion]
1. Hover
   - On hover, slightly rotate or nudge the main shape cluster and buttons, as if paper pieces are being flicked by hand.
2. Motion
   - Allow subtle drifting or wiggle animations on background shapes with low frequency; avoid jittery or high-speed motion.

[Output requirements]
- Use semantic HTML to separate background decoration and foreground content.
- Use Tailwind-style utilities for background colors, absolute positioning, transforms and layout.
- The resulting UI must clearly express Memphis geometry: bold shapes, strong contrast and a playful, 80s-inspired party-flyer mood.`
    },
    // Memphis 幾何風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长 Memphis 80 年代几何风格的 UI 设计师，需要用大胆图形和强烈对比打造欢快、玩乐感十足的界面。

场景定位：
- 适合创意活动页、青少年或校园产品、小游戏入口页以及强调“趣味 / 反叛 / 反极简”的品牌。
- 界面重点是传递“活泼、不严肃”的性格，同时仍能让用户看清主按钮和关键信息。

视觉设计理念：
- 大量使用几何基本形（圆形、三角形、方块、不规则波形）以随机但有节奏的方式散布在背景和前景。
- 颜色采用高饱和对比搭配（黄+黑、青+粉、蓝+红等），但通过面积控制避免完全失控。

材质与质感：
- 元素轮廓多数为实线描边或粗边框，辅以平涂大色块，整体更像平面插画而不是写实 3D。
- 适度用手绘感波浪线或不规则路径，打破过于机械的直线布局。

交互体验：
- 悬停时可以加入轻微旋转、位移或缩放，制造「纸片被轻轻拨动」的动感。
- 重点按钮可带有图形装饰（如小三角、小圆点），但点击区域要保持清晰并满足可达性。

氛围营造：
- 页面应给人“复古派对海报”的感觉：充满能量与幽默感，而不是严肃工作介面。
- 用户应该在第一眼就明白：这是一个可以玩、可以尝试、不会出错太多的空间。`,

      'en-US': `Role: You are a UI designer specializing in 1980s Memphis style, using bold geometry and sharp contrasts to create playful, energetic interfaces.

Scene:
- Ideal for creative campaigns, youth or campus products, casual mini-games and brands that celebrate fun and anti-minimalism.
- The UI’s main purpose is to express a lively personality while still keeping primary actions and messages discoverable.

Visual philosophy:
- Scatter basic geometric shapes (circles, triangles, squares, wavy lines) across background and foreground in a way that feels random yet rhythmic.
- Use high-contrast saturated palettes (yellow + black, cyan + pink, blue + red, etc.), balancing them via size and density so the page remains usable.

Material & texture:
- Outlines are often thick strokes; fills are flat, poster-like color blocks—more graphic design than realistic 3D.
- Hand-drawn wiggles or irregular lines help break rigid alignment and reinforce the playful tone.

Interaction:
- Hover effects can include small rotations, shifts or scale changes, as if the paper pieces are nudged by hand.
- Primary buttons may integrate decorative shapes but must retain a clear hit area and adequate contrast for accessibility.

Mood:
- The page should feel like a vintage party flyer or album cover: exuberant, humorous and unafraid of visual noise.
- Users should immediately sense that this is a space for experimentation and fun rather than strict productivity.`
    }
  },
  {
    id: 'claymation',
    title: 'styles.newTrend.claymation.title',
    description: 'styles.newTrend.claymation.description',
    demoHTML: `
      <div class="w-full h-full bg-gradient-to-b from-blue-100 to-purple-100 p-6 flex flex-col items-center justify-center gap-4">
        <!-- 玩具風格圓形 -->
        <div class="relative">
          <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg">
            <!-- 高光 -->
            <div class="absolute top-4 left-6 w-8 h-8 bg-white/40 rounded-full blur-sm"></div>
            <div class="absolute top-6 left-8 w-4 h-4 bg-white/60 rounded-full"></div>
          </div>
          <!-- 陰影 -->
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/10 rounded-full blur-md"></div>
        </div>

        <!-- 玩具按鈕 -->
        <div class="flex gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
          <div class="w-10 h-10 bg-gradient-to-br from-green-300 to-green-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
          <div class="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl shadow-md relative">
            <div class="absolute top-1 left-2 w-3 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'p-0',
    colorScheme: 'styles.newTrend.claymation.colorScheme',
    // Claymation 黏土玩具風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Claymation 黏土玩具」示例界面风格高度接近的 UI。
要求：保持圆润、饱满的几何形状和软糖般的渐变色，以及轻柔的阴影和高光，只允许替换文案、图标和部分色板，不允许把整体风格改成扁平或金属质感。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 儿童教育/故事应用首页或主要功能入口
- 玩具电商 Landing Page、亲子活动报名页面
- 需要传达「安全、可爱、没有压力」的休闲型界面

【整体布局结构】
1. 主视觉区域
   - 居中放置一枚或多枚黏土感圆形或胶囊形组件，配合高光和投影，让它们像立在桌面上的玩具。
   - 主圆形可搭配表情或图标（如笑脸、玩具图案），下方或周围放置几个小按钮或彩色块。
2. 操作区
   - 使用多枚色块按钮（如黄色、绿色、蓝色），形状圆润，排列紧凑但不过度拥挤；
   - 可用于「开始游戏」「进入故事」「选择角色」等操作。

【色彩与材质】
1. 配色策略
   - 背景使用柔和渐变（如蓝到紫、粉到橙），避免高对比强烈撞色。
   - 前景玩具使用明亮但略带奶油感的色彩（黄、绿、蓝、粉），整体风格偏「糖果色」。
2. 材质表现
   - 通过上下不均匀的高光和渐变模拟黏土或塑料玩具表面：顶部更亮、下半部更深。
   - 阴影短而模糊，类似小玩具在桌面下方的投影，不做写实长阴影。

【交互与动效】
1. 悬停与按下
   - 按钮在悬停时轻微放大或变亮，按下时略微扁平或缩小，好像被手指按压。
2. 动画
   - 粒子或背景元素可缓慢浮动或上下轻微弹起，节奏要舒缓，不能让人紧张。

【输出要求】
- 使用语义化 HTML 将主玩具区域与按钮区分层。
- 使用 TailwindCSS 原子类构建渐变背景、圆形/圆角组件（如 rounded-full、rounded-3xl）与投影（shadow-md、shadow-lg）。
- 生成界面必须保留「圆润形状 + 柔和渐变 + 黏土玩具质感」这些关键特征，让用户一眼就知道这是 Claymation 风格，而不是普通扁平卡片。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Claymation toy style interface that looks very close to the current demo.
Keep the rounded, chubby geometry, candy-like gradients, soft highlights and shadows. You may change text, icons and parts of the palette, but you must not turn the design into flat or metallic UI. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Home screens or main entry views for kids’ apps and story experiences.
- Landing pages for toy e-commerce or parent-child activities.
- Any relaxed, friendly interface that should feel safe and playful rather than serious.

[Layout structure]
1. Hero / main toy
   - Center one or more clay-like circles or pill-shaped elements with strong gradients and highlights so they read as physical toys.
   - Place expressive icons or emojis inside (faces, toys, symbols) and arrange small, colorful buttons around them.
2. Action area
   - Use a row or grid of chunky buttons in bright, creamy colors (yellow, green, blue, pink) for primary actions.

[Color and material]
1. Palette
   - Backgrounds use gentle, optimistic gradients (blue→purple, pink→orange, etc.).
   - Foreground toys use bright but soft tones that feel like candy or modeling clay.
2. Rendering
   - Apply directional highlights and shading to the shapes so they appear soft and squeezable.
   - Use short, blurred shadows under the objects to suggest they sit on a surface without looking heavy.

[Interaction and motion]
1. Hover / active
   - On hover, let toys and buttons grow slightly or become brighter; on active, let them squash a bit as though pressed.
2. Motion
   - Use smooth, slow bobbing or floating animations for decorative elements; avoid nervous jitter.

[Output requirements]
- Use semantic HTML to separate the hero toy area from the controls.
- Use Tailwind utilities for gradients, rounded corners, shadows and layout.
- The resulting UI must clearly read as Claymation/toy-like: rounded forms, soft candy colors and gentle motion that feels playful and safe.`
    },
    // Claymation 黏土玩具風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长 Claymation 黏土玩具风格的 UI 设计师，需要让界面看起来像由柔软、可捏的彩色橡皮泥拼出来。

场景定位：
- 适用于儿童教育产品、亲子类应用、玩具电商、轻松小游戏或任何希望传达“安全、可爱、无压力”的界面。
- 用户需要一眼就看出：这是为友好、轻松场景设计的，而非严肃商务工具。

视觉设计理念：
- 以圆润的几何形状和肥厚的比例为主：大圆、大胶囊按钮、胖胖的图标与厚边框。
- 颜色多为明亮但略带奶油感的暖色与粉彩色，避免过度荧光或纯度过高的刺眼配色。

材质与质感：
- 利用渐变和高光模拟黏土或塑料玩具表面：一侧有柔和高光，另一侧略暗，边缘始终圆滑。
- 阴影短而柔和，像玩具放在桌面上投下的小影子，凸显立体感但不过度写实。

交互体验：
- 悬停与按下时可以有轻微“挤压”感：按钮或组件略微扁一点、缩放一点，好像被手指按压。
- 动画节奏偏慢、柔和，避免快速抖动或弹跳造成紧张；所有动效应像玩具在慢慢移动。

氛围营造：
- 整体氛围应当是安全、友善、略带童趣的，适合家长与小朋友共同使用。
- 用户在浏览时会联想到玩具陈列架、糖果店或儿童绘本封面，而不是冷冰冰的网店后台。`,

      'en-US': `Role: You are a UI designer focusing on claymation and toy-like aesthetics, making the interface look as if it were sculpted from soft, colorful clay.

Scene:
- Perfect for kids’ educational apps, family products, toy e-commerce, casual games or any UI that needs to feel safe, cute and low-pressure.
- Users should instantly recognize this as a friendly environment rather than a serious business dashboard.

Visual philosophy:
- Favor chubby, rounded geometry: big circles, pill-shaped buttons, chunky icons and thick outlines.
- Color palette leans toward warm, creamy pastels rather than harsh neons—bright but gentle on the eyes.

Material & texture:
- Use gradients and highlights to mimic clay or plastic toy surfaces: soft specular highlight on one side, gentle shading on the other, with fully rounded edges.
- Shadows are soft and close to the object, as if toys are sitting on a tabletop, providing depth without heavy realism.

Interaction:
- Hover and active states may “squish” slightly: components compress or scale down a bit as though pressed by a finger.
- Animations are smooth and moderately slow; avoid jittery motion so the interface feels relaxed and approachable.

Mood:
- The overall mood is safe, friendly and play-oriented—appropriate for both children and parents.
- The UI should evoke toy shelves, candy stores or picture book covers, not sterile admin consoles.`
    },
    fullPageHTML: `
      <!-- 玩具電商網站完整頁面 -->
      <div class="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-blue-50">
        <!-- 導航欄 -->
        <nav class="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-yellow-400">
          <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
              <!-- Logo -->
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 toy-button toy-red rounded-full flex items-center justify-center text-2xl">
                  🧸
                </div>
                <div>
                  <h1 class="text-2xl font-black text-gray-800">TOY SHOP</h1>
                  <p class="text-xs text-gray-500">Happy Shopping!</p>
                </div>
              </div>

              <!-- 搜索欄 -->
              <div class="flex-1 max-w-md mx-8">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Search toys..."
                    class="toy-input w-full pl-12"
                  />
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
                </div>
              </div>

              <!-- 購物車 -->
              <div class="flex items-center gap-4">
                <button class="toy-button toy-blue px-6 py-2 text-sm">
                  🛒 Cart (3)
                </button>
              </div>
            </div>

            <!-- 分類導航 -->
            <div class="mt-4 flex gap-2 overflow-x-auto pb-2">
              <button class="toy-badge toy-red">🔥 HOT</button>
              <button class="toy-badge toy-blue">🚗 Cars</button>
              <button class="toy-badge toy-pink">🧸 Plush</button>
              <button class="toy-badge toy-green">🧩 Puzzles</button>
              <button class="toy-badge toy-yellow">🎨 Art</button>
              <button class="toy-badge toy-purple">🎮 Games</button>
              <button class="toy-badge toy-orange">🏀 Sports</button>
            </div>
          </div>
        </nav>

        <!-- 英雄橫幅 -->
        <section class="max-w-7xl mx-auto px-6 py-12">
          <div class="toy-card p-12 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-center toy-highlight overflow-hidden relative">
            <!-- 裝飾元素 -->
            <div class="absolute top-4 left-8 text-6xl opacity-30 toy-spin">⭐</div>
            <div class="absolute bottom-4 right-8 text-6xl opacity-30" style="animation: toy-spin 3s linear infinite reverse;">🌈</div>

            <h2 class="text-5xl font-black text-white mb-4 drop-shadow-lg toy-pulse">
              🎉 MEGA TOY SALE! 🎉
            </h2>
            <p class="text-xl text-white/90 mb-6">Up to 50% OFF on all toys!</p>
            <button class="toy-button toy-yellow text-xl px-12 py-4 toy-wiggle">
              SHOP NOW 🚀
            </button>
          </div>
        </section>

        <!-- 產品網格 -->
        <section class="max-w-7xl mx-auto px-6 py-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-3xl font-black text-gray-800">⭐ Featured Toys</h3>
            <div class="flex gap-2">
              <button class="text-sm px-4 py-2 border-2 border-gray-300 rounded-full hover:border-gray-800 transition-colors">
                All
              </button>
              <button class="text-sm px-4 py-2 border-2 border-gray-300 rounded-full hover:border-gray-800 transition-colors">
                New
              </button>
              <button class="text-sm px-4 py-2 border-2 border-gray-300 rounded-full hover:border-gray-800 transition-colors">
                Popular
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 產品卡片 1 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <span class="absolute -top-3 -right-3 toy-badge toy-red z-10">SALE</span>
                <div class="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🚗
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Super Race Car</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(128)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-red-600">$29.99</span>
                <span class="text-lg text-gray-400 line-through">$59.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-blue text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-blue text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>

            <!-- 產品卡片 2 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <span class="absolute -top-3 -right-3 toy-badge toy-yellow z-10">NEW</span>
                <div class="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🧸
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Cute Teddy Bear</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(256)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-pink-600">$39.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-pink text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-pink text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>

            <!-- 產品卡片 3 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <span class="absolute -top-3 -right-3 toy-badge toy-blue z-10">HOT</span>
                <div class="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🧩
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Magic Puzzle Set</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(89)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-blue-600">$24.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-blue text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-blue text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>

            <!-- 產品卡片 4 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <div class="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🎨
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Art Studio Kit</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(45)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-purple-600">$44.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-purple text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-purple text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>

            <!-- 產品卡片 5 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <div class="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🏀
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Sport Ball Set</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(72)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-green-600">$34.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-green text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-green text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>

            <!-- 產品卡片 6 -->
            <div class="toy-card p-6 bg-white">
              <div class="relative">
                <span class="absolute -top-3 -right-3 toy-badge toy-orange z-10">-30%</span>
                <div class="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl mb-4 flex items-center justify-center text-8xl">
                  🎮
                </div>
              </div>
              <h4 class="text-xl font-bold text-gray-800 mb-2">Game Console</h4>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-500">(312)</span>
              </div>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-black text-orange-600">$69.99</span>
                <span class="text-lg text-gray-400 line-through">$99.99</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="toy-quantity flex-1">
                  <button class="toy-orange text-white">−</button>
                  <span class="font-bold min-w-[2rem] text-center">1</span>
                  <button class="toy-orange text-white">+</button>
                </div>
                <button class="toy-button toy-green py-2 px-4 text-sm">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Toast 通知 (示例) -->
        <div class="fixed bottom-8 right-8 toy-card bg-white p-4 shadow-2xl max-w-sm toy-bounce">
          <div class="flex items-center gap-3">
            <div class="text-4xl">✅</div>
            <div class="flex-1">
              <h5 class="font-bold text-gray-800">Added to Cart!</h5>
              <p class="text-sm text-gray-600">Super Race Car x1</p>
            </div>
            <button class="text-gray-400 hover:text-gray-800 text-2xl">✕</button>
          </div>
        </div>

        <!-- 底部 -->
        <footer class="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mt-16 py-12">
          <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 class="font-black text-white text-xl mb-4">🧸 TOY SHOP</h4>
                <p class="text-white/80 text-sm">Making kids smile since 2020!</p>
              </div>
              <div>
                <h5 class="font-bold text-white mb-3">Categories</h5>
                <ul class="space-y-2 text-white/80 text-sm">
                  <li>Cars & Vehicles</li>
                  <li>Plush Toys</li>
                  <li>Educational</li>
                  <li>Outdoor Play</li>
                </ul>
              </div>
              <div>
                <h5 class="font-bold text-white mb-3">Support</h5>
                <ul class="space-y-2 text-white/80 text-sm">
                  <li>Help Center</li>
                  <li>Track Order</li>
                  <li>Returns</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h5 class="font-bold text-white mb-3">Newsletter</h5>
                <p class="text-white/80 text-sm mb-3">Get toy deals!</p>
                <div class="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    class="toy-input flex-1 text-sm"
                  />
                  <button class="toy-button toy-yellow px-4 py-2 text-sm">GO</button>
                </div>
              </div>
            </div>
            <div class="border-t-2 border-white/30 pt-6 text-center text-white/80 text-sm">
              <p>© 2025 TOY SHOP. All rights reserved. Made with 💖 for kids!</p>
            </div>
          </div>
        </footer>
      </div>
    `,
    fullPageStyles: `
      /* 玩具風格已在 index.css 中定義,這裡添加頁面特定樣式 */

      /* 確保 toy-* 類在 iframe 中也能使用 */
      @import url('/src/index.css');

      /* 額外的動畫增強 */
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .toy-card:hover {
        animation: float 0.6s ease-in-out;
      }

      /* 滾動條美化 */
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #FF69B4, #FFD700);
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #FF1493, #FFA500);
      }
    `
  },
  {
    id: 'corporate',
    title: 'styles.newTrend.corporate.title',
    description: 'styles.newTrend.corporate.description',
    demoHTML: `
      <div class="w-full h-full bg-white p-6">
        <!-- 企業級卡片 -->
        <div class="border border-gray-300 rounded-sm bg-white shadow-sm p-4 space-y-3">
          <!-- 標題區 -->
          <div class="flex items-center justify-between pb-3 border-b border-gray-200">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-800">Dashboard</div>
                <div class="text-xs text-gray-500">Enterprise</div>
              </div>
            </div>
            <div class="text-xs text-gray-400">Q4 2025</div>
          </div>

          <!-- 數據指標 -->
          <div class="grid grid-cols-3 gap-2">
            <div class="text-center">
              <div class="text-lg font-bold text-gray-800">94%</div>
              <div class="text-xs text-gray-500">Growth</div>
            </div>
            <div class="text-center border-l border-r border-gray-200">
              <div class="text-lg font-bold text-green-600">+12K</div>
              <div class="text-xs text-gray-500">Users</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-blue-600">$2.4M</div>
              <div class="text-xs text-gray-500">Revenue</div>
            </div>
          </div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-gray-100 p-0',
    colorScheme: 'styles.newTrend.corporate.colorScheme',
    // 現代企業級 SaaS 風格的 CustomPrompt
    customPrompt: {
      'zh-CN': `你现在是一名资深 UI 设计师兼前端工程师，请生成一个与当前「Corporate 企业级 SaaS」示例界面风格高度接近的 Dashboard。
要求：保持浅灰 / 白底 + 冷色主色（蓝 / 绿）+ 严谨栅格布局的企业级仪表盘气质，只允许替换模块内容、图表数据与文案，不允许改成高饱和娱乐化或过度装饰风格。输出语义化 HTML 与 TailwindCSS 风格原子类（或等价工具类方案）。

【使用场景】
- 中大型企业运营后台、分析仪表盘、多团队协作平台首页
- 决策者、运营负责人和一线团队需要在同一界面快速浏览 KPI 并进行常规操作

【整体布局结构】
1. 顶部导航栏
   - 含 Logo、产品名称、全局搜索和右侧用户/通知/设置入口；
   - Navigation 使用横向排列，保持高度统一（如 h-16），背景为白色并带有底部分割线。
2. 左侧侧边栏（可选）
   - 放置部门 / 模块导航（如 Overview、Analytics、Billing、Team 等），采用图标 + 文本形式。
3. 主内容区
   - 上方使用若干统计卡片显示核心指标（营收、活跃用户、转化率等）；下方使用图表（折线、柱状、饼图）与表格展示详细数据；
   - 卡片与图表区按栅格系统对齐（例如三列指标卡 + 两列图表区）。

【色彩与材质】
1. 背景与卡片
   - 整体背景使用浅灰色（如 #f3f4f6），主内容容器内卡片使用白底和细边框；
   - 轻微阴影用于区分卡片层级，但不抢眼。
2. 主色与语义色
   - 主色多为蓝或青蓝（如 #2563eb、#1d4ed8），用于主要按钮和关键指标；
   - 语义色：绿色表示增长 / 成功，红色表示风险 / 下降，灰色表示次要信息。

【图表与数据模块】
1. 图表
   - 使用简单清晰的折线图 / 柱状图，线条与柱子采用主色和次要色搭配；
   - 坐标轴和网格线保持淡灰色，避免喧宾夺主。
2. 表格与列表
   - 表头突出、行距适中，支持 hover 高亮当前行。

【交互与动效】
1. 悬停反馈
   - 按钮和卡片在 hover 时增强边框和阴影，背景轻微提亮即可；
   - 避免大幅缩放或高度弹跳，保持专业稳重。
2. 过滤与切换
   - 常见交互如日期筛选、下拉菜单和标签切换需要清晰的选中状态和过渡（如 border-b-2、背景轻微变化）。

【输出要求】
- 使用语义化 HTML 划分 header、nav、aside、main、section 和 footer。
- 使用 TailwindCSS 原子类构建栅格（如 grid、gap-6）、卡片（bg-white、shadow-sm、rounded-lg）与图表容器。
- 生成 Dashboard 必须保留「浅灰背景 + 白色卡片 + 冷色主色 + 清晰栅格」这些关键特征，让人一眼看出是稳重的企业级 SaaS 后台界面。`,
      'en-US': `You are a senior UI designer and front-end engineer. Generate a Corporate/Enterprise SaaS dashboard interface that looks very close to the current demo.
Keep the light neutral backgrounds, white cards, cool primary accents (blues/greens) and strict grid-based layout. You may change module content, chart data and copy, but must not restyle it into a playful, highly saturated or decorative theme. Output semantic HTML and TailwindCSS-style utility classes (or an equivalent utility-first system).

[Usage scenarios]
- Operations consoles, analytics dashboards and collaboration hubs for mid-to-large organizations.
- Used by decision-makers, ops leads and frontline staff to scan KPIs and perform everyday actions.

[Layout structure]
1. Top navigation bar
   - Contains logo, product name, global search and a right-aligned cluster of notifications, account and settings.
   - Typically a fixed-height white bar with a bottom border to separate it from the content.
2. Side navigation (optional)
   - Provides module navigation (Overview, Analytics, Billing, Team, etc.) using icon + label entries.
3. Main content
   - The upper area hosts metric cards summarizing key KPIs; the lower area uses charts and tables for deeper analysis.
   - Align all cards and modules on a grid with consistent spacing (e.g., 3-column stat row, 2-column chart layout).

[Color and material]
1. Surfaces
   - Backgrounds are light grays; cards are white with fine borders and subtle shadows to indicate elevation.
2. Colors
   - Primary accent is a calm blue or teal for main actions and key metrics.
   - Semantic colors: green for growth/success, red for risk/decline, gray for secondary information.

[Charts and data]
1. Charts
   - Use clean line and bar charts; chart colors follow the primary/secondary palette while axes and gridlines stay soft gray.
2. Tables/lists
   - Emphasize headers, leave comfortable row height and support hover highlighting for active rows.

[Interaction and motion]
1. Hover
   - Buttons and cards respond with slightly stronger borders, subtle shadow and mild background lift; avoid exaggerated scaling.
2. Filters and tabs
   - Range pickers, dropdowns and segmented controls must have clear selected states and crisp transitions.

[Output requirements]
- Use semantic HTML to structure header, navigation, sidebar and main content areas.
- Use Tailwind-style utilities for layout grids, cards, typography and color.
- The resulting dashboard must strongly convey “enterprise SaaS”: neutral, structured, reliable and comfortable for long work sessions.`
    },
    // 現代企業級 SaaS 風格的 stylePrompt
    stylePrompt: {
      'zh-CN': `角色：你是一名擅长企业级 SaaS Dashboard 的 UI 设计师，需要为 B2B 产品设计稳重、专业、可扩展的大屏界面。

场景定位：
- 用于中大型企业的运营后台、分析仪表板或多团队协作平台。
- 用户包括决策者、运营负责人和一线团队，他们在界面中快速浏览关键指标并进行日常操作。

视觉设计理念：
- 以中性浅灰和白色为主背景，搭配蓝色 / 绿色等冷色作为主色，以传达可靠、冷静、理性的品牌形象。
- 布局基于栅格系统：清晰的导航区、工具栏、主体内容区与侧栏，卡片之间对齐严格、间距统一。

材质与质感：
- 卡片表面多为白底配细边框和非常浅的阴影，强调信息层级而非视觉炫技。
- 图表和数字模块使用清晰的配色规则（例如蓝色代表主指标、绿色代表增长、灰色代表次要信息）。

交互体验：
- 悬停与按下反馈简洁明确：边框强化、背景略微提亮、图标颜色变化，不需要复杂动画。
- 重点在于信息密度与可读性：过滤器、标签、分页、表格交互应优先保证易操作和清晰反馈。

氛围营造：
- 整體氛圍應該是「專業、可靠但不壓迫」，讓使用者長時間使用也不覺得疲累。
- 介面要表現出組織性與可預測性，讓新用戶一眼看出結構，老用戶能形成穩定操作肌肉記憶。`,

      'en-US': `Role: You are a UI designer specializing in enterprise SaaS dashboards, creating stable, professional large-screen interfaces for B2B products.

Scene:
- Designed for operations consoles, analytics dashboards and multi-team collaboration platforms in mid-to-large organizations.
- Users include decision makers, operations leads and frontline staff who quickly scan KPIs and perform routine actions.

Visual philosophy:
- Base visuals on light neutrals and white, with restrained blues and greens as primary accents to signal reliability and clarity.
- Layout follows a clear grid: navigation bars, toolbars, main content and side panels are all aligned with consistent spacing.

Material & texture:
- Cards typically use white backgrounds, fine borders and very subtle shadows, emphasizing information hierarchy over visual spectacle.
- Charts and metric blocks follow strict color semantics (e.g., blue for primary metrics, green for growth, gray for secondary details).

Interaction:
- Hover and active states are simple and explicit: slightly stronger borders, lifted backgrounds, icon color shifts; no flashy transitions required.
- Filters, tags, pagination and table interactions prioritize ease of use and clear feedback in high-density data environments.

Mood:
- The overall mood is professional, trustworthy and low-drama, suitable for long work sessions.
- The interface should convey organization and predictability so new users grasp structure quickly and experienced users build reliable muscle memory.`
    },
    fullPageHTML: `
      <!-- 企業級 SaaS Dashboard 完整頁面 -->
      <div class="min-h-screen bg-gray-50 font-sans">

        <!-- 頂部導航欄 -->
        <header class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div class="flex items-center justify-between px-6 h-16">
            <!-- Logo 區域 -->
            <div class="flex items-center gap-8">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span class="text-white font-bold text-lg">E</span>
                </div>
                <span class="text-xl font-semibold text-gray-900">EnterpriseHub</span>
              </div>

              <!-- 全局搜索 -->
              <div class="hidden md:block">
                <div class="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="w-96 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- 右側工具欄 -->
            <div class="flex items-center gap-4">
              <!-- 通知 -->
              <button class="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <!-- 用戶菜單 -->
              <div class="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div class="text-right hidden sm:block">
                  <div class="text-sm font-medium text-gray-900">John Doe</div>
                  <div class="text-xs text-gray-500">Admin</div>
                </div>
                <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- 主內容區 -->
        <div class="flex pt-16">
          <!-- 側邊導航欄 -->
          <aside class="w-64 bg-white border-r border-gray-200 fixed left-0 top-16 bottom-0 overflow-y-auto">
            <nav class="p-4 space-y-1">
              <!-- Dashboard -->
              <a href="javascript:void(0)" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                Dashboard
              </a>

              <!-- Projects -->
              <a href="javascript:void(0)" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Projects
                <span class="ml-auto bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded">12</span>
              </a>

              <!-- Team -->
              <a href="javascript:void(0)" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                Team
              </a>

              <!-- Analytics -->
              <a href="javascript:void(0)" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Analytics
              </a>

              <div class="pt-4 mt-4 border-t border-gray-200">
                <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Management</p>

                <!-- Settings -->
                <a href="javascript:void(0)" class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Settings
                </a>
              </div>
            </nav>
          </aside>

          <!-- 主內容 -->
          <main class="flex-1 ml-64 p-8">
            <!-- 頁面標題 -->
            <div class="mb-8">
              <div class="flex items-center justify-between">
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                  <p class="text-sm text-gray-500 mt-1">Welcome back, John! Here's your performance summary.</p>
                </div>
                <div class="flex gap-3">
                  <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
                    Export
                  </button>
                  <button class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                    + New Project
                  </button>
                </div>
              </div>
            </div>

            <!-- KPI 卡片網格 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <!-- 總收入 -->
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-500">Total Revenue</span>
                  <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-gray-900">$2.4M</span>
                  <span class="inline-flex items-center text-xs font-medium text-green-600">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    12.5%
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2">vs last month</p>
              </div>

              <!-- 活躍用戶 -->
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-500">Active Users</span>
                  <div class="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-gray-900">18.2K</span>
                  <span class="inline-flex items-center text-xs font-medium text-green-600">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    8.3%
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2">vs last month</p>
              </div>

              <!-- 轉換率 -->
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-500">Conversion Rate</span>
                  <div class="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-gray-900">3.6%</span>
                  <span class="inline-flex items-center text-xs font-medium text-red-600">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    2.1%
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2">vs last month</p>
              </div>

              <!-- 成長率 -->
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <div class="flex items-center justify-between mb-4">
                  <span class="text-sm font-medium text-gray-500">Growth Rate</span>
                  <div class="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M trending-up M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-gray-900">+94%</span>
                  <span class="inline-flex items-center text-xs font-medium text-green-600">
                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    5.2%
                  </span>
                </div>
                <p class="text-xs text-gray-500 mt-2">vs last month</p>
              </div>
            </div>

            <!-- 數據可視化與表格區域 -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <!-- 圖表區 (2/3) -->
              <div class="lg:col-span-2">
                <div class="bg-white rounded-lg border border-gray-200 p-6">
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                    <div class="flex gap-2">
                      <button class="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">7d</button>
                      <button class="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded">30d</button>
                      <button class="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">90d</button>
                    </div>
                  </div>

                  <!-- CSS 模擬折線圖 -->
                  <div class="h-64 flex items-end gap-2">
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 45%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 62%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 55%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 78%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 68%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 85%"></div>
                    </div>
                    <div class="flex-1 h-full flex flex-col justify-end">
                      <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80" style="height: 92%"></div>
                    </div>
                  </div>

                  <!-- 圖例 -->
                  <div class="mt-4 flex items-center justify-center gap-6 text-sm">
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-blue-500 rounded"></div>
                      <span class="text-gray-600">Revenue</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="w-3 h-3 bg-gray-300 rounded"></div>
                      <span class="text-gray-600">Target</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 統計卡片 (1/3) -->
              <div class="space-y-6">
                <!-- 團隊活動 -->
                <div class="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Team Activity</h3>
                  <div class="space-y-4">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        AM
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">Alice Martin</p>
                        <p class="text-xs text-gray-500">Updated project</p>
                      </div>
                      <span class="text-xs text-gray-400">2m</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-sm">
                        BJ
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">Bob Johnson</p>
                        <p class="text-xs text-gray-500">Completed task</p>
                      </div>
                      <span class="text-xs text-gray-400">5m</span>
                    </div>

                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                        CW
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">Carol White</p>
                        <p class="text-xs text-gray-500">Added comment</p>
                      </div>
                      <span class="text-xs text-gray-400">12m</span>
                    </div>
                  </div>
                </div>

                <!-- 進度追蹤 -->
                <div class="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 class="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>
                  <div class="space-y-3">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">Website Redesign</span>
                        <span class="text-sm font-semibold text-gray-900">75%</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">Mobile App</span>
                        <span class="text-sm font-semibold text-gray-900">45%</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-green-600 h-2 rounded-full" style="width: 45%"></div>
                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="text-sm font-medium text-gray-700">API Integration</span>
                        <span class="text-sm font-semibold text-gray-900">90%</span>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-purple-600 h-2 rounded-full" style="width: 90%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 數據表格 -->
            <div class="bg-white rounded-lg border border-gray-200">
              <div class="px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                  <div class="flex items-center gap-3">
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-md transition-colors">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                      </svg>
                      Filter
                    </button>
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-md transition-colors">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TXN-001</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-semibold mr-3">
                            AC
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">Acme Corp</div>
                            <div class="text-xs text-gray-500">acme@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$12,500</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 15, 2025</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button class="text-gray-600 hover:text-gray-800">Edit</button>
                      </td>
                    </tr>

                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TXN-002</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs font-semibold mr-3">
                            GI
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">GlobalTech Inc</div>
                            <div class="text-xs text-gray-500">global@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$8,200</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">
                          Pending
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 14, 2025</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button class="text-gray-600 hover:text-gray-800">Edit</button>
                      </td>
                    </tr>

                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TXN-003</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-semibold mr-3">
                            SS
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">StartupStudio</div>
                            <div class="text-xs text-gray-500">startup@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$15,750</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 13, 2025</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button class="text-gray-600 hover:text-gray-800">Edit</button>
                      </td>
                    </tr>

                    <tr class="hover:bg-gray-50 transition-colors">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TXN-004</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                          <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs font-semibold mr-3">
                            DL
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">DigitalLab</div>
                            <div class="text-xs text-gray-500">digital@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">$6,300</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                          Failed
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jan 12, 2025</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button class="text-blue-600 hover:text-blue-800 mr-3">View</button>
                        <button class="text-gray-600 hover:text-gray-800">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 分頁 -->
              <div class="px-6 py-4 border-t border-gray-200">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-500">Showing <span class="font-medium">1</span> to <span class="font-medium">4</span> of <span class="font-medium">28</span> results</p>
                  <div class="flex gap-2">
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Previous
                    </button>
                    <button class="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md">
                      1
                    </button>
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      2
                    </button>
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      3
                    </button>
                    <button class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    `,
    fullPageStyles: `
      /* 企業級設計樣式 */

      /* 重置默認樣式 */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* 確保 Tailwind 樣式生效 */
      @layer utilities {
        .text-balance {
          text-wrap: balance;
        }
      }

      /* 自定義滾動條 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #F9FAFB;
      }

      ::-webkit-scrollbar-thumb {
        background: #D1D5DB;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #9CA3AF;
      }

      /* 表格懸停動畫 */
      tbody tr {
        transition: background-color 0.15s ease-in-out;
      }

      /* 按鈕懸停效果 */
      button {
        transition: all 0.15s ease-in-out;
      }

      /* 輸入框焦點效果 */
      input:focus,
      select:focus,
      textarea:focus {
        outline: none;
      }

      /* 卡片陰影漸變 */
      .bg-white {
        transition: box-shadow 0.2s ease-in-out;
      }

      /* KPI 卡片懸停效果 */
      .bg-white.rounded-lg.border:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      /* 側邊欄鏈接過渡 */
      aside nav a {
        transition: all 0.2s ease-in-out;
      }

      /* 確保固定佈局正確 */
      header {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }

      aside {
        box-shadow: 1px 0 3px 0 rgba(0, 0, 0, 0.1);
      }

      /* 響應式調整 */
      @media (max-width: 1024px) {
        aside {
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }

        main {
          margin-left: 0 !important;
        }
      }

      /* 數據可視化柱狀圖動畫 */
      .h-64 > div > div {
        transition: height 0.3s ease-in-out;
      }

      .h-64 > div:hover > div {
        opacity: 1 !important;
      }

      /* 進度條動畫 */
      .bg-blue-600,
      .bg-green-600,
      .bg-purple-600 {
        transition: width 0.3s ease-in-out;
      }

      /* 狀態標籤樣式增強 */
      .inline-flex {
        white-space: nowrap;
      }

      /* 表格單元格對齊優化 */
      table {
        border-collapse: separate;
        border-spacing: 0;
      }

      /* 頭像字母居中 */
      .w-8.h-8,
      .w-10.h-10 {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `
  }
];
