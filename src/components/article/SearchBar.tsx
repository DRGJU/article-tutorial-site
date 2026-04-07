import React, { useState } from 'react';
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
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onCategoryChange,
  onTagChange,
  categories = [],
  tags = [],
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const handleTagSelect = (tagId: number | null) => {
    setSelectedTag(tagId);
    onTagChange?.(tagId);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="搜索文章标题、内容..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
      </form>

      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">分类</h4>
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
        </div>
      )}

      {/* Tag Filters */}
      {tags.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">标签</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleTagSelect(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              全部标签
            </button>
            {tags.map(tag => (
              <button
                key={tag.id}
                onClick={() => handleTagSelect(tag.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === tag.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                #{tag.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
