/**
 * Drawer Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Grid } from '../../components/atoms/grid';
import { Stack } from '../../components/atoms/stack';
import { Button } from '../../components/molecules/button';
import { Drawer } from '../../components/organisms/drawer';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const DrawerDemo = (): HTMLElement => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Drawer</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Side panel overlay with Portal, 4 placements, 5 sizes, backdrop, and scroll lock.
        </p>
      </div>

      <DemoSection title="Placements" description="Drawer can slide in from all four sides">
        <Grid columns={2} gap="md" className="max-w-lg mx-auto">
          <Button onclick={() => setLeftOpen(true)}>Open Left</Button>
          <Button onclick={() => setRightOpen(true)}>Open Right</Button>
          <Button onclick={() => setTopOpen(true)}>Open Top</Button>
          <Button onclick={() => setBottomOpen(true)}>Open Bottom</Button>
        </Grid>

        <Drawer open={leftOpen()} onClose={() => setLeftOpen(false)} placement="left">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Left Drawer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the left side.
            </p>
            <Button onclick={() => setLeftOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <Drawer open={rightOpen()} onClose={() => setRightOpen(false)} placement="right">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Right Drawer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the right side.
            </p>
            <Button onclick={() => setRightOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <Drawer open={topOpen()} onClose={() => setTopOpen(false)} placement="top">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Top Drawer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the top.
            </p>
            <Button onclick={() => setTopOpen(false)}>Close</Button>
          </div>
        </Drawer>

        <Drawer open={bottomOpen()} onClose={() => setBottomOpen(false)} placement="bottom">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Bottom Drawer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This drawer slides in from the bottom.
            </p>
            <Button onclick={() => setBottomOpen(false)}>Close</Button>
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
  <div className="p-6">
    <h2>Drawer Content</h2>
  </div>
</Drawer>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Five size options for different use cases">
        <Stack spacing="md" justify="center">
          <Button onclick={() => setSmOpen(true)}>Small Drawer</Button>
          <Button onclick={() => setLgOpen(true)}>Large Drawer</Button>
        </Stack>

        <Drawer open={smOpen()} onClose={() => setSmOpen(false)} size="sm" placement="right">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Small Drawer</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is a small drawer (width: 16rem)
            </p>
          </div>
        </Drawer>

        <Drawer open={lgOpen()} onClose={() => setLgOpen(false)} size="lg" placement="right">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Large Drawer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is a large drawer (width: 32rem). Perfect for forms, detailed content, or
              navigation menus.
            </p>
            <div className="space-y-4 mt-6">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 1</div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 2</div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">Section 3</div>
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
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">• Click backdrop to close</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Press Escape key to close</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Body scroll locked when open</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Smooth slide-in animations</p>
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
