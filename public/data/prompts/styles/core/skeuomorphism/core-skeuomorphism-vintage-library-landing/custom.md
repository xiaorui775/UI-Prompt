# Custom Prompt

## 中文版本 (zh-CN)


设计一个拟物化风格的复古图书馆着陆页，营造学术殿堂的庄严氛围，结合古籍质感与经典建筑元素。

**核心视觉特征**：
- **皮革装订质感**：深酒红、墨绿、藏青的精装书封面，带有烫金纹饰和压纹图案
- **羊皮纸与古纸**：泛黄的纸张背景、毛边纸纹理、水印效果、墨迹斑点
- **古典印刷字体**：衬线体标题（如 Garamond、Baskerville）、手写花体装饰字母
- **木质书架元素**：深色桃花心木架体、雕花装饰、黄铜配件、书挡造型
- **图书馆器物**：绿色银行灯、放大镜、羽毛笔、火漆印章、书签丝带

**页面结构**：
1. **Hero 书卷区**：展开的古籍书页效果，标题如同手写章节名，带有装饰性首字母
2. **书架导航**：木质书架造型的分类导航，每个书脊是一个可点击的类别
3. **藏书展示卡片**：立体书籍封面效果，带有书脊厚度和页面层次
4. **引言展示区**：羊皮纸卷轴风格的精选引言，带有装饰性边框
5. **馆藏统计**：复古计数器风格的数据展示，模拟机械翻页效果
6. **订阅入口**：火漆印章风格的 CTA 按钮，带有「加入藏书阁」的意象
7. **页脚区**：古典图书馆建筑剪影，带有希腊柱式装饰

**交互细节**：
- 书籍封面 hover 时有翻开第一页的预览效果
- 滚动时书页有轻微的翻动动画
- 导航切换时模拟书籍翻页的过渡效果
- 按钮点击时火漆印章有盖印动画
- 载入时有墨水晕染的进场动画

**色彩方案**：
- 主色：酒红皮革 (#722f37)、墨绿布面 (#2e4a3f)、藏青丝绒 (#1a365d)
- 装饰色：烫金 (#d4af37)、古铜 (#8b4513)、象牙白 (#fffff0)
- 背景：羊皮纸黄 (#f5e6c8)、古纸褐 (#e8d5b7)
- 强调：蜡封红 (#8b0000)、墨水黑 (#1a1a1a)

**氛围营造**：
- 整体色调偏暖黄，模拟烛光或老式灯泡照明
- 边缘处理偏向磨损、做旧效果
- 适度的纸张纹理覆盖增加岁月感
- 装饰元素参考维多利亚时期和文艺复兴风格
- 字体排版遵循古典书籍设计原则（大标题、小型大写字母、悬挂缩进）

---

## English Version (en-US)

Design a skeuomorphic vintage library landing page that creates a scholarly, majestic atmosphere, combining antique book textures with classical architectural elements.

**Core Visual Features**:
- **Leather-Bound Textures**: Deep burgundy, forest green, and navy blue hardcover book surfaces with gold foil embossing and debossed patterns
- **Parchment & Aged Paper**: Yellowed paper backgrounds, deckle edge textures, watermark effects, ink spots
- **Classical Typography**: Serif headings (like Garamond, Baskerville), decorative drop caps with calligraphic flourishes
- **Wooden Bookshelf Elements**: Dark mahogany shelving, carved ornaments, brass fittings, bookend shapes
- **Library Artifacts**: Green banker's lamps, magnifying glasses, quill pens, wax seal stamps, ribbon bookmarks

**Page Structure**:
1. **Hero Book Spread**: Open antique book page effect, titles styled as handwritten chapter names with decorative initials
2. **Bookshelf Navigation**: Wooden shelf-shaped category navigation, each book spine is a clickable category
3. **Collection Display Cards**: 3D book cover effects with spine thickness and page layer depth
4. **Quote Showcase**: Parchment scroll-style featured quotes with ornamental borders
5. **Collection Statistics**: Vintage counter-style data displays simulating mechanical flip effects
6. **Subscription Entry**: Wax seal stamp-style CTA button with "Join the Archives" imagery
7. **Footer Area**: Classical library building silhouettes with Greek column decorations

**Interaction Details**:
- Book covers show first-page peek preview on hover
- Subtle page-turning animations during scrolling
- Book page flip transition effects when navigating
- Wax seal stamping animation on button click
- Ink bleeding entrance animations on load

**Color Palette**:
- Primary: Burgundy leather (#722f37), forest green cloth (#2e4a3f), navy velvet (#1a365d)
- Decorative: Gold foil (#d4af37), antique bronze (#8b4513), ivory (#fffff0)
- Background: Parchment yellow (#f5e6c8), aged paper tan (#e8d5b7)
- Accent: Sealing wax red (#8b0000), ink black (#1a1a1a)

**Atmosphere Creation**:
- Overall warm yellow tint simulating candlelight or vintage bulb lighting
- Edge treatments with worn, distressed effects
- Moderate paper texture overlays adding aged patina
- Decorative elements referencing Victorian and Renaissance styles
- Typography following classical book design principles (display titles, small caps, hanging indents)

**Technical Implementation**:
- Use CSS `background-image` with paper/leather texture patterns
- Apply `box-shadow` with multiple layers for book spine depth
- Implement CSS `perspective` and `rotateY()` for book opening effects
- Use `@keyframes` for page-flip and ink-bleeding animations
- Add `border-image` for ornamental frame borders
- Apply `filter: sepia()` and noise overlays for aged effect
- Use `clip-path` for deckle edge paper effects
