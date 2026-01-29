/**
 * Badge Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { Badge } from '../../components/molecules/badge';
import { ComponentConfigBuilder } from '../../components/utils/component-config-builder/component-config-builder';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const BadgeDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Badge</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Small status indicator or label component with semantic colors.
        </p>
      </div>

      <DemoSection title="Variants" description="Solid and outline badge styles">
        <Stack direction="horizontal" spacing="md" wrap>
          <Badge
            config={new ComponentConfigBuilder('primary').variant('solid').build()}
            label="Primary"
          />
          <Badge
            config={new ComponentConfigBuilder('secondary').variant('solid').build()}
            label="Secondary"
          />
          <Badge
            config={new ComponentConfigBuilder('success').variant('solid').build()}
            label="Success"
          />
          <Badge
            config={new ComponentConfigBuilder('warning').variant('solid').build()}
            label="Warning"
          />
          <Badge
            config={new ComponentConfigBuilder('error').variant('solid').build()}
            label="Error"
          />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('primary').variant('solid').build()}
  label="Primary"
/>
<Badge
  config={new ComponentConfigBuilder('success').variant('solid').build()}
  label="Success"
/>`}
        />
      </DemoSection>

      <DemoSection title="Outline Variant" description="Lighter badge style with borders">
        <Stack direction="horizontal" spacing="md" wrap>
          <Badge
            config={new ComponentConfigBuilder('primary').variant('outline').build()}
            label="Primary"
          />
          <Badge
            config={new ComponentConfigBuilder('secondary').variant('outline').build()}
            label="Secondary"
          />
          <Badge
            config={new ComponentConfigBuilder('success').variant('outline').build()}
            label="Success"
          />
          <Badge
            config={new ComponentConfigBuilder('warning').variant('outline').build()}
            label="Warning"
          />
          <Badge
            config={new ComponentConfigBuilder('error').variant('outline').build()}
            label="Error"
          />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('primary').variant('outline').build()}
  label="Primary"
/>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Three size variants">
        <Stack direction="horizontal" spacing="md" align="center" wrap>
          <Badge config={new ComponentConfigBuilder('primary').size('sm').build()} label="Small" />
          <Badge config={new ComponentConfigBuilder('primary').size('md').build()} label="Medium" />
          <Badge config={new ComponentConfigBuilder('primary').size('lg').build()} label="Large" />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('primary').size('sm').build()}
  label="Small"
/>`}
        />
      </DemoSection>

      <DemoSection title="With Dot" description="Badges with status indicator dot">
        <Stack direction="horizontal" spacing="md" wrap>
          <Badge config={new ComponentConfigBuilder('primary').build()} label="Online" dot />
          <Badge config={new ComponentConfigBuilder('success').build()} label="Active" dot />
          <Badge config={new ComponentConfigBuilder('warning').build()} label="Pending" dot />
          <Badge config={new ComponentConfigBuilder('error').build()} label="Offline" dot />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('success').build()}
  label="Active"
  dot
/>`}
        />
      </DemoSection>

      <DemoSection title="With Icons" description="Badges with icon elements">
        <Stack direction="horizontal" spacing="md" wrap>
          <Badge
            config={new ComponentConfigBuilder('success').build()}
            label="Verified"
            icon={
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          />
          <Badge
            config={new ComponentConfigBuilder('warning').build()}
            label="Alert"
            icon={
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            }
          />
          <Badge
            config={new ComponentConfigBuilder('primary').build()}
            label="3 new"
            icon={
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            }
          />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('success').build()}
  label="Verified"
  icon={<svg>...</svg>}
/>`}
        />
      </DemoSection>

      <DemoSection title="Rounded Variants" description="Different border radius options">
        <Stack direction="horizontal" spacing="md" wrap>
          <Badge
            config={new ComponentConfigBuilder('primary').rounded('none').build()}
            label="None"
          />
          <Badge
            config={new ComponentConfigBuilder('primary').rounded('sm').build()}
            label="Small"
          />
          <Badge
            config={new ComponentConfigBuilder('primary').rounded('md').build()}
            label="Medium"
          />
          <Badge
            config={new ComponentConfigBuilder('primary').rounded('lg').build()}
            label="Large"
          />
          <Badge
            config={new ComponentConfigBuilder('primary').rounded('full').build()}
            label="Full"
          />
        </Stack>
        <CodeBlock
          code={`<Badge
  config={new ComponentConfigBuilder('primary').rounded('full').build()}
  label="Full"
/>`}
        />
      </DemoSection>
    </div>
  );
};
