/**
 * Nested Component Import Tests
 * Tests: Parent -> Child -> GrandChild component nesting
 */

export const GrandChild = (props: { message: string }): HTMLElement => {
  return (
    <span
      className="grandchild"
      style={{
        background: '#fff3e0',
        padding: '8px',
        border: '2px solid #ff9800',
        borderRadius: '4px',
        display: 'inline-block',
      }}
    >
      GrandChild: {props.message}
    </span>
  );
};

export const Child = (props: { name: string }): HTMLElement => {
  return (
    <div
      className="child"
      style={{
        background: '#f3e5f5',
        padding: '15px',
        border: '2px solid #9c27b0',
        borderRadius: '6px',
        margin: '10px 0 10px 20px',
      }}
    >
      <h3 style={{ marginTop: '0' }}>Child: {props.name}</h3>
      <GrandChild message={`Hello from ${props.name}`} />
    </div>
  );
};

export const ParentComponent = (): HTMLElement => {
  return (
    <div
      className="parent"
      style={{
        background: '#e3f2fd',
        padding: '20px',
        border: '2px solid #2196f3',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ marginTop: '0' }}>Parent Component</h2>
      <Child name="First Child" />
      <Child name="Second Child" />
      <Child name="Third Child" />
    </div>
  );
};
