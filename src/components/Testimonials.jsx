import { testimonials } from "../utils/staticData";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="w-full bg-gradient-to-l from-[#23a2db] to-[#333a91]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-white font-semibold mb-4">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
