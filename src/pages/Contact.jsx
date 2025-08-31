import React from 'react'
import { CiCalendar, CiMail, CiPhone } from "react-icons/ci";


const Contact = () => {
  

  return (
    <section className='w-full px-4 h-auto flex-col  flex items-center justify-center'>
      <div className='w-full bg-white/5 h-auto flex flex-col lg:flex-row rounded-lg p-4 items-center justify-center'>

        <div className='w-full flex flex-col gap-2 items-start justify-start'>
          <h1 className='text-xl font-semibold'>Contact us</h1>
          <p>Mail us for any inquiries & we’ll reply very soon</p>
          <div className='w-full p-2 flex flex-row items-center gap-4 justify-start'>
            <p><CiMail/></p>
            <a href="mailto:info@mec.ac.bd">info@mec.ac.bd</a>
          </div>  
          <div className='w-full p-2 flex flex-row items-center gap-4 justify-start'>
            <p><CiPhone/></p>
            <a href="tel:091-52111">091-52111</a>
          </div>  
          <div className='w-full p-2 flex flex-row items-center gap-4 justify-start'>
            <p><CiCalendar/></p>
            <p>Get Appointment</p>
          </div>  


        </div>


        <div className='w-full h-auto flex flex-col items-center justify-center border-2 bg-red-800 bg-opacity-15 rounded-lg py-4'>
          <h1 className='text-xl font-semibold'>Mail</h1>
          <form action="" className='w-full h-auto flex flex-col items-center justify-center'>
            <div className='w-full flex flex-col  gap-2 p-2'>
              <label htmlFor="name">name</label>
              <input type="text" name='name' id='name'  className=' px-4 py-1 rounded-md outline-none' required/>
            </div>
            <div className='w-full flex flex-col  gap-2 p-2'>
              <label htmlFor="email">email</label>
              <input type="email" name='email' id='email'  className=' px-4 py-1 rounded-md outline-none' required/>
            </div>
            <div className='w-full flex flex-col  gap-2 p-2'>
              <label htmlFor="subject">subject</label>
              <input type="text" name='subject' id='subject'  className=' px-4 py-1 rounded-md outline-none' required/>
            </div>
            <div className='w-full flex flex-col  gap-2 p-2'>
              <label htmlFor="message">message</label>
              <textarea name="message" id="message" className=' px-4 py-1 rounded-md outline-none' required></textarea>
            </div>
            <button type='submit' className=' px-4 w-20 border-2 border-black/40 rounded-lg'>Submit</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact