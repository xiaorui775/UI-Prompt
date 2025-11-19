import { useLanguage } from '../../hooks/useLanguage';

/**
 * HowItWorksSection - 使用流程区（Minimalism 设计）
 * 展示 4 步使用流程
 */
export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      titleKey: 'step1Title',
      descKey: 'step1Desc'
    },
    {
      number: '02',
      titleKey: 'step2Title',
      descKey: 'step2Desc'
    },
    {
      number: '03',
      titleKey: 'step3Title',
      descKey: 'step3Desc'
    },
    {
      number: '04',
      titleKey: 'step4Title',
      descKey: 'step4Desc'
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {t('home.howItWorks.title')}
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('home.howItWorks.subtitle')}
          </p>
        </div>

        {/* 步骤列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center group"
            >
              {/* 步骤编号 */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl font-light text-gray-400 transition-all duration-300 group-hover:border-gray-900 group-hover:text-gray-900">
                  {step.number}
                </div>

                {/* 连接线 (除了最后一个) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gray-300 -translate-y-1/2 ml-4">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r-2 border-t-2 border-gray-300"></div>
                  </div>
                )}
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {t(`home.howItWorks.${step.titleKey}`)}
              </h3>

              {/* 描述 */}
              <p className="text-gray-600 font-light leading-relaxed">
                {t(`home.howItWorks.${step.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
