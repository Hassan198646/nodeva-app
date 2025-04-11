import { useState, useEffect } from "react";
import GlobbalReach from "./components/GlobalReach";
import Innovation from "./components/Innovation";
import { motion } from 'framer-motion';
export default function PremiumBusinessGrid() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className=" p-6 mx-auto max-w-[80rem]  mt-[50px] w-full pt m-0">
      <h1
        className="text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-12"
      >
        Our Industry Experience
      </h1>
      <div className="flex  flex-col md:grid-cols-2 gap-12 md:gap-10">
        <GlobbalReach />
        <Innovation />
      </div>
    </div>
  );
}
