/**
 * Context API Tests
 * Tests: Provider/Consumer pattern
 */

interface IContext<T> {
  value: T;
  subscribers: Set<(value: T) => void>;
  Provider: (props: { value: T; children: HTMLElement }) => HTMLElement;
  Consumer: (props: { children: (value: T) => HTMLElement }) => HTMLElement;
}

function createContext<T>(defaultValue: T): IContext<T> {
  const context: IContext<T> = {
    value: defaultValue,
    subscribers: new Set(),

    Provider: (props: { value: T; children: HTMLElement }) => {
      context.value = props.value;
      context.subscribers.forEach((subscriber) => subscriber(props.value));

      return (
        <div
          style={{
            padding: '15px',
            border: '2px dashed #9c27b0',
            borderRadius: '6px',
            background: '#f3e5f5',
          }}
        >
          {props.children}
        </div>
      );
    },

    Consumer: (props: { children: (value: T) => HTMLElement }) => {
      const consumer = <div style={{ margin: '10px 0' }} />;

      const render = (value: T) => {
        consumer.innerHTML = '';
        const content = props.children(value);
        consumer.appendChild(content);
      };

      context.subscribers.add(render);
      render(context.value);

      return consumer;
    },
  };

  return context;
}

/**
 * Modern hook pattern - access context value directly
 * Cleaner than render props, matches React/Solid conventions
 */
function useContext<T>(context: IContext<T>): T {
  return context.value;
}

interface ITheme {
  primary: string;
  background: string;
  text: string;
}

const ThemeContext = createContext<ITheme>({
  primary: '#007bff',
  background: '#ffffff',
  text: '#000000',
});

const ThemedButton = (props: { label: string }): HTMLElement => {
  // Modern hook pattern - clean and simple!
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme.primary,
        color: theme.background,
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1rem',
        margin: '5px',
      }}
    >
      {props.label}
    </button>
  );
};

const ThemedText = (props: { content: string }): HTMLElement => {
  // Modern hook pattern - clean and simple!
  const theme = useContext(ThemeContext);

  return (
    <p
      style={{
        color: theme.text,
        padding: '10px',
        margin: '5px 0',
      }}
    >
      {props.content}
    </p>
  );
};

export const BasicContextTest = (): HTMLElement => {
  const darkTheme: ITheme = {
    primary: '#6c757d',
    background: '#212529',
    text: '#f8f9fa',
  };

  // Create Provider first, THEN create components inside its scope
  const content = <div />;
  const provider = ThemeContext.Provider({ value: darkTheme, children: content });

  // Now components are created AFTER Provider has set the context value
  const button = ThemedButton({ label: 'Themed Button' });
  const text = ThemedText({ content: 'This text uses theme context' });

  content.appendChild(button);
  content.appendChild(text);

  return (
    <div style={{ padding: '15px' }}>
      <h3>Context API Test</h3>
      {provider}
    </div>
  );
};

export const NestedContextTest = (): HTMLElement => {
  const theme: ITheme = {
    primary: '#28a745',
    background: '#ffffff',
    text: '#212529',
  };

  const wrapper2 = (
    <div
      style={{
        padding: '10px',
        background: '#f0f0f0',
        borderRadius: '6px',
        margin: '10px 0 10px 20px',
      }}
    />
  );

  const btn2 = ThemedButton({ label: 'Level 2 Button' });
  const text2 = ThemedText({ content: 'Level 2 Text' });
  wrapper2.appendChild(btn2);
  wrapper2.appendChild(text2);

  const wrapper1 = (
    <div
      style={{
        padding: '10px',
        background: '#f9f9f9',
        borderRadius: '6px',
        margin: '10px 0',
      }}
    />
  );

  const btn1 = ThemedButton({ label: 'Level 1 Button' });
  wrapper1.appendChild(btn1);
  wrapper1.appendChild(wrapper2);

  // Create Provider with nested structure
  const provider = ThemeContext.Provider({ value: theme, children: wrapper1 });

  return (
    <div style={{ padding: '15px' }}>
      <h3>Nested Context Test</h3>
      {provider}
    </div>
  );
};
