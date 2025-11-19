import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'

/**
 * VirtualMasonryVariable - 每欄虛擬化（可變項高）PoC
 * - 動態 import react-window 的 VariableSizeList，避免首屏體積增加
 * - 以 ResizeObserver 度量每個 item 高度，並呼叫 resetAfterIndex
 * - 若未載入/不支援時，回退為簡單的 CSS Grid 佈局
 */
export function VirtualMasonryVariable({
  items = [],
  columnCount: _columnCount,
  defaultItemHeight = 380,
  listHeight = 900,
  gap = 24,
  renderItem,
}) {
  const [VarList, setVarList] = useState(null)
  const [columnCount, setColumnCount] = useState(_columnCount || 3)

  useEffect(() => {
    let mounted = true
    import('react-window').then((mod) => {
      if (!mounted) return
      const V = mod.VariableSizeList || (mod.default && mod.default.VariableSizeList)
      setVarList(() => V)
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  // 依視窗寬度推算欄數（未指定時）
  useEffect(() => {
    if (_columnCount) return
    const calc = () => {
      const w = window.innerWidth
      if (w >= 1024) setColumnCount(3)
      else if (w >= 768) setColumnCount(2)
      else setColumnCount(1)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [_columnCount])

  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => [])
    items.forEach((it, i) => { cols[i % columnCount].push(it) })
    return cols
  }, [items, columnCount])

  // 回退：未載入 VarList 時使用簡單 Grid
  if (!VarList) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`, gap }}>
        {items.map((it, i) => (
          <div key={it?._uniqueKey || i} style={{ marginBottom: gap }}>
            {renderItem(it, i)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`, gap }}>
      {columns.map((col, colIdx) => (
        <ColumnVariable
          key={colIdx}
          items={col}
          renderItem={renderItem}
          defaultItemHeight={defaultItemHeight}
          listHeight={listHeight}
          gap={gap}
          VarList={VarList}
        />
      ))}
    </div>
  )
}

function ColumnVariable({ items, renderItem, defaultItemHeight, listHeight, gap }) {
  const sizeMapRef = useRef(new Map())
  const listRef = useRef(null)

  const getSize = useCallback((index) => {
    const v = sizeMapRef.current.get(index)
    return typeof v === 'number' && v > 0 ? v + gap : defaultItemHeight + gap
  }, [gap, defaultItemHeight])

  const setSize = useCallback((index, size) => {
    const prev = sizeMapRef.current.get(index)
    if (prev !== size) {
      sizeMapRef.current.set(index, size)
      if (listRef.current && typeof listRef.current.resetAfterIndex === 'function') {
        listRef.current.resetAfterIndex(index)
      }
    }
  }, [])

  const Row = ({ index, style }) => {
    return (
      <div style={{ ...style, paddingBottom: gap }}>
        <Measured onSize={(h) => setSize(index, h)}>
          {renderItem(items[index], index)}
        </Measured>
      </div>
    )
  }

  return (
    <VarList
      ref={listRef}
      height={listHeight}
      itemCount={items.length}
      itemSize={getSize}
      width={'100%'}
      overscanCount={3}
    >
      {Row}
    </VarList>
  )
}

function Measured({ children, onSize }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect?.height || el.offsetHeight || 0
        if (h) onSize(h)
      }
    })
    ro.observe(el)
    // 初次
    onSize(el.offsetHeight || 0)
    return () => ro.disconnect()
  }, [onSize])
  return <div ref={ref}>{children}</div>
}

export default VirtualMasonryVariable
