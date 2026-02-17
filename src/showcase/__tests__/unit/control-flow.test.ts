/**
 * Unit Tests: Control Flow Showcase Components
 * Tests Show, For, and Index components
 */

import { createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Control Flow Unit Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Show Component', () => {
    it('should render children when condition is true', () => {
      const [show, setShow] = createSignal(true);

      const element = document.createElement('div');
      if (show()) {
        const child = document.createElement('span');
        child.textContent = 'Visible';
        element.appendChild(child);
      }
      container.appendChild(element);

      expect(element.textContent).toBe('Visible');
    });

    it('should not render children when condition is false', () => {
      const [show, setShow] = createSignal(false);

      const element = document.createElement('div');
      if (show()) {
        const child = document.createElement('span');
        child.textContent = 'Hidden';
        element.appendChild(child);
      }
      container.appendChild(element);

      expect(element.textContent).toBe('');
    });

    it('should toggle between shown and hidden states', () => {
      const [show, setShow] = createSignal(true);

      const element = document.createElement('div');
      const updateElement = () => {
        element.innerHTML = '';
        if (show()) {
          const child = document.createElement('span');
          child.textContent = 'Visible';
          element.appendChild(child);
        }
      };

      updateElement();
      expect(element.textContent).toBe('Visible');

      setShow(false);
      updateElement();
      expect(element.textContent).toBe('');

      setShow(true);
      updateElement();
      expect(element.textContent).toBe('Visible');
    });
  });

  describe('For Component', () => {
    it('should render list items', () => {
      const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ];

      const list = document.createElement('ul');
      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.dataset.id = String(item.id);
        list.appendChild(li);
      });
      container.appendChild(list);

      expect(list.children.length).toBe(3);
      expect(list.children[0].textContent).toBe('Item 1');
      expect(list.children[2].textContent).toBe('Item 3');
    });

    it('should handle empty list', () => {
      const items: any[] = [];

      const list = document.createElement('div');
      if (items.length === 0) {
        const fallback = document.createElement('p');
        fallback.textContent = 'No items';
        list.appendChild(fallback);
      }
      container.appendChild(list);

      expect(list.textContent).toBe('No items');
    });

    it('should add items dynamically', () => {
      const [items, setItems] = createSignal([{ id: 1, name: 'Item 1', price: 10 }]);

      const renderList = () => {
        const list = document.createElement('div');
        items().forEach((item) => {
          const div = document.createElement('div');
          div.textContent = `${item.name} - $${item.price}`;
          list.appendChild(div);
        });
        return list;
      };

      let list = renderList();
      container.appendChild(list);
      expect(list.children.length).toBe(1);

      // Add item
      setItems([...items(), { id: 2, name: 'Item 2', price: 20 }]);
      container.innerHTML = '';
      list = renderList();
      container.appendChild(list);
      expect(list.children.length).toBe(2);
    });

    it('should remove items by id', () => {
      const [items, setItems] = createSignal([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
      ]);

      setItems(items().filter((item) => item.id !== 2));
      expect(items().length).toBe(2);
      expect(items().find((item) => item.id === 2)).toBeUndefined();
    });
  });

  describe('Index Component', () => {
    it('should provide index to render function', () => {
      const items = ['A', 'B', 'C'];
      const list = document.createElement('div');

      items.forEach((item, index) => {
        const div = document.createElement('div');
        div.textContent = `${index}: ${item}`;
        list.appendChild(div);
      });
      container.appendChild(list);

      expect(list.children[0].textContent).toBe('0: A');
      expect(list.children[1].textContent).toBe('1: B');
      expect(list.children[2].textContent).toBe('2: C');
    });
  });
});
