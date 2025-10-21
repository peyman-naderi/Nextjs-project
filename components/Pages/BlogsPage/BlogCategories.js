"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Blog from "@/components/common/Blog";

const bloges = [
  {
    id: 1,
    imagsrcB: "/blog1.png",
    titlebigB: "چرا یک سئو کار باید برنامه...",
    titlesmolB:
      "همانطور که می دانید سئو یکی از مهم ترین عوامل موفقیت در کسب و کار های اینترنتی می باشد. امروزه شاهد بیزینس های...",
    titlenameB: "علی احمدی",
    eyeB: "1563",
  },
  {
    id: 2,
    imagsrcB: "/blog2.png",
    titlebigB: "چگونه آموزش ببینیم؟",
    titlesmolB:
      "همانطور که می دانید سئو یکی از مهم ترین عوامل موفقیت در کسب و کار های اینترنتی می باشد. امروزه شاهد بیزینس های...",
    titlenameB: "نگین رضایی",
    eyeB: "7856",
  },
  {
    id: 3,
    imagsrcB: "/blog3.png",
    titlebigB: "مطلب چیست؟",
    titlesmolB:
      "همانطور که می دانید سئو یکی از مهم ترین عوامل موفقیت در کسب و کار های اینترنتی می باشد. امروزه شاهد بیزینس های...",
    titlenameB: "محمد کریمی",
    eyeB: "1000",
  },
  {
    id: 4,
    imagsrcB: "/blog1.png",
    titlebigB: "مطلب چیست؟",
    titlesmolB:
      "همانطور که می دانید سئو یکی از مهم ترین عوامل موفقیت در کسب و کار های اینترنتی می باشد. امروزه شاهد بیزینس های...",
    titlenameB: "سارا محمدی",
    eyeB: "2654",
  },
];

export default function Blogspage() {
  return (
    <div className="justify-center mt-12 px-4 md:px-10">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-y-4 mb-4">
        <div className="text-right max-w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight tracking-normal">
            آخرین مقالات و اخبار پیمان لرن
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium mt-3 leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>

        <Link href="/blogspage">
          <div className="flex items-center gap-x-2 text-sm sm:text-base md:text-lg px-5 py-2 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 cursor-pointer transition-all duration-200 whitespace-nowrap">
            مشاهده همه مقالات
            <ChevronLeft />
          </div>
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 xs2:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {bloges.map((blog) => (
          <div
            key={blog.id}
            className={`flex justify-center ${
              blog.id === 4 ? "hide-between-md-lg" : ""
            }`}
          >
            <Blog
              imagsrcB={blog.imagsrcB}
              titlebigB={blog.titlebigB}
              titlesmolB={blog.titlesmolB}
              titlenameB={blog.titlenameB}
              eyeB={blog.eyeB}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
