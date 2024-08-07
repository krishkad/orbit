import { cn } from '@/lib/utils';
import React, { useEffect } from 'react'
import DayEvent from './day-event';
import { Dayjs } from 'dayjs';
import { EventProps } from '@/types/index-types';
import { useDroppable } from '@dnd-kit/core';

const WeekDayCol = ({
    check,
    weekDay,
    handleDialogOpen,
    handleTouchEnd,
    parentRef,
    eventList,
    ref3
}: {
    check: boolean,
    weekDay: Dayjs | any,
    handleDialogOpen: (day: any, y: number) => void,
    handleTouchEnd: (day: any, y: number) => void,
    parentRef: any,
    eventList: EventProps[],
    ref3: any
}) => {

    const { setNodeRef } = useDroppable({
        id: weekDay.format('YYYY-MM-DD'),
        data: {
            day: weekDay
        }
    });

    const filteredEvents = eventList.filter((event) =>
        event.day.format('YYYY MM DD') === weekDay.format('YYYY MM DD'));

    function setRefs(node: any) {
        setNodeRef(node);
        ref3.current = node;
    };


    return (
        <div
            className={cn("w-full min-w-[100px] h-full border-r border-border", check && 'bg-zinc-100 pointer-events-none text-zinc-400')}
            ref={setRefs}
        >
            <div
                className="size-full relative"
                onDoubleClick={(e) => {
                    const y = e.clientY.toString();
                    handleDialogOpen(weekDay, parseInt(y));
                }}
                onTouchEnd={(e: any) => {
                    const y = e.changedTouches[0].clientY.toString()

                    handleTouchEnd(weekDay, parseInt(y));
                }}
            >
                {filteredEvents.map((event, i) => {
                    return <DayEvent
                        id={event.id}
                        parentRef={parentRef}
                        top={event.top}
                        title={event.title}
                        description={event.description}
                        color={event.color}
                        height={event.height}
                        dayConstraintsRef={parentRef}
                        day={weekDay}
                        ref3={ref3}
                        eventType='week'
                        key={i}

                    />
                })}
            </div>
        </div>
    )
}

export default WeekDayCol;