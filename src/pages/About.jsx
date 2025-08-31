import React from 'react'

const About = () => {
    return (
        <section className='w-full h-auto flex flex-col py-4 p-2 items-center justify-between gap-4'>
            <h1 className='text-3xl font-semibold'>About</h1>
            <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-6'>
                <div className='w-full flex flex-col gap-4'>
                    <p>Mymensingh Engineering College (MEC) is a public undergraduate institution in Mymensingh, Bangladesh, and a constituent college of the University of Dhaka. Established in 2007 and inaugurated in 2009, MEC admits around 180 students each year across three departments: Electrical and Electronic Engineering (EEE), Civil Engineering (CE), and Computer Science and Engineering (CSE)</p>
                    <p>The college was founded following a government initiative in 2004, with a development project of ৳56 crore, later expanded by an additional ৳27 crore to strengthen infrastructure and laboratories. The first batch of students was admitted to the EEE department in 2009, followed by the CE department in 2014–2015, and later the CSE department.</p>
                    <p>MEC is dedicated to providing high-quality engineering education, research opportunities, and practical training to prepare students for national and global challenges in technology and innovation. With its growing reputation and strong academic foundation under the University of Dhaka, there are future plans to upgrade the institution into a full-fledged public engineering university named Mymensingh University of Engineering and Technology (MUET)</p>
                </div>
                <div className='w-full'>

                </div>
            </div>
        </section>
    )
}

export default About
