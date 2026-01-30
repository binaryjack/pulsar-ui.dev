/**
 * Pagination Component - Declarative Implementation
 * Page navigation with previous/next and page numbers
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IPaginationProps } from './pagination.type';

/**
 * Calculate visible page numbers
 */
const getPageNumbers = (current: number, total: number, range: number): number[] => {
  const pages: number[] = [];
  const halfRange = Math.floor(range / 2);

  let start = Math.max(1, current - halfRange);
  let end = Math.min(total, start + range - 1);

  if (end - start < range - 1) {
    start = Math.max(1, end - range + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

/**
 * Pagination component
 * Creates page navigation - molecule component
 */
export const Pagination = ({
  currentPage,
  totalPages,
  pageRange = 5,
  showFirstLast = true,
  onPageChange,
  className,
  ...rest
}: IPaginationProps): HTMLElement => {
  const pages = getPageNumbers(currentPage, totalPages, pageRange);
  const showLeftEllipsis = pages[0] > 1;
  const showRightEllipsis = pages[pages.length - 1] < totalPages;

  const buttonClasses = (active = false, disabled = false) =>
    cn(
      'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 touch-target state-layer',
      'focus:outline-none focus:ring-4 focus:ring-primary-100',
      active
        ? 'bg-blue-500 text-white shadow-md'
        : disabled
          ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105'
    );

  return (
    <nav aria-label="Pagination" className={cn('flex items-center space-x-1', className)} {...rest}>
      {/* First */}
      {showFirstLast && (
        <button
          className={buttonClasses(false, currentPage === 1)}
          disabled={currentPage === 1}
          onclick={() => currentPage > 1 && onPageChange(1)}
          aria-label="First page"
        >
          «
        </button>
      )}

      {/* Previous */}
      <button
        className={buttonClasses(false, currentPage === 1)}
        disabled={currentPage === 1}
        onclick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Left ellipsis */}
      {showLeftEllipsis && <span className="px-2 text-gray-500">...</span>}

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          className={buttonClasses(page === currentPage)}
          onclick={() => page !== currentPage && onPageChange(page)}
          aria-label={`Page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Right ellipsis */}
      {showRightEllipsis && <span className="px-2 text-gray-500">...</span>}

      {/* Next */}
      <button
        className={buttonClasses(false, currentPage === totalPages)}
        disabled={currentPage === totalPages}
        onclick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        ›
      </button>

      {/* Last */}
      {showFirstLast && (
        <button
          className={buttonClasses(false, currentPage === totalPages)}
          disabled={currentPage === totalPages}
          onclick={() => currentPage < totalPages && onPageChange(totalPages)}
          aria-label="Last page"
        >
          »
        </button>
      )}
    </nav>
  );
};
