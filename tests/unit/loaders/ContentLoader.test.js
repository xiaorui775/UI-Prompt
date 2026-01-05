/**
 * ContentLoader 測試
 * Tests for content file loading (HTML/CSS/JSX)
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  fetchText,
  loadTemplateContent,
  loadPreviewContent,
  loadFamilyContent,
  diagnoseContentLoading
} from '../../../src/data/loaders/ContentLoader.js';

// Mock dependencies
vi.mock('../../../src/utils/jsxPreprocessor', () => ({
  isValidPreactJSX: vi.fn(() => true),
  detectJSXMode: vi.fn(() => 'preact-h'),
  validateJSX: vi.fn(() => ({ valid: true, errors: [] }))
}));

vi.mock('../../../src/utils/isUiStyleAppIndexHtml', () => ({
  isUiStyleAppIndexHtml: vi.fn((html) => {
    // Simulate detection of app shell
    return html && html.includes('name="ui-style-app"');
  })
}));

// ========== fetchText Tests ==========
describe('fetchText', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    // Mock location.href for relative URL resolution
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('Successful Requests', () => {
    it('should return text content for successful response', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('Hello World')
      });

      const result = await fetchText('http://example.com/test.txt');
      expect(result).toBe('Hello World');
    });

    it('should handle HTML content correctly', async () => {
      const htmlContent = '<div>Test Content</div>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(htmlContent)
      });

      const result = await fetchText('http://example.com/test.html');
      expect(result).toBe(htmlContent);
    });

    it('should handle CSS content correctly', async () => {
      const cssContent = '.test { color: red; }';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(cssContent)
      });

      const result = await fetchText('http://example.com/test.css');
      expect(result).toBe(cssContent);
    });
  });

  describe('Failed Requests', () => {
    it('should return empty string for 404 response', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await fetchText('http://example.com/notfound.html');
      expect(result).toBe('');
    });

    it('should return empty string for 500 response', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
        status: 500
      });

      const result = await fetchText('http://example.com/error.html');
      expect(result).toBe('');
    });

    it('should return empty string for network error', async () => {
      fetchMock.mockRejectedValue(new Error('Network error'));

      const result = await fetchText('http://example.com/test.html');
      expect(result).toBe('');
    });

    it('should return empty string for timeout error', async () => {
      fetchMock.mockRejectedValue(new Error('Request timeout'));

      const result = await fetchText('http://example.com/slow.html');
      expect(result).toBe('');
    });
  });

  describe('SPA Fallback Detection', () => {
    it('should return empty string when SPA fallback detected for CSS file', async () => {
      const htmlFallback = '<!DOCTYPE html><html><head><meta name="ui-style-app"></head></html>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(htmlFallback)
      });

      const result = await fetchText('http://example.com/test.css');
      expect(result).toBe('');
    });

    it('should return empty string when SPA fallback detected for JSX file', async () => {
      const htmlFallback = '<!DOCTYPE html><html><head><meta name="ui-style-app"></head></html>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(htmlFallback)
      });

      const result = await fetchText('http://example.com/test.jsx');
      expect(result).toBe('');
    });

    it('should return empty string when SPA fallback detected for JS file', async () => {
      const htmlFallback = '<!DOCTYPE html><html><head><meta name="ui-style-app"></head></html>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(htmlFallback)
      });

      const result = await fetchText('http://example.com/test.js');
      expect(result).toBe('');
    });

    it('should return content when HTML file returns valid HTML', async () => {
      const validHtml = '<div class="test">Content</div>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(validHtml)
      });

      const result = await fetchText('http://example.com/template.html');
      expect(result).toBe(validHtml);
    });

    it('should detect app shell in HTML content files', async () => {
      const appShell = '<!DOCTYPE html><html><head><meta name="ui-style-app"></head><body></body></html>';
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(appShell)
      });

      const result = await fetchText('http://example.com/content.html');
      expect(result).toBe('');
    });
  });

  describe('Silent Mode', () => {
    it('should not log warnings in silent mode', async () => {
      fetchMock.mockResolvedValue({
        ok: false,
        status: 404
      });

      const result = await fetchText('http://example.com/notfound.html', { silent: true });
      expect(result).toBe('');
      // Note: We can't easily test that no logs were made without mocking logger
    });

    it('should handle errors silently in silent mode', async () => {
      fetchMock.mockRejectedValue(new Error('Network error'));

      const result = await fetchText('http://example.com/test.html', { silent: true });
      expect(result).toBe('');
    });
  });

  describe('Relative URL Handling', () => {
    it('should resolve relative URLs using location.href', async () => {
      fetchMock.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('content')
      });

      await fetchText('/data/content/test.html');

      expect(fetchMock).toHaveBeenCalledWith('http://localhost:1000/data/content/test.html');
    });

    it('should return empty string when location.href is unavailable', async () => {
      vi.stubGlobal('location', undefined);

      const result = await fetchText('/relative/path.html');
      expect(result).toBe('');
    });
  });
});

// ========== loadTemplateContent Tests ==========
describe('loadTemplateContent', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should fetch all template files in parallel', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadTemplateContent('visual', 'glassmorphism', 'landing');

    // Should fetch 6 files: demo.html, demo.css, fullpage.html, fullpage.css, fullpage.jsx, demo.jsx
    expect(fetchMock).toHaveBeenCalledTimes(6);
  });

  it('should return correct structure with HTML content', async () => {
    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<div>Demo</div>') })     // demo.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('.demo { }') })          // demo.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<div>Full</div>') })    // fullpage.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('.full { }') })          // fullpage.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })                    // fullpage.jsx
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') });                   // demo.jsx

    const result = await loadTemplateContent('visual', 'glassmorphism', 'landing');

    expect(result.demoHTML).toBe('<div>Demo</div>');
    expect(result.customStyles).toBe('.demo { }');
    expect(result.fullPageHTML).toBe('<div>Full</div>');
    expect(result.fullPageStyles).toBe('.full { }');
  });

  it('should handle missing files gracefully', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404
    });

    const result = await loadTemplateContent('visual', 'nonexistent', 'template');

    expect(result.demoHTML).toBe('');
    expect(result.customStyles).toBe('');
    expect(result.fullPageHTML).toBe('');
    expect(result.fullPageStyles).toBe('');
    expect(result.fullPageJSX).toBe('');
  });

  it('should include JSX content when valid', async () => {
    const jsxContent = 'export default function App() { return h("div", null, "Hello"); }';

    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })           // demo.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })           // demo.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })           // fullpage.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })           // fullpage.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve(jsxContent) })   // fullpage.jsx
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') });          // demo.jsx

    const result = await loadTemplateContent('visual', 'glassmorphism', 'landing');

    expect(result.fullPageJSX).toBe(jsxContent);
    expect(result.renderMode).toBe('jsx');
    expect(result.jsxMode).toBe('preact-h');
  });

  it('should fallback to demo.jsx when fullpage.jsx is empty', async () => {
    const demoJsx = 'export default function Demo() { return h("div", null, "Demo"); }';

    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })          // demo.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })          // demo.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })          // fullpage.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })          // fullpage.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })          // fullpage.jsx (empty)
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve(demoJsx) });    // demo.jsx

    const result = await loadTemplateContent('visual', 'glassmorphism', 'landing');

    expect(result.fullPageJSX).toBe(demoJsx);
    expect(result.demoJSX).toBe(demoJsx);
  });
});

// ========== loadPreviewContent Tests ==========
describe('loadPreviewContent', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should fetch all preview files in parallel', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadPreviewContent('visual', 'glassmorphism', 'dashboard');

    // Should fetch 5 files: fullpage.html, fullpage.css, fullpage.js, fullpage.jsx, demo.jsx
    expect(fetchMock).toHaveBeenCalledTimes(5);
  });

  it('should return correct structure with all content', async () => {
    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<main>Preview</main>') })  // fullpage.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('.main { }') })             // fullpage.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('console.log("init");') }) // fullpage.js
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })                       // fullpage.jsx
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') });                      // demo.jsx

    const result = await loadPreviewContent('visual', 'glassmorphism', 'dashboard');

    expect(result.fullPageHTML).toBe('<main>Preview</main>');
    expect(result.fullPageStyles).toBe('.main { }');
    expect(result.fullPageScript).toBe('console.log("init");');
    expect(result.fullPageJSX).toBe('');
  });

  it('should include JSX content when valid', async () => {
    const jsxContent = 'export default function Dashboard() { return h("div", null, "Dashboard"); }';

    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })               // fullpage.html
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })               // fullpage.css
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })               // fullpage.js
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve(jsxContent) })       // fullpage.jsx
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') });              // demo.jsx

    const result = await loadPreviewContent('visual', 'glassmorphism', 'dashboard');

    expect(result.fullPageJSX).toBe(jsxContent);
    expect(result.renderMode).toBe('jsx');
  });

  it('should handle preview path correctly', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadPreviewContent('retro', 'synthwave', 'home-office');

    const calls = fetchMock.mock.calls.map(c => c[0]);
    expect(calls.some(url => url.includes('retro/synthwave/home-office/fullpage.html'))).toBe(true);
  });
});

// ========== loadFamilyContent Tests ==========
describe('loadFamilyContent', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should fetch demo.html and demo.css only', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadFamilyContent('core', 'flatDesign');

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const calls = fetchMock.mock.calls.map(c => c[0]);
    expect(calls.some(url => url.includes('core/flatDesign/demo.html'))).toBe(true);
    expect(calls.some(url => url.includes('core/flatDesign/demo.css'))).toBe(true);
  });

  it('should return correct structure', async () => {
    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<div>Family Demo</div>') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('.family { }') });

    const result = await loadFamilyContent('core', 'flatDesign');

    expect(result.demoHTML).toBe('<div>Family Demo</div>');
    expect(result.customStyles).toBe('.family { }');
  });

  it('should handle missing family content', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404
    });

    const result = await loadFamilyContent('unknown', 'family');

    expect(result.demoHTML).toBe('');
    expect(result.customStyles).toBe('');
  });
});

// ========== diagnoseContentLoading Tests ==========
describe('diagnoseContentLoading', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should check all 6 content files', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('content')
    });

    await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(fetchMock).toHaveBeenCalledTimes(6);
  });

  it('should return diagnostic report with file status', async () => {
    fetchMock
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('<div>Demo</div>') })
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('.demo { }') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') });

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(report.files).toHaveLength(6);
    expect(report.summary.totalFiles).toBe(6);
    expect(report.summary.successfulFiles).toBe(2);
    expect(report.summary.hasAnyContent).toBe(true);
  });

  it('should detect SPA fallback issues', async () => {
    const spaFallback = '<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>';

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(spaFallback)
    });

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    // demo.html should pass (HTML is valid for HTML file)
    // CSS and JSX files should detect SPA fallback
    expect(report.summary.spaFallbackCount).toBeGreaterThan(0);
  });

  it('should provide recommendation for permission issues', async () => {
    const spaFallback = '<!DOCTYPE html><html><body></body></html>';

    fetchMock.mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(spaFallback)
    });

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(report.summary.recommendation).toContain('permission');
  });

  it('should provide success message when content loads', async () => {
    fetchMock
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('<div>Demo</div>') })
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('.demo { }') })
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('<main>Full</main>') })
      .mockResolvedValueOnce({ ok: true, status: 200, text: () => Promise.resolve('.full { }') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: false, status: 404, text: () => Promise.resolve('') });

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(report.summary.hasAnyContent).toBe(true);
    expect(report.summary.recommendation).toContain('successfully');
  });

  it('should handle network errors in diagnosis', async () => {
    fetchMock.mockRejectedValue(new Error('Network error'));

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(report.files.every(f => !f.hasContent)).toBe(true);
    expect(report.files.every(f => f.error === 'Network error')).toBe(true);
  });

  it('should include base path in report', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('content')
    });

    const report = await diagnoseContentLoading('visual', 'glassmorphism', 'landing');

    expect(report.basePath).toContain('visual/glassmorphism/landing');
  });
});

// ========== Integration Tests ==========
describe('ContentLoader Integration', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('location', { href: 'http://localhost:1000/' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should handle complete template loading workflow', async () => {
    // Simulate realistic content loading
    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<button>Click Me</button>') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('.btn { padding: 10px; }') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<main><h1>Welcome</h1></main>') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('main { max-width: 1200px; }') })
      .mockResolvedValueOnce({ ok: false, status: 404 })
      .mockResolvedValueOnce({ ok: false, status: 404 });

    const result = await loadTemplateContent('core', 'materialDesign', 'button');

    expect(result.demoHTML).toContain('Click Me');
    expect(result.customStyles).toContain('padding');
    expect(result.fullPageHTML).toContain('Welcome');
    expect(result.fullPageStyles).toContain('max-width');
    expect(result.fullPageJSX).toBe('');
  });

  it('should prefer JSX over HTML when both available', async () => {
    const jsxContent = 'export default () => h("div", null, "JSX Content")';

    fetchMock
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<div>HTML Demo</div>') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('<div>HTML Full</div>') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve(jsxContent) })
      .mockResolvedValueOnce({ ok: true, text: () => Promise.resolve('') });

    const result = await loadTemplateContent('visual', 'glassmorphism', 'landing');

    expect(result.fullPageJSX).toBe(jsxContent);
    expect(result.renderMode).toBe('jsx');
  });
});
