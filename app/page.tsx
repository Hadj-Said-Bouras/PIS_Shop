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
      <div className="lg:ml-20 lg:mt-5 mx-auto">
      <Banner />
      </div>
    </div>
   
    <div> 
      
      <FlashSales />
    </div>
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
