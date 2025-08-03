"use client";

import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { getProductData } from "@/data/ProductData";
import { useContext } from "react";
import { CartContext } from "@/context/CartShop";

export default function CardShop({ id, quantity }) {
  const productData = getProductData(id);
  const cart = useContext(CartContext);

  return (
    <div className="bg-white w-full rounded-2xl border shadow-md hover:shadow-lg transition flex flex-col sm:flex-row p-4 gap-4">
      {/* تصویر */}
      <div className="relative w-full sm:w-40 h-40 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src={productData.imagsrc}
          alt={productData.titlebig}
          fill
          className="object-cover"
        />
      </div>

      {/* بخش متن و کنترل */}
      <div className="flex flex-col justify-between flex-1">
        {/* عنوان و توضیح */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {productData.titlebig}
          </h2>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed line-clamp-2">
            {productData.titlesmol}
          </p>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <p className="text-sm text-gray-400">
              نویسنده: {productData.titlename}
            </p>
            <span className="text-green-600 font-bold text-base whitespace-nowrap">
              {productData.pris * quantity} تومان
            </span>
          </div>
        </div>

        {/* کنترل تعداد و حذف */}
        <div className="flex justify-between items-center mt-3">
          {/* کنترل تعداد */}
          <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
            <button
              onClick={() => cart.removeItemFromCart(id)}
              className="w-7 h-7 rounded-full bg-white text-gray-700 hover:bg-red-200 flex items-center justify-center"
            >
              <Minus size={16} />
            </button>
            <span className="text-sm font-medium">{quantity}</span>
            <button
              onClick={() => cart.addItemToCart(id)}
              className="w-7 h-7 rounded-full bg-white text-gray-700 hover:bg-green-200 flex items-center justify-center"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* حذف */}
          <button
            onClick={() => cart.deleteFromCart(id)}
            className="text-red-300 hover:text-red-600 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
