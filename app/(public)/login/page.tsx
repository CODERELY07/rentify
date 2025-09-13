import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="pb-30">
      <h1 className="text-md border-1 font-medium text-center p-3 pt-5">Log in or sign up</h1>
      <div className="px-7"> 
         <h2 className="font-medium pt-10 pb-7 text-2xl">Welcome To JourNest</h2>
        <Card className="w-full mx-auto shadow-none border-none">
        <CardHeader>
        <CardTitle>Login to your account</CardTitle>
            <CardDescription>
            Enter your email below to login to your account
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                    Forgot your password?
                    </a>
                </div>
                <Input id="password" type="password" required />
                </div>
            </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full cursor-pointer">
            Login
            </Button>
           <div className="flex items-center py-3 gap-4 w-full">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-3 text-sm text-gray-500 bg-white dark:bg-slate-900">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <Button variant="outline" className="w-full  cursor-pointer">
             <FcGoogle/> Login with Google
            </Button>
        </CardFooter>
        </Card>
      </div>
     
    </div>
  )
}

export default Login
