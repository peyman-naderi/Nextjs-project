import { X, MenuIcon} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // برای انیمیشن‌ها
import Menu from "./Menu";
import RegistrationButton from "./RegistrationButton"
import LoginButton from "./LoginButton"
import { useSession} from "next-auth/react";
import { LogOut } from "lucide-react"
import Link from "next/link";




export default function Logo() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <div>
            <div className="hidden lg:flex">
                <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="w-auto sm:w-32 md:w-36"
            />
            </div>

            {/* دکمه منوی همبرگری */}
            <div className="flex mr-2 lg:hidden -mt-3">
                <button
                onClick={() => setIsOpen(true)} // باز کردن منو
                className="lg:hidden w-4 h-4"
                >
                <MenuIcon size={32} />
                </button>
            </div>
                {/* منوی کشویی */}
                {isOpen && (
                    <motion.div
                    initial={{ x: "100%" }} // موقعیت اولیه (خارج از صفحه از سمت راست)
                    animate={{ x: 0 }} // موقعیت نهایی (باز شدن به موقعیت 0)
                    exit={{ x: "100%" }} // موقعیت هنگام بسته شدن (بازگشت به راست)
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} // انیمیشن روان
                    className="fixed lg:hidden  top-0 right-0 pr-0 pt-10 w-64 h-full bg-white shadow-lg flex flex-col items-center p-6 space-y-6 z-50"
                    >
                    {/* دکمه بستن منو */}
                    <button
                        onClick={() => setIsOpen(false)} // بستن منو
                        className="absolute top-8 right-6 text-gray-700">
                        
                        <div className="flex items-center lg:hidden justify-between gap-x-20">
                            <div className="lg:hidden flex">
                                <Image 
                                src="/logo.png" 
                                alt="Logo" 
                                width={120} 
                                height={40} 
                                className="w-auto bg-black sm:w-32 md:w-36"
                            />
                            </div>
                            <X size={28} />
                        </div>
    
                        <Menu />
                        {session ? (
                            <div className="flex items-center gap-x-2 lg:hidden mt-5">
                                <span className="text-xl items-center justify-center  text-blue-500 ">سلام، {session.user.name}</span>
                                <Link href="/signout">
                                    <LogOut className="text-blue-500"/>
                                </Link>
                            </div>
                            ) : (
                            <div>
                                <RegistrationButton />        
                                <LoginButton /> 
                            </div>
                            )}
                            </button>
                    </motion.div>
                )}
            
         </div>
    );
}
