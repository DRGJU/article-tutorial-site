import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import './Home.css';

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
    </div>
  );
};

export default Home;
