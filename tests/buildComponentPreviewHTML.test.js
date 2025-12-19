import { describe, it, expect, vi } from 'vitest';

// Vitest runs in `environment: node` in this repo. DOMPurify requires a browser-like
// environment, so we mock it for pure string-template unit tests.
vi.mock('dompurify', () => ({
  default: {
    sanitize: (input) => input
  }
}));

const {
  buildComponentPreviewHTML,
  buildComponentLoadingHTML
} = await import('../src/components/preview/utils/buildComponentPreviewHTML.js');

describe('buildComponentPreviewHTML', () => {
  it('should NOT include Tailwind CDN by default', () => {
    const html = buildComponentPreviewHTML({
      demoHTML: '<div class="p-4">Hello</div>',
      customStyles: '',
      displayTitle: 'Test',
      language: 'en-US'
    });

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).not.toContain('cdn.tailwindcss.com');
  });

  it('should include Tailwind CDN when includeTailwindCdn=true', () => {
    const html = buildComponentPreviewHTML({
      demoHTML: '<div class="p-4">Hello</div>',
      customStyles: '',
      displayTitle: 'Test',
      language: 'en-US',
      includeTailwindCdn: true
    });

    expect(html).toContain('cdn.tailwindcss.com');
  });
});

describe('buildComponentLoadingHTML', () => {
  it('should build a self-contained loading document without external dependencies', () => {
    const html = buildComponentLoadingHTML({ language: 'zh-CN' });

    expect(html).toContain('<!DOCTYPE html>');
    expect(html).toContain('<html lang="zh-CN">');
    expect(html).not.toContain('cdn.tailwindcss.com');
  });
});
