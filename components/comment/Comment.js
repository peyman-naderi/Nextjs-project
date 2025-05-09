"use client";
import { AtSign, Globe, Quote } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const comments = [
  {
    text: "این متن کمی طولانی‌تر است تا بررسی کنیم که آیا تراز عمودی در همه اسلایدها به درستی اعمال شده یا نه. باید همه کارت‌ها هم‌ارتفاع و مرتب باشند.",
    name: "عرفان محمدی",
    role: "برنامه نویس وب",
    avatar: "/avatar1.png",
  },
  {
    text: " این متن کمی طولانی‌تر است تا بررسی کنیم که آیا تراز عمودی در همه اسلایدها به درستی اعمال شده یا نه. باید همه کارت‌ها هم‌ارتفاع و مرتب باشند.",
    name: "سارا رضایی",
    role: "طراح رابط کاربری",
    avatar: "/avatar1.png",
  },
  {
    text: "این متن کمی طولانی‌تر است تا بررسی کنیم که آیا تراز عمودی در همه اسلایدها به درستی اعمال شده یا نه. باید همه کارت‌ها هم‌ارتفاع و مرتب باشند.",
    name: "محمد قاسمی",
    role: "توسعه‌دهنده بک‌اند",
    avatar: "/avatar1.png",
  },
];

export default function Comment() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true, // این گزینه باعث می‌شود که اسلایدر به صورت حلقه‌ای عمل کند
    mode: "snap",
    slides: { origin: "center", perView: 2.2, spacing: 16 },
    range: { min: -5, max: 5 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { origin: "center", perView: 1.1, spacing: 8 },
      },
      "(max-width: 480px)": {
        slides: { origin: "center", perView: 1, spacing: 4 },
      },
    },
  });



  return (
    <div className="w-full px-4 md:px-10 lg:px-6 mt-12">
      <h2 className="text-center text-2xl font-bold mb-6">
        نظرات کاربران <span className="text-blue-600">آروین لرن!</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است.
      </p>

      <div ref={sliderRef} className="keen-slider mt-10">
        {comments.map((comment, index) => (
          <div key={index} className="keen-slider__slide shadow-xl px-4 border-2 rounded-2xl flex h-full">
            <div className="bg-gray-50/30  rounded-2xl p-6 w-full flex flex-col  h-full min-h-[300px]">
              <div className="flex-grow flex flex-col justify-between">
                <p className="text-lg font-normal text-gray-800 text-center">
                  {comment.text}
                </p>
                <div className="flex items-center gap-x-3 my-6">
                  <span className="border w-full text-gray-600"></span>
                  <Quote className="w-10 h-10 text-gray-600" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={comment.avatar}
                    alt="Avatar"
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />
                  <div className="text-right">
                    <h3 className="font-bold text-lg">{comment.name}</h3>
                    <p className="text-gray-600 text-sm">{comment.role}</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                  <div className="bg-blue-500 p-3 rounded-full text-white cursor-pointer hover:bg-blue-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="bg-green-400 p-3 rounded-full text-white cursor-pointer hover:bg-green-300">
                    <AtSign className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {comments.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
