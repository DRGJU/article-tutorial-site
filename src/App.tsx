import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/Home';
import ArticlesPage from './pages/ArticleList';
import ArticleDetailPage from './pages/ArticleDetail';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
import NotFoundPage from './pages/NotFound';
import { PerformanceMonitor } from './components/ui/PerformanceMonitor';
import { useAuthStore } from './store/authStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 分钟
    },
  },
});

function App() {
  const { fetchCurrentUser } = useAuthStore();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      fetchCurrentUser();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <PerformanceMonitor />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
