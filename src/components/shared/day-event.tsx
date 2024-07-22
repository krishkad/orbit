"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { calculateStartAndEndTimes, cn, getTimeInHours, roundToNearestDay, roundToNearestFive } from '@/lib/utils';
import dayjs from 'dayjs';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { RightClick } from './right-click';


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
    const [yAxis, setYAxis] = useState(top);
    const [xAxis, setXAxis] = useState(0);
    const [onDragStart, setOnDragStart] = useState(false);
    const [xDrag, setXDrag] = useState(false);
    const ref: any = useRef();
    const { attributes, listeners, transform, setNodeRef } = useDraggable({
        id: eventInfo.id,
        data: { ...eventInfo, setEventInfo }
    });





    useDndMonitor({
        onDragStart(event) {
            if (event.active.id === eventInfo.id) {
                setOnDragStart(true);
            }

        },
        onDragMove(event) {
            if (event.active.id === eventInfo.id) {
                const ParentRect = parentRef.current.getBoundingClientRect();
                const EventRect = ref.current.getBoundingClientRect();
                if (Math.abs(event.delta.x) > ((EventRect.right - EventRect.left) / 2)) {
                    if (!xDrag) {
                        console.log('x drag runnng...')
                        setXDrag(true);
                    }

                }
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
        onDragOver(event) {

        },
        onDragEnd(event) {
            if (event.active.id === eventInfo.id) {
                setXDrag(false);
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
                setOnDragStart(false)

            }
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
                    transform: eventType === 'week' ? (!xDrag ? `translateY(${(yAxis + (transform ? roundToNearestFive(transform?.y) : 0))}px)` : `translate3d(${xAxis + (transform ? roundToNearestDay(transform.x, ref3.current.getBoundingClientRect()) : 0)}px, ${yAxis + (transform ? roundToNearestFive(transform?.y) : 0)}px, 0)`) : eventType === 'day' ? `translateY(${(yAxis + (transform ? roundToNearestFive(transform?.y) : 0))}px)` : '',
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