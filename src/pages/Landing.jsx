import React, { useState, useEffect } from 'react';

const images = [
  '/slider/field.jpg',
  '/slider/field_2.jpg',
  '/slider/mukti_hall.jpg',
  '/slider/amar_hall.jpg',
  '/slider/ce_building.jpg'
];

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-auto">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-auto lg:h-full transition-opacity duration-1000"
      />
    </section>
  );
};

export default Landing;
