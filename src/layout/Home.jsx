import React from 'react'
import About from '../pages/About'
import Departments from '../pages/Departments'
import Contact from '../pages/Contact'
import Notices from '../pages/Notices'
import Hostel from '../pages/Hostel'
import Landing from '../pages/Landing'
import Clubs from '../pages/Clubs'

const Home = () => {
  return (
    <div className='w-auto min-h-screen flex flex-col items-center justify-center gap-12 '>
      <Landing/>
      <About/>
      <Departments/>
      <Notices/>
      <Clubs/>
      <Hostel/>
      <Contact/> 
    </div>
  )
}

export default Home
