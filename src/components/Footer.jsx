import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [curTime, setCurTime] = useState("");

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const currentTime = today.toLocaleDateString(undefined, options) + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        setCurTime(currentTime);
    };
  return (
    <footer className='flex flex-col items-center justify-center dark:text-gray-200 py-6 bottom-0'>
    <p className='text-base'>{curTime} </p>
        <p className='text-xl'>Suvo Roy | Copyright Reserved  {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer