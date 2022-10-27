import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CheckOutPage from "../Component/CheckOutPage/CheckOutPage";
import Course from "../Component/Course/Course";
import FAQ from "../Component/FAQ/FAQ";
import Home from "../Component/Home/Home";
import Login from "../Component/User/LogIn/Login";
import Register from "../Component/User/Register/Register";
import Courses from "../Courses/Courses";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layOut/Main";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

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
                loader: () => fetch('https://learning-platform-assignment-server.vercel.app/courses')
            },
            {
                path: 'course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://learning-platform-assignment-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute><CheckOutPage></CheckOutPage></PrivetRoute>,
                loader: ({ params }) => fetch(`https://learning-platform-assignment-server.vercel.app/course/${params.id}`)
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]

    }
]);