import Link from "next/link"
import { ChevronLeft ,  User , Clock } from "lucide-react"
import Image from "next/image";


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

            {/*کارت محصولات*/}

            <div className="max-w-sm rounded-2xl mt-12 overflow-hidden shadow-lg border border-gray-200">
              <div className="relative w-full h-52">
                <Image
                  src="/product1.png" // این مسیر باید به تصویر شما تغییر پیدا کنه
                  alt="SQL Server Course"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold">دوره آموزش SQL Server</h2>
                <p className="text-sm text-gray-500">لورم ایپسوم متن ساختگی با تولید...</p>
                <div className="flex items-center text-sm text-gray-600 gap-1">
                  <User className="w-4 h-4" />
                  <span>علی احمدی</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                <div className="flex items-center text-green-600 text-sm gap-1">
                    <Clock className="w-4 h-4" />
                    <span>۷:۳۲:۱۹</span>
                  </div>
                  <span className="text-blue-600 font-bold">۳۸۰,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
        </div>
    )
}
