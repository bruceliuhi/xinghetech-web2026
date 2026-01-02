# 星河卓越官网 - 部署文档

## 项目概述

这是一个基于 React + Vite + Tailwind CSS 的现代化企业官网项目。

## 技术栈

- **前端框架**: React 18.3.1
- **构建工具**: Vite 6.3.5
- **样式方案**: Tailwind CSS 4.1.12
- **路由管理**: React Router DOM 7.11.0
- **动画库**: Motion (Framer Motion) 12.23.24
- **UI 组件**: Radix UI + 自定义组件
- **图标库**: Lucide React

## ⚠️ 重要提示：图片资源处理

当前项目使用了 Figma Make 的 `figma:asset` 虚拟模块导入图片资源。在独立部署前，**必须**完成图片资源的迁移：

### 需要处理的图片文件

项目中以下文件包含 `figma:asset` 导入：

1. `/src/app/components/Footer.tsx` - Logo、企业微信二维码
2. `/src/app/components/Navigation.tsx` - 导航栏 Logo
3. `/src/app/components/AgentSection.tsx` - 背景图
4. `/src/app/components/BackgroundSection.tsx` - 背景图
5. `/src/app/components/PracticesSection.tsx` - 背景图
6. `/src/app/components/ScenariosSection.tsx` - 3D图标资源
7. `/src/app/pages/ScenariosPage.tsx` - 装饰性图片
8. `/src/app/pages/CapabilitiesPage.tsx` - 功能配图

### 图片迁移步骤

#### 方案 A：手动替换（推荐）

1. **创建 public 目录**：
   ```bash
   mkdir -p public/images
   ```

2. **从 Figma 导出图片**：
   - 在 Figma 中找到对应的图片资源
   - 导出为 PNG/JPG/SVG 格式
   - 保存到 `public/images/` 目录

3. **替换导入语句**：
   
   **原代码示例**：
   ```tsx
   import logoImage from 'figma:asset/0a9f32dbab35fc116d2a43f1411e6cebd03565f9.png';
   ```
   
   **修改为**：
   ```tsx
   import logoImage from '/images/logo.png';
   // 或直接使用路径
   <img src="/images/logo.png" alt="Logo" />
   ```

4. **建议的图片命名**：
   ```
   public/
   └── images/
       ├── logo.png              # 主Logo
       ├── logo-nav.png          # 导航栏Logo
       ├── qr-code.png           # 企业微信二维码
       ├── bg-agent.png          # Agent背景图
       ├── bg-background.png     # 背景区域图
       ├── bg-practices.png      # 实践背景图
       ├── icon-chat-3d.png      # 对话3D图标
       ├── icon-cluster-3d.png   # 集群3D图标
       ├── icon-report-3d.png    # 报告3D图标
       ├── icon-knowledge-3d.png # 知识3D图标
       └── decorative.png        # 装饰性图片
   ```

#### 方案 B：使用占位图（快速测试）

如果只是想快速测试部署，可以临时使用占位图：

```tsx
// 使用在线占位图服务
const logoImage = "https://via.placeholder.com/200x50?text=Logo";
const qrCode = "https://via.placeholder.com/150x150?text=QR+Code";
```

## 本地开发

### 1. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐）
pnpm install

# 或使用 yarn
yarn install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站。

### 3. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 4. 预览生产构建

```bash
npm run preview
```

## 云服务器部署

### 方式一：Nginx 静态部署（推荐）

#### 1. 构建项目

```bash
npm run build
```

#### 2. 上传文件到服务器

将 `dist/` 目录的所有文件上传到服务器（如 `/var/www/xinghe-ai`）：

```bash
# 使用 scp
scp -r dist/* user@your-server:/var/www/xinghe-ai/

# 或使用 rsync
rsync -avz dist/ user@your-server:/var/www/xinghe-ai/
```

#### 3. 配置 Nginx

