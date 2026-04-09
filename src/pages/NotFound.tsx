import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* 404 动画图标 */}
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-bounce">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
              🔍
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            页面未找到
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            抱歉，您访问的页面不存在或已被移除。<br />
            请检查 URL 是否正确，或返回首页浏览其他内容。
          </p>
          
          {/* 快捷操作 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="primary" size="lg" className="group">
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                返回首页
              </Button>
            </Link>
            <Link to="/articles">
              <Button variant="outline" size="lg">
                浏览文章
              </Button>
            </Link>
          </div>
          
          {/* 可能的原因 */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">可能的原因</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>URL 地址输入错误</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>页面已被删除或移动</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>链接已失效</span>
              </li>
            </ul>
          </div>
          
          {/* 搜索提示 */}
          <div className="mt-8 text-sm text-gray-500">
            需要帮助？{' '}
            <a href="/" className="text-blue-600 hover:underline font-medium">
              联系支持
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;
