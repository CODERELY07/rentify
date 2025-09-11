"use client"
import { Button } from '@/components/ui/button'
import { Menu, MenuSquare, Plus } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { inter, lusitana } from '../ui/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTab } from '@/context/tab-context'

function Header() {
  // current path used in default styling
//   const path = usePathname();
 const { activeTab, setActiveTab } = useTab()
//   console.log(path);
  return (
    <div className="flex justify-between p-6 items-center shadow-sm w-full max-w-full">
        <div className="flex gap-15  w-full justify-between items-center">
            <div className='flex items-center gap-4'>
                {/* <Image src='/logo.svg' alt="Logo" width={40} height={40} priority/> */}
                <h2 className={`${inter.className} antialiased text-primary font-bold text-2xl`}>Rentify</h2>
            </div>
            <div className= 'flex justify-center'>
                <Tabs>
                <TabsList className='p-2 rounded-full'>
                    <TabsTrigger
                        value="home"
                        className='rounded-l-full'
                        onClick={() => setActiveTab("home")}
                        data-state={activeTab === "home" ? "active" : "inactive"}
                    >
                        <Image src="/static/home.png" alt='Home Icon' width={25} height={25} priority/>
                        Homes
                    </TabsTrigger>
                    <TabsTrigger
                        value="experience"
                        className='py-5 px-4 rounded-md'
                        onClick={() => setActiveTab("experience")}
                        data-state={activeTab === "experience" ? "active" : "inactive"}
                    >
                         <Image src="/static/airplane.png" alt='Home Icon' width={25} height={25} priority/>
                        Experience
                    </TabsTrigger>
                    <TabsTrigger
                        value="service"
                        className='rounded-e-full'
                        onClick={() => setActiveTab("service")}
                        data-state={activeTab === "service" ? "active" : "inactive"}
                    >
                         <Image src="/static/customer-service.png" alt='Home Icon' width={25} height={25} priority/>
                        Service
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            </div>
            <div className='flex items-center gap-2'>
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
