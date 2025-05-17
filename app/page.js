import Header from "@/components/header/Header";
import HeroText from "@/components/hero/HeroText";
import SearchBox from "@/components/hero/SearchBox";
import StatCards from "@/components/statcards/StatCards";
import SliderCards from "@/components/slidercards/SliderCards";
import Productcarts from "@/components/productscards/ProductCards";
import Comment from "@/components/comments/Comment";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div className="font-vazirmatn">
      <div className="backgrund">
        <Header />
        <HeroText />
        <SearchBox />
        <StatCards />
      </div>
      <div className="backgrunds">
        <SliderCards />
        <div className="mx-4 backgrunds">
          <Productcarts />
        </div>
        <Comment />
        <div className="mx-4 backgrunds">
          <Blogs />
        </div>
        <Footer />
      </div>
    </div>
  );
}
