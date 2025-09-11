"use client"
import { 
  Card, CardAction, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card-user"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import property from "@/data/property"
import { Heart, Star } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTab } from "@/context/tab-context"
import CarouselListings from "@/components/CarouselListings"

export default function Home() {
  const { activeTab } = useTab()
  return (
    <div className="w-full max-w-[1240px] mx-auto p-4">
      <div>
       <CarouselListings listingType="home"/>
       <CarouselListings listingType="experience"/>
       <CarouselListings listingType="service"/>

       
      </div>

     
    </div>
  )
}
