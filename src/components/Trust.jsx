import React from "react";
import Carousel from "./Carousel";
import Seo from "./Seo";

const Trust = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-[#333a91] font-semibold">
          Trusted by India’s Leading Brands
        </h1>
        <div className="w-full overflow-x-hidden">
          <Carousel />
        </div>
      </div>
      <Seo />
    </section>
  );
};

export default Trust;
