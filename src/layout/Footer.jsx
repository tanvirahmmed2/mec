import React, { useEffect, useState } from 'react'


import logo from "../images/logo.png"

const Footer = () => {
  const [year, setYear]= useState(new Date().getFullYear())
  useEffect(()=>{
    setYear(new Date().getFullYear())
  },[])
  return (
    <div className='w-full h-auto bg-white flex flex-col items-center justify-center py-8'>
      <div className='w-full flex flex-col items-center justify-center gap-2'>
        <img src={logo} alt=""  className='h-20'/>
        <h1 className='text-xl font-semibold'>Mymensingh Engineering College</h1>
        <p>Established in 2007</p>
        <p>All Rights Reserved by Administration © {year}</p>
      </div>
    </div>
  )
}

export default Footer
