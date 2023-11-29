import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/girl.png";
import { Link } from "react-scroll";
import { FaFacebookSquare } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav((pre) => !pre);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Img" style={{ width: "50px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="activities"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Activities
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="activities"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Activities
          </Link>
        </li>
        <li className="py-6 text-4xl ">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ttquyen765/"
              className=" w-full flex items-center justify-between text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ttquyen"
              className=" w-full flex items-center justify-between text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/thuyquyen.truong.50/"
              className=" w-full flex items-center justify-between text-gray-300"
            >
              Facebook <FaFacebookSquare size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex items-center justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/"
              className=" w-full flex items-center justify-between text-gray-300"
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
