"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar, Hash, MailIcon, MailOpen, Mails, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const ToDo = () => {
    const [toDoTime, setToDoTime] = useState<"today" | "inbox" | "upcomming">("today")
    return (
        <div className='w-full h-full'>
            <Card>
                {/* <CardHeader>
                    <CardTitle>Today!</CardTitle>
                    <CardDescription>
                        <p>Stay focused. Stay productive. Let's make it happen!</p>
                    </CardDescription>
                </CardHeader> */}
                <CardContent className='p-0 sm:p-2'>
                    <div className="w-full flex items-start justify-center">
                        {/* // Desktop menu */}
                        <div className="max-sm:hidden sm:w-[230px]">
                            <div className="w-full space-y-1">
                                <div className={cn("w-full p-2 rounded-sm flex items-center justify-start gap-3 hover:bg-secondary cursor-pointer", toDoTime === "today" && "bg-secondary text-primary")} onClick={() => setToDoTime("today")}>
                                    <Calendar className='w-4 h-4' />
                                    <span className="text-sm font-semibold">Today</span>
                                </div>
                                <div className={cn("w-full p-2 rounded-sm flex items-center justify-start gap-3 hover:bg-secondary cursor-pointer", toDoTime === "inbox" && "bg-secondary text-primary")} onClick={() => setToDoTime("inbox")}>
                                    <MailOpen className='w-4 h-4' />
                                    <p className="text-sm font-semibold">
                                        Inbox
                                    </p>
                                </div>
                                <div className={cn("w-full p-2 rounded-sm flex items-center justify-start gap-3 hover:bg-secondary cursor-pointer", toDoTime === "upcomming" && "bg-secondary text-primary")} onClick={() => setToDoTime("upcomming")}>
                                    <Mails className='w-4 h-4' />
                                    <p className="text-sm font-semibold">
                                        Upcomming
                                    </p>
                                </div>

                                <div className="w-full p-2 flex items-center justify-between pt-5">
                                    <p className="text-md font-semibold">
                                        My Projects
                                    </p>
                                    <Button className='w-6 h-6 p-0' variant={'ghost'}>
                                        <Plus className='w-4 h-4' />
                                    </Button>
                                </div>
                                <div className="w-full p-2 rounded-sm flex items-center justify-start gap-3 hover:bg-secondary cursor-pointer">
                                    <Hash className='w-4 h-4' />
                                    <p className="text-sm font-semibold">
                                        Upcomming
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* // Childrens */}
                        <div className="flex-1 sm:px-3">
                            <div className="w-full space-y-1">
                                {/* <h1 className='text-2xl font-semibold text-foreground'>
                                    {toDoTime === "today" ? <>Today!</>
                                        : toDoTime === "inbox" ? <>Inbox</> :
                                            toDoTime === "upcomming" ? <>Upcomming</> : <>no thing</>}
                                </h1>
                                <p className='text-sm font-medium text-muted-foreground'>
                                    Stay focused. Stay productive. Let's make it happen!
                                </p> */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            {toDoTime === "today" ? <>Today!</>
                                                : toDoTime === "inbox" ? <>Inbox</> :
                                                    toDoTime === "upcomming" ? <>Upcomming</> : <>no thing</>}
                                        </CardTitle>
                                        <CardDescription>
                                            Stay focused. Stay productive. Let&rsquo;s make it happen!
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>Card Content</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>

                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ToDo