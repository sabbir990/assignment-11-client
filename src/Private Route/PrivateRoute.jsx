import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className='w-full min-h-[calc(100vh-292px)] flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location.pathname} />
}
