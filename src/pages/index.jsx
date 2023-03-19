//write a sample home page

import BannerComponent from "@/components/home/banner";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <BannerComponent />
    </div>
  );
};

export default Home;
