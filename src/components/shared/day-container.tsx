import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import DayHeader from './day-header';
import Day from './day';

const DayContainer = () => {
    return (
        <Card className="w-full border-0">
            <CardHeader>
                <DayHeader />
            </CardHeader>
            <CardContent>
                <Day />
            </CardContent>
            {/* <CardFooter className="flex justify-between">
            </CardFooter> */}
        </Card>
    )
}

export default DayContainer