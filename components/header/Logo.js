import Image from "next/image";

export default function Logo() {
    return (
        <div className="hidden lg:flex">
            <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="w-auto sm:w-32 md:w-36  "
            />
            
        </div>
    );
}
