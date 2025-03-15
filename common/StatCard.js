import Image from "next/image";

export default function Statcard({ number, label, imageSrc, width, height }) {
  return (
    <section className="flex flex-wrap items-center justify-center p-4">
      <div className="flex flex-col sm:flex-row items-center justify-center min-w-[150px] sm:min-w-[200px] md:min-w-[250px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto p-4 gap-4 bg-white/40 backdrop-blur-sm rounded-3xl shadow-md">
        <div className="flex-shrink-0">
          <Image src={imageSrc} width={width} height={height} alt="icon" />
        </div>

        <div className="text-center sm:text-right">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl leading-tight tracking-tight ">
            {number}
          </h3>
          <h3 className="font-medium text-xs sm:text-sm md:text-base">
            {label}
          </h3>
        </div>
      </div>
    </section>
  );
}
