import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import { FaRegHandPeace } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BeAVolunteer() {
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/postDetails/${id}`).then(result => {
        setDetails(result.data)
    })
}, [])
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div>
          <div className='flex justify-center'>
            <p className="btn btn-ghost text-xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></p>
          </div>
          <div>
            <p className='text-center text-gray-500'>Join our team of dedicated volunteers and make a real difference in our community. Your time and skills can help create positive change and support those in need. Get involved today and be part of something impactful!</p>
          </div>
        </div>
          <hr className='mt-4'/>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="username">Thumbnail</label>
              <input type="text" placeholder='Thumbnail URL' name='thumbnail' defaultValue={details?.thumbnail} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Post Title</label>
              <input type="text" placeholder='Post title' name='post_title' defaultValue={details?.post_title} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="password">Description</label>
              <input type="text" name='description' placeholder='Description' defaultValue={details?.description} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Category</label>
              <input type="text" placeholder='Category' name='category' defaultValue={details?.category} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="username">Location</label>
              <input type="text" placeholder='Location' name='location' defaultValue={details?.location} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Volunteer Needed</label>
              <input type="number" placeholder='Volunteer Needed' name='volunteer_number' defaultValue={details?.volunteer_number} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="password">Deadline</label>
              <input type="text" placeholder='Deadline' name='deadline' defaultValue={new Date(details?.deadline).toLocaleDateString()} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Organizer Name</label>
              <input type="text" placeholder='Organizer name' name='organizer_name' defaultValue={details?.organizer_name} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Organizer Email</label>
              <input type="email" placeholder='Organizer email' name='organizer_email' defaultValue={details?.organizer_email} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Volunteer Name</label>
              <input type="text" placeholder='Volunteer Name' name='volunteer_name' defaultValue={user?.displayName} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">volunteer Email</label>
              <input type="email" placeholder='Volunteer email' name='volunteer_email' defaultValue={user?.email} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Suggession</label>
              <input type="text" placeholder='Suggession' name='suggession' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Status</label>
              <input type="text" placeholder='Status ' name='status' defaultValue={'Requested'} readOnly={true} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </div>
  )
}
