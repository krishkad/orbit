import { sampleWeekEvents } from "@/constant/constant";
import { getMonth } from "@/lib/utils";
import { EventProps } from "@/types/index-types";
import { createSlice } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";


interface CalendarTypes {
    month: any;
    monthNumber: number;
    smallCalendar: any;
    smallCalendarMonthNumber: number;
    calendarProp: "month" | "day" | "week";
    day: any;
    week: any;
    weekNumber: number;
    events: EventProps[]

};

const initialState: CalendarTypes = {
    month: getMonth(),
    monthNumber: dayjs().month(),
    smallCalendar: getMonth(),
    smallCalendarMonthNumber: dayjs().month(),
    calendarProp: "month",
    day: dayjs().toISOString(),
    week: null,
    weekNumber: 0,
    events: sampleWeekEvents
};


export const CalendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        changeMonth: (state, action) => {
            state.month = action.payload
        },
        changeMonthNumber: (state, action) => {
            state.monthNumber = action.payload
        },
        changeSmallCalendar: (state, action) => {
            state.smallCalendar = action.payload
        },
        changeSmallCalendarMonthNumber: (state, action) => {
            state.smallCalendarMonthNumber = action.payload
        },
        changeCalendarProp: (state, action) => {
            state.calendarProp = action.payload
        },
        changeDay: (state, action) => {
            state.day = action.payload
        },
        changeWeek: (state, action) => {
            state.week = action.payload
        },
        changeWeekNumber: (state, action) => {
            state.weekNumber = action.payload
        },
        changeEvents: (state, action) => {
            state.events = action.payload
        }
    },

});

export const { changeMonth, changeMonthNumber, changeSmallCalendar, changeSmallCalendarMonthNumber, changeCalendarProp, changeDay, changeWeek, changeWeekNumber, changeEvents } = CalendarSlice.actions;
export default CalendarSlice.reducer;