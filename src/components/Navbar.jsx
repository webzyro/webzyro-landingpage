import { IoLogoWhatsapp } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-gradient-to-l from-[#fdfbfb] to-[#ebedee] shadow z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="w-36">
          <img src={Logo} alt="log" className="w-full h-full object-cover" />
        </div>
        <div className="flex items-center gap-4">
          <a
            className="decoration-0"
            href="https://api.whatsapp.com/send?phone=917992301727&amp;text=Hi"
          >
            <button className="flex items-center gap-2 bg-green-700 py-2 px-4 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 delay-100">
              <IoLogoWhatsapp size={30} color="white" />
              <span className="text-white font-bold hidden md:inline">
                WhatsApp Us
              </span>
            </button>
          </a>
          <a className="decoration-0" href="tel:+91-9262993859">
            <button className="flex items-center gap-2 bg-[#333a91] py-2 px-4 rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200 delay-100">
              <MdWifiCalling3 size={30} color="white" />
              <span className="text-white font-bold hidden md:inline">
                +91-9262993859
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
