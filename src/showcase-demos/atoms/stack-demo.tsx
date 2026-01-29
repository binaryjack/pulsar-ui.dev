/**
 * Stack Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const StackDemo = (): HTMLElement => {
  const DemoBox = ({ children }: { children: any }): HTMLElement => (
    <div class="bg-primary-100 text-primary-700 px-4 py-2 rounded-md text-center">{children}</div>
  );

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Stack</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Flexbox-based layout component for arranging elements with consistent spacing.
        </p>
      </div>

      <DemoSection title="Horizontal Stack" description="Items arranged in a row">
        <Stack direction="horizontal" spacing="md">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Stack>
        <CodeBlock
          code={`<Stack direction="horizontal" spacing="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}
        />
      </DemoSection>

      <DemoSection title="Vertical Stack" description="Items arranged in a column">
        <Stack direction="vertical" spacing="md">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Stack>
        <CodeBlock
          code={`<Stack direction="vertical" spacing="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}
        />
      </DemoSection>

      <DemoSection title="Spacing Variants" description="Different spacing sizes">
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">None (no spacing)</p>
            <Stack direction="horizontal" spacing="none">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Small spacing</p>
            <Stack direction="horizontal" spacing="sm">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Medium spacing (default)</p>
            <Stack direction="horizontal" spacing="md">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Large spacing</p>
            <Stack direction="horizontal" spacing="lg">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
        </div>
        <CodeBlock
          code={`<Stack direction="horizontal" spacing="sm">...</Stack>
<Stack direction="horizontal" spacing="lg">...</Stack>`}
        />
      </DemoSection>

      <DemoSection title="Alignment" description="Align items along the cross axis">
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Start alignment</p>
            <div class="border border-gray-200 rounded p-4 h-32">
              <Stack direction="horizontal" spacing="md" align="start">
                <DemoBox>A</DemoBox>
                <DemoBox>
                  <div>B</div>
                  <div class="text-xs">Taller</div>
                </DemoBox>
                <DemoBox>C</DemoBox>
              </Stack>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Center alignment</p>
            <div class="border border-gray-200 rounded p-4 h-32">
              <Stack direction="horizontal" spacing="md" align="center">
                <DemoBox>A</DemoBox>
                <DemoBox>
                  <div>B</div>
                  <div class="text-xs">Taller</div>
                </DemoBox>
                <DemoBox>C</DemoBox>
              </Stack>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">End alignment</p>
            <div class="border border-gray-200 rounded p-4 h-32">
              <Stack direction="horizontal" spacing="md" align="end">
                <DemoBox>A</DemoBox>
                <DemoBox>
                  <div>B</div>
                  <div class="text-xs">Taller</div>
                </DemoBox>
                <DemoBox>C</DemoBox>
              </Stack>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`<Stack direction="horizontal" align="start">...</Stack>
<Stack direction="horizontal" align="center">...</Stack>
<Stack direction="horizontal" align="end">...</Stack>`}
        />
      </DemoSection>

      <DemoSection title="Justification" description="Justify items along the main axis">
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Start justification</p>
            <Stack direction="horizontal" spacing="md" justify="start">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Center justification</p>
            <Stack direction="horizontal" spacing="md" justify="center">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">End justification</p>
            <Stack direction="horizontal" spacing="md" justify="end">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Space between</p>
            <Stack direction="horizontal" spacing="none" justify="between">
              <DemoBox>A</DemoBox>
              <DemoBox>B</DemoBox>
              <DemoBox>C</DemoBox>
            </Stack>
          </div>
        </div>
        <CodeBlock
          code={`<Stack direction="horizontal" justify="start">...</Stack>
<Stack direction="horizontal" justify="center">...</Stack>
<Stack direction="horizontal" justify="between">...</Stack>`}
        />
      </DemoSection>

      <DemoSection title="Wrap" description="Allow items to wrap to multiple lines">
        <Stack direction="horizontal" spacing="md" wrap>
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
          <DemoBox>Item 4</DemoBox>
          <DemoBox>Item 5</DemoBox>
          <DemoBox>Item 6</DemoBox>
          <DemoBox>Item 7</DemoBox>
          <DemoBox>Item 8</DemoBox>
        </Stack>
        <CodeBlock
          code={`<Stack direction="horizontal" spacing="md" wrap>
  <div>Item 1</div>
  <div>Item 2</div>
  {/* More items... */}
</Stack>`}
        />
      </DemoSection>
    </div>
  );
};
