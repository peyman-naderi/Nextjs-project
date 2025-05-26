// "use client";
// import { useState } from "react";
// import Productcart from "@/common/ProductCard";
// import Link from "next/link";
// import { ChevronLeft } from "lucide-react";

// const courses = [
//   {
//     imagsrc: "/product1.png",
//     titlebig: "دوره آموزش SQL Server",
//     titlesmol: "یادگیری جامع SQL",
//     titlename: "علی احمدی",
//     clock: "۲۰:۳۸:۹",
//     pris: "۳۸۰",
//   },
//   {
//     imagsrc: "/product3.png",
//     titlebig: "دوره حرفه‌ای React",
//     titlesmol: "ساخت پروژه‌ با ری‌اکت",
//     titlename: "نگین رضایی",
//     clock: "۲۰:۳۸:۹",
//     pris: "۳۸۰",
//   },
//   {
//     imagsrc: "/product2.png",
//     titlebig: "دوره پایتون",
//     titlesmol: "مناسب برای برنامه‌نویسان ",
//     titlename: "محمد کریمی",
//     clock: "۲۰:۳۸:۹",
//     pris: "۳۸۰",
//   },
//   {
//     imagsrc: "/product3.png",
//     titlebig: "دوره طراحی UI/UX",
//     titlesmol: "آشنایی با طراحی رابط کاربری ",
//     titlename: "سارا محمدی",
//     clock: "۲۰:۳۸:۹",
//     pris: "۳۸۰",
//   },
//   // 👇 برای تست صفحه دوم و سوم کپی کن یا موارد جدید اضافه کن
//   {
//     imagsrc: "/product1.png",
//     titlebig: "دوره جاوا اسکریپت پیشرفته",
//     titlesmol: "برای حرفه‌ای‌ها",
//     titlename: "حسین راد",
//     clock: "۲۵:۳۸:۹",
//     pris: "۵۰۰",
//   },
//   {
//     imagsrc: "/product2.png",
//     titlebig: "دوره لاراول",
//     titlesmol: "توسعه وب پیشرفته",
//     titlename: "زینب رضوی",
//     clock: "۱۵:۰۰:۰۰",
//     pris: "۳۹۰",
//   },
//   {
//     imagsrc: "/product3.png",
//     titlebig: "دوره CSS",
//     titlesmol: "طراحی حرفه‌ای صفحات وب",
//     titlename: "سهیل کریمی",
//     clock: "۱۲:۴۰:۱۰",
//     pris: "۲۵۰",
//   },
//   {
//     imagsrc: "/product2.png",
//     titlebig: "دوره نکست جی‌اس",
//     titlesmol: "SSR و SSG",
//     titlename: "ریحانه صادقی",
//     clock: "۱۷:۳۰:۲۰",
//     pris: "۴۸۰",
//   },
//   {
//     imagsrc: "/product1.png",
//     titlebig: "دوره امنیت وب",
//     titlesmol: "SQL Injection و XSS",
//     titlename: "بهنام علیپور",
//     clock: "۱۳:۲۵:۵۰",
//     pris: "۴۱۰",
//   },
//   {
//     imagsrc: "/product1.png",
//     titlebig: "دوره گراف‌کیوال",
//     titlesmol: "آشنایی با GraphQL",
//     titlename: "کیانا محمدی",
//     clock: "۱۰:۴۵:۰۰",
//     pris: "۳۲۰",
//   },
// ];

// export default function ProductPagition() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const coursesPerPage = 9;

//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

//   const totalPages = Math.ceil(courses.length / coursesPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   return (
//     <div className="justify-center   px-1 ">
     
//       {/* Product Cards */}
//       <div
//         className="grid
//         grid-cols-1 
//         sm:grid-cols-2 
//         lg:grid-cols-3 
//         gap-x-16 gap-y-6"
//       >
//         {currentCourses.map((state, index) => (
//           <div key={index} className="flex justify-center">
//             <Productcart
//               imagsrc={state.imagsrc}
//               titlebig={state.titlebig}
//               titlesmol={state.titlesmol}
//               titlename={state.titlename}
//               clock={state.clock}
//               pris={state.pris}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-8 gap-4">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 rounded-md text-white ${
//             currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           قبلی
//         </button>
//         <span className="px-3 py-2 bg-gray-100 rounded-md">صفحه {currentPage}</span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 rounded-md text-white ${
//             currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           بعدی
//         </button>
//       </div>
//     </div>
//   );
// }
