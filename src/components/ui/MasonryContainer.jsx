import React, { useMemo, useState, useEffect } from 'react'
import './Masonry.css'

/**
 * MasonryContainer - Grid 瀑布流容器（水平填充）
 * - 使用 Grid 布局实现水平填充（每行连续）
 * - 不再使用 CSS columns（会导致垂直填充）
 * - 支持响应式列数调整
 */
export function MasonryContainer({ children, className = '', columns: initialColumns, gap = 32 }) {
  const [columnCount, setColumnCount] = useState(initialColumns ?? 3)

  // 响应式列数调整
  useEffect(() => {
    // 如果明确传入了 columns 参数，使用传入值（保持向后兼容）
    if (initialColumns) return

    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setColumnCount(3) // lg: 桌面 3 列
      } else if (width >= 768) {
        setColumnCount(2) // md: 平板 2 列
      } else {
        setColumnCount(1) // sm: 移动 1 列
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [initialColumns])

  const childArray = useMemo(() => React.Children.toArray(children), [children])

  const columnArrays = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => [])
    childArray.forEach((child, i) => {
      cols[i % columnCount].push(child)
    })
    return cols
  }, [childArray, columnCount])

  return (
    <div
      className={`masonry ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: `${gap}px`
      }}
    >
      {columnArrays.map((col, colIdx) => (
        <div key={colIdx}>
          {col.map((child, itemIdx) => (
            <div key={child.key || itemIdx} className="masonry-item" style={{ marginBottom: `${gap}px` }}>
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MasonryContainer

