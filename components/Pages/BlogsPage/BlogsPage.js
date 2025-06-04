import Header from "@/components/Home/header/Header";
import Footer from "@/components/Home/footer/Footer";
import SearchAndSort from "@/common/SearchAndSort";
import BlogCategories from "./BlogCategories";
export default function BlogsPage() {
  return (
    <>
      <div className="bg-gray-700  text-white pb-8 rounded-b-3xl ">
        <Header />
      </div>
      <SearchAndSort />
      <div className="backgrunds">
        <BlogCategories />
      </div>
      <div className="rounded-t-3xl">
        <Footer />
      </div>
    </>
  );
}
