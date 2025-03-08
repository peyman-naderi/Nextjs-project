import Link from "next/link"
import { LogIn } from "lucide-react"

export default function LoginButton() {
    return(
        <div className="xl:pr-3 hidden lg:flex">
            <Link href="/login" passHref>
                <div className="text-base sm:text-lg md:text-2xl px-4 sm:px-6 md:px-7 gap-x-1 border border-blue-600 rounded-3xl font-bold flex py-2 sm:py-2 md:py-1 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full sm:w-auto">
                    <LogIn size={16} className="h-auto" />
                    ورود
                </div>
            </Link>
        </div>
    )
}
