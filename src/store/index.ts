import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, ArticleState, UIState } from '../types';

interface ThemeStore {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      isDarkMode: false,
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme, isDarkMode: newTheme === 'dark' });
        
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
      },
      setTheme: (theme) => {
        set({ theme, isDarkMode: theme === 'dark' });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);

interface ArticleStore extends ArticleState {
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sortBy: 'date' | 'views' | 'readTime') => void;
  setCurrentPage: (page: number) => void;
  resetFilters: () => void;
  toggleFavorite: (articleId: string) => void;
  toggleLike: (articleId: string) => void;
  isFavorite: (articleId: string) => boolean;
  isLiked: (articleId: string) => boolean;
}

const initialArticleState: ArticleState = {
  articles: [],
  selectedCategory: '全部',
  searchQuery: '',
  sortBy: 'date',
  currentPage: 1,
  favorites: [],
  likes: [],
};

export const useArticleStore = create<ArticleStore>()(
  persist(
    (set, get) => ({
      ...initialArticleState,
      setSelectedCategory: (category) => {
        set({ selectedCategory: category, currentPage: 1 });
      },
      setSearchQuery: (query) => {
        set({ searchQuery: query, currentPage: 1 });
      },
      setSortBy: (sortBy) => {
        set({ sortBy });
      },
      setCurrentPage: (page) => {
        set({ currentPage: page });
      },
      resetFilters: () => {
        set(initialArticleState);
      },
      toggleFavorite: (articleId) => {
        const favorites = get().favorites;
        const index = favorites.indexOf(articleId);
        if (index > -1) {
          set({ favorites: favorites.filter((id) => id !== articleId) });
        } else {
          set({ favorites: [...favorites, articleId] });
        }
      },
      toggleLike: (articleId) => {
        const likes = get().likes;
        const index = likes.indexOf(articleId);
        if (index > -1) {
          set({ likes: likes.filter((id) => id !== articleId) });
        } else {
          set({ likes: [...likes, articleId] });
        }
      },
      isFavorite: (articleId) => get().favorites.includes(articleId),
      isLiked: (articleId) => get().likes.includes(articleId),
    }),
    {
      name: 'article-storage',
      partialize: (state) => ({
        favorites: state.favorites,
        likes: state.likes,
      }),
    }
  )
);

interface Store extends UIState {
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsLoading: (loading: boolean) => void;
  setScrollY: (y: number) => void;
}

export const useUIStore = create<Store>((set) => ({
  isMobileMenuOpen: false,
  isSearchOpen: false,
  isLoading: false,
  scrollY: 0,
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  setIsSearchOpen: (open) => set({ isSearchOpen: open }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setScrollY: (y) => set({ scrollY: y }),
}));
