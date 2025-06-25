import { User, Clock } from "lucide-react";
import Image from "next/image";

export default function Productcart({ imagsrc, titlebig, titlesmol, titlename, clock, pris }) {
  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col justify-between">

      {/* تصویر */}
      <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64">
        <Image
          src={imagsrc}
          alt={titlebig}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
          priority
        />
      </div>

      {/* محتوا */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-base sm:text-lg md:text-xl text-black font-bold">{titlebig}</h2>
          <p className="text-sm sm:text-base text-gray-500">{titlesmol}</p>

          <div className="flex items-center gap-x-2 text-gray-600 text-xs sm:text-sm md:text-base">
            <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>{titlename}</span>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-3 mt-4 text-sm sm:text-base">
          <div className="flex items-center gap-x-1 text-green-600 font-semibold">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>{clock}</span>
          </div>
          <span className="text-blue-600 font-semibold">{pris} تومان</span>
        </div>
      </div>
    </div>
  );
}
