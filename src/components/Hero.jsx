import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import SectionTitle from "../SectionTitle";
const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col py-4">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-cyan-600 font-semibold dark:text-emerald-500">
          Hi, This is Suvo Roy
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <div className="flex flex-row gap-2">
          <Link
            to="/projects"
            className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600 md:text-md "
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600 md:text-md "
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-600 md:text-md "
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-8">
        <SectionTitle> Follow me</SectionTitle>
          <div className="flex items-center gap-6">
            <span className="rounded-md dark:bg-slate-800 bg-gray-100 p-3">
              <Link to="https://www.facebook.com/ps.shuvoroy" className="text-4xl text-blue-600" target="_blank">
                <CiFacebook />
              </Link>
            </span>
            
            <span className="rounded-md dark:bg-slate-800 bg-gray-100 p-3">
              <Link to="https://github.com/Shuvo-Roy" className="text-4xl" target="_blank">
                <AiFillGithub />
              </Link>
            </span>
            <span className="rounded-md dark:bg-slate-800 bg-gray-100 p-3">
              <Link to="https://www.linkedin.com/in/shuvo-roy-00395425b/" className="text-4xl text-sky-500" target="_blank">
                <CiLinkedin />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
