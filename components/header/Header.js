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
    

    return(
        <>
        <header className=" w-full min-h-[80px]"> 
            <div
             className=" pt-9 xl:px-14 px-4 sm:px-8 lg:px-2" style={{
              backgroundImage: `url("/bg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                }}>
                    <div className="flex  justify-between ">
                        <div className="flex gap-x-8  xl:gap-x-16 items-center ">  
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
                                <span className="text-xl items-center text-gray-300">سلام، {session.user.name}</span>
                                <Link href="/signout">
                                    <LogOut className="text-gray-300"/>
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