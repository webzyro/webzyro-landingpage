import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gradient-to-l from-[#23a2db] to-[#333a91] shadow-md rounded-lg p-6 max-w-xs w-full md:w-1/2 lg:w-1/3 hover:-translate-y-1.5 transition-transform duration-300 delay-75">
      <div className="flex items-center justify-around gap-2 mb-4">
        <div className="flex items-center justify-center bg-white rounded-2xl p-2">
          <img src={service.icon} alt="icon" className="w-10 object-cover" />
        </div>
        <h2 className="text-lg font-semibold mb-2 text-center text-slate-50">
          {service.title}
        </h2>
      </div>
      <p className="text-slate-200 text-base text-justify">{service.desc}</p>
    </div>
  );
};

export default ServiceCard;
