"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const sortOptions = [
  "مرتب سازی بر اساس آخرین تاریخ انتشار",
  "مرتب سازی بر اساس بیشترین بازدید",
  "مرتب سازی بر اساس محبوب‌ترین",
];

export default function SearchAndSort() {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col  md:flex-row gap-4 px-5  md:gap-x-14 xl:w-5/6 justify-center mx-auto mt-6">
      {/* Search Box */}
      <div className="w-full md:w-1/2  relative">
        <input
          type="text"
          placeholder="عنوان آموزش مورد نظر خود را بنویسید..."
          className="w-full text-right px-10 py-3 bg-white rounded-2xl shadow-md border border-gray-200 text-xs md:text-base "
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>

      {/* Sort Dropdown */}
      <div className="relative w-full md:w-1/2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-right px-5 py-3 bg-white rounded-2xl shadow-md border border-gray-200 text-xs md:text-base flex justify-between items-center"
        >
          {selectedSort}
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </button>
        {isOpen && (
          <ul className="absolute z-10 w-full bg-white shadow-lg rounded-xl mt-1 border border-gray-200 text-sm overflow-hidden">
            {sortOptions.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedSort === option ? "bg-gray-50 font-bold" : ""
                }`}
                onClick={() => {
                  setSelectedSort(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
