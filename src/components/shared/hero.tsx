import React from 'react'
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <div className='w-full'>
            <main className="max-w-wrapper">
                <div className="w-full pt-16 flex flex-col items-center justify-center">
                    <h1 className="font-extrabold text-4xl text-center">Say goodbye to hassle. <br className='max-sm:hidden' />Prospecting as been easy as ever</h1>
                    <p className="text-sm text-muted-foreground text-center pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, pariatur eaque? <br className='max-sm:hidden' />Esse eveniet voluptatibus ex ea!</p>
                    <Link href={'/tools/search-prospect'} className={cn(buttonVariants({ size: "default" }), "rounded-full text-sm font-semibold border text-foreground border-zinc-800 border-solid mt-4  bg-transparent hover:bg-primary hover:text-white hover:border-primary")}>Start Free Trial</Link>
                </div>
            </main>
        </div>
    )
}

export default Hero;