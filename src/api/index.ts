import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import type { ApiResponse, PageResponse, LoginRequest, RegisterRequest, CreateArticleRequest, UpdateArticleRequest, CreateCommentRequest, Article, Category, Tag, User, Comment } from '@/types';

const API_BASE_URL = '/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error: AxiosError<ApiResponse<unknown>>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

export const authApi = {
  login: (data: LoginRequest) => 
    axiosInstance.post<ApiResponse<{ token: string; user: User }>>('/auth/login', data),
  
  register: (data: RegisterRequest) => 
    axiosInstance.post<ApiResponse<{ token: string; user: User }>>('/auth/register', data),
  
  logout: () => 
    axiosInstance.post<ApiResponse<void>>('/auth/logout'),
  
  getCurrentUser: () => 
    axiosInstance.get<ApiResponse<User>>('/auth/me'),
};

export const articleApi = {
  getArticles: (params?: { page?: number; pageSize?: number; categoryId?: number; tagId?: number; search?: string }) => 
    axiosInstance.get<PageResponse<Article>>('/articles', { params }),
  
  getArticle: (id: number) => 
    axiosInstance.get<ApiResponse<Article>>(`/articles/${id}`),
  
  createArticle: (data: CreateArticleRequest) => 
    axiosInstance.post<ApiResponse<Article>>('/articles', data),
  
  updateArticle: (id: number, data: UpdateArticleRequest) => 
    axiosInstance.put<ApiResponse<Article>>(`/articles/${id}`, data),
  
  deleteArticle: (id: number) => 
    axiosInstance.delete<ApiResponse<void>>(`/articles/${id}`),
  
  getFeaturedArticles: () => 
    axiosInstance.get<ApiResponse<Article[]>>('/articles/featured'),
  
  likeArticle: (id: number) => 
    axiosInstance.post<ApiResponse<{ likeCount: number }>>(`/articles/${id}/like`),
};

export const categoryApi = {
  getCategories: () => 
    axiosInstance.get<ApiResponse<Category[]>>('/categories'),
  
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
  getTags: () => 
    axiosInstance.get<ApiResponse<Tag[]>>('/tags'),
  
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
