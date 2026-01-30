/**
 * Avatar Component - Declarative Implementation
 * User avatar with image, initials fallback, and status indicator
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IAvatarProps } from './avatar.type';

/**
 * Generate initials from name
 */
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

/**
 * Avatar component
 * Creates a user avatar - atomic component
 */
export const Avatar = ({
  size = 'md',
  src,
  alt,
  name,
  status,
  bg,
  className,
  ...rest
}: IAvatarProps): HTMLElement => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
  };

  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
  };

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
    '2xl': 'w-5 h-5',
  };

  const avatarClasses = cn(
    'relative inline-flex items-center justify-center rounded-full overflow-hidden transition-all duration-200 hover:scale-105',
    sizeClasses[size],
    !src && (bg || 'bg-gray-300 dark:bg-gray-600'),
    className
  );

  const initials = name ? getInitials(name) : '';

  return (
    <div className={avatarClasses} {...rest}>
      {src ? (
        <img src={src} alt={alt || name || 'Avatar'} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-gray-700 dark:text-gray-200">{initials}</span>
      )}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-gray-800',
            statusClasses[status],
            statusSizeClasses[size]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};
