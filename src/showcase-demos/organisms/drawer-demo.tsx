/**
 * Drawer Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Drawer } from '../../components/organisms/drawer';
import { Button } from '../../components/molecules/button';
import { Stack } from '../../components/atoms/stack';
import { Grid } from '../../components/atoms/grid';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const DrawerDemo = (): HTMLElement => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Drawer</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Side panel overlay with Portal, 4 placements, 5 sizes, backdrop, and scroll lock.
        </p>
      </div>

      <DemoSection title="Placements" description="Drawer can slide in from all four sides">
        <Grid cols={2} gap="md" class="max-w-lg mx-auto">
          <Button variant="outline" onClick={() => setLeftOpen(true)}>
            Open Left
          </Button>
          <Button variant="outline" onClick={() => setRightOpen(true)}>
            Open Right
          </Button>
          <Button variant="outline" onClick={() => setTopOpen(true)}>
            Open Top
          </Button>
          <Button variant="outline" onClick={() => setBottomOpen(true)}>
            Open Bottom
          </Button>
        </Grid>

        <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} placement="left">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Left Drawer</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the left side.
            </p>
            <Button onClick={() => setLeftOpen(false)}>Close</Button>
          </div>
        </Drawer

        <Drawer open={rightOpen} onClose={() => setRightOpen(false)} placement="right">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Right Drawer</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the right side.
            </p>
            <Button onClick={() => setRightOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <Drawer open={topOpen} onClose={() => setTopOpen(false)} placement="top">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Top Drawer</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">This drawer slides in from the top.</p>
            <Button onClick={() => setTopOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <Drawer open={bottomOpen} onClose={() => setBottomOpen(false)} placement="bottom">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Bottom Drawer</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the bottom.
            </p>
            <Button onClick={() => setBottomOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  placement="right"
>
  <div class="p-6">
    <h2>Drawer Content</h2>
  </div>
</Drawer>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Five size options for different use cases">
        <Stack spacing="md" justify="center">
          <Button variant="outline" onClick={() => setSmOpen(true)}>
            Small Drawer
          </Button>
          <Button variant="outline" onClick={() => setLgOpen(true)}>
            Large Drawer
          </Button>
        </Stack>

        <Drawer open={smOpen} onClose={() => setSmOpen(false)} size="sm" placement="right">
          <div class="p-6">
            <h2 class="text-xl font-bold mb-4">Small Drawer</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              This is a small drawer (width: 16rem)
            </p>
          </div>
        </Drawer>

        <Drawer open={lgOpen} onClose={() => setLgOpen(false)} size="lg" placement="right">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">Large Drawer</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              This is a large drawer (width: 32rem). Perfect for forms, detailed content, or
              navigation menus.
            </p>
            <div class="space-y-4 mt-6">
              <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 1</div>
              <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 2</div>
              <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 3</div>
            </div>
          </div>
        </Drawer>

        <CodeBlock
          code={`<Drawer size="sm" placement="right">...</Drawer>
<Drawer size="lg" placement="right">...</Drawer>
<Drawer size="full" placement="right">...</Drawer>`}
        />
      </DemoSection>

      <DemoSection title="Features" description="Backdrop, escape key, and scroll lock">
        <div class="space-y-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">• Click backdrop to close</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Press Escape key to close</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Body scroll locked when open</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Smooth slide-in animations</p>
        </div>
        <CodeBlock
          code={`<Drawer
  showBackdrop={true}
  closeOnBackdropClick={true}
  closeOnEscape={true}
>
  ...
</Drawer>`}
        />
      </DemoSection>
    </div>
  );
};
