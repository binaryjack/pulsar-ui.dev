/**
 * Input Component Demo
 */

import { Input } from '../../../components/atoms/input';
import { Stack } from '../../../components/atoms/stack';
import { Label } from '../../../components/molecules/label';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const InputDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Input</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Text input field with various types, sizes, and states.
        </p>
      </div>

      <DemoSection title="Input Types" description="Different input types for various data">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label for="text-input">Text Input</Label>
            <Input id="text-input" type="text" placeholder="Enter text..." />
          </div>

          <div class="space-y-2">
            <Label for="email-input">Email Input</Label>
            <Input id="email-input" type="email" placeholder="email@example.com" />
          </div>

          <div class="space-y-2">
            <Label for="password-input">Password Input</Label>
            <Input id="password-input" type="password" placeholder="Enter password..." />
          </div>

          <div class="space-y-2">
            <Label for="number-input">Number Input</Label>
            <Input id="number-input" type="number" placeholder="0" />
          </div>

          <div class="space-y-2">
            <Label for="date-input">Date Input</Label>
            <Input id="date-input" type="date" />
          </div>

          <div class="space-y-2">
            <Label for="search-input">Search Input</Label>
            <Input id="search-input" type="search" placeholder="Search..." />
          </div>
        </Stack>
        <CodeBlock
          code={`<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="0" />
<Input type="date" />
<Input type="search" placeholder="Search..." />`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Three size variants">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Small Input</Label>
            <Input size="sm" placeholder="Small input" />
          </div>

          <div class="space-y-2">
            <Label>Medium Input (Default)</Label>
            <Input size="md" placeholder="Medium input" />
          </div>

          <div class="space-y-2">
            <Label>Large Input</Label>
            <Input size="lg" placeholder="Large input" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
        />
      </DemoSection>

      <DemoSection title="States" description="Input states for validation and feedback">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Default State</Label>
            <Input placeholder="Normal input" />
          </div>

          <div class="space-y-2">
            <Label>Disabled State</Label>
            <Input placeholder="Disabled input" disabled />
          </div>

          <div class="space-y-2">
            <Label>Readonly State</Label>
            <Input value="Read-only value" readonly />
          </div>

          <div class="space-y-2">
            <Label>Error State</Label>
            <Input placeholder="Invalid input" class="border-red-500 focus:ring-red-500" />
            <p class="text-sm text-red-600">This field is required</p>
          </div>

          <div class="space-y-2">
            <Label>Success State</Label>
            <Input value="Valid input" class="border-green-500 focus:ring-green-500" />
            <p class="text-sm text-green-600">Looks good!</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Input placeholder="Normal" />
<Input placeholder="Disabled" disabled />
<Input value="Read-only" readonly />
<Input class="border-red-500" /> // Error
<Input class="border-green-500" /> // Success`}
        />
      </DemoSection>

      <DemoSection title="With Icons" description="Add icons inside inputs">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Search with Icon</Label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Input class="pl-10" placeholder="Search..." />
            </div>
          </div>

          <div class="space-y-2">
            <Label>Email with Icon</Label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Input class="pl-10" type="email" placeholder="email@example.com" />
            </div>
          </div>

          <div class="space-y-2">
            <Label>With Button</Label>
            <div class="flex gap-2">
              <Input placeholder="Enter code..." class="flex-1" />
              <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Verify
              </button>
            </div>
          </div>
        </Stack>
        <CodeBlock
          code={`<div class="relative">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
    <SearchIcon />
  </div>
  <Input class="pl-10" placeholder="Search..." />
</div>`}
        />
      </DemoSection>

      <DemoSection title="Required Fields" description="Mark required fields with asterisk">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label required>Full Name</Label>
            <Input placeholder="John Doe" required />
          </div>

          <div class="space-y-2">
            <Label required>Email Address</Label>
            <Input type="email" placeholder="email@example.com" required />
          </div>

          <div class="space-y-2">
            <Label>Optional Field</Label>
            <Input placeholder="Optional..." />
          </div>
        </Stack>
        <CodeBlock
          code={`<Label required>Full Name</Label>
<Input placeholder="John Doe" required />`}
        />
      </DemoSection>
    </div>
  );
};
