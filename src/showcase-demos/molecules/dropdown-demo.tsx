/**
 * Dropdown Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Button } from '../../components/molecules/button';
import { Dropdown, DropdownItem } from '../../components/molecules/dropdown';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const DropdownDemo = (): HTMLElement => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selected, setSelected] = useState('Option 1');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dropdown</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Dropdown menu with Portal, keyboard navigation, and custom trigger.
        </p>
      </div>

      <DemoSection title="Basic Dropdown" description="Click to open dropdown menu">
        <Dropdown triggerElement={<Button>Open Menu</Button>}>
          <DropdownItem onclick={() => console.log('Action 1')}>Action 1</DropdownItem>
          <DropdownItem onclick={() => console.log('Action 2')}>Action 2</DropdownItem>
          <DropdownItem onclick={() => console.log('Action 3')}>Action 3</DropdownItem>
        </Dropdown>
        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Dropdown
  open={open}
  onOpenChange={setOpen}
  trigger={<Button>Open Menu</Button>}
>
  <DropdownItem onClick={() => console.log('Action')}>
    Action
  </DropdownItem>
</Dropdown>`}
        />
      </DemoSection>

      <DemoSection title="With Selection" description="Track selected item">
        <div className="space-y-4">
          <Dropdown triggerElement={<Button>{selected()}</Button>}>
            <DropdownItem
              onclick={() => {
                setSelected('Option 1');
                setOpen2(false);
              }}
            >
              Option 1
            </DropdownItem>
            <DropdownItem
              onclick={() => {
                setSelected('Option 2');
                setOpen2(false);
              }}
            >
              Option 2
            </DropdownItem>
            <DropdownItem
              onclick={() => {
                setSelected('Option 3');
                setOpen2(false);
              }}
            >
              Option 3
            </DropdownItem>
          </Dropdown>
          <p className="text-sm text-gray-600 dark:text-gray-400">Selected: {selected}</p>
        </div>
        <CodeBlock
          code={`const [selected, setSelected] = useState('Option 1')

<Dropdown trigger={<Button>{selected}</Button>}>
  <DropdownItem onClick={() => setSelected('Option 1')}>
    Option 1
  </DropdownItem>
</Dropdown>`}
        />
      </DemoSection>

      <DemoSection title="Disabled Items" description="Dropdown items can be disabled">
        <Dropdown triggerElement={<Button>Actions</Button>}>
          <DropdownItem onclick={() => console.log('Edit')}>Edit</DropdownItem>
          <DropdownItem onclick={() => console.log('Duplicate')}>Duplicate</DropdownItem>
          <DropdownItem disabled onclick={() => console.log('Delete')}>
            Delete (Disabled)
          </DropdownItem>
        </Dropdown>
        <CodeBlock
          code={`<DropdownItem disabled>
  Disabled Item
</DropdownItem>`}
        />
      </DemoSection>
    </div>
  );
};
