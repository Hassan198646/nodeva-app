import React from "react";
import fb from "../../assets/fb.svg";
import media from "../../assets/media.svg";
import media_2 from "../../assets/media_2.svg";

const Footer = () => {
  return (
    <footer className="w-full mx-auto max-w-screen-xl bg-black text-white font-['Plus_Jakarta_Sans'] py-10 px-5">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-between">
        <div className="w-full lg:basis-[300px] min-w-[250px] flex-1">
          <h1 className="text-4xl text-start font-bold mb-4 bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2] bg-clip-text text-transparent">
            Nodeva
          </h1>
          <p className="text-gray-light text-start text-[16px] font-light mb-4 font-['Poppins']">
            Subscribe to our newsletter to receive the latest offers and news.
          </p>
          <div className="p-2 flex items-center justify-between w-full h-[60px] rounded-full rounded-full border border-[#75368a] bg-[#1F1134] overflow-hidden">
            <input
              type="email"
              placeholder="Email Here"
              className="flex-1 w-[50%] xv:w-full h-full px-6 border-none bg-[transparent] text-white text-[12px] font-['Poppins'] outline-none placeholder:text-white"
            />
            <button className=" h-full w-[50%] xv:w-full sm:w-[144px] text-[12px] bg-[#522574] text-white text-[10px] xv:text-sm font-bold border-none cursor-pointer rounded-tr-full rounded-full hover:opacity-90 transition-all duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className=" w-full lg:basis-[200px] min-w-[200px] flex-1">
          <h3 className="text-xl font-semibold mb-4 font-['Poppins']">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-light">
            <li className="mb-2">
              <a
                href="/terms-of-service"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px"
              >
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/privacy-policy"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px]"
              >
                Privacy Policy
              </a>
            </li>
            <li className=" mb-2">
              <a
                href="/contact-us"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:basis-[200px] min-w-[200px] flex-1">
          <h3 className="text-xl font-semibold mb-4 font-['Poppins']">
            Contact Information
          </h3>
          <p className="text-[16px] text-gray-light font-['Poppins']">
            Email: <span className="underline">info@nodeva.io</span>
          </p>
        </div>

        <div className="w-full items-center justify-center flex flex-col lg:basis-[200px] min-w-[200px] flex-1">
          <h2 className="text-xl font-semibold mb-4 font-['Poppins'] text-center md:text-left">
            Follow Us
          </h2>
          <div className="flex justify-center md:justify-start gap-4">
            <img src={fb} alt="Facebook" className="w-8 h-8 object-contain" />
            <img src={media} alt="Media 1" className="w-8 h-8 object-contain" />
            <img
              src={media_2}
              alt="Media 2"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-light  text-lg mt-10 pt-4">
        <p>© 2025 nodeva.io, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
