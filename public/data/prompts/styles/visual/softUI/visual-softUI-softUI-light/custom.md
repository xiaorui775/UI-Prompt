# Custom Prompt

## 中文版本 (zh-CN)


创建一个具有 **Soft UI Light（浅色软 UI）** 风格的现代应用界面，在浅色背景上使用柔和的内外阴影创造微妙的深度感，营造平静、舒适、亲和的视觉体验，使用 TailwindCSS 实现。

### 核心视觉特征

**浅色 Soft UI 设计语言**：
- 背景使用柔和的浅灰色 `#e4e7eb` 或浅蓝灰色 `#eceff4`
- 元素使用与背景相近的颜色，通过阴影创造深度
- 凸起元素（按钮、卡片）使用双向柔和阴影：
  - 左上浅色阴影（高光）：`box-shadow: -8px -8px 16px rgba(255, 255, 255, 0.8)`
  - 右下深色阴影（暗部）：`box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.3)`
- 凹陷元素（输入框、内容区）使用内阴影：
  - 内阴影：`box-shadow: inset 3px 3px 6px rgba(163, 177, 198, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.8)`
- 所有元素采用圆润的圆角（12px-20px），强调柔和触感

**浅色柔和色彩系统**：
- 主背景：浅灰 `#e4e7eb`
- 卡片背景：与背景相同或略浅 `#e8eaed`
- 凸起元素：与背景相同（通过阴影区分）
- 凹陷元素：略深于背景 `#d8dce3`
- 文字颜色：
  - 主文字：深灰 `#3c4043`
  - 次要文字：中灰 `#5f6368`
  - 禁用文字：浅灰 `#9aa0a6`
- 强调色：
  - 主要：柔和蓝色 `#4285f4`
  - 次要：柔和紫色 `#a142f4`
  - 成功：柔和绿色 `#34a853`
  - 警告：柔和橙色 `#fbbc04`
  - 危险：柔和红色 `#ea4335`

**阴影与深度系统**：
- 浅层凸起（小按钮）：阴影偏移 ±4px，模糊 8px
- 中层凸起（卡片）：阴影偏移 ±8px，模糊 16px
- 深层凸起（大卡片）：阴影偏移 ±12px，模糊 24px
- 浅层凹陷（输入框）：内阴影偏移 ±2px，模糊 4px
- 深层凹陷（内容区）：内阴影偏移 ±4px，模糊 8px

### 页面结构与组件

**浅色 Soft UI 应用布局**：
```
┌────────────────────────────────────────────────┐
│  [Logo] 首页 产品 服务 关于  [搜索] [登入]   │ ← 顶部栏（凸起）
├────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  ☀️ 早上好！                             │  │
│  │  开始您美好的一天                       │  │ ← Hero 卡片（凸起）
│  │  [开始探索] [了解更多]                   │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │ 🎯  │ │ 📊  │ │ 💡  │ │ 🚀  │             │
│  │ 任务│ │ 数据│ │ 创意│ │ 目标│             │ ← 功能卡片（凸起）
│  │ 12  │ │ 45  │ │ 8   │ │ 3   │             │
│  └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                 │
│  ┌────────────────────────────────────────┐    │
│  │ 设定面板                               │    │
│  │ ┌────────────────────────────────────┐ │    │ ← 内容区（凹陷）
│  │ │ 姓名：[Tom Leung ]                 │ │    │
│  │ │ 邮箱：[tom@example.com]            │ │    │
│  │ │ 通知：[开启切换器]                  │ │    │
│  │ │ [保存设定]（凸起按钮）              │ │    │
│  │ └────────────────────────────────────┘ │    │
│  └────────────────────────────────────────┘    │
└────────────────────────────────────────────────┘
```

**核心组件样式**：

**凸起按钮**：
```css
.soft-light-btn {
  background: #e4e7eb;
  border-radius: 12px;
  padding: 12px 24px;
  color: #3c4043;
  font-weight: 600;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.8),
    6px 6px 12px rgba(163, 177, 198, 0.3);
  transition: all 0.3s ease;
}

.soft-light-btn:hover {
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.9),
    8px 8px 16px rgba(163, 177, 198, 0.4);
}

.soft-light-btn:active {
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
}
```

**主要按钮（彩色）**：
```css
.soft-light-btn-primary {
  background: linear-gradient(135deg, #5a9bff 0%, #4285f4 100%);
  border-radius: 12px;
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  box-shadow:
    -4px -4px 8px rgba(90, 155, 255, 0.2),
    4px 4px 8px rgba(66, 133, 244, 0.4);
  transition: all 0.3s ease;
}

.soft-light-btn-primary:hover {
  box-shadow:
    -6px -6px 12px rgba(90, 155, 255, 0.3),
    6px 6px 12px rgba(66, 133, 244, 0.5);
  transform: translateY(-2px);
}
```

