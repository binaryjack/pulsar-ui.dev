/**
 * List Component Demo
 */

import { List, ListItem } from '../../../components/molecules/list';
import { Stack } from '../../../components/atoms/stack';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const ListDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">List</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Ordered and unordered lists with icon support and spacing options.
        </p>
      </div>

      <DemoSection title="Unordered List" description="Bullet point lists">
        <List>
          <ListItem>First item in the list</ListItem>
          <ListItem>Second item in the list</ListItem>
          <ListItem>Third item in the list</ListItem>
          <ListItem>Fourth item in the list</ListItem>
        </List>
        <CodeBlock
          code={`<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>`}
        />
      </DemoSection>

      <DemoSection title="Ordered List" description="Numbered lists">
        <List ordered>
          <ListItem>First step</ListItem>
          <ListItem>Second step</ListItem>
          <ListItem>Third step</ListItem>
          <ListItem>Final step</ListItem>
        </List>
        <CodeBlock
          code={`<List ordered>
  <ListItem>First step</ListItem>
  <ListItem>Second step</ListItem>
</List>`}
        />
      </DemoSection>

      <DemoSection title="With Icons" description="Add icons to list items">
        <List spacing="md">
          <ListItem
            icon={
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          >
            Feature completed
          </ListItem>
          <ListItem
            icon={
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          >
            Tests passing
          </ListItem>
          <ListItem
            icon={
              <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          >
            In progress
          </ListItem>
        </List>
        <CodeBlock
          code={`<List spacing="md">
  <ListItem icon={<CheckIcon />}>
    Completed task
  </ListItem>
  <ListItem icon={<ClockIcon />}>
    In progress
  </ListItem>
</List>`}
        />
      </DemoSection>

      <DemoSection title="Spacing Options" description="Control spacing between items">
        <Stack direction="column" spacing="xl">
          <div>
            <p class="text-sm font-medium mb-2">Small spacing:</p>
            <List spacing="sm">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
            </List>
          </div>
          <div>
            <p class="text-sm font-medium mb-2">Large spacing:</p>
            <List spacing="lg">
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
            </List>
          </div>
        </Stack>
        <CodeBlock
          code={`<List spacing="sm">...</List>
<List spacing="lg">...</List>`}
        />
      </DemoSection>
    </div>
  );
};
