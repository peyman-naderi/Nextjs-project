'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import SliderCard from '@/common/SliderCard'

const steps = [
  { title: 'گام ۱', img: '/p1.png' },
  { title: 'گام ۲', img: '/p2.png' },
  { title: 'گام ۳', img: '/p3.png' },
  { title: 'گام ۴', img: '/p4.png' },
  { title: 'گام ۵', img: '/p5.png' },
  { title: 'گام ۶', img: '/p6.png' },
  { title: 'گام ۷', img: '/p1.png' },
  { title: 'گام ۸', img: '/p2.png' },
  { title: 'گام ۹', img: '/p3.png' },
  { title: 'گام ۱۰', img: '/p4.png' },
]

export default function SliderCards() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 2.2,
      spacing: 6,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 4.5, spacing: 4 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 6.5, spacing: 0 },
      },
    },
  })

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        می‌خوام <span className="text-blue-600">وردپرس</span> کار حرفه‌ای بشم!
      </h2>
      <p className="text-center text-gray-600 mb-8">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
      </p>

      <div ref={sliderRef} className="keen-slider">
        {steps.map((step, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <SliderCard imgsrc={step.img} title={step.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
