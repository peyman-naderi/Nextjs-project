"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white  mt-16 text-sm md:text-base ">
      {/* Scroll to top button */}
      <div className="flex items-center justify-center gap-x-1 px-4">
        <span className="border-t-2 border-gray-300 flex-grow"></span>
        <div className="flex justify-center items-center py-3">
          <button
            onClick={scrollToTop}
            className="bg-blue-500 text-white p-3 md:p-4 rounded-full cursor-pointer hover:bg-blue-600 transition"
            aria-label="رفتن به بالای صفحه"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <span className="border-t-2 border-gray-300 flex-grow"></span>
      </div>

      {/* Main content */}
      <div
        className="w-full mx-auto  py-10 grid grid-cols-1 xs2:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-x-20 md:px-20 px-6 lg:px-16 xl:pr-24 gap-y-9 justify-center">
        {/* Site Description */}
        <div>
          <Image
            src="/logoFooter.png"
            alt="لوگوی آروین لرن"
            width={140}
            height={140}
            className="mb-4"
          />
          <p className="text-justify leading-loose text-gray-700 text-lg font-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">دسترسی سریع</h3>
          <ul className="space-y-2 text-lg font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">صفحه نخست</li>
            <li className="hover:text-blue-600 cursor-pointer">دوره‌ها</li>
            <li className="hover:text-blue-600 cursor-pointer">
              مقالات و اخبار
            </li>
            <li className="hover:text-blue-600 cursor-pointer">تماس با ما</li>
          </ul>
        </div>

        {/* Course Categories */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">
            دسته‌بندی دوره‌ها
          </h3>
          <ul className="space-y-2 text-lg font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer">اندروید</li>
            <li className="hover:text-blue-600 cursor-pointer">وردپرس</li>
            <li className="hover:text-blue-600 cursor-pointer">وب‌سایت</li>
            <li className="hover:text-blue-600 cursor-pointer">رابط کاربری</li>
          </ul>
        </div>

        {/* Trust Badges */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-gray-900">
            نمادهای اعتماد
          </h3>
          <div className="flex gap-8 flex-wrap">
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

      {/* Copyright */}
      <div className="bg-gray-100 py-4 text-center text-xs md:text-sm text-gray-500 mt-6 px-4">
        تمامی حقوق مادی و معنوی این سایت متعلق به سایت می‌باشد و هرگونه
        کپی‌برداری غیرقانونی محسوب خواهد شد.
      </div>
    </footer>
  );
}
