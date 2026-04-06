import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <BrowserRouter basename="/article-tutorial-site">
      <div className="app">
        <header style={{ padding: '20px', backgroundColor: '#16213e', marginBottom: '20px' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>首页</Link>
            <Link to="/articles" style={{ color: '#fff', textDecoration: 'none' }}>文章</Link>
          </nav>
        </header>
        
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        
        <footer style={{ textAlign: 'center', padding: '40px 20px', marginTop: '40px', borderTop: '1px solid #0f3460' }}>
          <p>© 2024 文章教学平台</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
