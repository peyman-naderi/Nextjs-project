"use client";
import { useState } from "react";
import Productcart from "@/components/common/ProductCard";

const courses = [
  {
    imagsrc: "/product1.png",
    titlebig: "دوره آموزش SQL Server",
    titlesmol: "یادگیری جامع SQL",
    titlename: "علی احمدی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    imagsrc: "/product3.png",
    titlebig: "دوره حرفه‌ای React",
    titlesmol: "ساخت پروژه‌ با ری‌اکت",
    titlename: "نگین رضایی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    imagsrc: "/product2.png",
    titlebig: "دوره پایتون",
    titlesmol: "مناسب برای برنامه‌نویسان ",
    titlename: "محمد کریمی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    imagsrc: "/product3.png",
    titlebig: "دوره طراحی UI/UX",
    titlesmol: "آشنایی با طراحی رابط کاربری ",
    titlename: "سارا محمدی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  // 👇 برای تست صفحه دوم و سوم کپی کن یا موارد جدید اضافه کن
  {
    imagsrc: "/product1.png",
    titlebig: "دوره جاوا اسکریپت پیشرفته",
    titlesmol: "برای حرفه‌ای‌ها",
    titlename: "حسین راد",
    clock: "۲۵:۳۸:۹",
    pris: "۵۰۰",
  },
  {
    imagsrc: "/product2.png",
    titlebig: "دوره لاراول",
    titlesmol: "توسعه وب پیشرفته",
    titlename: "زینب رضوی",
    clock: "۱۵:۰۰:۰۰",
    pris: "۳۹۰",
  },
  {
    imagsrc: "/product3.png",
    titlebig: "دوره CSS",
    titlesmol: "طراحی حرفه‌ای صفحات وب",
    titlename: "سهیل کریمی",
    clock: "۱۲:۴۰:۱۰",
    pris: "۲۵۰",
  },
  {
    imagsrc: "/product2.png",
    titlebig: "دوره نکست جی‌اس",
    titlesmol: "SSR و SSG",
    titlename: "ریحانه صادقی",
    clock: "۱۷:۳۰:۲۰",
    pris: "۴۸۰",
  },
  {
    imagsrc: "/product1.png",
    titlebig: "دوره امنیت وب",
    titlesmol: "SQL Injection و XSS",
    titlename: "بهنام علیپور",
    clock: "۱۳:۲۵:۵۰",
    pris: "۴۱۰",
  },
  {
    imagsrc: "/product1.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
  {
    imagsrc: "/product3.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
  {
    imagsrc: "/product2.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
  {
    imagsrc: "/product1.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
  {
    imagsrc: "/product3.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
  {
    imagsrc: "/product2.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
];

export default function BlogCategories() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className=" w-full  mt-10 px-2 sm:px-4">
      <div className=" mx-auto    flex flex-col xl:mx-2 xs3:mx-20 lg:flex-row  lg:gap-5">
        {/* Product Grid + Pagination */}

        <main className="flex-1 flex flex-col  ">
          {/* Product Grid */}
          <div
            className="grid justify-center
        grid-cols-1 
        xs2:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-x-5 xl:mx-32   gap-y-4"
            mt
          >
            {currentCourses.map((course, index) => (
              <div key={index} className="flex justify-center items-center">
                <Productcart {...course} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 gap-3 flex-wrap">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-sm ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              قبلی
            </button>

            <span className="px-3 py-1.5 text-sm bg-white border rounded-md text-gray-700 shadow">
              صفحه {currentPage}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-sm ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              بعدی
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
