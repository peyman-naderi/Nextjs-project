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
    <div className="">
      <div className="max-w-7xl flex-1 grid grid-cols-2 gap-6  mx-auto px-14 py-3  flex-col lg:flex-row  items-start">
        {/* کارت محصول */}
        <div className="bg-white rounded-2xl border p-6 shadow-md hover:shadow-lg transition self-start">
          <div className="flex gap-6">
            {/* تصویر */}
            <div className="relative w-44 h-44 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={productData.imagsrc}
                alt="کتاب روان‌شناسی طراحی"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>

            {/* محتوا */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {productData.titlebig}
                </h2>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed max-w-sm">
                  {productData.titlesmol}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-400">
                    نویسنده: {productData.titlename}
                  </p>
                  <span className="text-green-600 font-bold text-base">
                    {quantity * Number(productData.pris)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
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
        </div>
      </div>
    </div>
  );
}
