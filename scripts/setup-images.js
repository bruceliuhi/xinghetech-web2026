#!/usr/bin/env node

/**
 * 图片资源设置脚本
 * 自动创建图片目录结构并生成占位图片清单
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 需要的图片清单
const imageList = {
  '品牌资源': [
    { file: 'logo.svg', desc: '主Logo（导航栏）', size: '建议: SVG矢量', status: 'provided' },
    { file: 'qr-code.svg', desc: '联系二维码', size: '建议: 200x200px', status: 'provided' },
    { file: 'favicon.ico', desc: '网站图标', size: '32x32px', status: 'needed' },
  ],
  '背景图片': [
    { file: 'hero-background.png', desc: '首页主背景', size: '1920x1080px', status: 'needed' },
    { file: 'agent-background.png', desc: 'Agent章节背景', size: '1920x1080px', status: 'needed' },
    { file: 'practices-background.svg', desc: '实践章节背景', size: 'SVG矢量', status: 'provided' },
    { file: 'background-pattern.png', desc: '通用背景纹理', size: '512x512px可平铺', status: 'needed' },
  ],
  '3D场景图标': [
    { file: '3d-chat-icon.png', desc: '对话场景图标', size: '400x400px PNG透明', status: 'needed' },
    { file: '3d-cluster-icon.png', desc: '聚类分析图标', size: '400x400px PNG透明', status: 'needed' },
    { file: '3d-report-icon.png', desc: '报告生成图标', size: '400x400px PNG透明', status: 'needed' },
    { file: '3d-knowledge-icon.png', desc: '知识库图标', size: '400x400px PNG透明', status: 'needed' },
    { file: '3d-analysis-icon.png', desc: '数据分析图标', size: '400x400px PNG透明', status: 'needed' },
    { file: '3d-workflow-icon.png', desc: '工作流图标', size: '400x400px PNG透明', status: 'needed' },
  ],
  '能力页面插图': [
    { file: 'hero-bg-capabilities.png', desc: '能力页主图', size: '1920x800px', status: 'needed' },
    { file: 'summary-bg.png', desc: '概览背景', size: '1920x600px', status: 'needed' },
    { file: 'agent-management.png', desc: 'Agent管理插图', size: '800x600px', status: 'needed' },
    { file: 'knowledge-governance.png', desc: '知识治理插图', size: '800x600px', status: 'needed' },
    { file: 'model-evolution.png', desc: '模型演进插图', size: '800x600px', status: 'needed' },
    { file: 'process-permission.png', desc: '流程权限插图', size: '800x600px', status: 'needed' },
    { file: 'evaluation-security.png', desc: '评测安全插图', size: '800x600px', status: 'needed' },
    { file: 'runtime-integration.png', desc: '运行集成插图', size: '800x600px', status: 'needed' },
  ],
  'SEO和分享': [
    { file: 'og-image.jpg', desc: '社交媒体分享图', size: '1200x630px', status: 'needed' },
  ],
  'Agent页面': [
    { file: 'hero-visual.png', desc: 'Agent页主视觉', size: '1200x800px', status: 'optional' },
    { file: 'decorative-pattern.png', desc: '装饰纹理', size: '512x512px可平铺', status: 'optional' },
  ],
};

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

function createDirectories() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    log('✅ 已创建 public/images/ 目录', 'green');
  } else {
    log('ℹ️  public/images/ 目录已存在', 'blue');
  }

  return imagesDir;
}

function checkImageStatus(imagesDir) {
  log('\n📊 图片资源检查报告', 'bright');
  log('='.repeat(80), 'cyan');

  let totalNeeded = 0;
  let totalProvided = 0;
  let totalOptional = 0;
  let totalFound = 0;
  let totalMissing = 0;

  Object.entries(imageList).forEach(([category, images]) => {
    log(`\n📁 ${category}`, 'yellow');
    log('-'.repeat(80), 'cyan');

    images.forEach(image => {
      const imagePath = path.join(imagesDir, image.file);
      const exists = fs.existsSync(imagePath);

      if (image.status === 'provided') {
        totalProvided++;
      } else if (image.status === 'needed') {
        totalNeeded++;
      } else if (image.status === 'optional') {
        totalOptional++;
      }

      if (exists) {
        totalFound++;
        const stats = fs.statSync(imagePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        log(`  ✅ ${image.file.padEnd(30)} ${image.desc} (${sizeKB} KB)`, 'green');
      } else {
        totalMissing++;
        const status = image.status === 'optional' ? '⚪' : '❌';
        const color = image.status === 'optional' ? 'blue' : 'red';
        log(`  ${status} ${image.file.padEnd(30)} ${image.desc} [${image.size}]`, color);
      }
    });
  });

  // 汇总报告
  log('\n' + '='.repeat(80), 'cyan');
  log('📈 汇总统计', 'bright');
  log('-'.repeat(80), 'cyan');
  log(`  总计图片: ${totalNeeded + totalProvided + totalOptional} 个`, 'blue');
  log(`  ✅ 已提供: ${totalProvided} 个`, 'green');
  log(`  ✅ 已找到: ${totalFound} 个`, 'green');
  log(`  ❌ 缺失必需: ${Math.max(0, totalNeeded - totalFound + totalProvided)} 个`, 'red');
  log(`  ⚪ 缺失可选: ${Math.max(0, totalOptional - (totalFound - totalProvided))} 个`, 'blue');
  log('='.repeat(80) + '\n', 'cyan');

  return { totalFound, totalMissing, totalNeeded, totalOptional, totalProvided };
}

function generateDownloadScript(imagesDir) {
  const scriptPath = path.join(process.cwd(), 'scripts', 'download-placeholder-images.sh');

  let script = `#!/bin/bash
#
# 下载占位图片脚本
# 使用 Unsplash API 下载临时占位图片用于测试
#
# 使用方法: bash scripts/download-placeholder-images.sh
#

IMAGES_DIR="public/images"

# 确保目录存在
mkdir -p "$IMAGES_DIR"

echo "🖼️  开始下载占位图片..."
echo ""

`;

  // 为每个缺失的图片生成下载命令
  Object.entries(imageList).forEach(([category, images]) => {
    script += `\n# ${category}\n`;
    images.forEach(image => {
      if (image.status !== 'provided') {
        const keyword = image.desc.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, ' ').trim();
        const size = image.file.includes('icon') ? '400x400' :
          image.file.includes('og-') ? '1200x630' :
            image.file.includes('hero') ? '1920x1080' : '800x600';

        script += `echo "📥 下载 ${image.file}..."\n`;
        script += `curl -L "https://source.unsplash.com/${size}/?${encodeURIComponent('technology,abstract')}" `;
        script += `-o "$IMAGES_DIR/${image.file}" 2>/dev/null\n\n`;
      }
    });
  });

  script += `\necho ""\necho "✅ 占位图片下载完成！"\necho "⚠️  注意: 这些是临时占位图，请替换为正式设计图片"\n`;

  // 确保 scripts 目录存在
  const scriptsDir = path.join(process.cwd(), 'scripts');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
  }

  fs.writeFileSync(scriptPath, script, { mode: 0o755 });
  log(`\n📝 已生成下载脚本: ${scriptPath}`, 'green');
  log(`   运行方式: bash scripts/download-placeholder-images.sh`, 'blue');
}

function generateImageList() {
  const listPath = path.join(process.cwd(), '图片清单.txt');

  let content = '星河卓越 AI 平台 - 图片资源清单\n';
  content += '='.repeat(80) + '\n\n';
  content += '生成时间: ' + new Date().toLocaleString('zh-CN') + '\n\n';

  Object.entries(imageList).forEach(([category, images]) => {
    content += `\n【${category}】\n`;
    content += '-'.repeat(80) + '\n';
    images.forEach((image, index) => {
      const status = image.status === 'provided' ? '[已提供]' :
        image.status === 'optional' ? '[可选]' : '[必需]';
      content += `${index + 1}. ${status} ${image.file}\n`;
      content += `   描述: ${image.desc}\n`;
      content += `   规格: ${image.size}\n\n`;
    });
  });

  content += '\n' + '='.repeat(80) + '\n';
  content += '说明:\n';
  content += '- [已提供]: 项目已包含 SVG 占位图\n';
  content += '- [必需]: 需要准备的图片，否则可能显示异常\n';
  content += '- [可选]: 建议准备，缺失时会使用渐变背景\n\n';

  fs.writeFileSync(listPath, content, 'utf8');
  log(`\n📋 已生成图片清单: ${listPath}`, 'green');
}

function main() {
  log('\n🚀 星河卓越 AI 平台 - 图片资源设置工具\n', 'bright');

  // 创建目录
  const imagesDir = createDirectories();

  // 检查图片状态
  const stats = checkImageStatus(imagesDir);

  // 生成辅助文件
  generateImageList();
  generateDownloadScript(imagesDir);

  // 给出建议
  log('\n💡 下一步建议:', 'bright');
  log('-'.repeat(80), 'cyan');

  if (stats.totalMissing > 0) {
    log('  1. 查看 "图片清单.txt" 了解所需图片详情', 'blue');
    log('  2. 将设计图片放入 public/images/ 目录', 'blue');
    log('  3. 或运行 "bash scripts/download-placeholder-images.sh" 下载临时占位图', 'yellow');
    log('  4. 运行 "npm run dev" 启动开发服务器', 'blue');
    log('  5. 访问 http://localhost:5173 查看效果', 'blue');
  } else {
    log('  ✅ 所有必需图片已就绪!', 'green');
    log('  运行 "npm run dev" 启动开发服务器', 'blue');
  }

  log('\n');
}

// 运行主程序
if (process.argv[1] === __filename) {
  main();
}

export { imageList, createDirectories, checkImageStatus };
