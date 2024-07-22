"use client"
import React from 'react'
import { DndContext, useDraggable } from '@dnd-kit/core';
import DraggablePage from './draggable';




const Saved = () => {
  return (
    <div className='w-full h-screen'>
      <DndContext>
        <DraggablePage />
      </DndContext>
    </div>
  )
}

export default Saved;

