import React, { useContext } from 'react';
import { CreateContext } from '../context/CreateContext';

const Hostel = () => {
  const { hoset_lib } = useContext(CreateContext);
  const halls = hoset_lib.filter((item) => item.category === "hall");

  return (
    <section className='w-full flex flex-col items-center justify-center gap-12 p-6 bg-gray-50'>
      
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Residence Halls</h1>

      <div className='w-full flex flex-col items-center justify-center gap-12'>
        {halls.map((hall) => {
          const { name, type, capacity, image, description } = hall;

          return (
            <div 
              key={name} 
              className='w-full lg:w-4/5 flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden'
            >
              {/* Hall Image */}
              {image && (
                <img 
                  src={image} 
                  alt={name} 
                  className='w-full lg:w-1/3 h-64 object-cover'
                />
              )}

              {/* Hall Info */}
              <div className='flex-1 p-6 flex flex-col items-start gap-4'>
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className='italic text-gray-500'>{type} Hall</p>
                <p className='font-semibold text-lg'>Capacity: {capacity} students</p>
                <p className='text-gray-700 text-justify'>{description}</p>
                <div className='w-16 h-1 bg-red-800 rounded-full opacity-40 mt-4'></div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Hostel;
