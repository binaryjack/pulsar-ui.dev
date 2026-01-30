/**
 * EventLoggerPanel Component
 * Displays logged events with filtering and clearing
 */

import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Button } from '../../components/molecules/button';
import { Card } from '../../components/organisms/card';
import type { LoggedEvent } from './story.types';

export interface IEventLoggerPanelProps {
  /** Array of logged events */
  events: LoggedEvent[];

  /** Callback to clear all events */
  onClear?: () => void;

  /** Custom CSS class */
  className?: string;
}

/**
 * EventLoggerPanel
 * Shows captured events in a scrollable list
 */
export const EventLoggerPanel = ({
  events,
  onClear,
  className,
}: IEventLoggerPanelProps): HTMLElement => {
  const container = (
    <Card className={`${className || ''} h-full flex flex-col`}>
      <Stack direction="vertical" spacing="md" className="h-full" />
    </Card>
  );

  // Header
  const header = (
    <Stack direction="horizontal" spacing="sm" className="justify-between items-center">
      <Typography tag="h3" variant="h4">
        {`Event Log (${events.length})`}
      </Typography>
    </Stack>
  );

  if (onClear && events.length > 0) {
    header.appendChild(<Button onclick={onClear}>🗑️ Clear</Button>);
  }

  const mainStack = container.firstElementChild as HTMLElement;
  mainStack.appendChild(header);

  // Event list
  if (events.length === 0) {
    mainStack.appendChild(
      <Typography tag="p" variant="body2" className="text-neutral-400 italic text-center py-8">
        No events logged yet. Interact with components to see events.
      </Typography>
    );
  } else {
    const eventList = document.createElement('div');
    eventList.className = 'space-y-2 overflow-y-auto max-h-96';

    // Render events in reverse order (newest first)
    [...events].reverse().forEach((event) => {
      const eventCard = document.createElement('div');
      eventCard.className =
        'p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700';

      const timestamp = new Date(event.timestamp).toLocaleTimeString();

      const eventHeader = (
        <Stack direction="horizontal" spacing="sm" className="justify-between items-start">
          <Typography tag="span" variant="body2" className="font-semibold text-primary-600">
            {event.name}
          </Typography>
          <Typography tag="span" variant="caption" className="text-neutral-500">
            {timestamp}
          </Typography>
        </Stack>
      );

      eventCard.appendChild(eventHeader);

      // Target info
      if (event.target) {
        const targetInfo = (
          <Typography tag="p" variant="caption" className="text-neutral-600 mt-1 font-mono">
            {`${event.target.tagName}${event.target.id ? `#${event.target.id}` : ''}${event.target.className ? `.${event.target.className.split(' ')[0]}` : ''}`}
          </Typography>
        );
        eventCard.appendChild(targetInfo);
      }

      eventList.appendChild(eventCard);
    });

    mainStack.appendChild(eventList);
  }

  return container;
};
