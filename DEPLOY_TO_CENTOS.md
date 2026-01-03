# 阿里云 CentOS 服务器部署指南

该文档详细介绍了如何将 React/Vite 项目部署到阿里云 CentOS 服务器。

## 1. 本地打包构建 (Build)

首先在您的本地开发环境中执行构建命令，生成静态文件。

1. 打开终端（VS Code 内置终端或 CMD/Powershell）。
2. 进入项目根目录。
3. 运行以下命令：

```bash
npm run build
```

**结果**：
构建完成后，项目根目录下会生成一个名为 `dist` 的文件夹。
这个 `dist` 文件夹包含了所有发布的静态文件（HTML, CSS, JS, 图片等）。

---

## 2. 准备服务器环境 (CentOS)

登录到您的阿里云 CentOS 服务器。

### 2.1 安装 Nginx

如果您的服务器尚未安装 Nginx，请执行以下命令：

```bash
# 安装 EPEL 源
sudo yum install epel-release -y

# 安装 Nginx
sudo yum install nginx -y

# 启动 Nginx 并设置开机自启
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 2.2 验证安装
在浏览器输入服务器的公网 IP，如果看到 "Welcome to nginx" 页面，说明安装成功。

---

## 3. 上传文件

将本地 `dist` 文件夹中的**所有内容**上传到服务器。

**推荐路径**：`/usr/share/nginx/html/xinghe-ai` (您可以自定义，但需与后续配置一致)

**上传方法**：
您可以使用 FTP 工具 (如 FileZilla) 或 `scp` 命令。

假设服务器 IP 为 `1.2.3.4`，用户名为 `root`：

```powershell
# 在本地 Powershell 执行 (确保在项目根目录下)
scp -r .\dist\* root@1.2.3.4:/usr/share/nginx/html/xinghe-ai
```

*如果目录不存在，请先在服务器上创建目录：* `mkdir -p /usr/share/nginx/html/xinghe-ai`

---

## 4. 配置 Nginx

创建一个新的配置文件来指向您的项目。

1. **创建配置文件**：

```bash
sudo vi /etc/nginx/conf.d/xinghe-ai.conf
```

2. **写入配置内容**：
(按 `i` 进入编辑模式，粘贴以下内容，按 `Esc` 然后输入 `:wq` 保存退出)

```nginx
server {
    listen       80;
    server_name  _; # 或者替换为您的域名，如 www.yourdomain.com

    # 指向您上传的目录
    root /usr/share/nginx/html/xinghe-ai;
    index index.html;

    # 开启 gzip 压缩 (优化加载速度)
    gzip on;
    gzip_min_length 1k;
    gzip_buffers 4 16k;
    gzip_http_version 1.1;
    gzip_comp_level 6;
    gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/javascript application/json;
    gzip_vary on;

    location / {
        # 解决 React Router 刷新 404 问题
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存配置
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

3. **检查配置并重启 Nginx**：

```bash
# 检查配置语法是否正确
sudo nginx -t

# 如果提示 successful，则重启 Nginx
sudo systemctl restart nginx
```

---

## 5. 访问验证

在浏览器中输入您的服务器 IP (或域名)，您应该就能看到部署好的星河卓越官网了。

### 常见问题排查：
- **403 Forbidden**: 检查文件夹权限。运行 `chmod -R 755 /usr/share/nginx/html/xinghe-ai`。
- **刷新页面 404**: 确保 Nginx 配置中包含了 `try_files $uri $uri/ /index.html;`。

---

## 6. 更新发布的步骤 (重新上传)

如果您修改了代码（例如刚才切换了 WebP 图片），需要更新线上网站，步骤非常简单：

1. **本地重新打包**：
   在项目根目录运行：
   ```bash
   npm run build
   ```
   *（我刚才已经帮您运行过了，现在的 `dist` 目录就是最新的）*

2. **清理服务器旧文件 (可选但推荐)**：
   登录服务器，运行：
   ```bash
   rm -rf /usr/share/nginx/html/xinghe-ai/*
   ```

3. **上传新文件**：
   将本地 `dist` 文件夹里的所有内容上传覆盖到服务器的 `/usr/share/nginx/html/xinghe-ai` 目录。

   ```powershell
   # 示例命令
   scp -r .\dist\* root@您的服务器IP:/usr/share/nginx/html/xinghe-ai
   ```

4. **完成**：
   不需要重启 Nginx，刷新浏览器即可看到最新效果。
   *(如果看不到变化，请强制刷新浏览器：Ctrl + F5)*
