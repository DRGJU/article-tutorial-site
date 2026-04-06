import { Link } from 'react-router-dom';
import articles from '../data/articles';

function ArticleList() {
  return (
    <div>
      <h1 style={{ fontSize: '36px', marginBottom: '30px' }}>所有文章</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {articles.map(article => (
          <Link 
            to={`/article/${article.id}`}
            key={article.id}
            style={{
              backgroundColor: '#16213e',
              borderRadius: '12px',
              padding: '24px',
              textDecoration: 'none',
              color: '#fff',
              display: 'block'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{article.image}</div>
            <div style={{ display: 'inline-block', backgroundColor: '#0f3460', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', marginBottom: '12px' }}>
              {article.category}
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{article.title}</h3>
            <p style={{ color: '#a0a0a0', marginBottom: '16px', lineHeight: '1.6' }}>{article.excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#888' }}>
              <span>{article.date}</span>
              <span>阅读更多 →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
