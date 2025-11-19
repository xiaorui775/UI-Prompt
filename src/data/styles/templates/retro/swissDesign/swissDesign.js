// Swiss Design - Studio Template  
// 瑞士设计 - 工作室模板

import { swissDesignFullPageHTML, swissDesignFullPageStyles } from './swissDesignFullPage';

export const swissDesign = {
    id: 'retro-swiss-design',
    title: 'styles.retro.swissDesign.title',
    description: 'styles.retro.swissDesign.description',
    demoHTML: `
      <div class="space-y-3">
        <div class="w-20 h-1 bg-black"></div>
        <h4 class="text-2xl font-light tracking-tight">Helvetica</h4>
        <div class="grid grid-cols-12 gap-1">
          <div class="col-span-8 h-6 border border-black"></div>
          <div class="col-span-4 h-6 bg-black"></div>
        </div>
      </div>
    `,
    customStyles: '',
    demoBoxClass: 'bg-white border border-gray-200',
    fullPageHTML: swissDesignFullPageHTML,
    fullPageStyles: swissDesignFullPageStyles,
    colorScheme: {
      'zh-CN': '瑞士红 (#E30613)、纯黑 (#000000)、纯白 (#FFFFFF)、中性灰 (#808080)',
      'en-US': 'Swiss red (#E30613), pure black (#000000), pure white (#FFFFFF), neutral gray (#808080)'
    },

    // 模板级 customPrompt (简短 Prompt，100-300字)
    customPrompt: {
      'zh-CN': `核心理念：现代主义 + 网格系统 + 数学精确

设计要点：
1. 严格网格系统 — 12 列网格、24px 基础单位、黄金比例分割，所有元素对齐网格线
2. 无衬线字体 — Helvetica、Univers、Akzidenz-Grotesk，字号 48px-72px 标题，14px-16px 正文
3. 极简配色 — 纯黑 (#000000)、纯白 (#FFFFFF)、瑞士红 (#E30613) 作为唯一强调色
4. 非对称平衡 — 打破对称但保持视觉平衡，使用留白和负空间创建动态张力
5. 客观性排版 — 左对齐、紧密行距、letter-spacing: 0.05em，去除装饰传达清晰信息`,

      'en-US': `Core Concept: Modernism + Grid system + Mathematical precision

Design Points:
1. Strict grid system — 12-column grid, 24px base unit, golden ratio division, all elements aligned to grid lines
2. Sans-serif typography — Helvetica, Univers, Akzidenz-Grotesk, 48px-72px headlines, 14px-16px body text
3. Minimal color palette — Pure black (#000000), pure white (#FFFFFF), Swiss red (#E30613) as sole accent color
4. Asymmetric balance — Breaking symmetry while maintaining visual equilibrium, using whitespace and negative space to create dynamic tension
5. Objective typography — Left-aligned, tight line-height, letter-spacing: 0.05em, removing decoration for clear communication`
    },

    // 模板级 stylePrompt (详细 Prompt，1000-2000字 - 已包含完整内容，此处省略以节省空间)
    stylePrompt: {
      'zh-CN': `角色：你是专精于瑞士设计（Swiss Design）风格的 UI 设计师，专注于 1950 年代瑞士现代主义运动的理性美学。

场景定位：为企业网站、专业工作室或艺术画廊打造具有现代主义精神的界面，通过网格系统和无衬线字体传达清晰和秩序。

核心设计语言：严格网格系统、无衬线字体系统、极简配色、非对称平衡布局、客观性排版原则。

配色方案：纯黑 (#000000)、纯白 (#FFFFFF)、瑞士红 (#E30613)、中性灰 (#808080、#E0E0E0、#333333)。

技术实现要点：使用 CSS Grid、CSS 变量、避免圆角和阴影、限制阅读宽度 (600px)。

重要提示：所有元素对齐网格线、仅使用黑白灰+瑞士红、避免装饰、留白是设计的一部分、仅使用 Helvetica。`,

      'en-US': `Role: You are a UI designer specializing in Swiss Design style, focusing on the rational aesthetics of the 1950s Swiss modernist movement.

Core Design Language: Strict grid system, sans-serif typography, minimal color palette, asymmetric balance, objective typography.

Color Scheme: Pure black (#000000), pure white (#FFFFFF), Swiss red (#E30613), neutral grays.

Technical Implementation: CSS Grid, CSS variables, no border-radius, no box-shadow, max-width 600px.

Important Notes: Grid alignment, limited colors, functional design, whitespace, Helvetica only.`
    }
}
