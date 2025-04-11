import React from "react";
import CalenderLogo from "../../assets/tickerr/CalenderLogo.png";
import phone from "../../assets/tickerr/phone.png";
import clock from "../../assets/tickerr/clock.png";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page";
import Calendar from "./Components/Calendar";
const CalendlyScheduler = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div>
  {/* Main Section: Title + Calendar */}
  <div className="flex flex-wrap lg:flex-nowrap gap-[50px]">
    <h2 className="text-2xl mt-[100px] w-full lg:w-[30%] sm:text-3xl md:text-5xl font-bold tracking-[0.002em] text-left">
      Get in touch with us. We're here to assist you.
    </h2>

    <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full lg:w-[70%] shadow-2xl p-6 rounded-[10px]">
      <div className="flex flex-col w-full lg:w-[330px]">
        <img src={CalenderLogo} className="w-[60px] h-[60px] mb-2" />
        <h5 className="text-[18px] mb-2 text-start">Nodeva.io</h5>
        <h3 className="text-[25px] mb-2 text-start">Product Demo</h3>
        <div className="flex gap-4 mb-4 items-center">
          <img src={clock} className="" />
          <h6 className="text-gray-light text-[15px]">30 min</h6>
        </div>
        <div className="flex gap-4 items-center">
          <img src={phone} className="" />
          <h6 className="text-gray-light text-[15px]">Phone call</h6>
        </div>
      </div>

      <div className="w-full">
        <Calendar />
      </div>
    </div>
  </div>

  <div className="flex mb-[50px] flex-wrap lg:flex-nowrap gap-10 justify-between rounded-[200px] mt-20 opacity-80">
    <div className="w-full lg:w-[50%]">
      <h2 className="font-['Plus_Jakarta_Sans'] text-start text-[30px] font-bold text-[#e0c3fc] tracking-[0.02em]">
        Subscribe to our Newsletter
      </h2>
      <p className="font-['Poppins'] text-justify font-light text-[15px] leading-[150%] text-[rgba(236,236,236,1)] mt-2">
        Subscribe for Updates: Stay informed about the latest investor updates,
        financial results, and announcements by subscribing to our newsletter.
      </p>
    </div>

    <div className="flex mt-6 mt-[90px] items-center w-full lg:w-[50%] h-[70px] rounded-full border border-transparent bg-transparent overflow-hidden">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 h-full  px-8 border-none bg-[transparent] text-lg font-['Poppins'] font-normal leading-[30px] outline-none z-[1] placeholder:font-normal placeholder:text-lg placeholder:leading-[30px]"
      />
      <button className="h-full w-[144px] bg-gradient-to-r from-[#8A38EE] to-[#D64FED] font-['Plus_Jakarta_Sans'] text-white text-base font-bold px-8 border-none cursor-pointer rounded-tr-full rounded-br-full z-[1] hover:opacity-90 transition-all duration-300">
        Subscribe
      </button>
    </div>
  </div>
</div>

    </Page>
  );
};

export default CalendlyScheduler;
