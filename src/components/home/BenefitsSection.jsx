import { useLanguage } from '../../hooks/useLanguage';

/**
 * BenefitsSection - 核心優勢區（Paper/Cutout 便利貼對比風格）
 * 採用問題→解決方案的配對展示方式
 * 使用 CSS 伪元素装饰（膠帶、圖釘）和状态图标（替代 emoji）
 */
export function BenefitsSection() {
  const { t } = useLanguage();

  // 配對的問題和解決方案，附帶顏色和裝飾配置
  const comparisons = [
    {
      problemKey: 'problem1',
      solutionKey: 'solution1',
      problemColor: 'yellow',
      solutionColor: 'kraft',
      problemRotation: -4,
      solutionRotation: 4,
      pinColor: 'red'
    },
    {
      problemKey: 'problem2',
      solutionKey: 'solution2',
      problemColor: 'pink',
      solutionColor: 'blue',
      problemRotation: 3,
      solutionRotation: -3,
      pinColor: 'blue'
    },
    {
      problemKey: 'problem3',
      solutionKey: 'solution3',
      problemColor: 'yellow',
      solutionColor: 'kraft',
      problemRotation: -5,
      solutionRotation: 5,
      pinColor: 'green'
    },
    {
      problemKey: 'problem4',
      solutionKey: 'solution4',
      problemColor: 'pink',
      solutionColor: 'blue',
      problemRotation: 4,
      solutionRotation: -4,
      pinColor: 'orange'
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* 背景裝飾 */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, rgba(236, 64, 122, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4">
            {t('home.benefits.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t('home.benefits.subtitle')}
          </p>
        </div>

        {/* 對比列表 - 便利貼風格 */}
        <div className="space-y-12 mb-16">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
            >
              {/* 問題側 - 淺色便利貼 + CSS 膠帶装饰 */}
              <article
                className={`
                  paper-problem-card
                  paper-card-${comparison.problemColor}
                  paper-tape-right
                  rounded-sm
                  p-6
                  relative
                  flex-1
                  max-w-md
                  group
                  cursor-default
                `}
                style={{
                  transform: `rotate(${comparison.problemRotation}deg)`,
                  minHeight: '140px'
                }}
              >
                <p className="status-error text-gray-800 dark:text-gray-200 leading-relaxed text-sm font-medium relative z-10">
                  {t(`home.benefits.${comparison.problemKey}`)}
                </p>
              </article>

              {/* 手繪箭頭 */}
              <div className="flex items-center justify-center px-2 md:px-4 paper-arrow-container">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform md:rotate-0 rotate-90"
                >
                  {/* 手繪箭頭主體 */}
                  <path
                    d="M8 20 Q20 18 32 20 T52 20"
                    stroke="#9E9E9E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* 箭頭尖端 */}
                  <path
                    d="M45 12 L54 20 L45 28"
                    stroke="#9E9E9E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* 解決方案側 - 牛皮紙或深色便利貼 + CSS 图钉装饰 */}
              <article
                className={`
                  paper-solution-card
                  paper-card-${comparison.solutionColor}
                  paper-pin-${comparison.pinColor}
                  rounded-sm
                  p-6 pt-10
                  relative
                  flex-1
                  max-w-md
                  group
                  cursor-default
                `}
                style={{
                  transform: `rotate(${comparison.solutionRotation}deg)`,
                  minHeight: '140px'
                }}
              >
                <p
                  className={`
                    status-success
                    leading-relaxed text-sm font-medium relative z-10
                    ${comparison.solutionColor === 'kraft' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-800 dark:text-gray-200'}
                  `}
                >
                  {t(`home.benefits.${comparison.solutionKey}`)}
                </p>
              </article>
            </div>
          ))}
        </div>

        {/* 手繪分隔線 */}
        <div className="mb-12 flex justify-center">
          <svg width="300" height="4" viewBox="0 0 300 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2 Q75 1 150 2 T300 2"
              stroke="#D1D5DB"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* CTA 按鈕 - 貼紙風格 */}
        <div className="text-center">
          <a
            href="/styles"
            className="inline-block px-10 py-5 rounded-full font-bold text-white text-lg relative overflow-hidden group transform transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)',
              border: '3px solid #F57C00',
              boxShadow: `
                0 6px 12px rgba(255, 152, 0, 0.4),
                0 3px 6px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.5),
                inset 0 -2px 0 rgba(0, 0, 0, 0.15)
              `,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* 高光效果 */}
            <span
              className="absolute top-0 left-0 w-full h-1/2 opacity-30"
              style={{
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent)'
              }}
            />

            {/* 按鈕文字 */}
            <span className="relative z-10">
              {t('home.benefits.cta')}
            </span>

            {/* 懸停光澤效果 */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent 70%)'
              }}
            />
          </a>
        </div>

        {/* 底部手寫註解（無 emoji）*/}
        <div className="mt-12 text-center">
          <p
            className="text-gray-500 dark:text-gray-400 text-sm inline-block"
            style={{
              fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
              transform: 'rotate(-1deg)',
              letterSpacing: '0.02em'
            }}
          >
            {t('home.benefits.note') || '立即體驗專業級 UI 設計工具'}
          </p>
        </div>
      </div>
    </section>
  );
}
