import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import type { 
  ApiResponse, PageResponse, LoginRequest, RegisterRequest, 
  CreateArticleRequest, UpdateArticleRequest, CreateCommentRequest, 
  Article, Category, Tag, User, Comment, UpdateUserRequest, 
  ChangePasswordRequest, ErrorResponse 
} from '@/types';
import mockApi from '@/mocks';

const API_BASE_URL = '/api';
const USE_MOCK = true; // 设置为 true 使用模拟数据

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<ApiResponse<unknown>>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    const errorData = error.response?.data as ErrorResponse;
    return Promise.reject(errorData || { message: '请求失败' });
  }
);

export const authApi = {
  login: async (data: LoginRequest) => {
    if (USE_MOCK) {
      await mockApi.sleep(500);
      const user = mockApi.users.find(u => u.email === data.email && u.password === data.password);
      if (!user) {
        throw { code: 401, message: '邮箱或密码错误' };
      }
      const { password, ...userWithoutPassword } = user;
      return {
        code: 200,
        message: '登录成功',
        data: {
          token: 'mock-jwt-token-' + user.id,
          user: userWithoutPassword
        }
      };
    }
    return axiosInstance.post<ApiResponse<{ token: string; user: User }>>('/auth/login', data);
  },
  
  register: async (data: RegisterRequest) => {
    if (USE_MOCK) {
      await mockApi.sleep(500);
      const existingUser = mockApi.users.find(u => u.email === data.email);
      if (existingUser) {
        throw { code: 400, message: '该邮箱已被注册' };
      }
      const newUser = {
        id: mockApi.users.length + 1,
        username: data.username,
        email: data.email,
        role: 'user' as const,
        createdAt: new Date().toISOString()
      };
      return {
        code: 200,
        message: '注册成功',
        data: {
          token: 'mock-jwt-token-' + newUser.id,
          user: newUser
        }
      };
    }
    return axiosInstance.post<ApiResponse<{ token: string; user: User }>>('/auth/register', data);
  },
  
  logout: async () => {
    if (USE_MOCK) {
      await mockApi.sleep(300);
      return { code: 200, message: '登出成功' };
    }
    return axiosInstance.post<ApiResponse<void>>('/auth/logout');
  },
  
  getCurrentUser: async () => {
    if (USE_MOCK) {
      await mockApi.sleep(300);
      const token = localStorage.getItem('token');
      if (!token) {
        throw { code: 401, message: '未登录' };
      }
      const userId = parseInt(token.split('-').pop() || '0');
      const user = mockApi.users.find(u => u.id === userId);
      if (!user) {
        throw { code: 404, message: '用户不存在' };
      }
      const { password, ...userWithoutPassword } = user;
      return { code: 200, message: 'success', data: userWithoutPassword };
    }
    return axiosInstance.get<ApiResponse<User>>('/auth/me');
  },
  
  updateProfile: async (data: UpdateUserRequest) => {
    if (USE_MOCK) {
      await mockApi.sleep(500);
      return { code: 200, message: '更新成功', data: { ...data, id: 1 } };
    }
    return axiosInstance.put<ApiResponse<User>>('/auth/profile', data);
  },
  
  changePassword: async (data: ChangePasswordRequest) => {
    if (USE_MOCK) {
      await mockApi.sleep(500);
      return { code: 200, message: '密码修改成功' };
    }
    return axiosInstance.post<ApiResponse<void>>('/auth/change-password', data);
  },
};

export const articleApi = {
  getArticles: async (params?: { page?: number; pageSize?: number; categoryId?: number; tagId?: number; search?: string }) => {
    if (USE_MOCK) {
      return Promise.resolve(mockApi.getArticles(params));
    }
    return axiosInstance.get<PageResponse<Article>>('/articles', { params });
  },
  
  getArticle: async (id: number) => {
    if (USE_MOCK) {
      const article = mockApi.getArticle(id);
      if (!article) throw new Error('Article not found');
      return Promise.resolve({ code: 200, message: 'success', data: article });
    }
    return axiosInstance.get<ApiResponse<Article>>(`/articles/${id}`);
  },
  
  createArticle: (data: CreateArticleRequest) => 
    axiosInstance.post<ApiResponse<Article>>('/articles', data),
  
  updateArticle: (id: number, data: UpdateArticleRequest) => 
    axiosInstance.put<ApiResponse<Article>>(`/articles/${id}`, data),
  
  deleteArticle: (id: number) => 
    axiosInstance.delete<ApiResponse<void>>(`/articles/${id}`),
  
  getFeaturedArticles: async () => {
    if (USE_MOCK) {
      return Promise.resolve({ code: 200, message: 'success', data: mockApi.getFeaturedArticles() });
    }
    return axiosInstance.get<ApiResponse<Article[]>>('/articles/featured');
  },
  
  likeArticle: (id: number) => 
    axiosInstance.post<ApiResponse<{ likeCount: number }>>(`/articles/${id}/like`),
};

export const categoryApi = {
  getCategories: async () => {
    if (USE_MOCK) {
      return Promise.resolve({ code: 200, message: 'success', data: mockApi.getCategories() });
    }
    return axiosInstance.get<ApiResponse<Category[]>>('/categories');
  },
  
  getCategory: (id: number) => 
    axiosInstance.get<ApiResponse<Category>>(`/categories/${id}`),
  
  createCategory: (data: { name: string; slug: string; parentId?: number }) => 
    axiosInstance.post<ApiResponse<Category>>('/categories', data),
  
  updateCategory: (id: number, data: { name?: string; slug?: string; parentId?: number }) => 
    axiosInstance.put<ApiResponse<Category>>(`/categories/${id}`, data),
  
  deleteCategory: (id: number) => 
    axiosInstance.delete<ApiResponse<void>>(`/categories/${id}`),
};

export const tagApi = {
  getTags: async () => {
    if (USE_MOCK) {
      return Promise.resolve({ code: 200, message: 'success', data: mockApi.getTags() });
    }
    return axiosInstance.get<ApiResponse<Tag[]>>('/tags');
  },
  
  createTag: (data: { name: string; slug: string }) => 
    axiosInstance.post<ApiResponse<Tag>>('/tags', data),
  
  deleteTag: (id: number) => 
    axiosInstance.delete<ApiResponse<void>>(`/tags/${id}`),
};

export const commentApi = {
  getComments: (articleId: number) => 
    axiosInstance.get<ApiResponse<Comment[]>>(`/articles/${articleId}/comments`),
  
  createComment: (data: CreateCommentRequest) => 
    axiosInstance.post<ApiResponse<Comment>>('/comments', data),
  
  deleteComment: (id: number) => 
    axiosInstance.delete<ApiResponse<void>>(`/comments/${id}`),
  
  likeComment: (id: number) => 
    axiosInstance.post<ApiResponse<{ likeCount: number }>>(`/comments/${id}/like`),
};

export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return axiosInstance.post<ApiResponse<{ url: string }>>('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    } as AxiosRequestConfig);
  },
};

export default axiosInstance;
