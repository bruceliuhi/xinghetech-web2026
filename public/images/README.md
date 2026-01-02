# 图片资源目录

此目录用于存放网站的所有图片资源。

## 📂 当前状态

### ✅ 已提供的图片（3个）

- `logo.svg` - 导航栏 Logo（渐变色星河卓越标志）
- `qr-code.svg` - 页脚联系二维码（品牌色 QR 码）
- `practices-background.svg` - 实践章节背景（网格图案）

### ❌ 需要添加的图片（23个）

请将以下图片放入此目录：

#### 品牌资源（1个）
- `favicon.ico` - 浏览器图标（32x32px）

#### 背景图片（3个）
- `hero-background.png` - 首页背景（1920x1080px）
- `agent-background.png` - Agent章节背景（1920x1080px）
- `background-pattern.png` - 通用背景纹理（512x512px，可平铺）

#### 3D场景图标（6个，400x400px PNG透明背景）
- `3d-chat-icon.png` - 智能对话图标
- `3d-cluster-icon.png` - 聚类分析图标
- `3d-report-icon.png` - 报告生成图标
- `3d-knowledge-icon.png` - 知识库图标
- `3d-analysis-icon.png` - 数据分析图标
- `3d-workflow-icon.png` - 工作流图标

#### 能力页面插图（8个）
- `hero-bg-capabilities.png` - 能力页头部背景（1920x800px）
- `summary-bg.png` - 能力概览背景（1920x600px）
- `agent-management.png` - Agent管理插图（800x600px）
- `knowledge-governance.png` - 知识治理插图（800x600px）
- `model-evolution.png` - 模型演进插图（800x600px）
- `process-permission.png` - 流程权限插图（800x600px）
- `evaluation-security.png` - 评测安全插图（800x600px）
- `runtime-integration.png` - 运行集成插图（800x600px）

#### Agent页面（2个）
- `hero-visual.png` - Agent页主视觉（1200x800px）
- `decorative-pattern.png` - 装饰背景纹理（512x512px）

#### SEO和社交分享（1个）
- `og-image.jpg` - 社交媒体分享图（1200x630px）

## 🚀 快速获取图片

### 方式一：自动下载占位图（推荐测试用）

```bash
npm run download-images
```

### 方式二：手动下载

参考项目根目录的《图片显示完整步骤.md》

### 方式三：使用真实设计图

联系设计师准备符合上述规格的图片

## 🔍 检查图片状态

```bash
npm run check-images
```

## 📝 注意事项

- 所有图片必须放在此目录（`public/images/`）
- 文件名必须完全匹配（区分大小写）
- 建议图片大小不超过 500KB
- PNG 格式用于需要透明背景的图片
- JPG 格式用于照片和大背景图
- SVG 格式用于矢量图形和 Logo

## 🎨 设计规范

- **品牌主色**: #2C4BFF（蓝色）
- **品牌辅色**: #9122FA（紫色）
- **渐变**: 从 #2C4BFF 到 #9122FA
- **背景**: #FFFFFF（白色）和 #F8F9FE（极淡蓝灰）
- **风格**: 极简、科技、专业

---

更多信息请查看项目根目录的相关文档。
