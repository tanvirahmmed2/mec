import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Club = () => {
  const { title } = useParams()
  const { Club_Lab } = useContext(CreateContext)
  const club = Club_Lab.find((club) => club.title === title);

  if (!club) return <p className="text-center text-red-500 mt-10">Club not found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">{club.name}</h1>
      <div className='w-full flex flex-col items-center justify-center gap-12'>
       
      </div>

    </div>
  )
}

export default Club
