import { usersData } from '@/lib/mock-data';
import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function UsersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>A list of all users in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={usersData} />
      </CardContent>
    </Card>
  );
}
