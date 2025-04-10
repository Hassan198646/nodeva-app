import React from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-down.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className=" top-2.5 left-[5%] right-[5%] flex items-center justify-between w-[90%] mx-auto max-w-[80rem] py-2.5 lg:w-[95%] lg:left-[2.5%] lg:right-[2.5%]">
      <div className="max-w-[clamp(120px,15vw,325px)] ">
        <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
      </div>

      <button
        onClick={() => navigate("/calendar")}
        className="flex items-center justify-center mt-[-30px] gap-2 w-[clamp(120px,14vw,192px)] h-[clamp(40px,7vh,53px)] px-[clamp(16px,3vw,30px)] py-[clamp(8px,2vw,18px)] text-[clamp(14px,2vw,24px)] font-['Poppins'] font-bold text-white rounded-[40px] border border-transparent bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out whitespace-nowrap lg:px-5 lg:py-3 md:px-[10px] md:py-2.5 sm:px-4 sm:py-2"
      >
        Let's Talk
        <img
          src={arrow}
          alt="arrow"
          className="w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
};

export default Navbar;
