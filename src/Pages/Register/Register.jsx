import React from 'react'
import { FaRegHandPeace, FaGoogle } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl border-2 border-pink-500 rounded-lg pt-4 space-y-4">
                    <div className='space-y-4'>
                        <div className="flex items-center justify-center font-bold text-2xl">
                            <span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span>
                        </div>
                        <div>
                            <h1 className='font-bold text-center'>Register to VOLUNTEER</h1>
                        </div>
                        <div className='flex justify-center'>
                            <button className='btn btn-outline btn-success'>Register With Google <FaGoogle /></button>
                        </div>
                    </div>
                    <hr />
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="URL" name='photoURL' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Create a password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-secondary">Register</button>
                        </div>
                        <p className='font-bold'>Already have any account? <Link to={'/login'} className='text-blue-700 underline cursor-pointer font-bold'>Login Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
