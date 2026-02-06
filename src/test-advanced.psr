/**
 * Test Advanced: Comprehensive Edge Cases & Stress Testing
 * Tests: Deep nesting, complex props, conditional rendering, dynamic components, performance
 */
import { useState } from '@pulsar-framework/pulsar.dev';

// Test 1: Deep Component Nesting (5+ levels)
interface DeepChild4Props {
  level: number;
  value: string;
}

const DeepChild4 = (props: DeepChild4Props): HTMLElement => (
  <div
    style={`margin-left: ${props.level * 20}px; padding: 5px; border-left: 2px solid #${props.level.toString().repeat(3)};`}
  >
    Level {props.level}: {props.value}
  </div>
);

const DeepChild3 = (props: DeepChild4Props): HTMLElement => (
  <div
    style={`margin-left: ${props.level * 20}px; padding: 5px; border-left: 2px solid #${props.level.toString().repeat(3)};`}
  >
    Level {props.level}: {props.value}
    <DeepChild4 level={props.level + 1} value={`Child of ${props.value}`} />
  </div>
);

const DeepChild2 = (props: DeepChild4Props): HTMLElement => (
  <div
    style={`margin-left: ${props.level * 20}px; padding: 5px; border-left: 2px solid #${props.level.toString().repeat(3)};`}
  >
    Level {props.level}: {props.value}
    <DeepChild3 level={props.level + 1} value={`Child of ${props.value}`} />
  </div>
);

const DeepChild1 = (props: DeepChild4Props): HTMLElement => (
  <div
    style={`margin-left: ${props.level * 20}px; padding: 5px; border-left: 2px solid #${props.level.toString().repeat(3)};`}
  >
    Level {props.level}: {props.value}
    <DeepChild2 level={props.level + 1} value={`Child of ${props.value}`} />
  </div>
);

// Test 2: Complex Props with Nested Objects and Arrays
interface NestedData {
  config: {
    theme: {
      primary: string;
      secondary: string;
      spacing: number[];
    };
    features: {
      enabled: boolean;
      settings: Record<string, any>;
    }[];
  };
  handlers: {
    onClick: (id: string) => void;
    onHover: (event: MouseEvent) => void;
    onFocus: () => void;
  };
}

interface ComplexPropsComponentProps {
  data: NestedData;
  index: number;
}

const ComplexPropsComponent = (props: ComplexPropsComponentProps): HTMLElement => {
  const { config, handlers } = props.data;
  const spacing = config.theme.spacing[props.index] || 10;

  return (
    <div
      style={`padding: ${spacing}px; background: ${config.theme.primary}; margin: 5px; border-radius: 4px;`}
      onClick={() => handlers.onClick(`complex-${props.index}`)}
      onMouseEnter={handlers.onHover}
      onFocus={handlers.onFocus}
    >
      <div style={`color: ${config.theme.secondary}; font-weight: bold;`}>
        Complex Component #{props.index}
      </div>
      <div>Features enabled: {config.features.filter((f) => f.enabled).length}</div>
      {config.features.map((feature, idx) => (
        <div key={idx} style={`opacity: ${feature.enabled ? 1 : 0.5}; font-size: 12px;`}>
          Feature {idx}: {feature.enabled ? '✓' : '✗'}
        </div>
      ))}
    </div>
  );
};

// Test 3: Dynamic Component Selection Based on State
type ComponentType = 'card' | 'list' | 'grid' | 'table';

interface DynamicItemProps {
  type: ComponentType;
  data: any;
  index: number;
}

const CardView = (props: { data: any; index: number }): HTMLElement => (
  <div style="padding: 15px; background: #fff; border: 1px solid #ddd; border-radius: 8px; margin: 5px;">
    <h4>Card #{props.index}</h4>
    <p>{JSON.stringify(props.data, null, 2)}</p>
  </div>
);

const ListView = (props: { data: any; index: number }): HTMLElement => (
  <div style="padding: 10px; background: #f8f9fa; border-left: 4px solid #007bff; margin: 2px 0;">
    <strong>List Item #{props.index}:</strong> {props.data.name || 'No name'}
  </div>
);

