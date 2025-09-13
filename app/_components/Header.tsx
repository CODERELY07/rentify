// TODO: Add desktop Search
"use client"
import { Button } from '@/components/ui/button'
import { Menu, MenuSquare, Plus } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { inter, lusitana } from '../ui/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTab } from '@/context/tab-context'
import SearchComponent from '@/components/SearchComponent'

const menus = [
    {
        title: 'home',
        image:'/static/home.png'
    },
    {   
        title: 'experience',
        image: '/static/airplane.png',

    },
    {   
        title: 'service',
        image: '/static/customer-service.png',
    },
]
function Header() {
 const { activeTab, setActiveTab } = useTab()
  return (
    <div className="flex justify-between shadow-xs border-b-1 py-2 border-gray-200 px-6 md:py-0 items-center bg-gray-50 w-full max-w-full"> 
        <div className="flex gap-15  w-full justify-center md:justify-between items-center">
            <div className='items-center gap-4 hidden md:flex'>
                {/* <Image src='/logo.svg' alt="Logo" width={40} height={40} priority/> */}
                <h2 className={`${inter.className} antialiased text-primary font-bold text-2xl `}>Rentify</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <SearchComponent className='md:hidden'/>
                <div className="flex  border-gray-300  p-3 ">
                    {
                        menus.map((menu) => (
                            <div key={menu.title}>
                                <div 
                                    className="relative px-3 py-2 cursor-pointer text-gray-600
                                            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[-10px]
                                            after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300
                                            data-[state=active]:text-black
                                            data-[state=active]:after:w-[60%]"
                                    onClick={() => setActiveTab(`${menu.title}`)}
                                    data-state={activeTab === `${menu.title}` ? "active" : "inactive"}>
                                    <div className="flex items-center px-4 py-3 rounded-l-full cursor-pointer transition-colors">
                                        <Image src={menu.image} className='data-[state=active]:' alt="Service" width={35} height={35} priority />
                                        <p className="ml-2 text-sm font-medium capitalize">{menu.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='hidden items-center gap-2  md:flex'>
                <p className='text-sm'>Become a host</p>
                <div className='bg-gray-100 grid items-center justify-center rounded-4xl w-[40px] h-[40px]'>
                     <MenuSquare height={30}/>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Header
