import React from 'react';
import { FilePenLine, Trash } from 'lucide-react';
import { TodoItem } from '@/types/index-types';
import dayjs from 'dayjs';

const ToDoBox = ({ todo }: { todo: TodoItem }) => {
    return (
        <div className="max-sm:w-full max-sm:aspect-square sm:size-[250px] rounded-2xl bg-secondary p-4 space-y-2">
            <div className="w-full flex gap-3 justify-end">
                <FilePenLine className='w-4 h-4 cursor-pointer hover:text-primary transition-all duration-200' />
                {/* <Trash className='w-4 h-4 cursor-pointer' /> */}
            </div>
            <div className="w-full space-y-2">
                <h3 className="text-xl font-semibold">
                    {todo.title}
                </h3>
                <div className="flex w-full gap-2">
                    <p className="text-xs font-medium text-muted-foreground">{dayjs(todo.createTime).format('DD MMM')}</p>
                    <p className="text-xs font-medium text-orange-400">{dayjs(todo.deadline).format('DD MMM')}</p>
                    {todo.isOverdue && <p className="text-xs font-medium text-red-400">{dayjs(todo.overdueDate).format('DD MMM')}</p>}
                </div>
                <div className="w-full">
                    <p className=" text-sm font-medium text-muted-foreground">{todo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ToDoBox;