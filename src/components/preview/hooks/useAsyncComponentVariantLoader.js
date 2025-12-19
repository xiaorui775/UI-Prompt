/**
 * useAsyncComponentVariantLoader - 組件預覽的變體內容異步載入（HTML/CSS/Prompt）
 *
 * 目標：
 * - 避免在 ComponentPreviewPage 的 route loader 一次載入所有 variants（大量 fetch）
 * - 只在需要時載入當前 variant 的內容，並使用 LRU 快取加速切換
 *
 * 設計：
 * - 支援「預先載入的第一個 variant」（由 loader 以 Promise 形式提供）
 * - 變體切換時：先查快取 → 查 in-flight 去重 → 動態 import loader → fetch
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import { getPreviewCache } from '../../../utils/LRUCache';

const DEFAULT_EMPTY_VARIANT = Object.freeze({
  variantId: null,
  demoHTML: '',
  customStyles: '',
  customPrompt: null,
  stylePrompt: null
});

function getVariantId(variants = [], activeIndex = 0) {
  if (!Array.isArray(variants) || variants.length === 0) return null;
  const safeIndex = activeIndex >= 0 && activeIndex < variants.length ? activeIndex : 0;
  return variants[safeIndex]?.id || variants[0]?.id || null;
}

function getCacheKey(category, componentId, variantId) {
  return `component:${category}/${componentId}:${variantId}`;
}

/**
 * @param {Object} options
 * @param {string} options.category - component categoryId
 * @param {string} options.componentId - componentId
 * @param {Array} options.variants - variant metadata list (needs .id)
 * @param {number} options.activeIndex - current variant index
 * @param {Promise<Object>} [options.preloadedVariant] - preloaded variant promise from loader
 * @param {string|null} [options.preloadedVariantId] - which variantId the preloaded promise represents
 */
export function useAsyncComponentVariantLoader({
  category,
  componentId,
  variants,
  activeIndex,
  preloadedVariant,
  preloadedVariantId
}) {
  const previewCache = useRef(getPreviewCache(60));
  const inflightRef = useRef(new Map());

  const currentVariantId = useMemo(
    () => getVariantId(variants, activeIndex),
    [variants, activeIndex]
  );

  const [variantData, setVariantData] = useState(DEFAULT_EMPTY_VARIANT);
  const [isLoadingVariant, setIsLoadingVariant] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!category || !componentId || !currentVariantId) {
        setVariantData(DEFAULT_EMPTY_VARIANT);
        setIsLoadingVariant(false);
        return;
      }

      const cacheKey = getCacheKey(category, componentId, currentVariantId);

      const cached = previewCache.current.get(cacheKey);
      if (cached) {
        setVariantData(cached);
        setIsLoadingVariant(false);
        return;
      }

      setIsLoadingVariant(true);

      // Use preloaded promise when it matches the current variant
      const shouldUsePreloaded = preloadedVariant && preloadedVariantId === currentVariantId;

      const inflight = inflightRef.current.get(cacheKey);
      if (inflight) {
        try {
          const data = await inflight;
          if (cancelled) return;
          setVariantData(data);
          setIsLoadingVariant(false);
        } catch {
          if (cancelled) return;
          setVariantData({ ...DEFAULT_EMPTY_VARIANT, variantId: currentVariantId });
          setIsLoadingVariant(false);
        }
        return;
      }

      const promise = (async () => {
        if (shouldUsePreloaded) {
          const data = await preloadedVariant;
          const normalized = data?.variantId
            ? data
            : { ...DEFAULT_EMPTY_VARIANT, variantId: currentVariantId };
          return normalized;
        }

        const { loadVariantContent, loadVariantPrompts } = await import(
          '../../../data/loaders/jsonComponentLoader.js'
        );

        const [content, prompts] = await Promise.all([
          loadVariantContent(category, componentId, currentVariantId),
          loadVariantPrompts(category, componentId, currentVariantId)
        ]);

        return {
          variantId: currentVariantId,
          ...content,
          ...prompts
        };
      })();

      inflightRef.current.set(cacheKey, promise);

      try {
        const data = await promise;
        inflightRef.current.delete(cacheKey);

        if (cancelled) return;

        previewCache.current.set(cacheKey, data);
        setVariantData(data);
        setIsLoadingVariant(false);
      } catch {
        inflightRef.current.delete(cacheKey);
        if (cancelled) return;
        setVariantData({ ...DEFAULT_EMPTY_VARIANT, variantId: currentVariantId });
        setIsLoadingVariant(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [
    category,
    componentId,
    currentVariantId,
    preloadedVariant,
    preloadedVariantId
  ]);

  return {
    variantData,
    currentVariantId,
    isLoadingVariant,
    previewCacheRef: previewCache
  };
}

export default useAsyncComponentVariantLoader;

