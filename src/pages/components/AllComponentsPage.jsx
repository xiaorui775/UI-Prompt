import { useMemo, useState, useCallback } from 'react';
import { ComponentCard } from '../../components/ui/ComponentCard';
import { SearchBar } from '../../components/ui/SearchBar';
import { FilterTabs } from '../../components/ui/FilterTabs';
import { useLanguage } from '../../hooks/useLanguage';
import { useRemoteCategories } from '../../hooks/useRemoteCategories';
import { applyTranslationsToCategories } from '../../utils/categoryHelper';
import { loadComponentCategories } from '../../data/components/loaders';
import { createI18nResolver } from '../../utils/i18n/resolveI18nValue';
import { SKELETON_COUNTS } from '../../utils/constants';
import { ListPageScaffold } from '../../components/scaffold';

/**
 * AllComponentsPage - 統一組件画廊页面
 * 合併所有 8 個組件分类,支持搜索和篩選,使用网格佈局
 *
 * 使用 ListPageScaffold 統一 UI 骨架
 */
export function AllComponentsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // 使用共享的數據加載 hook
  const {
    data: categories,
    isLoading,
    isError,
    retry: handleRetry
  } = useRemoteCategories(loadComponentCategories, {
    loggerName: 'AllComponentsPage'
  });

  // 獲取翻譯後的分类数据
  const translatedCategories = useMemo(() => {
    return applyTranslationsToCategories(categories, language);
  }, [language, categories]);

  // 所有組件列表 (扁平化) - 使用 _uniqueKey 避免 key 碰撞
  const allComponents = useMemo(() => {
    const resolveI18n = createI18nResolver(language, t);
    const counts = {};

    return translatedCategories.flatMap(cat =>
      cat.data.map(item => {
        const title = resolveI18n(item.title);
        const description = resolveI18n(item.description);
        const demoHTML = item.demoHTML || item.variants?.[0]?.demoHTML || '';
        const customStyles = item.customStyles || item.variants?.[0]?.customStyles || '';

        // 生成唯一 key（與 AllStylesPage 相同策略）
        const base = `${cat.id}-${item.id || 'noid'}`;
        const idx = counts[base] || 0;
        counts[base] = idx + 1;
        const uniqueKey = idx === 0 ? base : `${base}#${idx}`;

        return {
          ...item,
          title,
          description,
          demoHTML,
          customStyles,
          _categoryId: cat.id,
          _categoryKey: cat.key,
          _categoryIcon: cat.icon,
          _categoryLabel: t(`nav.${cat.key}`),
          _uniqueKey: uniqueKey
        };
      })
    );
  }, [translatedCategories, t, language]);

  // 篩選邏輯 (結合分类篩選和搜索)
  const filteredComponents = useMemo(() => {
    let components = allComponents;

    if (activeCategory !== 'all') {
      components = components.filter(c => c._categoryId === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      components = components.filter(
        comp =>
          comp.title?.toLowerCase().includes(query) ||
          comp.description?.toLowerCase().includes(query)
      );
    }

    return components;
  }, [allComponents, activeCategory, searchQuery]);

  // 是否有啟用篩選
  const hasActiveFilters = searchQuery || activeCategory !== 'all';

  // 處理分类點擊
  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  // 處理卡片中分类标籤點擊
  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 清除篩選
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveCategory('all');
  }, []);

  return (
    <ListPageScaffold
      title={t('common.components')}
      description={t('common.componentsDescription')}
      isLoading={isLoading}
      isError={isError}
      onRetry={handleRetry}
      toolbarSkeletonVariant="simple"
      renderToolbar={() => (
        <div className="mb-8 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('common.searchComponents')}
          />
          <FilterTabs
            categories={translatedCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      )}
      statsConfig={{
        isFiltered: hasActiveFilters,
        filteredCount: filteredComponents.length,
        totalCount: allComponents.length,
        filteredLabel: t('common.foundResultsComp', { count: filteredComponents.length }),
        totalLabel: t('common.showingAllComp', { count: filteredComponents.length }),
        showTotal: false
      }}
      isEmpty={filteredComponents.length === 0}
      onClearFilters={handleClearFilters}
      skeletonCount={SKELETON_COUNTS.COMPONENTS}
      skeletonColumns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      skeletonGap="gap-6"
    >
      {/* Component cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredComponents.map((component) => (
          <ComponentCard
            key={component._uniqueKey}
            id={component.id}
            title={component.title}
            description={component.description}
            demoHTML={component.demoHTML}
            customStyles={component.customStyles}
            categoryId={component._categoryId}
            categoryIcon={component._categoryIcon}
            categoryLabel={component._categoryLabel}
            variants={component.variants || []}
            onCategoryClick={handleCategoryClick}
          />
        ))}
      </div>
    </ListPageScaffold>
  );
}
