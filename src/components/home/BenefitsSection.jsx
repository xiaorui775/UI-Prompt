import { useLanguage } from '../../hooks/useLanguage';

/**
 * BenefitsSection - 核心优势区（交替对比列表设计）
 * 采用问题→解决方案的配对展示方式
 * 严格极简主义：无 emoji，无渐变，清晰的视觉引导
 */
export function BenefitsSection() {
  const { t } = useLanguage();

  // 配对的问题和解决方案
  const comparisons = [
    { problemKey: 'problem1', solutionKey: 'solution1' },
    { problemKey: 'problem2', solutionKey: 'solution2' },
    { problemKey: 'problem3', solutionKey: 'solution3' },
    { problemKey: 'problem4', solutionKey: 'solution4' }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            {t('home.benefits.title')}
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            {t('home.benefits.subtitle')}
          </p>
        </div>

        {/* 对比列表 */}
        <div className="space-y-6 mb-16">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6"
            >
              {/* 问题侧 */}
              <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-lg transition-colors duration-200 hover:border-gray-300">
                <p className="text-gray-600 font-light leading-relaxed">
                  {t(`home.benefits.${comparison.problemKey}`)}
                </p>
              </div>

              {/* 箭头 */}
              <div className="flex items-center justify-center md:px-4 py-2 md:py-0">
                <span className="text-3xl md:text-4xl text-gray-400 font-light transform md:transform-none rotate-90 md:rotate-0">
                  →
                </span>
              </div>

              {/* 解决方案侧 */}
              <div className="flex-1 bg-gray-900 border border-gray-800 p-6 text-white rounded-lg transition-colors duration-200 hover:border-gray-700">
                <p className="font-light leading-relaxed">
                  {t(`home.benefits.${comparison.solutionKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-200 mb-12"></div>

        {/* CTA 按钮 */}
        <div className="text-center">
          <a
            href="/styles"
            className="inline-block px-8 py-4 bg-black text-white font-light border-2 border-black rounded-lg transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            {t('home.benefits.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
