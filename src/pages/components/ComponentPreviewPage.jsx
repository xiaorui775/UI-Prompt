import { useMemo, useCallback } from 'react';
import { useLoaderData, useSearchParams, useNavigate, useParams } from 'react-router-dom';

import { useLanguage } from '../../hooks/useLanguage';
import { usePromptContent } from '../../hooks/usePromptContent';
import { useUnifiedPreviewPageState, PREVIEW_PAGE_MODES } from '../../hooks/useUnifiedPreviewPageState';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { CodeModal } from '../../components/ui/CodeModal';
import { PreviewPageHeader } from '../../components/preview/PreviewPageHeader';
import { LoadingOverlay } from '../../components/preview/LoadingOverlay';
import { promptGenerator } from '../../utils/prompt/PromptGeneratorFacade';
import { getCategoryNavKey } from '../../utils/componentHelper';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { createI18nResolver } from '../../utils/i18n/resolveI18nValue';

import {
  buildComponentPreviewHTML,
  buildComponentEmptyStateHTML,
  buildComponentLoadingHTML
} from '../../components/preview/utils/buildComponentPreviewHTML';
import { useAsyncComponentVariantLoader } from '../../components/preview/hooks/useAsyncComponentVariantLoader';

import { createLogger } from '../../utils/logger';

const logger = createLogger('ComponentPreviewPage');

/**
 * ComponentPreviewPage - 組件全頁預覽頁面
 *
 * 採用 StylePreviewPage 的 UI 模式：
 * - 全頁 iframe 預覽
 * - PreviewPageHeader 頂部工具欄
 * - PreviewSelector 下拉選單切換變體
 * - Edit Code / Open New Page / AI Prompt / Close 按鈕
 *
 * 使用 useUnifiedPreviewPageState hook 統一狀態管理
 *
 * 路由: /components/:category/:componentId (獨立頁面，不使用主 Layout)
 */
