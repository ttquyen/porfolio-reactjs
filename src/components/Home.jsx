import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Chloe Truong
        </h1>
        <p className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-end Developer.
        </p>
        <p className="text-[#8892b0] py-8 max-w-[700px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          iure, modi rem facere ipsum tenetur reprehenderit sapiente. Quis
          voluptas magnam et repudiandae fugiat ullam hic atque qui? Fugiat,
          omnis aliquid.
        </p>
        <div>
          <button className="group text-white px-4 py-3 border-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
