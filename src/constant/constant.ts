import { generateUID } from "@/lib/utils";
import { HotelDetailsProps } from "@/types/index-types";
import dayjs from "dayjs";

export const navLinks = [
    {
        label: "Products",
        href: "/"
    },
    {
        label: "Features",
        href: "/"
    },
    {
        label: "Pricing",
        href: "/"
    },
    {
        label: "Support",
        href: "/"
    },
];


export const data: HotelDetailsProps[] = [
    {
        title: 'The Hotel Carmel',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipN-yJ50WOAf5Jn52RHuy_N7nhqW9QRWAmhSihmv=w447-h298-k-no',
        rating: '4.2 stars ',
        reviews: '201 reviews',
        address: '4th &, San Carlos St, Carmel-By-The-Sea, CA 93921, United States',
        website: 'https://www.thehotelcarmel.com/',
        phoneno: '+1 855-622-7635',
        hotelUrl: 'https://www.google.com/maps/place/The+Hotel+Carmel/data=!4m10!3m9!1s0x808de66afdb65255:0x2d2e25e00ac8706!5m2!4m1!1i2!8m2!3d36.5582706!4d-121.9214609!16s%2Fg%2F11cm_htvwd!19sChIJVVK2_WrmjYARBoesAF7i0gI?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'La Playa Hotel',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipPyA8jNV-_XqALr44BMtnxzDzxzWa9DjWOSLmKF=w397-h298-k-no',
        rating: '4.4 stars ',
        reviews: '576 reviews',
        address: 'Camino Real &, 8th Ave, Carmel-By-The-Sea, CA 93921, United States',
        website: 'https://www.laplayahotel.com/',
        phoneno: '+1 800-582-8900',
        hotelUrl: 'https://www.google.com/maps/place/La+Playa+Hotel/data=!4m10!3m9!1s0x808de63fb5a9b445:0xe029ed35a2e2e132!5m2!4m1!1i2!8m2!3d36.5523196!4d-121.9262382!16s%2Fg%2F1tftfk08!19sChIJRbSptT_mjYARMuHiojXtKeA?authuser=0&hl=en&rclk=1',
        emails: 'N/A'
    },
    {
        title: 'Tradewinds Carmel',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipPzy2cRAjUl_lQGqhtmswWyuGLF-pvjmxdwPBPT=w452-h298-k-no',
        rating: '4.6 stars ',
        reviews: '199 reviews',
        address: 'Mission Street at, 3rd Ave, Carmel-By-The-Sea, CA 93921, United States',
        website: 'https://www.tradewindscarmel.com/?utm_source=gmb&utm_medium=yext',
        phoneno: '+1 831-624-2776',
        hotelUrl: 'https://www.google.com/maps/place/Tradewinds+Carmel/data=!4m10!3m9!1s0x808de66ba55ab17f:0xf6cf7ae028123686!5m2!4m1!1i2!8m2!3d36.5589599!4d-121.9207839!16s%2Fg%2F1tmqm02b!19sChIJf7FapWvmjYARhjYSKOB6z_Y?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'The Normandy Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNlTjPoqRK0oek4hQRZDdMX4vEoHgMM7q6J-Lp9=w224-h398-k-no',
        rating: '4.3 stars ',
        reviews: '338 reviews',
        address: 'between Monte Verde St.and, Ocean Ave, Casanova St, Carmel- By - The - Sea, CA 93921, United States',
        website: 'http://www.normandyinncarmel.com/',
        phoneno: '+1 831-624-3825',
        hotelUrl: 'https://www.google.com/maps/place/The+Normandy+Inn/data=!4m10!3m9!1s0x808de61555c88365:0x5aade3e1b4af0bb2!5m2!4m1!1i2!8m2!3d36.5548972!4d-121.92475!16s%2Fg%2F1thd20l9!19sChIJZYPIVRXmjYARsguvtOHjrVo?authuser=0&hl=en&rclk=1',
        emails: 'N/A'
    },
    {
        title: 'Carmel Resort Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNZjlTp-HZm_UW1h9-qrf5esP1ELIE-5Z4Q-qKu=w397-h298-k-no',
        rating: '4.0 stars ',
        reviews: '439 reviews',
        address: 'Carpenter St & 1st Avenue, Carmel-By-The-Sea, CA 93921, United States',
        website: 'http://www.carmelresortinncottages.com/',
        phoneno: '+1 831-601-4003',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Resort+Inn/data=!4m10!3m9!1s0x808de66da96dc821:0x53f3cd3c9c1d55bf!5m2!4m1!1i2!8m2!3d36.560959!4d-121.9157846!16s%2Fg%2F1tjfbhbd!19sChIJIchtqW3mjYARv1UdnDzN81M?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: "L'Auberge Carmel",
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNx7h8fmQ374VmiFRjUnNuJHe3STpDA5-UdD2n4=w373-h298-k-no',
        rating: '4.6 stars ',
        reviews: '215 reviews',
        address: 'Monte Verde St &, 7th Ave, Carmel-By-The-Sea, CA 93923, United States',
        website: 'http://www.laubergecarmel.com/',
        phoneno: '+1 831-624-8578',
        hotelUrl: 'https://www.google.com/maps/place/L%27Auberge+Carmel/data=!4m10!3m9!1s0x808de615622d7553:0x794ffb792c1d5b01!5m2!4m1!1i2!8m2!3d36.5540365!4d-121.9242047!16s%2Fg%2F1tm0c0t4!19sChIJU3UtYhXmjYARAVsdLHn7T3k?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Comfort Inn Carmel By the Sea',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipPma-6XB1YW1tQTg99k7N7tu29WFD5SyDzIiajN=w372-h298-k-no',
        rating: '4.2 stars ',
        reviews: '223 reviews',
        address: 'Ocean Ave &, Torres St, Carmel - By - The - Sea, CA 93921, United States',
        website: 'https://www.choicehotels.com/california/carmel/comfort-inn-hotels/ca845?mc=llgoxxpx',
        phoneno: '+1 831-622-7090',
        hotelUrl: 'https://www.google.com/maps/place/Comfort+Inn+Carmel+By+the+Sea/data=!4m10!3m9!1s0x808de613660d64f5:0xcf4cac2ba4eabe29!5m2!4m1!1i2!8m2!3d36.5554239!4d-121.9193622!16s%2Fg%2F1hc64l22l!19sChIJ9WQNZhPmjYARKb7qpCusTM8?authuser=0&hl=en&rclk=1',
        emails: 'N/A'
    },
    {
        title: 'Carmel Inn & Suites',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNzfdes8P6p8TFVRdTzcxZ0U9xgG0wSxf7oL_b4=w530-h298-k-no',
        rating: '3.7 stars ',
        reviews: '226 reviews',
        address: 'NE Junipero St &, 5th Ave, Carmel-By-The-Sea, CA 93921, United States',
        website: 'https://www.carmelinnandsuites.com/',
        phoneno: '+1 831-624-1900',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Inn+%26+Suites/data=!4m10!3m9!1s0x808de66b4bf73fa9:0xc3729c66f2576846!5m2!4m1!1i2!8m2!3d36.5570582!4d-121.9197236!16s%2Fg%2F1vm7bpk0!19sChIJqT_3S2vmjYARRmhX8maccsM?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Hofsas House Hotel',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipOPsfvf4OdFLKfjyaSdZQvYhhhKji8t-B8o5hE9=w455-h298-k-no',
        rating: '4.4 stars ',
        reviews: '353 reviews',
        address: 'San Carlos St, Carmel-By-The-Sea, CA 93921, United States',
        website: 'http://www.hofsashouse.com/',
        phoneno: '+1 831-624-2745',
        hotelUrl: 'https://www.google.com/maps/place/Hofsas+House+Hotel/data=!4m10!3m9!1s0x808de66a53be742b:0x77c7c3eb5037a584!5m2!4m1!1i2!8m2!3d36.5588365!4d-121.9221322!16s%2Fg%2F1tf9yn93!19sChIJK3S-U2rmjYARhKU3UOvDx3c?authuser=0&hl=en&rclk=1',
        emails: 'N/A'
    },
    {
        title: 'Carmel Country Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipOcRAoCXdUe6b2t8AAIImn8n7GWjGttj2OPkl90=w447-h298-k-no',
        rating: '4.7 stars ',
        reviews: '156 reviews',
        address: 'Dolores Street, 3rd Ave, Carmel - By - The - Sea, CA 93921, United States',
        website: 'https://www.carmelcountryinn.com/?utm_source=google&utm_medium=organic&utm_campaign=googlemybusiness',
        phoneno: '+1 831-625-3263',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Country+Inn/data=!4m10!3m9!1s0x808de66a467b2f49:0x74325cc1e3c2b6cb!5m2!4m1!1i2!8m2!3d36.5591761!4d-121.9226158!16s%2Fg%2F1tmqgfnf!19sChIJSS97RmrmjYARy7bC48FcMnQ?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Carmel Bay View Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipOmyKncw9_cHea5rCoRC_oc52Br6qH_5cMRhhDA=w530-h298-k-no',
        rating: '4.3 stars ',
        reviews: '600 reviews',
        address: 'between 5th and, Junipero Street, 6th Ave, Carmel-By-The-Sea, CA 93921, United States',
        website: 'https://www.carmelbayviewinn.com/?utm_source=local-directories&utm_medium=organic&utm_campaign=travelclick-localconnect',
        phoneno: '+1 831-624-1831',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Bay+View+Inn/data=!4m10!3m9!1s0x808de66ac2355985:0xc1850c339b4b483d!5m2!4m1!1i2!8m2!3d36.5561579!4d-121.9198414!16s%2Fg%2F1tdgkh6r!19sChIJhVk1wmrmjYARPUhLmzMMhcE?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Cypress Inn',
        hotelCover: 'https://lh3.googleusercontent.com/gps-proxy/ALd4DhHQrkM5CcgrtYzq8o6Wg0NkNEQK1y5rLjL0jj5xZzQaT1iZUxzhhpq1KNsNjImBmX_7ancoWNosWPq16LbzTyUBta3ZCRdW3CUi-Pxvgcixm4tKdbExqWzjqRxRdmZmriZZrO_aK7ML8VOihXW7YCedjGD9mQhd92S9VpOl-Slt7lvHSnGXShh4tLugzbQjZDfpEx4=w446-h298-k-no',
        rating: '4.5 stars ',
        reviews: '437 reviews',
        address: 'Lincoln St & 7 Ave, Carmel - By - The - Sea, CA 93921, United States',
        website: 'http://www.cypress-inn.com/',
        phoneno: '+1 831-624-3871',
        hotelUrl: 'https://www.google.com/maps/place/Cypress+Inn/data=!4m10!3m9!1s0x808de6156e1b431b:0x26c5b95e44722f43!5m2!4m1!1i2!8m2!3d36.553977!4d-121.9234444!16s%2Fg%2F1tdnlbt_!19sChIJG0MbbhXmjYARQy9yRF65xSY?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Carmel Fireplace Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNArEa5TYoendGYSS5sPJOfK2L_eTTx8ImB7yK9=w397-h298-k-no',
        rating: '4.0 stars ',
        reviews: '156 reviews',
        address: 'San Carlos Street between 5th Ave and, 4th Ave, Carmel-By-The-Sea, CA 93921, United States',
        website: 'http://www.fireplaceinncarmel.com/',
        phoneno: '+1 831-624-4862',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Fireplace+Inn/data=!4m10!3m9!1s0x808de66afdb65255:0xfa24f3be1de5805!5m2!4m1!1i2!8m2!3d36.5577685!4d-121.9220417!16s%2Fg%2F1tdfhxtb!19sChIJVVK2_WrmjYARBVje4TtPog8?authuser=0&hl=en&rclk=1',
        emails: 'N/A'
    },
    {
        title: 'Carmel Garden Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipNj1MKebKtOGFn2qy24VFOrpJ1HfzxWydEe8SQT=w224-h298-k-no',
        rating: '4.6 stars ',
        reviews: '96 reviews',
        address: '4th Ave and, Torres St, Carmel - By - The - Sea, CA 93921, United States',
        website: 'http://carmelgardeninn.com/',
        phoneno: '+1 831-624-6926',
        hotelUrl: 'https://www.google.com/maps/place/Carmel+Garden+Inn/data=!4m10!3m9!1s0x808de66b6082464f:0x7c6e76808cd672ba!5m2!4m1!1i2!8m2!3d36.5582102!4d-121.9192601!16s%2Fg%2F1tr7jm56!19sChIJT0aCYGvmjYARunLWjIB2bnw?authuser=0&hl=en&rclk=1',
        emails: []
    },
    {
        title: 'Pine Inn',
        hotelCover: 'https://lh5.googleusercontent.com/p/AF1QipPozWE_t1wz1vckVkkbZSpUlef_lR6Ajy4OCtA5=w349-h298-k-no',
        rating: '4.1 stars ',
        reviews: '360 reviews',
        address: 'Ocean Ave &, Lincoln St, Carmel-By-The-Sea, CA 93921, United States',
        website: 'http://pineinn.com/',
        phoneno: '+1 831-624-3851',
        hotelUrl: 'https://www.google.com/maps/place/Pine+Inn/data=!4m10!3m9!1s0x808de50f126c1bdd:0x9a499684b6a6e95a!5m2!4m1!1i2!8m2!3d36.5555756!4d-121.9238661!16s%2Fg%2F1tdn49wg!19sChIJ3RtsEg_ljYARWummtoSWSZo?authuser=0&hl=en&rclk=1',
        emails: []
    }

];

