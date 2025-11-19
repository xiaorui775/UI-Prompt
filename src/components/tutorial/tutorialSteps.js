// 导览教学步骤定义
// 每个步骤包含：id, type, title, content, icon, color, gate, target 等配置

export const tutorialSteps = [
  // Step 0: 欢迎
  {
    id: 'welcome',
    type: 'modal',
    title: '欢迎使用 Layout Editor',
    content: '让我们花 2 分钟学习核心操作：从组件库拖放到画布 → 调整组件属性 → 生成与复制 AI Prompt → 导出保存配置。',
    buttonText: '开始学习 2 分钟',
    secondaryButtonText: '稍后再说',
    icon: 'Book',
    color: '#6B7280',
    colorLight: '#F9FAFB',
    gate: null,
    showSteps: true
  },

  // Step 1: 认识组件库
  {
    id: 'drag',
    type: 'card',
    target: '[data-guide="component-library"]',
    title: '从组件库拖放',
    content: '左侧是组件库，包含多种 UI 组件。选择任意一个组件，按住鼠标左键开始拖动。',
    hint: '💡 提示：也可以双击直接添加',
    buttonText: '我来试试',
    secondaryButtonText: '跳过',
    icon: 'Drag',
    color: '#3B82F6',
    colorLight: '#EFF6FF',
    gate: 'dragStart',
    timeout: 30000,
    demo: true
  },

  // Step 2: 放置到画布
  {
    id: 'drop',
    type: 'card',
    target: '[data-guide="canvas"]',
    title: '放置到画布',
    content: '将组件拖动到这个区域，松开鼠标完成放置。',
    hint: '⚡ 画布会自动显示组件边界框',
    buttonText: '继续',
    secondaryButtonText: '跳过',
    icon: 'Canvas',
    color: '#10B981',
    colorLight: '#ECFDF5',
    gate: 'dropped',
    timeout: 30000
  },

  // Step 3: 选择与图层
  {
    id: 'layer',
    type: 'card',
    target: '[data-guide="layer-panel"]',
    title: '图层管理',
    content: '点击画布上的组件可以选中它。在图层面板中可以：查看所有组件、调整层级顺序、删除不需要的组件。',
    hint: '💡 试试点击刚才添加的组件',
    buttonText: '已选中',
    secondaryButtonText: '跳过',
    icon: 'Layer',
    color: '#8B5CF6',
    colorLight: '#F5F3FF',
    gate: 'componentSelected',
    timeout: 20000
  },

  // Step 4: 调整属性
  {
    id: 'properties',
    type: 'card',
    target: '[data-guide="right-panel-properties"]',
    title: '调整属性',
    content: '在右侧属性面板中，你可以修改：尺寸（宽度/高度）、颜色（背景/边框）、间距（内边距/外边距）、其他样式属性。',
    hint: '💡 试试修改任意一个属性值',
    buttonText: '已修改',
    secondaryButtonText: '跳过',
    icon: 'Properties',
    color: '#F59E0B',
    colorLight: '#FFFBEB',
    gate: 'propChanged',
    timeout: 30000,
    isCoreEnd: true // 标记核心流程结束
  },

  // Step 5: 生成 Prompt
  {
    id: 'prompt',
    type: 'card',
    target: '[data-guide="prompt-panel"]',
    title: '生成 AI 提示词',
    content: '点击"生成提示词"按钮，系统会根据当前布局自动生成结构化的 AI Prompt，可直接用于：ChatGPT / Claude、Midjourney / Stable Diffusion、其他 AI 设计工具。',
    buttonText: '生成看看',
    secondaryButtonText: '跳过',
    icon: 'Prompt',
    color: '#EF4444',
    colorLight: '#FEF2F2',
    gate: 'promptGenerated',
    timeout: 15000
  },

  // Step 6: 复制使用
  {
    id: 'copy',
    type: 'card',
    target: '[data-guide="copy-prompt-button"]',
    title: '复制到剪贴板',
    content: '点击复制按钮，即可将提示词复制到剪贴板，然后：1. 打开 AI 工具（如 ChatGPT） 2. 粘贴提示词（Ctrl+V / ⌘+V） 3. 让 AI 帮你生成设计代码',
    buttonText: '复制',
    secondaryButtonText: '跳过',
    icon: 'Copy',
    color: '#10B981',
    colorLight: '#ECFDF5',
    gate: 'promptCopied',
    timeout: 15000
  },

  // Step 7: 导出配置
  {
    id: 'export',
    type: 'card',
    target: '[data-guide="export-button"]',
    title: '导出配置',
    content: '点击导出按钮，可以：保存当前布局配置（JSON）、导出为可分享的文件、稍后在其他项目中导入。',
    hint: '💡 配置会自动保存到本地存储',
    buttonText: '导出',
    secondaryButtonText: '完成',
    icon: 'Export',
    color: '#3B82F6',
    colorLight: '#EFF6FF',
    gate: 'exportOpened',
    timeout: 15000
  },

  // Step 8: 完成庆祝
  {
    id: 'complete',
    type: 'modal',
    title: '🎉 恭喜完成！',
    content: '你已经掌握了 Layout Editor 的所有核心功能，现在可以开始创作自己的设计了！',
    buttonText: '开始创作',
    secondaryButtonText: '再学一次',
    icon: 'Celebrate',
    color: '#10B981',
    colorLight: '#ECFDF5',
    gate: null,
    showCompleteList: true,
    completeList: [
      '拖放组件到画布',
      '选择与图层管理',
      '调整组件属性',
      '生成 AI Prompt',
      '复制到剪贴板',
      '导出配置文件'
    ]
  }
];

// 过渡步骤（核心流程结束后）
export const transitionStep = {
  id: 'transition',
  type: 'modal',
  title: '🎉 核心操作已掌握！',
  content: '接下来学习进阶功能：生成 AI Prompt、复制到剪贴板、导出配置文件。预计时间：1 分钟',
  buttonText: '继续学习',
  secondaryButtonText: '完成导览',
  icon: 'Celebrate',
  color: '#10B981',
  colorLight: '#ECFDF5',
  gate: null
};

// 步骤配置工具函数
export function getStepConfig(stepId) {
  return tutorialSteps.find(step => step.id === stepId);
}

export function getStepIndex(stepId) {
  return tutorialSteps.findIndex(step => step.id === stepId);
}

export function getCoreSteps() {
  return tutorialSteps.filter((step, index) => index >= 1 && index <= 4);
}

export function getAdvancedSteps() {
  return tutorialSteps.filter((step, index) => index >= 5 && index <= 7);
}

// 获取步骤总数（不含欢迎和完成）
export function getTotalSteps() {
  return tutorialSteps.length - 2; // 去掉 welcome 和 complete
}
