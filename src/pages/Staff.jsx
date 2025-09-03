import React, { useContext } from 'react'
import { CreateContext } from '../context/CreateContext'

const Staff = () => {
  
    const {staff} =useContext(CreateContext)
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6 py-6'>
      <h1 className="text-3xl font-semibold text-center">Staff</h1>
      <div className='w-full flex flex-wrap gap-8 justify-center'>
      {
        staff.map((staff)=>{
          const { id, name, designation, image , department} = staff
          return <div key={id} className='w-[200px]  h-auto flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-lg'>
            <img src={image} alt=""  className='w-[300px]'/>
            <h1 className='font-semibold text-lg'>{name}</h1>
            <p className='italic'>{designation}</p>
            <p>{department}</p>
          </div>
        })
      }
      
    </div>
    </section>
  )
}

export default Staff
