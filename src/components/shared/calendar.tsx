"use client"
import React from 'react';
import MonthContainer from './month-container';
import { useAppSelector } from '@/redux/hooks/redux-hooks';
import DayContainer from './day-container';
import WeekContainer from './week-container'

const Calendar = () => {
    const calendarProp = useAppSelector((state) => state.calendar.calendarProp);
    return (
        <div className='w-full'>
            <div className="w-full overflow-x-auto">
                {calendarProp === "month" ? <MonthContainer /> : calendarProp === "day" ? <DayContainer /> : calendarProp === "week" ? <WeekContainer /> : <p>none</p>}
            </div>
        </div >
    )
};

export default Calendar;