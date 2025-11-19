// 手绘风格 SVG 图标（2px 描边）
// 用于导览教学系统

export const TutorialIcons = {
  // 拖放图标
  Drag: ({ color = '#3B82F6' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  ),

  // 画布图标
  Canvas: ({ color = '#10B981' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  ),

  // 图层图标
  Layer: ({ color = '#8B5CF6' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  // 属性图标
  Properties: ({ color = '#F59E0B' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1" />
    </svg>
  ),

  // Prompt 图标
  Prompt: ({ color = '#EF4444' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h4" />
    </svg>
  ),

  // 复制图标
  Copy: ({ color = '#10B981' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),

  // 导出图标
  Export: ({ color = '#3B82F6' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),

  // 书本图标（欢迎）
  Book: ({ color = '#6B7280' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),

  // 对勾图标（完成）
  Check: ({ color = '#10B981' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),

  // 时钟图标（超时提示）
  Clock: ({ color = '#F59E0B' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),

  // 灯泡图标（提示）
  Lightbulb: ({ color = '#F59E0B' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.54.73 2.98 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  ),

  // 闪电图标（快速提示）
  Zap: ({ color = '#F59E0B' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),

  // 鼠标指针图标
  MousePointer: ({ color = '#6B7280' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  ),

  // 帮助图标
  HelpCircle: ({ color = '#6B7280' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),

  // 庆祝图标
  Celebrate: ({ color = '#10B981' }) => (
    <svg viewBox="0 0 24 24" className="tutorial-svg-icon" style={{ stroke: color }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
};
