import { AtSign, Globe, Quote } from "lucide-react";
import Image from "next/image";

export default function Comment() {
  return (
    <div className="flex mt-10">
      <div
        dir="rtl"
        className=" bg-white shadow-md rounded-2xl p-2  md:p-6 max-w-xl mx-auto text-center space-y-6 border "
      >
        {/* متن بالا */}
        <p className="text-lg font-normal  text-gray-800">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className="flex items-center gap-x-3">
          <span className="border w-full  text-gray-600"></span>
          <Quote className="w-10 h-10  text-gray-600" />
        </div>

        <div className="  flex flex-col md:flex-row md:items-center md:justify-between ">
          {/* اطلاعات کاربر */}
          <div className="flex items-center gap-4">
            <Image
              src="/avatar1.png" // آدرس عکس را به درستی تنظیم کنید
              alt="Avatar"
              width={80}
              height={80}
              className="rounded-xl object-cover"
            />
            <div className="text-right">
              <h3 className="font-bold text-xl">عرفان محمدی</h3>
              <p className="text-gray-600 text-base">برنامه نویس وب</p>
            </div>
          </div>
          {/* آیکون و نقل قول */}
          <div className="flex items-center">
            <div className="flex gap-4">
              <div className="bg-blue-500 p-3 rounded-full text-white">
                <Globe className="w-7 h-7" />
              </div>
              <div className="bg-green-400 p-3 rounded-full text-white">
                <AtSign className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
