import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import PostCard from '../Volunteer Post\'s card/PostCard'

export default function VolunteerNeedNow() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/volunteerPosts`).then(result => {
            setPosts(result.data)
        })
    })
    return (
        <div className='flex flex-col items-center mt-10'>
            <h1 className='space-x-2 text-3xl flex items-center font-bold'> <FaRegHandPeace className='text-pink-500' /> <span>Volunteer Need Now</span></h1>
            <p className='text-gray-500'>We urgently need volunteers for community outreach, event coordination, and tutoring. Your help can make a big difference. Join us today!</p>
            <div className='mt-10 grid grid-cols-3 gap-4'>
                {
                    posts && posts.map(post => {
                        return <PostCard key={post?._id} organizerName={post?.organizer_name} thumbnail={post?.thumbnail} postTitle={post?.post_title} category={post?.category} deadline={post?.deadline} id={post?._id} description={post?.description}/>
                    })
                }
            </div>
        </div>
    )
}
