import React from "react";
import ResultCard from "./ResultCard";
import { results } from "../utils/staticData";

const CaseStudy = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-[#333a91] font-semibold mb-6">
          Client Success Stories
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
