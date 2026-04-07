export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateTime = (date: string | Date): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export const formatRelativeTime = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return '刚刚';
  }

  const diffInMinute = Math.floor(diffInSeconds / 60);
  if (diffInMinute < 60) {
    return `${diffInMinute}分钟前`;
  }

  const diffInHour = Math.floor(diffInMinute / 60);
  if (diffInHour < 24) {
    return `${diffInHour}小时前`;
  }

  const diffInDay = Math.floor(diffInHour / 24);
  if (diffInDay < 30) {
    return `${diffInDay}天前`;
  }

  const diffInMonth = Math.floor(diffInDay / 30);
  if (diffInMonth < 12) {
    return `${diffInMonth}个月前`;
  }

  const diffInYear = Math.floor(diffInMonth / 12);
  return `${diffInYear}年前`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

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

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({ top: 0, behavior });
};
