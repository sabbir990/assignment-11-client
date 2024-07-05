import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NeedVolunteer from "../Pages/Need Volunteer/NeedVolunteer";
import AddVolunteer from "../Pages/Add Volunteer/AddVolunteer";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path : '/register',
                element : <Register />
            },
            {
                path : '/needVolunteer',
                element : <NeedVolunteer />
            },
            {
                path : '/addVolunteer',
                element : <AddVolunteer />
            }
        ]
    }
])

export default router;