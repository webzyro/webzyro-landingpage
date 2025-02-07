import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "../utils/staticData";

const Carousel = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full flex items-center justify-center overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[100px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
