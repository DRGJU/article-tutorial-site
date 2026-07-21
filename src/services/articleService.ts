import type { Article } from '../types';

// 模拟文章数据 - 后续可以替换为真实 API
const ARTICLES_DATA: Article[] = [
  {
    id: '9',
    title: '深入理解计算机系统 - 程序员的计算机系统观',
    excerpt: '基于 CSAPP 经典著作，系统讲解计算机系统的核心概念。从编译过程到内存管理，全面建立程序员的计算机系统观。',
    category: '计算机系统',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '200 分钟',
    image: '🖥️',
    views: 0,
    tags: ['深入理解计算机系统', 'CSAPP', '计算机系统', '汇编', '内存管理', '操作系统', '完整教程'],
  },
  {
    id: '8',
    title: '算法图解 - 轻松入门算法的可视化指南',
    excerpt: '基于 Aditya Bhargava 经典著作，用图文并茂的方式系统讲解常用算法。从大 O 表示法到动态规划，让算法学习变得简单有趣。',
    category: '算法入门',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '120 分钟',
    image: '📊',
    views: 0,
    tags: ['算法', '图解', '数据结构', '入门教程'],
  },
  {
    id: '7',
    title: '编程珠玑 - 编程艺术的经典智慧',
    excerpt: '基于 Jon Bentley 经典著作，系统讲解编程中的核心思想和实用技巧。从问题定义到算法设计，全面提升编程能力。',
    category: '编程艺术',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '150 分钟',
    image: '📚',
    views: 0,
    tags: ['编程', '算法', '代码优化'],
  },
  {
    id: '6',
    title: '计算机科学概论 - 全面解读计算机科学的基石',
    excerpt: '系统介绍计算机科学的核心概念和基础原理。从二进制到人工智能，全面了解计算机科学的完整知识体系。',
    category: '计算机科学',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '180 分钟',
    image: '💻',
    views: 0,
    tags: ['计算机科学', '基础理论'],
  },
  {
    id: '1',
    title: 'Docker 安装与配置完全指南',
    excerpt: '从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践，帮助您快速上手容器化技术。',
    category: '技术',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '15 分钟',
    image: '🐳',
    views: 0,
    tags: ['Docker', '容器', 'DevOps'],
  },
  {
    id: '2',
    title: '计算机科学导论',
    excerpt: '全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构等核心知识。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '180 分钟',
    image: '💻',
    views: 0,
    tags: ['计算机科学', '入门', '教程'],
  },
  {
    id: '3',
    title: '编码：隐匿在计算机软件背后的语言',
    excerpt: '从零开始系统讲解编码、二进制、逻辑电路到计算机工作原理的完整知识体系。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '180 分钟',
    image: '📖',
    views: 0,
    tags: ['编码', '计算机原理'],
  },
  {
    id: '4',
    title: '网络是怎样连接的 - 完整指南',
    excerpt: '系统讲解从输入 URL 到网页显示的完整网络过程，涵盖 HTTP、DNS、TCP/IP 等核心知识。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '150 分钟',
    image: '🌐',
    views: 0,
    tags: ['网络', 'HTTP', 'TCP/IP'],
  },
  {
    id: '5',
    title: 'Python 编程：从入门到实践 - 完整教程',
    excerpt: '从零开始系统讲解 Python 编程的基础知识和实践项目，包含游戏开发、数据可视化、Web 应用。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '200 分钟',
    image: '🐍',
    views: 0,
    tags: ['Python', '编程', '实战项目'],
  },
];

export const articleService = {
  getAll: async (): Promise<Article[]> => {
    // 模拟 API 延迟
    await new Promise((resolve) => setTimeout(resolve, 300));
    return ARTICLES_DATA;
  },

  getById: async (id: string): Promise<Article | null> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const article = ARTICLES_DATA.find((a) => a.id === id);
    return article || null;
  },

  getByCategory: async (category: string): Promise<Article[]> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (category === '全部') {
      return ARTICLES_DATA;
    }
    return ARTICLES_DATA.filter((a) => a.category === category);
  },

  search: async (query: string): Promise<Article[]> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const q = query.toLowerCase();
    return ARTICLES_DATA.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author?.toLowerCase().includes(q)
    );
  },
};
