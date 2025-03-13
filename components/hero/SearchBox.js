import { Search } from "lucide-react";

export default function SearchBox() {
  
  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="relative w-full mx-10 sm:w-[70%] md:w-[60%] lg:w-[55%] xl:w-[45%]">
        <input
          type="text"
          placeholder="دنبال چه چیزی هستید؟"
          className="w-full p-4 pl-12 pr-4 bg-gray-200 text-black text-lg rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
      </div>
    </div>
  );
};
