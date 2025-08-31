import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const Departments = () => {
    const {deptdatas} =useContext(CreateContext)
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <h1 className='text-3xl font-semibold'>Our Departments</h1>
            <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>

                <div className='w-full h-auto flex flex-wrap justify-center gap-6'>
                    {
                        deptdatas.map((dept) => {
                            const { name, title, short_details } = dept
                            return <div key={title} className='w-[280px] border-2 rounded-lg p-2 overflow-hidden shadow-red-800 flex flex-col items-start gap-2 hover:shadow-lg transition duration-300 cursor-pointer'>
                                <p>{short_details}</p>
                                <Link to={`/department${title}`} className='font-semibold text-red-800 text-lg'>{name}</Link>
                            </div>
                        })
                    }

                </div>

                

                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default Departments
