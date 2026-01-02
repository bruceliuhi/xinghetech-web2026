# 部署后SEO配置清单

> 网站部署上线后，必须完成以下配置才能充分发挥SEO效果

---

## ⚡ 紧急任务（部署当天必须完成）

### 1. ✅ 验证网站可访问性

```bash
# 测试主域名
curl -I https://www.xinghetech.cn

# 测试www和非www都能访问
curl -I https://xinghetech.cn
curl -I https://www.xinghetech.cn

# 测试HTTPS重定向
curl -I http://www.xinghetech.cn
# 应该返回 301 重定向到 https://
```

**检查项**:
- [ ] HTTPS正常工作
- [ ] HTTP自动跳转到HTTPS
- [ ] www和非www都能访问（其中一个301跳转到另一个）
- [ ] 所有页面正常显示
- [ ] 图片正常加载

---

### 2. ✅ 验证SEO文件

```bash
# 测试 robots.txt
curl https://www.xinghetech.cn/robots.txt

# 测试 sitemap.xml
curl https://www.xinghetech.cn/sitemap.xml
```

**检查项**:
- [ ] robots.txt可访问
- [ ] sitemap.xml可访问
- [ ] sitemap.xml格式正确（用浏览器打开查看）

---

## 📅 第1周任务

### 3. ✅ 注册搜索引擎站长平台

#### 百度站长平台

**步骤**:
1. 访问: https://ziyuan.baidu.com/
2. 点击"用户中心" → "站点管理" → "添加网站"
3. 输入网站URL: `https://www.xinghetech.cn`
4. 选择网站属性: 
   - 站点类型: 企业
   - 主体备案号: 京ICP备17041981号-14
5. 选择验证方式: **HTML标签验证**

**验证代码获取**:
```html
<!-- 百度会提供类似这样的代码 -->
<meta name="baidu-site-verification" content="codeva-xxxxxxxxxx" />
```

**验证代码添加位置**:
修改 `/index.html` 文件：

```html
<!-- 搜索引擎验证（需要替换为实际验证码） -->
<meta name="baidu-site-verification" content="你从百度获取的验证码" />
```

6. 点击"完成验证"

**完成后**:
- [ ] 网站已添加到百度站长平台
- [ ] 验证码已添加到index.html
- [ ] 验证成功

---

#### Google Search Console

**步骤**:
1. 访问: https://search.google.com/search-console
2. 点击"添加资源"
3. 选择"网址前缀"方式
4. 输入网站URL: `https://www.xinghetech.cn`
5. 选择验证方式: **HTML标记**

**验证代码获取**:
```html
<!-- Google会提供类似这样的代码 -->
<meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxxxxx" />
```

**验证代码添加位置**:
修改 `/index.html` 文件：

```html
<meta name="google-site-verification" content="你从Google获取的验证码" />
```

6. 点击"验证"

**完成后**:
- [ ] 网站已添加到Google Search Console
- [ ] 验证码已添加到index.html
- [ ] 验证成功

---

### 4. ✅ 提交Sitemap

#### 提交到百度

**步骤**:
1. 登录百度站长平台
2. 选择你的网站
3. 左侧菜单 → "数据引入" → "链接提交"
4. 选择"sitemap"
5. 输入sitemap地址: `https://www.xinghetech.cn/sitemap.xml`
6. 点击"提交"

**完成后**:
- [ ] Sitemap已提交到百度
- [ ] 提交状态: 已提交

---

#### 提交到Google

**步骤**:
1. 登录Google Search Console
2. 选择你的网站资源
3. 左侧菜单 → "站点地图"
4. 输入sitemap地址: `sitemap.xml`（只需输入文件名）
5. 点击"提交"

**完成后**:
- [ ] Sitemap已提交到Google
- [ ] 状态显示: 成功

---

### 5. ✅ 提交首页URL（加速收录）

#### 百度快速收录

**步骤**:
1. 百度站长平台 → "数据引入" → "普通收录"
2. 选择"手动提交"
3. 输入以下URL（每行一个）:
   ```
   https://www.xinghetech.cn/
   https://www.xinghetech.cn/capabilities
   https://www.xinghetech.cn/agent
   https://www.xinghetech.cn/scenarios
   https://www.xinghetech.cn/practices
   https://www.xinghetech.cn/about
   ```
4. 点击"提交"

**完成后**:
- [ ] 所有主要页面已提交到百度

---

#### Google URL检查

