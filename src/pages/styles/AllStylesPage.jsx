import { useMemo, useState, useCallback } from 'react';
import { StyleCard } from '../../components/ui/StyleCard';
import { MasonryContainer } from '../../components/ui/MasonryContainer';
import { VirtualMasonryVariable } from '../../components/ui/VirtualMasonryVariable';
import { FilterBar } from '../../components/filter/FilterBar';
import { useLanguage } from '../../hooks/useLanguage';
import { useRemoteCategories } from '../../hooks/useRemoteCategories';
import { applyFilters, applyTranslationsToCategories, getTagStatistics } from '../../utils/categoryHelper';
import { loadStyleMetadataOnly } from '../../data/components/loaders';
import { VIRTUAL_SCROLL_THRESHOLD, SKELETON_COUNTS } from '../../utils/constants';
import { ListPageScaffold } from '../../components/scaffold';


/**
 * AllStylesPage - 统一风格页面 (增強版)
 * 合并所有 9 个风格分类,支持多維度搜索和筛选
 *
 * 使用 ListPageScaffold 統一 UI 骨架
 */
export function AllStylesPage() {
  const { t, language } = useLanguage();

  // 使用共享的數據加載 hook
  const {
    data: categories,
    isLoading,
    isError,
    retry: handleRetry
  } = useRemoteCategories(loadStyleMetadataOnly, {
    loggerName: 'AllStylesPage'
  });

  // 篩選狀態
  const [filters, setFilters] = useState({
    keyword: '',
    categories: [],
    tags: [],
    matchMode: 'any'
  });

  // 獲取所有風格数据 (已增強 with 标籤 + 翻譯)
  const allStyles = useMemo(() => {
    const translatedCategories = applyTranslationsToCategories(categories, language);
    const items = translatedCategories.flatMap(cat =>
      cat.data.map(item => ({
        ...item,
        _categoryId: cat.id,
        _categoryKey: cat.key
      }))
    );
    // 生成稳定且唯一的 _uniqueKey："<catId>-<id>"，若重複則加序號
    const counts = {};
    return items.map((it) => {
      const base = `${it._categoryId}-${it.id || 'noid'}`;
      const idx = counts[base] || 0;
      counts[base] = idx + 1;
      const uniqueKey = idx === 0 ? base : `${base}#${idx}`;
      return { ...it, _uniqueKey: uniqueKey };
    });
  }, [language, categories]);

  // 應用篩選邏輯
  const filteredStyles = useMemo(() => {
    return applyFilters(allStyles, filters);
  }, [allStyles, filters]);

  // 標籤使用次數，供 FilterBar 隱藏未覆蓋的標籤
  const tagStats = useMemo(() => getTagStatistics(allStyles), [allStyles]);

  // 是否有啟用篩選
  const hasActiveFilters = filters.keyword || filters.categories.length > 0 || filters.tags.length > 0;

  // 處理篩選條件變化
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  // 清除篩選
  const handleClearFilters = useCallback(() => {
    setFilters({
      keyword: '',
      categories: [],
      tags: [],
      matchMode: 'any'
    });
  }, []);

  // 渲染 StyleCard
  const renderStyleCard = useCallback((style) => (
    <StyleCard
      key={style._uniqueKey}
      id={style.id}
      title={style.title}
      description={style.description}
      demoHTML={style.demoHTML}
      customStyles={style.customStyles}
      fullPageHTML={style.fullPageHTML}
      fullPageStyles={style.fullPageStyles}
      demoBoxClass={style.demoBoxClass}
      demoBoxStyle={style.demoBoxStyle}
      previews={style.previews}
      tags={style.tags}
      categories={style.categories}
      primaryCategory={style.primaryCategory}
      relatedStyles={style.relatedStyles}
      colorScheme={style.colorScheme}
      customPrompt={style.customPrompt}
      stylePrompt={style.stylePrompt}
      categoryId={style._categoryId || style.primaryCategory || style.category}
      familyId={style.familyId}
    />
  ), []);

  return (
    <ListPageScaffold
      className="styles-page"
      title={t('common.styles')}
      description={t('common.stylesDescription')}
      isLoading={isLoading}
      isError={isError}
      onRetry={handleRetry}
      toolbarSkeletonVariant="complex"
      renderToolbar={() => (
        <FilterBar
          onFilterChange={handleFilterChange}
          initialFilters={filters}
          showSearch={true}
          showCategories={true}
          showTags={true}
          tagStats={tagStats}
        />
      )}
      statsConfig={{
        isFiltered: hasActiveFilters,
        filteredCount: filteredStyles.length,
        totalCount: allStyles.length,
        filteredLabel: t('common.foundResults', { count: filteredStyles.length }),
        totalLabel: t('common.showingAll', { count: filteredStyles.length }),
        showTotal: filteredStyles.length > 0,
        totalLabelRight: t('common.totalStyles', { count: allStyles.length })
      }}
      isEmpty={filteredStyles.length === 0}
      onClearFilters={handleClearFilters}
      skeletonCount={SKELETON_COUNTS.STYLES}
      skeletonColumns="md:grid-cols-2 lg:grid-cols-3"
      skeletonGap="gap-8"
    >
      {/* Content: Virtual scroll for large lists, Masonry for small */}
      <div className="transition-opacity duration-300 ease-out">
        {filteredStyles.length > VIRTUAL_SCROLL_THRESHOLD ? (
          <VirtualMasonryVariable
            items={filteredStyles}
            itemHeight={400}
            gap={32}
            renderItem={renderStyleCard}
          />
        ) : (
          <MasonryContainer>
            {filteredStyles.map(renderStyleCard)}
          </MasonryContainer>
        )}
      </div>
    </ListPageScaffold>
  );
}
