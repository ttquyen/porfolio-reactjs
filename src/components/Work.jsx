import React from "react";
import CoderComm from "../assets/projects/codercomm.png";
import MovieApp from "../assets/projects/movie.jpeg";
import Character from "../assets/projects/character.png";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">{"//"}Check out some of my recent work</p>
        </div>
        {/* Card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card item */}
          <div
            style={{ backgroundImage: `url(${MovieApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                The Movie App
              </span>
              <div>
                <a href="https://quyentt-movie-app-final.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ttquyen/the-movie-app/tree/enhance-final">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CoderComm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                CoderComm
              </span>
              <div>
                <a href="https://quyentt-coder-comm.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ttquyen/codercomm">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Character})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Character Customization
              </span>
              <div>
                <a href="https://quyentt-character-customization-app.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/ttquyen/character-customization-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
