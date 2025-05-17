// common/SliderCard.js
import Image from 'next/image'

export default function SliderCard({ imgsrc, title }) {
  return (
    <div className="bg-white border-2 mx-2 border-solid shadow-xl/70 flex flex-col rounded-3xl text-center h-full w-44">
      <div className="w-full h-36 relative mb-4">
        <Image src={imgsrc} fill className="object-cover rounded-t-3xl" alt={title} />
      </div>
      <h3 className="font-semibold mr-2 mb-4 text-right text-base text-black">{title}</h3>
    </div>
  )
}
