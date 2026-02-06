import { signal } from '@pulsar.dev/core';

const count = signal(0);
const items = signal(['apple', 'banana', 'cherry']);

// Test 1: Variable declaration with signal call - should be wrapped in arrow function
const filteredItems = items().filter((item) => item.includes('a'));

// Test 2: Function prop signal detection - the key missing piece!
interface ComponentProps {
  activeCategory: () => string;
  currentUser: () => { name: string };
}

export const TestComponentWithProps = ({
  activeCategory,
  currentUser,
}: ComponentProps): HTMLElement => {
  // This should be automatically detected as reactive and wrapped
  const filteredItems = items().filter((item) => item.includes(activeCategory()));
  const userName = currentUser().name;

  return (
    <div>
      <p>Active Category: {activeCategory()}</p>
      <p>User: {userName}</p>
      <p>
        Filtered Items:{' '}
        {filteredItems.map((item) => (
          <span>{item}</span>
        ))}
      </p>
    </div>
  );
};

// Test 3: Direct usage in JSX - should be auto-called
export const TestComponent = (): HTMLElement => {
  return (
    <div>
      <p>Count: {count()}</p>
      <p>
        Items:{' '}
        {filteredItems.map((item) => (
          <span>{item}</span>
        ))}
      </p>
    </div>
  );
};
