import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const FacultyProfile = () => {
    const { name } = useParams();
    const { faculty } = useContext(CreateContext);
    const [data, setData] = useState("education")

    const facultyData = faculty.find((f) => f.name === name);

    if (!facultyData) {
        return <h1 className="text-red-500">Faculty not found</h1>;
    }


    const {
        name: facultyName,
        image,
        designation,
        department,
        email,
        mobile,
        office_phone,
        home_phone,
        bio,
        education,
        experience,
        publications,
        scholarships_awards,
        teaching_supervision,
    } = facultyData;
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center gap-6 text-center'>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-2'>
                <div className='w-full flex flex-col items-center justify-center gap-2'>
                    <img src={image} alt="" className='w-2/3 sm:w-[350px] rounded-lg' />
                    <h1 className='text-2xl font-semibold'>{facultyName}</h1>
                    <p>{designation}</p>
                    <p>{department}</p>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-6'>
                    <p>{bio}</p>
                    <div className='w-[350px] md:w-[600px] border-2 h-auto rounded-lg flex flex-row items-center justify-center p-2'>
                        <div className='w-auto flex flex-col items-start justify-center border-r-2 px-2 gap-2'>
                            <p className='cursor-pointer hover:scale-105 transition duration-300' onClick={() => { setData("education") }}>Education</p>
                            <p className='cursor-pointer hover:scale-105 transition duration-300' onClick={() => { setData("experience") }}>Experience</p>
                            <p className='cursor-pointer hover:scale-105 transition duration-300' onClick={() => { setData("publications") }}>Publications</p>
                            <p className='cursor-pointer hover:scale-105 transition duration-300' onClick={() => { setData("scholarships_awards") }}>Awards</p>
                            <p className='cursor-pointer hover:scale-105 transition duration-300' onClick={() => { setData("teaching_supervision") }}>Supervision</p>
                        </div>
                        <div className='w-full flex  items-center justify-center'>
                            <div className={`w-full ${data === "education" ? "flex" : "hidden"} flex-col gap-2 items-center justify-center`}>
                                <p className='text-2xl'>Education</p>
                                <p>{education}</p>
                            </div>
                            <div className={`w-full ${data === "experience" ? "flex" : "hidden"} flex-col gap-2 items-center justify-center`}>
                                <p className='text-2xl'>Experience</p>
                                <p>{experience}</p>
                            </div>
                            <div className={`w-full ${data === "publications" ? "flex" : "hidden"} flex-col gap-2 items-center justify-center`}>
                                <p className='text-2xl'>Publications</p>
                                <p>{publications}</p>
                            </div>
                            <div className={`w-full ${data === "scholarships_awards" ? "flex" : "hidden"} flex-col gap-2 items-center justify-center`}>
                                <p className='text-2xl'>Awards</p>
                                <p>{scholarships_awards}</p>
                            </div>
                            <div className={`w-full ${data === "teaching_supervision" ? "flex" : "hidden"} flex-col gap-2 items-center justify-center`}>
                                <p className='text-2xl'>Supervision</p>
                                <p>{teaching_supervision}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-auto flex flex-col items-start gap-2'>
                        <p>Office: {office_phone}</p>
                        <p>Home: {home_phone}</p>
                        {mobile.map((mobile)=>{
                            return <p key={mobile.i}>Mobile: {mobile}</p>
                        })}
                    </div>

                </div>

            </div>

        </section>
    )
}

export default FacultyProfile
