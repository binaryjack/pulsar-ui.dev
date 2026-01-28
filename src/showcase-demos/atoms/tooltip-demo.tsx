/**
 * Tooltip Component Demo
 */

import { Tooltip } from '../../components/atoms/tooltip';
import { Button } from '../../components/molecules/button';
import { Stack } from '../../components/atoms/stack';
import { Grid } from '../../components/atoms/grid';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const TooltipDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tooltip</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Simple tooltip component with four placement options.
        </p>
      </div>

      <DemoSection title="Placements" description="Tooltip can appear on all four sides">
        <Grid cols={2} gap="lg" class="max-w-md mx-auto">
          <div class="flex justify-center">
            <Tooltip content="Top tooltip" placement="top">
              <Button variant="outline">Top</Button>
            </Tooltip>
          </div>
          <div class="flex justify-center">
            <Tooltip content="Right tooltip" placement="right">
              <Button variant="outline">Right</Button>
            </Tooltip>
          </div>
          <div class="flex justify-center">
            <Tooltip content="Bottom tooltip" placement="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
          </div>
          <div class="flex justify-center">
            <Tooltip content="Left tooltip" placement="left">
              <Button variant="outline">Left</Button>
            </Tooltip>
          </div>
        </Grid>
        <CodeBlock
          code={`<Tooltip content="Help text" placement="top">
  <Button>Hover me</Button>
</Tooltip>`}
        />
      </DemoSection>

      <DemoSection title="Custom Delays" description="Control show and hide delays">
        <Stack spacing="md" justify="center">
          <Tooltip content="Quick tooltip" showDelay={0} hideDelay={0}>
            <Button variant="outline">No Delay</Button>
          </Tooltip>
          <Tooltip content="Normal tooltip" showDelay={200} hideDelay={100}>
            <Button variant="outline">200ms Delay</Button>
          </Tooltip>
          <Tooltip content="Slow tooltip" showDelay={500} hideDelay={200}>
            <Button variant="outline">500ms Delay</Button>
          </Tooltip>
        </Stack>
        <CodeBlock
          code={`<Tooltip
  content="Help text"
  showDelay={500}
  hideDelay={200}
>
  <Button>Hover me</Button>
</Tooltip>`}
        />
      </DemoSection>

      <DemoSection title="On Icons" description="Commonly used with icon buttons">
        <Stack spacing="md" justify="center">
          <Tooltip content="Edit item">
            <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Tooltip>
          <Tooltip content="Delete item">
            <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </Tooltip>
          <Tooltip content="Share item">
            <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </Tooltip>
        </Stack>
        <CodeBlock
          code={`<Tooltip content="Edit item">
  <button><EditIcon /></button>
</Tooltip>`}
        />
      </DemoSection>
    </div>
  );
};
