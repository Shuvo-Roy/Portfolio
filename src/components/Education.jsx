import React from 'react'
import SectionTitle from '../SectionTitle'

import myUni from '../Assests/RU.png';
import myCor from '../Assests/Acdmind.png';

const Education = () => {
  return (
    <div className='flex flex-col mb-8'>
        <SectionTitle>Education & Certificate</SectionTitle>
        <div className='flex flex-col items-center justify-center gap-6'>

        <div className='flex flex-col gap-4 dark:bg-slate-800 bg-gray-100 p-2 rounded-md w-3/5'>
        <div className='flex flex-col items-center justify-center'>
            <img src={myUni}/>
            <p className='dark:text-gray-100 uppercase text-lg'>University of Rajshahi</p>
        </div>
        <div className='flex flex-col items-center justify-center dark:text-gray-100'>
            <h2 className='dark:text-gray-100 text-gray-900 text-3xl'>B.Sc. in Computer Science and Engineering</h2>
            <p>February 2018 -June 2023</p>
        </div>
        </div>
        <div className='flex flex-col gap-4 dark:bg-slate-800 bg-gray-100 p-2 rounded-md w-3/5'>
        <div className='flex flex-col items-center justify-center'>
            <img src={myCor}/>
            <p className='dark:text-gray-100 uppercase text-lg'>By Academind: Maximilian Schwarzmuller</p>
        </div>
        <div className='flex flex-col items-center justify-center dark:text-gray-100'>
            <h2 className='dark:text-gray-100 text-gray-900 text-3xl'>The MERN Fullstack Guide</h2>
            <p>January 2023 - March 2023</p>
        </div>
        </div>



        </div>
    </div>
  )
}

export default Education