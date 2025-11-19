import './ComponentGrid.css';

/**
 * ComponentGrid - 專用於組件頁面的響應式網格佈局
 * 電腦：4欄 | iPad：3欄 | 手機：2欄
 */
export function ComponentGrid({ children, className = '' }) {
  return (
    <div className={`component-grid ${className}`}>
      {children}
    </div>
  );
}

export default ComponentGrid;