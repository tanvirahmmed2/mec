import React, { useContext } from 'react'

import { PiChalkboardTeacherFill } from "react-icons/pi";
import { CreateContext } from '../context/CreateContext'

const About = () => {
    
        const { faculty} =useContext(CreateContext)
    return (
        <section className='w-full h-auto flex flex-col py-4 p-2 items-center justify-between gap-4'>
            <h1 className='text-3xl font-semibold'>About</h1>
            <div className='w-full h-auto flex flex-col py-12 lg:flex-row items-center justify-center gap-6'>
                <div className='w-full flex flex-col gap-6'>
                    <p>Mymensingh Engineering College (MEC) is a public undergraduate institution in Mymensingh, Bangladesh, and a constituent college of the University of Dhaka. Established in 2007 and inaugurated in 2009, MEC admits around 180 students each year across three departments: Electrical and Electronic Engineering (EEE), Civil Engineering (CE), and Computer Science and Engineering (CSE)</p>
                    <p>The college was founded following a government initiative in 2004, with a development project of ৳56 crore, later expanded by an additional ৳27 crore to strengthen infrastructure and laboratories. The first batch of students was admitted to the EEE department in 2009, followed by the CE department in 2014–2015, and later the CSE department.</p>
                    <p>MEC is dedicated to providing high-quality engineering education, research opportunities, and practical training to prepare students for national and global challenges in technology and innovation. With its growing reputation and strong academic foundation under the University of Dhaka, there are future plans to upgrade the institution into a full-fledged public engineering university named Mymensingh University of Engineering and Technology (MUET)</p>
                </div>
                <div className='w-full'>

                </div>
            </div>



            <div className='w-full p-4 h-auto bg-gray-100 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-20'>
                    <div className='w-auto gap-4 h-auto flex flex-row items-center justify-center'>
                        <p className='text-7xl'><PiChalkboardTeacherFill/></p>
                        <div className='w-auto flex flex-col items-start'>
                            <h1 className='text-3xl font-semibold'>{faculty.length}</h1>
                            <p>Faculty</p>
                        </div>

                    </div>
                    <div className='w-auto gap-4 h-auto flex flex-row items-center justify-center'>
                        <p className='text-7xl'><PiChalkboardTeacherFill/></p>
                        <div className='w-auto flex flex-col items-start'>
                            <h1 className='text-3xl font-semibold'>700+</h1>
                            <p>Students</p>
                        </div>

                    </div>
                    <div className='w-auto gap-4 h-auto flex flex-row items-center justify-center'>
                        <p className='text-7xl'><PiChalkboardTeacherFill/></p>
                        <div className='w-auto flex flex-col items-start'>
                            <h1 className='text-3xl font-semibold'>1000+</h1>
                            <p>Graduates</p>
                        </div>

                    </div>
                    
                </div>
        </section>
    )
}

export default About
