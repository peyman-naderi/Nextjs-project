"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/context/CartShop";

export default function ShopHeader({ count }) {
  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, Product) => sum + Product.quantity,
    0
  );

  return (
    <div className="relative ">
      <Link href="/shop">
        {/* آیکون سبد خرید */}
        <ShoppingCart size={29} color="white" />

        {/* نشان تعداد آیتم‌ها */}
        <span className="absolute -top-1 mx-auto my-auto -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {productCount}
        </span>
      </Link>
    </div>
  );
}
