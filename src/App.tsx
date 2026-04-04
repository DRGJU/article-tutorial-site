import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import { ScrollToTop, BackToTop } from './components/common';
import './App.css';

function App() {
  // 检查当前是否在 GitHub Pages 环境（通过 hostname 判断）
  const isGitHubPages = window.location.hostname === 'drgju.github.io';
  const basename = isGitHubPages ? '/article-tutorial-site' : '';
  
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
