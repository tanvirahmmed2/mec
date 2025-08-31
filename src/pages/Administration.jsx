import React from 'react'
import Faculty from './Faculty'

const Administration = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>

      <h1 className="text-3xl font-semibold text-center">Principle</h1>

      <h1 className="text-3xl font-semibold text-center">Faculties</h1>
      <Faculty/>
      
    </div>
  )
}

export default Administration
