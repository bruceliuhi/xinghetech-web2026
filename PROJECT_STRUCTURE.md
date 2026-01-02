# 星河卓越官网 - 项目结构说明

## 📂 完整目录树

```
xinghe-ai-website/
│
├── 📄 配置文件
│   ├── package.json                 # 项目依赖和脚本配置
│   ├── vite.config.ts              # Vite 构建工具配置
│   ├── postcss.config.mjs          # PostCSS 配置
│   ├── .gitignore                  # Git 忽略规则
│   └── index.html                  # HTML 入口模板
│
├── 📚 文档文件
│   ├── README.md                   # 项目说明文档
│   ├── DEPLOYMENT.md               # 完整部署文档（30+页）
│   ├── QUICKSTART.md               # 5分钟快速开始指南
│   ├── 图片资源迁移指南.md           # 图片迁移详细步骤
│   ├── 部署检查清单.md               # 部署前后检查清单
│   ├── 部署文件总览.md               # 部署文件总览
│   ├── PROJECT_STRUCTURE.md        # 本文档 - 项目结构说明
│   └── ATTRIBUTIONS.md             # 第三方库归属说明
│
├── 🚀 部署配置
│   ├── nginx.conf                  # Nginx 服务器配置
│   ├── Dockerfile                  # Docker 容器配置
│   ├── docker-compose.yml          # Docker Compose 编排文件
│   ├── deploy.sh                   # 自动化部署脚本
│   └── replace-figma-assets.sh     # 图片资源批量替换脚本
│
├── 📦 public/                      # 静态资源目录（需手动创建）
│   └── images/                     # 图片资源目录
│       ├── logo.png                # 主 Logo
│       ├── logo-small.png          # 小 Logo（页脚用）
│       ├── logo-nav.png            # 导航栏 Logo
│       ├── qr-code.png             # 企业微信二维码
│       ├── bg-agent.png            # 智能体背景图
│       ├── bg-background.png       # 背景区域背景图
│       ├── bg-practices.png        # 实践背景图
│       ├── icon-chat-3d.png        # 对话 3D 图标
│       ├── icon-cluster-3d.png     # 集群 3D 图标
│       ├── icon-report-3d.png      # 报告 3D 图标
│       ├── icon-knowledge-3d.png   # 知识 3D 图标
│       ├── icon-doc-3d.png         # 文档 3D 图标
│       ├── icon-flow-3d.png        # 流程 3D 图标
│       └── decorative-scenarios.png # 场景装饰图
│
└── 💻 src/                         # 源代码目录
    ├── main.tsx                    # React 应用入口文件
    │
    ├── app/                        # 应用主目录
    │   ├── App.tsx                 # 主应用组件（路由配置）
    │   │
    │   ├── components/             # 公共组件目录
    │   │   ├── Navigation.tsx      # 导航栏组件
    │   │   ├── Footer.tsx          # 页脚组件
    │   │   ├── HeroSection.tsx     # Hero 区域组件
    │   │   ├── AgentSection.tsx    # 智能体板块组件
    │   │   ├── BackgroundSection.tsx   # 背景板块组件
    │   │   ├── CapabilitiesSection.tsx # 能力板块组件
    │   │   ├── PracticesSection.tsx    # 实践板块组件
    │   │   ├── ScenariosSection.tsx    # 场景板块组件
    │   │   ├── TrustSection.tsx    # 信任板块组件
    │   │   ├── ExploreSection.tsx  # 探索板块组件
    │   │   ├── XingheAiLogo.tsx    # Logo 组件
    │   │   │
    │   │   ├── figma/              # Figma 专用组件
    │   │   │   └── ImageWithFallback.tsx  # 带降级的图片组件
    │   │   │
    │   │   └── ui/                 # UI 基础组件库（Shadcn UI）
    │   │       ├── accordion.tsx
    │   │       ├── alert-dialog.tsx
    │   │       ├── alert.tsx
    │   │       ├── aspect-ratio.tsx
    │   │       ├── avatar.tsx
    │   │       ├── badge.tsx
    │   │       ├── breadcrumb.tsx
    │   │       ├── button.tsx
    │   │       ├── calendar.tsx
    │   │       ├── card.tsx
    │   │       ├── carousel.tsx
    │   │       ├── chart.tsx
    │   │       ├── checkbox.tsx
    │   │       ├── collapsible.tsx
    │   │       ├── command.tsx
    │   │       ├── context-menu.tsx
    │   │       ├── dialog.tsx
    │   │       ├── drawer.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── form.tsx
    │   │       ├── hover-card.tsx
    │   │       ├── input-otp.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── menubar.tsx
    │   │       ├── navigation-menu.tsx
    │   │       ├── pagination.tsx
    │   │       ├── popover.tsx
    │   │       ├── progress.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── resizable.tsx
    │   │       ├── scroll-area.tsx
    │   │       ├── select.tsx
    │   │       ├── separator.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── slider.tsx
    │   │       ├── sonner.tsx
    │   │       ├── switch.tsx
    │   │       ├── table.tsx
    │   │       ├── tabs.tsx
    │   │       ├── textarea.tsx
    │   │       ├── toggle-group.tsx
    │   │       ├── toggle.tsx
    │   │       ├── tooltip.tsx
    │   │       ├── use-mobile.ts   # 移动端检测 Hook
    │   │       └── utils.ts        # UI 工具函数
    │   │
    │   └── pages/                  # 页面组件目录
    │       ├── HomePage.tsx        # 首页
    │       ├── AboutPage.tsx       # 关于我们页
    │       ├── AgentPage.tsx       # 智能体页
    │       ├── CapabilitiesPage.tsx    # 平台能力页
    │       ├── PracticesPage.tsx   # 应用实践页
    │       └── ScenariosPage.tsx   # 应用场景页
    │
    ├── imports/                    # Figma 导入的组件
    │   ├── Frame6.tsx
    │   ├── XingheAiLogo-2033-14.tsx
    │   ├── XingheAiLogo.tsx
    │   ├── svg-a2tbggkbc3.ts       # SVG 路径数据
    │   ├── svg-cpn0b10m7u.ts
    │   ├── svg-ms16hz3369.ts
    │   └── 智能体.tsx
    │
    └── styles/                     # 样式文件目录
        ├── index.css               # 主样式入口
        ├── tailwind.css            # Tailwind 基础样式
        ├── theme.css               # 主题配置（颜色、字体等）
        ├── fonts.css               # 字体导入
        └── hero-background.css     # Hero 区域背景样式
```

---

## 📋 核心文件说明

### 入口文件

#### `index.html`
- HTML 模板文件
- 定义页面标题、meta 信息
- 引入 `/src/main.tsx` 作为入口脚本

#### `src/main.tsx`
- React 应用的 JavaScript 入口
- 初始化 React 根组件
- 包裹 BrowserRouter 提供路由功能
- 导入全局样式

#### `src/app/App.tsx`
- 主应用组件
- 定义路由配置
- 包含 ScrollToHashElement 组件处理锚点跳转

---

### 页面组件（6个）

| 文件 | 路由 | 说明 |
|------|------|------|
| `HomePage.tsx` | `/` | 首页，展示核心价值和主要板块 |
| `AboutPage.tsx` | `/about` | 关于我们，企业背景和团队介绍 |
| `AgentPage.tsx` | `/agent` | 智能体，AI Agent 能力展示 |
| `CapabilitiesPage.tsx` | `/capabilities` | 平台能力，核心技术能力详解 |
| `PracticesPage.tsx` | `/practices` | 应用实践，实践案例展示 |
| `ScenariosPage.tsx` | `/scenarios` | 应用场景，业务场景说明 |

---

### 公共组件

#### 布局组件
- **Navigation.tsx** - 顶部导航栏
  - Logo
  - 菜单链接（首页、平台能力、智能体、应用实践、应用场景、关于我们）
  - 响应式菜单（移动端）
  
- **Footer.tsx** - 页脚
  - 企业介绍
  - 联系方式（地址、邮箱、电话）
  - 企业微信二维码
  - 版权信息和备案号

#### 内容组件
- **HeroSection.tsx** - Hero 区域
- **AgentSection.tsx** - 智能体板块
- **BackgroundSection.tsx** - 背景介绍板块
- **CapabilitiesSection.tsx** - 能力展示板块
- **PracticesSection.tsx** - 实践展示板块
- **ScenariosSection.tsx** - 场景展示板块
- **TrustSection.tsx** - 信任背书板块
- **ExploreSection.tsx** - 探索引导板块