export const dayHeader = [
    {
        day: 'sun',
        Label: "SUN",
        bg: "bg-[#f94144]",
        text: "text-white",
        hoverBg: "hover:bg-[#f94144] hover:text-white",
        active: "bg-[#f94144] text-white"
    },
    {
        day: 'mon',
        Label: "MON",
        bg: "bg-[#f3722c]",
        text: "text-white",
        hoverBg: "hover:bg-[#f3722c] hover:text-white",
        active: "bg-[#f3722c] text-white"
    },
    {
        day: 'tue',
        Label: "TUE",
        bg: "bg-[#f8961e]",
        text: "text-white",
        hoverBg: "hover:bg-[#f8961e] hover:text-white",
        active: "bg-[#f8961e] text-white"
    },
    {
        day: 'wed',
        Label: "WED",
        bg: "bg-[#f9c74f]",
        text: "text-white",
        hoverBg: "hover:bg-[#f9c74f] hover:text-white",
        active: "bg-[#f9c74f] text-white"
    },
    {
        day: 'thu',
        Label: "THU",
        bg: "bg-[#90be6d]",
        text: "text-white",
        hoverBg: "hover:bg-[#90be6d] hover:text-white",
        active: "bg-[#90be6d] text-white"
    },
    {
        day: 'fri',
        Label: "FRI",
        bg: "bg-[#43aa8b]",
        text: "text-white",
        hoverBg: "hover:bg-[#43aa8b] hover:text-white",
        active: "bg-[#43aa8b] text-white"
    },
    {
        day: 'sat',
        Label: "SAT",
        bg: "bg-[#577590]",
        text: "text-white",
        hoverBg: "hover:bg-[#577590] hover:text-white",
        active: "bg-[#577590] text-white"
    },
];

