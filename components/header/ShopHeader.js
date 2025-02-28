import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ShopHeader({count}) {
    return(
        <div className="relative">
            <Link href="/shop">
                {/* آیکون سبد خرید */}
                <ShoppingCart size={29} color="white" />
  
                {/* نشان تعداد آیتم‌ها */}
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                 0
                </span>
            </Link>
        </div>
    )
}