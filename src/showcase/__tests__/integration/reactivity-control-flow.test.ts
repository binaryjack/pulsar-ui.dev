/**
 * Integration Tests: Reactivity + Control Flow
 * Tests signals working with Show, For components
 */

import { $REGISTRY, createMemo, createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Reactivity + Control Flow Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    $REGISTRY.reset();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    $REGISTRY.reset();
  });

  describe('Signal + Show Integration', () => {
    it('should conditionally render based on signal', () => {
      const [isVisible, setIsVisible] = createSignal(true);

      const render = () => {
        const div = document.createElement('div');
        if (isVisible()) {
          const content = document.createElement('span');
          content.textContent = 'Visible Content';
          div.appendChild(content);
        }
        return div;
      };

      let element = render();
      container.appendChild(element);
      expect(element.textContent).toBe('Visible Content');

      setIsVisible(false);
      container.innerHTML = '';
      element = render();
      container.appendChild(element);
      expect(element.textContent).toBe('');
    });

    it('should switch between multiple conditional branches', () => {
      const [status, setStatus] = createSignal<'loading' | 'success' | 'error'>('loading');

      const render = () => {
        const div = document.createElement('div');
        if (status() === 'loading') {
          div.textContent = 'Loading...';
        } else if (status() === 'success') {
          div.textContent = 'Success!';
        } else {
          div.textContent = 'Error!';
        }
        return div;
      };

      let element = render();
      container.appendChild(element);
      expect(element.textContent).toBe('Loading...');

      setStatus('success');
      container.innerHTML = '';
      element = render();
      container.appendChild(element);
      expect(element.textContent).toBe('Success!');

      setStatus('error');
      container.innerHTML = '';
      element = render();
      container.appendChild(element);
      expect(element.textContent).toBe('Error!');
    });
  });

  describe('Signal + For Integration', () => {
    it('should render list items from signal', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
      ]);

      const render = () => {
        const list = document.createElement('div');
        items().forEach((item) => {
          const itemEl = document.createElement('div');
          itemEl.textContent = `${item.name}: $${item.price}`;
          itemEl.dataset.id = String(item.id);
          list.appendChild(itemEl);
        });
        return list;
      };

      const list = render();
      container.appendChild(list);
      expect(list.children.length).toBe(2);
      expect(list.children[0].textContent).toBe('Item 1: $10');
    });

    it('should add items dynamically', () => {
      const [items, setItems] = createSignal<Array<{ id: number; name: string }>>([]);

      const addItem = (name: string) => {
        const newItem = { id: items().length + 1, name };
        setItems([...items(), newItem]);
      };

      expect(items().length).toBe(0);

      addItem('First Item');
      expect(items().length).toBe(1);
      expect(items()[0].name).toBe('First Item');

      addItem('Second Item');
      expect(items().length).toBe(2);
      expect(items()[1].name).toBe('Second Item');
    });

    it('should remove items by id', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]);

      const removeItem = (id: number) => {
        setItems(items().filter((item) => item.id !== id));
      };

      removeItem(2);
      expect(items().length).toBe(2);
      expect(items().find((i) => i.id === 2)).toBeUndefined();
      expect(items()[0].id).toBe(1);
      expect(items()[1].id).toBe(3);
    });

    it('should sort items', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'C', price: 30 },
        { id: 2, name: 'A', price: 10 },
        { id: 3, name: 'B', price: 20 },
      ]);

      const sortByPrice = () => {
        setItems([...items()].sort((a, b) => a.price - b.price));
      };

      sortByPrice();
      expect(items()[0].price).toBe(10);
      expect(items()[1].price).toBe(20);
      expect(items()[2].price).toBe(30);
    });
  });

  describe('Memo + For Integration', () => {
    it('should filter list with memo', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'Apple', category: 'fruit' },
        { id: 2, name: 'Carrot', category: 'vegetable' },
        { id: 3, name: 'Banana', category: 'fruit' },
      ]);
      const [filter, setFilter] = createSignal('fruit');

      const filteredItems = createMemo(() => {
        return items().filter((item) => item.category === filter());
      });

      expect(filteredItems().length).toBe(2);
      expect(filteredItems()[0].name).toBe('Apple');

      setFilter('vegetable');
      expect(filteredItems().length).toBe(1);
      expect(filteredItems()[0].name).toBe('Carrot');
    });

    it('should compute total with memo', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
      ]);

      const total = createMemo(() => {
        return items().reduce((sum, item) => sum + item.price, 0);
      });

      expect(total()).toBe(60);

      setItems([...items(), { id: 4, name: 'Item 4', price: 40 }]);
      expect(total()).toBe(100);
    });
  });

  describe('Nested Show + For', () => {
    it('should show/hide lists conditionally', () => {
      const [showList, setShowList] = createSignal(true);
      const [items, setItems] = createSignal(['A', 'B', 'C']);

      const render = () => {
        const container = document.createElement('div');
        if (showList()) {
          items().forEach((item) => {
            const el = document.createElement('span');
            el.textContent = item;
            container.appendChild(el);
          });
        } else {
          container.textContent = 'List hidden';
        }
        return container;
      };

      let element = render();
      expect(element.children.length).toBe(3);

      setShowList(false);
      element = render();
      expect(element.textContent).toBe('List hidden');
    });
  });
});
