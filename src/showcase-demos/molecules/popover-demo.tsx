/**
 * Popover Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Popover } from '../../../components/molecules/popover';
import { Button } from '../../../components/molecules/button';
import { Grid } from '../../../components/atoms/grid';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const PopoverDemo = (): HTMLElement => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const popoverContent = (
    <div class="p-4 space-y-2">
      <h3 class="font-semibold">Popover Title</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        This is the popover content. It can contain any elements.
      </p>
      <Button size="sm" variant="primary">
        Action
      </Button>
    </div>
  );

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Popover</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Popover overlay with Portal, click/hover triggers, and four placements.
        </p>
      </div>

      <DemoSection title="Click Trigger" description="Click to open/close popover">
        <div class="flex justify-center py-8">
          <Popover open={open1} onOpenChange={setOpen1} content={popoverContent} trigger="click">
            <Button variant="outline">Click Me</Button>
          </Popover>
        </div>
        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Popover
  open={open}
  onOpenChange={setOpen}
  trigger="click"
  content={
    <div class="p-4">
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
        <div class="flex justify-center py-8">
          <Popover
            content={
              <div class="p-3">
                <p class="text-sm">This appears on hover</p>
              </div>
            }
            trigger="hover"
          >
            <Button variant="outline">Hover Me</Button>
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
        <Grid cols={2} gap="lg" class="max-w-2xl mx-auto py-8">
          <div class="flex justify-center">
            <Popover
              placement="top"
              content={
                <div class="p-3">
                  <p class="text-sm">Top placement</p>
                </div>
              }
            >
              <Button variant="outline">Top</Button>
            </Popover>
          </div>
          <div class="flex justify-center">
            <Popover
              placement="right"
              content={
                <div class="p-3">
                  <p class="text-sm">Right placement</p>
                </div>
              }
            >
              <Button variant="outline">Right</Button>
            </Popover>
          </div>
          <div class="flex justify-center">
            <Popover
              placement="bottom"
              content={
                <div class="p-3">
                  <p class="text-sm">Bottom placement</p>
                </div>
              }
            >
              <Button variant="outline">Bottom</Button>
            </Popover>
          </div>
          <div class="flex justify-center">
            <Popover
              placement="left"
              content={
                <div class="p-3">
                  <p class="text-sm">Left placement</p>
                </div>
              }
            >
              <Button variant="outline">Left</Button>
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
        <div class="flex justify-center py-8">
          <Popover
            open={open2}
            onOpenChange={setOpen2}
            content={
              <div class="p-4 space-y-3 w-64">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-blue-500 rounded-full" />
                  <div>
                    <h4 class="font-semibold">John Doe</h4>
                    <p class="text-xs text-gray-500">john@example.com</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Software engineer with 5+ years of experience.
                </p>
                <div class="flex gap-2">
                  <Button size="sm" variant="primary">
                    Follow
                  </Button>
                  <Button size="sm" variant="outline">
                    Message
                  </Button>
                </div>
              </div>
            }
          >
            <Button variant="outline">User Profile</Button>
          </Popover>
        </div>
        <CodeBlock
          code={`<Popover
  content={
    <div class="p-4">
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
