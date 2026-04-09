import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import type { Category, Tag } from '@/types';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (categoryId: number | null) => void;
  onTagChange?: (tagId: number | null) => void;
  categories?: Category[];
  tags?: Tag[];
  initialSearch?: string;
  initialCategory?: number | null;
  initialTag?: number | null;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onCategoryChange,
  onTagChange,
  categories = [],
  tags = [],
  initialSearch = '',
  initialCategory = null,
  initialTag = null,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(initialCategory);
  const [selectedTag, setSelectedTag] = useState<number | null>(initialTag);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 同步外部参数变化
  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSelectedTag(initialTag);
  }, [initialTag]);

  // 防抖搜索函数 - 延迟 300ms 触发搜索
  const debouncedSearch = useCallback((query: string) => {
    // 清除之前的定时器
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // 设置新的定时器，300ms 后执行搜索
    debounceTimerRef.current = setTimeout(() => {
      onSearch?.(query);
    }, 300);
  }, [onSearch]);

  // 处理输入框变化 - 实时搜索
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    // 触发防抖搜索
    debouncedSearch(value);
  };

  // 处理回车搜索（保留原有功能）
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 如果正在防抖中，立即执行搜索
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      onSearch?.(searchQuery);
    }
  };

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleTagSelect = (tagId: number | null) => {
    setSelectedTag(tagId);
    onTagChange?.(tagId);
  };

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="搜索文章标题、内容..."
            value={searchQuery}
            onChange={handleInputChange}
            className="flex-1"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
          <Button type="submit" variant="primary">
            搜索
          </Button>
        </div>
        {/* 实时搜索提示 */}
        {searchQuery && (
          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            实时搜索中...
          </p>
        )}
      </form>

      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategorySelect(null)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部分类
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
