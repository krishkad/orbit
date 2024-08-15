"use client";
import React, { useEffect, useRef, useState } from 'react';
import { calculateStartAndEndTimes, cn, getTimeInHours, roundToNearestDay, roundToNearestFive } from '@/lib/utils';
import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { RightClick } from './right-click';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux-hooks';
import dayjs from 'dayjs';
import { changeEvents } from '@/redux/features/calendar-slice';


const DayEvent = ({
    day,
    top,
    title,
    description,
    parentRef,
    color,
    height,
    id,
    ref3,
    eventType

}: {
    dayConstraintsRef: any,
    day: any,
    top: number,
    height: number,
    parentRef?: any,
    title: string,
    description: string,
    color: string,
    id: number,
    ref3?: any,
    eventType: 'day' | 'week'


}) => {
    const [eventInfo, setEventInfo] = useState({
        id,
        height: height,
        top: top,
        bottom: 0,
        startTime: getTimeInHours(top),
        endTime: '',
        day: day
    });

    useEffect(() => {
        setEventInfo({
            id,
            height,
            top,
            bottom: 0,
            startTime: getTimeInHours(top),
            endTime: '',
            day
        });
        setYAxis(top);
    }, [id, height, top]);

    const [yAxis, setYAxis] = useState(eventInfo.top);
    const [xAxis, setXAxis] = useState(0);
    const [onDragStart, setOnDragStart] = useState(false);
    const ref: any = useRef();
    const { attributes, listeners, transform, setNodeRef } = useDraggable({
        id,
        data: { ...eventInfo, setEventInfo }
    });
    const events = useAppSelector(state => state.calendar.events);
    const dispatch = useAppDispatch();



    useDndMonitor({
        onDragStart(event) {
            if (event.active.id === id) {
                setOnDragStart(true);
            }

        },
        onDragMove(event) {
            if (event.active.id === id) {

                const ParentRect = parentRef.current.getBoundingClientRect();
                const EventRect = ref.current.getBoundingClientRect();
                const yTop = (EventRect.top - ParentRect.top);
                const roundToFive = roundToNearestFive(yTop);
                const { start, end } = calculateStartAndEndTimes(roundToFive, height);
                setEventInfo(prevEventInfo => ({
                    ...prevEventInfo,
                    startTime: start,
                    endTime: end,
                    top: roundToFive
                }));


            }
        },
        onDragEnd(event) {
            const { active, over } = event;
            if (event.active.id === id && eventInfo.day.format('YYYY-MM-DD') === over?.id) {
                console.log(over?.id);
                const ParentRect = parentRef.current.getBoundingClientRect();
                const EventRect = ref.current.getBoundingClientRect();
                const yTop = (EventRect.top - ParentRect.top);
                const roundToFive = roundToNearestFive(yTop);
                const { start, end } = calculateStartAndEndTimes(roundToFive, height);
                // setEventInfo(prevEventInfo => ({
                //     ...prevEventInfo,
                //     startTime: start,
                //     endTime: end,
                //     top: roundToFive
                // }));
                const activeEvent = events.filter((event) => event.id === active.id)[0];
                const tempList = events.filter((event) => event.id !== active.id);
                const updatedEvent = { ...activeEvent, top: roundToFive };
                const newList = tempList.concat(updatedEvent);
                dispatch(changeEvents(newList));
                setYAxis(roundToFive);
            }
            setOnDragStart(false);

        },
        onDragCancel(event) { },
    });







    return (
        <>
            <RightClick>
                <div
                    ref={el => {
                        setNodeRef(el);
                        ref.current = el;
                    }}
                    {...attributes}
                    {...listeners}
                    style={{
                        transform: eventType === 'week' ? (`translate(${xAxis + (transform ? roundToNearestDay(transform.x, ref3.current.getBoundingClientRect()) : 0)}px, ${yAxis + (transform ? roundToNearestFive(transform?.y) : 0)}px)`) : eventType === 'day' ? `translateY(${(yAxis + (transform ? roundToNearestFive(transform?.y) : 0))}px)` : '',
                        height: height

                    }}
                    className={cn(`w-full absolute inset-x-0 p-1 cursor-pointer `, color ? color : 'bg-primary', onDragStart && 'z-10')}>


                    <div className="w-full h-full relative">
                        <div className="w-full">
                            {onDragStart ? <>
                                <p className="font-medium text-white">{eventInfo.startTime}</p>
                                <p className="font-medium text-white">{eventInfo.endTime}</p>
                            </> : <>
                                <p className="font-semibold text-sm text-white">{title}</p>
                                <p className="font-medium text-white text-xs">{description}</p>
                            </>}
                        </div>

                    </div>
                </div>
            </RightClick>
        </>
    )
}

export default DayEvent;