/**
 * Modal Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../components/organisms/modal';
import { Button } from '../../components/molecules/button';
import { Stack } from '../../components/atoms/stack';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const ModalDemo = (): HTMLElement => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Modal</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Modal dialog with Portal, compound pattern, 5 sizes, backdrop, and scroll lock.
        </p>
      </div>

      <DemoSection title="Basic Modal" description="Simple modal with header, body, and footer">
        <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>

        <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p class="text-gray-600 dark:text-gray-400">
              This is the modal body. You can put any content here including forms, images, or other
              components.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setBasicOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setBasicOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>

        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)}>
  <ModalHeader>Title</ModalHeader>
  <ModalBody>
    <p>Modal content goes here</p>
  </ModalBody>
  <ModalFooter>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>`}
        />
      </DemoSection>

      <DemoSection title="Sizes" description="Five size options from sm to full">
        <Stack spacing="md">
          <Button variant="outline" onClick={() => setSmOpen(true)}>
            Small Modal
          </Button>
          <Button variant="outline" onClick={() => setLgOpen(true)}>
            Large Modal
          </Button>
        </Stack>

        <Modal open={smOpen} onClose={() => setSmOpen(false)} size="sm">
          <ModalHeader>Small Modal</ModalHeader>
          <ModalBody>
            <p class="text-sm">This is a small modal, perfect for simple confirmations.</p>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" onClick={() => setSmOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

        <Modal open={lgOpen} onClose={() => setLgOpen(false)} size="lg">
          <ModalHeader>Large Modal</ModalHeader>
          <ModalBody>
            <div class="space-y-4">
              <p>This is a large modal with more content space.</p>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded">Column 1</div>
                <div class="p-4 bg-gray-100 dark:bg-gray-700 rounded">Column 2</div>
              </div>
              <p>Perfect for forms, data tables, or detailed information.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setLgOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>

        <CodeBlock
          code={`<Modal size="sm">...</Modal>
<Modal size="md">...</Modal>
<Modal size="lg">...</Modal>
<Modal size="xl">...</Modal>
<Modal size="full">...</Modal>`}
        />
      </DemoSection>

      <DemoSection title="Alert Modal" description="Confirmation dialog pattern">
        <Button variant="error" onClick={() => setAlertOpen(true)}>
          Delete Item
        </Button>

        <Modal open={alertOpen} onClose={() => setAlertOpen(false)} size="sm">
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            <p class="text-gray-600 dark:text-gray-400">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setAlertOpen(false)}>
              Cancel
            </Button>
            <Button variant="error" onClick={() => setAlertOpen(false)}>
              Delete
            </Button>
          </ModalFooter>
        </Modal>

        <CodeBlock
          code={`<Modal size="sm">
  <ModalHeader>Confirm Action</ModalHeader>
  <ModalBody>
    <p>Are you sure?</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="ghost">Cancel</Button>
    <Button variant="error">Delete</Button>
  </ModalFooter>
</Modal>`}
        />
      </DemoSection>

      <DemoSection title="Features" description="Modal includes these features by default">
        <div class="space-y-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            • Backdrop overlay with blur effect
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Close on backdrop click</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Close on Escape key</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Body scroll lock when open</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Smooth fade-in animation</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">• Focus trap for accessibility</p>
        </div>
      </DemoSection>
    </div>
  );
};
