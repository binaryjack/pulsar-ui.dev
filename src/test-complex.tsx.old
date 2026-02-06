/**
 * Test 6: Complex Combination
 * Tests: All features together - arrays, conditionals, nested components, interactions
 */
import { useState } from '@pulsar-framework/pulsar.dev';

interface User {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
  active: boolean;
}

interface UserCardProps {
  user: User;
  onToggle: () => void;
  onRemove: () => void;
  onPromote: () => void;
}

const UserCard = (props: UserCardProps): HTMLElement => {
  const roleColors = {
    admin: '#dc3545',
    user: '#007bff',
    guest: '#6c757d',
  };

  return (
    <div
      style={`padding: 15px; margin: 10px 0; background: ${props.user.active ? '#ffffff' : '#f8f9fa'}; border: 2px solid ${roleColors[props.user.role]}; border-radius: 8px; opacity: ${props.user.active ? '1' : '0.6'};`}
    >
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h4 style="margin: 0 0 5px 0;">{props.user.name}</h4>
          <span
            style={`padding: 4px 8px; background: ${roleColors[props.user.role]}; color: white; border-radius: 4px; font-size: 12px;`}
          >
            {props.user.role.toUpperCase()}
          </span>
          {props.user.active ? (
            <span style="margin-left: 10px; color: #28a745;">✓ Active</span>
          ) : (
            <span style="margin-left: 10px; color: #dc3545;">✗ Inactive</span>
          )}
        </div>
        <div style="display: flex; gap: 5px;">
          <button
            onClick={props.onToggle}
            style="padding: 6px 12px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;"
          >
            {props.user.active ? 'Deactivate' : 'Activate'}
          </button>
          {props.user.role !== 'admin' && (
            <button
              onClick={props.onPromote}
              style="padding: 6px 12px; background: #ffc107; color: #000; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;"
            >
              Promote
            </button>
          )}
          <button
            onClick={props.onRemove}
            style="padding: 6px 12px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export const TestComplex = (): HTMLElement => {
  console.log('[TestComplex] Component START');

  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice Admin', role: 'admin', active: true },
    { id: 2, name: 'Bob User', role: 'user', active: true },
    { id: 3, name: 'Charlie Guest', role: 'guest', active: false },
  ]);

  const [nextId, setNextId] = useState(4);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | 'admin' | 'user' | 'guest'>('all');

  const filteredUsers = () => {
    return users().filter((user) => {
      const statusMatch =
        filter() === 'all' ||
        (filter() === 'active' && user.active) ||
        (filter() === 'inactive' && !user.active);

      const roleMatch = roleFilter() === 'all' || user.role === roleFilter();

      return statusMatch && roleMatch;
    });
  };

  const stats = () => {
    const all = users();
    return {
      total: all.length,
      active: all.filter((u) => u.active).length,
      admins: all.filter((u) => u.role === 'admin').length,
      users: all.filter((u) => u.role === 'user').length,
      guests: all.filter((u) => u.role === 'guest').length,
    };
  };

  const addUser = () => {
    setNextId((prev) => {
      const newId = prev;
      const newUser: User = {
        id: newId,
        name: `User ${newId}`,
        role: 'guest',
        active: true,
      };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      return prev + 1;
    });
  };

  const toggleUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.map((u) => (u.id === id ? { ...u, active: !u.active } : u)));
  };

  const removeUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
  };

  const promoteUser = (id: number) => {
    setUsers(
      users().map((u) => {
        if (u.id !== id) return u;
        const roleOrder: ('guest' | 'user' | 'admin')[] = ['guest', 'user', 'admin'];
        const currentIndex = roleOrder.indexOf(u.role);
        return { ...u, role: roleOrder[Math.min(currentIndex + 1, 2)] };
      })
    );
  };

  return (
    <div style="padding: 20px; font-family: sans-serif; max-width: 800px; margin: 0 auto;">
      <h2>Test 6: Complex User Management</h2>

      <div style="margin: 20px 0; padding: 15px; background: #e7f3ff; border-radius: 8px;">
        <h3 style="margin-top: 0;">Statistics</h3>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
          <div style="text-align: center; padding: 10px; background: #ffffff; border-radius: 4px;">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">{stats().total}</div>
            <div style="font-size: 12px; color: #6c757d;">Total</div>
          </div>
          <div style="text-align: center; padding: 10px; background: #ffffff; border-radius: 4px;">
            <div style="font-size: 24px; font-weight: bold; color: #28a745;">{stats().active}</div>
            <div style="font-size: 12px; color: #6c757d;">Active</div>
          </div>
          <div style="text-align: center; padding: 10px; background: #ffffff; border-radius: 4px;">
            <div style="font-size: 24px; font-weight: bold; color: #dc3545;">{stats().admins}</div>
            <div style="font-size: 12px; color: #6c757d;">Admins</div>
          </div>
          <div style="text-align: center; padding: 10px; background: #ffffff; border-radius: 4px;">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">{stats().users}</div>
            <div style="font-size: 12px; color: #6c757d;">Users</div>
          </div>
          <div style="text-align: center; padding: 10px; background: #ffffff; border-radius: 4px;">
            <div style="font-size: 24px; font-weight: bold; color: #6c757d;">{stats().guests}</div>
            <div style="font-size: 12px; color: #6c757d;">Guests</div>
          </div>
        </div>
      </div>

      <div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
        <button
          onClick={addUser}
          style="padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Add User
        </button>

        <div style="display: flex; gap: 5px;">
          <button
            onClick={() => setFilter('all')}
            style={`padding: 8px 16px; background: ${filter() === 'all' ? '#007bff' : '#e9ecef'}; color: ${filter() === 'all' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer;`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            style={`padding: 8px 16px; background: ${filter() === 'active' ? '#28a745' : '#e9ecef'}; color: ${filter() === 'active' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer;`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('inactive')}
            style={`padding: 8px 16px; background: ${filter() === 'inactive' ? '#dc3545' : '#e9ecef'}; color: ${filter() === 'inactive' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer;`}
          >
            Inactive
          </button>
        </div>

        <div style="display: flex; gap: 5px;">
          <button
            onClick={() => setRoleFilter('all')}
            style={`padding: 8px 16px; background: ${roleFilter() === 'all' ? '#007bff' : '#e9ecef'}; color: ${roleFilter() === 'all' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;`}
          >
            All Roles
          </button>
          <button
            onClick={() => setRoleFilter('admin')}
            style={`padding: 8px 16px; background: ${roleFilter() === 'admin' ? '#dc3545' : '#e9ecef'}; color: ${roleFilter() === 'admin' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;`}
          >
            Admins
          </button>
          <button
            onClick={() => setRoleFilter('user')}
            style={`padding: 8px 16px; background: ${roleFilter() === 'user' ? '#007bff' : '#e9ecef'}; color: ${roleFilter() === 'user' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;`}
          >
            Users
          </button>
          <button
            onClick={() => setRoleFilter('guest')}
            style={`padding: 8px 16px; background: ${roleFilter() === 'guest' ? '#6c757d' : '#e9ecef'}; color: ${roleFilter() === 'guest' ? 'white' : '#495057'}; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;`}
          >
            Guests
          </button>
        </div>
      </div>

      <div style="margin: 20px 0;">
        {filteredUsers().length === 0 ? (
          <div style="padding: 40px; text-align: center; background: #f8f9fa; border-radius: 8px; color: #6c757d;">
            No users match the current filters.
          </div>
        ) : (
          filteredUsers().map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onToggle={() => toggleUser(user.id)}
              onRemove={() => removeUser(user.id)}
              onPromote={() => promoteUser(user.id)}
            />
          ))
        )}
      </div>

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Tests: Complex arrays, filtering, computed values, nested components, conditionals,
          multiple signals, dynamic styling
        </small>
      </div>
    </div>
  );
};
