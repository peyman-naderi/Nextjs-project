"use client";
import { useState } from "react";

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
    options: ["اندروید (جاوا)", "اندروید (کاتلین)", "فلاتر و دارت", "ری‌اکت نیتیو"],
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
];

export default function ProducCategories() {
  const [checkedItems, setCheckedItems] = useState({
    "همه دسته بندی ها": true,
    "وردپرس": true,
    "برنامه نویسی افزونه": true,
    "طراحی قالب": true,
    "زبان های برنامه نویسی": true,


  });

  const handleChange = (label) => {
    setCheckedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="w-72 p-4 rounded-lg bg-white shadow-md text-right space-y-4 h-auto">
      {categories.map((category, idx) => (
        <div key={idx}>
          <p className="font-bold mb-2">{category.title}</p>
          <div className="flex flex-col gap-2">
            {category.options.map((label) => (
              <label key={label} className="flex items-center justify-between">
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
  );
}
