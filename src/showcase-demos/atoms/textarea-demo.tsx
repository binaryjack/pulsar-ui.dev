/**
 * Textarea Component Demo
 */

import { Stack } from '../../components/atoms/stack';
import { Textarea } from '../../components/atoms/textarea';
import { Label } from '../../components/molecules/label';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const TextareaDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Textarea</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Multi-line text input for longer content like comments, descriptions, and messages.
        </p>
      </div>

      <DemoSection title="Basic Textarea" description="Simple multi-line text input">
        <div className="space-y-2">
          <Label text="Description" htmlFor="basic-textarea" />
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
        <Stack direction="vertical" spacing="lg">
          <div className="space-y-2">
            <Label text="Small (3 rows)" />
            <Textarea placeholder="Small textarea" rows={3} />
          </div>

          <div className="space-y-2">
            <Label text="Medium (6 rows)" />
            <Textarea placeholder="Medium textarea" rows={6} />
          </div>

          <div className="space-y-2">
            <Label text="Large (10 rows)" />
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
        <Stack direction="vertical" spacing="lg">
          <div className="space-y-2">
            <Label text="Default State" />
            <Textarea placeholder="Enter text..." rows={4} />
          </div>

          <div className="space-y-2">
            <Label text="Disabled State" />
            <Textarea placeholder="Disabled textarea" rows={4} disabled />
          </div>

          <div className="space-y-2">
            <Label text="Readonly State" />
            <Textarea value="This is read-only content that cannot be edited." rows={4} readOnly />
          </div>

          <div className="space-y-2">
            <Label text="Error State" />
            <Textarea
              placeholder="Invalid content"
              rows={4}
              className="border-red-500 focus:ring-red-500"
            />
            <p className="text-sm text-red-600">Message must be at least 10 characters</p>
          </div>

          <div className="space-y-2">
            <Label text="With Max Length" />
            <Textarea placeholder="Max 200 characters" maxLength={200} rows={4} />
            <p className="text-sm text-gray-500">Maximum 200 characters</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Textarea placeholder="Normal" />
<Textarea disabled />
<Textarea readOnly />
<Textarea className="border-red-500" /> // Error
<Textarea maxlength={200} />`}
        />
      </DemoSection>

      <DemoSection title="With Character Counter" description="Show remaining characters">
        <div className="space-y-2">
          <Label text="Comment (Max 500 characters)" />
          <Textarea placeholder="Write your comment..." rows={6} maxLength={500} />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Be respectful and constructive</span>
            <span>0 / 500</span>
          </div>
        </div>
        <CodeBlock
          code={`<Textarea maxlength={500} />
<div className="text-sm text-gray-500">
  <span>{count} / 500</span>
</div>`}
        />
      </DemoSection>

      <DemoSection title="Form Examples" description="Common use cases">
        <Stack direction="vertical" spacing="xl">
          <div className="space-y-2">
            <Label text="Feedback" required />
            <Textarea placeholder="Please share your feedback with us..." rows={5} required />
            <p className="text-sm text-gray-500">Your feedback helps us improve</p>
          </div>

          <div className="space-y-2">
            <Label text="Additional Notes" />
            <Textarea placeholder="Any additional information (optional)" rows={4} />
          </div>

          <div className="space-y-2">
            <Label text="Bio" required />
            <Textarea placeholder="Tell us about yourself..." rows={6} maxLength={300} required />
            <p className="text-sm text-gray-500">Max 300 characters</p>
          </div>
        </Stack>
        <CodeBlock
          code={`<Label text="Feedback" required />
<Textarea
  placeholder="Share your thoughts..."
  rows={5}
  required
/>
<p className="text-sm text-gray-500">Helper text</p>`}
        />
      </DemoSection>

      <DemoSection title="Resize Options" description="Control resize behavior with CSS">
        <Stack direction="vertical" spacing="lg">
          <div className="space-y-2">
            <Label text="Resize Both (Default)" />
            <Textarea placeholder="Resize both directions" rows={4} />
          </div>

          <div className="space-y-2">
            <Label text="Resize Vertical Only" />
            <Textarea placeholder="Resize vertically" rows={4} className="resize-y" />
          </div>

          <div className="space-y-2">
            <Label text="No Resize" />
            <Textarea placeholder="Cannot resize" rows={4} className="resize-none" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Textarea /> // resize both (default)
<Textarea className="resize-y" /> // vertical only
<Textarea className="resize-none" /> // no resize`}
        />
      </DemoSection>
    </div>
  );
};
