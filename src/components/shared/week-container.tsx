import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import WeekHeader from './week-header'
import Week from './week'
import WeekFooter from './week-footer'


const WeekContainer = () => {
  return (
    <Card className='border-0'>
      <CardHeader>
        <WeekHeader />
      </CardHeader>
      <CardContent className=''>
        <Week />
      </CardContent>
      <CardFooter className='flex md:hidden gap-2 items-center justify-start'>
        <WeekFooter />
      </CardFooter>
    </Card>
  )
}

export default WeekContainer