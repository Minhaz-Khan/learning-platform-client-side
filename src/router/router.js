import { createBrowserRouter } from "react-router-dom";
import Course from "../Component/Course/Course";
import Home from "../Component/Home/Home";
import Login from "../Component/User/LogIn/Login";
import Register from "../Component/User/Register/Register";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layOut/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: 'course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            }
        ]

    }
]);