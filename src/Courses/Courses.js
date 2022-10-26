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
                <div className='col-span-3 bg-rose-200 space-y-10 p-10 text-xl' >
                    {courses.map(course => <LeftSideNav key={course._id} course={course}></LeftSideNav>)}
                </div>
                <div className='col-span-9 bg-rose-50 grid grid-cols-2 gap-y-10 py-10 px-16'>
                    {courses.map(course => <CourseList key={course._id} course={course}></CourseList>)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Courses;