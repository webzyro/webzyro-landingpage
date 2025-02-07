import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../utils/staticData";

const Seo = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-[#333a91] font-semibold mb-6">
          SEO Services We Offer
        </h1>
        <div className="w-full flex flex-wrap gap-5 justify-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seo;
