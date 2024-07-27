"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { calculateStartAndEndTimes, cn, generateUID, getTimeInHours, roundToNearestDay, roundToNearestFive } from '@/lib/utils';
import dayjs from 'dayjs';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { RightClick } from './right-click';
import { ActiveDraggableContext } from '@dnd-kit/core/dist/components/DndContext';


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
        // Update eventInfo whenever top, height, or day props change
        setEventInfo(prevEventInfo => ({
            ...prevEventInfo,
            id,
            top,
            height,
            day,
            startTime: getTimeInHours(top)
        }));
        setYAxis(top);
    }, [top, height, day, id]);

    const [yAxis, setYAxis] = useState(eventInfo.top);
    const [xAxis, setXAxis] = useState(0);
    const [onDragStart, setOnDragStart] = useState(false);
    const ref: any = useRef();
    const { attributes, listeners, transform, setNodeRef } = useDraggable({
        id,
        data: { ...eventInfo, setEventInfo }
    });



    useEffect(() => {
        console.log({ event: { ...eventInfo, title, proptop: top, propheight: height } });
        console.log({ id });
        console.log({ eventID: eventInfo.id });
        console.log({ eventOnly: eventInfo })
    }, [top])



    useDndMonitor({
        onDragStart(event) {
            if (event.active.id === id) {
                setOnDragStart(true);
            }

        },
        onDragMove(event) {
            if (event.active.id === id && event?.active?.data?.current?.day.format("YYYY-MM-DD") === event?.over?.id) {

                console.log('day-event-drag-move')
                console.log({ active: event.active.id })
                console.log({ eventInfo: title })
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
            if (event.active.id === id && event?.active?.data?.current?.day.format("YYYY-MM-DD") === event?.over?.id) {
                console.log('day-event-drag-end')
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
                }))
                setYAxis(roundToFive);
            }
            setOnDragStart(false)

        },
        onDragCancel(event) { },
    });







    return (
        <>
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
        </>
    )
}

export default DayEvent;