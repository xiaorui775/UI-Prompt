/**
 * UI Components
 *
 * Reusable UI components for the application.
 * Organized by functionality for easy discovery.
 *
 * @module components/ui
 */

// ========================================
// Category 1: Card Components
// ========================================

// Main card components for styles and components display
export { StyleCard } from './StyleCard';
export { StyleCardUI, StyleCardContainer } from './StyleCardUI';
export { StyleListRow } from './StyleListRow';
export { ComponentCard } from './ComponentCard';
export { VariantCard } from './VariantCard';
export { VariantGrid } from './VariantGrid';

// ========================================
// Category 2: Rendering & Display
// ========================================

// Rendering engines for HTML and JSX content
export { IframeRenderer } from './IframeRenderer';
export { JSXCompiler } from './JSXCompiler';

// Loading states and skeletons
export { Loading } from './Loading';
export { LoadingDots } from './LoadingDots';
export { DemoSkeleton, DemoPlaceholder } from './DemoSkeleton';

// UI wrappers and containers
export { BrowserFrame } from './BrowserFrame';
export { MasonryContainer } from './MasonryContainer';

// ========================================
// Category 3: Interactive Components
// ========================================

// Filtering and search
export { SearchBar } from './SearchBar';
export { FilterTabs } from './FilterTabs';
export { ViewModeToggle } from './ViewModeToggle';

// Modals and overlays
export { CodeModal } from './CodeModal';

// Feedback components
export { Toast } from './Toast';
export { MessageBox } from './MessageBox';

// ========================================
// Category 4: Small UI Elements
// ========================================

// Tags and badges
export { TagChip, TagGroup, CategoryBadge } from './TagChip';

// Decorative elements (Paper-themed components)
export { WashiTape, PushPin, PaperModal, PaperCard } from './PaperElements';

// ========================================
// Category 5: Virtual Scrolling
// ========================================

// Virtual scrolling components for performance
export { VirtualGrid } from './VirtualGrid';
export { VirtualMasonryVariable } from './VirtualMasonryVariable';
export { VirtualizedStyleGrid } from './VirtualizedStyleGrid';
