import React, { useState, useEffect } from 'react'
import shaheed_minar from '../images/slider/shaheed-minar.jpg'
import field from '../images/slider/field.jpg'
import field_2 from '../images/slider/field_2.jpg'
import mukti_hall from '../images/slider/mukti_hall.jpg'
import amar_hall from '../images/slider/amar_hall.jpg'
import ce_building from '../images/slider/ce_building.jpg'

const images = [shaheed_minar, field, field_2, mukti_hall, amar_hall, ce_building]

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='w-full h-[80vh] relative overflow-hidden'>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </section>
  )
}

export default Landing
