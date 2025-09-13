// TODO: Review and Learn this 
"use client"

import { useMemo } from "react"
import CarouselListings from "@/components/CarouselListings"
import property from "@/data/property"
import Header from "../_components/Header"
import Footer from "../_components/Footer"

export default function Home() {

  const carousels = useMemo(() => {
    const grouped: { [key: string]: { listingType: string; listings: typeof property } } = {}

    property.forEach((p) => {
      if (!grouped[p.listingTitle]) {
        grouped[p.listingTitle] = {
          listingType: p.listing_type,
          listings: [],
        }
      }
      grouped[p.listingTitle].listings.push(p)
    })

    return Object.entries(grouped).map(([title, data]) => ({
      listingTitle: title,
      listingType: data.listingType,
      listings: data.listings,
    }))
  }, [])
  // console.log(carousels[0].listings)
  return (
    
    <div className="w-full max-w-[1240px] mx-auto px-4 ">
      <Header/>
      {carousels.map((carousel) => (
        <div  key={carousel.listingTitle}>
          <CarouselListings
            listingType={carousel.listingType}
            listingTitle={carousel.listingTitle}
            listings={carousel.listings} 
          />
        </div>
      ))}
      <Footer/>
    </div>
  )
}
