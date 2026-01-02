import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultSEO = {
  title: '星河卓越 - 行业级AI平台',
  description: '星河卓越面向行业与企业提供AI平台与智能系统能力，包括大模型应用、智能体系统、应用场景解决方案等，助力企业数字化转型与智能化升级。',
  keywords: 'AI平台,人工智能,大模型,智能体,企业AI,AI应用,智能系统,数字化转型,星河卓越',
  image: '/images/og-image.jpg',
  siteName: '星河卓越',
  type: 'website',
};

const pageSEO: Record<string, SEOProps> = {
  '/': {
    title: '星河卓越 - 行业级AI平台 | 企业智能化解决方案',
    description: '星河卓越提供行业级AI平台与智能系统能力，涵盖大模型应用、多智能体系统、应用场景解决方案，助力企业实现智能化转型与数字化升级。',
    keywords: 'AI平台,行业AI,企业AI,智能化解决方案,大模型应用,智能体系统,星河卓越',
  },
  '/capabilities': {
    title: '平台能力 - 星河卓越AI平台',
    description: '星河卓越AI平台核心能力包括：大模型能力、应用能力、智能体能力、系统集成能力、安全合规能力，为企业提供全方位AI技术支持。',
    keywords: '平台能力,大模型,AI应用,智能体,系统集成,安全合规,星河卓越',
  },
  '/agent': {
    title: '智能体 - 多智能体协同系统 | 星河卓越',
    description: '星河卓越智能体系统提供多智能体协同、任务规划、工具调用等能力，支持客服、数据分析、知识管理等多种场景应用。',
    keywords: '智能体,AI Agent,多智能体,智能客服,数据分析,知识管理,星河卓越',
  },
  '/scenarios': {
    title: '应用场景 - AI场景解决方案 | 星河卓越',
    description: '星河卓越提供客户服务、内容审核、运营数据分析、知识查询、文档理解、跨系统操作等6大应用场景解决方案，满足企业多样化需求。',
    keywords: '应用场景,客户服务,内容审核,数据分析,知识查询,文档理解,AI解决方案,星河卓越',
  },
  '/practices': {
    title: '应用实践 - 企业AI落地案例 | 星河卓越',
    description: '星河卓越应用实践案例涵盖多个行业，展示AI技术在企业中的实际应用效果与落地经验，为您的AI项目提供参考。',
    keywords: '应用实践,AI案例,企业案例,落地经验,行业应用,星河卓越',
  },
  '/about': {
    title: '关于我们 - 星河卓越科技有限公司',
    description: '北京星河卓越科技有限公司专注于行业级AI平台研发，致力于为企业提供专业的AI解决方案与技术服务。联系我们：400 110 8776',
    keywords: '关于我们,星河卓越,企业介绍,联系方式,AI公司,北京星河卓越科技',
  },
};

export function SEO({ title, description, keywords, image, url }: SEOProps) {
  const location = useLocation();
  const pathname = location.pathname;
  
  // 获取当前页面的SEO信息
  const pageMeta = pageSEO[pathname] || {};
  const finalTitle = title || pageMeta.title || defaultSEO.title;
  const finalDescription = description || pageMeta.description || defaultSEO.description;
  const finalKeywords = keywords || pageMeta.keywords || defaultSEO.keywords;
  const finalImage = image || pageMeta.image || defaultSEO.image;
  const finalUrl = url || `https://www.xinghetech.cn${pathname}`;

  useEffect(() => {
    // 设置页面标题
    document.title = finalTitle;

    // 更新或创建 meta 标签
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // 基础 meta 标签
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);

    // Open Graph 标签
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('og:url', finalUrl, true);
    updateMetaTag('og:type', defaultSEO.type, true);
    updateMetaTag('og:site_name', defaultSEO.siteName, true);
    updateMetaTag('og:locale', 'zh_CN', true);

    // Twitter Card 标签
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', finalImage);

    // 移动端优化
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');

    // 百度相关
    updateMetaTag('baidu-site-verification', 'code-placeholder'); // 需要替换为实际验证码
    updateMetaTag('applicable-device', 'pc,mobile');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = finalUrl;

  }, [finalTitle, finalDescription, finalKeywords, finalImage, finalUrl, pathname]);

  return null;
}
