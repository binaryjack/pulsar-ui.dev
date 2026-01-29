/**
 * Skeleton Component Demo
 */

import { Skeleton } from '../../components/atoms/skeleton';
import { Stack } from '../../components/atoms/stack';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const SkeletonDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Skeleton</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Loading placeholder component for content that's being fetched.
        </p>
      </div>

      <DemoSection title="Basic Skeletons" description="Different skeleton shapes and sizes">
        <Stack direction="vertical" spacing="lg">
          <div class="space-y-2">
            <p class="text-sm text-gray-600">Line skeleton</p>
            <Skeleton width="w-full" height="h-4" />
          </div>
          <div class="space-y-2">
            <p class="text-sm text-gray-600">Paragraph skeleton</p>
            <Stack direction="vertical" spacing="sm">
              <Skeleton width="w-full" height="h-4" />
              <Skeleton width="w-full" height="h-4" />
              <Skeleton width="w-3/4" height="h-4" />
            </Stack>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-gray-600">Circle skeleton (avatar)</p>
            <Skeleton width="w-16" height="h-16" rounded="full" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Skeleton width="w-full" height="h-4" />
<Skeleton width="w-16" height="h-16" rounded="full" />`}
        />
      </DemoSection>

      <DemoSection title="Card Skeleton" description="Skeleton for card loading states">
        <div class="border border-gray-200 rounded-lg p-6 space-y-4">
          <div class="flex items-center gap-4">
            <Skeleton width="w-12" height="h-12" rounded="full" />
            <div class="flex-1 space-y-2">
              <Skeleton width="w-32" height="h-4" />
              <Skeleton width="w-24" height="h-3" />
            </div>
          </div>
          <div class="space-y-2">
            <Skeleton width="w-full" height="h-4" />
            <Skeleton width="w-full" height="h-4" />
            <Skeleton width="w-2/3" height="h-4" />
          </div>
          <div class="flex gap-2">
            <Skeleton width="w-20" height="h-8" />
            <Skeleton width="w-20" height="h-8" />
          </div>
        </div>
        <CodeBlock
          code={`<div class="space-y-4">
  <div class="flex gap-4">
    <Skeleton width="w-12" height="h-12" rounded="full" />
    <div class="space-y-2">
      <Skeleton width="w-32" height="h-4" />
      <Skeleton width="w-24" height="h-3" />
    </div>
  </div>
</div>`}
        />
      </DemoSection>

      <DemoSection title="Rounded Variants" description="Different border radius options">
        <Stack direction="horizontal" spacing="md">
          <Skeleton width="w-24" height="h-24" rounded="none" />
          <Skeleton width="w-24" height="h-24" rounded="sm" />
          <Skeleton width="w-24" height="h-24" rounded="md" />
          <Skeleton width="w-24" height="h-24" rounded="lg" />
          <Skeleton width="w-24" height="h-24" rounded="full" />
        </Stack>
        <CodeBlock code={`<Skeleton width="w-24" height="h-24" rounded="full" />`} />
      </DemoSection>
    </div>
  );
};
