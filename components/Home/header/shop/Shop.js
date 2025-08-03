"use client";

import CardShop from "./ShopCard";
import { useContext } from "react";
import { CartContext } from "@/context/CartShop";

export default function CartShopAll() {
  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, Product) => sum + Product.quantity,
    0
  );

  return (
    <div className="bg-blue-100 min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-2xl font-bold text-right mb-6">سبد خرید :</p>

        <section className="flex flex-col lg:flex-row gap-6">
          {/* بخش کارت‌های محصول */}
          <div className="flex-1 flex flex-col gap-4">
            {productCount > 0 ? (
              cart.items.map((item) => (
                <CardShop key={item.id} id={item.id} quantity={item.quantity} />
              ))
            ) : (
              <h3 className="text-3xl text-center mt-10 font-bold text-blue-500">
                سبد خرید خالی است 🤔
              </h3>
            )}
          </div>

          {/* بخش خلاصه سفارش */}
          <aside className="w-full lg:w-96 bg-white rounded-2xl shadow-md border p-6 sticky top-20 self-start">
            <h2 className="text-xl font-semibold mb-4 text-right border-b pb-2">
              اطلاعات خرید
            </h2>

            <div className="space-y-6 text-gray-700 text-right">
              <div className="flex justify-between text-base">
                <span>جمع جزء</span>
                <span>—</span>
              </div>
              <div className="flex justify-between text-base">
                <span>مالیات (۹٪)</span>
                <span>—</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-3">
                <span>مبلغ نهایی</span>
                <span>—</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-semibold transition">
              ثبت سفارش
            </button>
          </aside>
        </section>
      </div>
    </div>
  );
}
