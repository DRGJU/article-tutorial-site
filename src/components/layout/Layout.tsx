import React from 'react';
import { Spinner } from '@/components/ui/Spinner';

interface LayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, isLoading = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1">
        {children}
      </main>
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4">
            <Spinner size="lg" />
            <span className="text-gray-600">加载中...</span>
          </div>
        </div>
      )}
    </div>
  );
};
