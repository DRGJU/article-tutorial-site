import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleList } from '@/components/article/ArticleList';
import { SearchBar } from '@/components/article/SearchBar';
import { useArticleStore } from '@/store/articleStore';
import { Spinner } from '@/components/ui/Spinner';

const ArticlesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { articles, isLoading, fetchArticles, fetchCategories, fetchTags, categories, tags } = useArticleStore();
  const [page, setPage] = useState(1);
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

  const handleSearch = (query: string) => {
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  const handleCategoryChange = (categoryId: number | null) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId.toString());
    } else {
      params.delete('category');
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  const handleTagChange = (tagId: number | null) => {
    const params = new URLSearchParams(searchParams);
    if (tagId) {
      params.set('tag', tagId.toString());
    } else {
      params.delete('tag');
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">全部文章</h1>
          <p className="text-gray-600">探索我们的技术文章和教程资源</p>
        </div>

        {/* Search and Filters */}
        <SearchBar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
          onTagChange={handleTagChange}
          categories={categories}
          tags={tags}
        />

        {/* Article List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Spinner size="lg" />
          </div>
        ) : (
          <>
            <ArticleList articles={articles} isLoading={isLoading} />
            
            {/* Pagination */}
            {articles.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  上一页
                </button>
                <span className="px-4 py-2 text-gray-700">
                  第 {page} 页
                </span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={articles.length < pageSize}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  下一页
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
