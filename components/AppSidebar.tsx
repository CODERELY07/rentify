"use client"
import { Building, Calendar, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Home, Inbox, Plus, Search, Settings, SquarePen } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import property from "@/data/property"
import { usePathname } from "next/navigation"
import clsx from "clsx"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const properties = [
  {
    title: 'View Properties',
    url : '/dashboard/property',
    icon: Building,
  },
  {
    title: 'Modify Properties',
    url : '/dashboard/property/edit',
    icon: SquarePen,
  }
]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Link href="/" className="flex gap-2">
              <Image src="/logo.svg" alt="rentify logo" width={20} height={20}/>
              <span>Rentify</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      {/* <SidebarSeparator/> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className={clsx(
                      {
                        'text-primary font-bold':pathname == item.url,
                      }
                    )}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {
                    item.title === 'Inbox' && (
                      <SidebarMenuBadge>20</SidebarMenuBadge>
                    )
                  }
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
         <SidebarGroup>
          <SidebarGroupLabel>Property</SidebarGroupLabel>
          <SidebarGroupContent>
             <SidebarMenu>
              <SidebarMenuItem>
          
                {
                  properties.map((property) => (
                    <Link key={property.title} href={property.url}
                      className={clsx({
                        'text-primary font-bold':pathname == property.url, 
                      })}
                    > 
                     <SidebarMenuButton>
                        <property.icon />
                        {property.title}
                      </SidebarMenuButton> 
                    </Link>
                  ))
                }
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger className="flex justify-between" asChild>
                <SidebarGroupLabel>  Collapsible
                <ChevronUp className="ml-auto transtion-transform group-data-[state=open]/collapsible:rotate-180"/></SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
              <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Building/>View Properties
                          </SidebarMenuButton>
                          <SidebarMenuButton>
                        <SquarePen />Modify Properties
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
              </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}