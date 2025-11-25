import { useLanguage } from '../../hooks/useLanguage';
import { HandDrawnIcon } from '../icons/HandDrawnIcons';

/**
 * FeaturesSection - 功能特色区（Paper/Cutout 紙張剪貼風格）
 * 展示網站的 6 個核心功能
 * 使用手繪風格 SVG 圖標、便利貼卡片、CSS 伪元素图钉装饰
 */
export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: 'styles',         // 手繪九宮格圖標
      color: 'yellow',        // 便利貼顏色
      rotation: 'paper-rotate-1',  // 旋轉 -5deg
      pinColor: 'red',        // CSS 图钉顏色
      titleKey: 'styles',
      descKey: 'stylesDesc'
    },
    {
      icon: 'prompts',
      color: 'pink',
      rotation: 'paper-rotate-2',  // 旋轉 3deg
      pinColor: 'blue',
      titleKey: 'prompts',
      descKey: 'promptsDesc'
    },
    {
      icon: 'preview',
      color: 'blue',
      rotation: 'paper-rotate-3',  // 旋轉 -7deg
      pinColor: 'yellow',
      titleKey: 'preview',
      descKey: 'previewDesc'
    },
    {
      icon: 'copy',
      color: 'yellow',
      rotation: 'paper-rotate-4',  // 旋轉 4deg
      pinColor: 'green',
      titleKey: 'copy',
      descKey: 'copyDesc'
    },
    {
      icon: 'accessibility',
      color: 'pink',
      rotation: 'paper-rotate-5',  // 旋轉 -3deg
      pinColor: 'orange',
      titleKey: 'accessibility',
      descKey: 'accessibilityDesc'
    },
    {
      icon: 'responsive',
      color: 'blue',
      rotation: 'paper-rotate-6',  // 旋轉 6deg
      pinColor: 'purple',
      titleKey: 'responsive',
      descKey: 'responsiveDesc'
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* 背景紋理 - 模擬軟木板 */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.02) 2px, rgba(139, 69, 19, 0.02) 4px)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>

        {/* 功能卡片 - 便利貼風格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <article
              key={index}
              className={`
                paper-card-${feature.color}
                paper-pin-${feature.pinColor}
                ${feature.rotation}
                rounded-sm
                p-8 pt-12
                relative
                cursor-default
                group
              `}
              style={{
                minHeight: '280px'
              }}
            >
              {/* 手繪圖標 */}
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-200">
                <HandDrawnIcon
                  type={feature.icon}
                  size={72}
                  className="opacity-80"
                />
              </div>

              {/* 標題 */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
                {t(`home.features.${feature.titleKey}`)}
              </h3>

              {/* 描述 */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-sm">
                {t(`home.features.${feature.descKey}`)}
              </p>
            </article>
          ))}
        </div>

        {/* 底部註解（無 emoji）*/}
        <div className="mt-16 text-center">
          <p
            className="text-gray-500 dark:text-gray-400 text-sm paper-handwritten"
            style={{
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
              transform: 'rotate(-1deg)',
              display: 'inline-block'
            }}
          >
            {t('home.features.note') || '點擊卡片探索更多功能細節'}
          </p>
        </div>
      </div>
    </section>
  );
}
