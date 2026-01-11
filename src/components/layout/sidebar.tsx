"use client";

import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useSidebar } from '@/contexts/sidebar-provider';
import { SidebarNav, BottomNav } from '@/components/layout/sidebar-nav';
import { Logo } from '@/components/logo';
import Link from 'next/link';

export function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        'relative hidden h-screen flex-col border-r bg-card transition-all duration-300 ease-in-out md:flex',
        isCollapsed ? 'w-16' : 'w-[260px]'
      )}
    >
        <div className={cn("flex h-14 items-center border-b", isCollapsed ? "justify-center px-2" : "px-4 lg:px-6")}>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo className={cn("h-6 w-auto", isCollapsed && "h-8 w-8")} isCollapsed={isCollapsed} />
            </Link>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
            <SidebarNav />
        </div>
        <div className="p-2 border-t">
            <BottomNav />
        </div>
        <Button
            variant="ghost"
            size="icon"
            className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full border bg-background hover:bg-muted"
            onClick={() => setIsCollapsed(!isCollapsed)}
        >
            <ChevronLeft className={cn('h-4 w-4 transition-transform', isCollapsed && 'rotate-180')} />
        </Button>
    </div>
  );
}
