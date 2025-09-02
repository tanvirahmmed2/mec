import React, { useState } from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const handlemenu = () => {
        setMenu(!menu)
    }

    const [department, setDepartment]= useState(false)
    const [administration, setAdministration]= useState(false)
    const [academics, setAcademics]= useState(false)
    const [clubs, setClubs]=useState(false)

    const handleadmin=()=>{
        setAdministration(!administration)
        setDepartment(false)
        setAcademics(false)
        setClubs(false)
    }
    const handledept=()=>{
        setAdministration(false)
        setDepartment(!department)
        setAcademics(false)
        setClubs(false)
    }
    const handleacademics=()=>{
        setAdministration(false)
        setDepartment(false)
        setAcademics(!academics)
        setClubs(false)
    }
    const handleclubs=()=>{
        setAdministration(false)
        setDepartment(false)
        setAcademics(false)
        setClubs(!clubs)
    }
    return (
        <section className='w-full  h-auto'>
            <nav className='w-full h-20 sm:h-32  flex flex-col items-center justify-between border-b-2 z-40'>
                <div className='w-full h-20 flex flex-row items-center justify-around bg-red-50'>
                    <div className='w-auto h-20 flex flex-row items-center justify-center gap-3 px-2'>
                        <a href="/"><img src={logo} alt="" className='h-14 w-14 md:h-16 md:w-16' /></a>
                        <Link className='w-auto h-16 text-lg md:text-xl lg:text-2xl font-semibold flex items-center' to='/'>Mymensingh Engineering College</Link>


                    </div>


                    <div className=' w-auto h-12 flex flex-row items-center justify-cneter gap-2'>
                        <Link className='w-auto h-12 hidden sm:flex  items-center hover:border-b-2 px-4 ' to="/">Home</Link>
                        <Link className='w-auto h-12 hidden md:flex  items-center hover:border-b-2 px-4 ' to="/">Login</Link>
                        <Link className='w-auto h-12 hidden lg:flex  items-center hover:border-b-2 px-4 ' to="/">Alumni</Link>
                        <Link className='w-auto h-12 hidden lg:flex  items-center hover:border-b-2 px-4 ' to="/">News</Link>
                        <p className='w-auto h-12 flex lg:hidden items-center hover:border-b-2 px-4 cursor-pointer ' onClick={handlemenu}><GiHamburgerMenu /></p>
                    </div>

                </div>

                <div className=' w-full h-12 hidden sm:flex  flex-row items-center justify-center bg-red-800'>
                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/about">About</Link>
                    <div className='w-auto relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/department">Department <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-red-50 '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/ce">Department of Civil Engineering</Link>
                            <Link className='w-auto px-2 block h-12 items-center hover:scale-105 transition duration-300' to="/eee">Department of Electrical & Electronic Engineering</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/cse">Department of Computer Science & Engineering</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/gs">Department of General Science (Non-tech)</Link>
                        </div>
                    </div>

                    <div className='w-auto hidden lg:block relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="/administration">Administration <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-red-50 '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/faculty">Faculty</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/officers">Officers</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/staff">Staff</Link>
                        </div>
                    </div>
                    <div className='w-auto hidden md:block relative group'>
                        <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' to="clubs">Clubs <IoIosArrowDown /></Link>
                        <div className='w-80 rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-red-50 '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/mecrc">MEC Research Club</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/asl">Alpha Science Lab</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/mesl">MESL</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/meccc">MEC Computer Club</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/mecds">MEC Debate Society</Link>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="/clubs/mecfps">MEC Films and Photography Society</Link>
                        </div>
                    </div>
                    <div className='w-auto relative group'>
                        <p className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' >Academics <IoIosArrowDown /></p>
                        <div className='w-auto rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-red-50 '>
                            <Link className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' to="curriculam">Curriculam</Link>
                            <a className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' href="https://cmc.du.ac.bd/result.php">Result</a>
                            <a className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' href="https://collegeadmission.eis.du.ac.bd/en">Admission</a>
                        </div>
                    </div>
                    <div className='w-auto hidden lg:block relative group'>
                        <p className='w-auto h-12 flex items-center hover:border-b-2 px-4 gap-2 text-white' >Download <IoIosArrowDown /></p>
                        <div className='w-auto rounded-md absolute hidden group-hover:flex p-2 flex-col items-start  bg-red-50 '>
                            <a className='w-auto px-2 flex h-12 items-center hover:scale-105 transition duration-300' href="https://cmc.du.ac.bd/result.php">Result</a>
                        </div>
                    </div>

                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 text-white' to="/notices">Notices</Link>
                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 text-white' to="/contacts">Contacts</Link>
                    <Link className='w-auto h-12 flex items-center hover:border-b-2 px-4 text-white' to="/gallery">Gallery</Link>
                    <Link className='w-auto h-12 hidden xl:flex items-center hover:border-b-2 px-4 text-white' to="/hostel">Hostel</Link>
                    <Link className='w-auto h-12 hidden xl:flex items-center hover:border-b-2 px-4 text-white' to="/library">Library</Link>

                </div>







            </nav>

            <div className={`w-[250px]  lg:hidden absolute top-20 z-50 right-0 bg-red-50  p-4 gap-4 h-auto items-start justify-start flex-col ${menu ? "flex" : "hidden"}`}>

                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/">Home</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auhref flex items-center hover:border-l-2 px-4' to="/about">About</Link>
                <div className='w-auto relative group'>
                    <p className='w-auto  flex items-center hover:border-l-2 px-4 gap-2 cursor-pointer ' onClick={handledept}>Department <IoIosArrowDown /></p>
                    <div className={`w-[300px] rounded-md gap-2 right-[150px] top-0  p-2 flex-col items-start    ${department?"flex": "hidden"}`}>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/department">Department</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/ce">Department of CE</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/eee">Department of EEE</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/cse">Department of CSE</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/gs">Department of GS (Non-tech)</Link>
                    </div>
                </div>
                <div className='w-auto  relative group'>
                    <p className='w-auto  flex items-center hover:border-l-2  px-4 gap-2 cursor-pointer ' onClick={handleadmin} >Administration <IoIosArrowDown /></p>
                    <div className={`w-auto rounded-md gap-2  right-[175px] top-0 ${administration?"flex": "hidden"} p-2 flex-col items-start  `}>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/administration">Administration</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/faculty">Faculty</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/officers">Officers</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/staff">Staff</Link>
                    </div>
                </div>
                <div className='w-auto relative group'>
                    <p className='w-auto  flex items-center hover:border-l-2 px-4 gap-2 cursor-pointer ' onClick={handleacademics}>Academics <IoIosArrowDown /></p>
                    <div className={`w-auto rounded-md gap-2 right-[145px] top-0 ${academics?"flex": "hidden"} p-2 flex-col items-start  `}>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="curriculam">Curriculam</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="https://cmc.du.ac.bd/result.php">Result</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="https://collegeadmission.eis.du.ac.bd/en">Admission</Link>
                    </div>
                </div>
                <div className='w-auto relative group'>
                    <p className='w-auto  flex items-center hover:border-l-2 px-4 gap-2 cursor-pointer ' onClick={handleclubs}>Clubs <IoIosArrowDown /></p>
                    <div className={`w-auto rounded-md gap-2 right-[145px] top-0 ${clubs?"flex": "hidden"} p-2 flex-col items-start  `}>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/asl">ASL</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/mecrc">MECRC</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/meccc">MECCC</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/mesl">MESL</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/mecds">MECDS</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/mesfps">MECFPS</Link>
                        <Link onClick={()=>{setMenu(!menu)}}  className='w-auto pl-4 flex items-center hover:scale-105 transition duration-300' to="/clubs/mesfps">MECFPS</Link>
                    </div>
                </div>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/">Alumni</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/notices">Notice</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/gallery">Gallery</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/gallery">Gallery</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/hostel">Hostel</Link>
                <Link onClick={()=>{setMenu(!menu)}}  className='w-auto flex items-center hover:border-l-2 px-4' to="/library">Library</Link>
                <Link onClick={()=>{setMenu(!menu)}} className='w-auto flex items-center hover:border-l-2  px-4' to="/">Login</Link>

            </div>


        </section>
    )
}

export default Navbar
