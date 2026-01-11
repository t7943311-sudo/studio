"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  ListChecks,
  FileText,
  Settings,
  LogOut,
  Palette,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/sidebar-provider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/users', icon: Users, label: 'Users' },
  { href: '/charts', icon: BarChart3, label: 'Charts' },
  { href: '/tables', icon: ListChecks, label: 'Tables' },
  { href: '/forms', icon: FileText, label: 'Forms' },
  { href: '/ui-elements', icon: Palette, label: 'UI Elements' },
];

export function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  const { isCollapsed } = useSidebar();

  const renderLink = (item: NavItem) => (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        pathname.startsWith(item.href) && (item.href !== '/dashboard' || pathname === '/dashboard') ? 'bg-muted text-primary' : '',
        isCollapsed && 'justify-center'
      )}
    >
      <item.icon className="h-4 w-4" />
      {!isCollapsed && <span>{item.label}</span>}
    </Link>
  );

  return (
    <TooltipProvider>
      <nav className="grid items-start gap-1 text-sm font-medium">
        {navItems.map((item) =>
          isCollapsed ? (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>{renderLink(item)}</TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div key={item.href}>{renderLink(item)}</div>
          )
        )}
      </nav>
    </TooltipProvider>
  );
}

export function BottomNav() {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();

  return (
    <nav className="mt-auto grid items-start gap-1 text-sm font-medium">
      <Link
        href="/settings"
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
          pathname === '/settings' && 'bg-muted text-primary',
          isCollapsed && 'justify-center'
        )}
      >
        <Settings className="h-4 w-4" />
        {!isCollapsed && <span>Settings</span>}
      </Link>
      <Link
        href="/login"
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-destructive transition-all hover:text-primary dark:hover:text-red-500',
          isCollapsed && 'justify-center'
        )}
      >
        <LogOut className="h-4 w-4" />
        {!isCollapsed && <span>Logout</span>}
      </Link>
    </nav>
  );
}
