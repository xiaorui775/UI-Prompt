import React from 'react';
import { StyleCard } from '../../components/ui/StyleCard';
import { useLanguage } from '../../hooks/useLanguage';
import { layoutTemplateStyles } from '../../data/styles/templates/layout';

/**
 * 布局样式展示页面
 * 包含 3 个布局样式：打破网格、分屏布局、瀑布流
 */
export function LayoutsPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {t('nav.layouts')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          探索各种布局系统，从传统的网格到创新的排列方式，为您的设计提供灵感。
        </p>
      </div>

      {/* 布局样式网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {layoutTemplateStyles.map((style) => (
          <StyleCard
            key={style.id}
            title={t(`styles.${style.id}.title`) || style.title}
            description={t(`styles.${style.id}.description`) || style.description}
            demoHTML={style.demoHTML}
            customStyles={style.customStyles}
            fullPageHTML={style.fullPageHTML}
            fullPageStyles={style.fullPageStyles}
            demoBoxClass={style.demoBoxClass}
            layoutMode={style.layoutMode}
            colorScheme={style.colorScheme}
            tags={style.tags || []}
            onTagClick={(tagId) => {
              // TODO: Implement tag filtering
              void tagId;
            }}
          />
        ))}
      </div>

      {/* 布局说明 */}
      <div className="mt-16 text-center space-y-4 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900">布局设计原则</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">网格系统</h3>
            <p className="text-gray-600 text-sm">使用 CSS Grid 或 Flexbox 创建结构化布局，确保内容的对齐和比例。</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">响应式设计</h3>
            <p className="text-gray-600 text-sm">适配不同屏幕尺寸，在移动端和桌面端都能提供优秀的用户体验。</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">视觉层次</h3>
            <p className="text-gray-600 text-sm">通过布局创建清晰的信息层次，引导用户的注意力流向。</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">空白运用</h3>
            <p className="text-gray-600 text-sm">合理使用空白空间，让布局呼吸感更强，提升可读性。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
