// 全局类型定义

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author?: string;
  date?: string;
  readTime: string;
  image: string;
  tags?: string[];
  views?: number;
}

export interface LearningResource {
  title: string;
  description: string;
  url: string;
  color: string;
  icon: React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar: string;
  likes: number;
}

export type Theme = 'light' | 'dark';

export interface AppState {
  theme: Theme;
  isDarkMode: boolean;
}

export interface ArticleState {
  articles: Article[];
  selectedCategory: string;
  searchQuery: string;
  sortBy: 'date' | 'views' | 'readTime';
  currentPage: number;
  favorites: string[];
  likes: string[];
}

export interface UIState {
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  isLoading: boolean;
  scrollY: number;
}
