import Header from "@/components/header/Header";
import HeroText from "@/components/hero/HeroText";
import SearchBox from "@/components/hero/SearchBox";
import StatCards from "@/components/statcards/StatCards";
import SliderCards from "@/components/slidercards/SliderCards";

export default function Home() {
  return (
    <div className="font-vazirmatn">
        <div className="backgrund">
          <Header />
          <HeroText />
          <SearchBox />
          <StatCards />
        </div>

        <div className="lg:mx-10">
          <SliderCards />
        </div> 
          
    </div>

  );
}
