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
import { useTab } from "@/context/tab-context"

const CarouselListings = ({listingType} : {listingType: string}) => {
  const { activeTab } = useTab()
  return (
    <>
         {activeTab === listingType && (
          <div  className="p-4">
            <h2 className="text-xl font-semibold capitalize"> {listingType}</h2>
            <Carousel className="w-full  relative">
            <CarouselContent>
              {property.filter(propertyfilter => propertyfilter.listing_type == listingType).map(property => (
                <CarouselItem 
                  key={property.id} 
                  className="basis-1/2 md:basis-1/3 lg:basis-1/6" 
                >
                  <Card className="relative  w-[100%] h-[300px] md:h-[100%] ">
                    <CardHeader className="absolute top-2 right-2 z-10">
                      <CardAction>
                        <Heart className="w-6 h-6 text-white" fill="rgba(0,0,0,0.6)" />
                      </CardAction>
                    </CardHeader>

                    <CardContent className="relative h-[80%] md:h-45">
                      <Image
                        src={property.image}
                        alt={`${property.area} image`}
                        fill
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <CardTitle>{property.area}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <p>₱{property.price} for 2 nights •</p>
                        <Star className="w-3 h-3" fill="rgba(0,0,0,0.8)" />
                        <span>4.9</span>
                      </CardDescription>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute bg-white shadow-md" />
            <CarouselNext className="absolute bg-white shadow-md" />
            </Carousel>
          </div>
        )}
    </>
  )
}

export default CarouselListings
