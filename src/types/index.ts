// 用户角色类型
export type UserRole = 'user' | 'admin';

// 文件类型
export type FileType = 'document' | 'video' | 'code' | 'other';

// 用户信息
export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  role: UserRole;
  createdAt: string;
  updatedAt?: string;
}

// 分类信息
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  parentId?: number;
  parent?: Category;
  children?: Category[];
  articleCount: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}

// 标签信息
export interface Tag {
  id: number;
  name: string;
  slug: string;
  articleCount: number;
  createdAt: string;
}

// 文章信息
export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  categoryId: number;
  category?: Category;
  authorId: number;
  author?: User;
  tags: Tag[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  isPublished: boolean;
  isFeatured: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// 评论信息
export interface Comment {
  id: number;
  content: string;
  articleId: number;
  userId: number;
  user?: User;
  parentId?: number;
  parent?: Comment;
  replies?: Comment[];
  likeCount: number;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

// 教学资源
export interface Resource {
  id: number;
  title: string;
  description?: string;
  fileUrl: string;
  fileType: FileType;
  fileSize: number;
  articleId?: number;
  downloadCount: number;
  createdAt: string;
}

// API 响应基础类型
export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp?: string;
}

// 分页响应
export interface PageResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// 分页参数
export interface PageParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// 登录请求
export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

// 注册请求
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

// 创建文章请求
export interface CreateArticleRequest {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  categoryId: number;
  tagIds?: number[];
  isPublished?: boolean;
  isFeatured?: boolean;
}

// 更新文章请求
export interface UpdateArticleRequest {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  categoryId?: number;
  tagIds?: number[];
  isPublished?: boolean;
  isFeatured?: boolean;
}

// 创建评论请求
export interface CreateCommentRequest {
  content: string;
  articleId: number;
  parentId?: number;
}

// 更新用户信息
export interface UpdateUserRequest {
  username?: string;
  bio?: string;
  avatar?: string;
}

// 修改密码请求
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

// 错误响应
export interface ErrorResponse {
  code: number;
  message: string;
  details?: Record<string, string[]>;
}
