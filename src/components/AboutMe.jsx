import React from 'react'
import { Link } from "react-router-dom";
import myImage from '../Assests/myImg.jpg';
import SkillsItem from './SkillsItem';
import Skills from './Skills';
import Education from './Education';

const AboutMe = () => {
    
  return (
    <div className='flex items-center justify-center flex-col py-4'>
    <div className="flex flex-row gap-2 items-center justify-center mt-6">
          <Link
          to="/"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          Home
        </Link>
        <Link to="/projects"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          Pojects
        </Link>
        <Link to="/contact"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          Contact
        </Link>
        </div>
        <div className=' flex items-center justify-center mt-8 mb-4'>
        <img src={myImage}alt="My Image" className='w-52 h-52 rounded-full '/>
        </div>
        <p className="text-center text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
        Highly motivated and dedicated CSE student seeking an internship in the web development sector. I aim to apply and enhance my skills in MERN stack, C, C++, and Java programming while contributing to a dynamic team. My goal is to gain practical experience in building modern web applications and contribute to the growth and success of the organization.
        </p>
        <div className="flex flex-col items-center justify-center">
            <div className='items-center justify-center'>
            <Education/>
            <SkillsItem/>
            </div>
        </div>
    </div>
  )
}

export default AboutMe