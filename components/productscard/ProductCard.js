import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function Productcart () {
    return(
        <div className=" justify-center mt-12  px-1 md:px-10">
<div className="flex items-center justify-between flex-wrap gap-y-4">
  {/* متن سمت راست */}
  <div className="text-right max-w-full">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-normal">
      جدیدترین دوره های آروین لرن
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium mt-3 leading-relaxed tracking-normal">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
    </p>
  </div>

  {/* دکمه سمت چپ */}
  <Link href="#" passHref>
    <div className="flex items-center gap-x-2 text-sm sm:text-base md:text-lg px-5 py-2 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 cursor-pointer transition-all duration-200 whitespace-nowrap">
      آرشیو تمامی دوره ها
      <ChevronLeft />
    </div>
  </Link>
</div>


        </div>
    )
}
