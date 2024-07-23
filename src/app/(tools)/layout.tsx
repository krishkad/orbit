"use client";
import React, { ReactNode } from 'react';

import ToolsSidebar from '@/components/shared/tools-sidebar';
import ToolsNavbar from '@/components/shared/tools-navbar';


const ToolsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full'>
            <div className="flex min-h-screen w-full ">
                <ToolsSidebar />
                <div className="w-full sm:pl-14">
                    {/* <div className="flex flex-col sm:gap-4 sm:py-4 "> */}
                    <div className="w-full flex flex-col">
                        <ToolsNavbar />
                        <div className="w-full min-h-[calc(100dvh-60px)] overflow-hidden rounded-[0.5rem] px-4 bg-secondary md:pb-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolsLayout;