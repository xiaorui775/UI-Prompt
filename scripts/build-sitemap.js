#!/usr/bin/env node
/**
 * Sitemap Generator for UI Style Prompt
 * Generates XML sitemaps from styles-index.json and components-index.json
 *
 * Usage: node scripts/build-sitemap.js
 * Output:
 *   - public/sitemap.xml (sitemap index)
 *   - public/sitemap-static.xml (static pages)
 *   - public/sitemap-zh.xml (Chinese dynamic pages)
 *   - public/sitemap-en.xml (English dynamic pages)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.uiprompt.site';
const LANGUAGES = ['zh', 'en'];
const OUTPUT_DIR = path.join(__dirname, '../public');

// Static pages configuration
const STATIC_PAGES = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: '/styles', priority: 0.9, changefreq: 'weekly' },
  { path: '/components', priority: 0.9, changefreq: 'weekly' },
  { path: '/layouts', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.5, changefreq: 'monthly' },
];

/**
 * Generate XML for a single URL entry
 */
function generateUrlEntry(url, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate XML sitemap header
 */
function generateSitemapHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
}

/**
 * Generate XML sitemap footer
 */
function generateSitemapFooter() {
  return '</urlset>';
}

/**
 * Generate sitemap index XML
 */
function generateSitemapIndex(sitemaps) {
  const entries = sitemaps
    .map(
      (sitemap) => `  <sitemap>
    <loc>${BASE_URL}/${sitemap.name}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

/**
 * Generate static sitemap (pages common to both languages)
 */
function generateStaticSitemap(lastmod) {
  const urls = [];

  for (const lang of LANGUAGES) {
    for (const page of STATIC_PAGES) {
      const url = `${BASE_URL}/${lang}${page.path}`;
      urls.push(generateUrlEntry(url, lastmod, page.changefreq, page.priority));
    }
  }

  return `${generateSitemapHeader()}
${urls.join('\n')}
${generateSitemapFooter()}`;
}

/**
 * Generate dynamic sitemap for a specific language
 */
function generateDynamicSitemap(stylesIndex, componentsIndex, lang, lastmod) {
  const urls = [];

  // Add style preview pages
  if (stylesIndex?.categories) {
    for (const [, category] of Object.entries(stylesIndex.categories)) {
      if (category.families) {
        for (const family of category.families) {
          const url = `${BASE_URL}/${lang}/styles/preview/${family.familyId}`;
          urls.push(generateUrlEntry(url, lastmod, 'monthly', 0.8));
        }
      }
    }
  }

  // Add component pages (if componentsIndex exists)
  if (componentsIndex?.categories) {
    for (const [categoryId, category] of Object.entries(
      componentsIndex.categories
    )) {
      if (category.components) {
        for (const component of category.components) {
          const url = `${BASE_URL}/${lang}/components/${categoryId}/${component.id}`;
          urls.push(generateUrlEntry(url, lastmod, 'monthly', 0.7));
        }
      }
    }
  }

  return `${generateSitemapHeader()}
${urls.join('\n')}
${generateSitemapFooter()}`;
}

/**
 * Main function
 */
async function main() {
  console.log('🗺️  Generating sitemaps...');

  const today = new Date().toISOString().split('T')[0];

  // Load styles index
  let stylesIndex = null;
  const stylesIndexPath = path.join(OUTPUT_DIR, 'data/styles-index.json');
  if (fs.existsSync(stylesIndexPath)) {
    stylesIndex = JSON.parse(fs.readFileSync(stylesIndexPath, 'utf-8'));
    console.log('  ✓ Loaded styles-index.json');
  } else {
    console.warn('  ⚠ styles-index.json not found');
  }

  // Load components index (optional)
  let componentsIndex = null;
  const componentsIndexPath = path.join(OUTPUT_DIR, 'data/components-index.json');
  if (fs.existsSync(componentsIndexPath)) {
    componentsIndex = JSON.parse(fs.readFileSync(componentsIndexPath, 'utf-8'));
    console.log('  ✓ Loaded components-index.json');
  } else {
    console.log('  ℹ components-index.json not found (skipping)');
  }

  // Count URLs
  let styleCount = 0;
  if (stylesIndex?.categories) {
    for (const [, category] of Object.entries(stylesIndex.categories)) {
      styleCount += category.families?.length || 0;
    }
  }

  let componentCount = 0;
  if (componentsIndex?.categories) {
    for (const [, category] of Object.entries(componentsIndex.categories)) {
      componentCount += category.components?.length || 0;
    }
  }

  const staticUrlCount = STATIC_PAGES.length * LANGUAGES.length;
  const dynamicUrlCount = (styleCount + componentCount) * LANGUAGES.length;
  const totalUrls = staticUrlCount + dynamicUrlCount;

  console.log(`  📊 URLs to generate: ${totalUrls} total`);
  console.log(`     - Static pages: ${staticUrlCount}`);
  console.log(`     - Style previews: ${styleCount * LANGUAGES.length}`);
  console.log(`     - Component pages: ${componentCount * LANGUAGES.length}`);

  // Generate static sitemap
  const staticSitemap = generateStaticSitemap(today);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-static.xml'), staticSitemap);
  console.log('  ✓ Generated sitemap-static.xml');

  // Generate language-specific sitemaps
  const sitemapFiles = [{ name: 'sitemap-static.xml', lastmod: today }];

  for (const lang of LANGUAGES) {
    const dynamicSitemap = generateDynamicSitemap(
      stylesIndex,
      componentsIndex,
      lang,
      today
    );
    const filename = `sitemap-${lang}.xml`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), dynamicSitemap);
    sitemapFiles.push({ name: filename, lastmod: today });
    console.log(`  ✓ Generated ${filename}`);
  }

  // Generate sitemap index
  const sitemapIndex = generateSitemapIndex(sitemapFiles);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapIndex);
  console.log('  ✓ Generated sitemap.xml (index)');

  console.log(`\n✅ Sitemap generation complete!`);
  console.log(`   Total URLs: ${totalUrls}`);
}

main().catch(console.error);
