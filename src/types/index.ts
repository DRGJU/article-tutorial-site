export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

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

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  parentId?: number;
  parent?: Category;
  children?: Category[];
  articleCount: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  articleCount: number;
  createdAt: string;
}

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

export interface Resource {
  id: number;
  title: string;
  description?: string;
  fileUrl: string;
  fileType: 'document' | 'video' | 'code' | 'other';
  fileSize: number;
  articleId?: number;
  downloadCount: number;
  createdAt: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface PageResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface CreateArticleRequest {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  categoryId: number;
  tagIds?: number[];
  isPublished?: boolean;
}

export interface UpdateArticleRequest {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  categoryId?: number;
  tagIds?: number[];
  isPublished?: boolean;
}

export interface CreateCommentRequest {
  content: string;
  articleId: number;
  parentId?: number;
}
