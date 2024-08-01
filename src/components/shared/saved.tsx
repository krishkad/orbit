"use client"
import React from 'react'
import { DndContext, useDraggable } from '@dnd-kit/core';
import DraggablePage from './draggable';
import StickyTable from './example';




const Saved = () => {
  return (
    <div className='w-full h-screen'>
      <StickyTable />
    </div>
  )
}

export default Saved;

