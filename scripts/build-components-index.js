#!/usr/bin/env node

/**
 * build-components-index.js
 *
 * 在構建時生成合併的 components-index.json 文件
 * 從已生成的 manifest.json 文件讀取元數據，避免首屏加載時的 30+ 個 HTTP 請求
 *
 * 使用方式：
 *   node scripts/build-components-index.js
 *   或在 package.json 的 build 腳本中調用
 *
 * 輸出：
 *   - public/data/components-index.json       (完整索引)
 *   - public/data/components-index-meta.json  (輕量統計)
 *   - public/data/components-index/{category}.json (分類分片)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('🏗️  Building components index...\n');

/**
 * Load the component registry file
 */
function loadRegistry() {
  const registryPath = path.join(projectRoot, 'src/data/components/_registry.json');
  const content = fs.readFileSync(registryPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Parse prompt markdown file to extract bilingual content
 * File format uses headers like:
 *   ## 中文版本 (zh-CN)
 *   ## English Version (en-US)
 *
 * @param {string} mdContent - Raw markdown content
 * @returns {Object} { 'zh-CN': string, 'en-US': string }
 */
function parsePromptMd(mdContent) {
  const result = { 'zh-CN': '', 'en-US': '' };
  if (!mdContent) return result;

  // Match Chinese section: ## 中文版本 (zh-CN) until next ## or end
  const zhMatch = mdContent.match(/## 中文版本[^\n]*\n([\s\S]*?)(?=\n## |$)/i);
  // Match English section: ## English Version (en-US) until next ## or end
  const enMatch = mdContent.match(/## English Version[^\n]*\n([\s\S]*?)(?=\n## |$)/i);

  if (zhMatch) result['zh-CN'] = zhMatch[1].trim();
  if (enMatch) result['en-US'] = enMatch[1].trim();

  return result;
}

/**
 * Load prompts for a component
 * @param {string} category - Category ID
 * @param {string} componentId - Component ID
 * @returns {Object} { customPrompt: {...} | null, stylePrompt: {...} | null }
 */
function loadComponentPrompts(category, componentId) {
  const promptsDir = path.join(projectRoot, 'public/data/prompts/components', category, componentId);
  const result = { customPrompt: null, stylePrompt: null };

  try {
    // Load custom.md
    const customPath = path.join(promptsDir, 'custom.md');
    if (fs.existsSync(customPath)) {
      const parsed = parsePromptMd(fs.readFileSync(customPath, 'utf-8'));
      // Only include if at least one language has content
      if (parsed['zh-CN'] || parsed['en-US']) {
        result.customPrompt = parsed;
      }
    }

    // Load style.md
    const stylePath = path.join(promptsDir, 'style.md');
    if (fs.existsSync(stylePath)) {
      const parsed = parsePromptMd(fs.readFileSync(stylePath, 'utf-8'));
      // Only include if at least one language has content
      if (parsed['zh-CN'] || parsed['en-US']) {
        result.stylePrompt = parsed;
      }
    }
  } catch (error) {
    // Silently ignore - prompts are optional
  }

  return result;
}

/**
 * Load first variant's demo content for preview
 * @param {string} category - Category ID
 * @param {string} componentId - Component ID
 * @param {string} variantId - First variant ID
 * @returns {Object} { demoHTML, customStyles }
 */
function loadPreviewContent(category, componentId, variantId) {
  const basePath = path.join(projectRoot, 'public/data/content/components', category, componentId);

  // Try variant-specific content first
  const variantHtmlPath = path.join(basePath, variantId, 'demo.html');
  const variantCssPath = path.join(basePath, variantId, 'demo.css');

  if (fs.existsSync(variantHtmlPath)) {
    return {
      demoHTML: fs.readFileSync(variantHtmlPath, 'utf-8'),
      customStyles: fs.existsSync(variantCssPath) ? fs.readFileSync(variantCssPath, 'utf-8') : ''
    };
  }

  // Try default content
  const defaultHtmlPath = path.join(basePath, 'default', 'demo.html');
  const defaultCssPath = path.join(basePath, 'default', 'demo.css');

  if (fs.existsSync(defaultHtmlPath)) {
    return {
      demoHTML: fs.readFileSync(defaultHtmlPath, 'utf-8'),
      customStyles: fs.existsSync(defaultCssPath) ? fs.readFileSync(defaultCssPath, 'utf-8') : ''
    };
  }

  return { demoHTML: '', customStyles: '' };
}

/**
 * Load component metadata from generated manifest.json
 * @param {string} category - Category ID (navigation, dataDisplay, etc.)
 * @param {string} componentId - Component ID (breadcrumbs, tabs, etc.)
 * @returns {Object|null} Component metadata or null if not found
 */
function loadComponentMetadata(category, componentId) {
  try {
    const manifestPath = path.join(
      projectRoot,
      'src/data/components/generated',
      category,
      componentId,
      'manifest.json'
    );

    // Check if file exists
    if (!fs.existsSync(manifestPath)) {
      return null;
    }

    // Read and parse the manifest
    const content = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(content);

    // Load prompts for this component
    const prompts = loadComponentPrompts(category, componentId);

    // Get first variant ID for preview content
    const firstVariant = manifest.variants?.[0];
    const firstVariantId = firstVariant?.id || 'default';

    // Load preview content (first variant's demo)
    const preview = loadPreviewContent(category, componentId, firstVariantId);

    // Extract metadata for the index
    return {
      id: manifest.id || componentId,
      category: category,
      title: manifest.component?.name || {},
      description: manifest.component?.description || {},
      tags: manifest.component?.tags || [],
      relatedComponents: manifest.component?.relatedComponents || [],
      variantsCount: Array.isArray(manifest.variants) ? manifest.variants.length : 0,
      customPrompt: prompts.customPrompt,
      stylePrompt: prompts.stylePrompt,
      // Preview content for card display
      demoHTML: preview.demoHTML,
      customStyles: preview.customStyles
    };
  } catch (error) {
    console.error(`   Error reading manifest for ${category}/${componentId}:`, error.message);
    return null;
  }
}

/**
 * Build the consolidated index
 */
function buildIndex() {
  const registry = loadRegistry();
  const output = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    categories: {}
  };

  let totalComponents = 0;
  let successCount = 0;
  let failedCount = 0;

  // Process each category
  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    console.log(`📁 Processing category: ${categoryId}`);

    output.categories[categoryId] = {
      name: categoryConfig.name,
      key: categoryConfig.key,
      path: categoryConfig.path,
      components: []
    };

    // Process each component in this category
    const componentIds = categoryConfig.components || [];
    for (const componentId of componentIds) {
      totalComponents++;
      process.stdout.write(`   ⏳ ${componentId}...`);

      const metadata = loadComponentMetadata(categoryId, componentId);

      if (metadata) {
        output.categories[categoryId].components.push(metadata);
        successCount++;
        process.stdout.write(' ✅\n');
      } else {
        failedCount++;
        process.stdout.write(' ❌\n');
      }
    }

    console.log('');
  }

  return { output, stats: { totalComponents, successCount, failedCount } };
}

/**
 * Write the output file
 */
function writeOutput(data) {
  const outputPath = path.join(projectRoot, 'public/data/components-index.json');

  // Ensure directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write with pretty formatting
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

  return outputPath;
}

/**
 * Write category-level sharded indexes for progressive loading
 * Outputs: /public/data/components-index/{category}.json
 */
function writeCategoryShards(data) {
  const shardsDir = path.join(projectRoot, 'public/data/components-index');

  // Ensure directory exists
  if (!fs.existsSync(shardsDir)) {
    fs.mkdirSync(shardsDir, { recursive: true });
  }

  const shardPaths = [];
  let totalSize = 0;

  for (const [categoryId, categoryData] of Object.entries(data.categories)) {
    const shardPath = path.join(shardsDir, `${categoryId}.json`);
    const shard = {
      version: data.version,
      category: categoryId,
      name: categoryData.name,
      key: categoryData.key,
      path: categoryData.path,
      components: categoryData.components,
      generatedAt: data.generatedAt
    };

    fs.writeFileSync(shardPath, JSON.stringify(shard, null, 2), 'utf-8');
    const size = fs.statSync(shardPath).size / 1024;
    totalSize += size;
    shardPaths.push({ path: shardPath, category: categoryId, size: size.toFixed(2) });
  }

  return { shardPaths, totalSize };
}

/**
 * Write lightweight metadata-only index for fast stats
 * Outputs: /public/data/components-index-meta.json
 */
function writeMetadataIndex(data) {
  const metadataPath = path.join(projectRoot, 'public/data/components-index-meta.json');

  const metadata = {
    version: data.version,
    generatedAt: data.generatedAt,
    categories: {}
  };

  let totalComponents = 0;

  for (const [categoryId, categoryData] of Object.entries(data.categories)) {
    const count = categoryData.components.length;
    totalComponents += count;

    metadata.categories[categoryId] = {
      name: categoryData.name,
      key: categoryData.key,
      count: count
    };
  }

  metadata.totalComponents = totalComponents;

  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8');
  const size = fs.statSync(metadataPath).size / 1024;

  return { path: metadataPath, size: size.toFixed(2), totalComponents };
}

/**
 * Main execution
 */
function main() {
  try {
    const startTime = Date.now();

    // Build the index
    const { output, stats } = buildIndex();

    // Write main consolidated index file
    const outputPath = writeOutput(output);
    const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

    // Write category-level sharded indexes for progressive loading
    const { shardPaths, totalSize: shardsTotalSize } = writeCategoryShards(output);

    // Write lightweight metadata-only index for fast stats
    const { path: metadataPath, size: metadataSize, totalComponents } = writeMetadataIndex(output);

    // Print summary
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('✨ Build complete!\n');
    console.log('📊 Statistics:');
    console.log(`   Total components: ${stats.totalComponents}`);
    console.log(`   Success: ${stats.successCount}`);
    console.log(`   Failed: ${stats.failedCount}`);
    console.log('\n📁 Output files:');
    console.log(`   Main index: ${outputPath}`);
    console.log(`      Size: ${fileSize} KB`);
    console.log(`   Metadata index (for fast stats): ${metadataPath}`);
    console.log(`      Size: ${metadataSize} KB`);
    console.log(`   Category shards (for progressive loading):`);
    for (const shard of shardPaths) {
      console.log(`      ${shard.category}: ${shard.size} KB`);
    }
    console.log(`      Total: ${shardsTotalSize.toFixed(2)} KB`);
    console.log(`\n⏱️  Time: ${elapsed}s`);

    if (stats.failedCount > 0) {
      console.warn(`\n⚠️  ${stats.failedCount} components failed to load. These components may not have manifest.json files yet.`);
      process.exit(0); // Don't fail the build - missing manifests are OK
    }

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run the script
main();
