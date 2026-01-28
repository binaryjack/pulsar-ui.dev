/**
 * Avatar Component Demo
 */

import { Avatar } from '../../../components/atoms/avatar';
import { Stack } from '../../../components/atoms/stack';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const AvatarDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Avatar</h1>
        <p class="text-gray-600 dark:text-gray-400">
          User avatar component with image fallback, initials, and status indicators.
        </p>
      </div>

      <DemoSection title="Sizes" description="Avatar comes in 6 sizes: xs, sm, md, lg, xl, 2xl">
        <Stack spacing="md" align="center">
          <Avatar size="xs" name="John Doe" />
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="John Doe" />
          <Avatar size="lg" name="John Doe" />
          <Avatar size="xl" name="John Doe" />
          <Avatar size="2xl" name="John Doe" />
        </Stack>
        <CodeBlock
          code={`<Avatar size="xs" name="John Doe" />
<Avatar size="md" name="John Doe" />
<Avatar size="xl" name="John Doe" />`}
        />
      </DemoSection>

      <DemoSection title="With Images" description="Display user images with fallback to initials">
        <Stack spacing="md" align="center">
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=1" name="Alice Johnson" />
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=2" name="Bob Smith" />
          <Avatar size="lg" src="invalid-url" name="Charlie Brown" />
        </Stack>
        <CodeBlock
          code={`<Avatar
  size="lg"
  src="https://example.com/avatar.jpg"
  name="Alice Johnson"
/>`}
        />
      </DemoSection>

      <DemoSection title="Status Indicators" description="Show online status with color indicators">
        <Stack spacing="md" align="center">
          <Avatar size="xl" name="Online User" status="online" />
          <Avatar size="xl" name="Offline User" status="offline" />
          <Avatar size="xl" name="Busy User" status="busy" />
          <Avatar size="xl" name="Away User" status="away" />
        </Stack>
        <CodeBlock
          code={`<Avatar name="User" status="online" />
<Avatar name="User" status="busy" />
<Avatar name="User" status="away" />`}
        />
      </DemoSection>
    </div>
  );
};
