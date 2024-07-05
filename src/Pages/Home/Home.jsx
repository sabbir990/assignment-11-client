import React from 'react'
import Banner from '../../Components/Banner/Banner'
import VolunteerNeedNow from '../../Components/Volunteer Needs Now/VolunteerNeedNow'

export default function Home() {
  return (
    <div>
        <header className='my-4'>
            <Banner />
        </header>
        <body>
          <VolunteerNeedNow />
        </body>
    </div>
  )
}
