/**
 * Playground Demo Page
 * Demonstrates the ComponentSandbox with example stories
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Container } from '../../components/atoms/container';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Card } from '../../components/organisms/card';
import { RetractablePanel } from '../../components/organisms/retractable-panel/retractable-panel';
import { ComponentSandbox } from '../playground/component-sandbox';
import { EventLoggerPanel } from '../playground/event-logger-panel';
import type { LoggedEvent } from '../playground/story.types';
import {
  basicButtonStory,
  buttonSizesStory,
  fullWidthButtonStory,
  loadingButtonStory,
} from '../stories/button/button-interactive.story';
import { basicInputStory, emailInputStory } from '../stories/input/input-interactive.story';
import { basicToggleStory, toggleWithLabelStory } from '../stories/toggle/toggle-interactive.story';

/**
 * PlaygroundDemo - Showcases the new playground system
 */
export const PlaygroundDemo = (): HTMLElement => {
  // Reactive state for logged events
  const [loggedEvents, setLoggedEvents] = useState<LoggedEvent[]>([]);
  const [isPanelExpanded, setIsPanelExpanded] = useState<boolean>(true);

  const handleEventLog = (event: LoggedEvent) => {
    const currentEvents = loggedEvents();
    setLoggedEvents([...currentEvents, event]);
    console.log('Event logged:', event);
  };

  const handleClearEvents = () => {
    setLoggedEvents([]);
  };

  const handlePanelToggle = (isExpanded: boolean) => {
    setIsPanelExpanded(isExpanded);
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <Container maxWidth="2xl" padding="lg">
        <Stack direction="vertical" spacing="xl">
          {/* Page Header */}
          <Stack direction="vertical" spacing="sm">
            <Typography tag="h1" variant="h1">
              Pulsar Playground
            </Typography>
            <Typography tag="p" variant="body1" className="text-neutral-600 dark:text-neutral-400">
              Interactive component sandbox with prop editing, event logging, and code generation
            </Typography>
          </Stack>

          {/* Introduction Card */}
          <Card>
            <Stack direction="vertical" spacing="md">
              <Typography tag="h2" variant="h2">
                Welcome to the Playground! 🎨
              </Typography>
              <Typography tag="p" variant="body1">
                This is the new Pulsar Playground system - a lightweight Storybook alternative built
                entirely with Pulsar components.
              </Typography>
              <Typography tag="p" variant="body2">
                Features:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Interactive component sandbox with live prop editing</li>
                <li>Event logging with retractable panel</li>
                <li>Context provider support for complex components</li>
                <li>Code generation with syntax highlighting</li>
                <li>Story-based configuration (no Storybook overhead)</li>
                <li>100% Pulsar components (declarative, type-safe)</li>
              </ul>
            </Stack>
          </Card>

          {/* Example Stories */}
          <Stack direction="vertical" spacing="lg">
            <Typography tag="h2" variant="h2">
              Example Stories
            </Typography>

            <ComponentSandbox
              story={basicButtonStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
            <ComponentSandbox
              story={loadingButtonStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
            <ComponentSandbox
              story={buttonSizesStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
            <ComponentSandbox
              story={fullWidthButtonStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />

            {/* Input Stories */}
            <Typography tag="h3" variant="h3" className="mt-8">
              Input Examples
            </Typography>

            <ComponentSandbox
              story={basicInputStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
            <ComponentSandbox
              story={emailInputStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />

            {/* Toggle Stories */}
            <Typography tag="h3" variant="h3" className="mt-8">
              Toggle Examples
            </Typography>

            <ComponentSandbox
              story={basicToggleStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
            <ComponentSandbox
              story={toggleWithLabelStory}
              onEventLog={handleEventLog}
              showHeader={true}
            />
          </Stack>

          {/* Event Logger Demo */}
          <Stack direction="vertical" spacing="md">
            <Typography tag="h2" variant="h2">
              Event Logger
            </Typography>

            <RetractablePanel
              header={
                <Stack direction="horizontal" spacing="sm" className="items-center">
                  <Typography tag="h3" variant="h6" className="font-semibold">
                    📊 Event Log
                  </Typography>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                    {loggedEvents().length} events
                  </span>
                </Stack>
              }
              isExpanded={isPanelExpanded()}
              onToggle={handlePanelToggle}
              direction="vertical"
              maxHeight="400px"
              position="none"
            >
              <EventLoggerPanel events={loggedEvents()} onClear={handleClearEvents} />
            </RetractablePanel>
          </Stack>

          {/* Implementation Status */}
          <Card>
            <Stack direction="vertical" spacing="md">
              <Typography tag="h2" variant="h2">
                ✅ Playground Complete
              </Typography>
              <Stack direction="vertical" spacing="xs">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    ComponentSandbox with reactive state
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Code generation with syntax highlighting
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    PropEditors (String, Number, Boolean, Select)
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Event logging with RetractablePanel
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Multiple story examples (Button, Input, Toggle)
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    RetractablePanel Component Implemented
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    ComponentSandbox Core Built
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200"
                  >
                    Story Type System Defined
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-bold">
                    →
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-800 dark:text-neutral-200 font-medium"
                  >
                    Next: PropEditor System (String, Boolean, Number editors)
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-300 text-neutral-700 dark:bg-neutral-600 dark:text-neutral-300 text-sm font-bold">
                    ○
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    Pending: CodeHighlighter with Prism.js
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-300 text-neutral-700 dark:bg-neutral-600 dark:text-neutral-300 text-sm font-bold">
                    ○
                  </span>
                  <Typography
                    tag="span"
                    variant="body2"
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    Pending: Raw Component Gallery (40 components)
                  </Typography>
                </div>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </div>
  );
};
