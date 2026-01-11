import Link from "next/link";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/layout/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 border-b">
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        <div className="hidden md:block w-full">
          {/* We can add a search bar here in the future */}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
