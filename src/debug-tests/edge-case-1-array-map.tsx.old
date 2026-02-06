/**
 * Edge Case 1: Array.map() with Reactive Items
 *
 * Tests:
 * - Array signal containing objects
 * - .map() transformation with JSX in callback
 * - Dynamic item addition/removal
 * - Reactive properties inside mapped items
 */

import { useState } from '@pulsar-framework/pulsar.dev';

interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const EdgeCase1ArrayMap = (): HTMLElement => {
  console.log('[EdgeCase1] Initializing array.map() test');

  const [todos, setTodos] = useState<ITodoItem[]>([
    { id: 1, text: 'Learn Pulsar', completed: false },
    { id: 2, text: 'Test transformer', completed: false },
    { id: 3, text: 'Fix edge cases', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    const text = newTodoText();
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);

    setNewTodoText('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div style="padding: 2rem; max-width: 600px; margin: 0 auto; font-family: system-ui;">
      <div style="border-bottom: 2px solid #e53e3e; padding-bottom: 1rem; margin-bottom: 2rem;">
        <h1 style="margin: 0; color: #e53e3e; font-size: 2rem;">🔴 Edge Case 1: Array.map()</h1>
        <p style="margin: 0.5rem 0 0; color: #666;">
          Testing dynamic array transformation with reactive items
        </p>
      </div>

      {/* Add new todo */}
      <div style="margin-bottom: 2rem; padding: 1.5rem; background: #f7fafc; border-radius: 8px; border: 2px solid #cbd5e0;">
        <h2 style="margin: 0 0 1rem; color: #2d3748; font-size: 1.2rem;">Add Todo</h2>
        <div style="display: flex; gap: 0.5rem;">
          <input
            type="text"
            value={newTodoText()}
            onInput={(e: Event) => setNewTodoText((e.target as HTMLInputElement).value)}
            placeholder="Enter todo text..."
            style="flex: 1; padding: 0.5rem; border: 1px solid #cbd5e0; border-radius: 4px; font-size: 1rem;"
          />
          <button
            onClick={addTodo}
            style="padding: 0.5rem 1.5rem; background: #4299e1; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
          >
            Add
          </button>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.875rem; color: #718096;">
          Total: <strong>{todos().length}</strong> todos
        </div>
      </div>

      {/* CRITICAL: This is the edge case - array.map() with reactive items */}
      <div style="margin-bottom: 2rem;">
        <h2 style="margin: 0 0 1rem; color: #2d3748; font-size: 1.2rem;">
          🎯 Critical Test: Array.map() Transformation
        </h2>

        {/* This should transform to proper $REGISTRY.wire() calls */}
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          {todos().map((todo, index) => (
            <div
              key={todo.id}
              style={`padding: 1rem; background: ${todo.completed ? '#c6f6d5' : '#fff'}; border: 2px solid ${todo.completed ? '#48bb78' : '#cbd5e0'}; border-radius: 8px; display: flex; align-items: center; gap: 1rem; transition: all 0.2s;`}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style="width: 20px; height: 20px; cursor: pointer;"
              />

              {/* Todo text */}
              <div style="flex: 1;">
                <div
                  style={`font-size: 1.1rem; font-weight: ${todo.completed ? 'normal' : 'bold'}; color: ${todo.completed ? '#718096' : '#2d3748'}; text-decoration: ${todo.completed ? 'line-through' : 'none'};`}
                >
                  {index + 1}. {todo.text}
                </div>
                <div style="font-size: 0.875rem; color: #a0aec0; margin-top: 0.25rem;">
                  ID: {todo.id}
                </div>
              </div>

              {/* Status badge */}
              <div
                style={`padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.875rem; font-weight: bold; background: ${todo.completed ? '#48bb78' : '#f7fafc'}; color: ${todo.completed ? 'white' : '#718096'};`}
              >
                {todo.completed ? '✅ Done' : '⏳ Pending'}
              </div>

              {/* Remove button */}
              <button
                onClick={() => removeTodo(todo.id)}
                style="padding: 0.5rem 1rem; background: #fc8181; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {todos().length === 0 ? (
          <div style="padding: 2rem; text-align: center; color: #a0aec0; background: #f7fafc; border-radius: 8px; border: 2px dashed #cbd5e0;">
            No todos yet. Add one above to get started!
          </div>
        ) : null}
      </div>

      {/* Debug info */}
      <div style="padding: 1.5rem; background: #faf5ff; border-radius: 8px; border: 2px solid #d6bcfa;">
        <h2 style="margin: 0 0 1rem; color: #6b46c1; font-size: 1.2rem;">🔍 Debug Info</h2>
        <pre style="background: white; padding: 1rem; border-radius: 4px; overflow: auto; font-size: 0.875rem; margin: 0;">
          {`Current State:
  - Total todos: ${todos().length}
  - Completed: ${todos().filter((t) => t.completed).length}
  - Pending: ${todos().filter((t) => !t.completed).length}
  - New todo text: "${newTodoText()}"

Expected Transformation:
  ✅ JSX inside .map() should be transformed
  ✅ Reactive properties should use $REGISTRY.wire()
  ✅ Event handlers should use addEventListener()
  ✅ Dynamic styles should be reactive

Check Console for:
  - [jsx-transform] Transforming inside .map()
  - [generate-*] Wire calls for todo properties
  - [REGISTRY] Wire registrations`}
        </pre>
      </div>
    </div>
  );
};
