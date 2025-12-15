/**
 * Shared loader utilities for React Router routes
 * Provides reusable loader functions to reduce code duplication
 * @module utils/routeLoaders
 */

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

    const config = {
      Component: componentModule[Object.keys(componentModule)[0]],
      ErrorBoundary: RouteError
    };

    if (loaderFn) {
      config.loader = loaderFn;
    }

    return config;
  };
}
