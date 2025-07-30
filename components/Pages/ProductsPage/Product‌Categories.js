"use client";
import { useState } from "react";
import Productcart from "@/components/common/ProductCard";

import { ProductData } from "@/data/ProductData";

const categories = [
  { title: "دسته بندی دوره ها", options: ["همه دسته بندی ها"] },
  { title: "وردپرس", options: ["برنامه نویسی افزونه", "طراحی قالب"] },
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
  { title: "وردپرس", options: ["برنامه نویسی افزونه", "طراحی قالب"] },
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
      "ری‌اکت",
    ],
  },
];

export default function ProductCategories() {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = ProductData.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(ProductData.length / coursesPerPage);

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
    " پایتون": true,
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
    <section className="w-full mt-10 px-2 sm:px-4">
      <div className="mx-auto flex flex-col xl:mx-2 xs3:mx-20 lg:flex-row lg:gap-5">
        <main className="flex-1 flex flex-col">
          <div className="grid justify-center grid-cols-1 xs2:grid-cols-2 md:grid-cols-3 gap-x-2 mx-3 md:mx-0 gap-y-4">
            {currentCourses.map((item, index) => (
              <div key={index.id} className="flex justify-center items-center">
                <Productcart product={item} />
              </div>
            ))}
          </div>

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
