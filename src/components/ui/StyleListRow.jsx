import { useState, useMemo, useCallback, memo, lazy, Suspense } from 'react';
import { Layers, Layout, Box, Eye, Sparkles, FileCode } from 'lucide-react';
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { useI18nText } from '../../hooks/useI18nText';
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { getCategoryLabel, getTagLabel } from '../../data/metadata/categoryMetadata';

const PromptDrawer = lazy(() =>
  import('../prompt/PromptDrawer').then(m => ({ default: m.PromptDrawer }))
);

/**
 * StyleListRow - 風格列表行組件
 *
 * 設計參考歐尼醬提供的 TemplateRow 設計
 * 適配現有的 StyleCard 數據結構
 */
function StyleListRowComponent({
  title,
  description,
  demoHTML,
  customStyles = '', // eslint-disable-line no-unused-vars
  fullPageHTML = '',
  demoBoxClass = 'bg-gray-50 dark:bg-gray-900', // eslint-disable-line no-unused-vars
  tags = [],
  onTagClick,
  previews = [],
  id = null,
  primaryCategory = null,
  customPrompt = null,
  stylePrompt = null,
  categoryId = null,
  familyId = null // eslint-disable-line no-unused-vars
}) {
  const [showPrompt, setShowPrompt] = useState(false);
  const { language, t } = useLanguage();
  const resolveText = useI18nText();

  const displayTitle = resolveText(title);
  const displayDescription = resolveText(description);

  // ===== 分類處理 =====
  const primaryCategoryLabel = useMemo(() => {
    if (!primaryCategory) return null;
    try {
      return getCategoryLabel(primaryCategory, language);
    } catch {
      return null;
    }
  }, [primaryCategory, language]);

  // ===== 分類圖標映射 =====
  const CategoryIcon = useMemo(() => {
    const categoryIconMap = {
      core: Layers,
      visual: Eye,
      retro: Box,
      layout: Layout,
      interaction: Sparkles
    };
    return categoryIconMap[primaryCategory] || categoryIconMap[categoryId] || Layers;
  }, [primaryCategory, categoryId]);

  // ===== Prompt 生成 =====
  const styleObject = useMemo(() => ({
    title: displayTitle,
    description: displayDescription,
    customPrompt,
    stylePrompt,
    demoHTML,
    fullPageHTML
  }), [displayTitle, displayDescription, customPrompt, stylePrompt, demoHTML, fullPageHTML]);

  const promptContent = useMemo(() => {
    return PromptGenerator.generate(
      styleObject,
      { mode: 'card' },
      language
    );
  }, [styleObject, language]);

  // ===== 事件處理 =====
  const handleGetPrompt = useCallback(() => {
    setShowPrompt(true);
  }, []);

  const handleClosePrompt = useCallback(() => {
    setShowPrompt(false);
  }, []);

  const handlePreview = useCallback(() => {
    if (!id || typeof id !== 'string' || id.length === 0) {
      console.error('[StyleListRow] Invalid id:', id);
      return;
    }

    const isSinglePreview = previews && previews.length === 1;
    const templatePreviewId = isSinglePreview ? (previews[0].templateId || previews[0].id) : null;
    const hasCategoryPrefix = templatePreviewId
      ? /^(core|visual|retro|layout|interaction)-/i.test(templatePreviewId)
      : false;

    let previewId = id;
    let query = '';

    if (isSinglePreview && templatePreviewId) {
      if (hasCategoryPrefix) {
        previewId = templatePreviewId;
      } else {
        previewId = id;
        query = 'previewIndex=0';
      }
    }

    if (previewId) {
      const baseUrl = getStylePreviewUrl(previewId);
      const previewUrl = query ? `${baseUrl}?${query}` : baseUrl;
      const fullUrl = window.location.origin + previewUrl;
      window.open(fullUrl, '_blank');
    }
  }, [id, previews]);

  const templatesCount = previews?.length || 0;

  return (
    <>
      <div className="group relative flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50 hover:border-indigo-200 dark:hover:border-indigo-900/50 w-full">

        {/* Visual Decorator Line (Left accent) */}
        <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main Content Section */}
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Category Badge */}
            {primaryCategoryLabel && (
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 px-2 py-0.5 rounded-full shrink-0">
                <CategoryIcon size={10} className="stroke-[2.5]" />
                {primaryCategoryLabel}
              </span>
            )}

            {/* Title */}
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
              {displayTitle}
            </h3>

            {/* Template Count Badge */}
            {templatesCount > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
                <FileCode size={10} />
                {templatesCount} {templatesCount === 1 ? 'Template' : 'Templates'}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-1 pr-4">
            {displayDescription}
          </p>

          {/* Tags Row */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-zinc-500 dark:text-zinc-500 border border-zinc-100 dark:border-zinc-800 px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900/50 group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-colors cursor-default"
                  onClick={() => onTagClick?.(tag)}
                  role={onTagClick ? 'button' : undefined}
                  tabIndex={onTagClick ? 0 : undefined}
                >
                  {getTagLabel(tag, language)}
                </span>
              ))}
              {tags.length > 5 && (
                <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                  +{tags.length - 5}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 md:pl-4 md:border-l shrink-0">
          <button
            onClick={handlePreview}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            <Eye size={14} />
            <span>{t('buttons.preview')}</span>
          </button>

          <button
            onClick={handleGetPrompt}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 group/btn whitespace-nowrap"
          >
            <Sparkles size={14} className="text-zinc-400 group-hover/btn:text-yellow-500 transition-colors" />
            <span className="hidden sm:inline">{t('buttons.prompt')}</span>
            <span className="sm:hidden">AI</span>
          </button>
        </div>
      </div>

      {/* Prompt 抽屜 */}
      {showPrompt && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/20 animate-pulse" />}>
          <PromptDrawer
            isOpen={showPrompt}
            onClose={handleClosePrompt}
            title={displayTitle}
            content={promptContent}
          />
        </Suspense>
      )}
    </>
  );
}

// Custom prop comparison for React.memo
function arePropsEqual(prev, next) {
  if (prev === next) return true;

  const criticalKeys = ['id', 'title', 'description', 'primaryCategory'];
  for (const key of criticalKeys) {
    if (prev[key] !== next[key]) return false;
  }

  if (prev.tags?.length !== next.tags?.length) return false;
  if (prev.previews?.length !== next.previews?.length) return false;

  return true;
}

export const StyleListRow = memo(StyleListRowComponent, arePropsEqual);
