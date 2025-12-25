import { useState, useMemo, useCallback, memo, lazy, Suspense } from 'react';
const PromptDrawer = lazy(() =>
  import('../prompt/PromptDrawer').then(m => ({ default: m.PromptDrawer }))
);
const PreviewModal = lazy(() =>
  import('../preview/PreviewModal').then(m => ({ default: m.PreviewModal }))
);
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { useI18nText } from '../../hooks/useI18nText';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
import { containsJSX } from '../../utils/jsxCompiler';
import { getCategoryLabel } from '../../data/metadata/categoryMetadata';
import { useSharedIntersectionObserver } from '../../hooks/useSharedIntersectionObserver';
import { useLazyDemoContent } from '../../hooks/useLazyDemoContent';

// 🆕 子組件導入
import { IframeRenderer } from './IframeRenderer';
import { JSXCompiler } from './JSXCompiler';
import { StyleCardUI, StyleCardContainer } from './StyleCardUI';
import { DemoSkeleton, DemoPlaceholder } from './DemoSkeleton';

/**
 * StyleCard - 風格卡片主組件（重構版）
 *
 * 職責：
 * - 接收外部 props
 * - 數據準備和轉換（i18n, metadata）
 * - 狀態管理（模態框、延遲加載）
 * - 組合子組件（IframeRenderer, JSXCompiler, StyleCardUI）
 *
 * 已移除的職責（委派給子組件）：
 * - iframe 渲染邏輯 → IframeRenderer
 * - JSX 編譯邏輯 → JSXCompiler
 * - UI 展示邏輯 → StyleCardUI
 */
