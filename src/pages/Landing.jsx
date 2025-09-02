import React, { useState, useEffect } from 'react';

const images = [
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787564/field_np54gi.jpg',
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787945/shaheed_minar_yyqrpi.jpg',
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787565/field_2_ek6sol.jpg',
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787565/mukti_hall_ojvhar.jpg',
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787564/amar_hall_hk0xx2.jpg',
  'https://res.cloudinary.com/dz45x9efk/image/upload/v1756787563/ce_building_utdqva.jpg'
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
    <section className="w-full h-auto md:h-[90vh] overflow-hidden rounded-xl">
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-auto md:h-full object-cover transition-opacity duration-1000"
      />
    </section>
  );
};

export default Landing;
