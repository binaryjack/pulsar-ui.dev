// Test function prop signal detection - the key missing piece!
interface ComponentProps {
  activeCategory: () => string;
  currentUser: () => { name: string };
}

export const TestComponentWithProps = ({
  activeCategory,
  currentUser,
}: ComponentProps): HTMLElement => {
  // This should be automatically detected as reactive and wrapped
  const filteredItems = ['apple', 'banana'].filter((item) => item.includes(activeCategory()));
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
