import React from 'react'

const Skills = ({sets}) => {
    const {skillSet, setsName} = sets
  return (
    <div className='rounded-lg p-4 dark:bg-slate-800 bg-gray-100'>
            <span className='bg-cyan-400 px-6 py-1 rounded ml-3'>{setsName}</span>
            <div className='grid grid-cols-3 gap-6 mb-8 mt-10'>
                {
                    skillSet.map(skill => <div key={skill.id} className='flex flex-col items-center'>
                        <img src={skill.icon} alt="icon" className='h-12 w-12 object-contain' />
                        <h1 className='text-center mt-2 text-base dark:text-gray-100 text-gray-950'>{skill.name}</h1>
                    </div>)
                }
            </div>
        </div>
  )
}

export default Skills