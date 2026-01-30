/**
 * Pulsar UI Showcase - Component Showcase Container
 * Updated to use only Playground-based demos
 */

import type { IComponentShowcaseProps } from '../types';

// Import playground demos only
import { InputPlaygroundDemo } from '../showcase-demos/atoms/input-playground-demo';
import { TogglePlaygroundDemo } from '../showcase-demos/atoms/toggle-playground-demo';
import { ButtonPlaygroundDemo } from '../showcase-demos/molecules/button-playground-demo';

const DEMO_COMPONENTS = {
  // Playground-enabled components
  button: ButtonPlaygroundDemo,
  input: InputPlaygroundDemo,
  toggle: TogglePlaygroundDemo,
};

export const ComponentShowcase = ({
  category,
  component,
}: IComponentShowcaseProps): HTMLElement => {
  const DemoComponent = DEMO_COMPONENTS[component as keyof typeof DEMO_COMPONENTS];

  if (!DemoComponent) {
    return (
      <div
        className="text-center animate-fade-in"
        style={{ padding: 'var(--spacing-3xl) var(--spacing-md)' }}
      >
        <div
          className="inline-flex items-center justify-center mb-md"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-neutral-100)',
          }}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="var(--color-neutral-400)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        <h2
          className="text-2xl font-bold text-text mb-sm"
          style={{ marginBottom: 'var(--spacing-sm)' }}
        >
          Component Demo Coming Soon
        </h2>

        <p className="text-text-muted">
          The demo for <strong className="text-primary-100">{component}</strong> is currently being
          developed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="space-y-8 animate-fade-in"
      style={{
        animationDelay: '50ms',
        animationFillMode: 'both',
      }}
    >
      <DemoComponent />
    </div>
  );
};
