import React, { useContext } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import { FaGoogle } from 'react-icons/fa6'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import Swal from 'sweetalert2'

export default function Login() {
    const { setUser, login, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then(res => {
            setUser(res.user);
            Swal.fire({
                title: "Yeyyyyy!",
                text: "Login Successful",
                icon: "success"
            });
            if (location.state) {
                navigate(location.state)
            } else {
                navigate('/')
            }
        })
    }

    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            setUser(result.user);
            console.log(result.user);

            Swal.fire({
                title: "Well done!",
                text: "Registration Successful!",
                icon: "success"
            });

            if (location.state) {
                navigate(location.state)
            } else {
                navigate('/')
            }
        })
    }
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
                            <button className='btn btn-outline btn-success' onClick={handleGoogleLogin}>Login With Google <FaGoogle /></button>
                        </div>
                    </div>
                    <hr />
                    <form className="card-body" onSubmit={handleLoginSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
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
