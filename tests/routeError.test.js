/**
 * Unit tests for RouteError component
 * Ensures route error boundary does not crash when rendering Response-like errors.
 */

import { describe, it, expect, vi } from 'vitest';
import React from 'react';

vi.mock('react-router-dom', () => ({
  useRouteError: () => ({
    status: 404,
    statusText: 'Not Found'
  })
}));

describe('RouteError', () => {
  it('should not throw when error has statusText', async () => {
    // Vitest Node environment may use classic JSX transform (React.createElement),
    // ensure React is available on global scope for JSX evaluation.
    globalThis.React = React;

    const { RouteError } = await import('../src/components/RouteError.jsx');
    expect(() => RouteError()).not.toThrow();
  });
});
