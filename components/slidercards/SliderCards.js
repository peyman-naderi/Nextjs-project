'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'

const steps = [
  { id: 1, title: 'گام ۱', img: '/p1.png' },
  { id: 2, title: 'گام ۲', img: '/p2.png' },
  { id: 3, title: 'گام ۳', img: '/p3.png' },
  { id: 4, title: 'گام ۴', img: '/p4.png' },
  { id: 5, title: 'گام ۵', img: '/p5.png' },
  { id: 6, title: 'گام ۶', img: '/p6.png' },
  { id: 7, title: 'گام ۷', img: '/p1.png' },
  { id: 8, title: 'گام ۸', img: '/p2.png' },
  { id: 9, title: 'گام ۹', img: '/p3.png' },
  { id: 10, title: 'گام ۱۰', img: '/p4.png' },
]

export default function SliderCards() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 2, 
      spacing: 6, 
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 4, spacing: 4 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 6, spacing: 0 },
      },
    },
  })

  return (
    <div className="w-full px-4 md:px-10 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        می‌خوام <span className="text-blue-600">وردپرس</span> کار حرفه‌ای بشم!
      </h2>
      <p className="text-center text-gray-600 mb-8">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

      <div ref={sliderRef} className="keen-slider">
        {steps.map((step) => (
          <div key={step.id} className="keen-slider__slide flex justify-center ">
            <div className="bg-white border-2 mx-2 border-solid  shadow-xl/70  flex flex-col rounded-3xl text-center h-full w-44">
              <div className="w-full  h-36 relative mb-4">
                <Image src={step.img} alt={step.title} fill className="object-cover rounded-t-3xl" />
              </div>
              <h3 className="font-semibold mr-2 mb-4 text-right text-base">{step.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
