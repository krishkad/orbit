"use client"

import * as React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"
import { HotelDetailsProps, columns } from "@/types/index-types"
import { Button } from "../ui/button"
import { EllipsisVertical } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { Card, CardContent } from "../ui/card"


export default function DataTable({ data }: { data: HotelDetailsProps[] }) {

    return (
        <Card>
            <CardContent>

                <Table className="border border-border">
                    <TableHeader>
                        <TableRow className="border-border">
                            <TableHead className="flex items-center gap-2">
                                <Checkbox className="all" />
                                Check
                            </TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead className="w-max " >Hotel</TableHead>
                            <TableHead className="w-max " >Email</TableHead>
                            <TableHead className="w-max " >Website</TableHead>
                            <TableHead className="w-max " >Phone no.</TableHead>
                            <TableHead className="w-max " >Rating</TableHead>
                            <TableHead className="w-max " >Reviews</TableHead>
                            <TableHead className="w-max " >Address</TableHead>
                            <TableHead className="w-max " >Hotel Url</TableHead>
                            <TableHead className="w-max " >Actions</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.length > 0 ? data.map((row, i) => {
                            return <TableRow
                                className="border-border"
                                key={i}
                            >
                                <TableCell className="min-w-[120px] h-full relative aspect-square">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Hotel - {i + 1}
                                        </label>
                                    </div>
                                </TableCell>
                                <TableCell className="min-w-[120px] relative aspect-square">
                                    <Image src={row.hotelCover.includes('https://') ? row.hotelCover : '/placeholder.svg'} width={120} height={120} className="object-cover aspect-square rounded-md shadow-sm" alt={row.title} />
                                </TableCell>
                                <TableCell className="min-w-[230px] max-w-[290px] relative">
                                    {row.title}
                                </TableCell>
                                <TableCell className="h-full relative  text-wrap">
                                    <span className="flex flex-col justify-center">
                                        {typeof (row.emails) !== "string" ? row.emails.map((email, i) => {
                                            return <span className="" key={i}>{email}</span>
                                        }) : row.emails}
                                    </span>
                                </TableCell>
                                <TableCell className="min-w-[200px] max-w-[300px] h-max relative  text-wrap">
                                    <Link href={row.website} target="_blank" className="text-primary hover:underline">{row.website.split('/')[2]}</Link>
                                </TableCell>
                                <TableCell className="min-w-[190px] max-w-[250px] h-max relative  text-wrap">
                                    {row.phoneno}
                                </TableCell>
                                <TableCell className="min-w-[190px] max-w-[250px] h-max relative  text-wrap">
                                    {row.rating}
                                </TableCell>
                                <TableCell className="min-w-[190px] max-w-[250px] h-max relative  text-wrap">
                                    {row.reviews}
                                </TableCell>
                                <TableCell className="min-w-[190px] max-w-[250px] h-max relative text-wrap">
                                    {row.address}
                                </TableCell>
                                <TableCell className="min-w-[190px] max-w-[250px] h-max relative  text-wrap">
                                    <Link href={row.hotelUrl} target="_blank" className="text-primary hover:underline">Visit -&#62; {row.title}</Link>
                                </TableCell>
                                <TableCell className="min-w-[120px] max-w-[130px] h-max relative text-wrap">
                                    <Button variant={'ghost'} size={'icon'}>
                                        <EllipsisVertical className="w-5 h-5" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        })
                            : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}