import React from 'react'
import About from '../pages/About'
import Departments from '../pages/Departments'
import Contact from '../pages/Contact'
import Notices from '../pages/Notices'

const Home = () => {
  return (
    <div className='w-auto min-h-screen flex flex-col items-center justify-center gap-12 '>
      
      <About/>
      <Departments/>
      <Notices/>
      <Contact/> 
    </div>
  )
}

export default Home
