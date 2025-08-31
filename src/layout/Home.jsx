import React from 'react'
import About from '../pages/About'
import Departments from '../pages/Departments'

const Home = () => {
  return (
    <div className='w-auto min-h-screen flex flex-col items-center justify-center gap-12 '>
      
      <About/>
      <Departments/>
    </div>
  )
}

export default Home
