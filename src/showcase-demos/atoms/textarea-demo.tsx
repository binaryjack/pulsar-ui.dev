/**
 * Textarea Component Demo
 */

import { Textarea } from '../../components/atoms/textarea';
import { Stack } from '../../components/atoms/stack';
import { Label } from '../../components/molecules/label';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const TextareaDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Textarea</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Multi-line text input for longer content like comments, descriptions, and messages.
        </p>
      </div>

      <DemoSection title="Basic Textarea" description="Simple multi-line text input">
        <div class="space-y-2">
          <Label for="basic-textarea">Description</Label>
          <Textarea id="basic-textarea" placeholder="Enter your description here..." rows={4} />
        </div>
        <CodeBlock
          code={`<Textarea
  placeholder="Enter description..."
  rows={4}
/>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Different row heights">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Small (3 rows)</Label>
            <Textarea placeholder="Small textarea" rows={3} />
          </div>

          <div class="space-y-2">
            <Label>Medium (6 rows)</Label>
            <Textarea placeholder="Medium textarea" rows={6} />
          </div>

          <div class="space-y-2">
            <Label>Large (10 rows)</Label>
            <Textarea placeholder="Large textarea" rows={10} />
          </div>
        </Stack>
        <CodeBlock
          code={`<Textarea rows={3} /> // Small
<Textarea rows={6} /> // Medium
<Textarea rows={10} /> // Large`}
        />
      </DemoSection>

      <DemoSection title="States" description="Textarea states for different scenarios">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Default State</Label>
            <Textarea placeholder="Enter text..." rows={4} />
          </div>

          <div class="space-y-2">
            <Label>Disabled State</Label>
            <Textarea placeholder="Disabled textarea" rows={4} disabled />
          </div>

          <div class="space-y-2">
            <Label>Readonly State</Label>
            <Textarea value="This is read-only content that cannot be edited." rows={4} readonly />
          </div>

          <div class="space-y-2">
            <Label>Error State</Label>
            <Textarea
              placeholder="Invalid content"
              rows={4}
              class="border-red-500 focus:ring-red-500"
            />
            <p class="text-sm text-red-600">Message must be at least 10 characters</p>
          </div>

          <div class="space-y-2">
            <Label>With Max Length</Label>
            <Textarea placeholder="Max 200 characters" maxlength={200} rows={4} />
            <p class="text-sm text-gray-500">Maximum 200 characters</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Textarea placeholder="Normal" />
<Textarea disabled />
<Textarea readonly />
<Textarea class="border-red-500" /> // Error
<Textarea maxlength={200} />`}
        />
      </DemoSection>

      <DemoSection title="With Character Counter" description="Show remaining characters">
        <div class="space-y-2">
          <Label>Comment (Max 500 characters)</Label>
          <Textarea placeholder="Write your comment..." rows={6} maxlength={500} />
          <div class="flex justify-between text-sm text-gray-500">
            <span>Be respectful and constructive</span>
            <span>0 / 500</span>
          </div>
        </div>
        <CodeBlock
          code={`<Textarea maxlength={500} />
<div class="text-sm text-gray-500">
  <span>{count} / 500</span>
</div>`}
        />
      </DemoSection>

      <DemoSection title="Form Examples" description="Common use cases">
        <Stack direction="column" spacing="xl">
          <div class="space-y-2">
            <Label required>Feedback</Label>
            <Textarea placeholder="Please share your feedback with us..." rows={5} required />
            <p class="text-sm text-gray-500">Your feedback helps us improve</p>
          </div>

          <div class="space-y-2">
            <Label>Additional Notes</Label>
            <Textarea placeholder="Any additional information (optional)" rows={4} />
          </div>

          <div class="space-y-2">
            <Label required>Bio</Label>
            <Textarea placeholder="Tell us about yourself..." rows={6} maxlength={300} required />
            <p class="text-sm text-gray-500">Max 300 characters</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Label required>Feedback</Label>
<Textarea
  placeholder="Share your thoughts..."
  rows={5}
  required
/>
<p class="text-sm text-gray-500">Helper text</p>`}
        />
      </DemoSection>

      <DemoSection title="Resize Options" description="Control resize behavior with CSS">
        <Stack direction="column" spacing="lg">
          <div class="space-y-2">
            <Label>Resize Both (Default)</Label>
            <Textarea placeholder="Resize both directions" rows={4} />
          </div>

          <div class="space-y-2">
            <Label>Resize Vertical Only</Label>
            <Textarea placeholder="Resize vertically" rows={4} class="resize-y" />
          </div>

          <div class="space-y-2">
            <Label>No Resize</Label>
            <Textarea placeholder="Cannot resize" rows={4} class="resize-none" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Textarea /> // resize both (default)
<Textarea class="resize-y" /> // vertical only
<Textarea class="resize-none" /> // no resize`}
        />
      </DemoSection>
    </div>
  );
};
