/**
 * Accordion Component Demo
 */

import { Accordion, AccordionItem } from '../../components/molecules/accordion';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const AccordionDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Accordion</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Collapsible content panels with keyboard navigation and multiple modes.
        </p>
      </div>

      <DemoSection title="Single Panel Mode" description="Only one panel can be open at a time">
        <Accordion defaultIndex={0} allowToggle>
          <AccordionItem title="What is Pulsar UI?">
            <p>
              Pulsar UI is a modern, declarative component library built with JSX and design tokens.
              It provides a comprehensive set of UI components for building web applications.
            </p>
          </AccordionItem>
          <AccordionItem title="How do I get started?">
            <p>
              Install Pulsar UI via npm and import the components you need. Check out our
              documentation for detailed guides and examples.
            </p>
          </AccordionItem>
          <AccordionItem title="Is it customizable?">
            <p>
              Yes! All components use design tokens and support dark mode out of the box. You can
              customize colors, spacing, and more through our theming system.
            </p>
          </AccordionItem>
        </Accordion>
        <CodeBlock
          code={`<Accordion defaultIndex={0} allowToggle>
  <AccordionItem title="Panel 1">
    Content goes here
  </AccordionItem>
  <AccordionItem title="Panel 2">
    More content
  </AccordionItem>
</Accordion>`}
        />
      </DemoSection>

      <DemoSection
        title="Multiple Panels"
        description="Allow multiple panels to be open simultaneously"
      >
        <Accordion allowMultiple defaultIndex={[0, 1]}>
          <AccordionItem title="Features">
            <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Declarative JSX syntax</li>
              <li>Design tokens integration</li>
              <li>Dark mode support</li>
              <li>Full keyboard accessibility</li>
              <li>TypeScript support</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Components">
            <p class="text-gray-700 dark:text-gray-300">
              We provide 23+ production-ready components including buttons, modals, tooltips,
              tables, and more.
            </p>
          </AccordionItem>
          <AccordionItem title="Documentation">
            <p class="text-gray-700 dark:text-gray-300">
              Comprehensive docs with live examples and code snippets for every component.
            </p>
          </AccordionItem>
        </Accordion>
        <CodeBlock
          code={`<Accordion allowMultiple defaultIndex={[0, 1]}>
  <AccordionItem title="Panel 1">Content 1</AccordionItem>
  <AccordionItem title="Panel 2">Content 2</AccordionItem>
  <AccordionItem title="Panel 3">Content 3</AccordionItem>
</Accordion>`}
        />
      </DemoSection>

      <DemoSection title="Disabled Items" description="Disable specific accordion items">
        <Accordion defaultIndex={0}>
          <AccordionItem title="Active Panel">
            <p>This panel is active and can be toggled.</p>
          </AccordionItem>
          <AccordionItem title="Disabled Panel" disabled>
            <p>This panel is disabled and cannot be opened.</p>
          </AccordionItem>
          <AccordionItem title="Another Active Panel">
            <p>This panel is also active.</p>
          </AccordionItem>
        </Accordion>
        <CodeBlock
          code={`<AccordionItem title="Disabled" disabled>
  Content
</AccordionItem>`}
        />
      </DemoSection>
    </div>
  );
};
