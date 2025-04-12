import React from "react";
import tools from "../../../../assets/tickerr/Tiles.png";
import chat from "../../../../assets/chat.svg";
export default function Innovation() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-stretch">
      <div className="relative bg-gradient-dark rounded-[10px] w-full md:w-[50%] overflow-hidden ">
        <div className="relative z-10 p-6">
          <h1 className="text-[20px] font-bold text-[#bb5eff]">
            Innovation That Takes Off
          </h1>
          <p className="text-gray-light text-start text-[12px] mt-3">
            We drive forward-thinking solutions that propel businesses to new
            heights, ensuring rapid growth and transformation.
          </p>
        </div>

        <img
          src={tools}
          className="relative bottom-[30px]  w-[full] mx-auto"
          alt="tools"
        />
      </div>
      <div className="relative bg-gradient-dark  rounded-[10px] w-full md:w-[50%] overflow-hidden">
        <div className="relative z-10 p-6">
          <h1 className="text-[20px] font-bold text-[#bb5eff]">
            Innovation That Takes Off
          </h1>
          <p className="text-gray-light text-start text-[12px] mt-3">
            We drive forward-thinking solutions that propel businesses to new
            heights, ensuring rapid growth and transformation.
          </p>
        </div>

        <img
          src={chat}
          className=" w-[full] relative bottom-[80px] h-[200px] mt-[2rem] w-[full] mx-auto object-cover"
          alt="chat"
        />
      </div>

    </div>

  );
}
