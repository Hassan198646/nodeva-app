import React from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-down.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";

  return (
    <div className=" top-2.5 left-[5%] right-[5%] flex items-center justify-between w-[100%] mx-auto max-w-[80rem] py-2.5 lg:w-[95%] lg:left-[2.5%] lg:right-[2.5%]">
      <div className="max-w-[clamp(100px,13vw,300px)] ">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-auto object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <button
        onClick={() => navigate(isContactPage ? "/" : "/contact")}
        className="flex items-center justify-center border border-[#B946DF] mt-[-30px] gap-2 
        w-[clamp(100px,13vw,300px)] 
         xs:h-[clamp(40px,7vh,53px)]   h-[clamp(20px,7vh,53px)] 
       px-4 py-2 
  xs:text-[clamp(14px,2vw,24px)]   text-[clamp(12px,1vw,20px)] 

  font-['Poppins'] font-bold text-white rounded-[40px] 
  bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] 
  hover:from-[#3D05DD] hover:to-[#EFA4F2] 
  transition-all duration-400 ease-in-out 
  whitespace-nowrap"
      >
        {isContactPage ? "Home" : "Let's Talk"}
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
