#!/bin/bash

# 星河卓越官网 - 图片资源批量替换脚本
# 使用前提：public/images/ 目录下的图片已准备好

set -e

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}  星河卓越 - 图片资源批量替换工具${NC}"
echo -e "${BLUE}=========================================${NC}"
echo ""

# 检查是否在项目根目录
if [ ! -f "package.json" ]; then
    echo -e "${RED}错误: 请在项目根目录运行此脚本${NC}"
    exit 1
fi

# 检查 public/images 目录
if [ ! -d "public/images" ]; then
    echo -e "${YELLOW}警告: public/images/ 目录不存在${NC}"
    echo -e "${YELLOW}正在创建目录...${NC}"
    mkdir -p public/images
    echo -e "${GREEN}✓ 目录创建成功${NC}"
    echo ""
fi

# 检查必需的图片文件
echo -e "${YELLOW}[1/3] 检查图片文件...${NC}"

required_images=(
    "logo.png"
    "logo-small.png"
    "logo-nav.png"
    "qr-code.png"
    "bg-agent.png"
    "bg-background.png"
    "bg-practices.png"
    "icon-chat-3d.png"
    "icon-cluster-3d.png"
    "icon-report-3d.png"
    "icon-knowledge-3d.png"
    "icon-doc-3d.png"
    "icon-flow-3d.png"
    "decorative-scenarios.png"
)

missing_count=0
for img in "${required_images[@]}"; do
    if [ ! -f "public/images/$img" ]; then
        echo -e "${RED}  ✗ 缺少: $img${NC}"
        ((missing_count++))
    else
        echo -e "${GREEN}  ✓ 找到: $img${NC}"
    fi
done

echo ""

if [ $missing_count -gt 0 ]; then
    echo -e "${RED}错误: 缺少 $missing_count 个图片文件${NC}"
    echo -e "${YELLOW}请先将图片文件放入 public/images/ 目录${NC}"
    echo -e "${YELLOW}详见: 图片资源迁移指南.md${NC}"
    exit 1
fi

echo -e "${GREEN}✓ 所有图片文件检查通过${NC}"
echo ""

# 备份原始文件
echo -e "${YELLOW}[2/3] 备份原始文件...${NC}"

backup_dir="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$backup_dir"

files_to_backup=(
    "src/app/components/Footer.tsx"
    "src/app/components/Navigation.tsx"
    "src/app/components/AgentSection.tsx"
    "src/app/components/BackgroundSection.tsx"
    "src/app/components/PracticesSection.tsx"
    "src/app/components/ScenariosSection.tsx"
    "src/app/pages/ScenariosPage.tsx"
)

for file in "${files_to_backup[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$backup_dir/"
        echo -e "${GREEN}  ✓ 已备份: $file${NC}"
    fi
done

echo -e "${GREEN}✓ 备份完成: $backup_dir/${NC}"
echo ""

# 替换导入语句
echo -e "${YELLOW}[3/3] 替换导入语句...${NC}"

# Footer.tsx - 3 处替换
if [ -f "src/app/components/Footer.tsx" ]; then
    sed -i.bak \
        -e "s|import image_15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2 from 'figma:asset/15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2.png';|import logoSmall from '/images/logo-small.png';|g" \
        -e 's|import logo from "figma:asset/f557800f8e71a5600c5dd5cd87664ab41b63bb3b.png";|import logo from "/images/logo.png";|g' \
        -e 's|import qrCode from "figma:asset/f51cb1fb6d7095292d42570c07132c7c49274bc8.png";|import qrCode from "/images/qr-code.png";|g' \
        src/app/components/Footer.tsx
    
    # 替换变量名
    sed -i.bak2 's|image_15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2|logoSmall|g' src/app/components/Footer.tsx
    
    rm -f src/app/components/Footer.tsx.bak src/app/components/Footer.tsx.bak2
    echo -e "${GREEN}  ✓ Footer.tsx - 3 处替换完成${NC}"
fi

# Navigation.tsx - 1 处替换
if [ -f "src/app/components/Navigation.tsx" ]; then
    sed -i.bak \
        "s|import logoImage from 'figma:asset/0a9f32dbab35fc116d2a43f1411e6cebd03565f9.png';|import logoImage from '/images/logo-nav.png';|g" \
        src/app/components/Navigation.tsx
    rm -f src/app/components/Navigation.tsx.bak
    echo -e "${GREEN}  ✓ Navigation.tsx - 1 处替换完成${NC}"
fi

# AgentSection.tsx - 1 处替换
if [ -f "src/app/components/AgentSection.tsx" ]; then
    sed -i.bak \
        "s|import bgImage from 'figma:asset/5e107f4695c8fa6ef7864c26b157c84d26257f67.png';|import bgImage from '/images/bg-agent.png';|g" \
        src/app/components/AgentSection.tsx
    rm -f src/app/components/AgentSection.tsx.bak
    echo -e "${GREEN}  ✓ AgentSection.tsx - 1 处替换完成${NC}"
