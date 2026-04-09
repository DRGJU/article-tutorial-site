import type { Article, Category, Tag, User, PageResponse } from '@/types';

// 模拟用户数据
const users: Array<User & { password: string }> = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    bio: '知识学堂管理员，热爱分享技术知识',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    username: 'user1',
    email: 'user@example.com',
    password: 'user123',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    bio: '前端开发者',
    role: 'user',
    createdAt: '2024-01-02T00:00:00Z',
  },
];

// 模拟分类数据
const categories: Category[] = [
  {
    id: 1,
    name: '技术教程',
    slug: 'tutorials',
    description: '各种技术相关的教程和指南',
    icon: '💻',
    articleCount: 15,
    order: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: '前端开发',
    slug: 'frontend',
    description: 'Web 前端开发相关技术',
    icon: '🎨',
    articleCount: 12,
    order: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 3,
    name: '后端开发',
    slug: 'backend',
    description: '服务器端开发技术',
    icon: '⚙️',
    articleCount: 10,
    order: 3,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 4,
    name: 'DevOps',
    slug: 'devops',
    description: '运维和自动化',
    icon: '🚀',
    articleCount: 8,
    order: 4,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
];

// 模拟标签数据
const tags: Tag[] = [
  { id: 1, name: 'Docker', slug: 'docker', articleCount: 5, createdAt: '2024-01-01T00:00:00Z' },
  { id: 2, name: '容器化', slug: 'containerization', articleCount: 3, createdAt: '2024-01-01T00:00:00Z' },
  { id: 3, name: '计算机科学', slug: 'cs', articleCount: 8, createdAt: '2024-01-01T00:00:00Z' },
  { id: 4, name: '编程', slug: 'programming', articleCount: 12, createdAt: '2024-01-01T00:00:00Z' },
  { id: 5, name: 'Python', slug: 'python', articleCount: 6, createdAt: '2024-01-01T00:00:00Z' },
  { id: 6, name: 'JavaScript', slug: 'javascript', articleCount: 10, createdAt: '2024-01-01T00:00:00Z' },
  { id: 7, name: 'React', slug: 'react', articleCount: 8, createdAt: '2024-01-01T00:00:00Z' },
  { id: 8, name: 'Node.js', slug: 'nodejs', articleCount: 7, createdAt: '2024-01-01T00:00:00Z' },
];

// 模拟文章数据
const articles: Article[] = [
  {
    id: 1,
    title: 'Docker 安装与配置完全指南',
    slug: 'docker-installation-guide',
    excerpt: '从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践',
    content: '# Docker 安装与配置完全指南\n\n本教程将带你从零开始学习 Docker...',
    coverImage: 'https://picsum.photos/seed/docker/800/600',
    categoryId: 1,
    category: categories[0],
    authorId: 1,
    author: users[0],
    tags: [tags[0], tags[1]],
    viewCount: 1234,
    likeCount: 89,
    commentCount: 12,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-03-31T00:00:00Z',
    createdAt: '2024-03-30T00:00:00Z',
    updatedAt: '2024-03-31T00:00:00Z',
  },
  {
    id: 2,
    title: '计算机科学导论',
    slug: 'introduction-to-computer-science',
    excerpt: '全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构等核心知识',
    content: '# 计算机科学导论\n\n全面系统的计算机科学入门教程...',
    coverImage: 'https://picsum.photos/seed/computer/800/600',
    categoryId: 1,
    category: categories[0],
    authorId: 1,
    author: users[0],
    tags: [tags[2], tags[3]],
    viewCount: 2156,
    likeCount: 156,
    commentCount: 23,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-03-30T00:00:00Z',
    createdAt: '2024-03-29T00:00:00Z',
    updatedAt: '2024-03-30T00:00:00Z',
  },
  {
    id: 3,
    title: 'Python 编程：从入门到实践',
    slug: 'python-programming-guide',
    excerpt: '从零开始系统讲解 Python 编程的基础知识和实践项目',
    content: '# Python 编程：从入门到实践\n\nPython 是一门简洁、易读且功能强大的编程语言...',
    coverImage: 'https://picsum.photos/seed/python/800/600',
    categoryId: 1,
    category: categories[0],
    authorId: 1,
    author: users[0],
    tags: [tags[4], tags[3]],
    viewCount: 1876,
    likeCount: 134,
    commentCount: 18,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-03-28T00:00:00Z',
    createdAt: '2024-03-27T00:00:00Z',
    updatedAt: '2024-03-28T00:00:00Z',
  },
  {
    id: 4,
    title: 'React Hooks 完全指南',
    slug: 'react-hooks-guide',
    excerpt: '深入理解 React Hooks，掌握现代 React 开发的核心技能',
    content: '# React Hooks 完全指南\n\nReact Hooks 是 React 16.8 引入的新特性...',
    coverImage: 'https://picsum.photos/seed/react/800/600',
    categoryId: 2,
    category: categories[1],
    authorId: 1,
    author: users[0],
    tags: [tags[6], tags[3]],
    viewCount: 1543,
    likeCount: 112,
    commentCount: 15,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-03-26T00:00:00Z',
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-26T00:00:00Z',
  },
  {
    id: 5,
    title: 'Node.js 异步编程详解',
    slug: 'nodejs-async-programming',
    excerpt: '全面讲解 Node.js 中的异步编程模式：Callback、Promise、Async/Await',
    content: '# Node.js 异步编程详解\n\n异步编程是 Node.js 的核心...',
    coverImage: 'https://picsum.photos/seed/nodejs/800/600',
    categoryId: 3,
    category: categories[2],
    authorId: 1,
    author: users[0],
    tags: [tags[7], tags[3]],
    viewCount: 1321,
    likeCount: 98,
    commentCount: 11,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-03-24T00:00:00Z',
    createdAt: '2024-03-23T00:00:00Z',
    updatedAt: '2024-03-24T00:00:00Z',
  },
  {
    id: 6,
    title: 'Kubernetes 入门教程',
    slug: 'kubernetes-getting-started',
    excerpt: '学习 Kubernetes 的基础概念和核心组件，开启容器编排之旅',
    content: '# Kubernetes 入门教程\n\nKubernetes 是容器编排的事实标准...',
    coverImage: 'https://picsum.photos/seed/kubernetes/800/600',
    categoryId: 4,
    category: categories[3],
    authorId: 1,
    author: users[0],
    tags: [tags[0], tags[1]],
    viewCount: 987,
    likeCount: 76,
    commentCount: 9,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-03-22T00:00:00Z',
    createdAt: '2024-03-21T00:00:00Z',
    updatedAt: '2024-03-22T00:00:00Z',
  },
];

// 模拟 API 响应
const mockApi = {
  // 获取文章列表
  getArticles: (params?: { page?: number; pageSize?: number; categoryId?: number; search?: string }): PageResponse<Article> => {
    let filtered = articles;
    
    if (params?.categoryId) {
      filtered = filtered.filter(a => a.categoryId === params.categoryId);
    }
    
    if (params?.search) {
      const searchLower = params.search.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(searchLower) ||
        a.excerpt.toLowerCase().includes(searchLower)
      );
    }
    
    const page = params?.page || 1;
    const pageSize = params?.pageSize || 9;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    
    return {
      items: filtered.slice(start, end),
      total: filtered.length,
      page,
      pageSize,
      totalPages: Math.ceil(filtered.length / pageSize),
      hasNextPage: end < filtered.length,
      hasPrevPage: page > 1,
    };
  },

  // 获取文章详情
  getArticle: (id: number): Article | undefined => {
    return articles.find(a => a.id === id);
  },

  // 获取推荐文章
  getFeaturedArticles: (): Article[] => {
    return articles.filter(a => a.isFeatured);
  },

  // 获取分类列表
  getCategories: (): Category[] => {
    return categories;
  },

  // 获取标签列表
  getTags: (): Tag[] => {
    return tags;
  },
  
  // 休眠函数
  sleep: (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  
  // 用户列表（用于认证）
  users,
};

export default mockApi;
