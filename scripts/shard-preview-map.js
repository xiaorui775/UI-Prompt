/**
 * Shard Preview ID Map by Category
 *
 * This script splits the monolithic preview-id-map.json into category-specific shards.
 * This optimization reduces initial load from ~49KB to ~8KB per category shard.
 *
 * OPTIMIZATION: Instead of loading all preview IDs at app init,
 * only load the shard for the requested category.
 *
 * Usage: node scripts/shard-preview-map.js
 *
 * Output:
 *   public/data/preview-id-map-core.json
 *   public/data/preview-id-map-visual.json
 *   public/data/preview-id-map-retro.json
 *   public/data/preview-id-map-interaction.json
 *   public/data/preview-id-map-layout.json
 *   public/data/preview-id-map-index.json (metadata about shards)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KNOWN_CATEGORIES = ['core', 'visual', 'retro', 'interaction', 'layout'];
const INPUT_PATH = path.join(__dirname, '../public/data/preview-id-map.json');
const OUTPUT_DIR = path.join(__dirname, '../public/data');

/**
 * Shard the preview ID map by category
 */
async function shardPreviewMap() {
  console.log('🔧 Sharding preview-id-map.json by category...\n');

  // Check if input file exists
  if (!fs.existsSync(INPUT_PATH)) {
    console.log('⚠️  preview-id-map.json not found, skipping sharding');
    console.log('   Run build first to generate preview-id-map.json');
    return;
  }

  // Read input file
  const inputData = JSON.parse(fs.readFileSync(INPUT_PATH, 'utf-8'));
  const inputSize = fs.statSync(INPUT_PATH).size;

  console.log(`📊 Input: ${Object.keys(inputData).length} entries (${(inputSize / 1024).toFixed(1)}KB)`);

  // Initialize shards
  const shards = {};
  KNOWN_CATEGORIES.forEach((cat) => {
    shards[cat] = {};
  });
  shards['other'] = {}; // For entries that don't match known categories

  // Categorize entries
  for (const [previewId, mapping] of Object.entries(inputData)) {
    const category = mapping.category || 'other';
    const targetShard = KNOWN_CATEGORIES.includes(category) ? category : 'other';
    shards[targetShard][previewId] = mapping;
  }

  // Write shards and collect stats
  const stats = {
    total: Object.keys(inputData).length,
    shards: {},
    generated: new Date().toISOString()
  };

  let totalShardSize = 0;

  for (const [category, data] of Object.entries(shards)) {
    const entryCount = Object.keys(data).length;

    if (entryCount === 0) {
      console.log(`   ⏭️  ${category}: 0 entries (skipped)`);
      continue;
    }

    const outputPath = path.join(OUTPUT_DIR, `preview-id-map-${category}.json`);
    const jsonContent = JSON.stringify(data, null, 0); // Minified
    fs.writeFileSync(outputPath, jsonContent);

    const fileSize = Buffer.byteLength(jsonContent, 'utf-8');
    totalShardSize += fileSize;

    stats.shards[category] = {
      count: entryCount,
      size: fileSize,
      file: `preview-id-map-${category}.json`
    };

    console.log(`   ✅ ${category}: ${entryCount} entries (${(fileSize / 1024).toFixed(1)}KB)`);
  }

  // Write shard index (metadata file for runtime loading)
  const indexPath = path.join(OUTPUT_DIR, 'preview-id-map-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(stats, null, 2));

  // Calculate savings
  const savingsPercent = ((1 - (totalShardSize / inputSize)) * 100).toFixed(1);
  const avgShardSize = totalShardSize / Object.keys(stats.shards).length;

  console.log('\n📈 Summary:');
  console.log(`   Original size: ${(inputSize / 1024).toFixed(1)}KB`);
  console.log(`   Total shards:  ${(totalShardSize / 1024).toFixed(1)}KB`);
  console.log(`   Avg shard:     ${(avgShardSize / 1024).toFixed(1)}KB`);
  console.log(`   Per-request savings: ~${(100 - (avgShardSize / inputSize * 100)).toFixed(0)}% smaller`);
  console.log(`\n✨ Sharding complete! Index written to preview-id-map-index.json`);
}

// Run the script
shardPreviewMap().catch((error) => {
  console.error('❌ Error sharding preview map:', error);
  process.exit(1);
});
