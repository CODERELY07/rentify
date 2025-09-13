"use client"

import clsx from "clsx"
import { Search } from "lucide-react"

const SearchComponent = ({className} : {className : string}) => {
  return (
    <div className={clsx(
        "flex cursor-pointer gap-2 items-center border-gray-200 border-1 justify-center shadow-lg w-full rounded-full mx-3 p-[18px]" ,
        className
      )}>
      <Search height={15} />
      <span className="text-sm text-foreground font-medium">Search Your Place</span>
    </div>
  )
}

export default SearchComponent
