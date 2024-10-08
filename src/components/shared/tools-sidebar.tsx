import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
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

const ToolsSidebar = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-border bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Rotate3D className="h-4 w-4 transition-all text-white group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <TooltipProvider>


                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/tools/search-prospect"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search Prospects</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>Search Prospects</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/tools/saved"
                                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Bookmark className="h-5 w-5" />
                                <span className="sr-only">Saved</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>Saved</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/tools/todo"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <BriefcaseBusiness className="h-5 w-5" />
                                <span className="sr-only">To Do</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>To Do</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/tools/calendar"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <CalendarCheck className="h-5 w-5" />
                                <span className="sr-only">Calendar</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>Calendar</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/tools/email-manager"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <FolderKanban className="h-5 w-5" />
                                <span className="sr-only">Email Manager</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>Email Manager</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='border-border'>Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}

export default ToolsSidebar