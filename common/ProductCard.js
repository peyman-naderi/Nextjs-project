import { User, Clock } from "lucide-react";
import Image from "next/image";

export default function Productcart({ imagsrc, titlebig, titlesmol, titlename, clock ,pris }) {
  return (
    <div className="w-80 rounded-2xl mt-12 overflow-hidden shadow-lg border border-gray-200">
      <div className="relative  w-full h-52">
        <Image
          src={imagsrc}
          alt="SQL Server Course"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="p-3 space-y-3">
        <h2 className="text-xl pt-2 font-bold">{titlebig}</h2>
        <p className="text-lg text-gray-500">
          {titlesmol}
        </p>
        <div className="flex pb-4 pt-1 items-center text-sm text-gray-600 gap-x-2 mt-2">
          <User className="w-4 h-4" />
            <span>{titlename}</span>
        </div>
        <div className="flex border-t border-gray-300 justify-between items-center pt-5 pb-1">
          <div className="flex items-center  text-green-600 text-lg gap-x-2">
            <Clock className="w-4 h-4" />
            <span>{clock}</span>
          </div>
          <span className="text-blue-600  text-lg">{pris} تومان</span>
        </div>
      </div>
    </div>
  );
}
