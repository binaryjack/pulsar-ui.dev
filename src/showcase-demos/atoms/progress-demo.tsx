/**
 * Progress Component Demo
 */

import { Progress } from '../../components/atoms/progress';
import { Stack } from '../../components/atoms/stack';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const ProgressDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Progress</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Progress indicator with variants, sizes, and indeterminate mode.
        </p>
      </div>

      <DemoSection title="Variants" description="Different color variants for status indication">
        <Stack direction="column" spacing="lg">
          <Progress value={75} variant="primary" showLabel />
          <Progress value={100} variant="success" showLabel />
          <Progress value={50} variant="warning" showLabel />
          <Progress value={25} variant="error" showLabel />
        </Stack>
        <CodeBlock
          code={`<Progress value={75} variant="primary" showLabel />
<Progress value={100} variant="success" showLabel />
<Progress value={50} variant="warning" showLabel />
<Progress value={25} variant="error" showLabel />`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Three different sizes">
        <Stack direction="column" spacing="lg">
          <Progress value={60} size="sm" />
          <Progress value={60} size="md" />
          <Progress value={60} size="lg" />
        </Stack>
        <CodeBlock
          code={`<Progress value={60} size="sm" />
<Progress value={60} size="md" />
<Progress value={60} size="lg" />`}
        />
      </DemoSection>

      <DemoSection title="Indeterminate" description="Loading state without specific progress">
        <Progress indeterminate variant="primary" />
        <CodeBlock code={`<Progress indeterminate variant="primary" />`} />
      </DemoSection>

      <DemoSection title="With Label" description="Show percentage label">
        <Progress value={65} variant="success" showLabel />
        <CodeBlock code={`<Progress value={65} showLabel />`} />
      </DemoSection>
    </div>
  );
};
