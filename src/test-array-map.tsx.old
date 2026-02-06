/**
 * Test 3: Array.map() with wire() reconciliation
 * Tests: Dynamic arrays, wire() reconciliation, add/remove items
 */
import { useState } from '@pulsar-framework/pulsar.dev';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export const TestArrayMap = (): HTMLElement => {
  console.log('[TestArrayMap] Component START');

  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Test array rendering', completed: false },
    { id: 2, text: 'Test wire() reconciliation', completed: false },
    { id: 3, text: 'Test add/remove items', completed: false },
  ]);

  const [nextId, setNextId] = useState(4);

  console.log('[TestArrayMap] Initial todos:', todos());

  const addTodo = () => {
    console.log('[TestArrayMap] Adding todo');
    setNextId((prev) => {
      const newId = prev;
      const newTodo: TodoItem = {
        id: newId,
        text: `New todo #${newId}`,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      return prev + 1;
    });
  };

  const toggleTodo = (id: number) => {
    console.log('[TestArrayMap] Toggling todo:', id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const removeTodo = (id: number) => {
    console.log('[TestArrayMap] Removing todo:', id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Test 3: Array.map() with wire()</h2>

      <div style="margin: 20px 0;">
        <button
          onClick={addTodo}
          style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add Todo
        </button>
      </div>

      <div style="margin: 20px 0;">
        {todos().map((todo) => (
          <div
            key={todo.id}
            style={`padding: 10px; margin: 5px 0; background: ${todo.completed ? '#d4edda' : '#fff3cd'}; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;`}
          >
            <div style="flex: 1;">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style="margin-right: 10px;"
              />
              <span style={todo.completed ? 'text-decoration: line-through; color: #6c757d;' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Tests: array.map(), wire() reconciliation, dynamic arrays, add/remove/update items
        </small>
      </div>
    </div>
  );
};
