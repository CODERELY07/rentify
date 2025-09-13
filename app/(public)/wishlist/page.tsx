import { Button } from "@/components/ui/button"

const WishList = () => {
  return (
    <div className="p-7">
      <h1 className="pb-7 text-[2.1rem] font-medium">Wishlists</h1>
      <div className="leading-6 pb-5">
         <h2 className="font-medium text-2xl">Log in to view your wishlist</h2>
         <p className="text-muted-foreground text-md">You can create, view, or edit wishlists once you’ve logged in.</p>
      </div>
      <Button className="text-md cursor-pointer font-bold p-6">
        Log in
      </Button>
    </div>
  )
}

export default WishList
