"use client";

import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SidebarProvider, useSidebar } from '@/contexts/sidebar-provider';
import { Header } from '@/components/layout/header';
import { SidebarNav, BottomNav } from '@/components/layout/sidebar-nav';
import { Logo } from '@/components/logo';
import Link from 'next/link';

function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        'relative hidden h-screen flex-col border-r bg-muted/40 transition-all duration-300 ease-in-out md:flex',
        isCollapsed ? 'w-16' : 'w-[260px]'
      )}
    >
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Logo className="h-6 w-auto" />
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
        <SidebarNav />
      </div>
      <div className="p-2">
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 bg-background p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
