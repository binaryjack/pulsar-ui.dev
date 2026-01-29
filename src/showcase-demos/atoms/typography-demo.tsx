/**
 * Typography Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const TypographyDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Typography</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Consistent text styling with semantic HTML elements.
        </p>
      </div>

      <DemoSection title="Headings" description="Six heading levels">
        <Stack direction="vertical" spacing="md">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
        </Stack>
        <CodeBlock
          code={`<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>`}
        />
      </DemoSection>

      <DemoSection title="Body Text" description="Paragraph and body text styles">
        <Stack direction="vertical" spacing="md">
          <Typography variant="body1">
            This is body1 text. It's the default body text size and is ideal for most content. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body2">
            This is body2 text. It's slightly smaller and can be used for secondary content. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Typography variant="caption">
            This is caption text. It's used for small annotations or helper text.
          </Typography>
        </Stack>
        <CodeBlock
          code={`<Typography variant="body1">Primary body text</Typography>
<Typography variant="body2">Secondary body text</Typography>
<Typography variant="caption">Caption text</Typography>`}
        />
      </DemoSection>

      <DemoSection title="Text Behavior" description="Truncate and no-wrap options">
        <Stack direction="vertical" spacing="md">
          <div class="max-w-xs border p-2">
            <Typography truncate>
              This is a very long text that will be truncated with an ellipsis when it exceeds the
              container width
            </Typography>
          </div>
          <div class="max-w-xs border p-2">
            <Typography noWrap>
              This text will not wrap to multiple lines no matter how long it is
            </Typography>
          </div>
        </Stack>
        <CodeBlock
          code={`<Typography truncate>Long text...</Typography>
<Typography noWrap>Text that won't wrap</Typography>`}
        />
      </DemoSection>
    </div>
  );
};
