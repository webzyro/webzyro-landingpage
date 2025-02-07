import React from "react";

const StatCard = ({ stat }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img src={stat.icon} alt={stat.title} />
      <h2 className="text-4xl font-bold mb-2">{stat.title}</h2>
      <p className="text-muted-foreground text-base leading-relaxed">
        {stat.subtitle}
      </p>
    </div>
  );
};

export default StatCard;
