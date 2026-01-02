import { useEffect } from 'react';

/**
 * 性能优化组件
 * - 预加载关键资源
 * - 添加性能标记
 * - 优化Web Vitals
 */
export function PerformanceOptimizer() {
  useEffect(() => {
    // 标记首次渲染完成
    if (performance.mark) {
      performance.mark('app-rendered');
    }

    // 预连接到关键域名
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // 添加资源提示
    const dnsPrefetchDomains = [
      '//www.xinghetech.cn',
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Web Vitals 监控（可选，需要安装 web-vitals 包）
    if (typeof window !== 'undefined') {
      // 添加性能观察器
      if ('PerformanceObserver' in window) {
        try {
          // 监控 LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('[Performance] LCP:', lastEntry.renderTime || lastEntry.loadTime);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // 监控 FID
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('[Performance] FID:', entry.processingStart - entry.startTime);
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // 监控 CLS
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                console.log('[Performance] CLS:', entry.value);
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('[Performance] Observer initialization failed:', e);
        }
      }
    }

    // 清理函数
    return () => {
      // 可以在这里清理性能观察器
    };
  }, []);

  return null;
}
