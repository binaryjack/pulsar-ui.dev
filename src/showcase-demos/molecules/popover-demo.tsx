/**
 * Popover Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Grid } from '../../components/atoms/grid';
import { Button } from '../../components/molecules/button';
import { Popover } from '../../components/molecules/popover';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const PopoverDemo = (): HTMLElement => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const popoverContent = (
    <div className="p-4 space-y-2">
      <h3 className="font-semibold">Popover Title</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        This is the popover content. It can contain any elements.
      </p>
      <Button>Action</Button>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Popover</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Popover overlay with Portal, click/hover triggers, and four placements.
        </p>
      </div>

      <DemoSection title="Click Trigger" description="Click to open/close popover">
        <div className="flex justify-center py-8">
          <Popover
            isOpen={open1()}
            onToggle={setOpen1}
            triggerElement={<Button>Click Me</Button>}
            trigger="click"
          >
            {popoverContent}
          </Popover>
        </div>
        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Popover
  open={open}
  onOpenChange={setOpen}
  trigger="click"
  content={
    <div className="p-4">
      <h3>Title</h3>
      <p>Content here</p>
    </div>
  }
>
  <Button>Click Me</Button>
</Popover>`}
        />
      </DemoSection>

      <DemoSection title="Hover Trigger" description="Hover to show popover">
        <div className="flex justify-center py-8">
          <Popover triggerElement={<Button>Hover Me</Button>} trigger="hover">
            <div className="p-3">
              <p className="text-sm">This appears on hover</p>
            </div>
          </Popover>
        </div>
        <CodeBlock
          code={`<Popover
  trigger="hover"
  content={<div>Hover content</div>}
>
  <Button>Hover Me</Button>
</Popover>`}
        />
      </DemoSection>

      <DemoSection title="Placements" description="Popover can appear on all four sides">
        <Grid columns={2} gap="lg" className="max-w-2xl mx-auto py-8">
          <div className="flex justify-center">
            <Popover placement="top" triggerElement={<Button>Top</Button>}>
              <div className="p-3">
                <p className="text-sm">Top placement</p>
              </div>
            </Popover>
          </div>
          <div className="flex justify-center">
            <Popover placement="right" triggerElement={<Button>Right</Button>}>
              <div className="p-3">
                <p className="text-sm">Right placement</p>
              </div>
            </Popover>
          </div>
          <div className="flex justify-center">
            <Popover placement="bottom" triggerElement={<Button>Bottom</Button>}>
              <div className="p-3">
                <p className="text-sm">Bottom placement</p>
              </div>
            </Popover>
          </div>
          <div className="flex justify-center">
            <Popover placement="left" triggerElement={<Button>Left</Button>}>
              <div className="p-3">
                <p className="text-sm">Left placement</p>
              </div>
            </Popover>
          </div>
        </Grid>
        <CodeBlock
          code={`<Popover placement="top" content={...}>
  <Button>Top</Button>
</Popover>`}
        />
      </DemoSection>

      <DemoSection title="Rich Content" description="Popover can contain complex content">
        <div className="flex justify-center py-8">
          <Popover
            isOpen={open2()}
            onToggle={setOpen2}
            triggerElement={<Button>User Profile</Button>}
          >
            <div className="p-4 space-y-3 w-64">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full" />
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-xs text-gray-500">john@example.com</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Software engineer with 5+ years of experience.
              </p>
              <div className="flex gap-2">
                <Button>Follow</Button>
                <Button>Message</Button>
              </div>
            </div>
          </Popover>
        </div>
        <CodeBlock
          code={`<Popover
  content={
    <div className="p-4">
      {/* Rich content with images, text, buttons */}
    </div>
  }
>
  <Button>View Profile</Button>
</Popover>`}
        />
      </DemoSection>
    </div>
  );
};
