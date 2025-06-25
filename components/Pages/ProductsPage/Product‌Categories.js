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
    options: ["اندروید (کاتلین)", "فلاتر و دارت", "ری‌اکت نیتیو"],
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
    title: "برنامه نویسی موبایل",
    options: [
      "اندروید (جاوا)",
      "اندروید (کاتلین)",
      "فلاتر و دارت",
      "ری‌اکت نیتیو",
    ],
  },
  {
    title: "وردپرس",
    options: ["برنامه نویسی افزونه", "طراحی قالب"],
  },
  {
    title: "فریم ورک ها",
    options: ["ری‌اکت", "ویو جی‌اس", "انگولار", "لاراول", "فلسک", "نست‌جی‌اس"],
  },
  {
    title: "برنامه نویسی لینوکس",
    options: [
      "اندروید (جاوا)",
      "اندروید (کاتلین)",
      "فلاتر و دارت",
      "ری‌اکت نیتیو",
      "ری‌اکت ",
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
        lg:grid-cols-3 
        gap-x-2 mx-3 md:mx-0  gap-y-4"
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

        {/* Sidebar */}
        <aside className="hidden lg:block w-full lg:w-72 bg-white rounded-xl shadow p-4 border">
          {categories.map((category, idx) => (
            <div key={idx} className="mb-5">
              <p className="text-base font-semibold text-gray-800 mb-2">
                {category.title}
              </p>
              <div className="space-y-2">
                {category.options.map((label) => (
                  <label
                    key={label}
                    className="flex items-center justify-between text-sm text-gray-700"
                  >
                    <span className="pr-2">{label}</span>
                    <input
                      type="checkbox"
                      checked={checkedItems[label] || false}
                      onChange={() => handleChange(label)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
