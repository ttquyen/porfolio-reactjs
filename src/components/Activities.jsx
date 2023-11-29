import React from "react";
import Halong from "../assets/activities/halong.jpg";
import Bentre from "../assets/activities/bentre.jpg";
import Badminton from "../assets/activities/badminton.jpg";

const Activities = () => {
  return (
    <div
      name="activities"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600">
            Activities
          </p>
          {/* <p className="py-8 text-gray-300">
            {"//"} These are the technologies I've worked with
          </p> */}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-200 h-72  mx-auto "
              src={Halong}
              alt="HTML icon"
            />
            <p className="py-2">Amazing Halong 2023</p>
          </div>
          <div className="shadow-md shadow-[rgb(4,12,22)] hover:scale-110 duration-500">
            <img className="w-200 h-72  mx-auto " src={Bentre} alt="CSS icon" />
            <p className="py-2">Ben Tre Bephaco 2023</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-200 h-72 mx-auto "
              src={Badminton}
              alt="JS icon"
            />
            <p className="py-2">Badminton</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-200 mx-auto " src={Halong} alt="ReactJS icon" />
            <p className="py-2">Yoga</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Activities;
