import { useMemo, useState, useCallback, useEffect } from 'react';
import { useLoaderData, useSearchParams, useNavigate, useParams } from 'react-router-dom';

import { useLanguage } from '../../hooks/useLanguage';
import { PromptDrawer } from '../../components/prompt/PromptDrawer';
import { CodeModal } from '../../components/ui/CodeModal';
import { PreviewPageHeader } from '../../components/preview/PreviewPageHeader';
import { LoadingOverlay } from '../../components/preview/LoadingOverlay';
import { promptGenerator } from '../../utils/prompt/PromptGeneratorFacade';

import {
  buildComponentPreviewHTML,
  buildComponentEmptyStateHTML
} from '../../components/preview/utils/buildComponentPreviewHTML';

/**
 * ComponentPreviewPage - 組件全頁預覽頁面
 *
 * 採用 StylePreviewPage 的 UI 模式：
 * - 全頁 iframe 預覽
 * - PreviewPageHeader 頂部工具欄
 * - PreviewSelector 下拉選單切換變體
 * - Edit Code / Open New Page / AI Prompt / Close 按鈕
 *
 * 路由: /components/:category/:componentId (獨立頁面，不使用主 Layout)
 */
export function ComponentPreviewPage() {
  // ========== 1. Router hooks ==========
  const { component } = useLoaderData();
  const { category, componentId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  // ========== 2. UI State ==========
  const [showPrompt, setShowPrompt] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ========== 3. Get active variant index from URL ==========
  const activeIndex = useMemo(() => {
    const idx = parseInt(searchParams.get('variantIndex') || '0', 10);
    const maxIdx = (component?.variants?.length || 1) - 1;
    return Math.max(0, Math.min(idx, maxIdx));
  }, [searchParams, component?.variants?.length]);

  // ========== 4. Resolve i18n values ==========
  const resolveI18n = useCallback((value) => {
    if (!value) return '';
    if (typeof value === 'object' && value !== null) {
      const resolved = value[language] || value['en-US'] || value['zh-CN'] || '';
      if (typeof resolved === 'string' && resolved.startsWith('data.')) {
        return t(resolved);
      }
      return resolved;
    }
    if (typeof value === 'string' && value.startsWith('data.')) {
      return t(value);
    }
    return value;
  }, [language, t]);

  // ========== 5. Process component data ==========
  const componentData = useMemo(() => {
    if (!component) return null;

    const categoryKeyMap = {
      navigation: 'navigation',
      dataDisplay: 'dataDisplay',
      feedback: 'feedback',
      advanced: 'advanced',
      input: 'inputEnhanced',
      interactive: 'interactive',
      special: 'specialViews',
      visualEffects: 'visualEffects'
    };

    const categoryId = component.category || category;
    const navKey = categoryKeyMap[categoryId] || categoryId;

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

  // ========== 6. Current variant ==========
  const currentVariant = useMemo(() => {
    if (!componentData?.variants?.length) return null;
    return componentData.variants[activeIndex] || componentData.variants[0];
  }, [componentData, activeIndex]);

  // ========== 7. Transform variants to previews format for PreviewSelector ==========
  const previewsList = useMemo(() => {
    if (!componentData?.variants?.length) return [];
    return componentData.variants.map((variant, idx) => ({
      id: variant.id || `variant-${idx}`,
      name: variant.name || `Variant ${idx + 1}`,
      type: 'full'
    }));
  }, [componentData?.variants]);

  // ========== 8. Build preview HTML ==========
  const previewHTML = useMemo(() => {
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
      language
    });
  }, [currentVariant, componentData?.title, language]);

  // ========== 9. Generate prompt content ==========
  const promptContent = useMemo(() => {
    if (!currentVariant) return '';
    return promptGenerator.generateForVariant(
      currentVariant,
      componentId,
      category,
      language
    );
  }, [currentVariant, componentId, category, language]);

  // ========== 10. Event handlers ==========
  const setActiveIndex = useCallback((idx) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (idx === 0) {
        newParams.delete('variantIndex');
      } else {
        newParams.set('variantIndex', String(idx));
      }
      return newParams;
    });
    setIsLoading(true);
  }, [setSearchParams]);

  const handleEditCode = useCallback(() => {
    setShowCodeModal(true);
  }, []);

  const handleClose = useCallback(() => {
    // Navigate back to components list
    navigate('/components');
  }, [navigate]);

  const handleOpenFullPage = useCallback(() => {
    const currentUrl = window.location.href;
    const separator = currentUrl.includes('?') ? '&' : '?';
    window.open(`${currentUrl}${separator}full=1`, '_blank', 'noopener');
  }, []);

  // ========== 11. ESC key handler ==========
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showPrompt) {
          setShowPrompt(false);
        } else if (showCodeModal) {
          setShowCodeModal(false);
        } else {
          handleClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPrompt, showCodeModal, handleClose]);

  // ========== 12. Check full page mode ==========
  const isFullPageMode = searchParams.get('full') === '1';

  // ========== 13. Not found state ==========
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

  // ========== 14. Render ==========
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
          <LoadingOverlay isVisible={isLoading} />

          <iframe
            key={`${componentId}:${activeIndex}`}
            title={`${componentData.title} - ${currentVariant?.name || 'Preview'}`}
            srcDoc={previewHTML}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
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

export default ComponentPreviewPage;
