import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import DataTable from './data-table';
import { HotelDetailsProps } from '@/types/index-types';

const LeadDialog = ({
    data,
    isOpen,
    setIsOpenDialog
}: {
    data: HotelDetailsProps[],
    isOpen: boolean,
    setIsOpenDialog: (value: boolean) => void
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={() => setIsOpenDialog(false)}>
            <DialogContent className='w-[1000px] h-[90vh] border-border' onOpenAutoFocus={(e: any) => e.preventDefault()}>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <div className="w-[1000px]">
                    {data.length > 0 && <DataTable data={data} />}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LeadDialog