/**
 * Cleanup Duplicate Templates Script
 *
 * 功能：
 * 1. 識別 manifest.json 中的重複模板（bare ID vs proper ID）
 * 2. 移除 bare ID 條目，保留規範命名的版本
 * 3. 刪除對應的 content 目錄
 *
 * 用法：
 *   node scripts/cleanup-duplicate-templates.js             # Dry-run 預覽
 *   node scripts/cleanup-duplicate-templates.js --fix       # 執行清理
 *   node scripts/cleanup-duplicate-templates.js --backup    # 創建備份後執行
 */

import fs from 'fs';
import path from 'path';

const MANIFEST_ROOT = 'src/data/styles/generated';
const CONTENT_ROOT = 'public/data/content/styles';

const FIX_MODE = process.argv.includes('--fix');
const BACKUP_MODE = process.argv.includes('--backup');

// 確認的 24 個重複模板（保留 proper ID，刪除 bare ID）
const DUPLICATES = [
  // retro category
  { category: 'retro', family: 'frutigerAero', bareId: 'frutigerAeroOS', properId: 'retro-frutiger-aero-os' },
  { category: 'retro', family: 'darkAcademia', bareId: 'darkAcademiaLibrary', properId: 'retro-dark-academia-library' },
  { category: 'retro', family: 'artDeco', bareId: 'artDecoLuxury', properId: 'retro-art-deco-luxury' },
  { category: 'retro', family: 'arcadeCRT', bareId: 'arcadeHall', properId: 'retro-arcadeCRT-arcade-hall' },
  { category: 'retro', family: 'arcadeCRT', bareId: 'cyberpunkControl', properId: 'retro-arcadeCRT-cyberpunk-control' },
  // visual category
  { category: 'visual', family: 'monochrome', bareId: 'monochrome', properId: 'visual-monochrome' },
  { category: 'visual', family: 'holographicFoil', bareId: 'holographicFoil', properId: 'visual-holographicFoil-holographicFoil-landing' },
  { category: 'visual', family: 'paperCutout', bareId: 'paperCutout', properId: 'visual-paperCutout-paperCutout-showcase' },
  { category: 'visual', family: 'darkMode', bareId: 'darkMode', properId: 'visual-darkMode-darkMode-dashboard' },
  { category: 'visual', family: 'neonCyberpunk', bareId: 'cyberpunk', properId: 'visual-neon-cyberpunk' },
  { category: 'visual', family: '3dElements', bareId: '3dElements', properId: 'visual-tech-3d-elements' },
  { category: 'visual', family: 'vaporwave', bareId: 'vaporwave', properId: 'visual-vaporwave-vaporwave-aesthetic' },
  { category: 'visual', family: 'bentoGrids', bareId: 'bentoGrids', properId: 'visual-tech-bento-grids' },
  { category: 'visual', family: 'neonNoir', bareId: 'neonNoir', properId: 'visual-neonNoir-nightcity-fm' },
  { category: 'visual', family: 'glassmorphism', bareId: 'Glassmorphism', properId: 'visual-glassmorphism-glassmorphism-landing' },
  { category: 'visual', family: 'glassmorphism', bareId: 'Landing', properId: 'visual-glassmorphism-glassmorphism-landing' },
  { category: 'visual', family: 'liminalSpace', bareId: 'liminalSpaceVacant', properId: 'visual-liminalSpace-vacant-space' },
  { category: 'visual', family: 'generativeArt', bareId: 'generativeArt', properId: 'visual-tech-generative-art' },
  { category: 'visual', family: 'handDrawnSketch', bareId: 'handDrawnSketch', properId: 'visual-handDrawnSketch' },
  { category: 'visual', family: 'gradients', bareId: 'gradients', properId: 'visual-tech-gradients' },
  { category: 'visual', family: 'scandi', bareId: 'scandi', properId: 'visual-scandi-scandi-interior' },
  { category: 'visual', family: 'y2k', bareId: 'y2k', properId: 'visual-y2k' },
  { category: 'visual', family: 'antiDesign', bareId: 'antiDesign', properId: 'visual-antiDesign-studio' },
  { category: 'visual', family: 'memphis', bareId: 'memphis', properId: 'visual-memphis-memphis-creative' },
];

