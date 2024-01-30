import Header from "../sections/Header";
import Hero from "../sections/Hero";
import BestOfBest from "../sections/BestOfBest";
import JoinUs from "../sections/JoinUs";
import LoveUs from "../sections/LoveUs";
import Collection from "../sections/Collection";
import Collected from "../sections/Collected";
import Footer from "../sections/Footer";
import { links, heroData, bestOfBestData, joinUsData, LoveData, collectionData, footerData } from "./config";

export default function Home() {
  return (
    <main className="text-lg w-full overflow-x-hidden">
      <Header links={links}/>
      <Hero data={heroData}/>
      <BestOfBest data={bestOfBestData}/>
      <JoinUs data={joinUsData}/>
      <LoveUs data={LoveData}/>
      <Collection data={collectionData}/>
      <Collected/>
      <Footer data={footerData}/>
    </main>
  );
}