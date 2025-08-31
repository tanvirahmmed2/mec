import React from 'react'
import { Link } from 'react-router-dom'
import deptDatas from "../Data/department"

const Departments = () => {
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <h1 className='text-3xl font-semibold'>Our Departments</h1>
            <div>


                <div className='w-full h-auto flex flex-wrap justify-center gap-6'>
                    {
                        deptDatas.map((dept) => {
                            const { name, title, short_details } = dept
                            return <div key={title} className='w-[280px] shadow-sm rounded-lg p-1 overflow-hidden shadow-red-800 flex flex-col items-start gap-2 hover:scale-[1.03] transition duration-300 cursor-pointer'>
                                <p>{short_details}</p>
                                <h1 className='font-semibold text-red-800'>{name}</h1>
                                <Link to={title} className='italic'>Visit</Link>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Departments
