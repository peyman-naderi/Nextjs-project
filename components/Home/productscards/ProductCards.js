import Productcart from "@/components/common/ProductCard";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductData } from "@/data/ProductData";

export default function Productcarts() {
  return (
    <div className="justify-center mt-12 px-1 md:px-10">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-y-4 mb-4">
        <div className="text-right max-w-full">
          <h1 className="text-lg bg-white text-black sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            جدیدترین دوره‌های پیمان لرن
          </h1>
          <p className="text-sm bg-white sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium mt-3 leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <Link href="/productspage" passHref>
          <div className="flex items-center gap-x-2 text-sm sm:text-base md:text-lg px-5 py-2 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 cursor-pointer transition-all duration-200 whitespace-nowrap">
            آرشیو تمامی دوره‌ها
            <ChevronLeft />
          </div>
        </Link>
      </div>

      {/* Product Cards */}
      <div className="grid justify-between mt-8 grid-cols-1 xs2:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {ProductData.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index === 3 ? "hidden md:block lg:hidden" : ""
            }`}
          >
            <Productcart product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
