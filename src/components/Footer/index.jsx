import React from "react";
import fb from "../../assets/fb.svg";
import media from "../../assets/media.svg";
import media_2 from "../../assets/media_2.svg";
import Footerimg from "../../assets/tickerr/FooterInput.png";

const Footer = () => {
  return (
    <footer className="w-full mx-auto max-w-[80rem] bg-black text-white font-['Plus_Jakarta_Sans'] py-10 px-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1 w-full sm:max-w-[400px]">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2] bg-clip-text text-transparent">
            Nodeva
          </h1>
          <p className="text-white text-[16px] font-light mb-4 font-['Poppins']">
            Subscribe to our newsletter to receive the latest offers and news.
          </p>
          <img
            src={Footerimg}
            className="w-full sm:w-[300px]"
            alt="Newsletter Input"
          />
        </div>

        <div className="flex-1 w-full sm:max-w-[300px]">
          <h3 className="text-xl font-semibold mb-4 font-['Poppins']">
            Quick Links
          </h3>
          <ul className="flex sm:block justify-between">
            <li>
              <a
                href="/terms-of-service"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px]"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="hover:text-[#8A38EE] font-['Poppins'] text-[16px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 max-w-[300px]">
          <h3 className="text-xl font-semibold mb-4 font-['Poppins']">
            Contact Information
          </h3>
          <p className="text-[16px] font-['Poppins']">
            Email: <span className="underline">info@nodeva.io</span>
          </p>
        </div>

        <div className="flex-1 w-full sm:max-w-[300px]">
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

      {/* Bottom text */}
      <div className="text-center text-sm mt-10 border-t border-white/20 pt-4">
        <p>© 2025 nodeva.io, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
