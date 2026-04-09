import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleContent } from '@/components/article/ArticleContent';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BackToTop } from '@/components/ui/BackToTop';
import { Spinner } from '@/components/ui/Spinner';
import { articleApi } from '@/api';
import type { Article, Comment } from '@/types';
import { formatDate } from '@/utils';
import { useAuthStore } from '@/store/authStore';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiking, setIsLiking] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const response = await articleApi.getArticle(parseInt(id));
        // Mock API 返回格式：{ code: 200, message: 'success', data: article }
        // 但 axios 拦截器已经提取了 response.data，所以直接访问 response.data
        setArticle(response.data || response);
      } catch (error) {
        console.error('Failed to fetch article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleLike = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!article || isLiking) return;

    setIsLiking(true);
    try {
      const response = await articleApi.likeArticle(article.id);
      setArticle(prev => prev ? { ...prev, likeCount: response.data.likeCount } : null);
    } catch (error) {
      console.error('Failed to like article:', error);
    } finally {
      setIsLiking(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="flex justify-center items-center py-20">
            <Spinner size="lg" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">文章未找到</h1>
            <p className="text-gray-600 mb-6">抱歉，您访问的文章不存在</p>
            <Link to="/articles">
              <Button>← 返回文章列表</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Back Link */}
        <Link 
          to="/articles"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回文章列表
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {article.coverImage && (
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Meta Info */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {article.category && (
                <Badge variant="primary">{article.category.name}</Badge>
              )}
              {article.isFeatured && (
                <Badge variant="warning">推荐</Badge>
              )}
              {article.tags?.map(tag => (
                <Badge key={tag.id} variant="secondary">#{tag.name}</Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center gap-6 text-gray-600 mb-6 pb-6 border-b">
              <div className="flex items-center gap-3">
                {article.author?.avatar ? (
                  <img
                    src={article.author.avatar}
                    alt={article.author.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {article.author?.username?.[0]?.toUpperCase() || 'A'}
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-900">{article.author?.username || '匿名用户'}</p>
                  <p className="text-sm text-gray-500">作者</p>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="text-sm">
                <p className="text-gray-500">发布日期</p>
                <p className="font-medium">{formatDate(article.publishedAt || article.createdAt)}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {article.viewCount} 阅读
              </span>
              <button
                onClick={handleLike}
                disabled={isLiking}
                className={`flex items-center gap-1 transition-colors ${
                  isLiking ? 'opacity-50' : 'hover:text-red-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {article.likeCount} 点赞
              </button>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {article.commentCount} 评论
              </span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <ArticleContent content={article.content} />
            </div>
          </div>
        </article>

        {/* Share Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">分享这篇文章</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex-1">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
              微信
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* 回到顶部按钮 */}
      <BackToTop visibleThreshold={300} scrollDuration={800} />
    </div>
  );
};

export default ArticleDetailPage;
