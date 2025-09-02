import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Clubs = () => {
  const { Club_Lab } = useContext(CreateContext)
  return (
    <section className='w-full flex flex-col items-center justify-center gap-4'>
      <h1 className="text-3xl font-semibold text-center">Club & Lab</h1>
      <div className='w-full flex flex-col items-center justify-center gap-12'>
        {Club_Lab.map((club) => {
          const { name, title, category, description, image, connect } = club;

          return (
            <div
              key={name}
              className='w-full lg:w-4/5 flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden'
            >
              {image && (
                <img
                  src={image}
                  alt={name}
                  className='w-full lg:w-1/3 h-64 object-cover'
                />
              )}

              <div className='flex-1 p-6 flex flex-col items-start gap-4'>
                <Link className="text-2xl font-semibold text-gray-800" to={`/clubs/${title}`}>{name}</Link>
                <p className='italic text-gray-500'>{category}</p>
                <p className='text-gray-700 text-justify'>{description}</p>
                <a className='text-gray-700 text-justify italic' href={connect}>visit webpage</a>
                <div className='w-16 h-1 bg-red-800 rounded-full opacity-40 mt-4'></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Clubs
