import React from "react";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import Git from "../assets/skills/github1.png";
import JS from "../assets/skills/javascript.png";
import Mongo from "../assets/skills/mongo.png";
import Node from "../assets/skills/node.png";
import ReactJS from "../assets/skills/react.png";
import MUI from "../assets/skills/mui.png";
const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full md:h-screen bg-[#0a192f]  text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600 py-4">
            Skills
          </p>
          <p className="py-8 text-gray-300">
            {"//"} These are the technologies I'vw worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
            <p className="py-2">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={CSS} alt="CSS icon" />
            <p className="py-2">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={JS} alt="JS icon" />
            <p className="py-2">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={ReactJS} alt="ReactJS icon" />
            <p className="py-2">ReactJS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Node} alt="Node icon" />
            <p className="py-2">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Mongo} alt="Mongo icon" />
            <p className="py-2">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={Git} alt="Git icon" />
            <p className="py-2">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto " src={MUI} alt="MUI icon" />
            <p className="py-2">MUI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
