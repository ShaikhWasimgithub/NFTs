import HeroSection from "../../components/HeroSection/HeroSection";
import TrendingCollection from "../../components/TrendingCollection/TendingCollection";

import TopCreators from "../../components/TopCreators/TopCreators";
import BrowseCategories from "../../components/BrowseCategories/BrowseCategories.jsx";
import DiscoverMoreNFTs from "../../components/DiscoverMoreNFTs/DiscoverMoreNFTs";
import NFTHighlight from "../../components/NFTHighlight/NFTHighlight";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import SubscribeWidget from "../../components/SubscribeWidget/SubscribeWidget";
// import Footer from "../../components/Footer/Footer";
import "../Home/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverMoreNFTs />
      <NFTHighlight />
      <HowItWorks />
      <SubscribeWidget />
      {/* <Footer /> */}
    </div>
  );
}
