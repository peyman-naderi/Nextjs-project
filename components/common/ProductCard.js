"use client";
import { User, Clock, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/context/CartShop";
export default function Productcart({ product }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col justify-between">
      {/* تصویر */}
      <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64">
        <Image
          src={product.imagsrc}
          alt={product.titlebig}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
          priority
        />
      </div>

      {/* محتوا */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-lg md:text-xl text-black font-bold">
            {product.titlebig}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            {product.titlesmol}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2 text-gray-600 text-xs sm:text-sm md:text-base">
              <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span>{product.titlename}</span>
            </div>
            {productQuantity > 0 ? (
              <div className="text-green-600 text-xs sm:text-sm md:text-base">
                انجام شد
              </div>
            ) : (
              <div onClick={() => cart.addItemToCart(product.id)}>
                <ShoppingCart className="text-blue-600  w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-3 mt-4 text-sm sm:text-base">
          <div className="flex items-center gap-x-1 text-green-600 font-semibold">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>{product.clock}</span>
          </div>
          <span className="text-blue-600 font-semibold">
            {product.pris} تومان
          </span>
        </div>
      </div>
    </div>
  );
}
