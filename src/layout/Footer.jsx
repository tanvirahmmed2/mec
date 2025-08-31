import React, { useEffect, useState } from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../images/logo.png"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])
  return (
    <div className='w-full h-auto bg-gray-50 flex flex-col items-center justify-center gap-10 pt-8'>
      <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className='w-auto flex flex-col gap-3 text-lg lg:items-start items-center justify-center'>
          <h1>Follow our official social media</h1>
          <div className='w-auto flex flex-row items-center justify-center gap-1'>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaFacebook /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaTwitter /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaLinkedin /></a>
            <a className='text-2xl hover:scale-110 transition duration-300 p-2' href="/"><FaInstagram /></a>

          </div>
          <a href="tel:091-52111">Call: 091-52111</a>
          <a href="mailto:info@mec.ac.bd">Mail here</a>
          <p>Rahamatpur,Mymensingh, Mymensingh, Bangladesh</p>
        </div>
        <div>
          <iframe title="Google Maps location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6092.248193296725!2d90.3446543251098!3d24.77927088624744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756490c5026b00d%3A0x133cddb37ae9809!2sMymensingh%20Engineering%20College!5e0!3m2!1sen!2sbd!4v1756574794077!5m2!1sen!2sbd" width="400" height="200"  ></iframe>
        </div>

      </div>
      <div className='w-full flex flex-col items-center justify-center gap-2 py-8  bg-red-800 text-white'>
        <img src={logo} alt="" className='h-20' />
        <h1 className='text-xl font-semibold'>Mymensingh Engineering College</h1>
        <p>Established in 2007</p>
        <p>All Rights Reserved by Administration © {year}</p>
      </div>
    </div>
  )
}

export default Footer
