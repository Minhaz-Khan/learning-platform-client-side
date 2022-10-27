import { FaStar, FaClock } from "react-icons/fa";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";

const CourseList = ({ course }) => {
    const { about, cours_duration, cours_name, level, picture, rating, _id } = course;
    const navigate = useNavigate()
    const handleDetailsButton = () => {
        navigate(`/course/${_id}`)
    }
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos="fade-up" className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto bg-white rounded">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p className="mb-0 capitalize dark:text-gray-100 text-xl font-medium">{cours_name}</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="space-y-2 w-full h-72 overflow-hidden">
                    <img src={picture} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 hover:scale-110 duration-[2s] ease-out" />
                </div>
                <div className="space-y-2">
                    <Link to={`/course/${_id}`} className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-400">{about.length > 150 ? about.slice(0, 150) + '...' : about}</h3>
                    </Link>
                    <div className='flex justify-between lg:w-8/12 w-10/12'>
                        <p>{level}</p>
                        <p className="flex items-center"><FaStar></FaStar>{cours_duration}</p>
                        <p className="flex items-center"><FaClock></FaClock>{rating}</p>
                    </div>
                    <button className='bg-blue-600   hover:bg-yellow-500 hover:text-black duration-500 px-10  py-2 rounded-lg text-white' onClick={handleDetailsButton}>Course Details</button>
                </div>
            </div>
        </div>
    );
};

export default CourseList;