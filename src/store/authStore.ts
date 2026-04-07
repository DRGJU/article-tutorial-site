import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types';
import { authApi } from '@/api';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
  clearUser: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string, remember?: boolean) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authApi.login({ email, password, remember });
          const { token, user } = response.data;
          
          if (remember) {
            localStorage.setItem('token', token);
          } else {
            sessionStorage.setItem('token', token);
          }
          
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          set({ error: error.message || '登录失败', isLoading: false });
          throw error;
        }
      },

      register: async (username: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authApi.register({ username, email, password });
          const { token, user } = response.data;
          localStorage.setItem('token', token);
          set({ user, token, isAuthenticated: true, isLoading: false });
        } catch (error: any) {
          set({ error: error.message || '注册失败', isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          await authApi.logout();
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          set({ user: null, token: null, isAuthenticated: false, error: null });
        }
      },

      fetchCurrentUser: async () => {
        try {
          const response = await authApi.getCurrentUser();
          set({ user: response.data, isAuthenticated: true, error: null });
        } catch (error: any) {
          console.error('Fetch current user error:', error);
          set({ user: null, isAuthenticated: false, error: error.message });
        }
      },

      clearUser: () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        set({ user: null, token: null, isAuthenticated: false, error: null });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        token: state.token, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
