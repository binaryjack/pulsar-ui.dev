/**
 * Test Real-World Patterns: Async Operations, Forms, Data Fetching, State Management
 * Tests: API calls, form validation, loading states, pagination, search, filtering
 */
import { useState } from '@pulsar-framework/pulsar.dev';

// Simulated API functions
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchUsers = async (
  page: number = 1,
  search: string = ''
): Promise<{
  users: Array<{ id: number; name: string; email: string; role: string; active: boolean }>;
  total: number;
  hasMore: boolean;
}> => {
  await delay(800 + Math.random() * 1200); // Simulate network delay

  const allUsers = Array.from({ length: 147 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['admin', 'user', 'moderator'][i % 3],
    active: Math.random() > 0.3,
  })).filter(
    (user) =>
      search === '' ||
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const users = allUsers.slice(startIndex, startIndex + pageSize);

  return {
    users,
    total: allUsers.length,
    hasMore: startIndex + pageSize < allUsers.length,
  };
};

const saveUser = async (user: any): Promise<{ success: boolean; message: string }> => {
  await delay(500 + Math.random() * 1000);

  // Simulate occasional failures
  if (Math.random() < 0.1) {
    throw new Error('Server error: Unable to save user');
  }

  return {
    success: true,
    message: 'User saved successfully',
  };
};

// Test 1: Async Data Loading with Loading States
interface AsyncDataLoaderProps {
  title: string;
  autoLoad: boolean;
}

