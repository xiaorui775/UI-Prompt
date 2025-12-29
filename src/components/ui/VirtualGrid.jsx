import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

/**
 * VirtualGrid - 虛擬化固定高度 Grid 組件
 *
 * 專為 ComponentCard 等固定高度卡片設計的虛擬滾動組件
 * - 將 Grid 轉換為行列表，每行渲染多個卡片
 * - 響應式 column 計算
 *
 * 🚀 性能優化：
 * - 僅渲染可見區域的行
 * - 使用 overscanCount 預渲染上下各 2 行
 * - 固定行高避免 ResizeObserver 開銷
 *
 * @module components/ui/VirtualGrid
 */

function findRowStartIndex(rowOffsets, offset) {
  if (!rowOffsets || rowOffsets.length < 2) return 0;
  const lastRowIndex = rowOffsets.length - 2;

  const clamped = Math.max(0, Math.min(offset, rowOffsets[rowOffsets.length - 1]));

  let low = 0;
  let high = rowOffsets.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);
    if (rowOffsets[mid] <= clamped) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return Math.min(low, lastRowIndex);
}

// Extracted Row component for stable rendering reference
const GridRow = memo(function GridRow({
  ariaAttributes,
  index,
  style,
  rows,
  renderItem,
  gap,
  columnCount,
  minRowHeight,
  onRowHeightChange
}) {
  const rowItems = rows[index] || [];
  const rowRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!onRowHeightChange) return undefined;

    const element = rowRef.current;
    if (!element) return undefined;

    let rafId = null;
    const reportHeight = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        onRowHeightChange(index, element.getBoundingClientRect().height);
      });
    };

    reportHeight();

    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(reportHeight);
      observer.observe(element);
      return () => {
        observer.disconnect();
        if (rafId !== null) window.cancelAnimationFrame(rafId);
      };
    }

    window.addEventListener('resize', reportHeight);
    return () => {
      window.removeEventListener('resize', reportHeight);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [index, onRowHeightChange]);

  return (
    <div
      ref={rowRef}
      {...ariaAttributes}
      style={{
        ...style,
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: gap,
        paddingBottom: gap,
        minHeight: minRowHeight
      }}
    >
      {rowItems.map((item, colIdx) => (
        <div key={item._uniqueKey || `${index}-${colIdx}`}>
          {renderItem(item, index * columnCount + colIdx)}
        </div>
      ))}
      {/* 填充空白格子以保持網格對齊 */}
      {rowItems.length < columnCount && Array.from({ length: columnCount - rowItems.length }).map((_, i) => (
        <div key={`empty-${i}`} aria-hidden="true" />
      ))}
    </div>
  );
});

/**
 * VirtualGrid 主組件
 *
 * @param {Object} props
 * @param {Array} props.items - 要渲染的項目列表
 * @param {Function} props.renderItem - 渲染單個項目的函數 (item, index) => ReactNode
 * @param {number} [props.itemHeight=280] - 每個項目的固定高度（不含 gap）
 * @param {number} [props.gap=24] - 項目間距
 * @param {Object} [props.breakpoints] - 自定義斷點配置
 * @param {number} [props.listHeight=800] - 虛擬列表容器高度
 * @param {number} [props.threshold=20] - 開啟虛擬化的項目數閾值
 */
