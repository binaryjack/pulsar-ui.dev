/**
 * Alert Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Stack } from '../../components/atoms/stack';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '../../components/molecules/alert';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const AlertDemo = (): HTMLElement => {
  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Alert</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Contextual feedback messages with variants and compound pattern.
        </p>
      </div>

      <DemoSection
        title="Variants"
        description="Four contextual variants for different message types"
      >
        <Stack direction="column" spacing="md">
          <Alert variant="info">
            <AlertIcon />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is an informational message.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertIcon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your action was completed successfully.</AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review this warning before proceeding.</AlertDescription>
          </Alert>

          <Alert variant="error">
            <AlertIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>An error occurred while processing your request.</AlertDescription>
          </Alert>
        </Stack>
        <CodeBlock
          code={`<Alert variant="success">
  <AlertIcon />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed.</AlertDescription>
</Alert>`}
        />
      </DemoSection>

      <DemoSection title="Closable Alerts" description="Alerts can be dismissed by the user">
        <Stack direction="column" spacing="md">
          {showAlert1 && (
            <Alert variant="info" closable onClose={() => setShowAlert1(false)}>
              <AlertIcon />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>
                You can close this alert by clicking the X button.
              </AlertDescription>
            </Alert>
          )}

          {showAlert2 && (
            <Alert variant="warning" closable onClose={() => setShowAlert2(false)}>
              <AlertIcon />
              <AlertDescription>This is a warning that can be dismissed.</AlertDescription>
            </Alert>
          )}
        </Stack>
        <CodeBlock
          code={`<Alert
  variant="info"
  closable
  onClose={() => console.log('Closed')}
>
  <AlertDescription>Closable alert</AlertDescription>
</Alert>`}
        />
      </DemoSection>

      <DemoSection title="Without Icon" description="Alerts don't require an icon">
        <Stack direction="column" spacing="md">
          <Alert variant="info">
            <AlertTitle>Simple Alert</AlertTitle>
            <AlertDescription>This alert has no icon.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertDescription>Just a description, no title or icon.</AlertDescription>
          </Alert>
        </Stack>
        <CodeBlock
          code={`<Alert variant="info">
  <AlertTitle>Title Only</AlertTitle>
  <AlertDescription>Description text</AlertDescription>
</Alert>`}
        />
      </DemoSection>
    </div>
  );
};
