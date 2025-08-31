import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CreateContext } from '../context/CreateContext'

const FacultyProfile = () => {
    const { name } = useParams();
    const { faculty } = useContext(CreateContext);
    const [data, setData]=useState("education")

    const facultyData = faculty.find((f) => f.name === name);

    if (!facultyData) {
        return <h1 className="text-red-500">Faculty not found</h1>;
    }


    const {
        id,
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
            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <img src={image} alt="" className='w-[350px] rounded-lg' />
                <h1 className='text-2xl font-semibold'>{facultyName}</h1>
                <p>{designation}</p>
                <p>{department}</p>
                <a href={`mailto:${email}`}>{email}</a>
                <p>{bio}</p>
                <div className='w-[350px] md:w-[600px] border-2 h-auto flex flex-row items-center justify-center p-2'>
                    <div className='w-auto flex flex-col items-start justify-center border-r-2 px-2 gap-2'>
                        <p>Education</p>
                        <p>Experience</p>
                        <p>Publications</p>
                        <p>Awards</p>
                        <p>Supervision</p>
                    </div>
                    <div className='w-full flex  items-center justify-center'>
                        <div className={`w-full ${data==="education"? "flex": "hidden"} flex-col gap-2 items-center justify-center`}>
                            <p className='text-2xl'>Education</p>
                            <p>{education}</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default FacultyProfile
