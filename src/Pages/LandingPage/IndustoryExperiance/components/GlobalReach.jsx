import React from "react";
import globe_illustration from "../../../../assets/tickerr/globe.png";
import rocket_illustration from "../../../../assets/tickerr/Rocket.png";
import { motion } from "framer-motion";

export default function GlobalReach() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
      {/* Globe Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#1E152E] rounded-[10px] w-full md:w-1/2 overflow-hidden "
      >
        <div className="relative z-10 p-4 md:p-6 flex flex-col h-full">
          <div className="flex-1">
            <h1 className="text-base md:text-lg font-bold text-[#bb5eff]">
              Global Reach
            </h1>
            <p className="text-gray-light text-xs md:text-sm mt-2 md:mt-3">
              We drive forward-thinking solutions that propel businesses to new
              heights, ensuring rapid growth and transformation.
            </p>
          </div>
          <img
            src={globe_illustration}
            className="md:mt-0 w-[full] mx-auto  "
            alt="Globe"
          />
        </div>
      </motion.div>

      {/* Rocket Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-[#1E152E] rounded-[10px] w-full md:w-1/2 overflow-hidden"
      >
        <div className="relative z-10 p-4 md:p-6 flex flex-col h-full">
          <div className="flex-1">
            <h1 className="text-base md:text-lg font-bold text-[#bb5eff]">
              Innovation That Takes Off
            </h1>
            <p className="text-gray-light text-xs md:text-sm mt-2 md:mt-3 text-justify md:w-[85%]">
              We drive forward-thinking solutions that propel businesses to new
              heights, ensuring rapid growth and transformation.
            </p>
          </div>
          <img
            src={rocket_illustration}
            className="relative top-[10px] w-[full] mx-auto "
            alt="Rocket"
          />
        </div>
      </motion.div>
    </div>
  );
}