/**
 * Error Boundary Tests
 * Tests: Try/Catch error handling
 */

const ErrorBoundary = (props: {
  children: () => HTMLElement; // CHANGED: Function that creates child
  fallback: (error: Error) => HTMLElement;
}): HTMLElement => {
  const container = <div style={{ padding: '15px' }} />;

  try {
    // Call function to create child - catches errors during creation
    const child = props.children();
    container.appendChild(child);
  } catch (error) {
    const fallbackUI = props.fallback(error as Error);
    container.appendChild(fallbackUI);
  }

  return container;
};

const BuggyComponent = (props: { shouldThrow: boolean }): HTMLElement => {
  if (props.shouldThrow) {
    throw new Error('Intentional error from BuggyComponent');
  }

  return (
    <div
      style={{
        padding: '15px',
        background: '#e8f5e9',
        border: '2px solid #4caf50',
        borderRadius: '6px',
      }}
    >
      No errors - working fine ✓
    </div>
  );
};

const ErrorFallback = (props: { error: Error }): HTMLElement => {
  return (
    <div
      style={{
        background: '#ffebee',
        border: '2px solid #f44336',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h4 style={{ color: '#d32f2f', marginTop: '0' }}>⚠️ Something went wrong</h4>
      <p style={{ color: '#c62828', fontWeight: 'bold' }}>{props.error.message}</p>
      <pre
        style={{
          background: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px',
          fontSize: '0.85rem',
          overflowX: 'auto',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        {props.error.stack || 'No stack trace'}
      </pre>
    </div>
  );
};

export const BasicErrorBoundaryTest = (): HTMLElement => {
  const section1 = (
    <section style={{ marginBottom: '20px' }}>
      <h4>No Error Case</h4>
      {ErrorBoundary({
        children: () => BuggyComponent({ shouldThrow: false }),
        fallback: (error: Error) => ErrorFallback({ error }),
      })}
    </section>
  );

  const section2 = (
    <section>
      <h4>Error Case (should show fallback)</h4>
      {ErrorBoundary({
        children: () => BuggyComponent({ shouldThrow: true }),
        fallback: (error: Error) => ErrorFallback({ error }),
      })}
    </section>
  );

  return (
    <div style={{ padding: '15px' }}>
      <h3>Error Boundary Test</h3>
      {section1}
      {section2}
    </div>
  );
};

export const NestedErrorBoundaryTest = (): HTMLElement => {
  const outerBoundary = ErrorBoundary({
    children: () => {
      const outerContent = <div />;

      const working = BuggyComponent({ shouldThrow: false });
      outerContent.appendChild(working);

      const innerBoundary = ErrorBoundary({
        children: () => BuggyComponent({ shouldThrow: true }),
        fallback: (error: Error) => (
          <div
            style={{
              color: '#ffc107',
              background: '#fff8e1',
              padding: '10px',
              borderRadius: '4px',
              margin: '10px 0',
            }}
          >
            Inner caught: {error.message}
          </div>
        ),
      });

      outerContent.appendChild(innerBoundary);
      return outerContent;
    },
    fallback: (error: Error) => (
      <div
        style={{
          color: '#dc3545',
          background: '#ffebee',
          padding: '10px',
          borderRadius: '4px',
        }}
      >
        Outer caught: {error.message}
      </div>
    ),
  });

  return (
    <div style={{ padding: '15px' }}>
      <h3>Nested Error Boundaries</h3>
      {outerBoundary}
    </div>
  );
};
