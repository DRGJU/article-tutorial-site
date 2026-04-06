import { Link } from 'react-router-dom';
import articles from '../data/articles';

function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>探索知识的无限可能</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', color: '#a0a0a0' }}>
          在这里，您可以找到各种优质的文章和教程
        </p>
        <Link 
          to="/articles" 
          style={{ 
            padding: '15px 40px', 
            backgroundColor: '#e94560', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontSize: '18px'
          }}
        >
          浏览文章
        </Link>
      </section>

      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>最新文章</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {articles.slice(0, 3).map(article => (
            <Link 
              to={`/article/${article.id}`}
              key={article.id}
              style={{
                backgroundColor: '#16213e',
                borderRadius: '12px',
                padding: '24px',
                textDecoration: 'none',
                color: '#fff',
                display: 'block',
                transition: 'transform 0.2s'
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{article.image}</div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{article.title}</h3>
              <p style={{ color: '#a0a0a0', marginBottom: '16px' }}>{article.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#888' }}>
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
