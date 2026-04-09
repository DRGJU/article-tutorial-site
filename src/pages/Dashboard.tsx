import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { BackToTop } from '@/components/ui/BackToTop';
import { useAuthStore } from '@/store/authStore';
import { useArticleStore } from '@/store/articleStore';

const DashboardPage: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();
  const { articles, fetchArticles } = useArticleStore();

  useEffect(() => {
    if (isAuthenticated) {
      fetchArticles({ page: 1, pageSize: 5 });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔐</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">请先登录</h2>
            <p className="text-gray-600 mb-6">登录后即可访问个人控制台</p>
            <div className="flex gap-4 justify-center">
              <Link to="/login">
                <Button variant="primary" size="lg">去登录</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">注册账号</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">首页</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">个人控制台</span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="flex items-center gap-6">
              <Avatar size="xl" src={user.avatar} fallback={user.username} />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  欢迎回来，{user.username}！
                </h1>
                <p className="text-gray-600">{user.email}</p>
                <div className="flex gap-2 mt-3">
                  <Badge variant="primary">{user.role === 'admin' ? '👑 管理员' : '👤 用户'}</Badge>
                  <Badge variant="secondary">📅 加入于 {new Date(user.createdAt).toLocaleDateString('zh-CN')}</Badge>
                </div>
              </div>
              <Button variant="outline">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                设置
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in-up">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-600">阅读文章</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-600">点赞文章</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <div className="text-sm text-gray-600">评论数量</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{user.role === 'admin' ? '6' : '0'}</div>
                <div className="text-sm text-gray-600">发布文章</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-900 mb-4">快速操作</h3>
            <div className="space-y-3">
              <Link to="/articles">
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  浏览文章
                </Button>
              </Link>
              {user.role === 'admin' && (
                <Button variant="primary" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  发布文章
                </Button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">个人设置</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">用户名</div>
                  <div className="text-sm text-gray-500">{user.username}</div>
                </div>
                <Button variant="outline" size="sm">修改</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">邮箱</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </div>
                <Button variant="outline" size="sm">修改</Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">密码</div>
                  <div className="text-sm text-gray-500">••••••••</div>
                </div>
                <Button variant="outline" size="sm">修改</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* 回到顶部按钮 */}
      <BackToTop visibleThreshold={300} scrollDuration={800} />
    </div>
  );
};

export default DashboardPage;
