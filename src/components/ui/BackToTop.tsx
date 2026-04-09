import React, { useState, useEffect, useCallback } from 'react';

interface BackToTopProps {
  visibleThreshold?: number; // 显示按钮的滚动阈值（像素）
  scrollDuration?: number;   // 滚动动画持续时间（毫秒）
}

export const BackToTop: React.FC<BackToTopProps> = ({
  visibleThreshold = 300,
  scrollDuration = 800,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 防抖的滚动处理函数
  const handleScroll = useCallback(() => {
    // 使用 requestAnimationFrame 优化性能
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > visibleThreshold);
    });
  }, [visibleThreshold]);

  useEffect(() => {
    // 使用 passive listener 优化滚动性能
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 初始检查
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 平滑滚动到顶部
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // 键盘事件处理（支持回车和空格键）
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  return (
    <>
      {/* 回到顶部按钮 */}
      <button
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        aria-label="回到顶部"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        style={{
          background: `conic-gradient(#60a5fa ${scrollProgress}%, #2563eb 0%)`,
          scrollBehavior: 'smooth',
        }}
      >
        {/* 向上箭头图标 */}
        <div className="w-10 h-10 mx-auto bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </button>

    </>
  );
};
