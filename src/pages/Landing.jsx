import React, { useState, useEffect } from 'react'
const images = [
  '/slider/field.jpg',
  '/slider/field_2.jpg',
  '/slider/mukti_hall.jpg',
  '/slider/amar_hall.jpg',
  '/slider/ce_building.jpg'
]

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