创建 Nginx 配置文件 `/etc/nginx/sites-available/xinghe-ai`：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    root /var/www/xinghe-ai;
    index index.html;
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;
    
    # 单页应用路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 4. 启用配置并重启 Nginx

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/xinghe-ai /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 5. 配置 HTTPS（可选但推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书并自动配置
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

### 方式二：Docker 部署

#### 1. 创建 Dockerfile

创建文件 `/Dockerfile`：

```dockerfile
# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### 2. 创建 nginx.conf

创建文件 `/nginx.conf`：

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### 3. 创建 docker-compose.yml（可选）

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
    container_name: xinghe-ai-website
```

#### 4. 构建和运行

```bash
# 构建镜像
docker build -t xinghe-ai-website .

# 运行容器
docker run -d -p 80:80 --name xinghe-ai xinghe-ai-website

# 或使用 docker-compose
docker-compose up -d
```

### 方式三：PM2 + Serve 部署

适合简单快速部署：

```bash
# 安装 serve 和 pm2
npm install -g serve pm2

# 构建项目
npm run build

# 使用 PM2 运行
pm2 serve dist 80 --name xinghe-ai --spa

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

## 阿里云/腾讯云 OSS + CDN 部署

### 1. 构建项目

```bash
npm run build
```

### 2. 上传到 OSS

使用阿里云 OSS 或腾讯云 COS 的 Web 控制台或 CLI 工具上传 `dist/` 目录。

### 3. 配置静态网站托管

在 OSS 控制台启用静态网站托管功能，设置：
- 默认首页：`index.html`
- 默认 404 页：`index.html`（用于支持前端路由）

### 4. 配置 CDN 加速（可选）

绑定自定义域名并启用 CDN 加速。

## 环境变量配置

如需配置环境变量，创建 `.env` 文件：

```env
# 生产环境
VITE_API_BASE_URL=https://api.your-domain.com
VITE_APP_TITLE=星河卓越

# 开发环境使用 .env.development
# 生产环境使用 .env.production
```

在代码中使用：

```tsx
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## 性能优化建议

### 1. 代码分割

项目已使用 React Router 的懒加载，确保按需加载页面组件。

### 2. 图片优化

- 使用 WebP 格式
- 压缩图片大小
- 使用 CDN 加速

### 3. 启用 HTTP/2

在 Nginx 配置中启用 HTTP/2：

```nginx
listen 443 ssl http2;
```

### 4. 使用 CDN

将静态资源托管到 CDN 服务商（阿里云、腾讯云、CloudFlare 等）。

## 常见问题

### Q1: 部署后页面刷新 404

**原因**：单页应用需要服务器支持 History 模式路由。

**解决**：配置 Nginx `try_files $uri $uri/ /index.html;`

### Q2: 图片加载失败

**原因**：`figma:asset` 导入未替换。

**解决**：按照上述"图片迁移步骤"处理所有图片资源。

### Q3: 构建体积过大

**解决方案**：
```bash
# 分析构建产物
npm install -D rollup-plugin-visualizer
```

在 `vite.config.ts` 中添加：
```ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    // ...
    visualizer({ open: true })
  ]
});
```

## 监控与日志

### 生产环境日志

建议集成错误监控服务：
- Sentry
- 阿里云 ARMS
- 腾讯云前端性能监控

### Nginx 日志

查看访问日志：
```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

## 备份与回滚

### 自动化部署脚本

创建 `deploy.sh`：

```bash
#!/bin/bash

echo "开始部署..."

# 拉取最新代码
git pull origin main

# 安装依赖
npm install

# 构建
npm run build

# 备份当前版本
BACKUP_DIR="/var/www/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR
cp -r /var/www/xinghe-ai/* $BACKUP_DIR/

# 部署新版本
rm -rf /var/www/xinghe-ai/*
cp -r dist/* /var/www/xinghe-ai/

# 重启 Nginx
sudo systemctl reload nginx

echo "部署完成！"
```

## 技术支持

如有问题，请联系：
- 邮箱：business@xinghetech.cn
- 电话：400 110 8776

## 许可证

Copyright © 2017-2026 北京星河卓越科技有限公司
