import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ArticleList.css';

const CATEGORIES = ['全部', '教程', '技术', '生活', '公告'];
const ITEMS_PER_PAGE = 6;

const ARTICLES_DATA = [
  {
    id: 1,
    title: 'Docker 安装与配置完全指南',
    excerpt: '从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践，帮助您快速上手容器化技术。',
    category: '技术',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '15 分钟',
    image: '🐳',
    views: 0
  },
  {
    id: 2,
    title: '计算机科学导论',
    excerpt: '全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构、操作系统、网络、数据库、软件工程、Web 开发、网络安全等核心知识。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '180 分钟',
    image: '💻',
    views: 0
  },
  {
    id: 3,
    title: '编码：隐匿在计算机软件背后的语言',
    excerpt: '基于 Charles Petzold 经典著作，从零开始系统讲解编码、二进制、逻辑电路到计算机工作原理的完整知识体系，包含详细讲解、实例演示、动手实验和完整学习路线。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '180 分钟',
    image: '📖',
    views: 0
  },
  {
    id: 4,
    title: '网络是怎样连接的 - 完整指南',
    excerpt: '基于户根勤经典著作，系统讲解从输入 URL 到网页显示的完整网络过程，涵盖 HTTP、DNS、TCP/IP、路由器、交换机等核心知识。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '150 分钟',
    image: '🌐',
    views: 0
  },
  {
    id: 5,
    title: 'Python 编程：从入门到实践 - 完整教程',
    excerpt: '基于 Eric Matthes 经典著作，从零开始系统讲解 Python 编程的基础知识和实践项目，包含三个完整项目：游戏开发、数据可视化、Web 应用。',
    category: '教程',
    author: 'DRGJU',
    date: '2024-03-31',
    readTime: '200 分钟',
    image: '🐍',
    views: 0
  }
];

const ArticleList = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchParam = searchParams.get('search');
    const categoryParam = searchParams.get('category');
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const filteredAndSortedArticles = useMemo(() => {
    let result = [...ARTICLES_DATA];

    if (selectedCategory !== '全部') {
      result = result.filter(article => article.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          return b.views - a.views;
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const totalPages = useMemo(
    () => Math.ceil(filteredAndSortedArticles.length / ITEMS_PER_PAGE),
    [filteredAndSortedArticles]
  );

  const paginatedArticles = useMemo(
    () => filteredAndSortedArticles.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ),
    [filteredAndSortedArticles, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="article-list-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">全部文章</h1>
          <p className="page-subtitle">探索我们的文章库，找到您感兴趣的内容</p>
        </div>
      </div>

      <div className="container">
        {/* 搜索和排序工具栏 */}
        <div className="toolbar">
          <div className="search-box">
            <input
              type="text"
              placeholder="🔍 搜索文章标题、内容或作者..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-box-input"
              aria-label="搜索文章"
            />
          </div>
          <div className="sort-options">
            <label className="sort-label">排序方式：</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              aria-label="排序方式"
            >
              <option value="date">按发布时间</option>
              <option value="views">按阅读量</option>
              <option value="readTime">按阅读时间</option>
            </select>
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="category-filter">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 结果统计 */}
        <div className="results-info">
          找到 {filteredAndSortedArticles.length} 篇文章
          {searchQuery && <span> - 搜索关键词："{searchQuery}"</span>}
        </div>

        {/* 文章列表 */}
        <div className="articles-grid">
          {paginatedArticles.map((article) => (
            <a href={`/article/${article.id}`} key={article.id} className="article-card fade-in">
              <div className="article-card-image">
                <span className="card-emoji">{article.image}</span>
              </div>
              <div className="article-card-content">
                <div className="article-card-header">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <div className="article-card-footer">
                  <div className="article-author">
                    <span className="author-icon">👤</span>
                    <span>{article.author}</span>
                  </div>
                  <div className="article-meta-right">
                    <span className="article-views">👁️ {article.views}</span>
                    <span className="article-read-time">⏱️ {article.readTime}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {paginatedArticles.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>暂无文章</h3>
            <p>{searchQuery ? '没有找到匹配的文章，请尝试其他关键词' : '该分类下还没有文章，敬请期待'}</p>
          </div>
        )}

        {/* 分页 */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← 上一页
            </button>
            
            <div className="pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              下一页 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
