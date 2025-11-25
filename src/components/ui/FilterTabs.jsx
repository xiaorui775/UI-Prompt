import { useLanguage } from '../../hooks/useLanguage';

/**
 * FilterTabs - 分类筛选标签组件
 * 用于在 AllStylesPage 和 AllComponentsPage 中切换子分类
 */
export function FilterTabs({ categories, activeCategory, onCategoryChange }) {
  const { t } = useLanguage();

  return (
    <div className="relative w-full">
      {/* 水平滚动容器 */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="inline-flex gap-2 min-w-full pb-2">
          {/* "全部" 选项 */}
          <button
            onClick={() => onCategoryChange('all')}
            className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('common.all')} ({categories.reduce((sum, cat) => sum + cat.data.length, 0)})
          </button>

          {/* 分类标签 */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{t(`nav.${category.key}`)}</span>
              <span className={`text-xs ${activeCategory === category.id ? 'text-gray-300 dark:text-gray-600' : 'text-gray-400 dark:text-gray-500'}`}>
                ({category.data.length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 隐藏滚动条的样式 */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
