"use client"
import { dayHeader } from '@/constant/constant'
import { cn, deserializeMonth, excludeDisabledWeek, getCurrentDay } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux-hooks'
import dayjs from 'dayjs'
import React, { Fragment, useState } from 'react'
import { Button } from '../ui/button'
import { changeCalendarProp, changeDay } from '@/redux/features/calendar-slice';




const Month = () => {
    const serializedmonth = useAppSelector((state) => state.calendar.month);
    const monthNumber = useAppSelector((state) => state.calendar.monthNumber);
    const dispatch = useAppDispatch();
    const month = deserializeMonth(serializedmonth);
    const [lastTap, setLastTap] = useState(0);

    const handleDoubleTap = (day: any) => {
        dispatch(changeCalendarProp("day"));
        dispatch(changeDay(dayjs(day).toISOString()));
    };

    const handleTouchEnd = (day: any) => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        if (lastTap && (now - lastTap) < DOUBLE_TAP_DELAY) {
            handleDoubleTap(day);
        }
        setLastTap(now);
    };



    return (
        <div className={cn('w-full grid grid-cols-7 gap-1 sm:gap-3', excludeDisabledWeek(month)?.lastRow ? "grid-rows-7" : "grid-rows-6")}>
            {dayHeader.map((day) => {
                return <div className={cn("w-full md:shadow-md aspect-[9/16] md:aspect-video rounded-md", day.bg, day.text)} key={day.day}>
                    <div className="w-full h-full p-2">
                        <p className="font-medium text-xs lg:text-sm lx:text-base">{day.Label}</p>
                    </div>
                </div>
            })}
            {excludeDisabledWeek(month)?.month.map((row: any, i: number) => {
                return <Fragment key={i}>
                    {row.map((day: any, index: number) => {
                        return <Button
                            variant={'none'}
                            size={'none'}
                            className={cn(`w-full shadow-md aspect-[9/16] md:aspect-video transition-all duration-100 md:rounded-md border border-border`, dayHeader[index].hoverBg, getCurrentDay(day) && dayHeader[index].active)}
                            key={index}
                            disabled={
                                new Date(day).getMonth() > new Date(dayjs().year(), monthNumber).getMonth() || new Date(day).getMonth() < new Date(dayjs().year(), monthNumber).getMonth()
                            }
                            onDoubleClick={() => {
                                dispatch(changeCalendarProp("day"));
                                dispatch(changeDay(dayjs(day).toISOString()));
                            }}
                            onTouchEnd={() => {
                                handleTouchEnd(day);
                            }}

                        >
                            <div className="w-full h-full p-2 flex flex-col items-start">
                                <p className="font-medium text-xs lg:text-sm lx:text-base">{day.format('DD').toString()}</p>
                                {getCurrentDay(day) && (<p className="max-sm:hidden block font-medium text-[10px] sm:text-sm ">TODAY</p>)}
                            </div>
                        </Button>
                    })}
                </Fragment>
            })}
        </div >
    )
}

export default Month