const GridView = (props: { data: any; index: number }): HTMLElement => (
  <div style="display: inline-block; width: 100px; height: 100px; background: #28a745; color: white; margin: 5px; padding: 10px; text-align: center; vertical-align: top;">
    <div>#{props.index}</div>
    <div style="font-size: 10px; margin-top: 5px;">{props.data.id || 'N/A'}</div>
  </div>
);

const TableView = (props: { data: any; index: number }): HTMLElement => (
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;">{props.index}</td>
    <td style="padding: 8px; border: 1px solid #ddd;">{props.data.name || 'N/A'}</td>
    <td style="padding: 8px; border: 1px solid #ddd;">{props.data.status || 'Unknown'}</td>
  </tr>
);

const DynamicComponent = (props: DynamicItemProps): HTMLElement => {
  switch (props.type) {
    case 'card':
      return <CardView data={props.data} index={props.index} />;
    case 'list':
      return <ListView data={props.data} index={props.index} />;
    case 'grid':
      return <GridView data={props.data} index={props.index} />;
    case 'table':
      return <TableView data={props.data} index={props.index} />;
    default:
      return <div>Unknown component type: {props.type}</div>;
  }
};

// Test 4: Performance Stress Test (Many Components)
interface StressTestItemProps {
  id: number;
  active: boolean;
  onToggle: (id: number) => void;
}

const StressTestItem = (props: StressTestItemProps): HTMLElement => (
  <div
    style={`padding: 5px; margin: 1px 0; background: ${props.active ? '#d4edda' : '#f8d7da'}; cursor: pointer;`}
    onClick={() => props.onToggle(props.id)}
  >
    Item #{props.id} - {props.active ? 'Active' : 'Inactive'}
  </div>
);

// Test 5: Conditional Rendering with Complex Logic
interface ConditionalComplexProps {
  user: {
    role: 'admin' | 'moderator' | 'user';
    permissions: string[];
    status: 'online' | 'offline' | 'away';
    preferences: {
      theme: 'dark' | 'light';
      notifications: boolean;
    };
  };
  context: {
    isOwner: boolean;
    hasEditPermission: boolean;
    isPublic: boolean;
  };
}

const ConditionalComplex = (props: ConditionalComplexProps): HTMLElement => {
  const canEdit =
    props.user.role === 'admin' ||
    (props.user.role === 'moderator' && props.context.hasEditPermission) ||
    props.context.isOwner;

  const showAdvanced =
    props.user.permissions.includes('advanced') && props.user.status === 'online';

  const themeClass = props.user.preferences.theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div
      style={`padding: 15px; background: ${props.user.preferences.theme === 'dark' ? '#2d3748' : '#ffffff'}; color: ${props.user.preferences.theme === 'dark' ? '#ffffff' : '#000000'};`}
    >
      <h4>User Dashboard</h4>
      <div>Role: {props.user.role.toUpperCase()}</div>
      <div>Status: {props.user.status}</div>

      {canEdit ? (
        <div style="margin: 10px 0; padding: 10px; background: #d4edda; border-radius: 4px;">
          <h5>Edit Controls</h5>
          <button style="margin-right: 5px;">Edit</button>
          <button style="margin-right: 5px;">Delete</button>
          {props.user.role === 'admin' ? (
            <button style="background: #dc3545; color: white;">Admin Actions</button>
          ) : null}
        </div>
      ) : (
        <div style="margin: 10px 0; padding: 10px; background: #f8d7da; border-radius: 4px;">
          No edit permissions
        </div>
      )}

      {showAdvanced ? (
        <div style="margin: 10px 0; padding: 10px; background: #cfe2ff; border-radius: 4px;">
          <h5>Advanced Features</h5>
          <div>Analytics Dashboard</div>
          <div>System Settings</div>
          <div>User Management</div>
        </div>
      ) : null}

      {props.context.isPublic ? (
        <div style="margin: 10px 0; color: #6c757d; font-size: 12px;">
          ⚠️ This content is public
        </div>
      ) : (
        <div style="margin: 10px 0; color: #28a745; font-size: 12px;">🔒 Private content</div>
      )}
    </div>
  );
};

