import { useState } from "react";
import { faqs } from "../utils/staticData";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="w-full bg-white/10 backdrop-blur-sm inset-0">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 p-2 md:py-8 md:px-4">
        <h1 className="text-2xl md:text-3xl text-center text-[#333a91] font-semibold mb-4">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="w-full flex flex-col gap-4 justify-center">
          {faqs.map((question, i) => (
            <div
              key={question.id}
              className="flex flex-col justify-center gap-4"
            >
              <div
                onClick={() => handleClick(i)}
                className="flex items-center justify-between cursor-pointer bg-[#15509d] py-2 px-3 rounded-xl"
              >
                <h2 className="font-bold text-lg md:text-xl text-white">
                  {question.question}
                </h2>
                {isOpen === i ? (
                  <FaChevronCircleUp className="text-white" />
                ) : (
                  <FaChevronCircleDown className="text-white" />
                )}
              </div>
              <div
                className={`w-full px-4 flex flex-col gap-4 bg-slate-200 rounded-xl overflow-hidden transition-max-height duration-500 ease-in-out ${
                  isOpen === i ? "max-h-[500px] py-4" : "max-h-0"
                }`}
              >
                <h3 className="font-medium text-slate-700">{question.title}</h3>
                <ul className="flex flex-col gap-2 items-start px-10">
                  {question?.points?.map((point, index) => (
                    <li key={index} className="list-disc text-slate-500">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
