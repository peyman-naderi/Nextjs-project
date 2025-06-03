import Header from "@/components/Home/header/Header";
import Footer from "@/components/Home/footer/Footer";
import SearchAndSort from "@/common/SearchAndSort";
import ProducCategories from "./Product‌Categories";

export default function ProductsPage() {
  return (
    <>
      <div className="bg-gray-700  text-white pb-8 rounded-b-3xl ">
        <Header />
      </div>
      <SearchAndSort />
      <div className="mx-32">
        <ProducCategories />
      </div>
      <div className="rounded-t-3xl">
        <Footer />
      </div>
    </>
  );
}
