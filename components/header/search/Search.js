import { Search } from "lucide-react"

export default function Searchicon () {
    return(
        <div className="text-center justify-center  mt-20 w-80 bg-gradient-to-br from-blue-100 to-red-100  mx-auto border border-blue-200 rounded-3xl">
        <p className="text-3xl gap-x-6 flex text-black justify-center items-center">
            دنبال چه چیزی هستی
            <Search className="text-blue-400" /> 
        </p>
    </div>
    )
}