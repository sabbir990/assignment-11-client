import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NeedVolunteer from "../Pages/Need Volunteer/NeedVolunteer";
import AddVolunteer from "../Pages/Add Volunteer/AddVolunteer";
import BeAVolunteer from "../Pages/Be a volunteer/BeAVolunteer";
import PrivateRoute from "../Private Route/PrivateRoute";
import PostDetails from "../Pages/Post Details/PostDetails";
import ManageMyPost from "../Pages/Manage My post/ManageMyPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/needVolunteer',
                element: <NeedVolunteer />
            },
            {
                path: '/addVolunteer',
                element: <PrivateRoute>
                    <AddVolunteer />
                </PrivateRoute>
            },
            {
                path: '/beAVolunteer/:id',
                element: <PrivateRoute>
                    <BeAVolunteer />
                </PrivateRoute>
            },
            {
                path : '/postDetails/:id',
                element : <PrivateRoute>
                    <PostDetails />
                </PrivateRoute>
            },
            {
                path : '/manageMyPosts',
                element : <PrivateRoute>
                    <ManageMyPost />
                </PrivateRoute>
            }
        ]
    }
])

export default router;