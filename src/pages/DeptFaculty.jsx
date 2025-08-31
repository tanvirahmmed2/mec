import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const DeptFaculty = (props) => {
  const { faculty } = useContext(CreateContext)
  const {  title } = props
  const filteredFaculty = faculty.filter((faculty) => faculty.dept === `${title}`);

  return (
    <section>
      <div className='w-full flex flex-wrap gap-4 justify-center'>
        {filteredFaculty.map((faculty) => {
          const { id, name, designation, image } = faculty
          return <div key={id} className='w-[300px]  h-auto flex flex-col gap-2 p-2 border-2 rounded-lg hover:shadow-lg'>
            <img src={image} alt=""  className='w-[300px]'/>
            <Link className='font-semibold text-lg' to={`/faculty/${name }`}>{name}</Link>
            <p>{designation}</p>
          </div>
        })}

      </div>
    </section>

  )
}

export default DeptFaculty
