import React, { useContext } from 'react'
import { CreateContext } from '../context/CreateContext';

const Library = () => {
  const {hoset_lib}= useContext(CreateContext)
     const library = hoset_lib.filter((item) => item.category === "library");
  
  return (
    <section>
      
    </section>
  )
}

export default Library
