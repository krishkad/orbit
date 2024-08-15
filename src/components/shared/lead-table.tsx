"use client";
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DataTable from './data-table'
import { HotelDetailsProps, columns } from '@/types/index-types'
import { scrapeAndStoreBusiness } from '@/actions/scrapeandstore-action';
import { Loader } from 'lucide-react';




const LeadTable = () => {
    const [url, setUrl] = useState('');
    const [hotels, setHotels] = useState<HotelDetailsProps[]>([]);
    const [hotelNumbers, setHotelNumbers] = useState<number>(15);
    const [searchBtn, setSearchBtn] = useState<boolean>(false);

    const handleSearch = (e: any) => {
        e.preventDefault();
        setUrl(e.target.value);
    }

    const handleHotelNumber = (e: any) => {
        e.preventDefault();
        setHotelNumbers(e.target.value);
    }

    const handleScrape = async () => {
        try {
            setSearchBtn(true);
            const response = await scrapeAndStoreBusiness(url, hotelNumbers);
            setHotels(response!);
        } catch (error) {
            console.log(error);
        } finally {
            setSearchBtn(false);
        }
    }

    return (
        <div className='w-full pb-10 space-y-8'>
            <div className="h-16 w-full space-y-2">
                <div className="flex gap-2">
                    <Input name='url' className='focus-visible:ring-0 focus-visible:ring-offset-0 min-w-56 max-w-80' onChange={handleSearch} placeholder='Google maps url..' />
                    <Button onClick={handleScrape} disabled={searchBtn} className='flex items-center gap-2' >{searchBtn ? <><Loader className='w-4 h-4 animate-spin' /> Searching... </> : "Search"} </Button>
                </div>
                <div className="">
                    <Input name='hotelnumbers' className='focus-visible:ring-0 focus-visible:ring-offset-0 max-w-20' onChange={handleHotelNumber} placeholder='No.' />
                </div>
            </div>
            <div className="w-full">
                {hotels.length > 0 && <DataTable data={hotels} />}
            </div>

        </div>
    )
}

export default LeadTable