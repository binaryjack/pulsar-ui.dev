/**
 * Spinner Component Demo
 */

import { Spinner } from '../../components/atoms/spinner';
import { Stack } from '../../components/atoms/stack';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const SpinnerDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Spinner</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Animated loading indicator for async operations.
        </p>
      </div>

      <DemoSection title="Sizes" description="Three spinner sizes">
        <Stack direction="horizontal" spacing="lg" align="center">
          <div class="text-center">
            <Spinner size="sm" />
            <p class="text-sm mt-2">Small</p>
          </div>
          <div class="text-center">
            <Spinner size="md" />
            <p class="text-sm mt-2">Medium</p>
          </div>
          <div class="text-center">
            <Spinner size="lg" />
            <p class="text-sm mt-2">Large</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`}
        />
      </DemoSection>

      <DemoSection title="Colors" description="Semantic color variants">
        <Stack direction="horizontal" spacing="lg" align="center">
          <div class="text-center">
            <Spinner />
            <p class="text-sm mt-2">Primary</p>
          </div>
          <div class="text-center">
            <Spinner />
            <p class="text-sm mt-2">Secondary</p>
          </div>
          <div class="text-center">
            <Spinner />
            <p class="text-sm mt-2">Success</p>
          </div>
          <div class="text-center">
            <Spinner />
            <p class="text-sm mt-2">Error</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Spinner color="primary" />
<Spinner color="success" />`}
        />
      </DemoSection>

      <DemoSection title="With Label" description="Spinner with loading text">
        <div class="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg">
          <Spinner size="lg" />
          <p class="mt-4 text-gray-600">Loading content...</p>
        </div>
        <CodeBlock
          code={`<div class="flex flex-col items-center">
  <Spinner size="lg" color="primary" />
  <p class="mt-4">Loading content...</p>
</div>`}
        />
      </DemoSection>
    </div>
  );
};
