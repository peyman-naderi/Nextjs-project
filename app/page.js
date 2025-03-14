import Header from "@/components/header/Header";
import HeroText from "@/components/hero/HeroText";
import SearchBox from "@/components/hero/SearchBox";
import StatCards from "@/components/statcards/StatCards";
export default function Home() {
  return (
    <div className="backgrund font-vazirmatn">
      <Header />
      <HeroText />
      <SearchBox />
      <StatCards />
    </div> 
  );
}
