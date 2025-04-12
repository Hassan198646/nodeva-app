import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Idea from "./component/Idea";

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1F1134] border-2 border-[#75368a] rounded-[30px] overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-5 sm:p-8 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-[12px]  sm:text-lg font-[Plus Jakarta Sans]">
          {question}
        </h3>
        {isOpen ? (
          <IoIosRemove className="text-[#B946DF]" size={32} />
        ) : (
          <IoIosAdd className="text-[#B946DF]" size={32} />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", paddingTop: 0 }}
            exit={{ opacity: 0, height: 0, paddingTop: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="px-6 text-start pb-4 text-gray-light text-sm sm:text-base"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Component
export default function Services() {
  const faqData = [
    {
      question: "What services does your agency offer?",
      answer:
        "We provide UI/UX design, web development, branding, mobile app development, and custom software solutions tailored to your business goals.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We collaborate with startups, businesses, and enterprises across various industries, ensuring their digital presence stands out.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our process includes research, wireframing, prototyping, user testing, and iterative design to ensure the best user experience.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Depending on the complexity, most projects take from 2 weeks to 3 months. We ensure transparency and timely delivery.",
    },
    {
      question: "How much do we price our services?",
      answer:
        "Our pricing is based on project scope. We offer flexible packages and clear cost breakdowns with no hidden charges.",
    },
    {
      question: "How can we start working?",
      answer:
        "Just contact us through our form or email. We’ll set up a quick discovery call to learn about your needs and propose next steps.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 mx-auto max-w-[80rem] w-full p-6 sm:p-8"
    >
      <h1 className="text-xl sm:text-2xl md:text-5xl text-center mb-12">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Idea />
    </motion.div>
  );
}
