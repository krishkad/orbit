"use client";

import React, { ReactNode } from 'react'
// import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <NextThemesProvider attribute="class">
            {children}
        </NextThemesProvider>
    )
}

export default ThemeProvider