fi

# BackgroundSection.tsx - 1 处替换
if [ -f "src/app/components/BackgroundSection.tsx" ]; then
    sed -i.bak \
        "s|import bgImage from 'figma:asset/b67e9e3a1c2ae4be1c2cf4fbb43e8dba52c55d23.png';|import bgImage from '/images/bg-background.png';|g" \
        src/app/components/BackgroundSection.tsx
    rm -f src/app/components/BackgroundSection.tsx.bak
    echo -e "${GREEN}  ✓ BackgroundSection.tsx - 1 处替换完成${NC}"
fi

# PracticesSection.tsx - 1 处替换
if [ -f "src/app/components/PracticesSection.tsx" ]; then
    sed -i.bak \
        "s|import bgImage from 'figma:asset/52f071b6e7277d79f139dda8b5a9faa0684f73eb.png';|import bgImage from '/images/bg-practices.png';|g" \
        src/app/components/PracticesSection.tsx
    rm -f src/app/components/PracticesSection.tsx.bak
    echo -e "${GREEN}  ✓ PracticesSection.tsx - 1 处替换完成${NC}"
fi

# ScenariosSection.tsx - 6 处替换
if [ -f "src/app/components/ScenariosSection.tsx" ]; then
    sed -i.bak \
        -e "s|import chat3dIcon from 'figma:asset/29213d90f9b28c32819613725640b5066474d7c7.png';|import chat3dIcon from '/images/icon-chat-3d.png';|g" \
        -e "s|import cluster3dIcon from 'figma:asset/8a2879ca0406a3bacc0a52bd4eda23f4057222cf.png';|import cluster3dIcon from '/images/icon-cluster-3d.png';|g" \
        -e "s|import report3dIcon from 'figma:asset/10e9c29274419f3d17978cf9abb75d74a8418c69.png';|import report3dIcon from '/images/icon-report-3d.png';|g" \
        -e "s|import knowledge3dIcon from 'figma:asset/b8b52ed3bdd24b962e48ba58b8f415024b825144.png';|import knowledge3dIcon from '/images/icon-knowledge-3d.png';|g" \
        -e "s|import doc3dIcon from 'figma:asset/bb5f866e01fef18353c24d08f4fae9a738e3231b.png';|import doc3dIcon from '/images/icon-doc-3d.png';|g" \
        -e "s|import flow3dIcon from 'figma:asset/0c3ed5875f0d988d82ff5cb29b8db4c36bd8a90c.png';|import flow3dIcon from '/images/icon-flow-3d.png';|g" \
        src/app/components/ScenariosSection.tsx
    rm -f src/app/components/ScenariosSection.tsx.bak
    echo -e "${GREEN}  ✓ ScenariosSection.tsx - 6 处替换完成${NC}"
fi

# ScenariosPage.tsx - 1 处替换
if [ -f "src/app/pages/ScenariosPage.tsx" ]; then
    sed -i.bak \
        "s|import decorativeImage from 'figma:asset/5fd875f703a4875f3991e32576e76f4cd7c2b025.png';|import decorativeImage from '/images/decorative-scenarios.png';|g" \
        src/app/pages/ScenariosPage.tsx
    rm -f src/app/pages/ScenariosPage.tsx.bak
    echo -e "${GREEN}  ✓ ScenariosPage.tsx - 1 处替换完成${NC}"
fi

echo ""

# 验证替换
echo -e "${YELLOW}验证替换结果...${NC}"

remaining=$(grep -r "figma:asset" src/ 2>/dev/null | wc -l)

if [ $remaining -eq 0 ]; then
    echo -e "${GREEN}✓ 所有 figma:asset 导入已成功替换！${NC}"
    echo ""
    echo -e "${BLUE}=========================================${NC}"
    echo -e "${GREEN}  替换完成！${NC}"
    echo -e "${BLUE}=========================================${NC}"
    echo ""
    echo "下一步："
    echo "  1. 运行 'npm run dev' 测试"
    echo "  2. 检查所有图片是否正常显示"
    echo "  3. 运行 'npm run build' 构建生产版本"
    echo ""
    echo "备份位置: $backup_dir/"
    echo ""
    echo "如需恢复原始文件："
    echo "  cp $backup_dir/* src/app/components/"
    echo "  cp $backup_dir/* src/app/pages/"
    echo ""
else
    echo -e "${YELLOW}⚠ 警告: 仍有 $remaining 处 figma:asset 导入未替换${NC}"
    echo ""
    echo "运行以下命令查看详情："
    echo "  grep -r \"figma:asset\" src/"
    echo ""
fi

exit 0
