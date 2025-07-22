const ProductData = [
  {
    id: "1",
    imagsrc: "/product1.png",
    titlebig: "دوره آموزش SQL Server",
    titlesmol: "یادگیری جامع SQL",
    titlename: "علی احمدی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    id: "2",
    imagsrc: "/product3.png",
    titlebig: "دوره حرفه‌ای React",
    titlesmol: "ساخت پروژه‌ با ری‌اکت",
    titlename: "نگین رضایی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    id: "3",
    imagsrc: "/product2.png",
    titlebig: "دوره پایتون",
    titlesmol: "مناسب برای برنامه‌نویسان ",
    titlename: "محمد کریمی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  {
    id: "4",
    imagsrc: "/product3.png",
    titlebig: "دوره طراحی UI/UX",
    titlesmol: "آشنایی با طراحی رابط کاربری ",
    titlename: "سارا محمدی",
    clock: "۲۰:۳۸:۹",
    pris: "۳۸۰",
  },
  // 👇 برای تست صفحه دوم و سوم کپی کن یا موارد جدید اضافه کن
  {
    id: "5",
    imagsrc: "/product1.png",
    titlebig: "دوره جاوا اسکریپت پیشرفته",
    titlesmol: "برای حرفه‌ای‌ها",
    titlename: "حسین راد",
    clock: "۲۵:۳۸:۹",
    pris: "۵۰۰",
  },
  {
    id: "6",
    imagsrc: "/product2.png",
    titlebig: "دوره لاراول",
    titlesmol: "توسعه وب پیشرفته",
    titlename: "زینب رضوی",
    clock: "۱۵:۰۰:۰۰",
    pris: "۳۹۰",
  },
  {
    id: "7",
    imagsrc: "/product3.png",
    titlebig: "دوره CSS",
    titlesmol: "طراحی حرفه‌ای صفحات وب",
    titlename: "سهیل کریمی",
    clock: "۱۲:۴۰:۱۰",
    pris: "۲۵۰",
  },
  {
    id: "8",
    imagsrc: "/product2.png",
    titlebig: "دوره نکست جی‌اس",
    titlesmol: "SSR و SSG",
    titlename: "ریحانه صادقی",
    clock: "۱۷:۳۰:۲۰",
    pris: "۴۸۰",
  },
  {
    id: "9",
    imagsrc: "/product1.png",
    titlebig: "دوره امنیت وب",
    titlesmol: "SQL Injection و XSS",
    titlename: "بهنام علیپور",
    clock: "۱۳:۲۵:۵۰",
    pris: "۴۱۰",
  },
  {
    id: "10",
    imagsrc: "/product1.png",
    titlebig: "دوره گراف‌کیوال",
    titlesmol: "آشنایی با GraphQL",
    titlename: "کیانا محمدی",
    clock: "۱۰:۴۵:۰۰",
    pris: "۳۲۰",
  },
];

function getProductData(id) {
  let productDat = ProductData.find((item) => item.id === id);

  return productDat;
}

export { ProductData, getProductData };
