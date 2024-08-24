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
import { Calendar, CalendarCheck, CalendarClock, Hash, MailIcon, MailOpen, Mails, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import ToDoBox from './todo-box'
import { todoList } from '@/constant/constant'
import { TodoItem } from '@/types/index-types'

const ToDo = () => {
    const [toDoTime, setToDoTime] = useState<"today" | "inbox" | "upcomming">("today")
    return (
        <div className='w-full h-full'>
            <Card className='border-0'>
                {/* <CardHeader>
                    <CardTitle>Today!</CardTitle>
                    <CardDescription>
                        <p>Stay focused. Stay productive. Let's make it happen!</p>
                    </CardDescription>
                </CardHeader> */}
                <CardContent className='max-sm:p-0'>
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
                                <Card className='p-0 border-0'>
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
                                        <div className="w-full space-y-5">
                                            <div className="w-full space-y-2">
                                                <h3 className="text-md font-semibold flex gap-2 items-center">
                                                    <CalendarClock className='w-4 h-4' />
                                                    Over due
                                                </h3>
                                                <div className="w-full flex max-sm:flex-col flex-wrap gap-5">
                                                    {todoList.map((todo: TodoItem, i: number) => {
                                                        if (!todo.isOverdue) return;
                                                        return <ToDoBox todo={todo} key={i} />
                                                    })}
                                                </div>
                                            </div>
                                            <div className="w-full space-y-2">
                                                <h3 className="text-md font-semibold flex gap-2 items-center">
                                                    <CalendarCheck className='w-4 h-4' />
                                                    Today
                                                </h3>
                                                <div className="w-full flex max-sm:flex-col flex-wrap gap-5">
                                                    {todoList.map((todo: TodoItem, i: number) => {
                                                        if (todo.isOverdue) return;
                                                        return <ToDoBox todo={todo} key={i} />
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    {/* <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter> */}
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