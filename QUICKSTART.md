# 快速开始指南

## 5 分钟部署到云服务器

### 前提条件

- 一台云服务器（阿里云/腾讯云/AWS 等）
- 已安装 Nginx
- 已安装 Node.js >= 18

---

## 方式一：使用自动部署脚本（推荐）

### 1. 克隆项目到服务器

```bash
cd /var/www
git clone <your-repo-url> xinghe-ai
cd xinghe-ai
```

### 2. 处理图片资源

**重要：** 必须先完成图片迁移！详见 `图片资源迁移指南.md`

```bash
# 创建图片目录
mkdir -p public/images

# 从 Figma 导出图片并上传到 public/images/
# 或使用 scp 上传本地图片
```

### 3. 配置部署脚本

```bash
# 赋予执行权限
chmod +x deploy.sh

# 编辑脚本中的配置（如有需要）
nano deploy.sh
```

### 4. 执行部署

```bash
sudo ./deploy.sh
```

### 5. 配置域名（可选）

编辑 Nginx 配置：

```bash
sudo nano /etc/nginx/sites-available/xinghe-ai
```

修改 `server_name` 为你的域名：

```nginx
server_name your-domain.com www.your-domain.com;
```

重启 Nginx：

```bash
sudo systemctl reload nginx
```

✅ **完成！** 访问你的域名或服务器 IP 查看网站。

---

## 方式二：Docker 一键部署

### 1. 安装 Docker

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# 安装 Docker Compose
sudo apt install docker-compose
```

### 2. 克隆项目

```bash
git clone <your-repo-url> xinghe-ai
cd xinghe-ai
```

### 3. 处理图片资源

同方式一，完成图片迁移。

### 4. 构建并运行

```bash
# 构建镜像
docker build -t xinghe-ai .

# 运行容器
docker run -d -p 80:80 --name xinghe-ai-web xinghe-ai

# 或使用 docker-compose
docker-compose up -d
```

### 5. 查看运行状态

```bash
docker ps
docker logs xinghe-ai-web
```

✅ **完成！** 访问服务器 IP 查看网站。

---

## 方式三：手动部署

### 1. 本地构建

```bash
# 在本地电脑
git clone <your-repo-url>
cd xinghe-ai

# 处理图片资源（见图片资源迁移指南.md）

# 安装依赖
npm install

# 构建
npm run build
```

### 2. 上传到服务器

```bash
# 压缩构建产物
tar -czf dist.tar.gz dist/

# 上传到服务器
scp dist.tar.gz user@your-server:/var/www/
```

### 3. 服务器端解压

```bash
# SSH 登录服务器
ssh user@your-server

# 解压
cd /var/www
mkdir -p xinghe-ai
tar -xzf dist.tar.gz -C xinghe-ai --strip-components=1
```

### 4. 配置 Nginx

```bash
sudo nano /etc/nginx/sites-available/xinghe-ai
```

粘贴以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/xinghe-ai;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 5. 启用配置

```bash
sudo ln -s /etc/nginx/sites-available/xinghe-ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

✅ **完成！**

---

## 配置 HTTPS（推荐）

### 使用 Let's Encrypt 免费证书

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期测试
sudo certbot renew --dry-run
```

---

## 常见问题快速解决

### ❌ 页面刷新 404

**原因**: 单页应用路由未配置

**解决**:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### ❌ 图片加载失败

**原因**: `figma:asset` 未替换

**解决**: 参考 `图片资源迁移指南.md` 完成图片迁移

### ❌ 构建失败

**原因**: Node.js 版本过低

**解决**:
```bash
# 安装 Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### ❌ Nginx 启动失败

**原因**: 端口被占用

**解决**:
```bash
# 查看端口占用
sudo lsof -i :80

# 修改 Nginx 监听端口
listen 8080;
```

---

## 性能优化检查清单

部署完成后，建议进行以下优化：

- [ ] 启用 Gzip 压缩
- [ ] 配置静态资源缓存
- [ ] 启用 HTTPS
- [ ] 配置 CDN（可选）
- [ ] 压缩图片资源
- [ ] 设置安全响应头

详见 `DEPLOYMENT.md` 完整文档。

---

## 下一步

1. ⭐ **配置域名**: 将域名解析到服务器 IP
2. 🔒 **启用 HTTPS**: 使用 Let's Encrypt 免费证书
3. 📊 **监控**: 集成日志监控和性能分析
4. 🚀 **优化**: 根据性能报告进行优化

---

## 获取帮助

- 📖 完整文档: `DEPLOYMENT.md`
- 🖼️ 图片迁移: `图片资源迁移指南.md`
- 📧 技术支持: business@xinghetech.cn
- ☎️ 联系电话: 400 110 8776

---

**祝部署顺利！** 🎉
