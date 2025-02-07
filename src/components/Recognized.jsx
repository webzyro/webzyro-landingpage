import Brand1 from "../assets/brand1.png";
import Brand2 from "../assets/brand2.png";
import Brand3 from "../assets/brand3.png";
import Brand4 from "../assets/brand4.webp";
import Brand5 from "../assets/brand5.webp";

const brands = [
  {
    id: 1,
    img: Brand1,
  },
  {
    id: 2,
    img: Brand2,
  },
  {
    id: 3,
    img: Brand3,
  },
  {
    id: 4,
    img: Brand4,
  },
  {
    id: 5,
    img: Brand5,
  },
];

const Recognized = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-[#333a91] font-semibold mb-4">
          Recognized For Excellence
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {brands.map((brand) => (
            <img
              key={brand.id}
              src={brand.img}
              className="w-20 md:w-40 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognized;
