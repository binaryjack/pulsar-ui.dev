/**
 * Card Component Demo
 */

import { Badge } from '../../components/molecules/badge';
import { Button } from '../../components/molecules/button';
import { Card } from '../../components/organisms/card';
import { ComponentConfigBuilder } from '../../components/utils/component-config-builder/component-config-builder';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const CardDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Card</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Versatile container component with header, body, and footer sections.
        </p>
      </div>

      <DemoSection title="Basic Card" description="Simple card with content">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
          <p className="text-gray-600">
            This is a basic card component with some content inside. Cards are great for organizing
            related information.
          </p>
        </Card>
        <CodeBlock
          code={`<Card>
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p>Card content goes here...</p>
</Card>`}
        />
      </DemoSection>

      <DemoSection title="Card with Header" description="Card with header section">
        <Card
          header={
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Card with Header</h3>
              <Badge config={new ComponentConfigBuilder('primary').build()} label="New" />
            </div>
          }
        >
          <p className="text-gray-600">
            This card has a dedicated header section that's visually separated from the body
            content. Perfect for titles and actions.
          </p>
        </Card>
        <CodeBlock
          code={`<Card
  header={
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold">Header</h3>
      <Badge label="New" />
    </div>
  }
>
  <p>Card content...</p>
</Card>`}
        />
      </DemoSection>

      <DemoSection title="Card with Footer" description="Card with footer section">
        <Card
          footer={
            <div className="flex justify-end gap-2">
              <Button
                config={new ComponentConfigBuilder('secondary')
                  .variant('outline')
                  .size('sm')
                  .build()}
              >
                Cancel
              </Button>
              <Button config={new ComponentConfigBuilder('primary').size('sm').build()}>
                Save
              </Button>
            </div>
          }
        >
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <p className="text-gray-600 mb-4">Update your preferences and settings here.</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked />
              <span>Enable notifications</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span>Auto-save changes</span>
            </label>
          </div>
        </Card>
        <CodeBlock
          code={`<Card
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  }
>
  <p>Card content...</p>
</Card>`}
        />
      </DemoSection>

      <DemoSection title="Complete Card" description="Card with header, body, and footer">
        <Card
          header={
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Product Details</h3>
                <p className="text-sm text-gray-500">Premium subscription plan</p>
              </div>
              <Badge config={new ComponentConfigBuilder('success').build()} label="Active" dot />
            </div>
          }
          footer={
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Last updated: Jan 29, 2026</span>
              <div className="flex gap-2">
                <Button
                  config={new ComponentConfigBuilder('secondary')
                    .variant('ghost')
                    .size('sm')
                    .build()}
                >
                  Details
                </Button>
                <Button config={new ComponentConfigBuilder('primary').size('sm').build()}>
                  Upgrade
                </Button>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                $29.99<span className="text-sm font-normal text-gray-500">/month</span>
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
          </div>
        </Card>
        <CodeBlock
          code={`<Card
  header={<div>...</div>}
  footer={<div>...</div>}
>
  <div className="space-y-4">
    {/* Card content */}
  </div>
</Card>`}
        />
      </DemoSection>

      <DemoSection title="Shadow Variants" description="Different elevation levels">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card config={new ComponentConfigBuilder('primary').shadow('sm').build()}>
            <h4 className="font-semibold mb-2">Small Shadow</h4>
            <p className="text-sm text-gray-600">Subtle elevation</p>
          </Card>
          <Card config={new ComponentConfigBuilder('primary').shadow('md').build()}>
            <h4 className="font-semibold mb-2">Medium Shadow</h4>
            <p className="text-sm text-gray-600">Default elevation</p>
          </Card>
          <Card config={new ComponentConfigBuilder('primary').shadow('lg').build()}>
            <h4 className="font-semibold mb-2">Large Shadow</h4>
            <p className="text-sm text-gray-600">High elevation</p>
          </Card>
        </div>
        <CodeBlock
          code={`<Card config={new ComponentConfigBuilder('primary').shadow('lg').build()}>
  <h4>Large Shadow</h4>
</Card>`}
        />
      </DemoSection>

      <DemoSection title="Rounded Variants" description="Different border radius options">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card config={new ComponentConfigBuilder('primary').rounded('md').build()}>
            <h4 className="font-semibold mb-2">Medium Rounded</h4>
            <p className="text-sm text-gray-600">Slightly rounded corners</p>
          </Card>
          <Card config={new ComponentConfigBuilder('primary').rounded('lg').build()}>
            <h4 className="font-semibold mb-2">Large Rounded</h4>
            <p className="text-sm text-gray-600">More rounded corners</p>
          </Card>
          <Card config={new ComponentConfigBuilder('primary').rounded('xl').build()}>
            <h4 className="font-semibold mb-2">Extra Large</h4>
            <p className="text-sm text-gray-600">Very rounded corners</p>
          </Card>
        </div>
        <CodeBlock
          code={`<Card config={new ComponentConfigBuilder('primary').rounded('xl').build()}>
  <h4>Extra Large Rounded</h4>
</Card>`}
        />
      </DemoSection>
    </div>
  );
};
