/**
 * Toast Component Demo
 */

import { Grid } from '../../components/atoms/grid';
import { Stack } from '../../components/atoms/stack';
import { Button } from '../../components/molecules/button';
import { useToast } from '../../components/organisms/toast';
import { ComponentConfigBuilder } from '../../components/utils/component-config-builder/component-config-builder';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const ToastDemo = (): HTMLElement => {
  const toast = useToast();
  const outlineConfig = new ComponentConfigBuilder('primary').variant('outline').build();
  const outlineSmConfig = new ComponentConfigBuilder('primary')
    .variant('outline')
    .size('sm')
    .build();

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Toast</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Toast notifications with Portal, 6 positions, auto-dismiss, and queue management.
        </p>
      </div>

      <DemoSection title="Variants" description="Four contextual variants">
        <Grid cols={2} gap="md" class="max-w-lg mx-auto">
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.info({
                title: 'Information',
                description: 'This is an info toast message',
              })
            }
          >
            Info Toast
          </Button>
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.success({
                title: 'Success',
                description: 'Operation completed successfully',
              })
            }
          >
            Success Toast
          </Button>
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.warning({
                title: 'Warning',
                description: 'Please review this warning',
              })
            }
          >
            Warning Toast
          </Button>
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.error({
                title: 'Error',
                description: 'An error occurred',
              })
            }
          >
            Error Toast
          </Button>
        </Grid>
        <CodeBlock
          code={`const toast = useToast()

toast.success({
  title: 'Success',
  description: 'Operation completed'
})

toast.error({
  title: 'Error',
  description: 'Something went wrong'
})`}
        />
      </DemoSection>

      <DemoSection title="Positions" description="Six position options">
        <Grid cols={3} gap="md" class="max-w-2xl mx-auto">
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Top Left',
                position: 'top-left',
              })
            }
          >
            Top Left
          </Button>
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Top Center',
                position: 'top-center',
              })
            }
          >
            Top Center
          </Button>
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Top Right',
                position: 'top-right',
              })
            }
          >
            Top Right
          </Button>
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Bottom Left',
                position: 'bottom-left',
              })
            }
          >
            Bottom Left
          </Button>
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Bottom Center',
                position: 'bottom-center',
              })
            }
          >
            Bottom Center
          </Button>
          <Button
            config={outlineSmConfig}
            onclick={() =>
              toast.info({
                title: 'Bottom Right',
                position: 'bottom-right',
              })
            }
          >
            Bottom Right
          </Button>
        </Grid>
        <CodeBlock
          code={`toast.info({
  title: 'Notification',
  position: 'top-right'
})`}
        />
      </DemoSection>

      <DemoSection title="Auto Dismiss" description="Control how long toasts stay visible">
        <Stack spacing="md" justify="center">
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.info({
                title: 'Quick Toast',
                description: 'Dismisses in 2 seconds',
                duration: 2000,
              })
            }
          >
            2 Second Toast
          </Button>
          <Button
            config={outlineConfig}
            onclick={() =>
              toast.info({
                title: 'Persistent Toast',
                description: 'Stays until manually closed',
                duration: Infinity,
              })
            }
          >
            No Auto-Dismiss
          </Button>
        </Stack>
        <CodeBlock
          code={`toast.info({
  title: 'Quick message',
  duration: 2000
})

toast.info({
  title: 'Stays forever',
  duration: Infinity
})`}
        />
      </DemoSection>

      <DemoSection title="Closable" description="Allow users to manually close toasts">
        <Button
          config={outlineConfig}
          onclick={() =>
            toast.info({
              title: 'Closable Toast',
              description: 'Click the X to close',
              closable: true,
              duration: Infinity,
            })
          }
        >
          Show Closable Toast
        </Button>
        <CodeBlock
          code={`toast.info({
  title: 'Message',
  closable: true
})`}
        />
      </DemoSection>

      <DemoSection
        title="Queue Management"
        description="Multiple toasts are queued (max 5 visible)"
      >
        <Button
          config={outlineConfig}
          onclick={() => {
            for (let i = 1; i <= 7; i++) {
              toast.info({
                title: `Toast ${i}`,
                description: `This is toast number ${i}`,
              });
            }
          }}
        >
          Show 7 Toasts (Max 5 Visible)
        </Button>
        <CodeBlock
          code={`// Multiple toasts are queued automatically
toast.success({ title: 'Toast 1' })
toast.success({ title: 'Toast 2' })
toast.success({ title: 'Toast 3' })
// Max 5 toasts visible at once`}
        />
      </DemoSection>
    </div>
  );
};
