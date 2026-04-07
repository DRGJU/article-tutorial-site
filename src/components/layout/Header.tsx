import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils';
import { useAuthStore } from '@/store/authStore';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={cn(
      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
      isActive
        ? 'bg-white/20 text-white'
        : 'text-gray-200 hover:bg-white/10 hover:text-white'
    )}
  >
    {children}
  </Link>
);

export const Header: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <span className="text-xl font-bold text-white">知识学堂</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" isActive={location.pathname === '/'}>首页</NavLink>
            <NavLink to="/articles" isActive={location.pathname.startsWith('/articles')}>文章</NavLink>
            <NavLink to="/categories" isActive={location.pathname.startsWith('/categories')}>分类</NavLink>
            <NavLink to="/tags" isActive={location.pathname.startsWith('/tags')}>标签</NavLink>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-gray-200 hover:text-white transition-colors">
                  <div className="flex items-center gap-2">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-medium">
                        {user.username[0].toUpperCase()}
                      </div>
                    )}
                    <span className="text-sm font-medium">{user.username}</span>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                >
                  退出
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  登录
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-blue-900 bg-white rounded-lg hover:bg-gray-100 transition-all"
                >
                  注册
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-white/10"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              <NavLink to="/" isActive={location.pathname === '/'}>首页</NavLink>
              <NavLink to="/articles" isActive={location.pathname.startsWith('/articles')}>文章</NavLink>
              <NavLink to="/categories" isActive={location.pathname.startsWith('/categories')}>分类</NavLink>
              <NavLink to="/tags" isActive={location.pathname.startsWith('/tags')}>标签</NavLink>
              {isAuthenticated && user ? (
                <>
                  <Link to="/dashboard" className="px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg">
                    控制台
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-left text-gray-200 hover:bg-white/10 rounded-lg"
                  >
                    退出
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-2 text-gray-200 hover:bg-white/10 rounded-lg">
                    登录
                  </Link>
                  <Link to="/register" className="px-4 py-2 text-blue-200 hover:bg-white/10 rounded-lg">
                    注册
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
