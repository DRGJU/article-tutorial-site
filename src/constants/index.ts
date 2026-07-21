// 全局常量配置

export const CATEGORIES = ['全部', '教程', '技术', '生活', '公告'] as const;

export const ITEMS_PER_PAGE = 8;

export const SORT_OPTIONS = [
  { value: 'date', label: '按发布时间' },
  { value: 'views', label: '按阅读量' },
  { value: 'readTime', label: '按阅读时间' },
] as const;

export const NAV_LINKS = [
  { path: '/', label: '首页' },
  { path: '/articles', label: '文章' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/DRGJU',
} as const;

export const SITE_CONFIG = {
  name: '知识学堂',
  description: '分享优质文章与教程，让学习变得更简单。',
  logo: '📚',
} as const;
