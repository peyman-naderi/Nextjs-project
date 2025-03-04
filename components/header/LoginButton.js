import Link from "next/link"
import { LogIn } from "lucide-react"

export default function LoginButton() {
    return(
        <div className="pr-3">
            <Link href="/login">
                  <div className="text-2xl px-7 gap-x-3 border border-blue-600 rounded-3xl font-bold flex py-1 bg-blue-600">
                        <LogIn size={16} className="h-auto" />
                        <button>
                            ورود
                        </button>
                  </div>
            </Link>
        </div>
    )
}