---

### UI 组件库

基于 **Shadcn UI** 和 **Radix UI** 构建的 UI 组件库，包含 40+ 个可复用组件。

**特点**:
- ✅ 完全无障碍（a11y）
- ✅ 高度可定制
- ✅ 类型安全（TypeScript）
- ✅ 与 Tailwind CSS 深度集成

**常用组件**:
- Button, Input, Label - 基础表单组件
- Dialog, Sheet, Drawer - 弹窗组件
- Dropdown Menu, Context Menu - 菜单组件
- Tabs, Accordion, Collapsible - 交互组件
- Card, Badge, Avatar - 展示组件
- Toast (Sonner) - 通知组件

---

### 样式系统

#### `styles/index.css`
主样式入口，导入其他样式文件：
```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
@import './hero-background.css';
```

#### `styles/tailwind.css`
Tailwind CSS 基础样式：
```css
@import "tailwindcss";
```

#### `styles/theme.css`
主题配置文件，定义：
- CSS 变量（颜色、间距等）
- 自定义 Tailwind 配置
- 排版系统（字体大小、行高、字重）

**重要**: 不要使用 Tailwind 的字体类（如 `text-2xl`, `font-bold`），除非特别需要，因为已在 theme.css 中定义了默认排版。

#### `styles/fonts.css`
字体导入文件：
```css
@import url('...');
```

#### `styles/hero-background.css`
Hero 区域背景动画样式

---

## 🎨 设计系统

### 色彩规范

**主品牌色**:
- Primary: `#2C4BFF`
- Accent: `#9122FA`
- 渐变: `from-[#2C4BFF] to-[#9122FA]`

**背景色**:
- 白色: `#ffffff`
- 极淡蓝灰: `#F8F9FE`

**使用规则**:
- 大模块背景严格使用白色和 `#F8F9FE` 交替
- 关键标题、图标、按钮应用渐变效果
- 去除多余装饰（阴影、描边）
- 保持视觉通透感

### Tailwind 配置

通过 CSS 变量在 `theme.css` 中定义：

```css
@theme {
  --color-primary: #2C4BFF;
  --color-accent: #9122FA;
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  --color-border: #e4e4e7;
  /* ... */
}
```

使用方式：
```tsx
<div className="bg-primary text-white">
<span className="bg-gradient-to-r from-primary to-accent">
```

---

## 🔧 配置文件详解

### `package.json`

**关键配置**:
```json
{
  "name": "xinghe-ai-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",           // 开发服务器
    "build": "vite build",   // 生产构建
    "preview": "vite preview" // 预览构建产物
  }
}
```

**主要依赖**:
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- React Router DOM 7.11.0
- Motion (Framer Motion) 12.23.24
- Radix UI 组件库
- Lucide React 图标库

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),        // React 支持
    tailwindcss(),  // Tailwind CSS 支持
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ 别名
    },
  },
})
```

### `nginx.conf`

Nginx 服务器配置：
- Gzip 压缩
- 静态资源缓存
- 单页应用路由支持
- 安全响应头

### `Dockerfile`

多阶段构建：
1. 构建阶段：Node.js 18 + npm build
2. 生产阶段：Nginx Alpine + 构建产物

---

## 📦 依赖说明

### 核心依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| react | 18.3.1 | 前端框架 |
| react-dom | 18.3.1 | React DOM 渲染 |
| react-router-dom | 7.11.0 | 路由管理 |
| motion | 12.23.24 | 动画库 |
| lucide-react | 0.487.0 | 图标库 |

### UI 组件

| 包名 | 用途 |
|------|------|
| @radix-ui/* | 无障碍 UI 组件基础 |
| @mui/material | Material Design 组件 |
| sonner | Toast 通知 |
| vaul | Drawer 抽屉组件 |

### 工具库

| 包名 | 用途 |
|------|------|
| clsx | 类名合并 |
| tailwind-merge | Tailwind 类名合并 |
| class-variance-authority | 组件变体管理 |
| date-fns | 日期处理 |

### 开发依赖

| 包名 | 用途 |
|------|------|
| vite | 构建工具 |
| @vitejs/plugin-react | Vite React 插件 |
| tailwindcss | CSS 框架 |
| @tailwindcss/vite | Tailwind Vite 插件 |

---

## 🚀 构建流程

### 开发模式

```bash
npm run dev
```

1. Vite 启动开发服务器（端口 5173）
2. 支持热模块替换（HMR）
3. 即时编译和刷新

### 生产构建

```bash
npm run build
```

1. TypeScript 类型检查
2. Vite 打包优化
3. 代码分割
4. Tree-shaking
5. 压缩混淆
6. 生成 dist/ 目录

**构建产物**:
```
dist/
├── index.html          # 入口 HTML
├── assets/
│   ├── index-[hash].js   # 主 JS 文件
│   ├── index-[hash].css  # 主 CSS 文件
│   └── ...               # 其他资源
└── images/             # 静态图片
```

---

## 🔍 代码组织规范

### 组件结构

```tsx
// 1. 导入依赖
import React from 'react';
import { motion } from 'motion/react';

