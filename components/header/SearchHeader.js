import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchHeader() {
    return (
        <div className="xl:pl-4 lg:pl-3 pl-3">
            <Link href="/search">
                <Search size={28} color="white" />
            </Link>
        </div>
    );
}
