import React from 'react';
import { cn } from '@/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  fallback,
  className,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  const [hasError, setHasError] = React.useState(false);

  const initials = fallback || (alt ? alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '?');

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 text-white font-medium overflow-hidden flex-shrink-0',
        sizeStyles[size],
        className
      )}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 3,
  size = 'md',
}) => {
  const childArray = React.Children.toArray(children);
  const visible = childArray.slice(0, max);
  const remaining = childArray.length - max;

  return (
    <div className="flex -space-x-2">
      {visible.map((child, index) => (
        <div key={index} className="ring-2 ring-white rounded-full">
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-medium ring-2 ring-white',
            size === 'sm' && 'w-8 h-8 text-xs',
            size === 'md' && 'w-10 h-10 text-sm',
            size === 'lg' && 'w-12 h-12 text-base',
            size === 'xl' && 'w-16 h-16 text-lg',
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};
