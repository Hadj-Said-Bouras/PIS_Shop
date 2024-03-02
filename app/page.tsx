import Image from "next/image";
import RightBar from "./Components/rightbar";
import Banner from "./Components/homebanner";
import FlashSales from "./Components/flashsales";
import Categories from "./Components/categories";
import ThisMonth from "./Components/thismonth";
import MiddleBanner from "./Components/middlebanner";
import OurProducts from "./Components/ourproducts";
import Featured from "./Components/featured";

export default function Home() {
  return (
    <div className="w-full h-full">
    <div className="bg-white h-screen flex flex-row ">
      <RightBar /> 
      <div className="absolute ml-[400px]">
      <Banner />
      </div>
    </div>
      <FlashSales />
      <div className="h-[1px] w-[1300px] mx-auto bg-gray-400"></div>
      <div >
        <Categories />
        
      </div>
      <div>
        <ThisMonth />
      </div>
      <div>
        <MiddleBanner />
      </div>
      <div>
        <OurProducts />
      </div>
      <div>
        <Featured />
      </div>
    </div>
  );
}
