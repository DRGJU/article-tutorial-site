import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/article/ArticleCard';
import { SearchBar } from '@/components/article/SearchBar';
import { Pagination } from '@/components/ui/Pagination';
import { Badge } from '@/components/ui/Badge';
import { BackToTop } from '@/components/ui/BackToTop';
import { useArticleStore } from '@/store/articleStore';
import { Spinner } from '@/components/ui/Spinner';
import { Button } from '@/components/ui/Button';

const ArticlesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { articles, isLoading, fetchArticles, fetchCategories, fetchTags, categories, tags } = useArticleStore();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  useEffect(() => {
    const categoryId = searchParams.get('category');
    const tagId = searchParams.get('tag');
    const search = searchParams.get('search');

    setPage(1);
    fetchArticles({
      page: 1,
      pageSize,
      categoryId: categoryId ? parseInt(categoryId) : undefined,
      tagId: tagId ? parseInt(tagId) : undefined,
      search: search || undefined,
    });
  }, [searchParams]);

  // 计算总页数
  useEffect(() => {
    if (articles.length > 0) {
      setTotalPages(Math.ceil(articles.length / pageSize));
    } else {
      setTotalPages(1);
    }
  }, [articles, pageSize]);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (categoryId: number | null) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId.toString());
    } else {
      params.delete('category');
    }
    params.delete('page'); // 重置页码
    setSearchParams(params);
  };

  const handleTagChange = (tagId: number | null) => {
    const params = new URLSearchParams(searchParams);
    if (tagId) {
      params.set('tag', tagId.toString());
    } else {
      params.delete('tag');
    }
    params.delete('page'); // 重置页码
    setSearchParams(params);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 获取当前激活的筛选条件
  const activeCategory = searchParams.get('category');
  const activeTag = searchParams.get('tag');
  const searchQuery = searchParams.get('search');
  
  // 获取分类和标签名称
  const activeCategoryName = activeCategory 
    ? categories.find(c => c.id === parseInt(activeCategory))?.name 
    : null;
  const activeTagName = activeTag 
    ? tags.find(t => t.id === parseInt(activeTag))?.name 
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page Header - 优化视觉设计 */}
        <div className="mb-8 animate-fade-in-down">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-600 transition-colors">首页</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">全部文章</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">全部文章</h1>
              <p className="text-gray-600 text-lg">探索我们的技术文章和教程资源</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="primary" size="lg">
                📄 {articles.length} 篇文章
              </Badge>
            </div>
          </div>
        </div>

        {/* 激活的筛选条件显示 */}
        {(activeCategory || activeTag || searchQuery) && (
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fade-in">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-blue-900">当前筛选：</span>
              {searchQuery && (
                <Badge variant="primary">
                  🔍 {searchQuery}
                </Badge>
              )}
              {activeCategoryName && (
                <Badge variant="secondary">
                  📁 {activeCategoryName}
                </Badge>
              )}
              {activeTagName && (
                <Badge variant="secondary">
                  🏷️ {activeTagName}
                </Badge>
              )}
              <button
                onClick={() => setSearchParams({})}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium ml-auto"
              >
                清除筛选
              </button>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <SearchBar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          onTagChange={handleTagChange}
          categories={categories}
          tags={tags}
          initialSearch={searchParams.get('search') || ''}
          initialCategory={searchParams.get('category') ? parseInt(searchParams.get('category')!) : null}
          initialTag={searchParams.get('tag') ? parseInt(searchParams.get('tag')!) : null}
        />

        {/* Article List - 优化加载和空状态 */}
        {isLoading ? (
          <div className="animate-fade-in">
            {/* 骨架屏加载 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    {/* 图片占位 */}
                    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                    {/* 内容占位 */}
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
        ) : articles.length > 0 ? (
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {/* Pagination - 优化分页器 */}
            <div className="mt-12">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        ) : (
          <div className="animate-fade-in text-center py-20">
            <div className="text-8xl mb-6" role="img" aria-label="未找到文章">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">未找到相关文章</h3>
            <p className="text-gray-600 mb-8 text-lg">
              尝试更换搜索关键词或清除筛选条件
            </p>
            <Button 
              onClick={() => setSearchParams({})} 
              variant="primary" 
              size="lg"
              aria-label="清除所有筛选条件"
            >
              清除所有筛选
            </Button>
          </div>
        )}
      </main>

      <Footer />
      
      {/* 回到顶部按钮 */}
      <BackToTop visibleThreshold={300} scrollDuration={800} />
    </div>
  );
};

export default ArticlesPage;
