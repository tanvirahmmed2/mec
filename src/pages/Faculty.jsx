import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Faculty = () => {
  const {faculty} =useContext(CreateContext)
  return (
    <div className='w-full flex flex-wrap gap-8 justify-center'>
      {
        faculty.map((faculty)=>{
          const { id, name, designation, image , department} = faculty
          return <div key={id} className='w-[300px]  h-auto flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-lg'>
            <img src={image} alt=""  className='w-[300px]'/>
            <Link className='font-semibold text-lg' to={`/faculty/${name }`}>{name}</Link>
            <p className='italic'>{designation}</p>
            <p>{department}</p>
          </div>
        })
      }
      
    </div>
  )
}

export default Faculty
