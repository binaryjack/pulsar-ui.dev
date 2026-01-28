/**
 * Slider Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Slider } from '../../components/atoms/slider';
import { Stack } from '../../components/atoms/stack';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const SliderDemo = (): HTMLElement => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(25);
  const [value3, setValue3] = useState(75);

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Slider</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Range input control with visual track, thumb, and value display.
        </p>
      </div>

      <DemoSection title="Basic Slider" description="Simple slider with value display">
        <div class="space-y-6">
          <Slider value={value1} onChange={setValue1} showValue />
          <p class="text-sm text-gray-600 dark:text-gray-400">Value: {value1}</p>
        </div>
        <CodeBlock
          code={`const [value, setValue] = useState(50)

<Slider
  value={value}
  onChange={setValue}
  showValue
/>`}
        />
      </DemoSection>

      <DemoSection title="Variants" description="Different color variants">
        <Stack direction="column" spacing="xl">
          <Slider value={value2} onChange={setValue2} variant="primary" showValue />
          <Slider value={value2} onChange={setValue2} variant="success" showValue />
          <Slider value={value2} onChange={setValue2} variant="warning" showValue />
          <Slider value={value2} onChange={setValue2} variant="error" showValue />
        </Stack>
        <CodeBlock
          code={`<Slider variant="primary" />
<Slider variant="success" />
<Slider variant="warning" />
<Slider variant="error" />`}
        />
      </DemoSection>

      <DemoSection title="Custom Range" description="Set min, max, and step values">
        <div class="space-y-6">
          <Slider
            value={value3}
            onChange={setValue3}
            min={0}
            max={100}
            step={5}
            showValue
            variant="success"
          />
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Range: 0-100, Step: 5, Value: {value3}
          </p>
        </div>
        <CodeBlock
          code={`<Slider
  min={0}
  max={100}
  step={5}
  value={75}
  onChange={(val) => console.log(val)}
/>`}
        />
      </DemoSection>

      <DemoSection title="Disabled State">
        <Slider value={50} disabled showValue />
        <CodeBlock code={`<Slider value={50} disabled />`} />
      </DemoSection>
    </div>
  );
};
