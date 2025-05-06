import { AtSign, RefreshCw, Quote } from "lucide-react";
import Image from "next/image";

export default function Comment() {
  return (
    <div
      dir="rtl"
      className="bg-white shadow-md rounded-2xl p-6 md:p-10 max-w-3xl mx-auto text-right space-y-6 border border-blue-200"
    >
      {/* متن بالا */}
      <p className="text-lg leading-loose text-gray-800">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>

      <div className="border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* اطلاعات کاربر */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h3 className="font-bold text-lg">عرفان محمدی</h3>
            <p className="text-gray-600">برنامه نویس وب</p>
          </div>
          <Image
            src="/avatar1.png" // آدرس عکس را به درستی تنظیم کنید
            alt="Avatar"
            width={60}
            height={60}
            className="rounded-xl object-cover"
          />
        </div>

        {/* آیکون و نقل قول */}
        <div className="flex items-center gap-4">
          <Quote className="w-10 h-10 text-gray-600" />
          <div className="flex gap-4">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <AtSign className="w-6 h-6" />
            </div>
            <div className="bg-green-400 p-3 rounded-full text-white">
              <RefreshCw className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
