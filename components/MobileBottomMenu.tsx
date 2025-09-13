"use client"
import clsx from "clsx"
import { Heart, Search, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const menus = [
    {
        title: 'Explore',
        icon : Search,
        url: '/'
    },
    {
        title: 'Wishlist',
        icon : Heart,
        url: '/wishlist'
    },
    {
        title: 'Log in',
        icon : User,
        url: '/login'
    },
]


const MobileBottomMenu = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
        if(window.scrollY > lastScrollY){
            setVisible(false);
        }else{
            setVisible(true)
        }
        setLastScrollY(window.scrollY);
    }

      window.addEventListener('scroll',handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  }, [lastScrollY])

  return (
        <div
        className={clsx(
            "p-3 z-10 shadow-2xl border-t border-gray-200 bg-white w-full flex justify-center items-center md:hidden space-x-15 text-gray-600 fixed bottom-0 transition-transform duration-300",
            visible ? "translate-y-0" : "translate-y-full"
        )}
        >
        {
            menus.map((menu) => (
                <Link href={menu.url} key={menu.title} className={clsx(
                        "flex flex-col cursor-pointer items-center",
                            {"text-primary" : menu.url === pathname} 
                        )}>
                    <menu.icon height={30}/>
                    <span className="text-xs ">{menu.title}</span>
                </Link>
            ))
        }
    </div>
  )
}

export default MobileBottomMenu