// 2. 类型定义
interface ComponentProps {
  title: string;
}

// 3. 组件定义
export function Component({ title }: ComponentProps) {
  // 4. Hooks
  const [state, setState] = useState();
  
  // 5. 事件处理
  const handleClick = () => {};
  
  // 6. 渲染
  return (
    <div>...</div>
  );
}
```

### 文件命名

- 组件文件：PascalCase（如 `HomePage.tsx`）
- 工具文件：camelCase（如 `utils.ts`）
- 样式文件：kebab-case（如 `hero-background.css`）

### 导入顺序

1. React 核心库
2. 第三方库
3. 本地组件
4. 本地工具
5. 样式文件
6. 类型定义

---

## 📊 性能优化

### 代码层面

- ✅ React.lazy() 路由懒加载
- ✅ Motion 动画性能优化
- ✅ 图片懒加载
- ✅ 组件 memo 化（按需）

### 构建层面

- ✅ Vite 代码分割
- ✅ Tree-shaking
- ✅ 压缩混淆
- ✅ 资源哈希命名

### 运行时层面

- ✅ Nginx Gzip 压缩
- ✅ 静态资源缓存
- ✅ HTTP/2 支持
- ✅ CDN 加速（可选）

---

## 🔐 安全考虑

### 代码安全

- ✅ 无 eval() 使用
- ✅ XSS 防护（React 自动转义）
- ✅ CSRF 防护（无表单提交）

### 服务器安全

- ✅ HTTPS 支持
- ✅ 安全响应头
- ✅ 隐藏文件保护
- ✅ 访问控制

---

## 📝 维护指南

### 添加新页面

1. 在 `src/app/pages/` 创建组件
2. 在 `App.tsx` 添加路由
3. 在 `Navigation.tsx` 添加菜单链接

### 添加新组件

1. 在 `src/app/components/` 创建组件
2. 导出组件
3. 在需要的地方导入使用

### 更新样式

1. 优先使用 Tailwind 类
2. 自定义样式写在 `theme.css`
3. 复杂动画写在独立 CSS 文件

### 更新依赖

```bash
# 检查过期依赖
npm outdated

# 更新依赖
npm update

# 更新主版本（谨慎）
npm install package@latest
```

---

## 🎓 学习资源

### 官方文档

- [React 文档](https://react.dev/)
- [Vite 文档](https://vitejs.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [React Router 文档](https://reactrouter.com/)
- [Motion 文档](https://motion.dev/)

### 组件库

- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 💡 常见问题

### Q: 为什么没有 tailwind.config.js？

**A**: 项目使用 Tailwind CSS v4，配置在 `theme.css` 中通过 CSS 变量定义。

### Q: 如何修改主题色？

**A**: 编辑 `src/styles/theme.css` 中的 CSS 变量。

### Q: 如何添加新字体？

**A**: 在 `src/styles/fonts.css` 添加 `@import` 语句。

### Q: 组件在哪里？

**A**: 公共组件在 `src/app/components/`，页面组件在 `src/app/pages/`，UI 组件在 `src/app/components/ui/`。

---

**最后更新**: 2025-12-31  
**版权所有**: © 2017-2026 北京星河卓越科技有限公司
