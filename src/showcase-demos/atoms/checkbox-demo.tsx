/**
 * Checkbox Component Demo
 */

import { Checkbox } from '../../components/atoms/checkbox';
import { Stack } from '../../components/atoms/stack';
import { Label } from '../../components/molecules/label';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const CheckboxDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Checkbox</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Checkbox input for multiple selections and boolean values.
        </p>
      </div>

      <DemoSection title="Basic Checkbox" description="Simple checkbox with label">
        <Stack direction="column" spacing="md">
          <label class="flex items-center gap-2 cursor-pointer">
            <Checkbox id="check1" />
            <span>Accept terms and conditions</span>
          </label>

          <label class="flex items-center gap-2 cursor-pointer">
            <Checkbox id="check2" checked />
            <span>Subscribe to newsletter</span>
          </label>

          <label class="flex items-center gap-2 cursor-pointer">
            <Checkbox id="check3" />
            <span>Remember me</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<label class="flex items-center gap-2">
  <Checkbox />
  <span>Label text</span>
</label>

<label class="flex items-center gap-2">
  <Checkbox checked />
  <span>Checked by default</span>
</label>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Different checkbox sizes">
        <Stack direction="column" spacing="lg">
          <label class="flex items-center gap-2">
            <Checkbox size="sm" />
            <span class="text-sm">Small checkbox</span>
          </label>

          <label class="flex items-center gap-2">
            <Checkbox size="md" checked />
            <span>Medium checkbox (default)</span>
          </label>

          <label class="flex items-center gap-2">
            <Checkbox size="lg" />
            <span class="text-lg">Large checkbox</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Checkbox size="sm" />
<Checkbox size="md" />
<Checkbox size="lg" />`}
        />
      </DemoSection>

      <DemoSection title="States" description="Checkbox states">
        <Stack direction="column" spacing="md">
          <label class="flex items-center gap-2">
            <Checkbox />
            <span>Unchecked</span>
          </label>

          <label class="flex items-center gap-2">
            <Checkbox checked />
            <span>Checked</span>
          </label>

          <label class="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Checkbox disabled />
            <span>Disabled unchecked</span>
          </label>

          <label class="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Checkbox checked disabled />
            <span>Disabled checked</span>
          </label>

          <label class="flex items-center gap-2">
            <Checkbox indeterminate />
            <span>Indeterminate state</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Checkbox /> // Unchecked
<Checkbox checked /> // Checked
<Checkbox disabled /> // Disabled
<Checkbox indeterminate /> // Indeterminate`}
        />
      </DemoSection>

      <DemoSection title="Checkbox Group" description="Multiple related checkboxes">
        <div class="space-y-4">
          <Label>Select your interests:</Label>
          <Stack direction="column" spacing="md" class="pl-2">
            <label class="flex items-center gap-2">
              <Checkbox id="tech" checked />
              <span>Technology</span>
            </label>
            <label class="flex items-center gap-2">
              <Checkbox id="design" checked />
              <span>Design</span>
            </label>
            <label class="flex items-center gap-2">
              <Checkbox id="business" />
              <span>Business</span>
            </label>
            <label class="flex items-center gap-2">
              <Checkbox id="marketing" />
              <span>Marketing</span>
            </label>
            <label class="flex items-center gap-2">
              <Checkbox id="other" />
              <span>Other</span>
            </label>
          </Stack>
        </div>
        <CodeBlock
          code={`<Label>Select your interests:</Label>
<Stack direction="column" spacing="md">
  <label class="flex items-center gap-2">
    <Checkbox id="tech" />
    <span>Technology</span>
  </label>
  <label class="flex items-center gap-2">
    <Checkbox id="design" />
    <span>Design</span>
  </label>
</Stack>`}
        />
      </DemoSection>

      <DemoSection title="With Descriptions" description="Add helper text to checkboxes">
        <Stack direction="column" spacing="lg">
          <label class="flex items-start gap-3">
            <Checkbox id="email-notif" checked class="mt-1" />
            <div>
              <div class="font-medium">Email notifications</div>
              <div class="text-sm text-gray-500">
                Receive email updates about your account activity
              </div>
            </div>
          </label>

          <label class="flex items-start gap-3">
            <Checkbox id="push-notif" class="mt-1" />
            <div>
              <div class="font-medium">Push notifications</div>
              <div class="text-sm text-gray-500">Get push notifications on your devices</div>
            </div>
          </label>

          <label class="flex items-start gap-3">
            <Checkbox id="sms-notif" class="mt-1" />
            <div>
              <div class="font-medium">SMS notifications</div>
              <div class="text-sm text-gray-500">Receive text messages for important updates</div>
            </div>
          </label>
        </Stack>
        <CodeBlock
          code={`<label class="flex items-start gap-3">
  <Checkbox class="mt-1" />
  <div>
    <div class="font-medium">Title</div>
    <div class="text-sm text-gray-500">
      Description text
    </div>
  </div>
</label>`}
        />
      </DemoSection>

      <DemoSection title="Agreement Checkbox" description="Common use case for terms acceptance">
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <label class="flex items-start gap-3">
              <Checkbox id="agree" required class="mt-1" />
              <div class="text-sm">
                <span>I agree to the </span>
                <a href="#" class="text-blue-600 hover:underline">
                  Terms of Service
                </a>
                <span> and </span>
                <a href="#" class="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </div>
            </label>
          </div>

          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <label class="flex items-start gap-3">
              <Checkbox id="marketing" class="mt-1" />
              <div class="text-sm">
                <div class="font-medium mb-1">Marketing communications</div>
                <div class="text-gray-600 dark:text-gray-400">
                  I would like to receive marketing emails about products, features, and special
                  offers. You can unsubscribe at any time.
                </div>
              </div>
            </label>
          </div>
        </div>
        <CodeBlock
          code={`<label class="flex items-start gap-3">
  <Checkbox required />
  <div class="text-sm">
    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
  </div>
</label>`}
        />
      </DemoSection>
    </div>
  );
};
