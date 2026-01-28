/**
 * Toggle Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { Toggle } from '../../components/atoms/toggle';
import { Label } from '../../components/molecules/label';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const ToggleDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Toggle</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Toggle switch for on/off states and boolean settings.
        </p>
      </div>

      <DemoSection title="Basic Toggle" description="Simple toggle switches">
        <Stack direction="column" spacing="lg">
          <label class="flex items-center justify-between max-w-xs">
            <span>Enable notifications</span>
            <Toggle />
          </label>

          <label class="flex items-center justify-between max-w-xs">
            <span>Auto-save</span>
            <Toggle checked />
          </label>

          <label class="flex items-center justify-between max-w-xs">
            <span>Dark mode</span>
            <Toggle />
          </label>
        </Stack>
        <CodeBlock
          code={`<label class="flex items-center gap-2">
  <span>Label</span>
  <Toggle />
</label>

<Toggle checked /> // On by default`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Different toggle sizes">
        <Stack direction="column" spacing="lg">
          <label class="flex items-center gap-3">
            <Toggle size="sm" checked />
            <span class="text-sm">Small toggle</span>
          </label>

          <label class="flex items-center gap-3">
            <Toggle size="md" checked />
            <span>Medium toggle (default)</span>
          </label>

          <label class="flex items-center gap-3">
            <Toggle size="lg" checked />
            <span class="text-lg">Large toggle</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Toggle size="sm" />
<Toggle size="md" />
<Toggle size="lg" />`}
        />
      </DemoSection>

      <DemoSection title="States" description="Toggle states">
        <Stack direction="column" spacing="lg">
          <label class="flex items-center gap-3">
            <Toggle />
            <span>Off state</span>
          </label>

          <label class="flex items-center gap-3">
            <Toggle checked />
            <span>On state</span>
          </label>

          <label class="flex items-center gap-3 opacity-50">
            <Toggle disabled />
            <span>Disabled off</span>
          </label>

          <label class="flex items-center gap-3 opacity-50">
            <Toggle checked disabled />
            <span>Disabled on</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Toggle /> // Off
<Toggle checked /> // On
<Toggle disabled /> // Disabled off
<Toggle checked disabled /> // Disabled on`}
        />
      </DemoSection>

      <DemoSection
        title="With Labels and Descriptions"
        description="Toggles with detailed information"
      >
        <Stack direction="column" spacing="xl">
          <label class="flex items-start justify-between gap-4 max-w-2xl">
            <div class="flex-1">
              <div class="font-medium mb-1">Email notifications</div>
              <div class="text-sm text-gray-500">
                Receive emails about your account activity and updates
              </div>
            </div>
            <Toggle checked />
          </label>

          <label class="flex items-start justify-between gap-4 max-w-2xl">
            <div class="flex-1">
              <div class="font-medium mb-1">Push notifications</div>
              <div class="text-sm text-gray-500">Get push notifications on your mobile devices</div>
            </div>
            <Toggle />
          </label>

          <label class="flex items-start justify-between gap-4 max-w-2xl">
            <div class="flex-1">
              <div class="font-medium mb-1">Marketing emails</div>
              <div class="text-sm text-gray-500">
                Receive promotional emails about new features and offers
              </div>
            </div>
            <Toggle />
          </label>

          <label class="flex items-start justify-between gap-4 max-w-2xl opacity-50">
            <div class="flex-1">
              <div class="font-medium mb-1">Security alerts</div>
              <div class="text-sm text-gray-500">
                Critical security notifications (cannot be disabled)
              </div>
            </div>
            <Toggle checked disabled />
          </label>
        </Stack>
        <CodeBlock
          code={`<label class="flex items-start justify-between gap-4">
  <div class="flex-1">
    <div class="font-medium">Title</div>
    <div class="text-sm text-gray-500">Description</div>
  </div>
  <Toggle />
</label>`}
        />
      </DemoSection>

      <DemoSection title="Settings Panel" description="Common use case for settings">
        <div class="max-w-2xl space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Privacy Settings</h3>
            <Stack
              direction="column"
              spacing="lg"
              class="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700"
            >
              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">Profile visibility</div>
                  <div class="text-sm text-gray-500">Make your profile visible to others</div>
                </div>
                <Toggle checked />
              </label>

              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">Show online status</div>
                  <div class="text-sm text-gray-500">Let others see when you're online</div>
                </div>
                <Toggle checked />
              </label>

              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">Activity tracking</div>
                  <div class="text-sm text-gray-500">
                    Allow us to track your activity for analytics
                  </div>
                </div>
                <Toggle />
              </label>
            </Stack>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Accessibility</h3>
            <Stack
              direction="column"
              spacing="lg"
              class="border border-gray-200 dark:border-gray-700 rounded-lg divide-y divide-gray-200 dark:divide-gray-700"
            >
              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">Reduce motion</div>
                  <div class="text-sm text-gray-500">Minimize animations and transitions</div>
                </div>
                <Toggle />
              </label>

              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">High contrast mode</div>
                  <div class="text-sm text-gray-500">Increase contrast for better visibility</div>
                </div>
                <Toggle />
              </label>

              <label class="flex items-center justify-between gap-4 p-4">
                <div>
                  <div class="font-medium">Screen reader support</div>
                  <div class="text-sm text-gray-500">Enable optimizations for screen readers</div>
                </div>
                <Toggle />
              </label>
            </Stack>
          </div>
        </div>
        <CodeBlock
          code={`<div class="border rounded-lg divide-y">
  <label class="flex items-center justify-between p-4">
    <div>
      <div class="font-medium">Setting name</div>
      <div class="text-sm text-gray-500">Description</div>
    </div>
    <Toggle />
  </label>
  {/* More settings... */}
</div>`}
        />
      </DemoSection>

      <DemoSection title="Compact Layout" description="Toggles in a compact horizontal layout">
        <div class="space-y-4">
          <Label>Quick settings:</Label>
          <div class="flex flex-wrap gap-6">
            <label class="flex items-center gap-2">
              <Toggle size="sm" checked />
              <span class="text-sm">Wi-Fi</span>
            </label>
            <label class="flex items-center gap-2">
              <Toggle size="sm" checked />
              <span class="text-sm">Bluetooth</span>
            </label>
            <label class="flex items-center gap-2">
              <Toggle size="sm" />
              <span class="text-sm">Airplane Mode</span>
            </label>
            <label class="flex items-center gap-2">
              <Toggle size="sm" checked />
              <span class="text-sm">Location</span>
            </label>
            <label class="flex items-center gap-2">
              <Toggle size="sm" />
              <span class="text-sm">Do Not Disturb</span>
            </label>
          </div>
        </div>
        <CodeBlock
          code={`<div class="flex flex-wrap gap-6">
  <label class="flex items-center gap-2">
    <Toggle size="sm" />
    <span class="text-sm">Wi-Fi</span>
  </label>
  {/* More toggles... */}
</div>`}
        />
      </DemoSection>
    </div>
  );
};
