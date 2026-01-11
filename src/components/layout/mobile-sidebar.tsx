"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarNav } from "./sidebar-nav"
import { Logo } from "../logo"

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[260px] p-0">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo className="h-6 w-auto" />
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            <SidebarNav onLinkClick={() => setOpen(false)} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
