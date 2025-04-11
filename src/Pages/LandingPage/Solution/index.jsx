import React from "react";
import { motion } from "framer-motion";
import Vector from "../../../assets/tickerr/Vector.svg";
import Slider from "../../../assets/tickerr/Slider.png";
import VectorOne from "../../../assets/tickerr/VectorOne.png";
import VectorTwo from "../../../assets/VectorTwo.svg";

const solutionsData = [
  {
    image: Vector,
    title: "Technology Integration",
    description:
      "We drive forward-thinking solutions that propel businesses to new heights, ensuring rapid growth and transformation.",
    imgClass: "w-[20%] mt-8 mb-8",
  },
  {
    image: Slider,
    title: "Technology Integration",
    description:
      "We drive forward-thinking solutions that propel businesses to new heights, ensuring rapid growth and transformation.",
    imgClass: "w-[70%] mt-10 mb-16",
  },
  {
    image: VectorOne,
    title: "Technology Integration",
    description:
      "We drive forward-thinking solutions that propel businesses to new heights, ensuring rapid growth and transformation.",
    imgClass: "w-full",
  },
  {
    image: VectorTwo,
    title: "Technology Integration",
    description:
      "We drive forward-thinking solutions that propel businesses to new heights, ensuring rapid growth and transformation.",
    imgClass: "w-full",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const SolutionsSection = () => {
  return (
    <div className="bg-gradient-bg mx-auto max-w-[80rem] text-white p-6  mt-[50px]">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our Solutions
      </h1>

      <div className="flex flex-wrap justify-between gap-4 mt-[60px]">
        {solutionsData.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-custom-gradient p-6 rounded-[10px] w-full md:w-[48%] overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="flex  justify-center items-center">
              <img
                src={solution.image}
                className={solution.imgClass}
                alt="solution"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg text-start font-bold text-[#bb5eff]">
                {solution.title}
              </h2>
              <p className="text-gray-light text-start text-sm mt-1">
                {solution.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
