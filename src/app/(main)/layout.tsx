"use client";

import { SidebarProvider } from '@/contexts/sidebar-provider';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';


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
