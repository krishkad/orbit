import { navLinks } from '@/constant/constant';
import { AlignRight, Tag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
    return (
        <nav className='w-full sticky top-0'>
            <div className="max-w-wrapper">
                <div className="w-full h-16 sm:h-20 flex items-center justify-between">
                    <div className="flex items-center justify-center gap-12">
                        <h1 className="flex gap-2 items-center justify-center font-bold text-xl">
                            <Tag className='text-white fill-primary' />
                            Top Leads
                        </h1>
                        <div className="hidden sm:flex items-center justify-center gap-5">
                            {navLinks.map((item, i) => {
                                return <Link href={item.href} className='font-semibold text-sm' key={i}>
                                    {item.label}
                                </Link>
                            })}
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center justify-center">
                        <Link href={'/tools/search-prospect'} className={cn(buttonVariants({ variant: "outline" }), "rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary border-zinc-800 border-solid")}>Start Free Trial</Link>
                    </div>
                    <div className="block sm:hidden">
                        <AlignRight />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;