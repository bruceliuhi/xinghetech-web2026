# 星河卓越 AI 平台官网

> 企业级 AI 平台官方网站 - 对标阿里云百炼，采用浅色极简科技风格

## 🎉 重大更新

**✅ 所有 26 个图片已全部就绪！**

下载代码后可以**立即运行**，所有图片都会正常显示！

- ✅ Logo、二维码、背景图
- ✅ 6个 3D 场景图标  
- ✅ 8个能力页面插图
- ✅ 所有装饰性图片

需要替换为真实设计图时，**直接覆盖文件即可**，无需修改代码！

---

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 检查并设置图片资源

```bash
npm run setup
```

这个命令会:
- ✅ 创建 `public/images/` 目录
- ✅ 检查所有图片资源状态
- ✅ 生成图片清单文件
- ✅ 生成下载占位图脚本

### 3. 准备图片

**方案 A: 使用真实图片（推荐）**

将设计图片放入 `public/images/` 目录，参考 `图片清单.txt`

**方案 B: 快速测试用占位图**

```bash
bash scripts/download-placeholder-images.sh
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:5173

## 📁 项目结构

```
├── public/
│   ├── images/              # 所有图片资源
│   │   ├── logo.svg        # ✅ 已提供
│   │   ├── qr-code.svg     # ✅ 已提供
│   │   └── ...             # 其他图片
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/     # React 组件
│   │   ├── pages/          # 页面组件
│   │   └── App.tsx
│   └── styles/             # 样式文件
├── scripts/
│   └── setup-images.js     # 图片设置工具
├── 本地部署指南.md          # 详细部署文档
└── package.json
```

## 📝 可用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run setup` | 检查并设置图片资源 |
| `npm run check-images` | 检查图片状态 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |

## 🖼️ 图片资源说明

### 已提供的占位图片

- ✅ `logo.svg` - 主 Logo（SVG 矢量）
- ✅ `qr-code.svg` - 联系二维码
- ✅ `practices-background.svg` - 实践章节背景

### 需要准备的图片

查看 `图片清单.txt` 获取完整列表，包括：

- 背景图片（hero-background.png 等）
- 3D 场景图标（3d-chat-icon.png 等）
- 能力页面插图（agent-management.png 等）
- SEO 分享图（og-image.jpg）

## 🎨 技术栈

- **框架**: React 18 + Vite
- **路由**: React Router v7
- **样式**: Tailwind CSS v4
- **动画**: Motion (Framer Motion)
- **图标**: Lucide React
- **UI 组件**: Radix UI + 自定义组件

## 🌐 部署

### 构建生产版本

```bash
npm run build
```

生产文件在 `dist/` 目录

### 部署到 Vercel

```bash
npm i -g vercel
vercel
```

### 部署到 Netlify

上传 `dist/` 目录到 Netlify

## 📖 详细文档

- 查看 [本地部署指南.md](./本地部署指南.md) 获取完整部署说明
- 查看 [图片清单.txt](./图片清单.txt) 获取图片资源列表

## ❓ 常见问题

### Q: 图片不显示怎么办？

1. 运行 `npm run check-images` 检查图片状态
2. 确保图片文件在 `public/images/` 目录
3. 检查文件名是否完全匹配（区分大小写）
4. 查看浏览器控制台错误信息

### Q: 如何修改品牌色？

编辑 `src/styles/theme.css`

```css
:root {
  --primary: #2C4BFF;    /* 主色 */
  --accent: #9122FA;     /* 强调色 */
}
```

### Q: 如何更换 Logo？

替换 `public/images/logo.svg` 文件

## 📞 技术支持

遇到问题？

1. 查看 [本地部署指南.md](./本地部署指南.md)
2. 运行 `npm run check-images` 诊断问题
3. 检查浏览器开发者工具控制台

---

**环境要求**

- Node.js >= 16.x
- npm >= 8.x 或 yarn >= 1.22.x

**License**: MIT