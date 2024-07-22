"use client"
import { DndContext, useDraggable } from '@dnd-kit/core';

const DraggablePage = () => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });

    const style = {
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            Drag me
        </div>
    );
};


export default DraggablePage;