const results = {
  checked: 0,
  foundDuplicates: 0,
  manifestsUpdated: 0,
  dirsRemoved: 0,
  skipped: [],
  errors: [],
  backupDir: null,
};

function createBackup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupDir = `backups/templates-cleanup-${timestamp}`;

  fs.mkdirSync(backupDir, { recursive: true });
  results.backupDir = backupDir;

  console.log(`\n📦 Creating backup in ${backupDir}/\n`);

  // Backup affected manifest files
  const manifestBackupDir = path.join(backupDir, 'manifests');
  fs.mkdirSync(manifestBackupDir, { recursive: true });

  const affectedFamilies = new Set(DUPLICATES.map(d => `${d.category}/${d.family}`));

  for (const familyPath of affectedFamilies) {
    const manifestPath = path.join(MANIFEST_ROOT, familyPath, 'manifest.json');
    if (fs.existsSync(manifestPath)) {
      const targetDir = path.join(manifestBackupDir, familyPath);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.copyFileSync(manifestPath, path.join(targetDir, 'manifest.json'));
    }
  }

  // Backup affected content directories
  const contentBackupDir = path.join(backupDir, 'content');
  fs.mkdirSync(contentBackupDir, { recursive: true });

  for (const dup of DUPLICATES) {
    const contentPath = path.join(CONTENT_ROOT, dup.category, dup.family, dup.bareId);
    if (fs.existsSync(contentPath)) {
      const targetDir = path.join(contentBackupDir, dup.category, dup.family, dup.bareId);
      fs.mkdirSync(path.dirname(targetDir), { recursive: true });
      fs.cpSync(contentPath, targetDir, { recursive: true });
    }
  }

  console.log(`   ✅ Backed up ${affectedFamilies.size} manifests`);
  console.log(`   ✅ Backed up content directories\n`);
}

function processManifest(category, family, bareIds) {
  const manifestPath = path.join(MANIFEST_ROOT, category, family, 'manifest.json');

  if (!fs.existsSync(manifestPath)) {
    results.errors.push(`Manifest not found: ${manifestPath}`);
    return false;
  }

  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const originalCount = manifest.templates?.length || 0;

    // Filter out bare ID templates
    manifest.templates = (manifest.templates || []).filter(t => !bareIds.includes(t.id));

    const removedCount = originalCount - manifest.templates.length;

    if (removedCount > 0) {
      if (FIX_MODE) {
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
      }
      results.manifestsUpdated++;
      return removedCount;
    }

    return 0;
  } catch (e) {
    results.errors.push(`Error processing ${manifestPath}: ${e.message}`);
    return false;
  }
}

function removeContentDir(category, family, bareId) {
  const contentPath = path.join(CONTENT_ROOT, category, family, bareId);

  if (!fs.existsSync(contentPath)) {
    return false; // Directory doesn't exist, nothing to remove
  }

  if (FIX_MODE) {
    try {
      fs.rmSync(contentPath, { recursive: true });
      results.dirsRemoved++;
      return true;
    } catch (e) {
      results.errors.push(`Error removing ${contentPath}: ${e.message}`);
      return false;
    }
  }

  return true; // Would be removed in fix mode
}

