# Custom Prompt

## 中文版本 (zh-CN)


创建一个具有 **Glassmorphism（玻璃态）音乐播放器** 风格的现代音乐应用界面，使用半透明磨砂玻璃效果、背景模糊和层次化透明面板，让专辑封面艺术透过玻璃层bleeding through，营造沉浸式的音乐体验，使用 TailwindCSS 实现。

### 核心视觉特征

**玻璃态设计语言**：
- 所有 UI 面板采用半透明磨砂玻璃效果：`backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- 多层玻璃叠加创造深度感：前景玻璃（控制面板） > 中景玻璃（播放列表） > 背景（专辑封面或渐变）
- 玻璃边缘采用细腻的高光边框：`border: 1px solid rgba(255,255,255,0.2)`
- 阴影使用柔和的发光效果而非传统投影：`box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- 背景专辑封面艺术动态模糊，颜色透过玻璃层透出

**玻璃质感色彩系统**：
- 背景层：动态从当前播放专辑封面提取主色调，应用模糊和渐变
- 玻璃面板：半透明白色 `rgba(255,255,255,0.1)` 到 `rgba(255,255,255,0.25)`
- 深色玻璃变体：`rgba(0,0,0,0.2)` 用于更好的可读性区域
- 强调色：纯白 `rgba(255,255,255,0.9)` 用于活跃状态
- 进度条和按钮使用专辑主色调的半透明版本

**光线与透明度效果**：
- 三层透明度系统：
  - 主控制面板：25% 不透明度
  - 播放列表面板：15% 不透明度
  - 悬浮工具提示：30% 不透明度
- 背景模糊：`backdrop-filter: blur(20px) saturate(180%)`
- 边缘高光模拟光线折射：
  ```css
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  ```

### 页面结构与组件

**音乐播放器布局**：
```
┌─────────────────────────────────────────────┐
│  [<] 正在播放 [♥] [⋯]                       │ ← 顶部玻璃栏
├─────────────────────────────────────────────┤
│                                               │
│        ┌─────────────────────┐               │
│        │                     │               │
│        │   🎵 专辑封面       │               │ ← 大型专辑封面（玻璃卡片）
│        │   (旋转动画)        │               │
│        │                     │               │
│        └─────────────────────┘               │
│                                               │
│     「Song Title」                            │ ← 歌曲信息（半透明文字）
│     「Artist Name」                           │
│                                               │
│  ┌───────────────────────────────────────┐   │
│  │ ━━━━━━━━●━━━━━━━━━━━━━━━━━━━━━━━━━━ │   │ ← 进度条（玻璃质感）
│  │ 2:34                          4:58   │   │
│  └───────────────────────────────────────┘   │
│                                               │
│     [🔀] [⏮] [▶️] [⏭] [🔁]                   │ ← 控制按钮（玻璃圆形）
│                                               │
│  ┌────────────┐                               │
│  │ 🔊 ━━━●━━━ │                               │ ← 音量控制（玻璃滑块）
│  └────────────┘                               │
│                                               │
│  ┌─────────────────────────────────────┐     │
│  │ 播放列表                            │     │ ← 播放列表（玻璃面板）
│  │ ┌─────────────────────────────────┐ │     │
│  │ │ 🎵 Song 1 - Artist    [3:45]    │ │     │
│  │ │ 🎵 Song 2 - Artist    [4:12]    │ │     │
│  │ │ 🎵 Song 3 - Artist    [2:58]    │ │     │
│  │ └─────────────────────────────────┘ │     │
│  └─────────────────────────────────────┘     │
└─────────────────────────────────────────────┘
```

**顶部玻璃导航栏**：
- 半透明玻璃条：`backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- 返回按钮、标题、收藏和菜单按钮均采用玻璃圆形或胶囊形状
- 悬停时玻璃按钮略微增亮：`background: rgba(255,255,255,0.2)`

**专辑封面展示区**：
- 大型正方形玻璃卡片（300x300px）
- 专辑封面图片带有微妙的玻璃边框和阴影
- 播放时专辑封面缓慢旋转（12 秒一圈）
- 悬停时专辑封面轻微放大（scale: 1.05）并增强玻璃光泽

**歌曲信息区**：
- 歌曲标题使用大号半透明白色文字（24px, font-weight: 700）
- 艺术家名称使用中号半透明灰色文字（16px, font-weight: 500）
- 文字带有轻微的阴影增强可读性：`text-shadow: 0 2px 8px rgba(0,0,0,0.3)`

**进度条（Progress Bar）**：
- 玻璃轨道：`background: rgba(255,255,255,0.15); backdrop-filter: blur(10px)`
- 已播放部分使用专辑主色调的半透明版本
- 滑块（thumb）采用玻璃圆形设计，带有白色高光
- 悬停时滑块放大并显示当前时间工具提示（玻璃气泡）

**控制按钮区**：
- 五个核心控制按钮（随机、上一首、播放/暂停、下一首、循环）
- 每个按钮采用玻璃圆形设计（直径 48px-64px）
- 播放/暂停按钮尺寸更大（64px），作为视觉焦点
- 悬停时按钮玻璃效果增强并轻微上浮
- 活跃状态（如循环模式开启）使用专辑主色调背景

**音量控制滑块**：
- 小型玻璃面板包含扬声器图标和水平滑块
- 滑块采用与进度条相同的玻璃质感
- 音量级别用柔和的发光效果表示

**播放列表面板**：
- 较大的玻璃矩形面板（更低的不透明度，15%）
- 每首歌曲采用小型玻璃行项目
- 当前播放歌曲高亮（更高不透明度，30%）
- 悬停时歌曲行略微增亮并显示更多控制按钮（喜欢、删除）

### 互动与动画效果

**玻璃发光动画**：
```css
/* 播放按钮的脉动发光效果 */
.glass-play-btn {
  animation: glass-pulse 2s ease-in-out infinite;
}

