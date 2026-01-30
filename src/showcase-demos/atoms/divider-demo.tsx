/**
 * Divider Component Demo
 */

import { Divider } from '../../components/atoms/divider';
import { Stack } from '../../components/atoms/stack';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const DividerDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Divider</h1>
        <p className="text-gray-600 dark:text-gray-400">Visual separator for content sections.</p>
      </div>

      <DemoSection title="Horizontal Divider" description="Default horizontal line divider">
        <div className="space-y-4">
          <p className="text-gray-600">Content above divider</p>
          <Divider />
          <p className="text-gray-600">Content below divider</p>
        </div>
        <CodeBlock
          code={`<p>Content above</p>
<Divider />
<p>Content below</p>`}
        />
      </DemoSection>

      <DemoSection title="Vertical Divider" description="Vertical line divider for inline content">
        <div className="flex items-center gap-4">
          <span>Item 1</span>
          <Divider orientation="vertical" className="h-6" />
          <span>Item 2</span>
          <Divider orientation="vertical" className="h-6" />
          <span>Item 3</span>
        </div>
        <CodeBlock
          code={`<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Item 2</span>
</div>`}
        />
      </DemoSection>

      <DemoSection title="With Label" description="Divider with centered text">
        <div className="space-y-4">
          <p className="text-gray-600">Section 1 content</p>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <p className="text-gray-600">Section 2 content</p>
        </div>
        <CodeBlock code={`<Divider label="OR" />`} />
      </DemoSection>

      <DemoSection title="Different Styles" description="Solid, dashed, and dotted dividers">
        <Stack direction="vertical" spacing="lg">
          <div>
            <p className="text-sm text-gray-500 mb-2">Solid (default)</p>
            <Divider />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Dashed</p>
            <Divider className="border-dashed" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Dotted</p>
            <Divider className="border-dotted" />
          </div>
        </Stack>
        <CodeBlock
          code={`<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />`}
        />
      </DemoSection>
    </div>
  );
};
