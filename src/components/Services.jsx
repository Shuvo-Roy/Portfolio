import React from 'react'
import SectionTitle from '../SectionTitle'
import services from '../Data/Services'
import ServiceItems from './ServiceItems'
const Services = () => {
  return (
    <div className='py-12'>
        <SectionTitle className="flex items-center justify-center">Services</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(services=>(
                    <ServiceItems 
                    key={services.name}
                    name={services.name}
                    icon={services.icon}
                    desc={services.desc}
                    ></ServiceItems>
                ))
            }
        </div>
    </div>
    
  )
}

export default Services