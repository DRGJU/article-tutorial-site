import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import './Home.css';

const LEARNING_RESOURCES = [
  {
    title: '菜鸟教程',
    description: '全面的技术教程网站，涵盖编程、数据库、Web 开发等',
    url: 'https://www.runoob.com',
    color: '#009688',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    )
  },
  {
    title: 'MDN Web Docs',
    description: 'Mozilla 提供的权威 Web 技术文档，前端开发必备资源',
    url: 'https://developer.mozilla.org/zh-CN',
    color: '#5E35B1',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  {
    title: 'GitHub',
    description: '全球最大的代码托管平台，发现优秀项目和开源代码',
    url: 'https://github.com',
    color: '#24292E',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.295-1.23 3.295-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    title: 'Stack Overflow',
    description: '全球最大的程序员问答社区，解决编程问题的宝库',
    url: 'https://stackoverflow.com',
    color: '#F48024',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 19.5H6v-2h12v2zm-2.4-3.9l-1.2-1.8 10-6.6 1.2 1.8-10 6.6zm-2.7-3.3l-1.5-1.5 8.5-8.5 1.5 1.5-8.5 8.5zm-3-2.4L8.4 8.4l6.4-6.4 1.5 1.5-6.4 6.4zM6 15.5v-2h12v2H6z"/>
      </svg>
    )
  },
  {
    title: 'freeCodeCamp',
    description: '免费编程学习平台，提供交互式编程课程和项目实战',
    url: 'https://www.freecodecamp.org',
    color: '#0A0A23',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L2.5 6.5V19L12 24l9.5-5V6.5L12 0zm0 2.5l7 4.5v9.5L12 21l-7-4.5V7L12 2.5z"/>
      </svg>
    )
  },
  {
    title: 'W3Schools',
    description: 'Web 技术教程和参考手册，适合初学者快速入门',
    url: 'https://www.w3schools.com',
    color: '#04AA6D',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 11l-8-4v9l8 4 8-4V9l-8 4z"/>
      </svg>
    )
  },
  {
    title: '廖雪峰的官方网站',
    description: '知名的编程技术教程，包括 Python、Git、Java 等热门语言',
    url: 'https://www.liaoxuefeng.com',
    color: '#A60000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Codecademy',
    description: '交互式编程学习平台，边学边练，快速掌握编程技能',
    url: 'https://www.codecademy.com',
    color: '#FFD300',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 14H4v-4h8v4zm0-6H4V8h8v4zm6 6h-4v-4h4v4zm0-6h-4V8h4v4z"/>
      </svg>
    )
  },
  {
    title: 'Learn X in Y minutes',
    description: '快速了解编程语言语法的速查网站，简洁明了',
    url: 'https://learnxinyminutes.com',
    color: '#2E86AB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
      </svg>
    )
  },
  {
    title: 'Programiz',
    description: '提供 Python、C、C++、Java 等语言的入门教程和示例',
    url: 'https://www.programiz.com',
    color: '#66CC33',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    )
  },
  {
    title: '掘金',
    description: '中文技术社区，专注互联网前沿技术分享与交流',
    url: 'https://juejin.cn',
    color: '#1E80FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
      </svg>
    )
  },
  {
    title: '知乎',
    description: '中文互联网高质量的问答社区和创作者聚集地',
    url: 'https://www.zhihu.com',
    color: '#0084FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
      </svg>
    )
  },
  {
    title: '思否 SegmentFault',
    description: '中文开发者技术社区，提供技术问答和专栏文章',
    url: 'https://segmentfault.com',
    color: '#009A61',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'V2EX',
    description: '创意工作者社区，讨论技术、分享创意和生活',
    url: 'https://www.v2ex.com',
    color: '#1F1F1F',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 3.5L18.5 20H5.5L12 5.5z"/>
      </svg>
    )
  },
  {
    title: '阮一峰的博客',
    description: '知名技术博主，每周分享技术动态和前沿资讯',
    url: 'https://www.ruanyifeng.com/blog/',
    color: '#D93025',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  }
];

const LATEST_ARTICLES = [
  {
    id: 1,
    title: 'Docker 安装与配置完全指南',
    excerpt: '从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践，帮助您快速上手容器化技术。',
    category: '技术',
    readTime: '15 分钟',
    image: '🐳'
  }
];

const Home = () => {
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

      {/* 最新文章 */}
      <section className="latest-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">最新文章</h2>
            <p className="section-subtitle">探索最新发布的技术文章和教程</p>
          </div>
          
          <div className="latest-grid">
            {LATEST_ARTICLES.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id} className="latest-card fade-in">
                <div className="latest-card-image">
                  <span className="card-emoji">{article.image}</span>
                </div>
                <div className="latest-card-content">
                  <span className="card-category">{article.category}</span>
                  <h3 className="card-title">{article.title}</h3>
                  <p className="card-excerpt">{article.excerpt}</p>
                  <div className="card-meta">
                    <span className="read-time">⏱️ {article.readTime}</span>
                    <span className="learn-more">阅读文章 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 学习资源导航 */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">学习资源</h2>
            <p className="section-subtitle">精选优质学习网站，助您快速成长</p>
          </div>
          
          <div className="resources-grid">
            {LEARNING_RESOURCES.map((resource, index) => (
              <a 
                key={index} 
                href={resource.url}
                className="resource-card fade-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="resource-icon" style={{ color: resource.color, width: '64px', height: '64px' }}>
                  {resource.icon}
                </div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <span className="visit-link">访问网站 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