export function ComponentPreviewPage() {
  // ========== 1. Router hooks ==========
  const { component, preloadedVariant, preloadedVariantId } = useLoaderData();
  const { category, componentId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // ========== 2. Close handler (defined early for hook) ==========
  const handleClose = useCallback(() => {
    navigate('/components');
  }, [navigate]);

  // ========== 3. Transform variants to previews format ==========
  const previewsList = useMemo(() => {
    if (!component?.variants?.length) return [];
    return component.variants.map((variant, idx) => ({
      id: variant.id || `variant-${idx}`,
      name: variant.name || `Variant ${idx + 1}`,
      type: 'full'
    }));
  }, [component?.variants]);

  // ========== 4. Unified preview state hook ==========
  const {
    showPrompt,
    setShowPrompt,
    isLoading,
    setIsLoading,
    activeIndex,
    setActiveIndex,
    showCodeModal,
    setShowCodeModal,
    isFullPageMode
  } = useUnifiedPreviewPageState({
    mode: PREVIEW_PAGE_MODES.COMPONENT,
    itemId: `${category}/${componentId}`,
    itemsList: previewsList,
    searchParams,
    setSearchParams,
    onClose: handleClose,
    language
  });

  // ========== 5. Create i18n resolver ==========
  const resolveI18n = useMemo(
    () => createI18nResolver(language, t),
    [language, t]
  );

  // ========== 6. Process component data ==========
  const componentData = useMemo(() => {
    if (!component) return null;

    const categoryId = component.category || category;
    const navKey = getCategoryNavKey(categoryId);

    return {
      ...component,
      title: resolveI18n(component.title),
      description: resolveI18n(component.description),
      categoryId,
      categoryLabel: t(`nav.${navKey}`),
      variants: (component.variants || []).map(variant => ({
        ...variant,
        name: resolveI18n(variant.name),
        description: resolveI18n(variant.description)
      }))
    };
  }, [component, category, resolveI18n, t]);

  // ========== 7. Async variant loader (load only what we need) ==========
  const {
    variantData,
    currentVariantId,
    isLoadingVariant
  } = useAsyncComponentVariantLoader({
    category,
    componentId,
    variants: componentData?.variants || [],
    activeIndex,
    preloadedVariant,
    preloadedVariantId
  });

  // ========== 8. Current variant (merged meta + async content/prompts) ==========
  const currentVariantMeta = !componentData?.variants?.length
    ? null
    : componentData.variants[activeIndex] || componentData.variants[0];

  const currentVariant = useMemo(() => {
    if (!currentVariantMeta) return null;

    if (variantData?.variantId && currentVariantId === variantData.variantId) {
      return {
        ...currentVariantMeta,
        ...variantData
      };
    }

    return currentVariantMeta;
  }, [currentVariantMeta, variantData, currentVariantId]);

  const includeTailwindCdn = searchParams.get('tw') === '1';

  // ========== 9. Build preview HTML ==========
  const previewHTML = useMemo(() => {
    // Still loading the variant content: show loading iframe instead of empty state
    if (isLoadingVariant && !currentVariant?.demoHTML) {
      return buildComponentLoadingHTML({ language });
    }

    if (!currentVariant?.demoHTML) {
      return buildComponentEmptyStateHTML({
        displayTitle: componentData?.title || 'Component Preview',
        language
      });
    }

    return buildComponentPreviewHTML({
      demoHTML: currentVariant.demoHTML,
      customStyles: currentVariant.customStyles || '',
      displayTitle: `${componentData?.title} - ${currentVariant.name}`,
      language,
      includeTailwindCdn
    });
  }, [currentVariant, componentData?.title, language, includeTailwindCdn, isLoadingVariant]);

  // ========== 10. Generate prompt content ==========
  const promptContent = usePromptContent(
    () => {
      if (!currentVariant) return '';
      return promptGenerator.generateForVariant(
        currentVariant,
        componentId,
        category,
        language
      );
    },
    [currentVariant, componentId, category, language],
    { loggerName: 'ComponentPreviewPage' }
  );

  // ========== 11. Event handlers ==========
  const handleEditCode = useCallback(() => {
    setShowCodeModal(true);
  }, [setShowCodeModal]);

  const handleOpenFullPage = useCallback(() => {
    const currentUrl = window.location.href;
    const separator = currentUrl.includes('?') ? '&' : '?';
    window.open(`${currentUrl}${separator}full=1`, '_blank', 'noopener');
  }, []);

  // ========== 12. Not found state ==========
  if (!componentData) {
    return (
      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {t('ui.componentNotFound')}
          </h2>
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t('ui.backToGallery')}
          </button>
        </div>
      </div>
    );
  }

  // ========== 13. Render ==========
  return (
    <>
      <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
        {/* Header - hidden in full page mode */}
        {!isFullPageMode && (
          <PreviewPageHeader
            displayTitle={componentData.title}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            previewsList={previewsList}
            isReactPreview={false}
            isLoadingPreview={isLoading}
            setShowPrompt={setShowPrompt}
            onOpenFullPage={handleOpenFullPage}
            promptContent={promptContent}
            // Component-specific props
            isComponent={true}
            onEditCode={handleEditCode}
            onClose={handleClose}
            categoryLabel={componentData.categoryLabel}
          />
        )}

        {/* Preview iframe */}
        <div className="flex-1 overflow-auto custom-scrollbar relative">
          <LoadingOverlay isVisible={isLoading || isLoadingVariant} />

          <iframe
            key={`${componentId}:${activeIndex}`}
            title={`${componentData.title} - ${currentVariant?.name || 'Preview'}`}
            srcDoc={previewHTML}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              setIsLoading(false);
              logger.error('iframe error:', e);
            }}
            sandbox="allow-same-origin allow-scripts allow-forms"
          />
        </div>
      </div>

      {/* Prompt Drawer */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={`${componentData.title} - ${currentVariant?.name || ''}`}
        content={promptContent}
      />

      {/* Code Modal */}
      {currentVariant && (
        <CodeModal
          isOpen={showCodeModal}
          onClose={() => setShowCodeModal(false)}
          variant={currentVariant}
        />
      )}
    </>
  );
}

/**
 * ComponentPreviewPageWithErrorBoundary - Wrapped version with error boundary
 * Use this in routes for production stability
 */
export function ComponentPreviewPageWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <ComponentPreviewPage />
    </ErrorBoundary>
  );
}

export default ComponentPreviewPage;
