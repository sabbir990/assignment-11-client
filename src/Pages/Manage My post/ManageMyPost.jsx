import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import { AuthContext } from '../../Providers/AuthProvider';
import { FaPencilRuler } from "react-icons/fa";
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function ManageMyPost() {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/myVolunteerPosts/${user?.email}`).then(result => {
            setMyPosts(result.data)
        })
    }, [])
    return (
        <div>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className="btn btn-ghost text-4xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></h1>
                <p className='text-gray-500'>Welcome to your posts! Here you can find all the volunteer opportunities you've created. Manage your posts, track their progress, and engage with potential volunteers. Keep making a difference by sharing your initiatives with the community!</p>
            </div>
            <hr className='mt-10' />
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Date
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Title
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Customer
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Category
                                            </th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            myPosts && myPosts.map(post => {
                                                return (
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{new Date(post?.deadline).toLocaleDateString()}</td>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                                <h2 className="text-sm font-normal">{post?.post_title}</h2>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            <div className="flex items-center gap-x-2">
                                                                <img className="object-cover w-8 h-8 rounded-full" src={user?.photoURL} alt="" />
                                                                <div>
                                                                    <h2 className="text-sm font-medium text-gray-800 dark:text-white ">{user?.displayName}</h2>
                                                                    <p className="text-xs font-normal text-gray-600 dark:text-gray-400">{user?.email}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{post?.category}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <Link to={`/updateMyPost/${post?._id}`}>
                                                                    <button title='Update' className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                                        <FaPencilRuler />
                                                                    </button>
                                                                </Link>
                                                                |
                                                                <button title='Delete' className=" text-xl transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                                                                    <MdDeleteForever />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
