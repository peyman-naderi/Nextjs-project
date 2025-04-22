import Header from "@/components/header/Header";
import HeroText from "@/components/hero/HeroText";
import SearchBox from "@/components/hero/SearchBox";
import StatCards from "@/components/statcards/StatCards";
import SliderCards from "@/components/slidercards/SliderCards";
import Productcarts from "@/components/productscards/ProductCards";
export default function Home() {
  return (
    <div className="font-vazirmatn">
        <div className="backgrund">
          <Header />
          <HeroText />
          <SearchBox />
          <StatCards />
        </div>
          <SliderCards />
        <div className="mx-4">
          <Productcarts />
        </div> 
          
    </div>

  );
}
