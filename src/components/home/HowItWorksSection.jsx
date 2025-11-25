import { useLanguage } from '../../hooks/useLanguage';
import { HandDrawnArrow } from '../icons/HandDrawnIcons';

/**
 * HowItWorksSection - 使用流程區（Paper/Cutout 索引卡片風格）
 * 展示 4 步使用流程
 * 使用 CSS 伪元素徽章、索引卡片、纸夹装饰、手繪箭頭連接
 */
export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      color: 'blue',          // 索引卡片顏色
      badgeColor: 'orange',   // CSS 徽章顏色类名
      rotation: 2,            // 旋轉角度
      titleKey: 'step1Title',
      descKey: 'step1Desc'
    },
    {
      number: '02',
      color: 'kraft',
      badgeColor: 'yellow',
      rotation: -3,
      titleKey: 'step2Title',
      descKey: 'step2Desc'
    },
    {
      number: '03',
      color: 'blue',
      badgeColor: 'pink',
      rotation: 4,
      titleKey: 'step3Title',
      descKey: 'step3Desc'
    },
    {
      number: '04',
      color: 'kraft',
      badgeColor: 'green',
      rotation: -2,
      titleKey: 'step4Title',
      descKey: 'step4Desc'
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* 背景點綴 - 模擬桌面 */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(158, 158, 158, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 80%, rgba(158, 158, 158, 0.08) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4">
            {t('home.howItWorks.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t('home.howItWorks.subtitle')}
          </p>
        </div>

        {/* 步驟卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >
              {/* 索引卡片 */}
              <article
                className={`
                  paper-index-card
                  paper-lined-texture
                  paper-clip-top
                  rounded-sm
                  p-6 pt-14
                  w-full
                  relative
                  transition-all duration-220
                  hover:shadow-xl
                  ${step.color === 'kraft' ? 'paper-card-kraft' : 'paper-card-blue'}
                `}
                style={{
                  transform: `rotate(${step.rotation}deg)`,
                  minHeight: '240px',
                  transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* CSS 徽章編號 - 置於虛線標題欄內 */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`paper-badge paper-badge-${step.badgeColor}`}
                    style={{
                      transform: `rotate(${-step.rotation}deg)`  // 反向旋轉使徽章保持水平
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* 標題 */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center mt-2">
                  {t(`home.howItWorks.${step.titleKey}`)}
                </h3>

                {/* 描述 */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-sm">
                  {t(`home.howItWorks.${step.descKey}`)}
                </p>
              </article>

              {/* 手繪箭頭連接線 (桌面版，除了最後一個) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[120px] left-[calc(100%+8px)] w-[40px] items-center justify-center paper-arrow-container">
                  <HandDrawnArrow size={50} direction="right" />
                </div>
              )}

              {/* 移動端向下箭頭 */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4 paper-arrow-container">
                  <HandDrawnArrow size={40} direction="down" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 底部提示（無 emoji）*/}
        <div className="mt-16 text-center">
          <p
            className="text-gray-500 dark:text-gray-400 text-sm inline-block"
            style={{
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
              transform: 'rotate(1deg)',
              letterSpacing: '0.02em'
            }}
          >
            {t('home.howItWorks.note') || '只需四步，輕鬆生成專業 UI 設計'}
          </p>
        </div>
      </div>
    </section>
  );
}
