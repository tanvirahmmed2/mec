import React, { useEffect, useState } from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../images/logo.png"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return (
    <div className='w-full h-auto bg-white flex flex-col items-center justify-center py-8 gap-10'>
      <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className='w-auto flex flex-col gap-3 text-xl'>
          <h1>Follow our official social media</h1>
          <div className='w-auto flex flex-row items-center justify-center gap-3'>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaFacebook /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaTwitter /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaLinkedin /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaInstagram /></a>

          </div>
        </div>
        <div>
          
        </div>

      </div>
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <img src={logo} alt="" className='h-20' />
        <h1 className='text-xl font-semibold'>Mymensingh Engineering College</h1>
        <p>Established in 2007</p>
        <p>All Rights Reserved by Administration © {year}</p>
      </div>
    </div>
  )
}

export default Footer
