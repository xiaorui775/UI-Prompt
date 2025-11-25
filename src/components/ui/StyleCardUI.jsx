import { PromptButton } from '../prompt/PromptButton';
import { PreviewButton } from '../preview/PreviewButton';
import { TagGroup, CategoryBadge } from './TagChip';

/**
 * StyleCardUI - 純 UI 展示組件
 *
 * 職責：
 * - 渲染卡片的所有 UI 元素
 * - 無業務邏輯，所有數據從 props 接收
 * - 無狀態管理，僅處理用戶交互事件
 *
 * @param {Object} props
 * @param {string} props.title - 必需：標題
 * @param {string} props.description - 必需：描述
 * @param {boolean} props.isNew - 可選：是否顯示 NEW 徽章
 * @param {string} props.primaryCategoryLabel - 可選：主分類標籤文本
 * @param {Array} props.secondaryCategories - 可選：次級分類 ID 數組
 * @param {Array} props.tags - 可選：標籤數組
 * @param {function} props.onTagClick - 可選：標籤點擊處理函數
 * @param {string} props.updatedAt - 可選：格式化後的更新時間
 * @param {function} props.onGetPrompt - 必需：Get Prompt 按鈕點擊處理
 * @param {function} props.onPreview - 必需：Preview 按鈕點擊處理
 * @param {string} props.language - 必需：當前語言（zh-CN | en-US）
 * @param {function} props.t - 必需：翻譯函數
 * @param {function} props.getCategoryLabel - 必需：獲取分類標籤的函數
 */
export function StyleCardUI({
  title,
  description,
  isNew = false,
  primaryCategoryLabel = null,
  secondaryCategories = [],
  tags = [],
  onTagClick,
  updatedAt = null,
  onGetPrompt,
  onPreview,
  language,
  t,
  getCategoryLabel
}) {
  return (
    <div className="p-6">
      {/* 標題和分類徽章 */}
      <div className="flex flex-col gap-2 mb-2">
        {/* 分類徽章行 */}
        {(primaryCategoryLabel || (secondaryCategories && secondaryCategories.length > 0)) && (
          <div className="flex flex-wrap items-center gap-2">
            {/* 主分類徽章 */}
            {primaryCategoryLabel && (
              <CategoryBadge
                label={primaryCategoryLabel}
                primary={true}
              />
            )}
            {/* 次級分類徽章 */}
            {secondaryCategories.map((catId) => (
              <CategoryBadge
                key={catId}
                label={getCategoryLabel(catId, language)}
                primary={false}
              />
            ))}
          </div>
        )}

        {/* 標題 */}
        <h3 className="text-xl font-semibold flex-1 text-black dark:text-white">{title}</h3>
      </div>

      {/* 描述 */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>

      {/* 標籤組 */}
      {tags && tags.length > 0 && (
        <div className="mb-4">
          <TagGroup
            tags={tags}
            language={language}
            size="sm"
            clickable={!!onTagClick}
            onTagClick={onTagClick}
            maxDisplay={4}
          />
        </div>
      )}

      {/* 最近更新時間 */}
      {updatedAt && (
        <div className="mb-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t('common.lastUpdated') || 'Last Updated'}: {updatedAt}
          </p>
        </div>
      )}

      {/* 按鈕組 - 底部統一列 */}
      <div className="flex items-center justify-center gap-2">
        <PromptButton onClick={onGetPrompt} />
        <div className="flex gap-1">
          <PreviewButton onClick={onPreview} />
        </div>
      </div>
    </div>
  );
}

/**
 * StyleCardContainer - 卡片容器組件
 *
 * 職責：
 * - 提供卡片外層容器
 * - 處理 NEW 徽章的絕對定位
 * - 包含 demo 區域和內容區域
 *
 * @param {Object} props
 * @param {React.ReactNode} props.demoContent - 必需：demo 區域內容（IframeRenderer 或 JSXCompiler）
 * @param {React.ReactNode} props.uiContent - 必需：UI 內容（StyleCardUI）
 * @param {boolean} props.isNew - 可選：是否顯示 NEW 徽章
 * @param {function} props.t - 必需：翻譯函數
 * @param {React.Ref} props.cardRef - 可選：卡片容器的 ref
 */
export function StyleCardContainer({
  demoContent,
  uiContent,
  isNew = false,
  t,
  cardRef
}) {
  return (
    <div ref={cardRef} className="minimal-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative shadow-sm dark:shadow-gray-900/20 border border-transparent dark:border-gray-700">
      {/* NEW 徽章：顯示在卡片右上角 */}
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {t('common.new') || 'NEW'}
          </span>
        </div>
      )}

      {/* Demo 區域 */}
      {demoContent}

      {/* UI 內容區域 */}
      {uiContent}
    </div>
  );
}
