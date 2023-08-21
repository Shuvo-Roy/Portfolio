import React from 'react'

const ServiceItems = ({name,desc,icon}) => {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 hover:-translate-y-2 transform transition rounded-md'>
    <div className='text-gray-700 dark:text-gray-200 w-6 h-6 mb-3'>{icon}</div>
        <h1 className='font-semibold text-lg text-cyan-600 dark:text-cyan-500 mb-1'>{name}</h1>
        <p className='text-md text-gray-600 dark:text-gray-300'>{desc}</p>
    </div>
  )
}

export default ServiceItems