export const MonthsTitle = [
    {
        value: 'jan',
        Label: "Jan"
    },
    {
        value: 'feb',
        Label: "Feb"
    },
    {
        value: 'mar',
        Label: "Mar"
    },
    {
        value: 'apr',
        Label: "Apr"
    },
    {
        value: 'may',
        Label: "May"
    },
    {
        value: 'jun',
        Label: "Jun"
    },
    {
        value: 'jul',
        Label: "Jul"
    },
    {
        value: 'aug',
        Label: "Aug"
    },
    {
        value: 'sep',
        Label: "Sep"
    },
    {
        value: 'oct',
        Label: "Oct"
    },
    {
        value: 'nov',
        Label: "Nov"
    },
    {
        value: 'dec',
        Label: "Dec"
    },
];


export const sampleWeekEvents = [
    {
        id: generateUID(),
        title: "Event 1",
        description: "Event Description",
        top: 0,
        color: 'bg-primary',
        height: 120,
        day: dayjs(new Date(2024, 6, new Date().getDate()))
    },
    {
        id: generateUID(),
        title: "Event 2",
        description: "Event Description",
        top: 540,
        color: 'bg-[#feb94a]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate()))
    },
    {
        id: generateUID(),
        title: "Event 3",
        description: "Event Description",
        top: 300,
        color: 'bg-[#0d9937]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate()))
    },
    {
        id: generateUID(),
        title: "Event 4",
        description: "Event Description",
        top: 120,
        color: 'bg-[#ff595e]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate()))
    },
    {
        id: generateUID(),
        title: "Event 5",
        description: "Event Description",
        top: 660,
        color: 'bg-[#ff6600]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate()))
    },
    {
        id: generateUID(),
        title: "Event 1",
        description: "Event Description",
        top: 0,
        color: 'bg-primary',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() - 1))
    },
    {
        id: generateUID(),
        title: "Event 2",
        description: "Event Description",
        top: 540,
        color: 'bg-[#feb94a]',
        height: 240,
        day: dayjs(new Date(2024, 6, new Date().getDate() - 1))
    },
    {
        id: generateUID(),
        title: "Event 3",
        description: "Event Description",
        top: 300,
        color: 'bg-[#0d9937]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() - 1))
    },
    {
        id: generateUID(),
        title: "Event 4",
        description: "Event Description",
        top: 120,
        color: 'bg-[#ff595e]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() - 1))
    },
    {
        id: generateUID(),
        title: "Event 5",
        description: "Event Description",
        top: 660,
        color: 'bg-[#ff6600]',
        height: 120,
        day: dayjs(new Date(2024, 6, new Date().getDate() - 1))
    },
    {
        id: generateUID(),
        title: "Event 1",
        description: "Event Description",
        top: 0,
        color: 'bg-primary',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() + 1))
    },
    {
        id: generateUID(),
        title: "Event 2",
        description: "Event Description",
        top: 540,
        color: 'bg-[#feb94a]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() + 1))
    },
    {
        id: generateUID(),
        title: "Event 3",
        description: "Event Description",
        top: 300,
        color: 'bg-[#0d9937]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() + 1))
    },
    {
        id: generateUID(),
        title: "Event 4",
        description: "Event Description",
        top: 120,
        color: 'bg-[#ff595e]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() + 3))
    },
    {
        id: generateUID(),
        title: "Event 5",
        description: "Event Description",
        top: 660,
        color: 'bg-[#ff6600]',
        height: 60,
        day: dayjs(new Date(2024, 6, new Date().getDate() + 1))
    },




];
export const sampleEvents = [
    {
        id: generateUID(),
        title: "Event 1",
        description: "Event Description",
        top: 0,
        height: 60,
        color: 'bg-primary'
    },
    {
        id: generateUID(),
        title: "Event 2",
        description: "Event Description",
        top: 540,
        height: 60,
        color: 'bg-[#feb94a]'
    },
    {
        id: generateUID(),
        title: "Event 3",
        description: "Event Description",
        top: 300,
        height: 60,
        color: 'bg-[#0d9937]'
    },
    {
        id: generateUID(),
        title: "Event 4",
        description: "Event Description",
        top: 120,
        height: 60,
        color: 'bg-[#ff595e]'
    },
    {
        id: generateUID(),
        title: "Event 5",
        description: "Event Description",
        top: 660,
        height: 60,
        color: 'bg-[#ff6600]'
    },
];
