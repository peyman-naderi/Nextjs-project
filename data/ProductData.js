const ProductData = [
  {
    id: "1",
    imagsrc: "/product1.png",
    titlebig: "دوره  SQL Server",
    titlesmol: "یادگیری جامع SQL",
    titlename: "علی احمدی",
    clock: "16:37:00",
    pris: "580",
  },
  {
    id: "2",
    imagsrc: "/product3.png",
    titlebig: "دوره حرفه‌ای React",
    titlesmol: "ساخت پروژه‌ با ری‌اکت",
    titlename: "نگین رضایی",
    clock: "16:37:00",
    pris: "680",
  },
  {
    id: "3",
    imagsrc: "/product2.png",
    titlebig: "دوره پایتون",
    titlesmol: "مناسب برای برنامه‌نویسان ",
    titlename: "محمد کریمی",
    clock: "16:37:00",
    pris: "780",
  },
  {
    id: "4",
    imagsrc: "/product3.png",
    titlebig: "دوره طراحی UI/UX",
    titlesmol: "آشنایی با طراحی رابط کاربری ",
    titlename: "سارا محمدی",
    clock: "16:37:00",
    pris: "550",
  },
  // 👇 برای تست صفحه دوم و سوم کپی کن یا موارد جدید اضافه کن
  {
    id: "5",
    imagsrc: "/product1.png",
    titlebig: "دوره جاوا اسکریپت پیشرفته",
    titlesmol: "برای حرفه‌ای‌ها",
    titlename: "حسین راد",
    clock: "16:37:00",
    pris: "369",
  },
  {
    id: "6",
    imagsrc: "/product2.png",
    titlebig: "دوره لاراول",
    titlesmol: "توسعه وب پیشرفته",
    titlename: "زینب رضوی",
    clock: "16:37:001",
    pris: "421",
  },
  {
    id: "7",
    imagsrc: "/product3.png",
    titlebig: "دوره CSS",
    titlesmol: "طراحی حرفه‌ای صفحات وب",
    titlename: "سهیل کریمی",
    clock: "16:37:00۰",
    pris: "444",
  },
  {
    id: "8",
    imagsrc: "/product2.png",
    titlebig: "دوره نکست جی‌اس",
    titlesmol: "SSR و SSG",
    titlename: "ریحانه صادقی",
    clock: "16:37:00۰",
    pris: "580",
  },
  {
    id: "9",
    imagsrc: "/product1.png",
    titlebig: "دوره امنیت وب",
    titlesmol: "SQL Injection و XSS",
    titlename: "بهنام علیپور",
    clock: "16:37:00۰",
    pris: "580",
  },
  {
    id: "10",
    imagsrc: "/product1.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "16:37:00۰",
    pris: "580",
  },
];

function getProductData(id) {
  let productDat = ProductData.find((item) => item.id === id);

  return productDat;
}

export { ProductData, getProductData };
