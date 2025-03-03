import { Search } from "lucide-react"
import Link from "next/link"

export default function SearchHeader() {
    return(
        <div className="text-red-400 pl-7">
            <Link href="/search">
                <Search size={28} color="white" /> 
            </Link>
        </div>
    )
}