import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseList from '../Component/CourseList/CourseList';
import Footer from '../Component/Footer/Footer';
import LeftSideNav from '../Component/leftSideNav/LeftSideNav';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-3 col-span-12 bg-rose-200 space-y-10 p-10 text-xl' >
                    {courses.map(course => <LeftSideNav key={course._id} course={course}></LeftSideNav>)}
                </div>
                <div className='lg:col-span-9 col-span-12 bg-rose-50 grid lg:grid-cols-2 grid-cols-1 gap-y-10 py-10  lg:px-16 px-5'>
                    {courses.map(course => <CourseList key={course._id} course={course}></CourseList>)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Courses;