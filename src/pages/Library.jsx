import React, { useContext } from 'react'
import { CreateContext } from '../context/CreateContext';

const Library = () => {
  const { hoset_lib } = useContext(CreateContext)
  const library = hoset_lib.filter((item) => item.category === "library")[0];

  return (
    <section className='w-full flex flex-col items-center gap-4 justify-center text-center'>
      <h1 className="text-3xl font-semibold text-center">{library.name}</h1>
      <img src={library.image} alt="" className='w-full lg:w-2/3 rounded-lg' />
      <p>{library.description}</p>

      <div className='w-full lg:w-2/3 flex flex-col lg:flex-row items-start justify-around text-start'>

        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <h1 className="text-2xl font-semibold text-center">Facilities:</h1>
          {
            library.facilities.map((facility) => {
              return <p key={facility.i}>{facility}</p>
            })
          }
        </div>

        <div className='w-full flex flex-col items-start justify-start gap-2'>
          <h1 className="text-2xl font-semibold text-center">Services:</h1>
          {
            library.services.map((service) => {
              return <p key={service.i}>{service}</p>
            })
          }
        </div>

      </div>

      <div className='mt-2 flex flex-col items-start gap-2'>
        <p >Student capacity : {library.capacity}</p>
        <h2 className='font-semibold'>Opening Hours:</h2>
        <p><strong>Weekdays:</strong> {library.opening_hours.weekdays}</p>
        <p><strong>Weekends:</strong> {library.opening_hours.weekends}</p>
      </div>
      <p className='text-red-800'>Location: {library.location}</p>


    </section>
  )
}

export default Library
