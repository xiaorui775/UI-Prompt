import { useLanguage } from '../../hooks/useLanguage';

/**
 * FeaturesSection - 功能特色区（严格极简主义设计）
 * 展示网站的 6 个核心功能
 * 使用纯 CSS 几何图形，无 emoji，无过度动画
 */
export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      shape: 'grid',      // 3x3 网格代表多种风格
      titleKey: 'styles',
      descKey: 'stylesDesc'
    },
    {
      shape: 'lines',     // 横线代表文档/Prompt
      titleKey: 'prompts',
      descKey: 'promptsDesc'
    },
    {
      shape: 'circle',    // 圆圈代表预览
      titleKey: 'preview',
      descKey: 'previewDesc'
    },
    {
      shape: 'squares',   // 重叠正方形代表复制
      titleKey: 'copy',
      descKey: 'copyDesc'
    },
    {
      shape: 'check',     // 对勾代表可访问性
      titleKey: 'accessibility',
      descKey: 'accessibilityDesc'
    },
    {
      shape: 'layers',    // 多层矩形代表响应式
      titleKey: 'responsive',
      descKey: 'responsiveDesc'
    }
  ];

  // 渲染几何图形
  const renderShape = (shape) => {
    const baseClasses = "w-16 h-16 mx-auto mb-6";

    switch(shape) {
      case 'grid':
        // 3x3 网格
        return (
          <div className={`${baseClasses} grid grid-cols-3 gap-1`}>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-gray-400"></div>
            ))}
          </div>
        );

      case 'lines':
        // 三条横线
        return (
          <div className={`${baseClasses} flex flex-col justify-center gap-2`}>
            <div className="h-0.5 bg-gray-400"></div>
            <div className="h-0.5 bg-gray-400"></div>
            <div className="h-0.5 bg-gray-400"></div>
          </div>
        );

      case 'circle':
        // 空心圆圈
        return (
          <div className={`${baseClasses} rounded-full border-2 border-gray-400`}></div>
        );

      case 'squares':
        // 两个重叠的正方形
        return (
          <div className={`${baseClasses} relative`}>
            <div className="absolute top-0 left-0 w-12 h-12 border-2 border-gray-400"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-2 border-gray-400"></div>
          </div>
        );

      case 'check':
        // 圆圈+对勾
        return (
          <div className={`${baseClasses} rounded-full border-2 border-gray-400 flex items-center justify-center`}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" className="stroke-gray-400"/>
            </svg>
          </div>
        );

      case 'layers':
        // 多层矩形（大中小）
        return (
          <div className={`${baseClasses} flex items-center justify-center gap-1`}>
            <div className="w-3 h-12 border border-gray-400"></div>
            <div className="w-4 h-10 border border-gray-400"></div>
            <div className="w-5 h-8 border border-gray-400"></div>
          </div>
        );

      default:
        return <div className={`${baseClasses} border-2 border-gray-400`}></div>;
    }
  };

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>

        {/* 功能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 p-8 transition-colors duration-200 hover:border-gray-900"
            >
              {/* 几何图形 */}
              {renderShape(feature.shape)}

              {/* 标题 */}
              <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">
                {t(`home.features.${feature.titleKey}`)}
              </h3>

              {/* 描述 */}
              <p className="text-gray-600 font-light leading-relaxed text-center">
                {t(`home.features.${feature.descKey}`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
