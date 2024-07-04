import React from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl border-2 border-pink-500 rounded-lg pt-4 space-y-4">
                    <div className='space-y-4'>
                        <div className="flex items-center justify-center font-bold text-2xl">
                            <span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span>
                        </div>
                        <div>
                            <h1 className='font-bold text-center'>Login to VOLUNTEER</h1>
                        </div>
                        <div className='flex justify-center'>
                            <button className='btn btn-outline btn-success'>Login With Google <FaGoogle /></button>
                        </div>
                    </div>
                    <hr />
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-secondary">Login</button>
                        </div>
                        <p className='font-bold'>Don't have any account? <Link to={'/register'} className='text-blue-700 underline cursor-pointer font-bold'>Register Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
