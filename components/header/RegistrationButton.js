import Link from "next/link";
import { CircleUserRound } from "lucide-react";

export default function RegistrationButton() {
  return (
    <div className="pr-2 xl:pr-5 hidden lg:flex">
      <Link href="/regester" passHref>
        <div className="text-base sm:text-lg md:text-2xl sm:px-6 md:px-7 gap-x-3 border border-white rounded-3xl font-bold flex py-2 sm:py-2 md:py-1 bg-transparent hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full sm:w-auto" role="button">
          <CircleUserRound size={16} className="h-auto" />
          ثبت نام
        </div>
      </Link>
    </div>
  );
}
