import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ArticleList.css';

const CATEGORIES = ['全部', '教程', '技术', '生活', '公告'];
const ITEMS_PER_PAGE = 6;

const ARTICLES_DATA = [
  {
    id: 1,
    title: '欢迎来到知识学堂',
    excerpt: '这是一个专注于分享优质文章和教程的平台，我们致力于提供高质量的学习内容，帮助您快速掌握新知识和技能。',
    category: '公告',
    author: '管理员',
    date: '2024-01-15',
    readTime: '2 分钟',
    image: '🎉',
    views: 1200
  },
  {
    id: 2,
    title: '如何高效学习编程',
    excerpt: '学习编程需要正确的方法和持续的努力。本文将分享一些高效学习的技巧和方法，帮助您更快地掌握编程技能。',
    category: '教程',
    author: '张老师',
    date: '2024-01-14',
    readTime: '5 分钟',
    image: '💻',
    views: 3500
  },
  {
    id: 3,
    title: '前端开发最佳实践',
    excerpt: '探索现代前端开发的最佳实践，包括代码组织、性能优化、可维护性等方面的经验和技巧。',
    category: '技术',
    author: '李工程师',
    date: '2024-01-13',
    readTime: '8 分钟',
    image: '⚡',
    views: 2800
  },
  {
    id: 4,
    title: '时间管理的艺术',
    excerpt: '在快节奏的生活中，如何有效管理时间？本文分享实用的时间管理技巧，帮助您提高工作效率。',
    category: '生活',
    author: '王老师',
    date: '2024-01-12',
    readTime: '6 分钟',
    image: '⏰',
    views: 1900
  },
  {
    id: 5,
    title: 'React Hooks 完全指南',
    excerpt: '深入理解 React Hooks 的工作原理，掌握 useState、useEffect 等常用 Hook 的使用方法。',
    category: '技术',
    author: '陈开发者',
    date: '2024-01-11',
    readTime: '10 分钟',
    image: '⚛️',
    views: 4200
  },
  {
    id: 6,
    title: 'TypeScript 入门教程',
    excerpt: '从零开始学习 TypeScript，了解类型系统、接口、泛型等核心概念，提升代码质量。',
    category: '教程',
    author: '赵老师',
    date: '2024-01-10',
    readTime: '12 分钟',
    image: '📘',
    views: 3100
  },
  {
    id: 7,
    title: 'Python 数据分析实战',
    excerpt: '使用 Python 进行数据分析的完整指南，包括 NumPy、Pandas 等库的使用技巧。',
    category: '技术',
    author: '数据科学家',
    date: '2024-01-09',
    readTime: '15 分钟',
    image: '🐍',
    views: 2600
  },
  {
    id: 8,
    title: '健康生活的秘诀',
    excerpt: '保持健康的生活方式需要良好的习惯，本文分享一些实用的健康建议。',
    category: '生活',
    author: '健康专家',
    date: '2024-01-08',
    readTime: '7 分钟',
    image: '🥗',
    views: 1500
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
