#!/bin/bash

# 星河卓越官网自动化部署脚本
# 使用方法: chmod +x deploy.sh && ./deploy.sh

set -e

echo "========================================="
echo "  星河卓越官网 - 自动化部署脚本"
echo "========================================="
echo ""

# 配置变量
DEPLOY_DIR="/var/www/xinghe-ai"
BACKUP_DIR="/var/www/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查是否为 root 用户
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}请使用 sudo 运行此脚本${NC}"
    exit 1
fi

# 步骤 1: 拉取最新代码
echo -e "${YELLOW}[1/7] 拉取最新代码...${NC}"
git pull origin main || {
    echo -e "${RED}代码拉取失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ 代码拉取成功${NC}"
echo ""

# 步骤 2: 安装依赖
echo -e "${YELLOW}[2/7] 安装依赖...${NC}"
npm install || {
    echo -e "${RED}依赖安装失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ 依赖安装成功${NC}"
echo ""

# 步骤 3: 构建项目
echo -e "${YELLOW}[3/7] 构建项目...${NC}"
npm run build || {
    echo -e "${RED}项目构建失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ 项目构建成功${NC}"
echo ""

# 步骤 4: 创建备份目录
echo -e "${YELLOW}[4/7] 创建备份...${NC}"
mkdir -p "$BACKUP_DIR/$TIMESTAMP"

# 步骤 5: 备份当前版本
if [ -d "$DEPLOY_DIR" ] && [ "$(ls -A $DEPLOY_DIR)" ]; then
    cp -r "$DEPLOY_DIR"/* "$BACKUP_DIR/$TIMESTAMP/" || {
        echo -e "${YELLOW}⚠ 备份失败，但继续部署${NC}"
    }
    echo -e "${GREEN}✓ 备份完成: $BACKUP_DIR/$TIMESTAMP${NC}"
else
    echo -e "${YELLOW}⚠ 部署目录为空，跳过备份${NC}"
fi
echo ""

# 步骤 6: 部署新版本
echo -e "${YELLOW}[5/7] 部署新版本...${NC}"
mkdir -p "$DEPLOY_DIR"
rm -rf "$DEPLOY_DIR"/*
cp -r dist/* "$DEPLOY_DIR/" || {
    echo -e "${RED}部署失败${NC}"
    
    # 尝试回滚
    if [ -d "$BACKUP_DIR/$TIMESTAMP" ]; then
        echo -e "${YELLOW}正在回滚到上一个版本...${NC}"
        cp -r "$BACKUP_DIR/$TIMESTAMP"/* "$DEPLOY_DIR/"
        echo -e "${GREEN}✓ 已回滚到上一个版本${NC}"
    fi
    exit 1
}
echo -e "${GREEN}✓ 新版本部署成功${NC}"
echo ""

# 步骤 7: 重启 Nginx
echo -e "${YELLOW}[6/7] 重启 Nginx...${NC}"
nginx -t && systemctl reload nginx || {
    echo -e "${RED}Nginx 重启失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ Nginx 重启成功${NC}"
echo ""

# 步骤 8: 清理旧备份（保留最近 5 个）
echo -e "${YELLOW}[7/7] 清理旧备份...${NC}"
cd "$BACKUP_DIR"
ls -t | tail -n +6 | xargs -r rm -rf
echo -e "${GREEN}✓ 备份清理完成${NC}"
echo ""

# 完成
echo "========================================="
echo -e "${GREEN}  部署成功！${NC}"
echo "========================================="
echo ""
echo "部署信息:"
echo "  - 部署时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "  - 部署目录: $DEPLOY_DIR"
echo "  - 备份位置: $BACKUP_DIR/$TIMESTAMP"
echo ""
echo "如需回滚，执行以下命令:"
echo "  sudo cp -r $BACKUP_DIR/$TIMESTAMP/* $DEPLOY_DIR/"
echo "  sudo systemctl reload nginx"
echo ""
