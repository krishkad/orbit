import React from 'react'
import { DropdownMenuItem } from '../ui/dropdown-menu';
import { useTheme } from 'next-themes';

const ToolsDarkTog = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>{theme === 'light' ?
            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem> :
            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        }
        </>
    )
}

export default ToolsDarkTog