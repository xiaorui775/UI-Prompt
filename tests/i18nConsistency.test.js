/**
 * i18n Consistency Tests
 *
 * Validates that all i18n fields in manifest.json files use the correct language:
 * - zh-CN fields should contain Chinese characters (not English)
 * - en-US fields should contain English characters (not Chinese)
 *
 * This test prevents issues like displaying "HandDrawnSke..." in Chinese pages
 * where the zh-CN field was incorrectly set to English content.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Paths to scan for manifest files
const MANIFEST_PATHS = [
  'src/data/styles/generated',
  'src/data/components'
];

// Regex patterns for language detection
const CHINESE_CHAR_REGEX = /[\u4e00-\u9fff\u3400-\u4dbf]/;
const ONLY_ASCII_REGEX = /^[\x20-\x7F]*$/; // 避免控制字符，從空格(0x20)開始

// Minimum length to check (skip very short strings like "3D")
const MIN_CHECK_LENGTH = 3;

// Fields to check for i18n consistency
const I18N_FIELDS = ['title', 'name', 'description'];

/**
 * Whitelist for proper nouns that don't need Chinese translation
 * These are brand names, product names, or universally recognized terms
 * that are commonly used in their original form in Chinese contexts.
 */
const PROPER_NOUN_WHITELIST = [
  // Brand/Product names (keep in English even in Chinese context)
  'Y2K',
  'Windows 95',
  'Windows 98',
  'Windows XP',
  'macOS',
  'iOS',
  'Android',
  'Frutiger Aero',
  'Fluent Design',
  'Fluent Design 2.0',
  'Material Design',
  'Material You',
  'Bootstrap',
  'Tailwind',
  'Ambient',  // Light effect term
  // Design system names that are often kept in English
  'Neumorphism',
  'Glassmorphism',
  'Skeuomorphism',
];

/**
 * Check if a string is a whitelisted proper noun
 * @param {string} str - String to check
 * @returns {boolean} True if whitelisted
 */
function isWhitelistedProperNoun(str) {
  if (!str || typeof str !== 'string') return false;
  const normalized = str.trim();
  return PROPER_NOUN_WHITELIST.some(noun =>
    normalized.toLowerCase() === noun.toLowerCase()
  );
}

/**
 * Check if a string looks like truncated content (ends with "...")
 * Truncated content is NEVER acceptable and should always be flagged
 * @param {string} str - String to check
 * @returns {boolean} True if looks truncated
 */
function isTruncatedContent(str) {
  if (!str || typeof str !== 'string') return false;
  return str.trim().endsWith('...');
}

/**
 * Check if a string contains Chinese characters
 * @param {string} str - String to check
 * @returns {boolean} True if contains Chinese characters
 */
function containsChinese(str) {
  if (!str || typeof str !== 'string') return false;
  return CHINESE_CHAR_REGEX.test(str);
}

/**
 * Check if a string is ASCII only (English/numbers/symbols)
 * @param {string} str - String to check
 * @returns {boolean} True if ASCII only
 */
function isAsciiOnly(str) {
  if (!str || typeof str !== 'string') return true;
  return ONLY_ASCII_REGEX.test(str);
}

/**
 * Recursively find all manifest.json files in a directory
 * @param {string} dir - Directory to search
 * @returns {string[]} Array of manifest file paths
 */
function findManifestFiles(dir) {
  const manifests = [];

  if (!fs.existsSync(dir)) {
    return manifests;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      manifests.push(...findManifestFiles(fullPath));
    } else if (item.name === 'manifest.json') {
      manifests.push(fullPath);
    }
  }

  return manifests;
}

/**
 * Extract all i18n objects from a manifest
 * @param {Object} manifest - Parsed manifest object
 * @param {string} filePath - File path for error reporting
 * @returns {Array<{path: string, field: string, zhCN: string, enUS: string}>}
 */
function extractI18nFields(manifest, _filePath) {
  const results = [];

  function traverse(obj, currentPath = '') {
    if (!obj || typeof obj !== 'object') return;

    // Check if this object is an i18n object (has zh-CN or en-US keys)
    if (obj['zh-CN'] !== undefined || obj['en-US'] !== undefined) {
      const fieldName = currentPath.split('.').pop();

      if (I18N_FIELDS.includes(fieldName)) {
        results.push({
          path: currentPath,
          field: fieldName,
          zhCN: obj['zh-CN'] || '',
          enUS: obj['en-US'] || ''
        });
      }
      return;
    }

    // Traverse arrays
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        traverse(item, `${currentPath}[${index}]`);
      });
      return;
    }

    // Traverse object properties
    for (const [key, value] of Object.entries(obj)) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      traverse(value, newPath);
    }
  }

  traverse(manifest);
  return results;
}

/**
 * Validate i18n consistency for a single field
 * @param {Object} field - Field object with zhCN and enUS values
 * @returns {{zhCNErrors: string[], enUSErrors: string[]}}
 */
function validateI18nField(field) {
  const errors = {
    zhCNErrors: [],
    enUSErrors: []
  };

  const { zhCN, enUS, path: fieldPath } = field;

  // Skip short strings (like "3D", "UI", etc.)
  const zhCNLen = (zhCN || '').trim().length;
  const enUSLen = (enUS || '').trim().length;

  // ========== Validate zh-CN ==========
  if (zhCN && zhCNLen >= MIN_CHECK_LENGTH) {
    // CRITICAL: Truncated content is NEVER acceptable (e.g., "Material Des...")
    if (isTruncatedContent(zhCN)) {
      errors.zhCNErrors.push(
        `zh-CN value "${zhCN}" appears to be truncated (ends with "...") at ${fieldPath}`
      );
    }
    // Check if it's a whitelisted proper noun (acceptable to keep in English)
    else if (isWhitelistedProperNoun(zhCN)) {
      // Acceptable - proper nouns can stay in English
    }
    // Otherwise, should contain Chinese characters
    else if (!containsChinese(zhCN)) {
      errors.zhCNErrors.push(
        `zh-CN value "${zhCN}" contains no Chinese characters at ${fieldPath}`
      );
    }
  }

  // ========== Validate en-US ==========
  if (enUS && enUSLen >= MIN_CHECK_LENGTH) {
    // en-US should NOT contain Chinese characters
    if (containsChinese(enUS)) {
      errors.enUSErrors.push(
        `en-US value "${enUS}" contains Chinese characters at ${fieldPath}`
      );
    }
  }

  return errors;
}

describe('i18n Consistency', () => {
  let allManifests = [];
  let allI18nIssues = [];

  beforeAll(() => {
    // Collect all manifest files
    for (const relativePath of MANIFEST_PATHS) {
      const fullPath = path.join(projectRoot, relativePath);
      const manifests = findManifestFiles(fullPath);
      allManifests.push(...manifests);
    }

    // Analyze all manifests for i18n issues
    for (const manifestPath of allManifests) {
      try {
        const content = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(content);
        const relativePath = path.relative(projectRoot, manifestPath);
        const i18nFields = extractI18nFields(manifest, relativePath);

        for (const field of i18nFields) {
          const { zhCNErrors, enUSErrors } = validateI18nField(field);

          if (zhCNErrors.length > 0 || enUSErrors.length > 0) {
            allI18nIssues.push({
              file: relativePath,
              field: field.path,
              zhCN: field.zhCN,
              enUS: field.enUS,
              zhCNErrors,
              enUSErrors
            });
          }
        }
      } catch (error) {
        console.error(`Error parsing ${manifestPath}: ${error.message}`);
      }
    }
  });

  describe('zh-CN Fields', () => {
    it('should contain Chinese characters in zh-CN fields (not English)', () => {
      const zhCNIssues = allI18nIssues.filter(
        issue => issue.zhCNErrors.length > 0
      );

      if (zhCNIssues.length > 0) {
        console.error('\n❌ zh-CN fields containing non-Chinese content:');
        zhCNIssues.forEach(issue => {
          console.error(`\n   File: ${issue.file}`);
          console.error(`   Path: ${issue.field}`);
          console.error(`   zh-CN value: "${issue.zhCN}"`);
          console.error(`   en-US value: "${issue.enUS}"`);
          issue.zhCNErrors.forEach(err => console.error(`   Error: ${err}`));
        });
      }

      expect(zhCNIssues).toEqual([]);
    });
  });

  describe('en-US Fields', () => {
    it('should NOT contain Chinese characters in en-US fields', () => {
      const enUSIssues = allI18nIssues.filter(
        issue => issue.enUSErrors.length > 0
      );

      if (enUSIssues.length > 0) {
        console.error('\n❌ en-US fields containing Chinese characters:');
        enUSIssues.forEach(issue => {
          console.error(`\n   File: ${issue.file}`);
          console.error(`   Path: ${issue.field}`);
          console.error(`   zh-CN value: "${issue.zhCN}"`);
          console.error(`   en-US value: "${issue.enUS}"`);
          issue.enUSErrors.forEach(err => console.error(`   Error: ${err}`));
        });
      }

      expect(enUSIssues).toEqual([]);
    });
  });

  describe('Coverage', () => {
    it('should have scanned at least some manifest files', () => {
      expect(allManifests.length).toBeGreaterThan(0);
      // ✅ Scanned manifest files for i18n consistency (removed console.log)
    });
  });
});

// ========== Utility Functions for External Use ==========

/**
 * Scan all manifests and return i18n issues
 * Useful for scripts and CI/CD pipelines
 * @returns {Array} Array of i18n issues
 */
export function scanForI18nIssues() {
  const issues = [];

  for (const relativePath of MANIFEST_PATHS) {
    const fullPath = path.join(projectRoot, relativePath);
    const manifests = findManifestFiles(fullPath);

    for (const manifestPath of manifests) {
      try {
        const content = fs.readFileSync(manifestPath, 'utf-8');
        const manifest = JSON.parse(content);
        const relPath = path.relative(projectRoot, manifestPath);
        const i18nFields = extractI18nFields(manifest, relPath);

        for (const field of i18nFields) {
          const { zhCNErrors, enUSErrors } = validateI18nField(field);

          if (zhCNErrors.length > 0 || enUSErrors.length > 0) {
            issues.push({
              file: relPath,
              field: field.path,
              zhCN: field.zhCN,
              enUS: field.enUS,
              zhCNErrors,
              enUSErrors
            });
          }
        }
      } catch (error) {
        issues.push({
          file: path.relative(projectRoot, manifestPath),
          parseError: error.message
        });
      }
    }
  }

  return issues;
}

// Export utilities for use in other tests or scripts
export {
  containsChinese,
  isAsciiOnly,
  isWhitelistedProperNoun,
  isTruncatedContent,
  findManifestFiles,
  extractI18nFields,
  validateI18nField,
  CHINESE_CHAR_REGEX,
  MIN_CHECK_LENGTH,
  I18N_FIELDS,
  PROPER_NOUN_WHITELIST
};