export const TestAdvanced = (): HTMLElement => {
  const [viewType, setViewType] = useState<ComponentType>('card');
  const [stressCount, setStressCount] = useState(10);
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set([1, 3, 5]));

  // Test data
  const testItems = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    status: i % 2 === 0 ? 'active' : 'inactive',
  }));

  const complexData: NestedData = {
    config: {
      theme: {
        primary: '#007bff',
        secondary: '#ffffff',
        spacing: [5, 10, 15, 20, 25],
      },
      features: [
        { enabled: true, settings: { priority: 'high' } },
        { enabled: false, settings: { priority: 'medium' } },
        { enabled: true, settings: { priority: 'low' } },
      ],
    },
    handlers: {
      onClick: (id: string) => console.log(`Clicked: ${id}`),
      onHover: (event: MouseEvent) => console.log('Hovered:', event.type),
      onFocus: () => console.log('Focused'),
    },
  };

  const testUser = {
    role: 'moderator' as const,
    permissions: ['read', 'write', 'advanced'],
    status: 'online' as const,
    preferences: {
      theme: 'dark' as const,
      notifications: true,
    },
  };

  const toggleStressItem = (id: number) => {
    const newActive = new Set(activeItems());
    if (newActive.has(id)) {
      newActive.delete(id);
    } else {
      newActive.add(id);
    }
    setActiveItems(newActive);
  };

  return (
    <div style="padding: 20px; font-family: sans-serif; max-height: 80vh; overflow-y: auto;">
      <h2>Advanced Edge Cases & Stress Tests</h2>

      {/* Test 1: Deep Nesting */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>1. Deep Component Nesting (5 levels)</h3>
        <DeepChild1 level={1} value="Root" />
      </section>

      {/* Test 2: Complex Props */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>2. Complex Nested Props</h3>
        {Array.from({ length: 3 }, (_, i) => (
          <ComplexPropsComponent key={i} data={complexData} index={i} />
        ))}
      </section>

      {/* Test 3: Dynamic Components */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>3. Dynamic Component Selection</h3>
        <div style="margin: 10px 0;">
          <label>View Type: </label>
          <select
            value={viewType()}
            onChange={(e) => setViewType((e.target as HTMLSelectElement).value as ComponentType)}
            style="padding: 5px; margin: 0 10px;"
          >
            <option value="card">Card</option>
            <option value="list">List</option>
            <option value="grid">Grid</option>
            <option value="table">Table</option>
          </select>
        </div>

        <div style="border: 1px solid #ddd; padding: 10px; border-radius: 4px;">
          {viewType() === 'table' ? (
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr>
                  <th style="padding: 8px; border: 1px solid #ddd;">Index</th>
                  <th style="padding: 8px; border: 1px solid #ddd;">Name</th>
                  <th style="padding: 8px; border: 1px solid #ddd;">Status</th>
                </tr>
              </thead>
              <tbody>
                {testItems.map((item, index) => (
                  <DynamicComponent type={viewType()} data={item} index={index} />
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              {testItems.map((item, index) => (
                <DynamicComponent key={index} type={viewType} data={item} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Test 4: Performance Stress Test */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>4. Performance Stress Test</h3>
        <div style="margin: 10px 0;">
          <label>Number of items: </label>
          <input
            type="range"
            min="10"
            max="1000"
            step="10"
            value={stressCount()}
            onChange={(e) => setStressCount(parseInt((e.target as HTMLInputElement).value))}
            style="margin: 0 10px;"
          />
          <span>{stressCount()} items</span>
        </div>

        <div style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; padding: 10px;">
          {Array.from({ length: stressCount }, (_, i) => (
            <StressTestItem
              key={i}
              id={i}
              active={activeItems.has(i)}
              onToggle={toggleStressItem}
            />
          ))}
        </div>

        <div style="margin-top: 10px; font-size: 12px; color: #666;">
          Active items: {activeItems.size} / {stressCount}
        </div>
      </section>

      {/* Test 5: Complex Conditional Rendering */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>5. Complex Conditional Logic</h3>
        <ConditionalComplex
          user={testUser}
          context={{
            isOwner: false,
            hasEditPermission: true,
            isPublic: false,
          }}
        />
      </section>

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Advanced Tests: Deep nesting, complex props, dynamic components, performance stress
          testing, complex conditionals
        </small>
      </div>
    </div>
  );
};
