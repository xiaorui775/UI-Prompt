/**
 * PromptLoader 測試
 * Tests for Prompt content loading and parsing
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  parsePromptMd,
  loadTemplatePrompts,
  loadPreviewPrompts,
  loadFamilyPrompts
} from '../../../src/data/loaders/PromptLoader.js';

// ========== parsePromptMd Tests ==========
describe('parsePromptMd', () => {
  describe('Empty/Invalid Input', () => {
    it('should return empty object for null input', () => {
      expect(parsePromptMd(null)).toEqual({ 'zh-CN': '', 'en-US': '' });
    });

    it('should return empty object for undefined input', () => {
      expect(parsePromptMd(undefined)).toEqual({ 'zh-CN': '', 'en-US': '' });
    });

    it('should return empty object for empty string', () => {
      expect(parsePromptMd('')).toEqual({ 'zh-CN': '', 'en-US': '' });
    });

    it('should return empty object for whitespace-only string', () => {
      expect(parsePromptMd('   \n\t  ')).toEqual({ 'zh-CN': '', 'en-US': '' });
    });
  });

  describe('Chinese Version Parsing (Style Format)', () => {
    it('should parse content with "中文版本" header', () => {
      const md = `## 中文版本 (zh-CN)
這是中文內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
    });

    it('should parse content with "中文版本" header without language code', () => {
      const md = `## 中文版本
這是中文內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
    });

    it('should handle multiline Chinese content', () => {
      const md = `## 中文版本 (zh-CN)
第一行內容。
第二行內容。
第三行內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toContain('第一行內容。');
      expect(result['zh-CN']).toContain('第二行內容。');
      expect(result['zh-CN']).toContain('第三行內容。');
    });
  });

  describe('Chinese Version Parsing (Component Format)', () => {
    it('should parse content with "提示詞" header', () => {
      const md = `## 提示詞 (zh-CN)
這是組件提示詞內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是組件提示詞內容。');
    });

    it('should parse content with "提示詞" header without language code', () => {
      const md = `## 提示詞
這是組件提示詞內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是組件提示詞內容。');
    });
  });

  describe('English Version Parsing (Style Format)', () => {
    it('should parse content with "English Version" header', () => {
      const md = `## English Version (en-US)
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should parse content with "English Version" header without language code', () => {
      const md = `## English Version
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should handle multiline English content', () => {
      const md = `## English Version (en-US)
First line.
Second line.
Third line.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toContain('First line.');
      expect(result['en-US']).toContain('Second line.');
      expect(result['en-US']).toContain('Third line.');
    });
  });

  describe('English Version Parsing (Component Format)', () => {
    it('should parse content with "Prompt" header', () => {
      const md = `## Prompt (en-US)
This is component prompt content.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toBe('This is component prompt content.');
    });

    it('should parse content with "Prompt" header without language code', () => {
      const md = `## Prompt
This is component prompt content.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toBe('This is component prompt content.');
    });
  });

  describe('Bilingual Content Parsing', () => {
    it('should parse both Chinese and English sections', () => {
      const md = `## 中文版本 (zh-CN)
這是中文內容。

## English Version (en-US)
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should parse both sections with --- separator', () => {
      const md = `## 中文版本 (zh-CN)
這是中文內容。

---

## English Version (en-US)
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should parse component format with both sections', () => {
      const md = `## 提示詞 (zh-CN)
組件中文提示詞。

## Prompt (en-US)
Component English prompt.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('組件中文提示詞。');
      expect(result['en-US']).toBe('Component English prompt.');
    });

    it('should handle reversed order (English first)', () => {
      const md = `## English Version (en-US)
This is English content.

## 中文版本 (zh-CN)
這是中文內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
      expect(result['en-US']).toBe('This is English content.');
    });
  });

  describe('Edge Cases', () => {
    it('should trim whitespace from content', () => {
      const md = `## 中文版本 (zh-CN)

   這是中文內容。

## English Version (en-US)

   This is English content.
`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should handle content with special characters', () => {
      const md = `## 中文版本 (zh-CN)
使用 \`code\` 和 **bold** 以及 *italic* 格式。

## English Version (en-US)
Using \`code\` and **bold** and *italic* format.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toContain('`code`');
      expect(result['zh-CN']).toContain('**bold**');
      expect(result['en-US']).toContain('`code`');
    });

    it('should handle content with code blocks', () => {
      const md = `## 中文版本 (zh-CN)
示例代碼：
\`\`\`javascript
const x = 1;
\`\`\`

## English Version (en-US)
Example code:
\`\`\`javascript
const x = 1;
\`\`\``;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toContain('```javascript');
      expect(result['en-US']).toContain('```javascript');
    });

    it('should return empty string for missing Chinese section', () => {
      const md = `## English Version (en-US)
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('');
      expect(result['en-US']).toBe('This is English content.');
    });

    it('should return empty string for missing English section', () => {
      const md = `## 中文版本 (zh-CN)
這是中文內容。`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('這是中文內容。');
      expect(result['en-US']).toBe('');
    });

    it('should handle content with no recognized headers', () => {
      const md = `# Some Title
Random content without proper headers.`;
      const result = parsePromptMd(md);
      expect(result['zh-CN']).toBe('');
      expect(result['en-US']).toBe('');
    });

    it('should handle case insensitivity in headers', () => {
      const md = `## ENGLISH VERSION (en-US)
This is English content.`;
      const result = parsePromptMd(md);
      expect(result['en-US']).toBe('This is English content.');
    });
  });
});

// ========== loadTemplatePrompts Tests ==========
describe('loadTemplatePrompts', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should fetch custom.md and style.md for template path', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadTemplatePrompts('visual', 'glassmorphism', 'landing');

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const calls = fetchMock.mock.calls.map(c => c[0]);
    expect(calls.some(url => url.includes('visual/glassmorphism/landing/custom.md'))).toBe(true);
    expect(calls.some(url => url.includes('visual/glassmorphism/landing/style.md'))).toBe(true);
  });

  it('should fetch family-level prompts when templateId is null', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadTemplatePrompts('core', 'flatDesign', null);

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const calls = fetchMock.mock.calls.map(c => c[0]);
    expect(calls.some(url => url.includes('core/flatDesign/custom.md'))).toBe(true);
    expect(calls.some(url => url.includes('core/flatDesign/style.md'))).toBe(true);
  });

  it('should return parsed prompts from fetched content', async () => {
    const customMd = `## 中文版本 (zh-CN)
自定義提示詞。

## English Version (en-US)
Custom prompt.`;

    const styleMd = `## 中文版本 (zh-CN)
風格提示詞。

## English Version (en-US)
Style prompt.`;

    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(customMd)
      })
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(styleMd)
      });

    const result = await loadTemplatePrompts('visual', 'glassmorphism', 'landing');

    expect(result.customPrompt['zh-CN']).toBe('自定義提示詞。');
    expect(result.customPrompt['en-US']).toBe('Custom prompt.');
    expect(result.stylePrompt['zh-CN']).toBe('風格提示詞。');
    expect(result.stylePrompt['en-US']).toBe('Style prompt.');
  });

  it('should handle fetch errors gracefully', async () => {
    fetchMock.mockRejectedValue(new Error('Network error'));

    const result = await loadTemplatePrompts('visual', 'glassmorphism', 'landing');

    expect(result.customPrompt).toEqual({ 'zh-CN': '', 'en-US': '' });
    expect(result.stylePrompt).toEqual({ 'zh-CN': '', 'en-US': '' });
  });

  it('should handle 404 responses gracefully', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404
    });

    const result = await loadTemplatePrompts('visual', 'nonexistent', 'template');

    expect(result.customPrompt).toEqual({ 'zh-CN': '', 'en-US': '' });
    expect(result.stylePrompt).toEqual({ 'zh-CN': '', 'en-US': '' });
  });
});

// ========== loadPreviewPrompts Tests ==========
describe('loadPreviewPrompts', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should fetch prompts for preview path', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadPreviewPrompts('visual', 'glassmorphism', 'dashboard');

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const calls = fetchMock.mock.calls.map(c => c[0]);
    expect(calls.some(url => url.includes('visual/glassmorphism/dashboard/custom.md'))).toBe(true);
    expect(calls.some(url => url.includes('visual/glassmorphism/dashboard/style.md'))).toBe(true);
  });

  it('should return parsed prompts from fetched content', async () => {
    const customMd = `## 提示詞 (zh-CN)
預覽自定義提示詞。

## Prompt (en-US)
Preview custom prompt.`;

    const styleMd = `## 中文版本 (zh-CN)
預覽風格提示詞。

## English Version (en-US)
Preview style prompt.`;

    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(customMd)
      })
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(styleMd)
      });

    const result = await loadPreviewPrompts('visual', 'glassmorphism', 'dashboard');

    expect(result.customPrompt['zh-CN']).toBe('預覽自定義提示詞。');
    expect(result.customPrompt['en-US']).toBe('Preview custom prompt.');
    expect(result.stylePrompt['zh-CN']).toBe('預覽風格提示詞。');
    expect(result.stylePrompt['en-US']).toBe('Preview style prompt.');
  });

  it('should handle mixed format headers', async () => {
    const customMd = `## 提示詞 (zh-CN)
組件格式中文。

## English Version (en-US)
Style format English.`;

    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(customMd)
    });

    const result = await loadPreviewPrompts('visual', 'glassmorphism', 'dashboard');

    expect(result.customPrompt['zh-CN']).toBe('組件格式中文。');
    expect(result.customPrompt['en-US']).toBe('Style format English.');
  });
});

// ========== loadFamilyPrompts Tests ==========
describe('loadFamilyPrompts', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should delegate to loadTemplatePrompts with null templateId', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('')
    });

    await loadFamilyPrompts('retro', 'synthwave');

    expect(fetchMock).toHaveBeenCalledTimes(2);
    const calls = fetchMock.mock.calls.map(c => c[0]);
    // Should NOT include templateId in path
    expect(calls.some(url => url.includes('retro/synthwave/custom.md'))).toBe(true);
    expect(calls.some(url => url.includes('retro/synthwave/style.md'))).toBe(true);
  });

  it('should return same structure as loadTemplatePrompts', async () => {
    const customMd = `## 中文版本 (zh-CN)
家族級提示詞。

## English Version (en-US)
Family level prompt.`;

    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(customMd)
    });

    const result = await loadFamilyPrompts('retro', 'synthwave');

    expect(result).toHaveProperty('customPrompt');
    expect(result).toHaveProperty('stylePrompt');
    expect(result.customPrompt['zh-CN']).toBe('家族級提示詞。');
    expect(result.customPrompt['en-US']).toBe('Family level prompt.');
  });
});

// ========== Integration Tests ==========
describe('PromptLoader Integration', () => {
  let fetchMock;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should handle real-world markdown format', async () => {
    const realWorldMd = `# Style Prompt

## 中文版本 (zh-CN)

這是一個完整的風格提示詞，包含：
- 多行內容
- 列表項目
- **粗體** 和 *斜體*

使用方式：
1. 第一步
2. 第二步

---

## English Version (en-US)

This is a complete style prompt containing:
- Multi-line content
- List items
- **Bold** and *italic*

Usage:
1. Step one
2. Step two
`;

    fetchMock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(realWorldMd)
    });

    const result = await loadTemplatePrompts('visual', 'glassmorphism', 'landing');

    expect(result.customPrompt['zh-CN']).toContain('多行內容');
    expect(result.customPrompt['zh-CN']).toContain('列表項目');
    expect(result.customPrompt['en-US']).toContain('Multi-line content');
    expect(result.customPrompt['en-US']).toContain('List items');
  });
});
