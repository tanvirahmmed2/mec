import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='w-full relative h-auto'>
            <nav className='w-full h-28  flex flex-row items-center justify-around border-b-2 z-40'>

                <div className='w-auto h-28 flex flex-row items-center justify-center gap-2'>
                    <a href="/"><img src={logo} alt="" className='h-24' /></a>
                    <div className='w-auto h-24 flex flex-col items-center justify-center gap-2 font-semibold text-xl'>
                        <h1>Mymensingh Engineering College</h1>
                        <h1>ময়মনসিংহ ইঞ্জিনিয়ারিং কলেজ</h1>
                    </div>

                </div>
                <div className='w-auto h-28 flex flex-col items-center justify-center'>

                    <div className=' w-auto h-14 flex flex-row items-center justify-center gap-2'>
                        <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/">Home</Link>
                        <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/student-account">Student apply</Link>
                        <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/notices">Notices</Link>
                        <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/contacts">Contacts</Link>
                    </div>

                    <div className=' w-auto h-14 flex  flex-row items-center justify-center gap-2'>
                        <div className='w-auto relative group'>
                            <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/department">Department</Link>
                            <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-white '>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/ce">Department of Civil Engineering</Link>
                                <Link className='w-auto px-2 block h-14 items-center hover:scale-105 transition duration-300' to="/eee">Department of Electrical & Electronic Engineering</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/cse">Department of Computer Science & Engineering</Link>
                            </div>
                        </div>
                        
                        <div className='w-auto relative group'>
                            <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/department">Administration</Link>
                            <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start gap-2 bg-white '>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/faculty">Faculty</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/officers">Officers</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/staff">Staff</Link>
                            </div>
                        </div>
                        <div className='w-auto relative group'>
                            <Link className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' to="/department">Clubs</Link>
                            <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start gap-2 bg-white '>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/">Alpha Science Lab</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/">MESL</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/">MEC Debate Society</Link>
                                <Link className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' to="/">MEC Films and Photography Society</Link>
                            </div>
                        </div>
                        <div className='w-auto relative group'>
                            <p className='w-auto h-14 flex items-center hover:border-b-2 px-4 ' >Academics</p>
                            <div className='w-auto rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-white '>
                                <a className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' href="https://cmc.du.ac.bd/result.php">Result</a>
                                <a className='w-auto px-2 flex h-14 items-center hover:scale-105 transition duration-300' href="https://collegeadmission.eis.du.ac.bd/en">Admission</a>
                            </div>
                        </div>
                    </div>
                   

                </div>

            </nav>

            <div>

            </div>


        </section>
    )
}

export default Navbar
