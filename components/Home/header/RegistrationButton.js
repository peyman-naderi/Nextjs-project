import Link from "next/link";
import { CircleUserRound } from "lucide-react";

export default function RegistrationButton() {
  return (
    <div className="lg:pr-1 xl:pr-4 lg:mt-0 mt-6 lg:mb-0 mb-3">
      <Link href="/regester" passHref>
        <div className="text-base sm:text-lg lg:text-xl sm:px-3  justify-center lg:justify-normal w-full md:px-5 xl:px-7 gap-x-2 border lg:border-white border-blue-300 rounded-3xl font-medium lg:font-bold flex py-2 sm:py-2 md:py-1 bg-transparent hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer lg:w-full sm:w-auto" role="button">
          <CircleUserRound size={16} className="h-auto" />
          ثبت نام
        </div>
      </Link>
    </div>
  );
}
