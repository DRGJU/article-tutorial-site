import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并 Tailwind CSS 类名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
export const formatDate = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * 格式化日期时间为 YYYY-MM-DD HH:mm:ss
 */
export const formatDateTime = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * 格式化相对时间
 */
export const formatRelativeTime = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  const now = new Date();
  const past = new Date(date);
  if (isNaN(past.getTime())) return '';
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 0) return '刚刚';
  if (diffInSeconds < 60) return '刚刚';
  
  const diffInMinute = Math.floor(diffInSeconds / 60);
  if (diffInMinute < 60) return `${diffInMinute}分钟前`;
  
  const diffInHour = Math.floor(diffInMinute / 60);
  if (diffInHour < 24) return `${diffInHour}小时前`;
  
  const diffInDay = Math.floor(diffInHour / 24);
  if (diffInDay < 30) return `${diffInDay}天前`;
  
  const diffInMonth = Math.floor(diffInDay / 30);
  if (diffInMonth < 12) return `${diffInMonth}个月前`;
  
  const diffInYear = Math.floor(diffInMonth / 12);
  return `${diffInYear}年前`;
};

/**
 * 格式化相对时间（详细版）
 */
export const formatRelativeTimeDetailed = (date: string | Date | undefined | null): string => {
  if (!date) return '';
  const now = new Date();
  const past = new Date(date);
  if (isNaN(past.getTime())) return '';
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 0) return '未来';
  if (diffInSeconds < 60) return `${diffInSeconds}秒前`;
  
  const diffInMinute = Math.floor(diffInSeconds / 60);
  if (diffInMinute < 60) return `${diffInMinute}分钟前`;
  
  const diffInHour = Math.floor(diffInMinute / 60);
  if (diffInHour < 24) return `${diffInHour}小时${diffInMinute % 60}分钟前`;
  
  const diffInDay = Math.floor(diffInHour / 24);
  if (diffInDay < 30) return `${diffInDay}天${diffInHour % 24}小时前`;
  
  const diffInMonth = Math.floor(diffInDay / 30);
  if (diffInMonth < 12) return `${diffInMonth}个月${diffInDay % 30}天前`;
  
  const diffInYear = Math.floor(diffInMonth / 12);
  return `${diffInYear}年${diffInMonth % 12}个月前`;
};

/**
 * 截断文本
 */
export const truncateText = (text: string | undefined | null, maxLength: number, suffix: string = '...'): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + suffix;
};

/**
 * 格式化文件大小
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

/**
 * 生成 URL 友好的 slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * 防抖函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * 节流函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 滚动到顶部
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({ top: 0, behavior });
};

/**
 * 滚动到指定元素
 */
export const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth'): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior, block: 'start' });
  }
};

/**
 * 验证邮箱格式
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 验证 URL 格式
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 深拷贝对象
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
  if (obj instanceof Object) {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        (clonedObj as any)[key] = deepClone((obj as any)[key]);
      }
    }
    return clonedObj;
  }
  return obj;
};

/**
 * 格式化数字（添加千分位）
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 获取随机颜色
 */
export const getRandomColor = (): string => {
  const colors = [
    'bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-yellow-500',
    'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500',
    'bg-cyan-500', 'bg-sky-500', 'bg-blue-500', 'bg-indigo-500',
    'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500', 'bg-rose-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * 从邮箱获取头像 URL（使用 Gravatar）
 */
export const getGravatarUrl = (email: string, size: number = 80): string => {
  const hash = btoa(email.toLowerCase().trim());
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=mp`;
};

/**
 * 休眠函数
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 重试执行函数
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await sleep(delay);
    return retry(fn, retries - 1, delay * 2);
  }
};