@keyframes glass-pulse {
  0%, 100% {
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.3),
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow:
      0 0 30px rgba(255, 255, 255, 0.5),
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 1px rgba(255, 255, 255, 0.4);
  }
}
```

**专辑封面旋转动画**：
```css
.album-cover-rotating {
  animation: rotate-album 12s linear infinite;
}

@keyframes rotate-album {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**悬停玻璃增强效果**：
- 玻璃面板悬停时：`backdrop-filter: blur(25px); background: rgba(255,255,255,0.2)`
- 过渡时间：`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- 按钮悬停时轻微上浮：`transform: translateY(-2px)`

**进度条拖动动画**：
- 拖动时滑块放大至 120%
- 显示玻璃工具提示气泡，显示当前时间位置
- 工具提示带有淡入淡出动画

**背景动态模糊**：
- 切换歌曲时背景颜色平滑过渡（3 秒）
- 使用专辑封面的主色调创建渐变背景
- 背景模糊强度根据播放状态动态调整

### 技术实现细节

**核心 CSS 样式**：
```css
/* 玻璃面板基础类 */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-panel:hover {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px) saturate(200%);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

/* 玻璃按钮 */
.glass-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow:
    0 6px 24px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
}

/* 玻璃进度条 */
.glass-progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.glass-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.8) 100%);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.glass-progress-thumb {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.glass-progress-thumb:hover {
  transform: scale(1.2);
}
```

**TailwindCSS 配置扩展**：
```javascript
// tailwind.config.js 中添加玻璃态效果
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        'glass': '20px',
        'glass-strong': '30px',
      },
      backgroundColor: {
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-white-hover': 'rgba(255, 255, 255, 0.2)',
        'glass-black': 'rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)',
      },
    }
  }
}
```

**响应式设计**：
- 桌面端（≥1024px）：播放列表在右侧玻璃面板
- 平板端（768px-1023px）：播放列表在底部折叠面板
- 移动端（<768px）：播放列表使用全屏玻璃模态框

**无障碍考量**：
- 所有玻璃元素保持足够的文字对比度（使用半透明深色背景增强可读性）
- 控制按钮提供 aria-label 描述功能
- 进度条支持键盘控制（左右箭头）
- 播放状态变化提供声音和视觉双重反馈

**性能优化**：
- `backdrop-filter` 使用 CSS `will-change` 优化
- 专辑封面旋转使用 CSS `transform` 而非 JavaScript
- 背景图片预加载，避免切换歌曲时闪烁
- 播放列表使用虚拟滚动（大型播放列表）

### 设计目标与用户体验

**沉浸式音乐体验**：
- 玻璃质感营造轻盈、通透的视觉氛围
- 专辑封面艺术透过玻璃层透出，增强视觉吸引力
- 柔和的模糊效果减少视觉干扰，让用户专注于音乐本身
- 半透明设计营造梦幻、空灵的听觉氛围

**品牌适配性**：
- 适合现代音乐流媒体应用（Spotify, Apple Music 风格）
- 适合高端音响设备的配套软件界面
- 适合追求优雅、简洁设计语言的品牌
- 通过玻璃质感传递科技感和现代感

---

## English Version (en-US)

Create a modern music application interface with **Glassmorphism Music Player** style, using frosted glass effects, background blur, and layered transparent panels, letting album cover art bleed through glass layers to create an immersive music experience, implemented with TailwindCSS.

### Core Visual Characteristics

**Glassmorphism Design Language**:
- All UI panels use frosted glass effect: `backdrop-filter: blur(20px); background: rgba(255,255,255,0.1)`
- Multi-layer glass stacking creates depth: foreground glass (control panel) > midground glass (playlist) > background (album cover or gradient)
- Glass edges use delicate highlight borders: `border: 1px solid rgba(255,255,255,0.2)`
- Shadows use soft glow effects instead of traditional drop shadows: `box-shadow: 0 8px 32px rgba(0,0,0,0.1)`
- Background album cover art dynamically blurs, colors show through glass layers

**Glass Texture Color System**:
- Background layer: dynamically extract primary colors from current playing album cover, apply blur and gradient
- Glass panels: semi-transparent white `rgba(255,255,255,0.1)` to `rgba(255,255,255,0.25)`
- Dark glass variant: `rgba(0,0,0,0.2)` for better readability areas
- Accent color: pure white `rgba(255,255,255,0.9)` for active states
- Progress bar and buttons use semi-transparent versions of album primary colors

**Light & Transparency Effects**:
- Three-layer transparency system:
  - Main control panel: 25% opacity
  - Playlist panel: 15% opacity
  - Floating tooltips: 30% opacity
- Background blur: `backdrop-filter: blur(20px) saturate(180%)`
- Edge highlights simulate light refraction:
  ```css
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  ```

[Rest of English version follows similar structure to Chinese version - comprehensive coverage of page structure, components, interactions, animations, technical implementation, responsive design, accessibility, performance optimization, and design goals]

### Technical Implementation Details

[Same CSS styles and Tailwind configuration as Chinese version]

### Design Goals & User Experience

**Immersive Music Experience**:
- Glass texture creates lightweight, transparent visual atmosphere
- Album cover art showing through glass layers enhances visual appeal
- Soft blur effects reduce visual distraction, letting users focus on music
- Semi-transparent design creates dreamy, ethereal listening atmosphere

**Brand Adaptability**:
- Suitable for modern music streaming apps (Spotify, Apple Music style)
- Suitable for high-end audio equipment companion software interfaces
- Suitable for brands pursuing elegant, minimalist design language
- Conveys technology and modernity through glass texture