**步骤**:
1. Google Search Console
2. 顶部搜索框输入: `https://www.xinghetech.cn/`
3. 点击"请求编入索引"
4. 等待确认

重复以上步骤，提交所有主要页面。

**完成后**:
- [ ] 所有主要页面已请求Google索引

---

## 📅 第2周任务

### 6. ✅ 创建社交分享图片

**规格要求**:
- **尺寸**: 1200 x 630 像素
- **格式**: JPG 或 PNG
- **大小**: < 5MB
- **位置**: `/public/images/og-image.jpg`

**内容建议**:
- 星河卓越Logo
- 标语: "行业级AI平台"
- 品牌色背景: #2C4BFF 到 #9122FA 渐变
- 简洁清晰，易于识别

**设计工具**:
- Canva: https://www.canva.com/
- Figma: https://www.figma.com/
- Photoshop

**完成后**:
- [ ] 图片已创建并优化
- [ ] 文件已上传到 /public/images/og-image.jpg
- [ ] 测试社交分享（见下方"测试"部分）

---

### 7. ✅ 创建Favicon图标

**需要创建的文件**:
```
/public/favicon-16x16.png     (16x16像素)
/public/favicon-32x32.png     (32x32像素)
/public/apple-touch-icon.png  (180x180像素)
```

**快速生成工具**:

**方式一: Real Favicon Generator（推荐）**
1. 访问: https://realfavicongenerator.net/
2. 上传Logo（至少260x260像素）
3. 调整各平台显示效果
4. 点击"Generate your Favicons and HTML code"
5. 下载Favicon包
6. 将文件上传到 `/public/` 目录

**方式二: Favicon.io**
1. 访问: https://favicon.io/
2. 选择"PNG → ICO"或"Text → ICO"
3. 上传Logo或输入文字
4. 下载并上传到 `/public/` 目录

**完成后**:
- [ ] 所有Favicon文件已创建
- [ ] 文件已上传到 /public/
- [ ] 浏览器标签显示正确图标

---

### 8. ✅ 配置Analytics（可选但强烈推荐）

#### Google Analytics 4

**步骤**:
1. 访问: https://analytics.google.com/
2. 创建账号和资源
3. 获取衡量ID（格式: G-XXXXXXXXXX）
4. 修改 `/index.html`，在 `<head>` 中添加:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. 保存并重新部署

**完成后**:
- [ ] GA4已配置
- [ ] 实时报告能看到访问数据

---

#### 百度统计

**步骤**:
1. 访问: https://tongji.baidu.com/
2. 注册并添加网站
3. 获取统计代码
4. 修改 `/index.html`，在 `</head>` 之前添加:

```html
<!-- 百度统计 -->
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?你的统计ID";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
```

5. 保存并重新部署

**完成后**:
- [ ] 百度统计已配置
- [ ] 能看到实时访客

---

## 📅 第1个月任务

### 9. ✅ 提交到其他搜索引擎

#### 360搜索

**步骤**:
1. 访问: http://zhanzhang.so.com/
2. 注册并验证网站
3. 提交sitemap

---

#### 搜狗搜索

**步骤**:
1. 访问: http://zhanzhang.sogou.com/
2. 注册并验证网站
3. 提交sitemap

---

#### 必应（Bing）

**步骤**:
1. 访问: https://www.bing.com/webmasters
2. 注册并验证网站
3. 提交sitemap

**提示**: 如果已配置Google Search Console，可以直接导入

**完成后**:
- [ ] 360搜索已配置
- [ ] 搜狗搜索已配置
- [ ] 必应已配置

---

### 10. ✅ 首次内容发布

**建议发布**:
- [ ] 2-3篇行业洞察文章
- [ ] 1-2个客户案例
- [ ] 产品更新公告

**发布位置**:
- 官网博客（如有）
- 微信公众号
- 知乎机构号
- 行业论坛

**SEO技巧**:
- 包含目标关键词
- 原创高质量内容
- 添加内部链接
- 引导外部分享

---

## 🧪 测试检查清单

### SEO测试

#### 在线工具测试
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - 移动端得分 > 90
  - 桌面端得分 > 95
  
- [ ] Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
  - 通过移动设备易用性测试
  
- [ ] 结构化数据测试: https://search.google.com/test/rich-results
  - Organization数据正确显示
  
- [ ] SEO Meta检查: https://www.seoptimer.com/
  - 综合得分 > 80

---

#### 手动检查
- [ ] 每个页面的标题都不同
- [ ] 每个页面的描述都不同
- [ ] 图片都有alt属性
- [ ] 链接都有描述性文本
- [ ] H1-H6标题层级正确

