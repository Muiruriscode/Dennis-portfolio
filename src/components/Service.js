import React from 'react'
import { data } from '../data.js'
import SingleService from './singleService'

function Service() {
  return (
    <section id='services' className='padding serviceSection'>
      <h1 className='heading'>Services</h1>
      <h2 className='center'>These are some of my most requested services</h2>
      <div className='grid__3'>
        {data.map((item, index) => {
          const { name, description, icon } = item
          return (
            <SingleService
              key={index}
              name={name}
              description={description}
              icon={icon}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Service
