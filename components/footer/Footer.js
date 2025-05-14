"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white mt-16 text-sm md:text-xl">
      {/* دکمه اسکرول به بالا */}
      <div className="flex items-center justify-center gap-x-1 px-4">
        <span className="border-t border-gray-300 flex-grow"></span>
        <div className="flex justify-center items-center py-3">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 text-white p-3 md:p-4 rounded-full cursor-pointer hover:bg-blue-600 transition"
            aria-label="رفتن به بالای صفحه"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <span className="border-t border-gray-300 flex-grow"></span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex justify-between gap-x-32">
        {/* معرفی سایت */}
        <div className="flex flex-col items-start">
          <Image
            src="/logoFooter.png"
            alt="لوگوی آروین لرن"
            width={140}
            height={140}
            className="mb-3"
          />
          <p className="text-justify leading-loose w-60 space-y-2 font-semibold text-lg text-gray-700">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
        </div>

        {/* دسترسی سریع */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">دسترسی سریع</h3>
          <ul className="space-y-2 font-semibold text-lg text-gray-700">
            <li>صفحه نخست</li>
            <li>دوره ها</li>
            <li>مقالات و اخبار</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        {/* دسته‌بندی دوره‌ها */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">
            دسته بندی دوره ها
          </h3>
          <ul className="space-y-2 font-semibold text-lg text-gray-700">
            <li>اندروید</li>
            <li>وردپرس</li>
            <li>وب سایت</li>
            <li>رابط کاربری</li>
          </ul>
        </div>

        {/* نمادهای اعتماد */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">
            نماد های اعتماد
          </h3>
          <div className="flex gap-x-3">
            <Image
              src="/namad2.png"
              alt="نماد ساماندهی"
              width={72}
              height={72}
              className="rounded"
            />
            <Image
              src="/namad1.png"
              alt="نماد اعتماد الکترونیکی"
              width={72}
              height={72}
              className="rounded"
            />
          </div>
        </div>
      </div>

      {/* متن حقوقی پایین سایت */}
      <div className="bg-gray-100 py-4 text-center text-xs md:text-sm text-gray-500 mt-6 px-4">
        تمامی حقوق مادی و معنوی این سایت متعلق به سایت می‌باشد و هرگونه کپی
        برداری غیرقانونی محسوب خواهد شد.
      </div>
    </footer>
  );
}
