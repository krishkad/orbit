"use client";

import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux-hooks';
import { changeMonth, changeMonthNumber, changeSmallCalendar, changeSmallCalendarMonthNumber } from '@/redux/features/calendar-slice';
import { cn, deserializeMonth, excludeDisabledWeek, getCurrentDay, getMonth } from '@/lib/utils';
import { dayHeader } from '@/constant/constant';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SmallCalendar = () => {

    // const monthAppSelector = useAppSelector((state) => state.calendar.month);
    const monthNumber = useAppSelector((state) => state.calendar.monthNumber);
    const smallCalendar = useAppSelector((state) => state.calendar.smallCalendar);
    const smallCalendarMonthNumber = useAppSelector((state) => state.calendar.smallCalendarMonthNumber);
    const dispatch = useAppDispatch();
    const month: any = deserializeMonth(smallCalendar);


    useEffect(() => {
        dispatch(changeSmallCalendarMonthNumber(monthNumber));
        dispatch(changeSmallCalendar(getMonth(monthNumber)));
    }, [monthNumber])




    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex item-center justify-center cursor-pointer">
                    <h1 className="text-base sm:text-2xl font-semibold">{dayjs(new Date(dayjs().year(), monthNumber)).format('MMMM YYYY')}</h1>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-max border-border">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Button size={'icon'} variant={'outline'} onClick={() => {
                            dispatch(changeSmallCalendarMonthNumber(smallCalendarMonthNumber - 1));
                            dispatch(changeSmallCalendar(getMonth(smallCalendarMonthNumber - 1)));
                        }}>
                            <ChevronLeft className='w-4 h-4' />
                        </Button>
                        <div className="flex justify-center items-center gap-2">
                            <p className="text-sm font-semibold">{dayjs(new Date(dayjs().year(), smallCalendarMonthNumber)).format("MMMM YYYY")}</p>
                            {/* <p className="text-sm font-semibold"></p> */}
                        </div>
                        <Button size={'icon'} variant={'outline'} onClick={() => {
                            dispatch(changeSmallCalendarMonthNumber(smallCalendarMonthNumber + 1));
                            dispatch(changeSmallCalendar(getMonth(smallCalendarMonthNumber + 1)));
                        }}>
                            <ChevronRight className='w-4 h-4' />
                        </Button>
                    </div>
                    <div className={cn("", excludeDisabledWeek(month)?.lastRow ? "grid grid-cols-7 grid-rows-7 gap-2 " : "grid grid-cols-7 grid-rows-6 gap-2 ")}>
                        {dayHeader.map((day, i) => {
                            return <div className="aspect-square w-8 bg-secondary flex items-center justify-center text-xs font-medium rounded-md" key={i}>
                                {day.Label.slice(0, 1)}
                            </div>
                        })}
                        {excludeDisabledWeek(month)?.month.map((row: any, i: number) => {
                            return row.map((day: any, i: number) => {
                                return <Button
                                    variant={'ghost'}
                                    className={cn("aspect-square w-8 h-8 hover:bg-secondary flex items-center justify-center text-xs font-medium rounded-md", getCurrentDay(day) && 'bg-secondary')}
                                    key={i}
                                    disabled={
                                        new Date(day).getMonth() > new Date(dayjs().year(), smallCalendarMonthNumber).getMonth() || new Date(day).getMonth() < new Date(dayjs().year(), smallCalendarMonthNumber).getMonth()
                                    }
                                    onClick={() => {
                                        dispatch(changeMonthNumber(smallCalendarMonthNumber));
                                        dispatch(changeMonth(getMonth(smallCalendarMonthNumber)));

                                    }}
                                >
                                    {day.format('D')}
                                </Button>
                            })
                        })}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default SmallCalendar;