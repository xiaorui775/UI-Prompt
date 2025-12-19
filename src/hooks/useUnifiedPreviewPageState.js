/**
 * useUnifiedPreviewPageState - Unified Preview Page State Management Hook
 *
 * Extended version of usePreviewPageState that supports both:
 * - Style preview pages (original behavior)
 * - Component preview pages (extended behavior)
 *
 * Design principle: Superset of usePreviewPageState with backward compatibility
 *
 * @module hooks/useUnifiedPreviewPageState
 */

import { useState, useEffect, useCallback } from 'react';
import { LOADING_TIMEOUT_MS } from '../utils/constants';

/**
 * Configuration modes for different page types
 */
export const PREVIEW_PAGE_MODES = {
  STYLE: 'style',
  COMPONENT: 'component'
};

/**
 * Default configurations per mode
 */
const MODE_DEFAULTS = {
  [PREVIEW_PAGE_MODES.STYLE]: {
    urlParamName: 'previewIndex',
    supportsCodeModal: false
  },
  [PREVIEW_PAGE_MODES.COMPONENT]: {
    urlParamName: 'variantIndex',
    supportsCodeModal: true
  }
};

/**
 * Unified Preview Page State Hook
 *
 * @param {Object} options - Configuration options
 * @param {'style' | 'component'} options.mode - Page mode
 * @param {string} options.itemId - Style/Component ID (for dependency tracking)
 * @param {Array} options.itemsList - List of previews/variants
 * @param {string} [options.defaultItemId] - Default preview/variant ID
 * @param {URLSearchParams} options.searchParams - URL search params
 * @param {Function} [options.setSearchParams] - URL params setter (for component mode)
 * @param {Function} [options.onClose] - Close handler (for component mode, ESC behavior)
 * @param {string} [options.language] - Current language (reserved for i18n)
 *
 * @returns {Object} State and methods
 * @returns {boolean} returns.showPrompt - Prompt drawer visibility
 * @returns {Function} returns.setShowPrompt - Set prompt drawer visibility
 * @returns {boolean} returns.isLoading - Loading state
 * @returns {Function} returns.setIsLoading - Set loading state
 * @returns {number} returns.activeIndex - Current active preview/variant index
 * @returns {Function} returns.setActiveIndex - Set active index
 * @returns {boolean} [returns.showCodeModal] - Code modal visibility (component mode only)
 * @returns {Function} [returns.setShowCodeModal] - Set code modal visibility (component mode only)
 * @returns {boolean} returns.isFullPageMode - Whether in full page mode (?full=1)
 * @returns {Function} returns.getDefaultIndex - Get default index based on mode
 */
export function useUnifiedPreviewPageState({
  mode = PREVIEW_PAGE_MODES.STYLE,
  itemId,
  itemsList = [],
  defaultItemId = '',
  searchParams,
  setSearchParams,
  onClose,
  language = 'en-US' // eslint-disable-line no-unused-vars
}) {
  const config = MODE_DEFAULTS[mode];

  // ========== Core State ==========

  const [showPrompt, setShowPrompt] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndexInternal, setActiveIndexInternal] = useState(0);

  // ========== Derived Values ==========

  /**
   * Check if in full page mode (no header)
   * From URL params: ?full=1 or ?fullpage=1
   */
  const isFullPageMode =
    searchParams.get('full') === '1' ||
    searchParams.get('fullpage') === '1';

  /**
   * Get default index based on mode
   * Style mode: prioritize defaultItemId, then first 'full' type
   * Component mode: simple index 0
   */
  const getDefaultIndex = useCallback(() => {
    if (itemsList && itemsList.length > 0) {
      // Match by defaultItemId if provided
      if (defaultItemId) {
        const matchedIndex = itemsList.findIndex(p => p.id === defaultItemId);
        if (matchedIndex >= 0) return matchedIndex;
      }
      // Style mode: find first 'full' type
      if (mode === PREVIEW_PAGE_MODES.STYLE) {
        const firstFullIndex = itemsList.findIndex(p => p.type === 'full');
        return firstFullIndex >= 0 ? firstFullIndex : 0;
      }
      return 0;
    }
    return 0;
  }, [itemsList, defaultItemId, mode]);

  /**
   * Set active index with URL sync (component mode)
   */
  const setActiveIndex = useCallback((idx) => {
    setActiveIndexInternal(idx);

    // Component mode: update URL params
    if (mode === PREVIEW_PAGE_MODES.COMPONENT && setSearchParams) {
      setSearchParams(prev => {
        const newParams = new URLSearchParams(prev);
        if (idx === 0) {
          newParams.delete(config.urlParamName);
        } else {
          newParams.set(config.urlParamName, String(idx));
        }
        return newParams;
      });
    }

    setIsLoading(true);
  }, [mode, setSearchParams, config.urlParamName]);

  // ========== Effects ==========

  /**
   * Effect 1: Initialize index from URL params
   */
  useEffect(() => {
    const urlIndex = searchParams.get(config.urlParamName);
    if (urlIndex !== null) {
      const index = parseInt(urlIndex, 10);
      if (!isNaN(index) && index >= 0 && index < itemsList.length) {
        setActiveIndexInternal(index);
      } else {
        setActiveIndexInternal(getDefaultIndex());
      }
    } else {
      setActiveIndexInternal(getDefaultIndex());
    }
    setIsLoading(true);
  }, [itemId, itemsList, searchParams, getDefaultIndex, config.urlParamName]);

  /**
   * Effect 2: Loading timeout fallback
   * Force close loading after timeout to prevent infinite loading
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_TIMEOUT_MS);

    return () => clearTimeout(timer);
  }, [itemId, activeIndexInternal]);

  /**
   * Effect 3: ESC key handler (mode-aware)
   * Style mode: window.close()
   * Component mode: priority queue (prompt → modal → onClose)
   */
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (mode === PREVIEW_PAGE_MODES.STYLE) {
          window.close();
        } else {
          // Component mode: priority queue
          if (showPrompt) {
            setShowPrompt(false);
          } else if (showCodeModal) {
            setShowCodeModal(false);
          } else if (onClose) {
            onClose();
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mode, showPrompt, showCodeModal, onClose]);

  /**
   * Effect 4: PostMessage communication
   * Listen for iframe empty state 'openPrompt' action
   */
  useEffect(() => {
    const handleMessage = (event) => {
      // Security: only accept same-origin messages
      if (event.origin !== window.location.origin) return;

      if (event.data && event.data.action === 'openPrompt') {
        setShowPrompt(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // ========== Return ==========

  return {
    // UI State
    showPrompt,
    setShowPrompt,
    isLoading,
    setIsLoading,
    activeIndex: activeIndexInternal,
    setActiveIndex,

    // Code Modal (component mode only)
    ...(config.supportsCodeModal && {
      showCodeModal,
      setShowCodeModal
    }),

    // Computed
    isFullPageMode,
    getDefaultIndex,

    // Metadata
    mode,
    config
  };
}

export default useUnifiedPreviewPageState;
