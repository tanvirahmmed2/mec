import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <section className='w-full relative h-auto'>
            <nav className='w-full h-32  flex flex-col items-center justify-between border-b-2 z-40'>
                <div className='w-full h-20 flex flex-row items-center justify-around'>
                    <div className='w-auto h-20 flex flex-row items-center justify-center gap-3'>
                        <a href="/"><img src={logo} alt="" className='h-16 w-16' /></a>
                        <h1 className='w-auto h-16 text-2xl font-semibold flex items-center'>Mymensingh Engineering College</h1>


                    </div>


                    <div className=' w-auto h-12 flex flex-row items-center justify-cneter gap-2'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 ' to="/">Home</Link>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 ' to="/student-account">Student apply</Link>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 ' to="/alumni">Alumni</Link>
                        <p className='w-auto h-12 flex items-center hover:border-b-2 px-4 cursor-pointer '><GiHamburgerMenu /></p>
                    </div>

                </div>

                <div className=' w-full h-12 flex  flex-row items-center justify-center bg-red-800'>
                    <div className='w-auto relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/department">Department <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-white '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/ce">Department of Civil Engineering</Link>
                            <Link className='w-auto px-2 block h-12 items-center hover:scale-105 transition duration-300' to="/eee">Department of Electrical & Electronic Engineering</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/cse">Department of Computer Science & Engineering</Link>
                        </div>
                    </div>

                    <div className='w-auto relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/department">Administration <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start gap-2 bg-white '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/faculty">Faculty</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/officers">Officers</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/staff">Staff</Link>
                        </div>
                    </div>
                    <div className='w-auto relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/department">Clubs <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start gap-2 bg-white '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/">Alpha Science Lab</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/">MESL</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/">MEC Debate Society</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/">MEC Films and Photography Society</Link>
                        </div>
                    </div>
                    <div className='w-auto relative group'>
                        <p className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' >Academics <IoIosArrowDown /></p>
                        <div className='w-auto rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-white '>
                            <a className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' href="https://cmc.du.ac.bd/result.php">Result</a>
                            <a className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' href="https://collegeadmission.eis.du.ac.bd/en">Admission</a>
                        </div>
                    </div>

                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 text-white' to="/notices">Notices</Link>
                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 text-white' to="/contacts">Contacts</Link>
                </div>







            </nav>

            <div>

            </div>


        </section>
    )
}

export default Navbar
