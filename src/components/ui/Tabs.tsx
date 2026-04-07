import React from 'react';
import { cn } from '@/utils';

interface TabsProps {
  activeTab: string;
  onChange: (tabId: string) => void;
  tabs: Array<{ id: string; label: string; icon?: React.ReactNode; disabled?: boolean }>;
  variant?: 'line' | 'pills' | 'enclosed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  activeTab,
  onChange,
  tabs,
  variant = 'line',
  size = 'md',
  className,
}) => {
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const variants = {
    line: (tabId: string) => cn(
      'relative font-medium transition-colors',
      activeTab === tabId ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900',
      sizeClasses[size]
    ),
    pills: (tabId: string) => cn(
      'font-medium rounded-lg transition-colors',
      activeTab === tabId 
        ? 'bg-blue-600 text-white' 
        : 'text-gray-600 hover:bg-gray-100',
      sizeClasses[size]
    ),
    enclosed: (tabId: string) => cn(
      'font-medium border-b-2 transition-colors',
      activeTab === tabId 
        ? 'border-blue-600 text-blue-600' 
        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300',
      sizeClasses[size]
    ),
  };

  return (
    <div className={cn('flex gap-2', variant === 'enclosed' && 'border-b border-gray-200', className)}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => !tab.disabled && onChange(tab.id)}
          disabled={tab.disabled}
          className={cn(
            variants[variant](tab.id),
            tab.disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {tab.icon && <span className="inline-flex items-center gap-2">{tab.icon}{tab.label}</span>}
          {!tab.icon && tab.label}
        </button>
      ))}
    </div>
  );
};

interface TabPanelProps {
  tabId: string;
  activeTab: string;
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  tabId,
  activeTab,
  children,
  className,
}) => {
  if (activeTab !== tabId) return null;

  return (
    <div className={cn('mt-4 animate-in fade-in duration-200', className)}>
      {children}
    </div>
  );
};
