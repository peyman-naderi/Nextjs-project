import { User, Eye } from "lucide-react";
import Image from "next/image";

export default function Blog({ imagsrcB, titlebigB, titlesmolB, titlenameB ,eyeB }) {
  return (
    <div className="w-full mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col justify-between">
      {/* تصویر */}
      <div className="relative  h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64">
        <Image
          src={imagsrcB}
          alt={titlebigB}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
          priority
        />
      </div>

      {/* محتوا */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-base text-black sm:text-lg md:text-xl font-bold">
            {titlebigB}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">{titlesmolB}</p>

          <div className="flex items-center gap-x-2 text-gray-600 text-xs sm:text-sm md:text-base"></div>
        </div>

        <div className="flex justify-between items-center text-gray-600 border-t pt-3 mt-4 text-sm sm:text-base">
          <div className="flex items-center gap-x-1  font-semibold">
            <User className="w-4 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>{titlenameB}</span>
          </div>
          <div className="flex items-center gap-x-1 text-green-600 font-semibold">
            <span className=" font-semibold">{eyeB}</span>
            <Eye className="w-4 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
