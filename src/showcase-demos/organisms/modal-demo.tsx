/**
 * Modal Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Stack } from '../../components/atoms/stack';
import { Button } from '../../components/molecules/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../../components/organisms/modal';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const ModalDemo = (): HTMLElement => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Modal</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Modal dialog with Portal, compound pattern, 5 sizes, backdrop, and scroll lock.
        </p>
      </div>

      <DemoSection title="Basic Modal" description="Simple modal with header, body, and footer">
        <Button onclick={() => setBasicOpen(true)}>Open Modal</Button>

        <Modal onClose={() => setBasicOpen(false)}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              This is the modal body. You can put any content here including forms, images, or other
              components.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onclick={() => setBasicOpen(false)}>Cancel</Button>
            <Button onclick={() => setBasicOpen(false)}>Confirm</Button>
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
          <Button onclick={() => setSmOpen(true)}>Small Modal</Button>
          <Button onclick={() => setLgOpen(true)}>Large Modal</Button>
        </Stack>

        <Modal onClose={() => setSmOpen(false)} size="sm">
          <ModalHeader>Small Modal</ModalHeader>
          <ModalBody>
            <p className="text-sm">This is a small modal, perfect for simple confirmations.</p>
          </ModalBody>
          <ModalFooter>
            <Button onclick={() => setSmOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>

        <Modal onClose={() => setLgOpen(false)} size="lg">
          <ModalHeader>Large Modal</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p>This is a large modal with more content space.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">Column 1</div>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">Column 2</div>
              </div>
              <p>Perfect for forms, data tables, or detailed information.</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onclick={() => setLgOpen(false)}>Close</Button>
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
        <Button onclick={() => setAlertOpen(true)}>Delete Item</Button>

        <Modal onClose={() => setAlertOpen(false)} size="sm">
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            <p className="text-gray-600 dark:text-gray-400">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onclick={() => setAlertOpen(false)}>Cancel</Button>
            <Button onclick={() => setAlertOpen(false)}>Delete</Button>
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
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            • Backdrop overlay with blur effect
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Close on backdrop click</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Close on Escape key</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Body scroll lock when open</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Smooth fade-in animation</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">• Focus trap for accessibility</p>
        </div>
      </DemoSection>
    </div>
  );
};
