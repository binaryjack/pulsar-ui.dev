/**
 * Radio Component Demo
 */

import { Radio } from '../../components/atoms/radio';
import { RadioGroup } from '../../components/molecules/radio-group';
import { Stack } from '../../components/atoms/stack';
import { Label } from '../../components/molecules/label';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const RadioDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Radio</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Radio button for single selection from a group of options.
        </p>
      </div>

      <DemoSection title="Basic Radio" description="Simple radio buttons with labels">
        <Stack direction="vertical" spacing="md">
          <label className="flex items-center gap-2 cursor-pointer">
            <Radio name="basic" value="option1" checked />
            <span>Option 1</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <Radio name="basic" value="option2" />
            <span>Option 2</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <Radio name="basic" value="option3" />
            <span>Option 3</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<label className="flex items-center gap-2">
  <Radio name="group" value="1" checked />
  <span>Option 1</span>
</label>

<label className="flex items-center gap-2">
  <Radio name="group" value="2" />
  <span>Option 2</span>
</label>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Different radio button sizes">
        <Stack direction="vertical" spacing="lg">
          <label className="flex items-center gap-2">
            <Radio name="size" size="sm" value="small" />
            <span className="text-sm">Small radio button</span>
          </label>

          <label className="flex items-center gap-2">
            <Radio name="size" size="md" value="medium" checked />
            <span>Medium radio button (default)</span>
          </label>

          <label className="flex items-center gap-2">
            <Radio name="size" size="lg" value="large" />
            <span className="text-lg">Large radio button</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Radio size="sm" />
<Radio size="md" />
<Radio size="lg" />`}
        />
      </DemoSection>

      <DemoSection title="States" description="Radio button states">
        <Stack direction="vertical" spacing="md">
          <label className="flex items-center gap-2">
            <Radio name="state1" value="unchecked" />
            <span>Unchecked</span>
          </label>

          <label className="flex items-center gap-2">
            <Radio name="state2" value="checked" checked />
            <span>Checked</span>
          </label>

          <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Radio name="state3" value="disabled" disabled />
            <span>Disabled unchecked</span>
          </label>

          <label className="flex items-center gap-2 opacity-50 cursor-not-allowed">
            <Radio name="state4" value="disabled-checked" checked disabled />
            <span>Disabled checked</span>
          </label>
        </Stack>
        <CodeBlock
          code={`<Radio /> // Unchecked
<Radio checked /> // Checked
<Radio disabled /> // Disabled
<Radio checked disabled /> // Disabled checked`}
        />
      </DemoSection>

      <DemoSection title="RadioGroup Component" description="Group radio buttons together">
        <RadioGroup
          name="plan"
          label="Choose a plan"
          options={[
            { value: 'free', label: 'Free', description: 'Basic features for individuals' },
            { value: 'pro', label: 'Pro', description: 'Advanced features for professionals' },
            { value: 'team', label: 'Team', description: 'Collaboration tools for teams' },
          ]}
          defaultValue="pro"
        />
        <CodeBlock
          code={`<RadioGroup
  name="plan"
  label="Choose a plan"
  options={[
    { value: 'free', label: 'Free', description: 'Basic' },
    { value: 'pro', label: 'Pro', description: 'Advanced' },
  ]}
  defaultValue="pro"
/>`}
        />
      </DemoSection>

      <DemoSection title="With Descriptions" description="Add helper text to radio options">
        <div className="space-y-4">
          <Label text="Payment method:" />
          <Stack direction="vertical" spacing="lg" className="pl-2">
            <label className="flex items-start gap-3">
              <Radio name="payment" value="card" checked className="mt-1" />
              <div>
                <div className="font-medium">Credit or debit card</div>
                <div className="text-sm text-gray-500">
                  Pay with Visa, Mastercard, or American Express
                </div>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <Radio name="payment" value="paypal" className="mt-1" />
              <div>
                <div className="font-medium">PayPal</div>
                <div className="text-sm text-gray-500">Secure payment through your PayPal account</div>
              </div>
            </label>

            <label className="flex items-start gap-3">
              <Radio name="payment" value="bank" className="mt-1" />
              <div>
                <div className="font-medium">Bank transfer</div>
                <div className="text-sm text-gray-500">Direct transfer from your bank account</div>
              </div>
            </label>
          </Stack>
        </div>
        <CodeBlock
          code={`<label className="flex items-start gap-3">
  <Radio name="payment" value="card" className="mt-1" />
  <div>
    <div className="font-medium">Title</div>
    <div className="text-sm text-gray-500">Description</div>
  </div>
</label>`}
        />
      </DemoSection>

      <DemoSection title="Card-Style Options" description="Radio buttons styled as cards">
        <div className="space-y-4">
          <Label text="Select your subscription:" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="relative cursor-pointer">
              <input type="radio" name="subscription" value="basic" className="peer sr-only" />
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 transition-all">
                <div className="font-semibold text-lg mb-2">Basic</div>
                <div className="text-3xl font-bold mb-2">
                  $9<span className="text-sm font-normal text-gray-500">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>✓ 10 projects</li>
                  <li>✓ 5 GB storage</li>
                  <li>✓ Email support</li>
                </ul>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input type="radio" name="subscription" value="pro" checked className="peer sr-only" />
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-lg">Pro</div>
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">Popular</span>
                </div>
                <div className="text-3xl font-bold mb-2">
                  $29<span className="text-sm font-normal text-gray-500">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>✓ Unlimited projects</li>
                  <li>✓ 100 GB storage</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input type="radio" name="subscription" value="enterprise" className="peer sr-only" />
              <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 transition-all">
                <div className="font-semibold text-lg mb-2">Enterprise</div>
                <div className="text-3xl font-bold mb-2">
                  $99<span className="text-sm font-normal text-gray-500">/mo</span>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>✓ Everything in Pro</li>
                  <li>✓ Unlimited storage</li>
                  <li>✓ 24/7 phone support</li>
                </ul>
              </div>
            </label>
          </div>
        </div>
        <CodeBlock
          code={`<label className="cursor-pointer">
  <input type="radio" name="plan" className="peer sr-only" />
  <div className="p-6 border-2 peer-checked:border-blue-600 peer-checked:bg-blue-50">
    <div className="font-semibold">Plan Name</div>
    <div className="text-3xl font-bold">$29/mo</div>
  </div>
</label>`}
        />
      </DemoSection>

      <DemoSection title="Horizontal Layout" description="Radio buttons in a row">
        <div className="space-y-4">
          <Label text="How did you hear about us?" />
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <Radio name="source" value="google" />
              <span>Google</span>
            </label>
            <label className="flex items-center gap-2">
              <Radio name="source" value="social" checked />
              <span>Social Media</span>
            </label>
            <label className="flex items-center gap-2">
              <Radio name="source" value="friend" />
              <span>Friend</span>
            </label>
            <label className="flex items-center gap-2">
              <Radio name="source" value="other" />
              <span>Other</span>
            </label>
          </div>
        </div>
        <CodeBlock
          code={`<div className="flex flex-wrap gap-4">
  <label className="flex items-center gap-2">
    <Radio name="source" value="1" />
    <span>Option 1</span>
  </label>
  <label className="flex items-center gap-2">
    <Radio name="source" value="2" />
    <span>Option 2</span>
  </label>
</div>`}
        />
      </DemoSection>
    </div>
  );
};
