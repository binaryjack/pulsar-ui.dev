/**
 * Button Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { Button } from '../../components/molecules/button';
import { ComponentConfigBuilder } from '../../components/utils/component-config-builder/component-config-builder';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const ButtonDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Button</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Interactive button component with multiple variants, sizes, and states.
        </p>
      </div>

      <DemoSection title="Variants" description="Four button styles for different contexts">
        <Stack direction="horizontal" spacing="md" wrap>
          <Button config={new ComponentConfigBuilder('primary').variant('solid').build()}>
            Solid Button
          </Button>
          <Button config={new ComponentConfigBuilder('primary').variant('outline').build()}>
            Outline Button
          </Button>
          <Button config={new ComponentConfigBuilder('primary').variant('ghost').build()}>
            Ghost Button
          </Button>
          <Button config={new ComponentConfigBuilder('primary').variant('ghost').build()}>
            Ghost Button
          </Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').variant('solid').build()}>
  Solid Button
</Button>
<Button config={new ComponentConfigBuilder('primary').variant('outline').build()}>
  Outline Button
</Button>`}
        />
      </DemoSection>

      <DemoSection title="Colors" description="Semantic color variants">
        <Stack direction="horizontal" spacing="md" wrap>
          <Button config={new ComponentConfigBuilder('primary').variant('solid').build()}>
            Primary
          </Button>
          <Button config={new ComponentConfigBuilder('secondary').variant('solid').build()}>
            Secondary
          </Button>
          <Button config={new ComponentConfigBuilder('success').variant('solid').build()}>
            Success
          </Button>
          <Button config={new ComponentConfigBuilder('warning').variant('solid').build()}>
            Warning
          </Button>
          <Button config={new ComponentConfigBuilder('error').variant('solid').build()}>
            Error
          </Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').build()}>
  Primary
</Button>
<Button config={new ComponentConfigBuilder('success').build()}>
  Success
</Button>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Three size variants">
        <Stack direction="horizontal" spacing="md" align="center" wrap>
          <Button config={new ComponentConfigBuilder('primary').size('sm').build()}>Small</Button>
          <Button config={new ComponentConfigBuilder('primary').size('md').build()}>Medium</Button>
          <Button config={new ComponentConfigBuilder('primary').size('lg').build()}>Large</Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').size('sm').build()}>
  Small
</Button>
<Button config={new ComponentConfigBuilder('primary').size('lg').build()}>
  Large
</Button>`}
        />
      </DemoSection>

      <DemoSection title="States" description="Button states and interactions">
        <Stack direction="horizontal" spacing="md" wrap>
          <Button config={new ComponentConfigBuilder('primary').build()}>Default</Button>
          <Button config={new ComponentConfigBuilder('primary').disabled(true).build()}>
            Disabled
          </Button>
          <Button config={new ComponentConfigBuilder('primary').loading(true).build()}>
            Loading
          </Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').disabled(true).build()}>
  Disabled
</Button>
<Button config={new ComponentConfigBuilder('primary').loading(true).build()}>
  Loading
</Button>`}
        />
      </DemoSection>

      <DemoSection title="With Icons" description="Buttons with icon elements">
        <Stack direction="horizontal" spacing="md" wrap>
          <Button config={new ComponentConfigBuilder('primary').build()}>
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Item
          </Button>
          <Button config={new ComponentConfigBuilder('error').variant('outline').build()}>
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').build()}>
  <svg class="w-5 h-5 mr-2">...</svg>
  Add Item
</Button>`}
        />
      </DemoSection>

      <DemoSection title="Full Width" description="Buttons that span full container width">
        <Stack direction="vertical" spacing="md">
          <Button config={new ComponentConfigBuilder('primary').fullWidth(true).build()}>
            Full Width Button
          </Button>
          <Button
            config={new ComponentConfigBuilder('secondary')
              .variant('outline')
              .fullWidth(true)
              .build()}
          >
            Full Width Outline
          </Button>
        </Stack>
        <CodeBlock
          code={`<Button config={new ComponentConfigBuilder('primary').fullWidth(true).build()}>
  Full Width Button
</Button>`}
        />
      </DemoSection>
    </div>
  );
};
