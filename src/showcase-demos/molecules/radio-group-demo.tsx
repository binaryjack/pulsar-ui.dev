/**
 * RadioGroup Component Demo
 * Demonstrates the RadioGroup molecule component from Pulsar UI
 */

import { DemoSection } from '../../showcase-components/demo-section';
import { Typography } from '../../components/atoms/typography';

export const RadioGroupDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <Typography tag="h1" variant="h1">
          RadioGroup
        </Typography>
        <p className="text-gray-600 dark:text-gray-400">
          Group of radio buttons for selecting a single option from multiple choices.
        </p>
        <p className="text-amber-600 dark:text-amber-400 mt-4">
          ⚠️ RadioGroup component requires options array prop, not children. Demo being refactored to match correct API.
        </p>
      </div>
    </div>
  );
};