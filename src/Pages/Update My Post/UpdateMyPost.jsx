import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaRegHandPeace } from 'react-icons/fa6'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import DatePicker from 'react-datepicker';
import Swal from 'sweetalert2';
import useTitle from '../../Components/Custom Component/useTitle';

export default function UpdateMyPost() {
    const { user } = useContext(AuthContext)
    const [post, setPost] = useState(null)
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const location = useLocation();
    useTitle(location.pathname)

    useEffect(() => {
        axios.get(`http://localhost:5000/updateMyPost/${id}`).then(result => {
            setPost(result.data);
        })
    }, [])

    const handleAddVolunteerUpdateSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const thumbnail = form.thumbnail.value;
        const post_title = form.post_title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteer_number = parseInt(form.volunteer_number.value);
        const deadline = startDate;
        const organizer_name = form.organizer_name.value;
        const organizer_email = form.organizer_email.value;

        const volunteerUpdatedPost = {
            thumbnail,
            post_title,
            description,
            category,
            location,
            volunteer_number,
            deadline,
            organizer_name,
            organizer_email
        }

        axios.put(`http://localhost:5000/updateMyPost/${id}`, volunteerUpdatedPost).then(result => {
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Done",
                    text: "You've successfully updated the post",
                    icon: "success"
                });

                navigate('/manageMyPosts')

            }
        })

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4 px-4 border-2 border-green-900">
                    <div className='space-y-4'>
                        <div>
                            <h1 className="flex items-center justify-center font-bold text-2xl"><span className='text-pink-600 font-bold'><FaRegHandPeace /></span><span>Volunteer</span></h1>
                        </div>
                        <div>
                            <p className='text-gray-500 text-center'>To add a new volunteer, please fill out the required information below. We appreciate your effort in expanding our team and look forward to welcoming new members who share our mission and values.</p>
                        </div>
                    </div>
                    <hr className='mt-4' />
                    <form className="card-body" onSubmit={handleAddVolunteerUpdateSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" placeholder="Enter your thumbnail's URL" defaultValue={post?.thumbnail} name='thumbnail' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post Title</span>
                            </label>
                            <input type="text" placeholder="Enter your Post's title" defaultValue={post?.post_title} name='post_title' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" placeholder="Enter your Post's description" defaultValue={post?.description} name='description' className="input input-bordered w-full" rows={7} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" defaultValue={post?.category} className='w-full outline-none px-4 py-3 border-2 border-green-900 rounded-lg'>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Social Service">Social Service</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Enter your location" defaultValue={post?.location} name='location' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">No. of Volunteer needed</span>
                            </label>
                            <input type="number" placeholder="Enter your needed volunteer's number" defaultValue={post?.volunteer_number} name='volunteer_number' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <DatePicker selected={startDate} defaultValue={post?.deadline} className='w-full outline-none px-4 py-3 border-2 border-green-900 rounded-lg' onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Organizer Name</span>
                            </label>
                            <input type="text" placeholder="Organizer name here" name='organizer_name' className="input input-bordered w-full" defaultValue={user?.displayName} disabled required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Organizer Email</span>
                            </label>
                            <input type="email" placeholder="Organizer email here" name='organizer_email' className="input input-bordered w-full" defaultValue={user?.email} disabled required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
