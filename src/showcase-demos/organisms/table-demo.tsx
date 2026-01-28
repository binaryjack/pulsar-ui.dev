/**
 * Table Component Demo
 */

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from '../../components/organisms/table';
import { Badge } from '../../components/molecules/badge';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const TableDemo = (): HTMLElement => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'active' },
  ];

  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Table</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Data table with compound pattern, striped rows, and hover state.
        </p>
      </div>

      <DemoSection title="Basic Table" description="Simple data table with header and rows">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell header>ID</TableCell>
              <TableCell header>Name</TableCell>
              <TableCell header>Email</TableCell>
              <TableCell header>Role</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CodeBlock
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableCell header>Name</TableCell>
      <TableCell header>Email</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        />
      </DemoSection>

      <DemoSection
        title="Striped Rows"
        description="Alternating row backgrounds for better readability"
      >
        <Table striped>
          <TableHeader>
            <TableRow>
              <TableCell header>ID</TableCell>
              <TableCell header>Name</TableCell>
              <TableCell header>Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'success' : 'default'}>
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CodeBlock
          code={`<Table striped>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>`}
        />
      </DemoSection>

      <DemoSection title="With Components" description="Table cells can contain any components">
        <Table striped>
          <TableHeader>
            <TableRow>
              <TableCell header>User</TableCell>
              <TableCell header>Role</TableCell>
              <TableCell header>Status</TableCell>
              <TableCell header>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>
                  <div>
                    <div class="font-medium">{user.name}</div>
                    <div class="text-sm text-gray-500">{user.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === 'Admin' ? 'primary' : 'default'}>{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <span
                    class={`inline-flex items-center gap-1 ${user.status === 'active' ? 'text-green-600' : 'text-gray-500'}`}
                  >
                    <span
                      class={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}
                    />
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div class="flex gap-2">
                    <button class="text-blue-600 hover:underline text-sm">Edit</button>
                    <button class="text-red-600 hover:underline text-sm">Delete</button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CodeBlock
          code={`<TableRow>
  <TableCell>
    <Badge>Admin</Badge>
  </TableCell>
  <TableCell>
    <Button size="sm">Edit</Button>
  </TableCell>
</TableRow>`}
        />
      </DemoSection>

      <DemoSection title="Empty State" description="Table with no data">
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell header>Name</TableCell>
              <TableCell header>Email</TableCell>
              <TableCell header>Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colspan="3">
                <div class="text-center py-8 text-gray-500">No data available</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoSection>
    </div>
  );
};
