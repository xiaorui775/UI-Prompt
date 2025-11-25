import { useState, useMemo, useEffect, useRef } from 'react';
import { PromptDrawer } from '../prompt/PromptDrawer';
import { PreviewModal } from '../preview/PreviewModal';
import { PromptGenerator } from '../../utils/promptGenerator';
import { useLanguage } from '../../hooks/useLanguage';
import { getDemoHTML } from "../../utils/i18n/demoI18n";
import { getStylePreviewUrl } from '../../utils/styleHelper';
import { LANGUAGES } from "../../utils/i18n/languageConstants";
import { containsJSX } from '../../utils/jsxCompiler';
import templateMetadata from '../../data/metadata/templateMetadata.json';
import { getCategoryLabel } from '../../data/metadata/categoryMetadata';

// 🆕 子組件導入
import { IframeRenderer } from './IframeRenderer';
import { JSXCompiler } from './JSXCompiler';
import { StyleCardUI, StyleCardContainer } from './StyleCardUI';

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
export function StyleCard({
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
  categories = [],
  layoutMode = 'centered',
  customPrompt = null,
  stylePrompt = null,
  demoJSX = null,
  renderMode = 'auto'
}) {
  // ===== 狀態管理 =====
  const [showPrompt, setShowPrompt] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const { language, t } = useLanguage();
  const cardRef = useRef(null);

  // ===== IntersectionObserver: 延遲加載 =====
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  // ===== 國際化處理 =====
  const currentDemoHTML = getDemoHTML(demoHTML, language);

  /**
   * 渲染文本：支持多種格式（i18n 對象、翻譯鍵、純文本）
   */
  const renderText = (value) => {
    let result = '';

    // i18n 對象格式
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      result = value[language];
      if (!result && language === LANGUAGES.ZH_CN) {
        result = value[LANGUAGES.ZH_CN_LOWER];
      } else if (!result && language === LANGUAGES.ZH_CN_LOWER) {
        result = value[LANGUAGES.ZH_CN];
      }
      if (!result) {
        result = value[LANGUAGES.ZH_CN] || value[LANGUAGES.ZH_CN_LOWER] || value[LANGUAGES.EN_US] || '';
      }
    }
    // raw: 前綴
    else if (typeof value === 'string' && value.toLowerCase().startsWith('raw:')) {
      result = value.slice(4);
    }
    // 包含中文字符
    else if (typeof value === 'string' && /[\u4e00-\u9fff]/.test(value)) {
      result = value;
    }
    // 翻譯鍵（包含點號）
    else if (typeof value === 'string' && value.includes('.')) {
      const translation = t(value);
      result = translation !== value ? translation : value;
    }
    // 其他情況
    else if (typeof value === 'string') {
      result = t(value);
    }

    return String(result || '');
  };

  const displayTitle = renderText(title);
  const displayDescription = renderText(description);

  // ===== 判斷渲染模式（HTML or JSX） =====
  const shouldUseJSX = useMemo(() => {
    if (renderMode === 'html') return false;
    if (renderMode === 'jsx') return true;
    // auto 模式：優先使用 demoJSX，否則檢測 demoHTML 是否包含 JSX
    if (demoJSX) return true;
    return renderMode === 'auto' && currentDemoHTML && containsJSX(currentDemoHTML);
  }, [renderMode, demoJSX, currentDemoHTML]);

  // ===== 元數據解析（NEW 徽章、更新時間） =====
  const metadata = useMemo(() => {
    if (!id || !templateMetadata?.templates) return null;

    // ���確匹配
    if (templateMetadata.templates[id]) {
      return templateMetadata.templates[id];
    }

    // 雙向模糊匹配
    const allKeys = Object.keys(templateMetadata.templates);
    const matchedKey = allKeys.find(key => {
      const keyLower = key.toLowerCase();
      const idLower = id.toLowerCase();
      return keyLower.includes(idLower) || idLower.includes(keyLower);
    });

    return matchedKey ? templateMetadata.templates[matchedKey] : null;
  }, [id]);

  const isNew = useMemo(() => {
    if (!metadata) return false;
    return metadata.isNew === true;
  }, [metadata]);

  const updatedAt = useMemo(() => {
    if (!metadata?.updatedAt) return null;
    try {
      const date = new Date(metadata.updatedAt);
      return date.toLocaleDateString(language === 'zh-CN' ? 'zh-CN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return null;
    }
  }, [metadata, language]);

  // ===== 分類處理 =====
  const primaryCategoryLabel = useMemo(() => {
    if (!primaryCategory) return null;
    try {
      return getCategoryLabel(primaryCategory, language);
    } catch {
      return null;
    }
  }, [primaryCategory, language]);

  const secondaryCategories = useMemo(() => {
    if (!categories || categories.length === 0) return [];
    return categories.filter((catId) => !!catId && catId !== primaryCategory);
  }, [categories, primaryCategory]);

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
  const handleGetPrompt = () => {
    setShowPrompt(true);
  };

  const handlePreview = () => {
    if (id) {
      const previewUrl = getStylePreviewUrl(id);
      const fullUrl = window.location.origin + previewUrl;
      window.open(fullUrl, '_blank');
    } else {
      console.warn('StyleCard: 缺少 id 屬性，使用模態框預覽');
      setShowPreview(true);
    }
  };

  // ===== 渲染 Demo 區域（根據模式選擇子組件） =====
  const renderDemo = () => {
    const jsxSource = demoJSX || currentDemoHTML;

    if (shouldUseJSX) {
      return (
        <JSXCompiler
          jsxCode={jsxSource}
          customStyles={customStyles}
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
        customStyles={customStyles}
        id={id || displayTitle}
        language={language}
        layoutMode={layoutMode}
        demoBoxClass={demoBoxClass}
        demoBoxStyle={demoBoxInlineStyle}
        isVisible={isVisible}
      />
    );
  };

  // ===== 渲染 UI 區域 =====
  const renderUI = () => {
    return (
      <StyleCardUI
        title={displayTitle}
        description={displayDescription}
        isNew={isNew}
        primaryCategoryLabel={primaryCategoryLabel}
        secondaryCategories={secondaryCategories}
        tags={tags}
        onTagClick={onTagClick}
        updatedAt={updatedAt}
        onGetPrompt={handleGetPrompt}
        onPreview={handlePreview}
        language={language}
        t={t}
        getCategoryLabel={getCategoryLabel}
      />
    );
  };

  // ===== 主渲染 =====
  return (
    <>
      <StyleCardContainer
        demoContent={renderDemo()}
        uiContent={renderUI()}
        isNew={isNew}
        t={t}
        cardRef={cardRef}
      />

      {/* Prompt 抽屜 */}
      <PromptDrawer
        isOpen={showPrompt}
        onClose={() => setShowPrompt(false)}
        title={displayTitle}
        content={promptContent}
      />

      {/* Preview 模態框 */}
      <PreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
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
    </>
  );
}
