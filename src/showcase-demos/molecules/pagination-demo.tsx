/**
 * Pagination Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Pagination } from '../../components/molecules/pagination';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const PaginationDemo = (): HTMLElement => {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(1);
  const [page3, setPage3] = useState(1);

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pagination</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Page navigation with ellipsis, first/last buttons, and configurable page range.
        </p>
      </div>

      <DemoSection title="Basic Pagination" description="Navigate through pages">
        <div class="space-y-4">
          <Pagination currentPage={page1} totalPages={10} onPageChange={setPage1} />
          <p class="text-sm text-gray-600 dark:text-gray-400">Current page: {page1} of 10</p>
        </div>
        <CodeBlock
          code={`const [page, setPage] = useState(1)

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>`}
        />
      </DemoSection>

      <DemoSection
        title="With First/Last Buttons"
        description="Quick navigation to first and last pages"
      >
        <div class="space-y-4">
          <Pagination currentPage={page2} totalPages={20} onPageChange={setPage2} showFirstLast />
          <p class="text-sm text-gray-600 dark:text-gray-400">Current page: {page2} of 20</p>
        </div>
        <CodeBlock
          code={`<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  showFirstLast
/>`}
        />
      </DemoSection>

      <DemoSection title="Custom Page Range" description="Show more or fewer page numbers">
        <div class="space-y-4">
          <Pagination
            currentPage={page3}
            totalPages={50}
            onPageChange={setPage3}
            showFirstLast
            pageRange={3}
          />
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Current page: {page3} of 50 (showing 3 pages on each side)
          </p>
        </div>
        <CodeBlock
          code={`<Pagination
  currentPage={page}
  totalPages={50}
  pageRange={3}
  showFirstLast
/>`}
        />
      </DemoSection>

      <DemoSection title="Few Pages" description="Compact display for small page counts">
        <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
        <CodeBlock
          code={`<Pagination
  currentPage={2}
  totalPages={5}
  onPageChange={handleChange}
/>`}
        />
      </DemoSection>
    </div>
  );
};
