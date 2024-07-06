import React, { useContext, useEffect, useState } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import { AuthContext } from '../../Providers/AuthProvider'
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import useTitle from '../../Components/Custom Component/useTitle';

export default function MyVolunteerRequests() {
    const { user } = useContext(AuthContext);
    const [myRequests, setMyRequests] = useState([]);
    const location = useLocation();
    useTitle(location.pathname)

    useEffect(() => {
        axios.get(`http://localhost:5000/volunteerRequests/${user?.email}`).then(result => {
            setMyRequests(result.data)
        })
    }, [])

    const handleCancelRequest = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deleteVolunteerRequest/${id}`).then(result => {
                    if (result.data.deletedCount > 0) {

                        Swal.fire({
                            title: "Cancelled!",
                            text: "Your request has been cancelled.",
                            icon: "success"
                        });

                        setMyRequests(myRequests.filter(request => {
                            return request._id !== id;
                        }))
                    }
                })
            }
        });
    }
    return (
        <div>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className="btn btn-ghost text-4xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></h1>
                <p className='text-gray-500'>Welcome to your volunteer requests! Here you can manage all the requests you've made to join various volunteer opportunities. Review the status of your applications, see which initiatives you've applied for, and keep track of your commitments. Thank you for being an active member of our community and making a positive impact!</p>
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
                                            myRequests && myRequests.map(request => {
                                                return (
                                                    <tr>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{new Date(request?.deadline).toLocaleDateString()}</td>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">

                                                                <h2 className="text-sm font-normal">{request?.post_title}</h2>
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
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{request?.category}</td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button title='Delete' onClick={() => handleCancelRequest(request?._id)} className=" text-xl transition-colors duration-200 hover:text-indigo-500 flex items-center space-x-2 focus:outline-none">
                                                                    <RxCross2 /> <span>Cancel</span>
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
