import { RiUserSearchLine } from "react-icons/ri";
import { BiWindowAlt } from "react-icons/bi";
import { TbLockSearch } from "react-icons/tb";
import Form from "./Form";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-l from-[#23a2db] to-[#333a91] p-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-1 md:py-8">
        <div className="w-full md:flex-1 space-y-4 flex flex-col md:px-8">
          <h1 className="text-2xl md:text-4xl font-normal md:font-bold text-white text-center md:text-start">
            Scale Your Site Leads and Traffic with Techmagnate's SEO Services
          </h1>
          <p className="text-sm text-center md:text-start md:text-xl text-white font-normal md:font-semibold">
            Delivering Results in Just 12 Months
          </p>
          <ul className="flex flex-col gap-2 mt-4 w-full md:w-sm">
            <li className="flex items-center gap-4 p-2 border-b border-white">
              <RiUserSearchLine className="inline-block text-white" size={20} />
              <span className="text-white text-wrap">
                Avg. <span className="font-bold text-xl">83%</span> Growth in
                Leads
              </span>
            </li>
            <li className="flex items-center gap-4 p-2 border-b border-white">
              <BiWindowAlt className="inline-block text-white" size={20} />
              <span className="text-white text-wrap">
                Avg. <span className="font-bold text-xl">121%</span> Growth in
                Traffic
              </span>
            </li>
            <li className="flex items-center gap-4 p-2">
              <TbLockSearch className="inline-block text-white" size={20} />
              <span className="text-white text-wrap">
                Avg. <span className="font-bold text-xl">59%</span> Growth in
                Top 10 Keywords
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;
