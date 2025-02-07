import React from "react";
import { BiWindowAlt } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { stats } from "../utils/staticData";
import StatCard from "./StatCard";

const Why = () => {
  return (
    <section className="w-full bg-gradient-to-l from-[#23a2db] to-[#333a91] p-2">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center py-6">
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 p-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white text-center md:text-start">
            Why Choose Techmagnate for SEO Services?
          </h2>
          <p className="text-sm text-left text-wrap text-white">
            We’re the largest SEO services agency in India for a good reason. We
            work with hundreds of businesses to improve their Google ranking,
            website traffic, brand awareness, and online revenue.
          </p>
          <ul className="flex flex-col gap-2 mt-4 w-full md:w-sm">
            <li className="flex items-center gap-4 p-2 border-b border-white">
              <RiUserSearchLine className="inline-block text-white" size={20} />
              <span className="text-white text-wrap">
                <span className="font-bold text-xl">200+</span> Clients Served
              </span>
            </li>
            <li className="flex items-center gap-4 p-2">
              <BiWindowAlt className="inline-block text-white" size={20} />
              <span className="text-white text-wrap">
                <span className="font-bold text-xl">
                  360<sup>0</sup>
                </span>{" "}
                Digital Marketing Solutions
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
