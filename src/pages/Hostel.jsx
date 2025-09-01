import React, { useContext } from 'react'
import { CreateContext } from '../context/CreateContext'

const Hostel = () => {
  const {hoset_lib}= useContext(CreateContext)
   const halls = hoset_lib.filter((item) => item.category === "hall");

  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-8'>
      <h1>Residence</h1>
      <div className='w-full h-auto flex flex-col items-center justify-center gap-8'>
        {
          halls.map((hall)=>{
            const {name, type, capacity, image, description}= hall
            return <div key={name} className='w-full flex flex-col items-center justify-center text-center gap-2'>
              <h1 className="text-2xl font-semibold text-center">{name}</h1>
              <img src={image} alt="" className='w-full lg:w-2/3 rounded-lg'/>
              <p className='italic opacity-40'>{name}</p>
              <p className='font-semibold text-lg'> For {capacity} {type} students</p>
              <p>{description}</p>
              <span className='w-2/3 h-1 bg-red-800 rounded-xl opacity-10'></span>
            </div>


          })
        }

      </div>

    </section>
  )
}

export default Hostel
