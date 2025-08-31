import React from 'react'
import { useParams } from 'react-router-dom'
import deptDatas from '../Data/department'
import Faculty from './Faculty';

const Department = () => {
      const { title } = useParams();

  const filteredDept = deptDatas.filter((dept) => dept.title === `/${title}`);

  if (filteredDept.length === 0) {
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold text-red-500">Department not found</h1>
      </section>
    );
  }

  const department = filteredDept[0]
  return (
    <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
        <h1 className='text-3xl font-semibold text-center'>{department.name}</h1>
        <p>{department.long_details}</p>
        
        <Faculty department={department}/>
    </section>
  )
}

export default Department
