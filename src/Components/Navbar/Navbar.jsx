import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegHandPeace } from "react-icons/fa6";
import { AuthContext } from '../../Providers/AuthProvider';

export default function Navbar() {
  const { user, setUser, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(res => {
      setUser(null)
    })
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/needVolunteer'}>Need Volunteer</NavLink></li>
            {!user && <li><NavLink to={'/login'}>Login</NavLink></li>}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/needVolunteer'}>Need Volunteer</NavLink></li>
          {!user && <li><NavLink to={'/login'}>Login</NavLink></li>}
        </ul>
      </div>
      {user && <div className="navbar-end z-50">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img
                alt={user?.displayName}
                src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow w-auto border-2 border-gray-600">
            <p className='py-4 font-bold text-center'>{user && user.email}</p>
            <hr />
            <li><Link to={'/addVolunteer'}>Add Volunteer Post</Link></li>
            <li><a>Manage My post</a></li>
            <li><button onClick={handleLogOut}>Logout</button></li>
          </ul>
        </div>
      </div>}
    </div>
  )
}
