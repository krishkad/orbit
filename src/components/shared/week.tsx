"use client";
import { sampleWeekEvents } from '@/constant/constant';
import { cn, deserializeDayHours, deserializeMonth, excludeDisabledWeek, getCurrentDay, getCurrentWeekInMonth, getDayHours, roundToNearestFive } from '@/lib/utils';
import { changeEvents, changeWeekNumber } from '@/redux/features/calendar-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux-hooks';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import SchedulerDialog from './scheduler-dialog';
import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import WeekDayCol from './week-day-col';


const Week = () => {
    const serializedDaysHours = getDayHours();
    const daysHours = deserializeDayHours(serializedDaysHours);
    const monthNumber = useAppSelector((state) => state.calendar.monthNumber);
    const week = useAppSelector((state) => state.calendar.weekNumber);
    const serializedMonth = useAppSelector((state) => state.calendar.month);
    const events = useAppSelector((state) => state.calendar.events);
    const rawMonth = deserializeMonth(serializedMonth);
    const month = excludeDisabledWeek(rawMonth)?.month;
    const weekIdx = getCurrentWeekInMonth(month);
    const parentRef: any = useRef<HTMLDivElement>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [eventDate, setEventDate] = useState<{ day: any, y: number }>({
        day: dayjs(new Date()),
        y: 0
    });
    // const [eventList, setEventList] = useState(sampleWeekEvents);
    const dispatch = useAppDispatch();

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const syncScroll = (source: any, target: any) => {
        if (source.current && target.current) {
            target.current.scrollLeft = source.current.scrollLeft;
        }
    };

    useEffect(() => {
        const element1: any = ref1.current;
        const element2: any = ref2.current;

        const handleScroll1 = () => {
            syncScroll(ref1, ref2);
        };

        const handleScroll2 = () => {
            syncScroll(ref2, ref1);
        };

        if (element1 && element2) {
            element1.addEventListener('scroll', handleScroll1);
            element2.addEventListener('scroll', handleScroll2);
        }

        return () => {
            if (element1 && element2) {
                element1.removeEventListener('scroll', handleScroll1);
                element2.removeEventListener('scroll', handleScroll2);
            }
        };
    }, []);


    useEffect(() => {
        // dispatch(changeWeek(month[week]));
        dispatch(changeWeekNumber(weekIdx));
        dispatch(changeEvents(sampleWeekEvents))
    }, [])


    const handleDialogOpen = (day: any, y: number) => {
        setDialogOpen(true);
        if (parentRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const yPositon = y - parentRect.top;
            setEventDate({ day: day, y: yPositon ? yPositon : 0 });
        }
    }
    const handleTouchEnd = (day: any, y: number) => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        if (lastTap && (now - lastTap) < DOUBLE_TAP_DELAY) {
            handleDialogOpen(day, y);
        }
        setLastTap(now);
    };


    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor),
    );

    function handleOnDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active?.data?.current?.day.format('YYYY-MM-DD') !== over.id) {
            const activeEvent = events.filter((event) => event.id === active.id)[0];
            const tempList = events.filter((event) => event.id !== active.id);
            const updatedEvent = { ...activeEvent, day: dayjs(over.id).toISOString(), top: activeEvent.top + roundToNearestFive(event.delta.y) };
            const newList = tempList.concat(updatedEvent);
            dispatch(changeEvents(newList));
        }
    }

    return (
        <div className="w-full h-full">
            <div className="w-full h-[60px] flex items-center justify-center border dark:border-zinc-600">
                <div className='w-[70px] lg:w-[120px] h-[60px] bg-secondary flex justify-start items-center sticky top-0'>
                    <div className="w-full border-t border-r dark:border-zinc-600 border-collapse p-3 h-full flex justify-center items-center">
                        <p className="text-sm font-medium">
                            Time
                        </p>
                    </div>
                </div>
                <div className="w-[calc(100%-70px)] lg:w-[calc(100%-120px)] overflow-x-scroll no-scrollbar" ref={ref2}>
                    <div className="w-full min-w-max grid grid-cols-7 h-[60px] sticky top-0 bg-secondary z-20">

                        {month[week].map((weekDay: any, i: number) => {
                            const currentDay = getCurrentDay(dayjs(weekDay));
                            const check = new Date(weekDay).getMonth() > new Date(dayjs().year(), monthNumber).getMonth() || new Date(weekDay).getMonth() < new Date(dayjs().year(), monthNumber).getMonth();

                            return (
                                <div
                                    className={cn("w-full min-w-[100px] h-full dark:border-zinc-600 border-t",
                                        check && 'bg-zinc-100 pointer-events-none text-zinc-400', i !== 6 && 'border-r')}
                                    key={i}
                                    aria-disabled={check}

                                >
                                    <div className={cn("w-full h-full border-collapse flex flex-col justify-center items-center", currentDay && 'bg-primary text-white')}>
                                        <p className="font-medium text-xs sm:text-base">{weekDay.format('ddd')}
                                        </p>
                                        <p className="font-medium text-xs sm:text-sm">{weekDay.format('DD')}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full h-[calc(100dvh-330px)] md:h-[calc(100dvh-200px)] overflow-x-hidden overflow-y-scroll no-scrollbar relative border-r border-b border-l border dark:border-zinc-600 border-collapse" >
                <div className="w-full h-max flex items-center justify-center">
                    <div className="w-[70px] lg:w-[120px] grid grid-rows-24">
                        {daysHours.map((time: any, i: number) => {
                            return <div key={i} className='w-full h-[60px] bg-secondary flex justify-start items-center'>
                                <div className={cn("w-full dark:border-zinc-600 border-r border-collapse p-3 h-full ", time !== '23:00' && 'border-b')}>
                                    <p className="text-sm font-medium">
                                        {time}
                                    </p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="h-[1440px] w-[calc(100%-70px)] lg:w-[calc(100%-120px)] overflow-x-scroll no-scrollbar" ref={ref1}>
                        <div className="w-full min-w-max grid grid-cols-7 h-full" ref={parentRef}>
                            <DndContext
                                sensors={sensors}
                                collisionDetection={closestCorners}
                                onDragEnd={handleOnDragEnd}
                            >
                                {month[week].map((weekDay: any, i: number) => {

                                    const check = new Date(weekDay).getMonth() > new Date(dayjs().year(), monthNumber).getMonth() || new Date(weekDay).getMonth() < new Date(dayjs().year(), monthNumber).getMonth();

                                    const filteredEvents = events.filter((event) => dayjs(event.day).format('YYYY MM DD') === weekDay.format('YYYY MM DD')
                                    );


                                    return (
                                        <WeekDayCol
                                            check={check}
                                            handleDialogOpen={handleDialogOpen}
                                            handleTouchEnd={handleTouchEnd}
                                            parentRef={parentRef}
                                            weekDay={weekDay}
                                            eventList={events}
                                            ref3={ref3}
                                            key={i}
                                        />


                                    )
                                })}
                            </DndContext>
                        </div>
                    </div>
                </div>
            </div>
            <SchedulerDialog
                dialogOpen={dialogOpen}
                setDialogOpen={setDialogOpen}
                day={eventDate.day.toISOString()}
                y={eventDate.y}
            // eventList={events}
            // setEventList={setEventList}
            />

        </div>
    )
}

export default Week;