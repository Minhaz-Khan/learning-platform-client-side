import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    const { thumbnail_details, main_thumbnail, about, Main_title, details, details_title, _id } = course;
    return (
        <div>

            <div className='grid grid-cols-2 py-40 bg-blue-900 relative'>
                <div className='w-8/12 mx-auto my-auto text-white space-y-5'>
                    <h1 className='text-5xl font-medium text-orange-400'>{Main_title}</h1>
                    <p>{about}</p>
                </div>
                <dir>
                    <button className='px-5 py-2 bg-[#ff7582] absolute top-0 right-0'>Download PDF</button>
                    <img src={main_thumbnail} alt="" className='w-10/12 mx-auto my-auto' />
                </dir>
            </div>
            <dir className='grid grid-cols-2'>
                <dir className='mx-auto'>
                    <h2 className='text-5xl font-medium mb-12 my-auto'>What you will learn</h2>
                    <img src={thumbnail_details} alt="" className='rounded-tr-full h-[400px]' />
                </dir>
                <div className='flex justify-start items-center'>
                    <div className='w-8/12'>
                        <h4 className='text-3xl'>{details_title}</h4>
                        <p>{details}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className='mt-5 px-8 py-3 duration-300 text-white bg-blue-500 text-lg font-medium hover:bg-green-600'>Get premium access</button>
                        </Link>
                    </div>
                </div>
            </dir>
        </div>
    );
};

export default Course;