import { memo } from 'react';
import PropTypes from 'prop-types';
import { LayoutGrid, List } from 'lucide-react';

/**
 * ViewModeToggle - 視圖模式切換組件
 *
 * 提供 Grid 和 List 兩種視圖模式的切換按鈕
 *
 * @param {Object} props
 * @param {'grid' | 'list'} props.viewMode - 當前視圖模式
 * @param {function} props.onViewModeChange - 視圖模式改變回調
 */
function ViewModeToggleComponent({ viewMode, onViewModeChange }) {
  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
      {/* Grid View Button */}
      <button
        onClick={() => onViewModeChange('grid')}
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
          viewMode === 'grid'
            ? 'bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50'
        }`}
        aria-label="Grid view"
        aria-pressed={viewMode === 'grid'}
      >
        <LayoutGrid size={16} />
      </button>

      {/* List View Button */}
      <button
        onClick={() => onViewModeChange('list')}
        className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
          viewMode === 'list'
            ? 'bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50'
        }`}
        aria-label="List view"
        aria-pressed={viewMode === 'list'}
      >
        <List size={16} />
      </button>
    </div>
  );
}

ViewModeToggleComponent.propTypes = {
  viewMode: PropTypes.oneOf(['grid', 'list']).isRequired,
  onViewModeChange: PropTypes.func.isRequired
};

export const ViewModeToggle = memo(ViewModeToggleComponent);
