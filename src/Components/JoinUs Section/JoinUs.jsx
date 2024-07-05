import React from 'react'
import { Link } from 'react-router-dom'

export default function JoinUs() {
    return (
        <div className='flex flex-col space-y-4'>
            <h1 className='font-bold text-3xl text-center'>Join Us</h1>
            <p className='text-gray-500 text-center'>Become a part of our vibrant volunteer community! Your time, skills, and passion can make a significant impact. Together, we can achieve great things and bring positive change to our community. Join us today and be a catalyst for good!</p>
            <div className='flex flex-col md:flex-row lg:flex-row rounded-lg'>
                <div className='flex-1 bg-gray-800 text-white text-center p-4 flex flex-col justify-center rounded-l-lg'>
                    <p>Ready to make a difference? By volunteering with us, you’ll contribute to meaningful projects, meet like-minded individuals, and gain valuable experience. Whether you have a few hours or a few days to give, your support will help us achieve our mission. Join us and be a part of something special!</p>
                    <Link to={'/beAVolunteer'}><button className='btn btn-outline btn-accent mt-4'>Be a Volunteer</button></Link>
                </div>
                <div className='flex-1 rounded-r-lg'>
                    <img src={'https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13553.jpg?t=st=1720182648~exp=1720186248~hmac=5b0fe36f7fd37c8b05ae5bb2b25dc64f8e5f1a4e4ac021b4c86fa4f8fea13bce&w=900'} alt="volunteer" />
                </div>
            </div>
        </div>
    )
}
