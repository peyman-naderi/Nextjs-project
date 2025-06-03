"use client";
import { useState, useEffect, useRef } from "react";
import Productcart from "@/common/ProductCard";

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
];
const categories = [
  {
    title: "دسته بندی دوره ها",
    options: ["همه دسته بندی ها"],
  },
  {
    title: "وردپرس",
    options: ["برنامه نویسی افزونه", "طراحی قالب"],
  },
  {
    title: "برنامه نویسی موبایل",
    options: [
      "اندروید (جاوا)",
      "اندروید (کاتلین)",
      "فلاتر و دارت",
      "ری‌اکت نیتیو",
    ],
  },
  {
    title: "برنامه نویسی وب",
    options: ["ASP.NET", "Ajax", "PHP", "HTML, CSS, JavaScript", "Bootstrap"],
  },
  {
    title: "زبان های برنامه نویسی",
    options: [
      "پایتون",
      "سی / سی پلاس‌پلاس",
      "جاوا",
      "جاوااسکریپت",
      "گو لانگ",
      "سی شارپ",
      "پی اچ پی",
      "سویفت",
    ],
  },
  {
    title: "فریم ورک ها",
    options: [
      "ری‌اکت",
      "ویو جی‌اس",
      "انگولار",
      "لاراول",
      "نکست جی‌اس",
      "فلسک",
      "نست‌جی‌اس",
    ],
  },
];

export default function ProducCategories() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
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

  const [checkedItems, setCheckedItems] = useState({
    "همه دسته بندی ها": true,
    وردپرس: true,
    "برنامه نویسی افزونه": true,
    "طراحی قالب": true,
    "زبان های برنامه نویسی": true,
    پایتون: true,
    "فریم ورک ها": true,
    "نکست جی‌اس": true,
  });

  const handleChange = (label) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className=" flex flex-col lg:flex-row gap-8 px-4 mt-10 max-w-full">


      {/* Product list & pagination */}
      <div className="flex-1 flex flex-col">
        {/* Cards */}
        <div
          className="grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-x-8 gap-y-6"
        >
          {currentCourses.map((state, index) => (
            <div key={index} className="flex justify-center">
              <Productcart
                imagsrc={state.imagsrc}
                titlebig={state.titlebig}
                titlesmol={state.titlesmol}
                titlename={state.titlename}
                clock={state.clock}
                pris={state.pris}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-white rounded-md ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            قبلی
          </button>
          <span className="px-3 py-2 bg-gray-100 rounded-md">
            صفحه {currentPage}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-white ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            بعدی
          </button>
        </div>
      </div>

      {/* Sidebar ثابت و چسبیده */}
    <div className="w-full lg:w-72 p-4 inset-shadow-2xs border rounded-3xl bg-white shadow-md text-right ">
      {categories.map((category, idx) => (
        <div key={idx} className="mb-4 ">
          <p className="font-bold mb-2">{category.title}</p>
          <div className="flex flex-col gap-2">
            {category.options.map((label) => (
              <label
                key={label}
                className="flex items-center justify-between"
              >
                <span className="pr-5 mt-1">{label}</span>
                <input
                  type="checkbox"
                  checked={checkedItems[label] || false}
                  onChange={() => handleChange(label)}
                  className="w-4 h-4"
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}
