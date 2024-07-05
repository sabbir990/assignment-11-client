import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function PostDetails() {
    const [details, setDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/postDetails/${id}`).then(result => {
            setDetails(result.data)
        })
    }, [])
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl h-auto px-6 py-10 mx-auto">
                <p className="text-xl text-blue-500 font-bold">Volunteer Category : {details?.category}</p>

                <div className="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                    <div className='flex-1'>
                        <img src={details?.thumbnail} alt="Thumbnail" className='w-full rounded-lg' />
                    </div>

                    <div className="mt-2 md:mx-6 flex-1 text-black space-y-4">
                        <div>
                            <p className="text-xl font-medium tracking-tight">Organizer : {details?.organizer_name}</p>
                            <p className='text-lg leading-relaxed md:text-xl'>Location : {details?.location}</p>
                            <p className='text-lg leading-relaxed md:text-xl'>Deadline : {new Date(details?.deadline).toLocaleDateString()}</p>
                            <p className='text-lg leading-relaxed md:text-xl'>Volunteer Needed : {details?.volunteer_number}</p>
                        </div>

                        <p className="">{details?.description}</p>

                        <div className="flex items-center justify-between mt-6 md:justify-start">
                            <Link to={'/beAVolunteer'}><button className='btn btn-outline btn-neutral'>Be a Volunteer</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
