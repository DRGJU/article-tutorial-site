import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Article } from '@/types';
import { formatDate, truncateText } from '@/utils';

interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  isLoading = false,
  emptyMessage = '暂无文章',
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-white rounded-xl h-64"></div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

interface ArticleListItemProps {
  article: Article;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1" hoverable>
        <CardContent className="p-6">
          <div className="flex gap-4">
            {article.coverImage && (
              <div className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                {article.category && (
                  <Badge variant="primary" size="sm">{article.category.name}</Badge>
                )}
                {article.isFeatured && (
                  <Badge variant="warning" size="sm">推荐</Badge>
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {truncateText(article.excerpt, 100)}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span>浏览 {article.viewCount}</span>
                  <span>点赞 {article.likeCount}</span>
                  <span>评论 {article.commentCount}</span>
                </div>
                <span>{formatDate(article.publishedAt || article.createdAt)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
