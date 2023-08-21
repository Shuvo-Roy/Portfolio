import { Link } from "react-router-dom";
import SectionTitle from '../SectionTitle';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_KEY1, import.meta.env.VITE_KEY2, form.current, import.meta.env.VITE_KEY3)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' className='pb-15 h-screen'>
    <div className="flex flex-row gap-2 items-center justify-center mt-8 mb-4">
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
        <Link to="/about"
          className="inline-block  px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:text-md "
        >
          About Me
        </Link>
        </div>
        <div className='container mt-8 mb-8'>
        <SectionTitle>Get in touch</SectionTitle>
            
            <div className='md:flex justify-center items-center mt-8'>
            <div className='w-full mt-8 mb-12 md:mt-0 md:w-1/2 lg:flex items-center px-4 lg:px-8 py-4 dark:bg-slate-800 bg-gray-100 rounded-md'>
            <form className='w-full' ref={form} onSubmit={sendEmail}>
                <div className='mb-5'>
                    <input type='text' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded dark:bg-slate-600 text-gray-100' name="user_name"/>
                </div>
                <div className='mb-5'>
                    <input type='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded dark:bg-slate-600 text-gray-100' name="user_email"/>
                </div>
                <div className='mb-5'>
                    <input type='text' placeholder='Subject' className='w-full p-3 focus:outline-none rounded dark:bg-slate-600 text-gray-100' name="subject"/>
                </div>
                <div className='mb-5'>
                    <textarea type='text' rows={3} placeholder='Write your message here' className='w-full p-3 focus:outline-none rounded dark:bg-slate-600 text-gray-100' name="message"/>
                </div>
                <button className='w-full p-3 focus:outline-none rounded-sm dark:bg-cyan-600 dark:text-gray-100 dark:hover:bg-cyan-700 bg-cyan-600 text-slate-950 hover:bg-cyan-700 uppercase font-bold text-center ease-in duration-150 text-base'>Send</button>
            </form>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact