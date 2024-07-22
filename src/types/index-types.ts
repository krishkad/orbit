import { ColumnDef } from "@tanstack/react-table"
import { Dayjs } from "dayjs";


export interface HotelDetailsProps {
    title: string;
    hotelCover: string;
    rating: string;
    reviews: string;
    address: string;
    website: string;
    phoneno: string;
    hotelUrl: string;
    emails: string | string[];
};



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<HotelDetailsProps>[] = [
    {
        accessorKey: "hotelCover",
        header: "Image",
    },
    {
        accessorKey: "title",
        header: "Hotel",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "website",
        header: "Website Urls",
    },
    {
        accessorKey: "phoneno",
        header: "Phone No.",
    },
    {
        accessorKey: "rating",
        header: "Rating",
    },
    {
        accessorKey: "reviews",
        header: "Reviews",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "hotelUrl",
        header: "Hotel Url",
    },
]

export interface EventProps {
    id: number,
    title: string,
    description: string,
    top: number,
    color: string,
    height: number,
    day: Dayjs
} 
