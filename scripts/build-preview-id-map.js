#!/usr/bin/env node

/**
 * build-preview-id-map.js
 *
 * Build-time generation of preview ID mapping
 * Scans manifest.json files and content directories to create
 * a consolidated preview-id-map.json for runtime use
 *
 * Output: public/data/preview-id-map.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('\n\u{1F5FA}\uFE0F  Building preview ID map...\n');

/**
 * Load the registry file
 */
function loadRegistry() {
  const registryPath = path.join(projectRoot, 'src/data/styles/_registry.json');
  const content = fs.readFileSync(registryPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Load family manifest
 * @param {string} category
 * @param {string} familyId
 */
function loadFamilyManifest(category, familyId) {
  try {
    const manifestPath = path.join(
      projectRoot,
      'src/data/styles/generated',
      category,
      familyId,
      'manifest.json'
    );

    if (!fs.existsSync(manifestPath)) {
      return null;
    }

    const content = fs.readFileSync(manifestPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Load all template JSON files in a family directory
 * These contain individual template configs with potential `previews` arrays
 * @param {string} category
 * @param {string} familyId
 * @returns {Array<{id: string, previews: Array}>}
 */
function loadTemplateConfigs(category, familyId) {
  const familyDir = path.join(
    projectRoot,
    'src/data/styles/generated',
    category,
    familyId
  );

  if (!fs.existsSync(familyDir)) {
    return [];
  }

  try {
    const files = fs.readdirSync(familyDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.json') && dirent.name !== 'manifest.json')
      .map(dirent => dirent.name);

    const configs = [];
    for (const file of files) {
      try {
        const filePath = path.join(familyDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const config = JSON.parse(content);
        if (config.id && config.previews && Array.isArray(config.previews)) {
          configs.push({
            id: config.id,
            previews: config.previews
          });
        }
      } catch {
        // Skip invalid JSON files
      }
    }
    return configs;
  } catch {
    return [];
  }
}

/**
 * Scan content directory for template directories
 * @param {string} category
 * @param {string} familyId
 */
function scanContentDirectory(category, familyId) {
  const contentDir = path.join(
    projectRoot,
    'public/data/content/styles',
    category,
    familyId
  );

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  try {
    return fs.readdirSync(contentDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch {
    return [];
  }
}

/**
 * Generate common alias variations for a familyId
 * @param {string} familyId
 */
function generateAliases(familyId) {
  const aliases = [familyId];

  // Convert camelCase to kebab-case
  const kebabCase = familyId.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  if (kebabCase !== familyId.toLowerCase()) {
    aliases.push(kebabCase);
  }

  // Lowercase version
  const lowercase = familyId.toLowerCase();
  if (!aliases.includes(lowercase)) {
    aliases.push(lowercase);
  }

  return aliases;
}

/**
 * Build the preview ID map
 */
function buildPreviewIdMap() {
  const registry = loadRegistry();
  const mapping = {};
  let totalMappings = 0;

  // Process each category
  for (const [categoryId, categoryConfig] of Object.entries(registry.categories)) {
    console.log(`\u{1F4C1} Processing category: ${categoryId}`);

    // Process each family
    for (const familyId of categoryConfig.families) {
      process.stdout.write(`   \u{1F4E6} ${familyId}...`);

      const manifest = loadFamilyManifest(categoryId, familyId);
      const contentDirs = scanContentDirectory(categoryId, familyId);
      const templateConfigs = loadTemplateConfigs(categoryId, familyId);
      let familyMappings = 0;

      // Strategy 1: From manifest.templates
      if (manifest?.templates) {
        for (const template of manifest.templates) {
          const templateId = typeof template === 'string' ? template : template.id;

          // Full ID format: category-familyId-templateId
          const fullId = `${categoryId}-${familyId}-${templateId}`;
          if (!mapping[fullId]) {
            mapping[fullId] = { category: categoryId, familyId, templateId };
            familyMappings++;
          }

          // Short ID format: just templateId (for common templates)
          if (!mapping[templateId]) {
            mapping[templateId] = { category: categoryId, familyId, templateId };
            familyMappings++;
          }
        }
      }

      // Strategy 1.5: From individual template config files (previews arrays)
      // Each template JSON file may have a `previews` array with nested preview IDs
      for (const templateConfig of templateConfigs) {
        const associatedTemplateId = templateConfig.id;

        for (const preview of templateConfig.previews) {
          const previewId = preview.id || preview.previewId;
          if (previewId && associatedTemplateId) {
            // Full ID format: category-familyId-previewId
            const fullId = `${categoryId}-${familyId}-${previewId}`;
            if (!mapping[fullId]) {
              mapping[fullId] = {
                category: categoryId,
                familyId,
                templateId: associatedTemplateId,
                previewId
              };
              familyMappings++;
            }

            // Short ID format: just previewId (avoid conflicts)
            if (!mapping[previewId]) {
              mapping[previewId] = {
                category: categoryId,
                familyId,
                templateId: associatedTemplateId,
                previewId
              };
              familyMappings++;
            }
          }
        }
      }

      // Strategy 2: From content directory scan
      for (const dirName of contentDirs) {
        // Full ID format
        const fullId = `${categoryId}-${familyId}-${dirName}`;
        if (!mapping[fullId]) {
          mapping[fullId] = { category: categoryId, familyId, templateId: dirName };
          familyMappings++;
        }

        // Short ID format
        if (!mapping[dirName]) {
          mapping[dirName] = { category: categoryId, familyId, templateId: dirName };
          familyMappings++;
        }
      }

      // Strategy 3: Family-level aliases (for first template as default)
      if (contentDirs.length > 0) {
        const defaultTemplate = contentDirs[0];
        const aliases = generateAliases(familyId);

        for (const alias of aliases) {
          if (!mapping[alias]) {
            mapping[alias] = { category: categoryId, familyId, templateId: defaultTemplate };
            familyMappings++;
          }
        }
      }

      totalMappings += familyMappings;
      process.stdout.write(` \u2705 (${familyMappings} mappings)\n`);
    }

    console.log('');
  }

  return { mapping, totalMappings };
}

/**
 * Write output JSON file
 */
function writeOutput(mapping) {
  const outputPath = path.join(projectRoot, 'public/data/preview-id-map.json');

  // Ensure directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write with pretty formatting
  fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2), 'utf-8');

  return outputPath;
}

/**
 * Main execution
 */
function main() {
  try {
    const startTime = Date.now();

    // Build the mapping
    const { mapping, totalMappings } = buildPreviewIdMap();

    // Write output
    const outputPath = writeOutput(mapping);
    const fileSize = (fs.statSync(outputPath).size / 1024).toFixed(2);

    // Print summary
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log('\u2728 Build complete!\n');
    console.log('\u{1F4CA} Statistics:');
    console.log(`   Total mappings: ${totalMappings}`);
    console.log(`   Output: ${outputPath}`);
    console.log(`   Size: ${fileSize} KB`);
    console.log(`\n\u23F1\uFE0F  Time: ${elapsed}s`);

    process.exit(0);
  } catch (error) {
    console.error('\n\u274C Build failed:', error);
    process.exit(1);
  }
}

// Run the script
main();
