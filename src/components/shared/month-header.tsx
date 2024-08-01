"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';
import dayjs from 'dayjs';
import { CalendarHeart, CalendarRange, Sun } from 'lucide-react';
import SmallCalendar from './small-calendar';
import { useAppDispatch } from '@/redux/hooks/redux-hooks';
import { changeCalendarProp, changeMonth, changeMonthNumber, changeSmallCalendar, changeSmallCalendarMonthNumber, } from '@/redux/features/calendar-slice';
import { getMonth } from '@/lib/utils';
import MonthFooter from './month-footer';

const MonthHeader = () => {

    const dispatch = useAppDispatch();


    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <SmallCalendar />
                <div className="flex justify-center items-center gap-2">
                    <div className="hidden sm:block">
                        <MonthFooter />
                    </div>
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            dispatch(changeCalendarProp('week'));

                        }}
                        className='flex justify-center items-center gap-2'
                    >
                        <CalendarRange className='w-4 h-4' />
                        <span className="max-sm:hidden">Week</span>
                    </Button>
                    <Button
                        variant={'outline'}
                        onClick={() => {
                            dispatch(changeMonthNumber(dayjs().month()));
                            dispatch(changeMonth((getMonth())));
                            dispatch(changeSmallCalendar((getMonth())));
                            dispatch(changeSmallCalendarMonthNumber(dayjs().month()));
                        }}
                        className='flex justify-center items-center gap-2'
                    >
                        <Sun className='w-4 h-4' />
                        <span className="max-sm:hidden">Today</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MonthHeader