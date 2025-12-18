#!/usr/bin/env node

/**
 * normalize-permissions.js
 *
 * Ensures all content files have correct permissions (644)
 * Run this script:
 * - After adding new templates
 * - Before committing changes
 * - As part of CI/CD pipeline
 *
 * Usage:
 *   node scripts/normalize-permissions.js          # Check only
 *   node scripts/normalize-permissions.js --fix    # Fix permissions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const CONTENT_ROOT = path.join(projectRoot, 'public/data/content/styles');
const TARGET_PERMISSION = 0o644;
const FIX_MODE = process.argv.includes('--fix');

/**
 * Get file permissions as octal
 */
function getFilePermissions(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mode & 0o777;
}

/**
 * Format permissions as octal string
 */
function formatPermissions(mode) {
  return mode.toString(8).padStart(3, '0');
}

/**
 * Recursively find content files
 */
function findContentFiles(dir, extensions = ['.html', '.css', '.jsx', '.js']) {
  const results = [];

  function traverse(currentPath) {
    try {
      const items = fs.readdirSync(currentPath, { withFileTypes: true });

      for (const item of items) {
        const fullPath = path.join(currentPath, item.name);

        if (item.isDirectory()) {
          traverse(fullPath);
        } else if (extensions.some(ext => item.name.endsWith(ext))) {
          results.push(fullPath);
        }
      }
    } catch (err) {
      console.error(`Error reading directory ${currentPath}:`, err.message);
    }
  }

  if (fs.existsSync(dir)) {
    traverse(dir);
  }

  return results;
}

/**
 * Main function
 */
function main() {
  console.log('\n🔒 Permission Normalization Script\n');
  console.log('═'.repeat(80));
  console.log(`Mode: ${FIX_MODE ? '🔧 FIX (will update permissions)' : '📊 CHECK ONLY'}`);
  console.log(`Target permission: ${formatPermissions(TARGET_PERMISSION)} (644)`);
  console.log(`Content root: ${CONTENT_ROOT}`);
  console.log('═'.repeat(80));

  if (!fs.existsSync(CONTENT_ROOT)) {
    console.error(`\n❌ Content directory not found: ${CONTENT_ROOT}\n`);
    process.exit(1);
  }

  const files = findContentFiles(CONTENT_ROOT);
  const issues = [];

  console.log(`\nScanning ${files.length} files...\n`);

  for (const file of files) {
    const currentMode = getFilePermissions(file);

    if (currentMode !== TARGET_PERMISSION) {
      issues.push({
        file,
        relativePath: path.relative(CONTENT_ROOT, file),
        current: formatPermissions(currentMode),
        target: formatPermissions(TARGET_PERMISSION)
      });

      if (FIX_MODE) {
        try {
          fs.chmodSync(file, TARGET_PERMISSION);
        } catch (err) {
          console.error(`  ❌ Failed to fix ${file}: ${err.message}`);
        }
      }
    }
  }

  // Summary
  console.log('\n📊 Summary\n');
  console.log(`   Total files scanned: ${files.length}`);
  console.log(`   Files with incorrect permissions: ${issues.length}`);

  if (issues.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log(`\n${FIX_MODE ? '✅ Fixed' : '⚠️  Found'} files:\n`);

    // Group by directory
    const byDir = {};
    for (const issue of issues) {
      const dir = path.dirname(issue.relativePath);
      if (!byDir[dir]) byDir[dir] = [];
      byDir[dir].push(issue);
    }

    for (const [dir, dirIssues] of Object.entries(byDir)) {
      console.log(`   📁 ${dir}/`);
      for (const issue of dirIssues) {
        const status = FIX_MODE ? '✅' : '❌';
        console.log(`      ${status} ${path.basename(issue.file)} (${issue.current} → ${issue.target})`);
      }
    }
  }

  console.log('\n' + '═'.repeat(80));

  if (FIX_MODE) {
    console.log(`\n✨ Fixed ${issues.length} files\n`);
  } else if (issues.length > 0) {
    console.log('\n💡 To fix permissions, run:');
    console.log('   node scripts/normalize-permissions.js --fix\n');
    console.log('   Or use npm script:');
    console.log('   npm run fix:permissions\n');
    process.exit(1); // Exit with error for CI/CD
  } else {
    console.log('\n✅ All files have correct permissions!\n');
  }
}

main();
