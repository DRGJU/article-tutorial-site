import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/article/ArticleCard';
import { Button } from '@/components/ui/Button';
import { BackToTop } from '@/components/ui/BackToTop';
import { useArticleStore } from '@/store/articleStore';
import { Spinner } from '@/components/ui/Spinner';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

const HomePage: React.FC = () => {
  const { 
    featuredArticles, 
    articles, 
    isLoading, 
    fetchFeaturedArticles, 
    fetchArticles,
    fetchCategories,
    categories
  } = useArticleStore();

  useEffect(() => {
    fetchFeaturedArticles();
    fetchArticles({ page: 1, pageSize: 6 });
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section - MasterClass 风格设计 */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* 抽象背景图案 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-28 md:py-40 lg:py-48">
            <div className="max-w-4xl mx-auto text-center">
              {/* 徽章 */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide">1000+ 优质技术文章</span>
              </div>
              
              {/* 主标题 - 简洁有力 */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
                让学习
                <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  更简单高效
                </span>
              </h1>
              
              {/* 描述 - 简洁明了 */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                精选技术教程，从入门到精通，助您快速掌握核心技能
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - 简洁设计 */}
      {isLoading && featuredArticles.length === 0 ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-3" />
              <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                    <div className="p-5">
                      <div className="flex gap-2 mb-3">
                        <div className="h-6 w-16 bg-gray-200 rounded-full" />
                        <div className="h-6 w-16 bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
                      <div className="h-4 w-full bg-gray-200 rounded mb-2" />
                      <div className="h-4 w-2/3 bg-gray-200 rounded mb-4" />
                      <div className="flex justify-between pt-4 border-t border-gray-100">
                        <div className="flex gap-4">
                          <div className="h-4 w-12 bg-gray-200 rounded" />
                          <div className="h-4 w-12 bg-gray-200 rounded" />
                          <div className="h-4 w-12 bg-gray-200 rounded" />
                        </div>
                        <div className="h-4 w-20 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : featuredArticles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">精选推荐</h2>
                <p className="text-gray-600 text-lg">编辑精选的高质量技术文章</p>
              </div>
              <Link to="/articles">
                <Button variant="outline" size="lg" className="group">
                  查看全部
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.slice(0, 3).map((article) => (
                <div key={article.id}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories - 现代卡片设计 */}
      {categories.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">探索分类</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                根据您感兴趣的技术方向浏览相关内容
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/articles?category=${category.id}`}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-purple-200"
                >
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                    {category.icon || '📚'}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {category.articleCount} 篇文章
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles - 简洁布局 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">最新文章</h2>
              <p className="text-gray-600 text-lg">发现最新的技术分享和教程</p>
            </div>
            <Link to="/articles">
              <Button variant="primary" size="lg" className="group">
                浏览全部
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-[400px]"></div>
                </div>
              ))}
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">暂无文章</h3>
              <p className="text-gray-600">稍后再来查看吧</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      {/* 回到顶部按钮 */}
      <BackToTop visibleThreshold={300} scrollDuration={800} />
    </div>
  );
};

export default HomePage;
