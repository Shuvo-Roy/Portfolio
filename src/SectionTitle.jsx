import React from 'react'

const SectionTitle = ({children, id}) => {
  return (
    <h1 id={id && id} className='text-3xl uppercase font-bold mb-5 text-cyan-500 dark:text-cyan-500 flex items-center justify-center'>{children}</h1>
  )
}

export default SectionTitle