---

### 社交分享测试

#### Facebook调试器
1. 访问: https://developers.facebook.com/tools/debug/
2. 输入网站URL
3. 点击"Debug"
4. 检查预览效果

**检查项**:
- [ ] 标题正确
- [ ] 描述正确
- [ ] 图片正确显示
- [ ] 图片尺寸符合要求

---

#### Twitter Card验证
1. 访问: https://cards-dev.twitter.com/validator
2. 输入网站URL
3. 点击"Preview card"

**检查项**:
- [ ] 卡片类型: summary_large_image
- [ ] 标题正确
- [ ] 描述正确
- [ ] 图片正确显示

---

#### LinkedIn分享测试
1. 访问: https://www.linkedin.com/post-inspector/
2. 输入网站URL
3. 检查预览

**检查项**:
- [ ] 标题正确
- [ ] 描述正确
- [ ] 图片正确显示

---

### 性能测试

#### GTmetrix
1. 访问: https://gtmetrix.com/
2. 输入网站URL
3. 查看报告

**目标**:
- [ ] Performance Grade: A
- [ ] Structure Grade: A
- [ ] 加载时间 < 3秒

---

#### WebPageTest
1. 访问: https://www.webpagetest.org/
2. 输入网站URL
3. 选择测试地点（选择中国节点）
4. 运行测试

**检查项**:
- [ ] First Byte Time < 1秒
- [ ] Start Render < 2秒
- [ ] Fully Loaded < 5秒

---

### 可访问性测试

#### WAVE
1. 访问: https://wave.webaim.org/
2. 输入网站URL
3. 查看报告

**检查项**:
- [ ] 无严重错误
- [ ] 对比度符合要求
- [ ] ARIA使用正确

---

## 📊 监控设置

### Google Search Console监控

**设置提醒**:
1. Search Console → 设置 → 用户和权限
2. 添加邮箱接收提醒
3. 关注以下指标:
   - 覆盖范围错误
   - 安全性问题
   - 手动操作

**每周检查**:
- [ ] 搜索效果（展现、点击、CTR、排名）
- [ ] 覆盖范围（已收录页面数）
- [ ] 移动设备易用性
- [ ] Core Web Vitals

---

### 百度站长平台监控

**每周检查**:
- [ ] 索引量
- [ ] 抓取频次
- [ ] 抓取异常
- [ ] 关键词排名

---

### Analytics监控

**每日检查**:
- [ ] 访问量
- [ ] 访问来源
- [ ] 热门页面
- [ ] 实时用户

**每周检查**:
- [ ] 用户增长趋势
- [ ] 流量来源变化
- [ ] 转化率
- [ ] 跳出率

---

## ✅ 最终验收清单

### 搜索引擎验证
- [ ] 百度站长平台验证成功
- [ ] Google Search Console验证成功
- [ ] Sitemap已提交到百度
- [ ] Sitemap已提交到Google
- [ ] 主要页面已请求收录

### 文件和图片
- [ ] robots.txt可访问
- [ ] sitemap.xml可访问
- [ ] og-image.jpg已创建并优化
- [ ] Favicon图标全部创建
- [ ] 所有图片都有alt属性

### Meta标签
- [ ] 百度验证码已填写
- [ ] Google验证码已填写
- [ ] 每个页面TDK都不同
- [ ] Open Graph标签正确
- [ ] Twitter Card标签正确

### Analytics
- [ ] Google Analytics已配置（可选）
- [ ] 百度统计已配置（可选）
- [ ] 能看到实时数据

### 测试通过
- [ ] PageSpeed Insights > 90分
- [ ] Mobile-Friendly测试通过
- [ ] 社交分享预览正确
- [ ] 所有页面正常访问
- [ ] 404页面正常显示

### 监控配置
- [ ] Search Console监控已设置
- [ ] 百度站长监控已设置
- [ ] Analytics监控已设置
- [ ] 每周检查计划已制定

---

## 📞 需要帮助？

如在配置过程中遇到问题，请联系：
- 技术支持邮箱: business@xinghetech.cn
- 联系电话: 400 110 8776

---

## 📝 配置完成确认

完成以上所有任务后，请在下方签名确认：

**配置完成人**: _______________  
**完成日期**: _______________  
**验收人**: _______________  
**验收日期**: _______________  

---

**版权所有**: © 2017-2026 北京星河卓越科技有限公司  
**文档版本**: v1.0  
**最后更新**: 2025-12-31