const AsyncDataLoader = (props: AsyncDataLoaderProps): HTMLElement => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const loadData = async (newPage: number = 1, newSearch: string = search()) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchUsers(newPage, newSearch);

      if (newPage === 1) {
        setData(result.users);
      } else {
        setData([...data(), ...result.users]);
      }

      setHasMore(result.hasMore);
      setPage(newPage);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
      console.error('Load data error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm: string) => {
    setSearch(searchTerm);
    await loadData(1, searchTerm);
  };

  const loadMore = () => {
    if (!loading() && hasMore()) {
      loadData(page() + 1);
    }
  };

  // Auto-load on mount
  if (props.autoLoad && !data() && !loading()) {
    loadData();
  }

  return (
    <div style="border: 2px solid #007bff; border-radius: 8px; padding: 15px;">
      <h4>{props.title}</h4>

      {/* Search */}
      <div style="margin: 10px 0;">
        <input
          type="text"
          placeholder="Search users..."
          value={search()}
          onInput={(e) => {
            const value = (e.target as HTMLInputElement).value;
            setSearch(value);
            // Debounce search
            setTimeout(() => {
              if (search() === value) {
                handleSearch(value);
              }
            }, 500);
          }}
          style="padding: 8px; margin-right: 8px; border: 1px solid #ddd; border-radius: 4px; width: 200px;"
        />
        <button
          onClick={() => loadData(1)}
          disabled={loading()}
          style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          {loading() ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {/* Loading State */}
      {loading() && !data() ? (
        <div style="padding: 20px; text-align: center; color: #666;">
          <div style="font-size: 18px;">⏳</div>
          <div>Loading data...</div>
        </div>
      ) : null}

      {/* Error State */}
      {error() ? (
        <div style="padding: 10px; background: #f8d7da; border: 1px solid #dc3545; border-radius: 4px; margin: 10px 0;">
          <strong>Error:</strong> {error()}
          <button
            onClick={() => {
              setError(null);
              loadData();
            }}
            style="margin-left: 10px; padding: 4px 8px; background: #dc3545; color: white; border: none; border-radius: 2px; cursor: pointer; font-size: 12px;"
          >
            Retry
          </button>
        </div>
      ) : null}

      {/* Data */}
      {data() ? (
        <div>
          <div style="margin: 10px 0; font-size: 12px; color: #666;">
            Showing {data().length} users
          </div>

          <div style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; border-radius: 4px;">
            {data().map((user: any) => (
              <div
                key={user.id}
                style={`padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; ${!user.active ? 'opacity: 0.6;' : ''}`}
              >
                <div>
                  <strong>{user.name}</strong>
                  <div style="font-size: 12px; color: #666;">{user.email}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="padding: 2px 6px; background: #e9ecef; border-radius: 2px; font-size: 10px;">
                    {user.role.toUpperCase()}
                  </span>
                  <span style={`font-size: 12px; color: ${user.active ? '#28a745' : '#dc3545'};`}>
                    {user.active ? '✓' : '✗'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore() ? (
            <div style="text-align: center; margin: 10px 0;">
              <button
                onClick={loadMore}
                disabled={loading()}
                style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
              >
                {loading() ? 'Loading...' : 'Load More'}
              </button>
            </div>
          ) : (
            <div style="text-align: center; margin: 10px 0; font-size: 12px; color: #666;">
              No more data to load
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

// Test 2: Form with Validation
interface FormData {
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  active: boolean;
  bio: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  bio?: string;
}

const UserForm = (): HTMLElement => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'user',
    active: true,
    bio: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState(false);
  const [saveResult, setSaveResult] = useState<{ success: boolean; message: string } | null>(null);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData().name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData().name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData().email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData().email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData().bio.length > 500) {
      newErrors.bio = 'Bio must be less than 500 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSaving(true);
    setSaveResult(null);

    try {
      const result = await saveUser(formData());
      setSaveResult(result);

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          role: 'user',
          active: true,
          bio: '',
        });
      }
    } catch (error) {
      setSaveResult({
        success: false,
        message: error instanceof Error ? error.message : 'Save failed',
      });
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: keyof FormData, value: any) => {
    setFormData({ ...formData(), [field]: value });

    // Clear field error on change
    if (errors()[field]) {
      const newErrors = { ...errors() };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const isFormValid = Object.keys(validateForm()).length === 0;

  return (
    <div style="border: 2px solid #28a745; border-radius: 8px; padding: 15px;">
      <h4>User Registration Form</h4>

      <form onSubmit={handleSubmit} style="display: flex; flex-direction: column; gap: 15px;">
        {/* Name Field */}
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold;">Name *</label>
          <input
            type="text"
            value={formData().name}
            onInput={(e) => updateField('name', (e.target as HTMLInputElement).value)}
            style={`padding: 8px; border: 2px solid ${errors().name ? '#dc3545' : '#ddd'}; border-radius: 4px; width: 100%; max-width: 300px;`}
            placeholder="Enter your name"
          />
          {errors().name ? (
            <div style="color: #dc3545; font-size: 12px; margin-top: 4px;">{errors().name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold;">Email *</label>
          <input
            type="email"
            value={formData().email}
            onInput={(e) => updateField('email', (e.target as HTMLInputElement).value)}
            style={`padding: 8px; border: 2px solid ${errors().email ? '#dc3545' : '#ddd'}; border-radius: 4px; width: 100%; max-width: 300px;`}
            placeholder="Enter your email"
          />
          {errors().email ? (
            <div style="color: #dc3545; font-size: 12px; margin-top: 4px;">{errors().email}</div>
          ) : null}
        </div>

        {/* Role Field */}
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold;">Role</label>
          <select
            value={formData().role}
            onChange={(e) => updateField('role', (e.target as HTMLSelectElement).value)}
            style="padding: 8px; border: 2px solid #ddd; border-radius: 4px;"
          >
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Active Checkbox */}
        <div>
          <label style="display: flex; align-items: center; gap: 8px;">
            <input
              type="checkbox"
              checked={formData().active}
              onChange={(e) => updateField('active', (e.target as HTMLInputElement).checked)}
            />
            <span>Active user</span>
          </label>
        </div>

        {/* Bio Field */}
        <div>
          <label style="display: block; margin-bottom: 5px; font-weight: bold;">Bio</label>
          <textarea
            value={formData().bio}
            onInput={(e) => updateField('bio', (e.target as HTMLTextAreaElement).value)}
            style={`padding: 8px; border: 2px solid ${errors().bio ? '#dc3545' : '#ddd'}; border-radius: 4px; width: 100%; max-width: 400px; min-height: 80px; resize: vertical;`}
            placeholder="Tell us about yourself..."
          />
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
            {errors().bio ? (
              <div style="color: #dc3545; font-size: 12px;">{errors().bio}</div>
            ) : (
              <div></div>
            )}
            <div
              style={`font-size: 12px; color: ${formData().bio.length > 450 ? '#dc3545' : '#666'};`}
            >
              {formData().bio.length}/500
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={saving() || !isFormValid}
            style={`padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; background: ${saving() || !isFormValid ? '#6c757d' : '#007bff'}; color: white;`}
          >
            {saving() ? 'Saving...' : 'Save User'}
          </button>
        </div>

        {/* Save Result */}
        {saveResult() ? (
          <div
            style={`padding: 10px; border-radius: 4px; background: ${saveResult()!.success ? '#d4edda' : '#f8d7da'}; border: 1px solid ${saveResult()!.success ? '#28a745' : '#dc3545'};`}
          >
            <strong>{saveResult()!.success ? '✅ Success:' : '❌ Error:'}</strong>{' '}
            {saveResult()!.message}
          </div>
        ) : null}
      </form>
    </div>
  );
};

// Test 3: Real-time Updates Simulation
const RealtimeUpdates = (): HTMLElement => {
  const [messages, setMessages] = useState<
    Array<{
      id: number;
      user: string;
      message: string;
      timestamp: Date;
      type: 'info' | 'warning' | 'error' | 'success';
    }>
  >([]);

  const [isConnected, setIsConnected] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const messageTypes = ['info', 'warning', 'error', 'success'] as const;
  const sampleMessages = [
    'User connected to the system',
    'New order received',
    'Payment processed successfully',
    'Server performance warning',
    'Backup completed',
    'Database connection lost',
    'New user registration',
    'File upload completed',
  ];

  const addMessage = () => {
    const newMessage = {
      id: Date.now(),
      user: `User${Math.floor(Math.random() * 100)}`,
      message: sampleMessages[Math.floor(Math.random() * sampleMessages.length)],
      timestamp: new Date(),
      type: messageTypes[Math.floor(Math.random() * messageTypes.length)],
    };

    setMessages((prev) => [newMessage, ...prev.slice(0, 49)]); // Keep last 50 messages
  };

  const startRealtime = () => {
    if (intervalId()) return;

    setIsConnected(true);
    const id = setInterval(
      () => {
        addMessage();
      },
      1000 + Math.random() * 2000
    );

    setIntervalId(id);
  };

  const stopRealtime = () => {
    if (intervalId()) {
      clearInterval(intervalId()!);
      setIntervalId(null);
      setIsConnected(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div style="border: 2px solid #ffc107; border-radius: 8px; padding: 15px;">
      <h4>Real-time Message Stream</h4>

      <div style="margin: 10px 0; display: flex; gap: 8px; align-items: center;">
        <div
          style={`padding: 4px 8px; border-radius: 4px; font-size: 12px; background: ${isConnected() ? '#d4edda' : '#f8d7da'}; color: ${isConnected() ? '#155724' : '#721c24'};`}
        >
          {isConnected() ? '🟢 Connected' : '🔴 Disconnected'}
        </div>

        <button
          onClick={isConnected() ? stopRealtime : startRealtime}
          style={`padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; background: ${isConnected() ? '#dc3545' : '#28a745'}; color: white;`}
        >
          {isConnected() ? 'Disconnect' : 'Connect'}
        </button>

        <button
          onClick={clearMessages}
          style="padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; background: #6c757d; color: white;"
        >
          Clear
        </button>
      </div>

      <div style="font-size: 12px; color: #666; margin-bottom: 10px;">
        {messages().length} messages
      </div>

      <div style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; border-radius: 4px; background: #f8f9fa;">
        {messages().length === 0 ? (
          <div style="padding: 20px; text-align: center; color: #666; font-style: italic;">
            No messages yet. Click Connect to start receiving updates.
          </div>
        ) : (
          messages().map((message) => {
            const typeColors = {
              info: '#17a2b8',
              warning: '#ffc107',
              error: '#dc3545',
              success: '#28a745',
            };

            return (
              <div
                key={message.id}
                style="padding: 8px 12px; border-bottom: 1px solid #dee2e6; animation: fadeIn 0.3s ease-in;"
              >
                <div style="display: flex; justify-content: space-between; align-items: start;">
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                      <span
                        style={`padding: 2px 6px; border-radius: 2px; font-size: 10px; background: ${typeColors[message.type]}; color: white;`}
                      >
                        {message.type.toUpperCase()}
                      </span>
                      <strong style="font-size: 12px;">{message.user}</strong>
                    </div>
                    <div style="font-size: 14px;">{message.message}</div>
                  </div>
                  <div style="font-size: 10px; color: #666; white-space: nowrap; margin-left: 8px;">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export const TestRealWorld = (): HTMLElement => {
  return (
    <div style="padding: 20px; font-family: sans-serif; max-height: 80vh; overflow-y: auto;">
      <h2>Real-World Application Patterns</h2>

      {/* Test 1: Async Data Loading */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>1. Async Data Loading with Pagination</h3>
        <AsyncDataLoader title="User Management" autoLoad={true} />
      </section>

      {/* Test 2: Forms */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>2. Form Validation & Submission</h3>
        <UserForm />
      </section>

      {/* Test 3: Real-time Updates */}
      <section style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
        <h3>3. Real-time Updates Simulation</h3>
        <RealtimeUpdates />
      </section>

      <div style="margin-top: 20px; padding: 10px; background: #d1ecf1; border-radius: 4px;">
        <small>
          ✅ Real-World Tests: Async loading, pagination, search, form validation, real-time
          updates, error handling
        </small>
      </div>
    </div>
  );
};
