import React from 'react'

const Notices = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 lg:flex-row'>
            <div className='w-full h-[300px] border-2 rounded-lg overflow-hidden flex flex-col items-center justify-between'>
                <p className='w-full text-center text-white bg-red-800 h-[30px]'>Events</p>
                <div className='w-full h-[270px] flex flex-col items-start justify-start p-1 overflow-y-scroll'>
                    <p>Loading</p>
                </div>
            </div>
            <div className='w-full h-[300px] border-2 rounded-lg overflow-hidden flex flex-col items-center justify-between'>
                <p className='w-full text-center text-white bg-red-800 h-[30px]'>Notices</p>
                <div className='w-full h-[270px] flex flex-col items-start justify-start p-1 overflow-y-scroll'>
                    <p>Loading</p>
                </div>
            </div>
        </section >
    )
}

export default Notices
