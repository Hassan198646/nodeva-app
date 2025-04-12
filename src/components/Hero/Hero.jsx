import React, { useState, useEffect } from "react";
import services from "../../assets/services.svg";
import arrow from "../../assets/arrow-down.png";
import star from "../../assets/tickerr/star.png";
import { useNavigate, useLocation } from "react-router-dom";

const textOptions = ["Product Designer", "Product Developer"];

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="subheading-container">
        <span className="subheading">Web & UI/UX Design Agency for</span>
        <img src={services} alt="Decoration" className="subheading-svg" />
      </div>
      <h2 className="text-[clamp(30px,3vw,30px)]  sm:text-[clamp(50px,6vw,100px)] font-bold tracking-[-0.05em]  text-center m-0">
        Accelerate Your Success
      </h2>{" "}
      <h2 className="text-[clamp(30px,4vw,40px)] sm:text-[clamp(50px,6vw,100px)] font-bold tracking-[-0.05em] ] text-center m-0">
        With Our Expert
      </h2>
      <div className="text-swap-container ">
        <div>
          <img src={star} />
        </div>
        <div className="swapping-text w-[90%] sm:w-[80%] ">
          <h2
            key={index}
            className="text text-[clamp(30px,4vw,40px)] sm:text-[clamp(50px,6vw,100px)]"
          >
            {textOptions[index]}
          </h2>
        </div>
        <div>
          <img src={star} className="relative top-[120px]" />
        </div>
      </div>
      <div
        className="w-full flex justify-center mb-10"
        onClick={() => navigate(isContactPage ? "/" : "/contact")}
      >
        <button
          className="cta-button"
          onClick={() => navigate(isContactPage ? "/" : "/contact")}
        >
          Let’s Talk <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
