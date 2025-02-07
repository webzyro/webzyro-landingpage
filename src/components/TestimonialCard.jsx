import React from "react";

const TestimonialCard = ({ logo, content, author, role, image }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-sky-300 shadow-lg flex-1 min-w-[300px] max-w-[400px] flex flex-col hover:shadow-xl hover:shadow-sky-500 transition-transform duration-300 delay-75">
      <img src={logo} alt="Company logo" className="h-10 mb-6 object-contain" />
      <p className="flex-1 text-gray-600 leading-relaxed mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
