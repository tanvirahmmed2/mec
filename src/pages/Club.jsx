import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Club = () => {
  const { title } = useParams()
  const { Club_Lab } = useContext(CreateContext)
  const club = Club_Lab.find((club) => club.title === title);

  if (!club) 
    return <p className="text-center text-red-500 mt-10">Club not found.</p>;

  return (
    <section className='w-full flex flex-col items-center justify-center text-center gap-4 px-4'>
      <h1 className="text-3xl font-semibold">{club.name}</h1>
      {club.description && <p>{club.description}</p>}
      {club.image && (
        <img 
          src={club.image} 
          alt={`${club.name} image`} 
          className='w-2/3 rounded-lg' 
        />
      )}

      {club.mission?.length > 0 && (
        <div className='w-2/3 flex flex-col items-start justify-start gap-2'>
          <h2 className="text-2xl font-semibold text-green-700">{club.category} missions:</h2>
          {club.mission.map((mission, index) => (
            <p key={index}>{mission}</p>
          ))}
        </div>
      )}

      {club.key_achievements?.length > 0 && (
        <div className='w-2/3 flex flex-col items-start justify-start gap-2'>
          <h2 className="text-2xl font-semibold text-red-800">{club.category} achievements:</h2>
          {club.key_achievements.map((achievement, index) => (
            <p key={index}>{achievement}</p>
          ))}
        </div>
      )}

      {club.why_it_matters && <p>{club.why_it_matters}</p>}

      {club.connect && (
        <a 
          href={club.connect} 
          className='italic text-red-600'
          target="_blank" 
          rel="noopener noreferrer"
        >
          View link
        </a>
      )}
    </section>
  )
}

export default Club
