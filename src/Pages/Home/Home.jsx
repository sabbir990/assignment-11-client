import React from 'react'
import Banner from '../../Components/Banner/Banner'
import VolunteerNeedNow from '../../Components/Volunteer Needs Now/VolunteerNeedNow'
import { Link, useLocation } from 'react-router-dom'
import JoinUs from '../../Components/JoinUs Section/JoinUs'
import Subscribe from '../../Components/Subscribe section/Subscribe'
import useTitle from '../../Components/Custom Component/useTitle'

export default function Home() {
  const location = useLocation();
  useTitle(location.pathname)
  return (
    <div>
      <header className='my-4'>
        <Banner />
      </header>
      <body>
        <VolunteerNeedNow />
        <div className='mt-4 flex justify-center'>
          <Link to={'/needVolunteer'}>
            <button className='btn btn-outline btn-info'>See All</button>
          </Link>
        </div>
        <div className='mt-20'>
          <JoinUs />
        </div>
        <div className='mt-20'>
          <Subscribe />
        </div>
      </body>
    </div>
  )
}
