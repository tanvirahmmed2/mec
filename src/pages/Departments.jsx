import React from 'react'
import { Link } from 'react-router-dom'
import deptDatas from "../Data/department"

const Departments = () => {
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center gap-6'>
            <h1>Our Departments</h1>
            <div>

                <div>

                </div>
                <div className='w-full h-auto flex flex-wrap justify-center gap-6'>
                    {
                        deptDatas.map((dept) => {
                            const { name, title, short_details } = dept
                            return <div key={title} className='w-[280px] shadow-sm rounded-lg p-1 overflow-hidden shadow-black flex flex-col items-start gap-2'>
                                <p>{short_details}</p>
                                <h1>{name}</h1>
                                <Link to={title}>Visit</Link>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Departments
