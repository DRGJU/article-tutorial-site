import { create } from 'zustand';
import type { Article, Category, Tag } from '@/types';
import { articleApi, categoryApi, tagApi } from '@/api';

interface ArticleState {
  articles: Article[];
  categories: Category[];
  tags: Tag[];
  featuredArticles: Article[];
  isLoading: boolean;
  error: string | null;
  fetchArticles: (params?: { page?: number; pageSize?: number; categoryId?: number; tagId?: number; search?: string }) => Promise<void>;
  fetchArticle: (id: number) => Promise<Article | null>;
  fetchCategories: () => Promise<void>;
  fetchTags: () => Promise<void>;
  fetchFeaturedArticles: () => Promise<void>;
  searchArticles: (query: string) => Promise<void>;
  clearError: () => void;
}

export const useArticleStore = create<ArticleState>((set, get) => ({
  articles: [],
  categories: [],
  tags: [],
  featuredArticles: [],
  isLoading: false,
  error: null,

  fetchArticles: async (params) => {
    set({ isLoading: true, error: null });
    try {
      const response = await articleApi.getArticles(params);
      // 确保正确处理响应数据
      const articlesData = response.items || response.data || response || [];
      set({ articles: articlesData, isLoading: false });
    } catch (error: any) {
      console.error('获取文章列表失败:', error);
      set({ error: error.message || '获取文章失败', isLoading: false, articles: [] });
    }
  },

  fetchArticle: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      const response = await articleApi.getArticle(id);
      return response.data;
    } catch (error: any) {
      console.error('获取文章详情失败:', error);
      set({ error: error.message || '获取文章详情失败', isLoading: false });
      return null;
    }
  },

  fetchCategories: async () => {
    try {
      const response = await categoryApi.getCategories();
      const categoriesData = response.data || response || [];
      set({ categories: categoriesData });
    } catch (error: any) {
      console.error('获取分类失败:', error);
      set({ categories: [] });
    }
  },

  fetchTags: async () => {
    try {
      const response = await tagApi.getTags();
      const tagsData = response.data || response || [];
      set({ tags: tagsData });
    } catch (error: any) {
      console.error('获取标签失败:', error);
      set({ tags: [] });
    }
  },

  fetchFeaturedArticles: async () => {
    try {
      const response = await articleApi.getFeaturedArticles();
      set({ featuredArticles: response.data });
    } catch (error: any) {
      console.error('获取推荐文章失败:', error);
    }
  },

  searchArticles: async (query: string) => {
    if (!query.trim()) {
      get().fetchArticles();
      return;
    }
    set({ isLoading: true, error: null });
    try {
      const response = await articleApi.getArticles({ search: query });
      set({ articles: response.items, isLoading: false });
    } catch (error: any) {
      set({ error: error.message || '搜索失败', isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
