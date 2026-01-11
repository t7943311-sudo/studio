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
  User,
  Shield,
  LogIn,
  ClipboardPaste,
  AlertTriangle,
  FileQuestion,
  Book,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/contexts/sidebar-provider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface NavItem {
  href: string;
  icon: React.ElementType;
  label: string;
  isExternal?: boolean;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/users', icon: Users, label: 'Users' },
  { href: '/charts', icon: BarChart3, label: 'Charts' },
  { href: '/tables', icon: ListChecks, label: 'Tables' },
  { href: '/forms', icon: FileText, label: 'Forms' },
  { href: '/ui-elements', icon: Palette, label: 'UI Components' },
];

const pagesNavItems: NavItem[] = [
    { href: '/profile', icon: User, label: 'User Profile' },
    { 
        href: '#', 
        icon: Shield, 
        label: 'Authentication',
        subItems: [
            { href: '/login', icon: LogIn, label: 'Login' },
            { href: '/register', icon: ClipboardPaste, label: 'Register' },
            { href: '/forgot-password', icon: FileQuestion, label: 'Forgot Password' },
        ]
    },
    { 
        href: '#', 
        icon: AlertTriangle, 
        label: 'Error Pages',
        subItems: [
            { href: '/404', icon: AlertTriangle, label: '404 Not Found' },
            { href: '/500', icon: AlertTriangle, label: '500 Server Error' },
        ]
    },
    { href: '/documentation/index.html', icon: Book, label: 'Documentation', isExternal: true },
]


const NavLink = ({ item, onLinkClick, isSubItem = false }: { item: NavItem, onLinkClick?: () => void, isSubItem?: boolean }) => {
    const pathname = usePathname();
    const { isCollapsed } = useSidebar();
    
    const linkContent = (
      <>
        <item.icon className={cn("h-4 w-4", isCollapsed && "h-5 w-5")} />
        {!isCollapsed && <span className={cn(isSubItem && "ml-5")}>{item.label}</span>}
      </>
    );

    const linkClasses = cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        pathname === item.href ? 'bg-primary/10 text-primary' : '',
        isCollapsed && 'justify-center'
    );

    const link = (
        <Link
            href={item.href}
            onClick={onLinkClick}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={linkClasses}
        >
            {linkContent}
        </Link>
    );

    if (isCollapsed) {
        return (
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>{link}</TooltipTrigger>
                <TooltipContent side="right"><p>{item.label}</p></TooltipContent>
            </Tooltip>
        );
    }

    return link;
}


export function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const { isCollapsed } = useSidebar();

  if (isCollapsed) {
      return (
        <TooltipProvider>
            <nav className="grid items-start gap-1 px-2 text-sm font-medium">
                {navItems.map((item) => ( <NavLink key={item.href} item={item} onLinkClick={onLinkClick} />))}
                <div className="my-2 border-t border-border -mx-2"></div>
                {pagesNavItems.map((item) => <NavLink key={item.href} item={item} onLinkClick={onLinkClick} />)}
            </nav>
        </TooltipProvider>
      )
  }

  return (
    <nav className="grid items-start gap-1 px-2 text-sm font-medium">
        {navItems.map((item) => ( <NavLink key={item.href} item={item} onLinkClick={onLinkClick} />))}
        <div className="my-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">Pages</h3>
        </div>
        <Accordion type="multiple" className="w-full">
            {pagesNavItems.map((item) => 
                item.subItems ? (
                     <AccordionItem value={item.label} key={item.label} className="border-none">
                        <AccordionTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:no-underline [&[data-state=open]>svg]:rotate-90">
                           <item.icon className="h-4 w-4" />
                           {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-0">
                           <div className="flex flex-col gap-1 ml-4 border-l border-border pl-2">
                            {item.subItems.map(subItem => (
                                <NavLink key={subItem.href} item={subItem} onLinkClick={onLinkClick} isSubItem />
                            ))}
                           </div>
                        </AccordionContent>
                    </AccordionItem>
                ) : (
                    <NavLink key={item.href} item={item} onLinkClick={onLinkClick} />
                )
            )}
        </Accordion>
    </nav>
  );
}

export function BottomNav() {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();

  const renderLink = (href: string, label: string, icon: React.ElementType, isDestructive = false) => {
    const LinkIcon = icon;
    const link = (
         <Link
            href={href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary',
              isDestructive ? 'text-destructive hover:text-red-500' : 'text-muted-foreground',
              pathname === href && !isDestructive && 'bg-muted text-primary',
              isCollapsed && 'justify-center'
            )}
          >
            <LinkIcon className="h-4 w-4" />
            {!isCollapsed && <span>{label}</span>}
          </Link>
    );

     if (isCollapsed) {
        return (
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>{link}</TooltipTrigger>
              <TooltipContent side="right">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
        );
      }

    return link;
  }

  return (
     <TooltipProvider>
        <nav className="mt-auto grid items-start gap-1 text-sm font-medium">
            {renderLink("/settings", "Settings", Settings)}
            {renderLink("/login", "Logout", LogOut, true)}
        </nav>
    </TooltipProvider>
  );
}
