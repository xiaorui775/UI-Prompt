# Custom Prompt

## 中文版本 (zh-CN)


创建一个具有 **Soft UI Dark（深色软 UI）** 风格的现代应用界面，在深色背景上使用柔和的阴影和微妙的渐变创造轻盈的深度感，平衡暗色调与舒适性，营造优雅现代的深色模式体验，使用 TailwindCSS 实现。

### 核心视觉特征

**深色 Soft UI 设计语言**：
- 背景使用深蓝灰色 `#0f1419` 或深紫灰色 `#1a1625`，比纯黑更温和
- 元素采用柔和的外部阴影而非 Neumorphism 的双向阴影
- 卡片和组件使用微妙的渐变：`linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%)`
- 阴影颜色使用半透明黑色：`rgba(0, 0, 0, 0.3)` 到 `rgba(0, 0, 0, 0.5)`
- 元素边缘带有细微的高光边框：`border: 1px solid rgba(255, 255, 255, 0.05)`

**深色柔和色彩系统**：
- 主背景：深蓝灰 `#0f1419`
- 卡片背景：使用渐变 `linear-gradient(135deg, #2a2e3a, #1f232d)`
- 悬停状态：略浅的渐变 `linear-gradient(135deg, #353a48, #2a2e3a)`
- 文字颜色：
  - 主文字：柔和白色 `#e8eaed`
  - 次要文字：柔和灰色 `#9aa0a6`
  - 禁用文字：深灰色 `#5f6368`
- 强调色：
  - 主要：柔和蓝色 `#8ab4f8`
  - 次要：柔和紫色 `#c58af9`
  - 成功：柔和绿色 `#81c995`
  - 警告：柔和黄色 `#fdd663`
  - 危险：柔和红色 `#f28b82`

**阴影与深度系统**：
- 浅层阴影（悬停状态）：`0 2px 4px rgba(0, 0, 0, 0.2)`
- 中层阴影（卡片）：`0 4px 8px rgba(0, 0, 0, 0.3)`
- 深层阴影（模态框）：`0 8px 16px rgba(0, 0, 0, 0.4)`
- 超深阴影（浮动元素）：`0 12px 24px rgba(0, 0, 0, 0.5)`

### 页面结构与组件

**深色 Soft UI 仪表板布局**：
```
┌────────────────────────────────────────────────┐
│  [Logo] 仪表板 分析 报告  [搜索] [👤]        │ ← 顶部导航栏（渐变卡片）
├────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  🌙 晚上好！                             │  │
│  │  欢迎使用深色工作空间                   │  │ ← Hero 区域（渐变卡片）
│  │  [开始工作] [查看任务]                   │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐             │
│  │ 📊  │ │ 📈  │ │ 💰  │ │ 👥  │             │
│  │ 销售│ │ 增长│ │ 收益│ │ 用户│             │ ← 统计卡片（渐变 + 阴影）
│  │1.2K │ │+15% │ │$45K │ │ 892 │             │
│  └─────┘ └─────┘ └─────┘ └─────┘             │
│                                                 │
│  ┌─────────────────┐ ┌─────────────────────┐  │
│  │ 📊 活动趋势     │ │ 📋 待办事项          │  │
│  │ [折线图]        │ │ □ 完成报告           │  │ ← 内容卡片（渐变背景）
│  │                 │ │ □ 审核文件           │  │
│  │                 │ │ ☑ 团队会议           │  │
│  └─────────────────┘ └─────────────────────┘  │
└────────────────────────────────────────────────┘
```

**核心组件样式**：

**软 UI 按钮（深色）**：
```css
.soft-dark-btn {
  background: linear-gradient(135deg, #8ab4f8 0%, #669df6 100%);
  border-radius: 12px;
  padding: 12px 24px;
  color: #0f1419;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.soft-dark-btn:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}

.soft-dark-btn:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
}
```

**软 UI 卡片（深色）**：
```css
.soft-dark-card {
  background: linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.soft-dark-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}
```

**软 UI 输入框（深色）**：
```css
.soft-dark-input {
  background: #1a1d26;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 12px 16px;
  color: #e8eaed;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.soft-dark-input:focus {
  outline: none;
  border-color: #8ab4f8;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 0 3px rgba(138, 180, 248, 0.2);
}
```

**软 UI 开关（深色）**：
```css
.soft-dark-toggle {
  width: 52px;
  height: 28px;
  background: #1a1d26;
  border-radius: 14px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all 0.3s ease;
}

.soft-dark-toggle.active {
  background: linear-gradient(135deg, #8ab4f8, #669df6);
  box-shadow: 0 2px 4px rgba(138, 180, 248, 0.4);
}

.soft-dark-toggle-knob {
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #f1f3f4, #e8eaed);
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.soft-dark-toggle.active .soft-dark-toggle-knob {
  left: 27px;
}
```

### 互动与动画效果

**柔和悬停效果**：
- 卡片悬停时轻微上浮（translateY: -2px）
- 阴影强度增加 30%
- 边框高光增亮（border-color opacity +50%）
- 过渡时间：300ms ease

**渐变动画**：
```css
@keyframes soft-gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.soft-dark-gradient-animated {
  background: linear-gradient(270deg, #2a2e3a, #353a48, #2a2e3a);
  background-size: 400% 400%;
  animation: soft-gradient-shift 15s ease infinite;
}
```

**微互动细节**：
- 按钮点击时轻微缩放（scale: 0.98）
- 复选框勾选时带有弹性动画（cubic-bezier）
- 数字更新时使用滚动计数器效果
- Toast 通知从右侧滑入，带有柔和阴影

### 技术实现

**TailwindCSS 配置**：
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'soft-dark-bg': '#0f1419',
        'soft-dark-card': '#2a2e3a',
        'soft-dark-text': '#e8eaed',
        'soft-dark-text-secondary': '#9aa0a6',
        'soft-dark-primary': '#8ab4f8',
        'soft-dark-success': '#81c995',
        'soft-dark-warning': '#fdd663',
        'soft-dark-danger': '#f28b82',
      },
      boxShadow: {
        'soft-dark': '0 4px 8px rgba(0, 0, 0, 0.3)',
        'soft-dark-lg': '0 8px 16px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'soft-dark-gradient': 'linear-gradient(135deg, #2a2e3a 0%, #1f232d 100%)',
      }
    }
  }
}
```

### 设计目标

**优雅深色体验**：
- 深色背景降低眼睛疲劳，适合夜间使用
- 柔和阴影创造轻盈的深度感，避免过于沉重
- 微妙渐变增加视觉趣味性
- 适合现代应用、仪表板、内容平台的深色模式

---

## English Version (en-US)

Create a modern application interface with **Soft UI Dark** style, using soft shadows and subtle gradients on dark background to create lightweight depth, balancing dark tones with comfort, creating an elegant modern dark mode experience, implemented with TailwindCSS.

[Comprehensive English version follows similar structure covering core characteristics, component styles, interactions, animations, technical implementation, and design goals]

### Design Goals

**Elegant Dark Experience**:
- Dark background reduces eye strain, suitable for nighttime use
- Soft shadows create lightweight depth, avoiding heaviness
- Subtle gradients add visual interest
- Suitable for modern apps, dashboards, content platforms in dark mode
