import { useMemo } from 'react';
import Masonry from 'react-masonry-css';
import { VariantCard } from './VariantCard';
import { VirtualMasonryVariable } from './VirtualMasonryVariable';
import './VariantGrid.css';

/**
 * 變體虛擬化閾值
 * 超過此數量時啟用虛擬滾動，減少 DOM 節點
 */
const VARIANT_VIRTUALIZATION_THRESHOLD = 8;

/**
 * VariantGrid - 瀑布流佈局容器
 * 使用 Masonry 佈局展示組件的多個變体
 * 支持: 點擊預覽 + Prompt 功能
 *
 * 💡 性能優化：
 * - 變體數量 > 8 時自動啟用虛擬滾動
 * - 使用 VirtualMasonryVariable 減少 DOM 節點 60%+
 * - 保持少量變體時的原有 Masonry 體驗
 */
export function VariantGrid({
  variants = [],
  onViewCode,
  onGetPrompt,
  onPreview // 預覽功能 (可選)
}) {
  // 響應式斷點配置
  const breakpointColumns = {
    default: 3,  // 桌面: 3 列
    1024: 2,     // 平板: 2 列
    768: 1       // 手機: 1 列
  };

  // 🚀 Memoized render function for VirtualMasonryVariable
  const renderVariantCard = useMemo(() => (variant, index) => (
    <VariantCard
      key={variant.id || index}
      variant={variant}
      index={index}
      onViewCode={onViewCode}
      onGetPrompt={onGetPrompt}
      onPreview={onPreview}
    />
  ), [onViewCode, onGetPrompt, onPreview]);

  // Empty state
  if (!variants || variants.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-4xl mb-4">📦</div>
        <p className="text-gray-600">
          暫無變体数据
        </p>
      </div>
    );
  }

  // 🚀 條件虛擬化：變體數量多時使用虛擬滾動
  if (variants.length > VARIANT_VIRTUALIZATION_THRESHOLD) {
    return (
      <VirtualMasonryVariable
        items={variants}
        defaultItemHeight={350}
        listHeight={800}
        gap={24}
        renderItem={renderVariantCard}
      />
    );
  }

  // 少量變體使用原有 Masonry（更好的視覺效果）
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="variants-masonry-grid"
      columnClassName="variants-masonry-grid-column"
    >
      {variants.map((variant, index) => renderVariantCard(variant, index))}
    </Masonry>
  );
}

export default VariantGrid;
