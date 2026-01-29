/**
 * RadioGroup Component Demo
 */

import { Radio } from '../../components/atoms/radio';
import { RadioGroup } from '../../components/molecules/radio-group';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const RadioGroupDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Radio Group</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Group of radio buttons for selecting a single option from multiple choices.
        </p>
      </div>

      <DemoSection title="Basic Radio Group" description="Simple radio button group">
        <RadioGroup label="Select your preferred option">
          <label class="flex items-center gap-2">
            <Radio name="basic-group" value="option1" />
            <span>Option 1</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="basic-group" value="option2" />
            <span>Option 2</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="basic-group" value="option3" />
            <span>Option 3</span>
          </label>
        </RadioGroup>
        <CodeBlock
          code={`<RadioGroup label="Select your option">
  <label>
    <Radio name="group" value="option1" />
    <span>Option 1</span>
  </label>
  <label>
    <Radio name="group" value="option2" />
    <span>Option 2</span>
  </label>
</RadioGroup>`}
        />
      </DemoSection>

      <DemoSection title="With Description" description="Radio group with descriptive text">
        <RadioGroup label="Choose a plan" description="Select the plan that best fits your needs">
          <label class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Radio name="plan-group" value="free" checked />
            <div>
              <div class="font-medium">Free Plan</div>
              <div class="text-sm text-gray-500">Basic features, perfect for getting started</div>
            </div>
          </label>
          <label class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Radio name="plan-group" value="pro" />
            <div>
              <div class="font-medium">Pro Plan</div>
              <div class="text-sm text-gray-500">Advanced features for professionals</div>
            </div>
          </label>
          <label class="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Radio name="plan-group" value="enterprise" />
            <div>
              <div class="font-medium">Enterprise Plan</div>
              <div class="text-sm text-gray-500">Full features with priority support</div>
            </div>
          </label>
        </RadioGroup>
        <CodeBlock
          code={`<RadioGroup
  label="Choose a plan"
  description="Select the plan that fits your needs"
>
  <label class="p-3 border rounded-lg">
    <Radio name="plan" value="free" />
    <div>
      <div class="font-medium">Free Plan</div>
      <div class="text-sm">Basic features</div>
    </div>
  </label>
</RadioGroup>`}
        />
      </DemoSection>

      <DemoSection title="Horizontal Layout" description="Radio buttons arranged horizontally">
        <RadioGroup label="Select size" direction="horizontal">
          <label class="flex items-center gap-2">
            <Radio name="size-group" value="small" />
            <span>Small</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="size-group" value="medium" checked />
            <span>Medium</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="size-group" value="large" />
            <span>Large</span>
          </label>
        </RadioGroup>
        <CodeBlock
          code={`<RadioGroup label="Select size" direction="horizontal">
  <label><Radio name="size" value="small" /> Small</label>
  <label><Radio name="size" value="medium" /> Medium</label>
  <label><Radio name="size" value="large" /> Large</label>
</RadioGroup>`}
        />
      </DemoSection>

      <DemoSection title="Required Field" description="Radio group with required validation">
        <RadioGroup label="Preferred contact method" required>
          <label class="flex items-center gap-2">
            <Radio name="contact-group" value="email" />
            <span>Email</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="contact-group" value="phone" />
            <span>Phone</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="contact-group" value="sms" />
            <span>SMS</span>
          </label>
        </RadioGroup>
        <CodeBlock
          code={`<RadioGroup label="Contact method" required>
  <label><Radio name="contact" value="email" /> Email</label>
  <label><Radio name="contact" value="phone" /> Phone</label>
</RadioGroup>`}
        />
      </DemoSection>

      <DemoSection title="Disabled State" description="Disabled radio group">
        <RadioGroup label="Unavailable options" disabled>
          <label class="flex items-center gap-2">
            <Radio name="disabled-group" value="option1" disabled />
            <span>Option 1 (disabled)</span>
          </label>
          <label class="flex items-center gap-2">
            <Radio name="disabled-group" value="option2" disabled />
            <span>Option 2 (disabled)</span>
          </label>
        </RadioGroup>
        <CodeBlock
          code={`<RadioGroup label="Unavailable options" disabled>
  <label><Radio name="group" disabled /> Option 1</label>
  <label><Radio name="group" disabled /> Option 2</label>
</RadioGroup>`}
        />
      </DemoSection>
    </div>
  );
};
