"use client"
import Logo from "./Logo"
import Menu from "./Menu"
import Search from "./SearchHeader"
import ShopHeader from "./ShopHeader"
import RegistrationButton from "./RegistrationButton"
import LoginButton from "./LoginButton"
import { LogOut } from "lucide-react"
import { useSession, signOut } from "next-auth/react";



 export default function Header() {
    const { data: session } = useSession();


    return(
        <>


        <header>
            <div
             className="continer items-center pt-9 px-12 w-full justify-between" style={{
                backgroundImage: `url("/bg.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                }}>
                    
                    <div className="flex justify-between ">
                        <div className="flex gap-x-16 items-center ">      
                            <Logo />
                            <Menu />
                        </div>
                        <div className="flex items-center">
                            <Search />
                            <ShopHeader />

                            {session ? (
                            <div className="flex pr-3 items-center gap-x-2">
                                <span className="text-xl items-center text-gray-300">سلام، {session.user.name}</span>
                                <button onClick={() => signOut()}>
                                <LogOut className="text-gray-300"/>
                                </button>
                            </div>
                            ) : (
                            <div className="flex gap-4">
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
