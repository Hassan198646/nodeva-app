import React from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow-down.png";
import appointmentCard from "../assets/card.svg"; 
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute top-2.5 left-[5%]ですよね right-[5%] flex items-center justify-between w-[90%] max-w-[1800px] mx-auto py-2.5">
        <div className="max-w-[clamp(120px,15vw,325px)] mt-5">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>

        <button 
          onClick={() => navigate("/")}
          className="flex items-center justify-center mt-[-30px] gap-2 w-[clamp(120px,14vw,153px)] h-[clamp(40px,7vh,53px)] px-[clamp(16px,3vw,30px)] py-[clamp(8px,2vw,18px)] text-[clamp(14px,2vw,24px)] font-['Poppins'] font-semibold text-white rounded-[40px] border border-transparent bg-gradient-to-r from-[#0A0A14] to-[#0A0A14] hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out whitespace-nowrap"
        >
          Home 
          <img 
            src={arrow} 
            alt="arrow" 
            className="w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
          />
        </button>
      </div>

      <div className="mt-[220px] text-center text-2xl font-['Arial',sans-serif]">
        <div className="flex items-center justify-start h-[60vh] pl-[5vw]">
          <h2 className="text-[clamp(50px,6vw,80px)] font-bold tracking-[0.002em] leading-[clamp(60px,8vw,100px)] text-left">
            Get in touch<br />
            with us. We're<br />
            here to assist<br />
            you.
          </h2>

          <div className="w-[968px] h-[604px] flex items-center justify-center gap-2.5 rounded-[20px] ml-[280px] mt-[70px] overflow-hidden">
            <img 
              src={appointmentCard} 
              alt="Appointment Card" 
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="flex justify-between items-center pl-20 pr-20 rounded-[200px] w-[95%] mt-20 opacity-80">
          <div className="max-w-[1200px]">
            <h2 className="font-['Plus_Jakarta_Sans'] text-[40px] font-bold text-[#e0c3fc] tracking-[0.02em]">
              Subscribe to our Newsletter
            </h2>
            <p className="font-['Poppins'] font-light text-xl leading-[150%] text-[rgba(236,236,236,1)] text-left mt-[-10px]">
              Subscribe for Updates: Stay informed about the latest investor updates, financial <br/> 
              results, and announcements by subscribing to our newsletter.
            </p>
          </div>

          <div className="flex items-center w-[850px] h-[84px] rounded-[100px] border border-transparent bg-transparent overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-[100px] before:p-[1px] before:bg-gradient-to-b before:from-[#D64FED] before:to-[#8A38EE] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:pointer-events-none">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 p-5 pl-8 border-none bg-transparent text-white text-lg font-['Poppins'] font-normal leading-[30px] outline-none z-[1] placeholder:font-['Poppins'] placeholder:font-normal placeholder:text-lg placeholder:leading-[30px] placeholder:text-[rgba(255,255,255,1)]"
            />
            <button className="w-[144px] h-[84px] bg-gradient-to-r from-[#8A38EE] to-[#D64FED] font-['Plus_Jakarta_Sans'] text-white text-base font-bold p-4 pl-8 pr-8 border-none cursor-pointer rounded-tr-[6px] rounded-br-[6px] rounded-tl-0 rounded-bl-0 z-[1] hover:bg-[#9333ea]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;