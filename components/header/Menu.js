import { ChevronDown } from "lucide-react";

export default function Menu() {
    const navLinks = [
        { href: "/", label: "صفحه نخست" },
        { href: "/courses", label: "دوره‌ها", icon: () => <ChevronDown size={20} /> },
        { href: "/blog", label: "وبلاگ", icon: () => <ChevronDown size={20} /> },
        { href: "/contact", label: "تماس با ما" }
    ];
    
    return (
        <div className="flex gap-x-7">
            {navLinks.map((item, index) => (
                <a key={index} href={item.href} className="flex items-center gap-x-2 text-2xl ">
                    {item.icon && item.icon()} {/* آیکون نمایش داده می‌شود */}
                    <span className="order-first">{item.label}</span> {/* متن بعد از آیکون می‌آید */}
                </a>
            ))}
        </div>
    );
}
