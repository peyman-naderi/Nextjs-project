import Image from "next/image"

export default function Statcard({ number, label, imageSrc, width, height }) {
    return(
        <section className="flex  mt-12 items-center justify-center">
            <div class="flex  items-center p-3 w-72 h-36 gap-x-10  bg-white/40 backdrop-blur-sm justify-center  rounded-3xl shadow-lg">
                <Image src={imageSrc} alt={label} width={width} height={height} />
                <section class="gap-x-10">
                    <div class="space-y-3">
                        <h3 class="font-bold text-[35px] leading-[100%] tracking-[0%] text-right">{number}</h3>
                        <h3 class="font-medium text sm">{label}</h3>
                    </div>
                </section>
            </div>
        </section>
    )
}