import { useEffect, useCallback } from 'react';
import { debounce as debounceFn, throttle as throttleFn } from '../utils';

/**
 * 滚动监听 Hook
 */
export const useScroll = (callback: (scrollY: number) => void, wait = 100) => {
  const debouncedCallback = useCallback(
    debounceFn((y: number) => callback(y), wait),
    [callback, wait]
  );

  useEffect(() => {
    const handleScroll = () => {
      debouncedCallback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debouncedCallback]);
};

/**
 * 窗口大小变化监听 Hook
 */
export const useWindowSize = () => {
  const getWindowSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      // 可以在这里触发重渲染或回调
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return getWindowSize();
};

/**
 * 点击外部关闭 Hook
 */
export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

/**
 * 暗色模式 Hook
 */
export const useDarkMode = () => {
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark-mode');
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggle = useCallback(() => {
    document.documentElement.classList.toggle('dark-mode');
  }, []);

  return { toggle };
};

/**
 * 本地存储 Hook
 */
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const getStoredValue = (): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(initialValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [getStoredValue(), setValue] as const;
};
