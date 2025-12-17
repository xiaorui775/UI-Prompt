import { useEffect, useRef } from 'react';

/**
 * Performance Monitoring Hook for Development
 *
 * Tracks component re-renders and warns about rapid re-renders
 * that may indicate performance issues.
 *
 * Features:
 * - Only active in development mode (tree-shaken in production)
 * - Warns when component re-renders faster than 60fps (16ms)
 * - Uses Performance API for profiling
 *
 * @example
 * function MyComponent() {
 *   usePerformanceMonitor('MyComponent');
 *   return <div>...</div>;
 * }
 *
 * @param {string} componentName - Name for logging
 * @returns {{ renderCount: number }}
 */
export function usePerformanceMonitor(componentName) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());

  useEffect(() => {
    // Only active in development
    if (process.env.NODE_ENV !== 'development') return;

    renderCount.current++;
    const now = Date.now();
    const delta = now - lastRenderTime.current;

    // Warn on rapid re-renders (< 16ms = 60fps threshold)
    if (delta < 16 && renderCount.current > 1) {
      console.warn(
        `[Perf] ${componentName}: rapid re-render detected (${delta}ms gap, render #${renderCount.current})`
      );
    }

    lastRenderTime.current = now;

    // Performance API marking for profiling
    if (window.performance?.mark) {
      window.performance.mark(`${componentName}-render-${renderCount.current}`);
    }
  });

  return { renderCount: renderCount.current };
}

/**
 * Performance Summary Hook
 *
 * Logs total render count when component unmounts.
 * Useful for identifying components that render too frequently.
 *
 * @example
 * function MyComponent() {
 *   usePerformanceSummary('MyComponent');
 *   return <div>...</div>;
 * }
 *
 * @param {string} componentName - Name for logging
 */
export function usePerformanceSummary(componentName) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    return () => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Perf] ${componentName}: total renders = ${renderCount.current}`);
      }
    };
  }, [componentName]);
}

/**
 * Measure render duration for a component
 *
 * @example
 * function MyComponent() {
 *   const { startMeasure, endMeasure } = useRenderDuration('MyComponent');
 *
 *   useEffect(() => {
 *     endMeasure();
 *   });
 *
 *   startMeasure();
 *   return <div>...</div>;
 * }
 *
 * @param {string} componentName - Name for logging
 * @returns {{ startMeasure: () => void, endMeasure: () => void }}
 */
export function useRenderDuration(componentName) {
  const startTime = useRef(0);

  const startMeasure = () => {
    if (process.env.NODE_ENV === 'development') {
      startTime.current = performance.now();
    }
  };

  const endMeasure = () => {
    if (process.env.NODE_ENV === 'development' && startTime.current > 0) {
      const duration = performance.now() - startTime.current;
      if (duration > 16) {
        console.warn(`[Perf] ${componentName}: slow render (${duration.toFixed(2)}ms)`);
      }
      startTime.current = 0;
    }
  };

  return { startMeasure, endMeasure };
}