export function VirtualGrid({
  items = [],
  renderItem,
  itemHeight = 280,
  gap = 24,
  breakpoints = {
    // 對應 Tailwind 的 grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    default: 2,
    768: 3,   // md
    1024: 4   // lg
  },
  threshold = 20,
  overscanCount = 2
}) {
  const [columnCount, setColumnCount] = useState(breakpoints.default || 2);
  const containerRef = useRef(null);
  const minRowHeight = itemHeight + gap;

  // 視窗高度：用於計算可見行範圍（window 捲動虛擬化）
  const { height: viewportHeight } = useWindowSize();

  // 響應式列數計算
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const sortedBreakpoints = Object.entries(breakpoints)
        .filter(([key]) => key !== 'default')
        .map(([key, value]) => [parseInt(key, 10), value])
        .sort((a, b) => b[0] - a[0]);

      let cols = breakpoints.default || 2;
      for (const [breakpoint, colCount] of sortedBreakpoints) {
        if (width >= breakpoint) {
          cols = colCount;
          break;
        }
      }
      setColumnCount(cols);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [breakpoints]);

  // 將 items 分組為行
  const rows = useMemo(() => {
    const result = [];
    for (let i = 0; i < items.length; i += columnCount) {
      result.push(items.slice(i, i + columnCount));
    }
    return result;
  }, [items, columnCount]);

  const [rowHeights, setRowHeights] = useState(() => []);

  useEffect(() => {
    setRowHeights(Array.from({ length: rows.length }, () => minRowHeight));
  }, [minRowHeight, rows.length]);

  const rowOffsets = useMemo(() => {
    const offsets = new Array(rows.length + 1);
    offsets[0] = 0;
    for (let i = 0; i < rows.length; i += 1) {
      const h = rowHeights[i] ?? minRowHeight;
      offsets[i + 1] = offsets[i] + h;
    }
    return offsets;
  }, [minRowHeight, rowHeights, rows.length]);

  const totalHeight = rowOffsets[rows.length] || 0;

  const [visibleRange, setVisibleRange] = useState(() => ({
    startIndex: 0,
    stopIndex: Math.min(rows.length - 1, 0)
  }));

  const handleRowHeightChange = useCallback((rowIndex, height) => {
    if (!Number.isFinite(height)) return;
    if (rowIndex < 0 || rowIndex >= rows.length) return;

    const nextHeight = Math.max(minRowHeight, Math.ceil(height));

    setRowHeights((prev) => {
      const current = prev[rowIndex] ?? minRowHeight;
      if (Math.abs(current - nextHeight) < 1) return prev;
      const next = prev.length === rows.length ? [...prev] : Array.from({ length: rows.length }, () => minRowHeight);
      next[rowIndex] = nextHeight;
      return next;
    });
  }, [minRowHeight, rows.length]);

  const updateVisibleRange = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (items.length <= threshold) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const scrollTopWithinContainer = Math.max(0, window.scrollY - containerTop);

    const startBase = findRowStartIndex(rowOffsets, scrollTopWithinContainer);
    const stopBase = findRowStartIndex(rowOffsets, scrollTopWithinContainer + viewportHeight);

    const startIndex = Math.max(0, startBase - overscanCount);
    const stopIndex = Math.min(rows.length - 1, stopBase + overscanCount);

    setVisibleRange((prev) => {
      if (prev.startIndex === startIndex && prev.stopIndex === stopIndex) return prev;
      return { startIndex, stopIndex };
    });
  }, [items.length, overscanCount, rowOffsets, rows.length, threshold, viewportHeight]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (items.length <= threshold) return undefined;

    let rafId = null;
    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateVisibleRange();
      });
    };

    updateVisibleRange();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [items.length, threshold, updateVisibleRange]);

  const visibleRowIndexes = useMemo(() => {
    if (rows.length === 0) return [];
    const start = Math.max(0, Math.min(visibleRange.startIndex, rows.length - 1));
    const stop = Math.min(visibleRange.stopIndex, rows.length - 1);
    if (stop < start) return [];
    return Array.from(
      { length: stop - start + 1 },
      (_, i) => start + i
    );
  }, [rows.length, visibleRange.startIndex, visibleRange.stopIndex]);

  // 回退：項目太少時使用普通 Grid
  if (items.length <= threshold) {
    return (
      <div
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap }}
      >
        {items.map((item, index) => (
          <div key={item._uniqueKey || index}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="list"
      style={{
        position: 'relative',
        height: totalHeight,
        width: '100%'
      }}
    >
      {visibleRowIndexes.map((index) => (
        <GridRow
          key={index}
          ariaAttributes={{
            'aria-posinset': index + 1,
            'aria-setsize': rows.length,
            role: 'listitem'
          }}
          index={index}
          rows={rows}
          renderItem={renderItem}
          gap={gap}
          columnCount={columnCount}
          minRowHeight={minRowHeight}
          onRowHeightChange={handleRowHeightChange}
          style={{
            position: 'absolute',
            left: 0,
            transform: `translateY(${rowOffsets[index] || 0}px)`,
            width: '100%'
          }}
        />
      ))}
    </div>
  );
}

export default VirtualGrid;
