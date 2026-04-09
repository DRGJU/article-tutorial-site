import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  tti: number; // Time to Interactive
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    tti: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 监听 FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, fcp: lastEntry.startTime }));
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // 监听 LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // 监听 FID
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // 监听 CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // 计算 TTI
    window.addEventListener('load', () => {
      const tti = performance.now();
      setMetrics(prev => ({ ...prev, tti }));
    });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  const getRating = (value: number, good: number, poor: number) => {
    if (value <= good) return 'good';
    if (value <= poor) return 'needs-improvement';
    return 'poor';
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      {/* 性能监控按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="性能监控"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {/* 性能监控面板 */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-scale-in">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">性能监控</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-1">Core Web Vitals</p>
          </div>

          <div className="p-4 space-y-3">
            {/* FCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">FCP</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(getRating(metrics.fcp, 1000, 3000))}`}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>

            {/* LCP */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">LCP</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(getRating(metrics.lcp, 2500, 4000))}`}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>

            {/* FID */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">FID</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(getRating(metrics.fid, 100, 300))}`}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>

            {/* CLS */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">CLS</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(getRating(metrics.cls, 0.1, 0.25))}`}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>

            {/* TTI */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">TTI</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${getRatingColor(getRating(metrics.tti, 3800, 7300))}`}>
                {metrics.tti.toFixed(0)}ms
              </span>
            </div>
          </div>

          {/* 性能建议 */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-600 mb-2">优化建议</h4>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>✅ 使用图片懒加载</li>
              <li>✅ 启用 GPU 加速</li>
              <li>✅ 优化动画性能</li>
              <li>✅ 组件渲染优化</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
