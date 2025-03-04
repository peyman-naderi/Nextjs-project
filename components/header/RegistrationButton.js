import Link from "next/link"
import { CircleUserRound } from "lucide-react"

export default function RegistrationButton() {
    return(
        <div className="pr-5">
            <Link href="/regester">
                  <div className="text-2xl px-6 gap-x-3 border border-white rounded-3xl font-bold flex py-1">
                        <CircleUserRound size={16} className="h-auto"/>
                        <button>
                            ثبت نام
                        </button>
                  </div>
            </Link>
        </div>
    )
}