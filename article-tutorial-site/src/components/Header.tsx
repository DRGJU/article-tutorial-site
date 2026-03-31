import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { path: '/', label: '首页' },
  { path: '/articles', label: '文章' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/articles?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  }, [searchQuery, navigate]);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          <span className="logo-text">知识学堂</span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <form onSubmit={handleSearch} className={`search-form ${isSearchOpen ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="搜索文章"
            />
            <button type="submit" className="search-btn" aria-label="搜索">
              🔍
            </button>
          </form>

          <button
            onClick={() => setIsSearchOpen(prev => !prev)}
            className="action-btn search-toggle"
            aria-label="搜索"
            type="button"
          >
            🔍
          </button>

          <button
            onClick={toggleTheme}
            className="action-btn theme-toggle"
            aria-label="切换主题"
            type="button"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="菜单"
            type="button"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
