import React from "react";
import Mobile from "../../../../assets/tickerr/Mobile.png";
import arrow from "../../../../assets/arrow-down.png";

export default function Idea() {
  return (
    <section className="relative from-blue-950 to-purple-900 flex flex-col lg:flex-row items-center px-6 mt-[50px] overflow-hidden ">
      <div className="w-full lg:w-[50%] ">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-start font-bold leading-tight">
          Empower Your Vision And
          <span className="baseText text-purple-500">Transform</span> Ideas Into
          Reality.
        </h1>
        
        <button
          className="mt-8 flex items-center p-4 justify-center gap-2  p-2 text-[clamp(14px,2vw,24px)] font-['Poppins'] font-bold text-white rounded-[40px] border border-transparent bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2]  transition-all duration-400 ease-in-out whitespace-nowrap"
        >
          Get Started
          <img
            src={arrow}
            alt="arrow"
            className=" w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform  duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
          />
        </button>
      </div>
      
        <img src={Mobile} alt="Mobile app mockup" className="w-full sm:w-[60%] h-auto " />
    </section>
  );
}