/**
 * Breadcrumbs Component - Declarative Implementation
 * Navigation breadcrumb trail
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IBreadcrumbsProps } from './breadcrumbs.type';
import type { IBreadcrumbItemProps } from './breadcrumb-item.type';

/**
 * Breadcrumbs component
 * Creates a navigation breadcrumb trail - molecule component
 */
export const Breadcrumbs = ({
  separator = '/',
  children,
  class: className,
  ...rest
}: IBreadcrumbsProps): HTMLElement => {
  const breadcrumbsClasses = cn('flex items-center space-x-2 text-sm', className);

  return (
    <nav aria-label="Breadcrumb" class={breadcrumbsClasses} {...rest}>
      <ol class="flex items-center space-x-2">{children}</ol>
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
  class: className,
  ...rest
}: IBreadcrumbItemProps): HTMLElement => {
  const itemClasses = cn(
    'flex items-center',
    current
      ? 'text-gray-900 dark:text-white font-medium'
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
    className
  );

  return (
    <li class={itemClasses} {...rest}>
      {href && !current ? (
        <a href={href} class="hover:underline">
          {children}
        </a>
      ) : (
        <span aria-current={current ? 'page' : undefined}>{children}</span>
      )}
      {!current && <span class="mx-2 text-gray-400">/</span>}
    </li>
  );
};
