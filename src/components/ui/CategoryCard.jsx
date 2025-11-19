import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

/**
 * CategoryCard - 首页分类卡片组件
 * 用于展示「风格」和「组件」两大分类
 */
export function CategoryCard({
  title,
  subtitle,
  count,
  icon,
  linkTo,
  gradient = 'from-gray-900 to-gray-800',
  categories = []
}) {
  const { t } = useLanguage();

  return (
    <Link
      to={linkTo}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
    >
      {/* 背景渐变层 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      {/* 内容区域 */}
      <div className="relative p-8">
        {/* 图标和标题 */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div>
            <h2 className="text-3xl font-light mb-1">{title}</h2>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <span className="text-2xl font-bold text-gray-900">{count}</span>
            <span className="text-sm text-gray-600">{t('common.items')}</span>
          </div>
        </div>

        {/* 子分类预览 */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((cat) => (
              <div
                key={cat.id}
                className="inline-flex items-center gap-1 bg-gray-50 rounded-lg px-3 py-1 text-xs text-gray-600"
              >
                <span>{cat.icon}</span>
                <span>{t(`nav.${cat.key}`)}</span>
                <span className="text-gray-400">({cat.count})</span>
              </div>
            ))}
            {categories.length > 6 && (
              <div className="inline-flex items-center bg-gray-50 rounded-lg px-3 py-1 text-xs text-gray-400">
                +{categories.length - 6} {t('common.more')}
              </div>
            )}
          </div>
        )}

        {/* 查看详情箭头 */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
          <span>{t('common.viewAll')}</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

      {/* 右下角装饰性图标 */}
      <div className="absolute bottom-0 right-0 text-[120px] opacity-5 transform translate-x-8 translate-y-8 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
    </Link>
  );
}
