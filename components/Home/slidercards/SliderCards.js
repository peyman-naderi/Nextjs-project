"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SliderCard from "@/common/SliderCard";
import { useState } from "react";

const steps = [
  { title: "گام ۱", img: "/p1.png" },
  { title: "گام ۲", img: "/p2.png" },
  { title: "گام ۳", img: "/p3.png" },
  { title: "گام ۴", img: "/p4.png" },
  { title: "گام ۵", img: "/p5.png" },
  { title: "گام ۶", img: "/p6.png" },
  { title: "گام ۷", img: "/p1.png" },
  { title: "گام ۸", img: "/p2.png" },
  { title: "گام ۹", img: "/p3.png" },
  { title: "گام ۱۰", img: "/p4.png" },
  { title: "گام ۱۱", img: "/p1.png" },
  { title: "گام ۱۲", img: "/p2.png" },
];

export default function SliderCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perView, setPerView] = useState(1);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    rtl: true,
    slides: {
      perView: 2,
      spacing: 6,
    },
    breakpoints: {
      "(min-width: 424px) and (max-width: 639px)": {
        slides: { perView: 3, spacing: 4 },
      },
      "(min-width: 640px)": {
        slides: { perView: 4, spacing: 4 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 6, spacing: 0 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 7, spacing: 0 },
      },
      "(min-width: 1620px)": {
        slides: { perView: 8, spacing: 0 },
      },
      "(min-width: 1830px)": {
        slides: { perView: 9, spacing: 0 },
      },
      "(min-width: 2100px)": {
        slides: { perView: 10, spacing: 25 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      const pv = slider.options.slides?.perView;
      setPerView(typeof pv === "number" ? pv : 1);
    },
  });

  const dotCount = Math.ceil(steps.length - (perView - 1));

  return (
    <div className="w-full px-2 md:px-10 lg:px-6 mt-12 ">
      <h2 className="text-center text-black text-2xl font-bold mb-6">
        می‌خوام <span className="text-blue-600">وردپرس</span> کار حرفه‌ای بشم!
      </h2>
      <p className="text-center text-gray-600 mb-8">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است.
      </p>

      <div ref={sliderRef} className="keen-slider flex flex-row-reverse">
        {steps.map((step, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <SliderCard imgsrc={step.img} title={step.title} />
          </div>
        ))}
      </div>

      {/* نقاط پایین اسلایدر */}
      <div className="flex justify-center mt-10 gap-x-2 rtl:flex-row-reverse">
        {[...Array(dotCount)].map((_, idx) => (
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
