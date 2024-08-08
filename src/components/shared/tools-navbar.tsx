import React from 'react'
import Link from "next/link";
import {
    Bookmark,
    BriefcaseBusiness,
    CalendarCheck,
    CircleUser,
    FolderKanban,
    Menu,
    Rotate3D,
    Search,
    Settings,
    Tag,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";


import LocationNavigator from '@/components/shared/location-navigation';
import { useTheme } from 'next-themes';

const ToolsNavbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="w-full flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6 bg-secondary">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col" onOpenAutoFocus={(e: any) => e.preventDefault()}>
                    <SheetTitle>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <h1 className="flex gap-2 items-center justify-center font-bold text-md">
                                <Rotate3D className='text-primary' />
                                Orbit
                            </h1>
                        </Link>
                    </SheetTitle>
                    <nav className="grid gap-2 text-lg font-medium mt-8">
                        <SheetClose asChild>

                            <Link
                                href="/tools/search-prospect"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Search className="h-5 w-5" />
                                Search Prospects
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>

                            <Link
                                href="/tools/saved"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                            >
                                <Bookmark className="h-5 w-5" />
                                Saved
                                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>

                            <Link
                                href="/tools/todo"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <BriefcaseBusiness className="h-5 w-5" />
                                To Do
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>

                            <Link
                                href="/tools/calendar"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <CalendarCheck className="h-5 w-5" />
                                Calendar
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>

                            <Link
                                href="/tools/email-manager"
                                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <FolderKanban className="h-5 w-5" />
                                Email Manager
                            </Link>
                        </SheetClose>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <LocationNavigator />

            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className='border-border'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <>{theme === 'light' ?
                        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem> :
                        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    }
                    </>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header >
    )
}

export default ToolsNavbar