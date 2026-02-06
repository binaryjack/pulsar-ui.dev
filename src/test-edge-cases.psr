/**
 * Test Edge Cases: Error Boundaries, Invalid Props, Performance Edge Cases
 * Tests: Error handling, prop validation, memory management, extreme conditions
 */
import { useState } from '@pulsar-framework/pulsar.dev';

// Test 1: Component with Potentially Undefined Props
interface MaybeUndefinedProps {
  title?: string;
  data?: {
    items?: Array<{
      id?: number;
      name?: string;
      metadata?: Record<string, any>;
    }>;
    config?: {
      showIcons?: boolean;
      theme?: string;
    };
  };
  callbacks?: {
    onSave?: (data: any) => void;
    onCancel?: () => void;
  };
}

const SafeComponent = (props: MaybeUndefinedProps): HTMLElement => {
  // Safe property access with fallbacks
  const title = props.title || 'Untitled';
  const items = props.data?.items || [];
  const showIcons = props.data?.config?.showIcons ?? true;
  const theme = props.data?.config?.theme || 'default';

  const handleSave = () => {
    try {
      props.callbacks?.onSave?.(props.data);
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  return (
    <div
      style={`padding: 15px; background: ${theme === 'dark' ? '#2d3748' : '#ffffff'}; border-radius: 8px;`}
    >
      <h4>{title}</h4>

      {items.length > 0 ? (
        <div>
          {items.map((item, index) => {
            const id = item?.id ?? index;
            const name = item?.name || `Item ${index}`;
            const hasMetadata = item?.metadata && Object.keys(item.metadata).length > 0;

            return (
              <div
                key={id}
                style="padding: 8px; margin: 4px 0; background: #f8f9fa; border-radius: 4px;"
              >
                {showIcons ? '📄 ' : ''}
                <strong>{name}</strong>
                {hasMetadata ? (
                  <div style="font-size: 12px; color: #666; margin-top: 4px;">
                    Metadata: {Object.keys(item.metadata!).join(', ')}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div style="color: #666; font-style: italic;">No items available</div>
      )}

      <div style="margin-top: 15px;">
        <button
          onClick={handleSave}
          disabled={!props.callbacks?.onSave}
          style={`padding: 8px 16px; margin-right: 8px; border: none; border-radius: 4px; cursor: ${props.callbacks?.onSave ? 'pointer' : 'not-allowed'}; background: ${props.callbacks?.onSave ? '#007bff' : '#6c757d'}; color: white;`}
        >
          Save
        </button>
        <button
          onClick={() => props.callbacks?.onCancel?.()}
          disabled={!props.callbacks?.onCancel}
          style={`padding: 8px 16px; border: none; border-radius: 4px; cursor: ${props.callbacks?.onCancel ? 'pointer' : 'not-allowed'}; background: ${props.callbacks?.onCancel ? '#dc3545' : '#6c757d'}; color: white;`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Test 2: Component That Can Throw Errors
interface ErrorProneComponentProps {
  mode: 'safe' | 'null-error' | 'type-error' | 'async-error' | 'infinite-loop';
  data: any;
}

const ErrorProneComponent = (props: ErrorProneComponentProps): HTMLElement => {
  try {
    switch (props.mode) {
      case 'safe':
        return (
          <div style="padding: 10px; background: #d4edda; border-radius: 4px;">
            ✅ Safe mode: {JSON.stringify(props.data)}
          </div>
        );

      case 'null-error':
        // Intentionally cause null reference error
        const nullObj: any = null;
        return (
          <div style="padding: 10px; background: #f8d7da; border-radius: 4px;">
            This will cause error: {nullObj.nonExistentProperty}
          </div>
        );

      case 'type-error':
        // Intentionally cause type error
        const notAnArray: any = 'this is not an array';
        return (
          <div style="padding: 10px; background: #f8d7da; border-radius: 4px;">
            Mapping non-array: {notAnArray.map((item: any) => item.toString())}
          </div>
        );

      case 'async-error':
        // Simulate async operation that might fail
        setTimeout(() => {
          throw new Error('Async operation failed');
        }, 1000);

        return (
          <div style="padding: 10px; background: #fff3cd; border-radius: 4px;">
            ⏳ Async operation in progress (will error in 1s)
          </div>
        );

      case 'infinite-loop':
        // This would cause infinite loop - commented out for safety
        // const createInfiniteLoop = () => createInfiniteLoop();
        // createInfiniteLoop();

        return (
          <div style="padding: 10px; background: #f8d7da; border-radius: 4px;">
            🚫 Infinite loop mode disabled for safety
          </div>
        );

      default:
        return (
          <div style="padding: 10px; background: #e2e3e5; border-radius: 4px;">
            Unknown mode: {props.mode}
          </div>
        );
    }
  } catch (error) {
    console.error('Component error:', error);
    return (
      <div style="padding: 10px; background: #f8d7da; border: 2px solid #dc3545; border-radius: 4px;">
        <strong>❌ Component Error:</strong>
        <div style="font-family: monospace; font-size: 12px; margin-top: 5px; background: #ffffff; padding: 5px; border-radius: 2px;">
          {error instanceof Error ? error.message : String(error)}
        </div>
      </div>
    );
  }
};

// Test 3: High-Frequency Update Component
interface HighFrequencyProps {
  updateInterval: number;
  maxUpdates: number;
}

const HighFrequencyComponent = (props: HighFrequencyProps): HTMLElement => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const startUpdates = () => {
    if (intervalId) return;

    setIsRunning(true);
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev >= props.maxUpdates) {
          clearInterval(id);
          setIsRunning(false);
          setIntervalId(null);
          return prev;
        }
        return prev + 1;
      });
    }, props.updateInterval);

    setIntervalId(id);
  };

  const stopUpdates = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };

  const resetCounter = () => {
    stopUpdates();
    setCount(0);
  };

  return (
    <div style="padding: 15px; border: 2px solid #007bff; border-radius: 8px;">
      <h4>High-Frequency Updates</h4>
      <div style="font-size: 24px; font-weight: bold; margin: 10px 0;">
        Count: {count()} / {props.maxUpdates}
      </div>
      <div style="margin: 10px 0;">Update interval: {props.updateInterval}ms</div>
      <div style="margin: 10px 0;">Status: {isRunning() ? '🟢 Running' : '🔴 Stopped'}</div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <button
          onClick={startUpdates}
          disabled={isRunning() || count() >= props.maxUpdates}
          style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Start
        </button>
        <button
          onClick={stopUpdates}
          disabled={!isRunning()}
          style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Stop
        </button>
        <button
          onClick={resetCounter}
          style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Reset
        </button>
      </div>

      {count() >= props.maxUpdates ? (
        <div style="margin-top: 10px; padding: 8px; background: #d4edda; border-radius: 4px; color: #155724;">
          ✅ Maximum updates reached!
        </div>
      ) : null}
    </div>
  );
};

// Test 4: Memory-Intensive Component with Large Data Sets
interface LargeDatasetProps {
  size: number;
  renderMode: 'all' | 'virtualized' | 'chunked';
}

const LargeDatasetComponent = (props: LargeDatasetProps): HTMLElement => {
  const [currentChunk, setCurrentChunk] = useState(0);
  const chunkSize = 50;

  // Generate large dataset
  const generateData = (size: number) => {
    return Array.from({ length: size }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      description: `Description for item ${i} with some additional text to make it more memory intensive`,
      metadata: {
        created: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
        category: `Category ${i % 10}`,
        tags: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, j) => `tag${j}-${i}`),
        score: Math.random() * 100,
        nested: {
          level1: { level2: { level3: { value: `deep-value-${i}` } } },
        },
      },
    }));
  };

  const data = generateData(props.size);
  const totalChunks = Math.ceil(data.length / chunkSize);

  const renderItems = () => {
    switch (props.renderMode) {
      case 'all':
        return data.map((item) => (
          <div
            key={item.id}
            style="padding: 8px; margin: 2px 0; background: #f8f9fa; border-left: 4px solid #007bff; font-size: 12px;"
          >
            <strong>{item.name}</strong> - {item.description.substring(0, 50)}...
            <div style="color: #666; font-size: 10px;">
              Tags: {item.metadata.tags.join(', ')} | Score: {item.metadata.score.toFixed(2)}
            </div>
          </div>
        ));

      case 'virtualized':
        // Simple virtualization - only show visible items
        const startIndex = Math.max(0, currentChunk() * chunkSize - chunkSize);
        const endIndex = Math.min(data.length, (currentChunk() + 1) * chunkSize + chunkSize);
        const visibleItems = data.slice(startIndex, endIndex);

        return (
          <div>
            <div style="padding: 8px; background: #e7f3ff; margin-bottom: 8px; font-size: 12px;">
              Showing items {startIndex + 1}-{endIndex} of {data.length}
            </div>
            {visibleItems.map((item) => (
              <div
                key={item.id}
                style="padding: 8px; margin: 2px 0; background: #f8f9fa; border-left: 4px solid #28a745; font-size: 12px;"
              >
                <strong>{item.name}</strong> - {item.description.substring(0, 50)}...
              </div>
            ))}
          </div>
        );

      case 'chunked':
        const chunk = data.slice(currentChunk() * chunkSize, (currentChunk() + 1) * chunkSize);
        return (
          <div>
            <div style="padding: 8px; background: #fff3cd; margin-bottom: 8px; font-size: 12px;">
              Chunk {currentChunk() + 1} of {totalChunks} (items {currentChunk() * chunkSize + 1}-
              {Math.min((currentChunk() + 1) * chunkSize, data.length)})
            </div>
            {chunk.map((item) => (
              <div
                key={item.id}
                style="padding: 8px; margin: 2px 0; background: #f8f9fa; border-left: 4px solid #ffc107; font-size: 12px;"
              >
                <strong>{item.name}</strong> - {item.description.substring(0, 50)}...
                <div style="color: #666; font-size: 10px;">
                  Deep: {item.metadata.nested.level1.level2.level3.value}
                </div>
              </div>
            ))}
            <div style="display: flex; gap: 8px; margin-top: 10px;">
              <button
                onClick={() => setCurrentChunk((prev) => Math.max(0, prev - 1))}
                disabled={currentChunk() === 0}
                style="padding: 4px 8px; font-size: 12px;"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentChunk((prev) => Math.min(totalChunks - 1, prev + 1))}
                disabled={currentChunk() >= totalChunks - 1}
                style="padding: 4px 8px; font-size: 12px;"
              >
                Next
              </button>
            </div>
          </div>
        );

      default:
        return <div>Unknown render mode</div>;
    }
  };

  return (
    <div style="padding: 15px; border: 2px solid #dc3545; border-radius: 8px;">
      <h4>Large Dataset Test ({props.size.toLocaleString()} items)</h4>
      <div style="margin: 10px 0; font-size: 12px; color: #666;">
        Render mode: <strong>{props.renderMode}</strong> | Memory usage: ~
        {Math.round(props.size * 0.5)}KB estimated
      </div>

      <div style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; padding: 10px;">
        {renderItems()}
      </div>
    </div>
  );
};

