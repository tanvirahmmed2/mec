import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <section className='w-full relative h-auto'>
            <nav className='w-full h-28  flex flex-row items-center justify-around border-b-2'>

                <div className='w-auto h-28 flex flex-row items-center justify-center gap-2'>
                    <a href="/"><img src={logo} alt="" className='h-24' /></a>
                    <div className='w-auto h-24 flex flex-col items-center justify-center gap-2 font-semibold text-xl'>
                        <h1>Mymensingh Engineering College</h1>
                        <h1>ময়মনসিংহ ইঞ্জিনিয়ারিং কলেজ</h1>
                    </div>

                </div>
                <div className='w-auto h-28 bg-red-100 flex flex-col items-center justify-center'>

                    <div className=' w-auto h-14 flex flex-row items-center justify-center gap-2'>

                    </div>

                    <div className=' w-auto h-14 flex flex-row items-center justify-center gap-2'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Notices</Link>
                        <Link>Contacts</Link>
                    </div>
                   

                </div>

            </nav>

            <div>

            </div>


        </section>
    )
}

export default Navbar