**凹陷输入框**：
```css
.soft-light-input {
  background: #e4e7eb;
  border-radius: 10px;
  padding: 12px 16px;
  border: none;
  color: #3c4043;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.soft-light-input:focus {
  outline: none;
  box-shadow:
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.9),
    0 0 0 3px rgba(66, 133, 244, 0.2);
}
```

**凸起卡片**：
```css
.soft-light-card {
  background: #e4e7eb;
  border-radius: 20px;
  padding: 24px;
  box-shadow:
    -8px -8px 16px rgba(255, 255, 255, 0.8),
    8px 8px 16px rgba(163, 177, 198, 0.3);
  transition: all 0.3s ease;
}

.soft-light-card:hover {
  box-shadow:
    -10px -10px 20px rgba(255, 255, 255, 0.9),
    10px 10px 20px rgba(163, 177, 198, 0.4);
  transform: translateY(-2px);
}
```

**开关切换器**：
```css
.soft-light-toggle {
  width: 60px;
  height: 32px;
  background: #e4e7eb;
  border-radius: 16px;
  position: relative;
  box-shadow:
    inset 3px 3px 6px rgba(163, 177, 198, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.soft-light-toggle.active {
  background: linear-gradient(135deg, #5a9bff, #4285f4);
  box-shadow:
    -2px -2px 4px rgba(90, 155, 255, 0.3),
    2px 2px 4px rgba(66, 133, 244, 0.4);
}

.soft-light-toggle-knob {
  width: 24px;
  height: 24px;
  background: #e4e7eb;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  box-shadow:
    -3px -3px 6px rgba(255, 255, 255, 0.8),
    3px 3px 6px rgba(163, 177, 198, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.soft-light-toggle.active .soft-light-toggle-knob {
  left: 32px;
  background: white;
}
```

### 互动与动画效果

**按压动画**：
- 凸起按钮点击时转为凹陷状态
- 过渡时间 150ms，使用 ease-out
- 释放时恢复凸起（300ms, ease-in）

**悬停效果**：
- 阴影强度增加 20%
- 卡片轻微上浮（translateY: -2px）
- 过渡平滑（300ms ease）

**脉动动画**：
```css
@keyframes soft-pulse {
  0%, 100% {
    box-shadow:
      -8px -8px 16px rgba(255, 255, 255, 0.8),
      8px 8px 16px rgba(163, 177, 198, 0.3);
  }
  50% {
    box-shadow:
      -10px -10px 20px rgba(255, 255, 255, 0.9),
      10px 10px 20px rgba(163, 177, 198, 0.4);
  }
}

.soft-light-pulse {
  animation: soft-pulse 2s ease-in-out infinite;
}
```

### 技术实现

**TailwindCSS 配置**：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-light-bg': '#e4e7eb',
        'soft-light-text': '#3c4043',
        'soft-light-text-secondary': '#5f6368',
        'soft-light-primary': '#4285f4',
        'soft-light-success': '#34a853',
        'soft-light-warning': '#fbbc04',
        'soft-light-danger': '#ea4335',
      },
      boxShadow: {
        'soft-light-raised': '-8px -8px 16px rgba(255, 255, 255, 0.8), 8px 8px 16px rgba(163, 177, 198, 0.3)',
        'soft-light-inset': 'inset 3px 3px 6px rgba(163, 177, 198, 0.3), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
      }
    }
  }
}
```

### 设计目标

**平静与舒适**：
- 浅色背景营造明亮、开放的视觉氛围
- 柔和阴影创造微妙的深度感，避免扁平单调
- 适合日间使用，减少眼睛疲劳
- 适合生产力应用、教育平台、健康应用、内容管理系统

---

## English Version (en-US)

Create a modern application interface with **Soft UI Light** style, using soft inner and outer shadows on light background to create subtle depth, creating a calm, comfortable, and approachable visual experience, implemented with TailwindCSS.

[Comprehensive English version follows similar structure covering core characteristics, component styles, interactions, animations, technical implementation, and design goals]

### Design Goals

**Calm & Comfortable**:
- Light background creates bright, open visual atmosphere
- Soft shadows create subtle depth, avoiding flat monotony
- Suitable for daytime use, reducing eye strain
- Suitable for productivity apps, education platforms, health apps, content management systems
