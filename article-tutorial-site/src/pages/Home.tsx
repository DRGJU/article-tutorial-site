import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import './Home.css';

const FEATURED_ARTICLES = [
  {
    id: 1,
    title: '欢迎来到知识学堂',
    excerpt: '这是一个专注于分享优质文章和教程的平台，我们致力于提供高质量的学习内容...',
    category: '公告',
    readTime: '2 分钟',
    image: '🎉'
  },
  {
    id: 2,
    title: '如何高效学习编程',
    excerpt: '学习编程需要正确的方法和持续的努力，本文将分享一些高效学习的技巧和方法...',
    category: '教程',
    readTime: '5 分钟',
    image: '💻'
  },
  {
    id: 3,
    title: '前端开发最佳实践',
    excerpt: '探索现代前端开发的最佳实践，包括代码组织、性能优化和可维护性等方面...',
    category: '技术',
    readTime: '8 分钟',
    image: '⚡'
  }
];

const Home = () => {
  const featuredArticles = useMemo(() => FEATURED_ARTICLES, []);

  return (
    <div className="home">
      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-container container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              探索知识的<span className="highlight">无限可能</span>
            </h1>
            <p className="hero-subtitle">
              在这里，您可以找到各种优质的文章和教程，涵盖技术、生活、学习等多个领域
            </p>
            <div className="hero-buttons">
              <Link to="/articles" className="btn btn-primary">
                浏览文章
              </Link>
              <Link to="/" className="btn btn-secondary">
                了解更多
              </Link>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="hero-illustration">📖</div>
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">精选文章</h2>
            <p className="section-subtitle">精心挑选的优质内容，值得您细细品味</p>
          </div>
          
          <div className="featured-grid">
            {featuredArticles.map((article, index) => (
              <Link to={`/article/${article.id}`} key={article.id} className="featured-card fade-in">
                <div className="featured-card-image">
                  <span className="card-emoji">{article.image}</span>
                </div>
                <div className="featured-card-content">
                  <span className="card-category">{article.category}</span>
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                  <div className="card-meta">
                    <span className="read-time">⏱️ {article.readTime}</span>
                    <span className="learn-more">了解更多 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