function StyleCardComponent({
  title,
  description,
  demoHTML,
  customStyles = '',
  fullPageHTML = '',
  fullPageStyles = '',
  fullPagePreviewId = '',
  demoBoxClass = 'bg-gray-50 dark:bg-gray-900',
  demoBoxStyle = '',
  tags = [],
  onTagClick,
  previews = [],
  colorScheme = null,
  variant = null,
  id = null,
  primaryCategory = null,
  layoutMode = 'centered',
  customPrompt = null,
  stylePrompt = null,
  demoJSX = null,
  renderMode = 'auto',
  // 🚀 新增：用於延遲載入 demo 內容
  categoryId = null,
  familyId = null,
  // 🚀 新增：虛擬化模式（禁用 lazy loading）
  _isVirtualized = false
}) {
  // ===== 狀態管理 =====
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { language, t } = useLanguage();

  // ===== 共享 IntersectionObserver: 延遲加載 =====
  // 使用共享 observer 減少記憶體使用（原本每個卡片一個 observer，現在全局共享一個）
  const cardRef = useSharedIntersectionObserver(() => {
    setIsVisible(true);
  });

  // ===== 🚀 延遲載入 Demo 內容 =====
  // 當卡片進入 viewport 且沒有初始 demoHTML 時，才載入 demo 內容
  const shouldLazyLoad = isVisible && !demoHTML && categoryId && familyId;
  const {
    demoHTML: lazyDemoHTML,
    customStyles: lazyCustomStyles,
    isLoading: isDemoLoading
  } = useLazyDemoContent(
    categoryId || primaryCategory,
    familyId,
    shouldLazyLoad
  );

  // 合併初始內容和延遲載入的內容
  const effectiveDemoHTML = demoHTML || lazyDemoHTML;
  const effectiveCustomStyles = customStyles || lazyCustomStyles;

  // ===== 國際化處理 =====
  const currentDemoHTML = getDemoHTML(effectiveDemoHTML, language);
  const resolveText = useI18nText();

  const displayTitle = resolveText(title);
  const displayDescription = resolveText(description);

  // ===== 判斷渲染模式（HTML or JSX） =====
  const shouldUseJSX = useMemo(() => {
    if (renderMode === 'html') return false;
    if (renderMode === 'jsx') return true;
    // auto 模式：優先使用 demoJSX，否則檢測 demoHTML 是否包含 JSX
    if (demoJSX) return true;
    return renderMode === 'auto' && currentDemoHTML && containsJSX(currentDemoHTML);
  }, [renderMode, demoJSX, currentDemoHTML]);

  // ===== 分類處理 =====
  const primaryCategoryLabel = useMemo(() => {
    if (!primaryCategory) return null;
    try {
      return getCategoryLabel(primaryCategory, language);
    } catch {
      return null;
    }
  }, [primaryCategory, language]);

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

  // ===== demoBoxStyle 解析 =====
  const parseStyleString = (str) => {
    if (!str || typeof str !== 'string') return {};
    const toCamel = (k) => (k.startsWith('--') ? k : k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()));
    return str
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .reduce((acc, decl) => {
        const idx = decl.indexOf(':');
        if (idx === -1) return acc;
        let key = decl.slice(0, idx).trim();
        let value = decl.slice(idx + 1).trim();
        if (!key) return acc;
        if (value.endsWith(';')) value = value.slice(0, -1).trim();
        key = toCamel(key);
        acc[key] = value;
        return acc;
      }, {});
  };

  const demoBoxInlineStyle = useMemo(() => parseStyleString(demoBoxStyle), [demoBoxStyle]);

  // ===== 事件處理 =====
  const handleGetPrompt = useCallback(() => {
    setShowPrompt(true);
  }, []);

  const handleClosePrompt = useCallback(() => {
    setShowPrompt(false);
  }, []);

  const handlePreview = useCallback(() => {
    // ⭐ ID 驗證保護
    if (!id || typeof id !== 'string' || id.length === 0) {
      setShowPreview(true);  // Fallback 到模態框預覽
      return;
    }

    // ⭐ 修復：避免模板 ID 缺少分類前綴導致路由 404，單模板時仍保留預覽索引
    const isSinglePreview = previews && previews.length === 1;
    const templatePreviewId = isSinglePreview ? (previews[0].templateId || previews[0].id) : null;
    const hasCategoryPrefix = templatePreviewId
      ? /^(core|visual|retro|layout|interaction)-/i.test(templatePreviewId)
      : false;

    let previewId = id;
    let query = '';

    if (isSinglePreview && templatePreviewId) {
      if (hasCategoryPrefix) {
        // 單一模板且已有分類前綴，直接使用
        previewId = templatePreviewId;
      } else {
        // 缺少分類前綴時改用 family id，並鎖定第一個預覽索引
        previewId = id;
        query = 'previewIndex=0';
      }
    }

    if (previewId) {
      const baseUrl = getStylePreviewUrl(previewId);
      const previewUrl = query ? `${baseUrl}?${query}` : baseUrl;
      // 直接開啟相對路徑，避免硬綁 origin；加上 noopener/noreferrer 避免 opener 風險
      window.open(previewUrl, '_blank', 'noopener,noreferrer');
    } else {
      setShowPreview(true);
    }
  }, [id, previews]);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  // ===== 渲染 Demo 區域（根據模式選擇子組件） =====
  const renderDemo = () => {
    // 🚀 延遲載入狀態處理
    // 1. 未進入 viewport：顯示佔位元素
    if (!isVisible) {
      return <DemoPlaceholder />;
    }

    // 2. 正在載入中（無初始內容且需要延遲載入）
    if (shouldLazyLoad && isDemoLoading) {
      return <DemoSkeleton />;
    }

    // 3. 載入完成但沒有內容
    if (!currentDemoHTML && !demoJSX) {
      return <DemoPlaceholder />;
    }

    // 4. 正常渲染 demo 內容
    const jsxSource = demoJSX || currentDemoHTML;

    if (shouldUseJSX) {
      return (
        <JSXCompiler
          jsxCode={jsxSource}
          customStyles={effectiveCustomStyles}
          id={id || displayTitle}
          isVisible={isVisible}
          demoBoxClass={demoBoxClass}
          demoBoxStyle={demoBoxInlineStyle}
        />
      );
    }

    return (
      <IframeRenderer
        demoHTML={currentDemoHTML}
        customStyles={effectiveCustomStyles}
        id={id || displayTitle}
        language={language}
        layoutMode={layoutMode}
        demoBoxClass={demoBoxClass}
        demoBoxStyle={demoBoxInlineStyle}
        isVisible={isVisible}
        allowInlineScripts={true}
      />
    );
  };

  // ===== 渲染 UI 區域 =====
  const renderUI = () => {
    return (
      <StyleCardUI
        title={displayTitle}
        description={displayDescription}
        primaryCategoryLabel={primaryCategoryLabel}
        templatesCount={previews?.length || 0}
        tags={tags}
        onTagClick={onTagClick}
        onGetPrompt={handleGetPrompt}
        onPreview={handlePreview}
        language={language}
        t={t}
      />
    );
  };

  // ===== 主渲染 =====
  return (
    <>
      <StyleCardContainer
        demoContent={renderDemo()}
        uiContent={renderUI()}
        cardRef={cardRef}
        templatesCount={previews?.length || 0}
      />

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

      {/* Preview 模態框 */}
      {showPreview && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/20 animate-pulse" />}>
          <PreviewModal
            isOpen={showPreview}
            onClose={handleClosePreview}
            title={displayTitle}
            description={displayDescription}
            htmlContent={demoHTML}
            customStyles={customStyles}
            fullPageHTML={fullPageHTML}
            fullPageStyles={fullPageStyles}
            fullPagePreviewId={fullPagePreviewId}
            previews={previews}
            colorScheme={colorScheme}
            variant={variant}
            stylePrompt={stylePrompt}
          />
        </Suspense>
      )}
    </>
  );
}

// Custom prop comparison for React.memo - optimized for critical render-affecting props
function arePropsEqual(prev, next) {
  // Quick identity check
  if (prev === next) return true;

  // Critical render-affecting props only (reduced from 18 to 6 for faster comparison)
  const criticalKeys = ['id', 'demoHTML', 'customStyles', 'title', 'description', 'renderMode'];
  for (const key of criticalKeys) {
    if (prev[key] !== next[key]) return false;
  }

  // Array length fast-fail checks
  if (prev.tags?.length !== next.tags?.length) return false;
  if (prev.previews?.length !== next.previews?.length) return false;

  // Function reference comparison
  if (prev.onTagClick !== next.onTagClick) return false;

  return true;
}

export const StyleCard = memo(StyleCardComponent, arePropsEqual);
