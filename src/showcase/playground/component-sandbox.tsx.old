/**
 * ComponentSandbox - Core Playground Presenter
 * Renders Story configurations with component, props, context, and event logging
 *
 * This is the heart of the Pulsar Playground system.
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Divider } from '../../components/atoms/divider';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Button } from '../../components/molecules/button';
import { Card } from '../../components/organisms/card';
import { generateCode } from './code-generator';
import { CodeHighlighter } from './code-highlighter';
import { PropEditor } from './prop-editors';
import type { PropValue } from './prop-editors/prop-editor.types';
import type { LoggedEvent, Story } from './story.types';

export interface IComponentSandboxProps {
  /** The story configuration to render */
  story: Story;

  /** Callback when events are captured */
  onEventLog?: (event: LoggedEvent) => void;

  /** Whether to show component info header */
  showHeader?: boolean;

  /** Custom CSS class */
  class?: string;
}

/**
 * ComponentSandbox
 * Generic presenter that renders any component with its story configuration
 * Handles context providers, event logging, and prop injection
 */
export const ComponentSandbox = ({
  story,
  onEventLog,
  showHeader = true,
  class: className,
}: IComponentSandboxProps): HTMLElement => {
  // Use Pulsar's reactive state for props
  const [currentProps, setCurrentProps] = useState<Record<string, PropValue>>({ ...story.props });
  const [showCode, setShowCode] = useState<boolean>(false);

  /**
   * Handle prop value changes from PropEditor
   */
  const handlePropChange = (propName: string, newValue: PropValue): void => {
    const newProps = { ...currentProps(), [propName]: newValue };
    setCurrentProps(newProps);
    // Component will re-render automatically due to reactive state
  };

  /**
   * Wrap component with context providers if specified
   */
  const wrapWithContexts = (component: HTMLElement): HTMLElement => {
    if (!story.context || story.context.length === 0) {
      return component;
    }

    // Wrap component with each context provider (innermost to outermost)
    return story.context.reduceRight((wrapped, context) => {
      return context.provider({ children: wrapped });
    }, component);
  };

  /**
   * Enhance props with event handlers for logging
   */
  const enhancePropsWithEventHandlers = (props: Record<string, any>): Record<string, any> => {
    if (!story.events || story.events.length === 0) {
      return props;
    }

    const enhancedProps = { ...props };

    story.events.forEach((eventConfig) => {
      if (eventConfig.capture !== false) {
        const originalHandler = props[eventConfig.name];

        enhancedProps[eventConfig.name] = (event: Event) => {
          // Log the event
          const loggedEvent: LoggedEvent = {
            id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: eventConfig.label || eventConfig.name,
            timestamp: Date.now(),
            data: event,
            target: event.target
              ? {
                  tagName: (event.target as HTMLElement).tagName,
                  id: (event.target as HTMLElement).id,
                  className: (event.target as HTMLElement).className,
                }
              : undefined,
          };

          if (onEventLog) {
            onEventLog(loggedEvent);
          }

          // Call custom event handler if provided
          if (eventConfig.handler) {
            eventConfig.handler(event);
          }

          // Call original handler if it exists
          if (originalHandler) {
            originalHandler(event);
          }
        };
      }
    });

    return enhancedProps;
  };

  /**
   * Render the component with current props
   */
  const renderComponent = (): HTMLElement => {
    const propsSnapshot = currentProps();
    const enhancedProps = enhancePropsWithEventHandlers(propsSnapshot);
    const component = story.component(enhancedProps);
    const wrappedComponent = wrapWithContexts(component);
    return wrappedComponent;
  };

  // Build the main container
  const mainStack = <Stack direction="vertical" spacing="md" className={className} />;

  // Add header if requested
  if (showHeader) {
    const headerStack = (
      <Stack direction="vertical" spacing="sm">
        <Typography tag="h3" variant="h3">
          {story.title}
        </Typography>
      </Stack>
    );

    if (story.description) {
      headerStack.appendChild(
        <Typography tag="p" variant="body2" className="text-neutral-600">
          {story.description}
        </Typography>
      );
    }

    if (story.metadata?.tags && story.metadata.tags.length > 0) {
      const tagsStack = (
        <Stack direction="horizontal" spacing="xs">
          {story.metadata.tags.map((tag) => {
            const span = document.createElement('span');
            span.className =
              'inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary-100 text-primary-800';
            span.textContent = tag;
            return span;
          })}
        </Stack>
      );
      headerStack.appendChild(tagsStack);
    }

    mainStack.appendChild(headerStack);
    mainStack.appendChild(<Divider />);
  }

  // Add main content (component + prop editor + code)
  if (story.propEditors && story.propEditors.length > 0) {
    // Two-column layout with prop editor
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid grid-cols-1 lg:grid-cols-2 gap-6';

    // Create component container div
    const componentContainer = document.createElement('div');
    componentContainer.className = 'p-6 min-h-48 flex items-center justify-center';

    // Initial render
    componentContainer.appendChild(renderComponent());

    // Component card with toggle button
    const componentCard = (
      <Card>
        <Stack direction="vertical" spacing="md">
          {componentContainer}
          <Button onclick={() => setShowCode(!showCode())}>
            {showCode() ? '👁️ Hide Code' : '💻 Show Code'}
          </Button>
        </Stack>
      </Card>
    );

    gridContainer.appendChild(componentCard);

    // Prop editor panel
    const propEditorPanel = (
      <PropEditor
        props={story.propEditors.map((config) => ({
          ...config,
          value: currentProps()[config.name] ?? config.defaultValue,
        }))}
        onChange={handlePropChange}
      />
    );
    gridContainer.appendChild(propEditorPanel);

    mainStack.appendChild(gridContainer);

    // Code panel (collapsible)
    if (showCode()) {
      const generatedCode = generateCode(story, currentProps());
      mainStack.appendChild(
        <CodeHighlighter code={generatedCode} language="tsx" showCopy={true} />
      );
    }
  } else {
    // Single column - component only
    const componentCard = (
      <Card>
        <Stack direction="vertical" spacing="md">
          {renderComponent()}
          <Button onclick={() => setShowCode(!showCode())}>
            {showCode() ? '👁️ Hide Code' : '💻 Show Code'}
          </Button>
        </Stack>
      </Card>
    );
    mainStack.appendChild(componentCard);

    // Code panel
    if (showCode()) {
      const generatedCode = generateCode(story, currentProps());
      mainStack.appendChild(
        <CodeHighlighter code={generatedCode} language="tsx" showCopy={true} />
      );
    }
  }

  return mainStack;
};
