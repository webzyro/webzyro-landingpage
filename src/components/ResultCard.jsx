import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ResultCard = ({ logo, metrics }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-sky-300 flex-1 min-w-[300px] max-w-[400px]">
      <img src={logo} alt="Company logo" className="h-12 mb-6 object-contain" />
      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="border-t pt-4 first:border-t-0 first:pt-0"
          >
            <div className="flex items-center gap-2 mb-1">
              <BsArrowUpRight className="text-emerald-500 w-5 h-5" />
              <span className="text-2xl font-bold">{metric.value}</span>
            </div>
            <div className="font-semibold text-gray-900 mb-1">
              {metric.label}
            </div>
            <p className="text-sm text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
