import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import PostCard from '../../Components/Volunteer Post\'s card/PostCard'
import { useLocation } from 'react-router-dom';
import useTitle from '../../Components/Custom Component/useTitle';

export default function NeedVolunteer() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  useTitle(location.pathname)

  useEffect(() => {
    axios.get(`http://localhost:5000/volunteerPosts`).then(result => {
      setPosts(result.data);
    })
  }, [])

  const handleSearchFire = (event) => {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.search.value;
    setSearch(inputValue);
  }
  return (
    <div>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className="btn btn-ghost text-4xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></h1>
        <p className='text-gray-500'>We need volunteers! Join us in making a difference in our community. Our initiatives rely on dedicated individuals like you to bring about positive change. Whether you have a few hours or a few days to spare, your help is invaluable. By volunteering, you can make a meaningful impact, gain new skills and experiences, connect with like-minded individuals, and give back to your community. You can assist with local events and projects, support community outreach programs, provide companionship to those in need, or help with administrative tasks. Your time and effort can create lasting change. Sign up today and be part of something special!</p>
      </div>
      <div className='flex items-center justify-center mt-10' onSubmit={handleSearchFire}>
        <form className='space-x-4'>
          <input name='search' placeholder='Search' className='px-3 py-2 border-2 border-gray-500 rounded-lg' />
          <input type='submit' className='btn btn-outline btn-accent' value={'Search'} />
        </form>
      </div>
      <hr className='mt-10' />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        {
          posts.length === 0 ? <div className='flex items-center justify-center min-h-[calc(100vh-292px)]'>
            <span className="loading loading-spinner loading-lg"></span>
          </div> : posts.filter(post => {
            const postTitle = post?.post_title;
            return search.toLowerCase() === '' ? post : postTitle.toLowerCase().includes(search.toLowerCase());
          }).map(post => {
            return <PostCard key={post?._id} organizerName={post?.organizer_name} thumbnail={post?.thumbnail} postTitle={post?.post_title} category={post?.category} deadline={post?.deadline} id={post?._id} description={post?.description} />
          })
        }
      </div>
    </div>
  )
}
