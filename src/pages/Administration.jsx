import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Faculty from './Faculty'
import { CreateContext } from '../context/CreateContext'

const Administration = () => {
  const { faculty } = useContext(CreateContext)
  const principle = faculty[0]
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>

      <h1 className="text-3xl font-semibold text-center">Principle</h1>
      <div key={principle.dept} className='w-[400px]  h-auto flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-lg'>
        <img src={principle.image} alt="" className='w-[400px]' />
        <Link className='font-semibold text-lg' to={`/faculty/${principle.name}`}>{principle.name}</Link>
        <p className='italic'>{principle.designation}</p>
        <p>{principle.department}</p>
      </div>
      
      <Faculty />

    </div>
  )
}

export default Administration
