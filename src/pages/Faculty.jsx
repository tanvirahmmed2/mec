import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Faculty = () => {
  const {faculty} =useContext(CreateContext)
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6 py-6'>
      <h1 className="text-3xl font-semibold text-center">Faculties</h1>
      <div className='w-full flex flex-wrap gap-8 justify-center'>
      {
        faculty.map((faculty)=>{
          const { id, name, designation, image , department} = faculty
          return <div key={id} className='w-2/3 sm:w-[300px]  h-auto flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-lg'>
            <img src={image} alt=""  className='w-full sm:w-[300px]'/>
            <Link className='font-semibold text-lg' to={`/faculty/${name }`}>{name}</Link>
            <p className='italic'>{designation}</p>
            <p>{department}</p>
          </div>
        })
      }
      
    </div>
    </section>
  )
}

export default Faculty
