/**
 * Shared loader utilities for React Router routes
 * Provides reusable loader functions to reduce code duplication
 * @module utils/routeLoaders
 */

// Import the proper parseStyleId that uses FAMILY_ID_MAP
import { parseStyleId } from '../data/loaders/StyleIdParser.js';

/**
 * Create a style loader function that loads style data from JSON
 * @param {Object} params - Route parameters
 * @param {string} params.styleId - Encoded style ID from route params
 * @returns {Promise<{style: Object}>} Loaded style data
 * @throws {Response} 404 response if style not found
 */
export async function createStyleLoader({ params }) {
  const { decodeStyleId } = await import('./styleHelper.js');
  const { loadStyleFromJSON } = await import('../data/index.js');

  const styleId = decodeStyleId(params.styleId);
  const style = await loadStyleFromJSON(styleId);

  if (!style) {
    throw new Response('Style not found', {
      status: 404,
      statusText: 'Not Found'
    });
  }

  return { style };
}

/**
 * 將 manifest 中的模板條目去重並校驗前綴，避免裸 ID 或重複導致模板數量顯示錯誤
 * @param {Array<string|Object>} rawTemplates - manifest 提供的模板列表
 * @param {string} familyPrefix - 期望的家族前綴（如 retro-arcadeCRT）
 * @returns {Array<string|Object>} 已清理的模板列表
 */
function normalizeTemplateEntriesForMetadata(rawTemplates = [], familyPrefix = '') {
  const prefixWithDash = familyPrefix ? `${familyPrefix}-` : '';
  const seen = new Set();

  return rawTemplates.filter((entry) => {
    const id = typeof entry === 'string'
      ? entry.trim()
      : (entry?.id || '').trim();

    if (!id) return false;

    const hasPrefix = !familyPrefix
      || id === familyPrefix
      || (prefixWithDash && id.startsWith(prefixWithDash));

    if (!hasPrefix) return false;
    if (seen.has(id)) return false;

    seen.add(id);
    return true;
  });
}

/**
 * Create a deferred style loader for streaming data loading
 * Loads lightweight metadata immediately, defers heavy content
 *
 * React Router v7 supports returning objects with Promise values directly
 * (no need for defer() wrapper anymore)
 *
 * This improves Time to First Paint by showing the page skeleton
 * while content loads in the background
 *
 * OPTIMIZATION v1: Starts style loading in parallel with manifest loading
 * instead of waiting for manifest to complete first
 *
 * OPTIMIZATION v2: Now also preloads first preview content in parallel
 * This eliminates the waterfall delay when preview component mounts (saves 300-500ms)
 *
 * @param {Object} params - Route parameters
 * @param {string} params.styleId - Encoded style ID from route params
 * @returns {Promise<{styleMetadata: Object, style: Promise, preloadedPreview: Promise}>} Deferred data
 */
export async function createStyleLoaderDeferred({ params }) {
  const { decodeStyleId } = await import('./styleHelper.js');

  const styleId = decodeStyleId(params.styleId);
  const { category, familyId } = parseStyleId(styleId);

  // PARALLEL: Load all module imports simultaneously
  const [
    { loadFamilyManifest },
    { loadStyleFromJSON },
    { preloadFirstPreviewContent }
  ] = await Promise.all([
    import('../data/loaders/ManifestLoader.js'),
    import('../data/index.js'),
    import('./preloadHelpers.js')
  ]);

  // PARALLEL OPTIMIZATION: Start ALL loading simultaneously
  // 1. Style loading - full style data including all templates
  // 2. Manifest loading - lightweight metadata for skeleton UI
  // 3. First preview content - HTML/CSS/JSX for immediate rendering
  // This eliminates sequential waterfall and saves 300-500ms total

  const stylePromise = loadStyleFromJSON(styleId);
  const manifestPromise = loadFamilyManifest(category, familyId);

  // Determine first preview ID from styleId pattern
  // Format: category-familyId or category-familyId-templateId
  const firstPreviewId = styleId.includes('-') && styleId.split('-').length > 2
    ? styleId
    : `${category}-${familyId}`;

  // Start preloading first preview content (don't await)
  const preloadedPreviewPromise = preloadFirstPreviewContent(category, familyId, firstPreviewId);

  // Await only manifest (needed for 404 check and metadata)
  const manifest = await manifestPromise;

  if (!manifest) {
    throw new Response('Style not found', {
      status: 404,
      statusText: 'Not Found'
    });
  }

  const familyPrefix = manifest.id || `${category}-${familyId}`;
  const templateEntries = normalizeTemplateEntriesForMetadata(
    manifest.templates || manifest.styles || [],
    familyPrefix
  );
  const templateCount = templateEntries.length > 0
    ? templateEntries.length
    : (manifest.templates?.length || manifest.styles?.length || 0);

  return {
    styleMetadata: {
      id: manifest.id || styleId,
      category,
      familyId,
      title: manifest.family?.name || manifest.title || familyId,
      description: manifest.family?.description || manifest.description || '',
      previews: manifest.previews || [],
      templateCount
    },
    // Return Promises directly - already loading in background
    style: stylePromise,
    // NEW: Preloaded first preview content
    preloadedPreview: preloadedPreviewPromise
  };
}

/**
 * Create a component loader function that loads component data from JSON
 * @param {Object} params - Route parameters
 * @param {string} params.category - Component category
 * @param {string} params.componentId - Component ID
 * @returns {Promise<{component: Object}>} Loaded component data
 * @throws {Response} 404 response if component not found
 */
export async function createComponentLoader({ params }) {
  const { loadComponentFromJSON } = await import('../data/loaders/jsonComponentLoader.js');
  const { category, componentId } = params;

  const component = await loadComponentFromJSON(`${category}/${componentId}`);

  if (!component) {
    throw new Response('Component not found', {
      status: 404,
      statusText: 'Not Found'
    });
  }

  return { component };
}

/**
 * Create a lazy route configuration with component and error boundary
 * @param {Function} componentImport - Dynamic import function for the component
 * @param {Function} [loaderFn] - Optional loader function
 * @returns {Function} Lazy route configuration function
 */
export function createLazyRoute(componentImport, loaderFn = null) {
  return async () => {
    const [componentModule, { RouteError }] = await Promise.all([
      componentImport(),
      import('../components/RouteError.jsx')
    ]);

    // Determine Component with explicit priority and fail-fast on ambiguity
    let Component;

    if (componentModule.default) {
      // Priority 1: Use default export (recommended)
      Component = componentModule.default;
    } else if (componentModule.Component) {
      // Priority 2: Use named Component export
      Component = componentModule.Component;
    } else {
      // Priority 3: Single named export (backwards compatibility)
      const keys = Object.keys(componentModule);
      if (keys.length === 1) {
        Component = componentModule[keys[0]];
      } else {
        // Fail-fast with clear error message
        throw new Error(
          `Unable to determine Component from route module. ` +
          `Available exports: ${keys.join(', ')}. ` +
          `Please use 'export default' or 'export const Component'.`
        );
      }
    }

    const config = {
      Component,
      ErrorBoundary: RouteError
    };

    if (loaderFn) {
      config.loader = loaderFn;
    }

    return config;
  };
}