export const TestEdgeCases = (): HTMLElement => {
  const [errorMode, setErrorMode] = useState<
    'safe' | 'null-error' | 'type-error' | 'async-error' | 'infinite-loop'
  >('safe');
  const [datasetSize, setDatasetSize] = useState(100);
  const [renderMode, setRenderMode] = useState<'all' | 'virtualized' | 'chunked'>('chunked');

  // Test data for safe component
  const testData = {
    items: [
      { id: 1, name: 'First Item', metadata: { type: 'important', priority: 'high' } },
      { id: 2, name: 'Second Item' },
      { id: 3, name: 'Third Item', metadata: { category: 'test' } },
    ],
    config: {
      showIcons: true,
      theme: 'light',
    },
  };

  const undefinedData = {};

  return (
    <div style="padding: 20px; font-family: sans-serif; max-height: 80vh; overflow-y: auto;">
      <h2>Edge Cases & Error Handling Tests</h2>

      {/* Test 1: Safe Property Access */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>1. Safe Property Access</h3>

        <h4>With Valid Data:</h4>
        <SafeComponent
          title="Valid Component"
          data={testData}
          callbacks={{
            onSave: (data) => console.log('Saving:', data),
            onCancel: () => console.log('Cancelled'),
          }}
        />

        <h4 style="margin-top: 15px;">With Undefined/Missing Props:</h4>
        <SafeComponent data={undefinedData as any} />

        <h4 style="margin-top: 15px;">With Completely Empty Props:</h4>
        <SafeComponent />
      </section>

      {/* Test 2: Error Handling */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>2. Error Handling</h3>

        <div style="margin: 10px 0;">
          <label>Error Mode: </label>
          <select
            value={errorMode}
            onChange={(e) => setErrorMode((e.target as HTMLSelectElement).value as any)}
            style="padding: 5px; margin: 0 10px;"
          >
            <option value="safe">Safe</option>
            <option value="null-error">Null Error</option>
            <option value="type-error">Type Error</option>
            <option value="async-error">Async Error</option>
            <option value="infinite-loop">Infinite Loop (Safe)</option>
          </select>
        </div>

        <ErrorProneComponent mode={errorMode} data={{ test: 'data' }} />
      </section>

      {/* Test 3: High-Frequency Updates */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>3. High-Frequency Updates</h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <HighFrequencyComponent updateInterval={50} maxUpdates={100} />
          <HighFrequencyComponent updateInterval={10} maxUpdates={200} />
        </div>
      </section>

      {/* Test 4: Large Dataset Performance */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>4. Large Dataset Performance</h3>

        <div style="margin: 10px 0; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
          <div>
            <label>Dataset Size: </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={datasetSize}
              onChange={(e) => setDatasetSize(parseInt((e.target as HTMLInputElement).value))}
              style="margin: 0 10px;"
            />
            <span>{datasetSize.toLocaleString()} items</span>
          </div>

          <div>
            <label>Render Mode: </label>
            <select
              value={renderMode}
              onChange={(e) => setRenderMode((e.target as HTMLSelectElement).value as any)}
              style="padding: 5px; margin: 0 10px;"
            >
              <option value="chunked">Chunked (50 items)</option>
              <option value="virtualized">Virtualized</option>
              <option value="all">All (⚠️ May be slow)</option>
            </select>
          </div>
        </div>

        <LargeDatasetComponent size={datasetSize} renderMode={renderMode} />
      </section>

      <div style="margin-top: 20px; padding: 10px; background: #d1ecf1; border-radius: 4px;">
        <small>
          ✅ Edge Case Tests: Safe property access, error handling, high-frequency updates, large
          dataset performance
        </small>
      </div>
    </div>
  );
};
