import { ChevronDown } from "lucide-react";

export default function Menu() {
    const navLinks = [
        { href: "/", label: "صفحه  نخست" },
        { href: "/courses", label: "دوره‌ ها", icon: () => <ChevronDown size={20} /> },
        { href: "/blog", label: "وبلاگ", icon: () => <ChevronDown size={20} /> },
        { href: "/contact", label: "تماس با ما" }
    ];
    
    return (
        <div>
            <div className="lg:flex mt-4 lg:mt-0  gap-x-8 xl:gap-x-14">
                {navLinks.map((item, index) => (
                    <a key={index} href={item.href} className="flex text-black lg:text-white items-center text-xl  gap-x-1 xl:gap-x-2  lg:text-2xl">
                        {item.icon && item.icon()} {/* آیکون نمایش داده می‌شود */}
                        <span className="order-first">{item.label}</span> {/* متن بعد از آیکون می‌آید */}
                    </a>
                ))}
            </div>
        </div>

    );
}
