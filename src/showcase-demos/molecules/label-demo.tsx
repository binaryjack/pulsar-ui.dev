/**
 * Label Component Demo
 */

import { Input } from '../../components/atoms/input';
import { Stack } from '../../components/atoms/stack';
import { Label } from '../../components/molecules/label';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const LabelDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Label</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Form label component with optional helper text and required indicator.
        </p>
      </div>

      <DemoSection title="Basic Label" description="Simple form labels">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Label text="Username" htmlFor="username" />
            <Input id="username" placeholder="Enter username" />
          </div>
          <div>
            <Label text="Email Address" htmlFor="email" />
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label text="Username" htmlFor="username" />
<Input id="username" placeholder="Enter username" />`}
        />
      </DemoSection>

      <DemoSection title="Required Fields" description="Labels with required indicator">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Label text="Full Name" htmlFor="fullname" required />
            <Input id="fullname" placeholder="John Doe" />
          </div>
          <div>
            <Label text="Password" htmlFor="password" required />
            <Input id="password" type="password" placeholder="Enter password" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label text="Full Name" htmlFor="fullname" required />
<Input id="fullname" placeholder="John Doe" />`}
        />
      </DemoSection>

      <DemoSection title="With Helper Text" description="Labels with descriptive helper text">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Label
              text="Display Name"
              htmlFor="displayname"
              helperText="This is how your name will appear to other users"
            />
            <Input id="displayname" placeholder="Enter display name" />
          </div>
          <div>
            <Label
              text="Bio"
              htmlFor="bio"
              helperText="Write a short description about yourself (optional)"
            />
            <Input id="bio" placeholder="Tell us about yourself" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label
  text="Display Name"
  htmlFor="displayname"
  helperText="This is how your name will appear"
/>
<Input id="displayname" placeholder="Enter display name" />`}
        />
      </DemoSection>

      <DemoSection title="Error State" description="Labels with error messages">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Label
              text="Email"
              htmlFor="error-email"
              required
              errorText="Please enter a valid email address"
            />
            <Input id="error-email" placeholder="email@example.com" className="border-red-500" />
          </div>
          <div>
            <Label
              text="Password"
              htmlFor="error-password"
              required
              errorText="Password must be at least 8 characters"
            />
            <Input id="error-password" type="password" className="border-red-500" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label
  text="Email"
  htmlFor="error-email"
  required
  errorText="Please enter a valid email address"
/>
<Input id="error-email" class="border-red-500" />`}
        />
      </DemoSection>

      <DemoSection title="Disabled State" description="Labels for disabled form fields">
        <Stack direction="vertical" spacing="lg">
          <div>
            <Label text="Disabled Field" htmlFor="disabled-field" disabled />
            <Input id="disabled-field" disabled placeholder="This field is disabled" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label text="Disabled Field" htmlFor="disabled-field" disabled />
<Input id="disabled-field" disabled />`}
        />
      </DemoSection>
    </div>
  );
};