function runCleanup() {
  console.log('\n' + '═'.repeat(80));
  console.log('  🧹 Duplicate Templates Cleanup');
  console.log('═'.repeat(80));
  console.log(`\nMode: ${FIX_MODE ? '🔧 FIX (will remove duplicates)' : '📊 DRY RUN (preview only)'}`);

  if (BACKUP_MODE && FIX_MODE) {
    createBackup();
  }

  console.log('\n' + '─'.repeat(80));
  console.log('\n📋 Processing duplicates:\n');

  // Group by family for efficient manifest processing
  const byFamily = {};
  for (const dup of DUPLICATES) {
    const key = `${dup.category}/${dup.family}`;
    if (!byFamily[key]) {
      byFamily[key] = { category: dup.category, family: dup.family, bareIds: [], properIds: [] };
    }
    byFamily[key].bareIds.push(dup.bareId);
    byFamily[key].properIds.push(dup.properId);
  }

  // Process each family
  for (const [familyKey, data] of Object.entries(byFamily)) {
    console.log(`\n   📂 ${familyKey}/`);

    // Check if proper IDs exist in manifest
    const manifestPath = path.join(MANIFEST_ROOT, data.category, data.family, 'manifest.json');
    let hasProperIds = false;

    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const templateIds = new Set((manifest.templates || []).map(t => t.id));
        hasProperIds = data.properIds.some(id => templateIds.has(id));

        // Show what will be removed
        for (let i = 0; i < data.bareIds.length; i++) {
          const bareId = data.bareIds[i];
          const properId = data.properIds[i];
          const bareExists = templateIds.has(bareId);
          const properExists = templateIds.has(properId);

          results.checked++;

          if (bareExists && properExists) {
            results.foundDuplicates++;
            const status = FIX_MODE ? '✅ REMOVED' : '⚠️  WILL REMOVE';
            console.log(`      ${status}: "${bareId}" (keeping "${properId}")`);
          } else if (bareExists && !properExists) {
            results.skipped.push({ familyKey, bareId, reason: 'proper ID not found' });
            console.log(`      ⏭️  SKIPPED: "${bareId}" (proper ID "${properId}" not found)`);
          } else if (!bareExists) {
            console.log(`      ℹ️  NOT FOUND: "${bareId}" (already removed or doesn't exist)`);
          }
        }
      } catch (e) {
        results.errors.push(`Error reading ${manifestPath}: ${e.message}`);
      }
    }

    // Update manifest
    if (FIX_MODE) {
      processManifest(data.category, data.family, data.bareIds);
    }

    // Remove content directories
    for (const bareId of data.bareIds) {
      const contentPath = path.join(CONTENT_ROOT, data.category, data.family, bareId);
      if (fs.existsSync(contentPath)) {
        if (FIX_MODE) {
          removeContentDir(data.category, data.family, bareId);
          console.log(`      🗑️  Removed content dir: ${bareId}/`);
        } else {
          console.log(`      📁 Would remove content dir: ${bareId}/`);
        }
      }
    }
  }

  // Print summary
  console.log('\n' + '═'.repeat(80));
  console.log('\n📊 Summary\n');
  console.log(`   Total duplicates defined: ${DUPLICATES.length}`);
  console.log(`   Templates checked: ${results.checked}`);
  console.log(`   Duplicates found: ${results.foundDuplicates}`);

  if (FIX_MODE) {
    console.log(`   Manifests updated: ${results.manifestsUpdated}`);
    console.log(`   Content dirs removed: ${results.dirsRemoved}`);
  }

  if (results.skipped.length > 0) {
    console.log(`   Skipped: ${results.skipped.length}`);
  }

  if (results.errors.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log('\n❌ Errors:\n');
    results.errors.forEach(err => console.log(`   ${err}`));
  }

  if (results.skipped.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log('\n⏭️  Skipped items:\n');
    results.skipped.forEach(item => {
      console.log(`   ${item.familyKey}/${item.bareId}: ${item.reason}`);
    });
  }

  console.log('\n' + '═'.repeat(80));

  if (FIX_MODE) {
    if (results.backupDir) {
      console.log(`\n📦 Backup saved to: ${results.backupDir}/`);
    }
    console.log('\n✨ Cleanup complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run: npm run build:styles-index');
    console.log('   2. Run: npm run build:preview-id-map');
    console.log('   3. Restart dev server if running');
    console.log('   4. Verify templates in UI\n');
  } else {
    console.log('\n💡 This was a dry run. To apply changes, run:');
    console.log('   node scripts/cleanup-duplicate-templates.js --fix');
    console.log('\n   Or with backup:');
    console.log('   node scripts/cleanup-duplicate-templates.js --backup --fix\n');
  }
}

// Run cleanup
runCleanup();
