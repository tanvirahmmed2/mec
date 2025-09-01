import React, { useContext } from 'react';
import { CreateContext } from '../context/CreateContext';

const Library = () => {
  const { hoset_lib } = useContext(CreateContext);
  const library = hoset_lib.filter((item) => item.category === "library")[0];

  if (!library) return <p className="text-center text-red-500 mt-10">No library data available.</p>;

  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 p-6 bg-gray-50'>
      
      {/* Library Name */}
      <h1 className="text-4xl font-bold text-center text-gray-800">{library.name}</h1>

      {/* Library Image */}
      {library.image && (
        <img 
          src={library.image} 
          alt={library.name} 
          className='w-full lg:w-2/3 rounded-lg shadow-lg border border-gray-200 mt-4'
        />
      )}

      {/* Description */}
      <p className='max-w-4xl text-gray-700 text-lg mt-4 text-justify'>{library.description}</p>

      {/* Facilities & Services */}
      <div className='w-full lg:w-4/5 flex flex-col lg:flex-row gap-8 mt-6'>
        
        {/* Facilities */}
        {library.facilities && (
          <div className='flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Facilities</h2>
            <ul className='list-disc list-inside space-y-1 text-gray-700'>
              {library.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Services */}
        {library.services && (
          <div className='flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Services</h2>
            <ul className='list-disc list-inside space-y-1 text-gray-700'>
              {library.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Additional Info */}
      <div className='w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6 text-gray-700'>
        <p><span className='font-semibold'>Student Capacity:</span> {library.capacity}</p>
        <div className='mt-2'>
          <h3 className='font-semibold'>Opening Hours:</h3>
          <p><span className='font-medium'>Weekdays:</span> {library.opening_hours.weekdays}</p>
          <p><span className='font-medium'>Weekends:</span> {library.opening_hours.weekends}</p>
        </div>
        <p className='mt-2'><span className='font-semibold text-red-600'>Location:</span> {library.location}</p>
        {library.staff && (
          <p className='mt-2'><span className='font-semibold'>Staff:</span> {library.staff.join(', ')}</p>
        )}
      </div>

    </section>
  );
};

export default Library;
