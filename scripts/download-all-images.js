#!/usr/bin/env node

/**
 * 一键下载所有占位图片
 * 使用 placeholder.com API 生成符合尺寸的占位图
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 图片配置
const images = [
  // 品牌资源（SVG已提供，这里跳过）
  { file: 'favicon.ico', url: 'https://placehold.co/32x32/2C4BFF/FFFFFF.ico', desc: '网站图标' },
  
  // 背景图片
  { file: 'hero-background.png', url: 'https://placehold.co/1920x1080/2C4BFF/FFFFFF.png?text=Hero+Background', desc: '首页背景' },
  { file: 'agent-background.png', url: 'https://placehold.co/1920x1080/9122FA/FFFFFF.png?text=Agent+Background', desc: 'Agent背景' },
  { file: 'background-pattern.png', url: 'https://placehold.co/512x512/F8F9FE/2C4BFF.png?text=Pattern', desc: '背景纹理' },
  
  // 3D场景图标
  { file: '3d-chat-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Chat', desc: '对话图标' },
  { file: '3d-cluster-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Cluster', desc: '聚类图标' },
  { file: '3d-report-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Report', desc: '报告图标' },
  { file: '3d-knowledge-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Knowledge', desc: '知识图标' },
  { file: '3d-analysis-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Analysis', desc: '分析图标' },
  { file: '3d-workflow-icon.png', url: 'https://placehold.co/400x400/2C4BFF/FFFFFF.png?text=Workflow', desc: '工作流图标' },
  
  // 能力页面插图
  { file: 'hero-bg-capabilities.png', url: 'https://placehold.co/1920x800/2C4BFF/FFFFFF.png?text=Capabilities', desc: '能力页主图' },
  { file: 'summary-bg.png', url: 'https://placehold.co/1920x600/6366F1/FFFFFF.png?text=Summary', desc: '概览背景' },
  { file: 'agent-management.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Agent+Management', desc: 'Agent管理' },
  { file: 'knowledge-governance.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Knowledge+Gov', desc: '知识治理' },
  { file: 'model-evolution.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Model+Evolution', desc: '模型演进' },
  { file: 'process-permission.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Process', desc: '流程权限' },
  { file: 'evaluation-security.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Security', desc: '评测安全' },
  { file: 'runtime-integration.png', url: 'https://placehold.co/800x600/2C4BFF/FFFFFF.png?text=Runtime', desc: '运行集成' },
  
  // Agent页面
  { file: 'hero-visual.png', url: 'https://placehold.co/1200x800/2C4BFF/FFFFFF.png?text=Agent+Hero', desc: 'Agent主视觉' },
  { file: 'decorative-pattern.png', url: 'https://placehold.co/512x512/F8F9FE/2C4BFF.png?text=Decoration', desc: '装饰纹理' },
  
  // SEO
  { file: 'og-image.jpg', url: 'https://placehold.co/1200x630/2C4BFF/FFFFFF.jpg?text=Xinghe+AI', desc: 'SEO分享图' },
];

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

// 下载单个图片
function downloadImage(url, filepath, desc) {
  return new Promise((resolve, reject) => {
    // 将 https://placehold.co 替换为 http，因为某些环境可能有问题
    const downloadUrl = url.replace('https://', 'http://');
    
    const file = fs.createWriteStream(filepath);
    
    const protocol = downloadUrl.startsWith('https') ? https : http;
    
    protocol.get(downloadUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          log(`  ✅ ${desc} - ${path.basename(filepath)}`, 'green');
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        file.close();
        fs.unlinkSync(filepath);
        // Beware of infinite loops in real apps, but sufficient here
        if (response.headers.location) {
             downloadImage(response.headers.location, filepath, desc).then(resolve).catch(reject);
        } else {
             reject(new Error(`Redirect without location header`));
        }
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

// 主函数
async function main() {
  log('\n🚀 开始下载占位图片...\n', 'bright');
  
  // 确保目录存在
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    log('✅ 已创建 public/images/ 目录\n', 'green');
  }
  
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;
  
  log('📥 下载进度：\n', 'cyan');
  
  for (const img of images) {
    const filepath = path.join(imagesDir, img.file);
    
    // 检查文件是否已存在
    if (fs.existsSync(filepath)) {
      log(`  ⏭️  跳过（已存在）- ${img.desc} - ${img.file}`, 'yellow');
      skipCount++;
      continue;
    }
    
    try {
      await downloadImage(img.url, filepath, img.desc);
      successCount++;
      
      // 添加小延迟避免请求过快
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      log(`  ❌ 失败 - ${img.desc} - ${img.file}: ${error.message}`, 'red');
      failCount++;
    }
  }
  
  // 汇总
  log('\n' + '='.repeat(60), 'cyan');
  log('📊 下载完成统计', 'bright');
  log('='.repeat(60), 'cyan');
  log(`  总计: ${images.length} 个图片`, 'blue');
  log(`  ✅ 成功: ${successCount} 个`, 'green');
  log(`  ⏭️  跳过: ${skipCount} 个（已存在）`, 'yellow');
  log(`  ❌ 失败: ${failCount} 个`, failCount > 0 ? 'red' : 'green');
  log('='.repeat(60) + '\n', 'cyan');
  
  if (failCount > 0) {
    log('⚠️  部分图片下载失败，您可以：', 'yellow');
    log('   1. 重新运行此脚本', 'yellow');
    log('   2. 手动下载失败的图片到 public/images/', 'yellow');
    log('   3. 查看《完整图片配置指南.md》获取手动下载链接\n', 'yellow');
  } else {
    log('🎉 所有图片下载完成！', 'green');
    log('💡 下一步：运行 npm run dev 启动项目\n', 'blue');
  }
  
  // 提示
  log('⚠️  注意：', 'yellow');
  log('   这些是临时占位图，仅用于测试', 'yellow');
  log('   正式上线前请替换为真实设计图片\n', 'yellow');
}

// 运行
if (process.argv[1] === __filename) {
  main().catch(err => {
    log('\n❌ 发生错误: ' + err.message, 'red');
    process.exit(1);
  });
}

export { downloadImage, images };

