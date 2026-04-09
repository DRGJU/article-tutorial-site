import React, { memo, useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Article } from '@/types';
import { formatDate, truncateText } from '@/utils';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

// 使用 IntersectionObserver 实现图片懒加载
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt, 
  className 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-gray-200 ${className}`}>
      {/* 骨架屏占位 */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
      )}
      
      {/* 实际图片 */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      )}
      
      {/* 错误占位 */}
      {hasError && (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  );
};

// 使用 memo 优化组件重复渲染
export const ArticleCard: React.FC<ArticleCardProps> = memo(({ article, featured = false }) => {
  // 使用 useMemo 缓存计算结果
  const categoryBadge = useMemo(() => {
    if (!article.category) return null;
    return <Badge variant="primary" size="sm">{article.category.name}</Badge>;
  }, [article.category]);

  const tagBadges = useMemo(() => {
    return article.tags?.slice(0, 2).map(tag => (
      <Badge key={tag.id} variant="secondary" size="sm">{tag.name}</Badge>
    ));
  }, [article.tags]);

  const stats = useMemo(() => ({
    views: article.viewCount,
    likes: article.likeCount,
    comments: article.commentCount,
  }), [article.viewCount, article.likeCount, article.commentCount]);

  const formattedDate = useMemo(() => {
    return formatDate(article.publishedAt || article.createdAt);
  }, [article.publishedAt, article.createdAt]);

  return (
    <Link to={`/article/${article.id}`} className="block h-full" tabIndex={0}>
      <Card 
        className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 will-change-transform transform-gpu overflow-hidden"
        hoverable
        role="article"
        aria-labelledby={`article-title-${article.id}`}
      >
        {/* 封面图片 - 懒加载 */}
        {article.coverImage && (
          <div className="relative h-48 overflow-hidden">
            <LazyImage
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full"
            />
            {article.isFeatured && (
              <div className="absolute top-2 right-2">
                <Badge variant="warning" size="sm" aria-label="推荐文章">推荐</Badge>
              </div>
            )}
          </div>
        )}
        
        <CardContent className="p-5 flex flex-col h-[calc(100%-12rem)]">
          {/* 分类和标签 */}
          <div className="flex items-center gap-2 mb-3 flex-shrink-0" role="list" aria-label="文章分类">
            {categoryBadge}
            {tagBadges}
          </div>
          
          {/* 标题 */}
          <h3 
            id={`article-title-${article.id}`}
            className={`font-bold text-gray-900 mb-2 line-clamp-2 flex-shrink-0 ${
              featured ? 'text-xl' : 'text-lg'
            }`}
          >
            {article.title}
          </h3>
          
          {/* 摘要 */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-shrink-0">
            {truncateText(article.excerpt, 120)}
          </p>
          
          {/* 统计信息 */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4" aria-label="文章统计">
              <span className="flex items-center gap-1" title={`${stats.views} 次阅读`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="sr-only">阅读：</span>{stats.views}
              </span>
              <span className="flex items-center gap-1" title={`${stats.likes} 个点赞`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="sr-only">点赞：</span>{stats.likes}
              </span>
              <span className="flex items-center gap-1" title={`${stats.comments} 条评论`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="sr-only">评论：</span>{stats.comments}
              </span>
            </div>
            <time dateTime={article.publishedAt || article.createdAt} className="flex-shrink-0">
              {formattedDate}
            </time>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});

// 添加显示名称便于调试
ArticleCard.displayName = 'ArticleCard';

ArticleCard.displayName = 'ArticleCard';
