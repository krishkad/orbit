import React from 'react'
import Month from './month';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import MonthHeader from './month-header';
import MonthFooter from './month-footer';

const MonthContainer = () => {

    return (
        <Card className="w-full border-0">
            <CardHeader>
                <MonthHeader />
            </CardHeader>
            <CardContent>
                <Month />
            </CardContent>
            <CardFooter className="max-md:flex hidden justify-between">
                <MonthFooter />
            </CardFooter>
        </Card>
    )
}

export default MonthContainer