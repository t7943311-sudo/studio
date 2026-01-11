'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Suspended';
  avatar: string;
};

// This is not using @tanstack/react-table to keep it simple for beginners
// as requested. This is a configuration for a custom table component.
export const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }: { row: User }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={row.avatar} />
          <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <span className="font-medium">{row.name}</span>
            <span className="text-xs text-muted-foreground">{row.email}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: { row: User }) => (
      <Badge
        className={cn({
          'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300': row.status === 'Active',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300': row.status === 'Inactive',
          'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300': row.status === 'Suspended',
        })}
        variant="outline"
      >
        {row.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }: { row: User }) => <div>{row.role}</div>,
  },
  {
    id: 'actions',
    cell: ({ row }: { row: User }) => {
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => alert(`Viewing ${row.name}`)}>
                View user
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => alert(`Editing ${row.name}`)}>
                Edit user
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
