import React from "react";
import { motion } from "framer-motion";
import Mobile from "../../../../assets/tickerr/Mobile.png";
import arrow from "../../../../assets/arrow-down.png";

export default function Idea() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col-reverse lg:flex-row items-center px-6 mt-[50px] overflow-hidden bg-gradient-to-br from-blue-950 to-purple-900"
    >
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1"
      >
        <h1 className="text-white text-lg sm:text-3xl md:text-4xl font-bold leading-tight text-center lg:text-left">
          Empower Your Vision And
          <span className="baseText text-purple-500">Transform</span> Ideas Into
          Reality.
        </h1>

        <button className="mt-4 flex items-center gap-2 text-[clamp(14px,2vw,24px)] font-['Poppins'] font-bold text-white rounded-[40px] border border-transparent bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2] px-6 py-3 transition-all duration-400 ease-in-out whitespace-nowrap">
          Get Started
          <img
            src={arrow}
            alt="arrow"
            className="w-[clamp(10px,1.5vw,13px)] h-[clamp(10px,1.5vw,13px)] transition-transform duration-300 hover:rotate-[-90deg] hover:-translate-y-0.5"
          />
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src={Mobile}
        alt="Mobile app mockup"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full sm:w-[60%] h-auto mb-8 lg:mb-0 order-1 lg:order-2"
      />
    </motion.section>
  );
}
