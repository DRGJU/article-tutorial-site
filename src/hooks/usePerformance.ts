import { useEffect, useState, useCallback, useRef } from 'react';

/**
 * 防抖 Hook - 延迟执行函数
 */
export function useDebounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 300
) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedFn = useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }, [func, delay]);

  return debouncedFn;
}

/**
 * 节流 Hook - 限制函数执行频率
 */
export function useThrottle<T extends (...args: any[]) => any>(
  func: T,
  limit: number = 300
) {
  const inThrottle = useRef(false);
  const lastArgs = useRef<Parameters<T> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const throttledFn = useCallback((...args: Parameters<T>) => {
    if (inThrottle.current) {
      lastArgs.current = args;
      return;
    }

    func(...args);
    inThrottle.current = true;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      inThrottle.current = false;
      if (lastArgs.current) {
        const savedArgs = lastArgs.current;
        lastArgs.current = null;
        func(...savedArgs);
      }
    }, limit);
  }, [func, limit]);

  return throttledFn;
}

/**
 * 滚动位置 Hook
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

/**
 * 元素可见性 Hook - 用于懒加载
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
}

/**
 * 窗口尺寸 Hook
 */
export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

/**
 * 图片懒加载 Hook
 */
export function useLazyImage(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsError(true);
  }, [src, isIntersecting]);

  return { ref, isLoaded, isError, isIntersecting };
}

/**
 * 性能计时 Hook
 */
export function usePerformanceTimer(label: string) {
  useEffect(() => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${label}-start`);
    }

    return () => {
      if (typeof performance !== 'undefined') {
        performance.mark(`${label}-end`);
        performance.measure(label, `${label}-start`, `${label}-end`);
      }
    };
  }, [label]);
}

/**
 * 请求动画帧 Hook - 优化动画性能
 */
export function useRafCallback(callback: (timestamp: number) => void) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const loop = (timestamp: number) => {
      callback(timestamp);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [callback]);
}
