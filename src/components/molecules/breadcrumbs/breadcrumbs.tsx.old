/**
 * Breadcrumbs Component - Declarative Implementation
 * Navigation breadcrumb trail
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IBreadcrumbItemProps } from './breadcrumb-item.type';
import type { IBreadcrumbsProps } from './breadcrumbs.type';

/**
 * Breadcrumbs component
 * Creates a navigation breadcrumb trail - molecule component
 */
export const Breadcrumbs = ({
  separator = '/',
  children,
  className,
  ...rest
}: IBreadcrumbsProps): HTMLElement => {
  const breadcrumbsClasses = cn('flex items-center space-x-2 text-sm', className);

  return (
    <nav aria-label="Breadcrumb" className={breadcrumbsClasses} {...rest}>
      <ol className="flex items-center space-x-2">{children}</ol>
    </nav>
  );
};

/**
 * BreadcrumbItem component
 * Individual breadcrumb item
 */
export const BreadcrumbItem = ({
  href,
  current = false,
  children,
  className,
  ...rest
}: IBreadcrumbItemProps): HTMLElement => {
  const itemClasses = cn(
    'flex items-center transition-colors duration-150',
    current
      ? 'text-gray-900 dark:text-white font-medium'
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
    className
  );

  return (
    <li className={itemClasses} {...rest}>
      {href && !current ? (
        <a href={href} className="hover:underline transition-all duration-150 touch-target">
          {children}
        </a>
      ) : (
        <span aria-current={current ? 'page' : undefined}>{children}</span>
      )}
      {!current && <span className="mx-2 text-gray-400">/</span>}
    </li>
  );
};
