import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Form from "./Form";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="w-full bg-gradient-to-l from-[#23a2db] to-[#333a91]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-2 justify-center md:justify-between p-4">
        <h1 className="text-2xl text-center md:text-left md:text-4xl font-normal md:font-semibold text-white">
          Want to see <br className="hidden md:block" /> Techmagnate in Action?
        </h1>
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-sm md:text-lg text-white text-center md:text-left">
            Talk to our experts and begin your{" "}
            <br className="hidden md:block" /> growth journey today!
          </p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="py-2 md:py-3 px-4 border-2 border-blue-600 hover:border-black rounded-xl hover:bg-white hover:text-black transition-colors delay-75 duration-300 cursor-pointer text-lg md:text-xl font-bold text-blue-600"
          >
            Get in Touch
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-full max-w-lg bg-gradient-to-l from-[#23a2db] to-[#333a91] p-4 rounded-2xl">
            <div className="flex justify-end">
              <IoIosCloseCircle
                onClick={() => setIsOpen(false)}
                className="text-white cursor-pointer"
                size={30}
              />
            </div>
            <Form />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
