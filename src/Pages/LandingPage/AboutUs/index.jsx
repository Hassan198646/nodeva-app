import React from "react";
import { motion } from "framer-motion";
import Photo from "../../../assets/tickerr/Photo.png";
import Photo3 from "../../../assets/tickerr/Photo3.png";
import Photo4 from "../../../assets/tickerr/Photo4.png";
import Photo2 from "../../../assets/tickerr/Photo2.png";
import AboutProfile from "../../../assets/tickerr/AboutProfile.png";
import Flag from "../../../assets/tickerr/Flag.png";
import Frame from "../../../assets/tickerr/Frame.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function WhoWeAre() {
  return (
    <section className="p-6 mx-auto max-w-[80rem] mt-[0px] w-full">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Who We Are
      </motion.h1>

      <div className="flex flex-col justify-center lg:flex-row gap-6">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Box 1 */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#1F1134] flex justify-between p-6 border rounded-[20px] border-[#B946DF]"
          >
            <div>
              <h2 className="text-xl sm:text-3xl text-start text-[#FODAFB] font-bold mb-4">
                Striving For Excellence
              </h2>
              <p className="text-gray-light text-start text-[17px] w-full sm:w-[500px]">
                We aim to offer the best solutions, always learning and growing
                to serve you better.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={Frame} alt="Badge" className="w-[70px]" />
            </div>
          </motion.div>

          {/* Box 2, 3, 4 */}
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <motion.div
              variants={fadeInUp}
              className="bg-[#1F1134] flex justify-center items-center w-full xs:w-[auto] p-6 border rounded-[20px] border-[#B946DF]"
            >
              <p className="text-[#FODAFB] font-bold">
                We Are Here To Be Your Solution.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#1F1134] w-full xs:w-[auto] p-6 border rounded-[20px] border-[#B946DF]"
            >
              <h6 className="text-center text-[#FODAFB] font-bold mb-2">
                Design Showcase
              </h6>
              <div className="flex justify-center gap-2">
                {["pink-500", "blue-500", "pink-600"].map((color, i) => (
                  <div
                    key={i}
                    className={`bg-${color} rounded-md w-8 h-8 flex items-center justify-center`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      width="16"
                      height="16"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#1F1134] w-full xs:w-[auto] p-6 border rounded-[20px] border-[#B946DF]"
            >
              <div className="flex justify-center items-center -space-x-2 mb-2">
                {[Photo, Photo2, Photo4, Photo3, AboutProfile].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-8 h-8 rounded-full bg-red-300 border-2 border-gray-900"
                    alt={`team-${i}`}
                  />
                ))}
              </div>
              <p className="text-sm text-center text-gray-light">
                15+ Team Members
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Big Box */}
        <motion.div
          className="lg:w-1/3 bg-[#1F1134] p-6 border rounded-[20px] border-[#B946DF]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center">
            <div className="bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img src={Flag} className="h-[40px] w-[40px]" />
            </div>
            <h2 className="text-2xl sm:text-3xl text-[#FODAFB] font-bold">
              Creating Impact
              <br />
              With 50+
              <br />
              Successful Projects
            </h2>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-6 flex flex-col justify-center items-center md:flex-row gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <button className="bg-gradient-to-r hidden md:block from-[#3D05DD] to-[#EFA4F2] text-white px-6 py-3 rounded-full font-medium">
          Learn More About Us
        </button>

        <div className="bg-[#1F1134] w-full sm:w-[60%] text-justify border rounded-[20px] border-[#B946DF] p-6">
          <p className="text-[18px] text-gray-light">
            With years of experience in the industry{" "}
            <span className="font-bold">Nodeva</span> has helped{" "}
            <span className="font-bold">countless businesses</span> reach new
            heights. Our team of dedicated professionals ensures that every
            project is handled with <span className="font-bold">precision</span>{" "}
            and <span className="font-bold">passion</span>. We believe in
            building long-term relationships with our clients, providing them
            with the tools and strategies they need to succeed.
          </p>
        </div>

        <button className="bg-gradient-to-r block md:hidden from-[#3D05DD] to-[#EFA4F2] text-white px-6 py-3 rounded-full font-medium">
          Learn More About Us
        </button>
      </motion.div>
    </section>
  );
}
