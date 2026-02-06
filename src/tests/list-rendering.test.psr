/**
 * List Rendering Tests
 * Tests: .map() with keys, filtering, nested lists
 */

interface IItem {
  id: number;
  name: string;
  active: boolean;
}

const ListItem = (props: { item: IItem; index: number }): HTMLElement => {
  return (
    <li
      className={props.item.active ? 'item active' : 'item inactive'}
      style={{
        padding: '10px',
        margin: '5px 0',
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        borderLeft: `4px solid ${props.item.active ? '#4caf50' : '#ccc'}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: props.item.active ? '1' : '0.6',
      }}
    >
      <span>
        {props.item.id}. {props.item.name}
      </span>
      <span
        style={{
          background: props.item.active ? '#4caf50' : '#ccc',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '0.85rem',
        }}
      >
        {props.item.active ? '✓' : '✗'}
      </span>
    </li>
  );
};

export const BasicListTest = (): HTMLElement => {
  const items: IItem[] = [
    { id: 1, name: 'First Item', active: true },
    { id: 2, name: 'Second Item', active: false },
    { id: 3, name: 'Third Item', active: true },
    { id: 4, name: 'Fourth Item', active: true },
  ];

  const ul = <ul style={{ listStyle: 'none', padding: '0' }} />;

  items.forEach((item: IItem, index: number) => {
    const listItem = <ListItem item={item} index={index} />;
    ul.appendChild(listItem);
  });

  return (
    <div style={{ padding: '15px' }}>
      <h3>Basic List with .map()</h3>
      {ul}
    </div>
  );
};

export const FilteredListTest = (): HTMLElement => {
  const items: IItem[] = [
    { id: 1, name: 'Active Item 1', active: true },
    { id: 2, name: 'Inactive Item', active: false },
    { id: 3, name: 'Active Item 2', active: true },
    { id: 4, name: 'Another Inactive', active: false },
    { id: 5, name: 'Active Item 3', active: true },
  ];

  const ul = <ul style={{ listStyle: 'none', padding: '0' }} />;

  items
    .filter((item: IItem) => item.active)
    .forEach((item: IItem, index: number) => {
      const listItem = <ListItem item={item} index={index} />;
      ul.appendChild(listItem);
    });

  return (
    <div style={{ padding: '15px' }}>
      <h3>Filtered List (Active Only)</h3>
      {ul}
    </div>
  );
};

interface ICategory {
  id: number;
  name: string;
  items: IItem[];
}

export const NestedListTest = (): HTMLElement => {
  const categories: ICategory[] = [
    {
      id: 1,
      name: 'Category A',
      items: [
        { id: 101, name: 'A-1', active: true },
        { id: 102, name: 'A-2', active: false },
      ],
    },
    {
      id: 2,
      name: 'Category B',
      items: [
        { id: 201, name: 'B-1', active: true },
        { id: 202, name: 'B-2', active: true },
        { id: 203, name: 'B-3', active: false },
      ],
    },
  ];

  const container = <div style={{ padding: '15px' }} />;

  const title = <h3>Nested Lists</h3>;
  container.appendChild(title);

  categories.forEach((category: ICategory) => {
    const ul = <ul style={{ listStyle: 'none', padding: '0' }} />;

    category.items.forEach((item: IItem, index: number) => {
      const listItem = <ListItem item={item} index={index} />;
      ul.appendChild(listItem);
    });

    const section = (
      <section
        style={{
          margin: '20px 0',
          padding: '15px',
          background: '#f5f5f5',
          borderRadius: '6px',
        }}
      >
        <h4 style={{ color: '#667eea', marginTop: '0' }}>{category.name}</h4>
        {ul}
      </section>
    );

    container.appendChild(section);
  });

  return container;
};
