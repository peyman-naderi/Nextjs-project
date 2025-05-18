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
            <div className="lg:flex mt-4 lg:mt-0  gap-x-7 xl:gap-x-10">
                {navLinks.map((item, index) => (
                    <a key={index} href={item.href} className="flex text-black lg:text-white items-center text-xl   xl:gap-x-2 xl:text-2xl lg:text-xl">
                        {item.icon && item.icon()} {/* آیکون نمایش داده می‌شود */}
                        <span className="order-first">{item.label}</span> {/* متن بعد از آیکون می‌آید */}
                    </a>
                ))}
            </div>
        </div>

    );
}
