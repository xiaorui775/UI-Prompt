/**
 * Template Audit Script
 *
 * 功能：
 * 1. 扫描所有模板目录
 * 2. 检查每个模板是否有 fullpage.html 或 fullpage.jsx
 * 3. 比对 manifest.json 中的注册情况
 * 4. 报告并自动修复未注册的模板
 *
 * 用法：
 *   node scripts/audit-templates.js          # 仅检查
 *   node scripts/audit-templates.js --fix    # 检查并修复
 */

import fs from 'fs';
import path from 'path';

const CATEGORIES = ['core', 'visual', 'retro', 'interaction', 'layout'];
const CONTENT_ROOT = 'public/data/content/styles';
const MANIFEST_ROOT = 'src/data/styles/generated';

const FIX_MODE = process.argv.includes('--fix');

// Helper: Convert template ID to title
function idToTitle(id) {
  // Remove common prefixes
  let cleaned = id
    .replace(/^(core|visual|retro|interaction|layout)-/, '')
    .replace(/^[a-z]+-/, ''); // Remove family prefix like "sciFiHud-"

  // Convert kebab-case to Title Case
  return cleaned
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper: Generate Chinese title (simplified approach)
function generateZhTitle(enTitle) {
  // Basic mapping for common words
  const translations = {
    'Dashboard': '仪表板',
    'Landing': '落地页',
    'Portfolio': '作品集',
    'Showcase': '展示',
    'Home': '首页',
    'Office': '办公',
    'Control': '控制',
    'Center': '中心',
    'System': '系统',
    'Interface': '界面',
    'Panel': '面板',
    'Console': '控制台',
    'Editor': '编辑器',
    'Workspace': '工作区',
    'Template': '模板',
    'Design': '设计',
    'Style': '风格',
    'Theme': '主题',
    'Modern': '现代',
    'Classic': '经典',
    'Vintage': '复古',
    'Minimal': '极简',
    'Creative': '创意',
    'Professional': '专业',
    'Business': '商务',
    'Corporate': '企业',
    'Personal': '个人',
    'Blog': '博客',
    'Shop': '商店',
    'Store': '商店',
    'Gallery': '画廊',
    'Music': '音乐',
    'Video': '视频',
    'Photo': '照片',
    'Art': '艺术',
    'Tech': '科技',
    'Smart': '智能',
    'Digital': '数字',
    'Cyber': '赛博',
    'Neon': '霓虹',
    'Retro': '复古',
    'Futuristic': '未来',
    'Sci-Fi': '科幻',
    'Space': '太空',
    'Ocean': '海洋',
    'Nature': '自然',
    'Forest': '森林',
    'Mountain': '山脉',
    'City': '城市',
    'Urban': '都市',
    'Night': '夜晚',
    'Day': '白天',
    'Light': '明亮',
    'Dark': '暗黑',
    'Zen': '禅意',
    'Calm': '宁静',
    'Energy': '能量',
    'Power': '力量',
    'Speed': '速度',
    'Motion': '动感',
    'Static': '静态',
    'Dynamic': '动态',
    'Simple': '简单',
    'Complex': '复杂',
    'Clean': '简洁',
    'Bold': '大胆',
    'Soft': '柔和',
    'Hard': '硬朗',
    'Warm': '温暖',
    'Cool': '冷酷',
    'Neural': '神经',
    'Nexus': '枢纽',
    'Analog': '模拟',
    'Synth': '合成器'
  };

  let zhTitle = enTitle;
  for (const [en, zh] of Object.entries(translations)) {
    zhTitle = zhTitle.replace(new RegExp(en, 'gi'), zh);
  }

  return zhTitle;
}

// Main audit function
function auditTemplates() {
  const results = {
    totalDirectories: 0,
    validTemplates: 0,
    registered: 0,
    unregistered: [],
    noFullpage: [],
    orphanedRegistrations: [],
    fixed: 0
  };

  console.log('\n🔍 Template Audit Report\n');
  console.log('═'.repeat(80));
  console.log(`Mode: ${FIX_MODE ? '🔧 FIX (will auto-register missing templates)' : '📊 CHECK ONLY'}`);
  console.log('═'.repeat(80));

  CATEGORIES.forEach(category => {
    const categoryContentPath = path.join(CONTENT_ROOT, category);
    if (!fs.existsSync(categoryContentPath)) return;

    const families = fs.readdirSync(categoryContentPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);

    families.forEach(family => {
      const familyContentPath = path.join(categoryContentPath, family);
      const manifestPath = path.join(MANIFEST_ROOT, category, family, 'manifest.json');

      // Get template directories
      const templateDirs = fs.readdirSync(familyContentPath, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

      results.totalDirectories += templateDirs.length;

      // Load manifest
      let manifest = null;
      let registeredIds = new Set();

      if (fs.existsSync(manifestPath)) {
        try {
          manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          registeredIds = new Set((manifest.templates || []).map(t => t.id));
        } catch (e) {
          console.error(`   ⚠️  Error reading ${manifestPath}: ${e.message}`);
        }
      }

      // Check each template directory
      const validInFamily = [];
      const unregisteredInFamily = [];

      templateDirs.forEach(templateId => {
        const templatePath = path.join(familyContentPath, templateId);
        const files = fs.readdirSync(templatePath);

        const hasFullpageHtml = files.includes('fullpage.html');
        const hasFullpageJsx = files.includes('fullpage.jsx');
        const hasFullpage = hasFullpageHtml || hasFullpageJsx;

        if (hasFullpage) {
          results.validTemplates++;
          validInFamily.push(templateId);

          if (registeredIds.has(templateId)) {
            results.registered++;
          } else {
            results.unregistered.push({
              category,
              family,
              templateId,
              files,
              manifestPath
            });
            unregisteredInFamily.push(templateId);
          }
        } else {
          results.noFullpage.push({
            category,
            family,
            templateId,
            files
          });
        }
      });

      // Check for orphaned registrations (registered but directory missing or no fullpage)
      if (manifest && manifest.templates) {
        manifest.templates.forEach(t => {
          if (!validInFamily.includes(t.id)) {
            results.orphanedRegistrations.push({
              category,
              family,
              templateId: t.id,
              manifestPath
            });
          }
        });
      }

      // Auto-fix if requested
      if (FIX_MODE && unregisteredInFamily.length > 0 && manifest) {
        unregisteredInFamily.forEach(templateId => {
          const enTitle = idToTitle(templateId);
          const zhTitle = generateZhTitle(enTitle);

          manifest.templates.push({
            id: templateId,
            title: {
              'zh-CN': zhTitle,
              'en-US': enTitle
            }
          });
          results.fixed++;
        });

        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
      }
    });
  });

  // Print results
  console.log('\n📊 Summary\n');
  console.log(`   Total template directories: ${results.totalDirectories}`);
  console.log(`   Valid templates (has fullpage): ${results.validTemplates}`);
  console.log(`   Registered in manifest: ${results.registered}`);
  console.log(`   Unregistered (missing from manifest): ${results.unregistered.length}`);
  console.log(`   No fullpage file (demo only): ${results.noFullpage.length}`);
  console.log(`   Orphaned registrations: ${results.orphanedRegistrations.length}`);

  if (results.unregistered.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log('\n⚠️  Unregistered Templates (have fullpage but not in manifest):\n');
    results.unregistered.forEach(item => {
      const status = FIX_MODE ? '✅ FIXED' : '❌ MISSING';
      console.log(`   ${status} ${item.category}/${item.family}/${item.templateId}`);
      console.log(`           Files: ${item.files.join(', ')}`);
    });
  }

  if (results.orphanedRegistrations.length > 0) {
    console.log('\n' + '─'.repeat(80));
    console.log('\n🗑️  Orphaned Registrations (in manifest but no valid directory):\n');
    results.orphanedRegistrations.forEach(item => {
      console.log(`   ⚠️  ${item.category}/${item.family}/${item.templateId}`);
    });
    if (!FIX_MODE) {
      console.log('\n   Run with --fix to remove orphaned registrations');
    }
  }

  if (results.noFullpage.length > 0 && process.argv.includes('--verbose')) {
    console.log('\n' + '─'.repeat(80));
    console.log('\nℹ️  Directories without fullpage (demo only, not an error):\n');
    results.noFullpage.forEach(item => {
      console.log(`   📁 ${item.category}/${item.family}/${item.templateId}`);
      console.log(`       Files: ${item.files.join(', ')}`);
    });
  }

  console.log('\n' + '═'.repeat(80));

  if (FIX_MODE) {
    console.log(`\n✨ Fixed ${results.fixed} unregistered templates`);
    if (results.fixed > 0) {
      console.log('\n📝 Next steps:');
      console.log('   1. Run: node scripts/build-styles-index.js');
      console.log('   2. Restart dev server if running');
      console.log('   3. Verify templates appear correctly in the UI');
    }
  } else {
    if (results.unregistered.length > 0) {
      console.log('\n💡 To auto-fix unregistered templates, run:');
      console.log('   node scripts/audit-templates.js --fix\n');
    } else {
      console.log('\n✅ All templates are properly registered!\n');
    }
  }

  return results;
}

// Run audit
auditTemplates();
