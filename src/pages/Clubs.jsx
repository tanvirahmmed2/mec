import React, { useContext } from 'react'
import { CreateContext } from '../context/CreateContext'

const Clubs = () => {
  const {Club_Lab}= useContext(CreateContext)
  return (
   <section className='w-full flex flex-col items-center justify-center gap-4'>
    <h1 className="text-3xl font-semibold text-center">Club & Lab</h1>

   </section>
  )
}

export default Clubs
