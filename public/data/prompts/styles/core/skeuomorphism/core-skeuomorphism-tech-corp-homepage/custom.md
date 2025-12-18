# Custom Prompt

## 中文版本 (zh-CN)


设计一个拟物化风格的科技公司主页，融合未来感工业设计与触感真实的 UI 元素。

**核心视觉特征**：
- **金属质感表面**：抛光铝合金、镀铬边框、阳极氧化处理的深色金属面板
- **精密机械细节**：六角螺丝、散热孔阵列、CNC 切割边缘、LED 指示灯
- **工业级按钮**：带有金属边框的按压式开关，具有明确的按下反馈和阴影变化
- **玻璃与金属对比**：磨砂玻璃覆盖层搭配拉丝金属底座
- **精确的光影层级**：多层阴影营造 3D 浮雕效果，高光边缘模拟真实光源

**页面结构**：
1. **Hero 区域**：大型产品展示区，带有金属质感的标题排版和发光 CTA 按钮
2. **功能卡片区**：每张卡片如同独立的金属面板，带有凹陷的图标区域和浮雕文字
3. **数据仪表板**：模拟真实仪表的数据展示，包含刻度盘、进度条、状态指示灯
4. **产品规格区**：技术参数以工业标签风格呈现，带有机械编号系统
5. **CTA 区域**：大型金属按钮，带有发光边缘和按压动画效果

**交互细节**：
- 按钮 hover 时金属边缘发出微光
- 点击时有真实的按压深度变化
- 滚动时元素带有微妙的视差效果
- 表单输入框如同金属凹槽，聚焦时边缘发光

**色彩方案**：
- 主色：深空灰 (#1a1a2e)、钛金属色 (#2d3436)
- 强调色：电蓝 (#00d9ff)、琥珀警示灯 (#ffa502)
- 表面：抛光银 (#c8d6e5)、磨砂黑 (#2c3e50)

---

## English Version (en-US)

Design a skeuomorphic tech corporation homepage that blends futuristic industrial design with tactile, realistic UI elements.

**Core Visual Features**:
- **Metallic Surfaces**: Polished aluminum, chrome-plated bezels, anodized dark metal panels
- **Precision Mechanical Details**: Hexagonal screws, ventilation hole arrays, CNC-cut edges, LED indicators
- **Industrial-Grade Buttons**: Push switches with metal frames, featuring distinct press feedback and shadow transitions
- **Glass-Metal Contrast**: Frosted glass overlays paired with brushed metal bases
- **Precise Light & Shadow Hierarchy**: Multi-layered shadows creating 3D embossed effects, highlight edges simulating real light sources

**Page Structure**:
1. **Hero Section**: Large product showcase area with metallic typography and glowing CTA buttons
2. **Feature Cards**: Each card resembles an independent metal panel with recessed icon areas and embossed text
3. **Data Dashboard**: Real instrument-style data displays including dials, progress bars, and status indicator lights
4. **Product Specs**: Technical parameters presented as industrial labels with mechanical numbering systems
5. **CTA Section**: Large metal buttons with glowing edges and press animation effects

**Interaction Details**:
- Button edges emit subtle glow on hover
- Realistic press depth changes on click
- Subtle parallax effects during scrolling
- Form inputs styled as metal grooves, edges glow on focus

**Color Palette**:
- Primary: Deep space gray (#1a1a2e), titanium (#2d3436)
- Accent: Electric blue (#00d9ff), amber warning light (#ffa502)
- Surfaces: Polished silver (#c8d6e5), matte black (#2c3e50)

**Technical Implementation**:
- Use CSS `box-shadow` with multiple layers for 3D depth
- Apply `linear-gradient` for metallic surface reflections
- Implement `transform: translateY()` for button press states
- Use `backdrop-filter: blur()` for frosted glass effects
- Add `transition` with custom cubic-bezier for mechanical feel
