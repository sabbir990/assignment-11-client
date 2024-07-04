import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function Root() {
    return (
        <div className='p-4 font-lato'>
            <Navbar />
            <div className='min-h-[calc(100vh-292px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
