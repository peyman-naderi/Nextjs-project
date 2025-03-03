import Image from "next/image"
export default function Logo() {
    return(
        <div >
             <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </div>
    )
}