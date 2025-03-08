import Link from "next/link"
import { LogIn } from "lucide-react"

export default function LoginButton() {
    return(
        <div className="xl:pr-3 ">
            <Link href="/login" passHref>
                <div className="text-base sm:text-lg w-auto md:text-2xl  lg:w-full sm:w-auto justify-center px-4 sm:px-7 md:px-7 gap-x-2  border   border-blue-600 rounded-3xl font-normal lg:font-bold flex py-2  md:py-1 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ">
                    <LogIn size={16} className="h-auto" />
                    ورود
                </div>
            </Link>
        </div>
    )
}
