import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/article/ArticleCard';
import { Button } from '@/components/ui/Button';
import { useArticleStore } from '@/store/articleStore';
import { Spinner } from '@/components/ui/Spinner';

const HomePage: React.FC = () => {
  const { 
    featuredArticles, 
    articles, 
    isLoading, 
    fetchFeaturedArticles, 
    fetchArticles 
  } = useArticleStore();

  useEffect(() => {
    fetchFeaturedArticles();
    fetchArticles({ page: 1, pageSize: 6 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              探索知识的无限可能
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              在这里，您可以找到各种优质的技术文章和教学资源，
              从入门到精通，陪伴您的每一步成长
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/articles">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  浏览文章
                </Button>
              </Link>
              <Link to="/categories">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                  探索分类
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">推荐文章</h2>
              <p className="text-gray-600">精选优质内容，不容错过</p>
            </div>
            <Link to="/articles">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                查看更多 →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.slice(0, 3).map(article => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">最新文章</h2>
            <p className="text-gray-600">发现最新的技术分享和教程</p>
          </div>
          <Link to="/articles">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              查看全部 →
            </Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner size="lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始学习了吗？</h2>
          <p className="text-blue-100 mb-8 text-lg">
            立即注册，解锁更多优质内容和功能
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                免费注册
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                登录账号
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
