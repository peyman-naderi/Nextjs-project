import Image from "next/image"
export default function Logo() {
    return(
        <div className="w-80">
             <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>
    )
}