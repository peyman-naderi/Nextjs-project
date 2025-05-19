"use client"
import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./SearchHeader"
import ShopHeader from "./ShopHeader"
import RegistrationButton from "./RegistrationButton"
import LoginButton from "./LoginButton"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { useSession} from "next-auth/react";
 



 export default function Header() {
    const { data: session } = useSession();
    
    //  throw new Error("");  => برای تست صفحه خطایابی
    return(
        <>
        <header className=" w-full min-h-[80px]"> 
            <div className=" pt-9 xl:px-14 px-4 sm:px-8 lg:px-4">
                    <div className="flex w-full justify-between ">
                        <div className="flex gap-x-8  2xl:gap-x-14  xl:gap-x-8 items-center ">  
                            <Logo />
                            <div className="hidden lg:flex">
                              <Menu/>
                            </div>
                            
                        </div>
                        <div className="flex items-center">
                            <Search />
                            <ShopHeader />
                            {session ? (
                            <div className="hidden lg:flex pr-3 items-center gap-x-2">
                                <span className="text-xl items-center text-white">سلام، {session.user.name}</span>
                                <Link href="/signout">
                                    <LogOut className="text-white"/>
                                </Link>
                            </div>
                            ) : (
                            <div className="lg:flex items-center hidden md:gap-x-3">
                                <RegistrationButton />        
                                <LoginButton /> 
                            </div>
                            )}
                        </div>
                    </div>
                </div>
        </header>

      </>
    )
}