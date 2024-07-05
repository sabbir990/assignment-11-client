import React from 'react'
import Banner from '../../Components/Banner/Banner'
import VolunteerNeedNow from '../../Components/Volunteer Needs Now/VolunteerNeedNow'
import { Link } from 'react-router-dom'

export default function Home() {
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
      </body>
    </div>
  )
}
