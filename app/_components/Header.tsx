"use client"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { inter, lusitana } from '../ui/fonts'

const navItems = [
    {label : 'For Sale' , path: '/forsale'},
    {label : 'For Rent' , path: '/forrent'},
    {label : 'Agent Finder' , path: '/agentFinder'},
];

function Header() {
  // current path used in default styling
  const path = usePathname();
//   console.log(path);
  return (
    <div className='flex justify-between p-6 items-center shadow-sm fixed top-0  bg-white w-full z-50'>
        <div className="flex gap-15 items-center">
            <div className='flex items-center gap-4'>
                <Image src='/logo.svg' alt="Logo" width={40} height={40} priority/>
                <h2 className={`${inter.className} antialiased`}>Rentify</h2>
            </div>
           <ul className='hidden md:flex items-center gap-6'>
                {
                    navItems.map(navItem => (
                         <li key={navItem.label} className={`text-sm   font-medium hover:text-primary cursor-pointer ${path == navItem.path && 'text-primary'} `}>{navItem.label}</li>
                    ))
                }
            </ul>
        </div>
        <div className='flex gap-2'>
            <Button className='flex gap-2'><Plus /> Post your Add</Button>
            <Button variant='default'>Login</Button>
        </div>
    </div>
  )
}

export default Header
