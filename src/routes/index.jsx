/**
 * Application router configuration
 * Defines all routes using React Router v7 with lazy loading
 * @module routes
 */

import { createBrowserRouter, redirect } from 'react-router-dom';
import { HydrateFallback } from '../components/HydrateFallback';
import { createStyleLoader, createStyleLoaderDeferred, createComponentLoader, createLazyRoute } from '../utils/routeLoaders';

/**
 * Application routes configuration
 * @type {import('react-router-dom').RouteObject[]}
 */
export const router = createBrowserRouter([
  // Preview routes (without main Layout) - uses deferred loading for fast TTF
  {
    path: '/styles/preview/:styleId',
    lazy: createLazyRoute(
      () => import('../pages/styles/StylePreviewPage.jsx'),
      createStyleLoaderDeferred  // Use deferred loader for streaming data
    )
  },
  // Redirect /styles/preview (without styleId) to /styles page
  {
    path: '/styles/preview',
    loader: () => redirect('/styles')
  },
  {
    path: '/styles/code/:styleId',
    lazy: createLazyRoute(
      () => import('../pages/styles/CodeEditorPage.jsx'),
      createStyleLoader
    )
  },
  {
    path: '/components/preview/:category/:componentId',
    lazy: createLazyRoute(
      () => import('../pages/components/ComponentPreviewPage.jsx'),
      createComponentLoader
    )
  },

  // Main application routes with Layout
  {
    path: '/',
    lazy: async () => {
      const [{ Layout }, { RouteError }] = await Promise.all([
        import('../components/layout/Layout.jsx'),
        import('../components/RouteError.jsx')
      ]);
      return { Component: Layout, ErrorBoundary: RouteError };
    },
    hydrateFallbackElement: <HydrateFallback />,
    children: [
      {
        index: true,
        lazy: createLazyRoute(() => import('../pages/home/HomePage.jsx'))
      },
      {
        path: 'home',
        lazy: createLazyRoute(() => import('../pages/home/HomePage.jsx'))
      },
      {
        path: 'styles',
        lazy: createLazyRoute(() => import('../pages/styles/AllStylesPage.jsx'))
      },
      {
        path: 'components',
        lazy: createLazyRoute(() => import('../pages/components/AllComponentsPage.jsx'))
      },
      {
        path: 'components/:category/:componentId',
        lazy: createLazyRoute(
          () => import('../pages/components/ComponentDetailPage.jsx'),
          createComponentLoader
        )
      },
      {
        path: 'layouts',
        lazy: createLazyRoute(() => import('../pages/layouts/LayoutsPage.jsx'))
      },
      {
        path: 'about',
        lazy: createLazyRoute(() => import('../pages/about/AboutPage.jsx'))
      },
      {
        path: '*',
        lazy: createLazyRoute(() => import('../pages/special/NotFoundPage.jsx'))
      }
    ]
  }
]);
