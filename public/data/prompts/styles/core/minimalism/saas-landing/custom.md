# Custom Prompt

## 中文版本 (zh-CN)


设计一个极简主义风格的 SaaS 产品着陆页，以「少即是多」为核心理念，通过大量留白和精简元素传达产品的专业性与效率。

**核心设计原则**：
- **极致留白**：内容仅占页面 30-40%，大面积空白创造呼吸感
- **单色主导**：黑白灰为主，仅用一种强调色（如蓝色或绿色）
- **字体即设计**：使用优雅的无衬线字体作为主要视觉元素
- **隐形设计**：UI 元素尽可能不引人注目，让内容说话

**视觉元素**：
- **超大标题**：72-120px 的主标题，字重 600-700
- **细线分隔**：1px 浅灰线条作为区域分隔
- **幽灵按钮**：透明背景、细边框的 CTA 按钮
- **单色图标**：线性图标，统一 1.5px 描边粗细
- **负空间图形**：利用空白创造视觉图形

**页面结构**：
1. **导航栏**：Logo + 3-4 个文字链接 + 单一 CTA，高度 64-80px
2. **Hero 区域**：
   - 一句话价值主张（最多 10 个字）
   - 一行副标题说明
   - 单一 CTA 按钮
   - 大量下方留白

3. **特性展示**：
   - 3 列网格布局
   - 每个特性：图标 + 标题 + 一行描述
   - 避免过多文字

4. **社会证明**：
   - 客户 Logo 云（灰度处理）
   - 单条精选评价

5. **定价区**：
   - 2-3 个定价方案
   - 突出推荐方案
   - 最简洁的功能对比

6. **底部 CTA**：
   - 重复主要行动召唤
   - 简洁的页脚链接

**色彩方案**：
- 主背景：纯白 (#FFFFFF) 或极浅灰 (#FAFAFA)
- 主文字：深灰 (#1A1A1A) 而非纯黑
- 次要文字：中灰 (#666666)
- 强调色：单一品牌色（如 #0066FF）
- 边框：极浅灰 (#E5E5E5)

**字体选择**：
- 推荐：Inter、SF Pro、Söhne、Untitled Sans
- 标题：Medium/Semi-bold 600
- 正文：Regular 400
- 行高：标题 1.1-1.2，正文 1.6-1.8

---

## English Version (en-US)

Design a minimalist SaaS product landing page with "less is more" as the core philosophy, conveying professionalism and efficiency through generous whitespace and refined elements.

**Core Design Principles**:
- **Extreme Whitespace**: Content occupies only 30-40% of the page, expansive blank areas create breathing room
- **Monochromatic Dominance**: Black, white, gray as base with only one accent color (e.g., blue or green)
- **Typography as Design**: Elegant sans-serif fonts serve as primary visual elements
- **Invisible Design**: UI elements as unobtrusive as possible, letting content speak

**Visual Elements**:
- **Oversized Headlines**: 72-120px main titles, font-weight 600-700
- **Hairline Dividers**: 1px light gray lines as section separators
- **Ghost Buttons**: Transparent background, thin-bordered CTA buttons
- **Monochrome Icons**: Linear icons with consistent 1.5px stroke weight
- **Negative Space Graphics**: Using whitespace to create visual shapes

**Page Structure**:
1. **Navigation Bar**: Logo + 3-4 text links + single CTA, height 64-80px
2. **Hero Section**:
   - One-line value proposition (max 10 words)
   - Single subtitle explanation
   - Single CTA button
   - Generous whitespace below

3. **Features Display**:
   - 3-column grid layout
   - Each feature: icon + title + one-line description
   - Avoid excessive text

4. **Social Proof**:
   - Customer logo cloud (grayscale)
   - Single featured testimonial

5. **Pricing Section**:
   - 2-3 pricing plans
   - Highlighted recommended plan
   - Most concise feature comparison

6. **Bottom CTA**:
   - Repeat primary call-to-action
   - Minimal footer links

**Color Scheme**:
- Background: Pure white (#FFFFFF) or very light gray (#FAFAFA)
- Primary Text: Dark gray (#1A1A1A) not pure black
- Secondary Text: Medium gray (#666666)
- Accent: Single brand color (e.g., #0066FF)
- Borders: Very light gray (#E5E5E5)

**Typography Choices**:
- Recommended: Inter, SF Pro, Söhne, Untitled Sans
- Headlines: Medium/Semi-bold 600
- Body: Regular 400
- Line-height: Headlines 1.1-1.2, Body 1.6-1.8

**Technical Implementation**:
- Use CSS `max-width: 1200px` with generous `padding: 120px 0`
- Apply `font-feature-settings: 'ss01'` for stylistic alternates
- Implement `scroll-snap-type` for section-based scrolling
- Use `opacity: 0.6` for secondary text instead of gray color
- Apply `letter-spacing: -0.02em` for large headlines
