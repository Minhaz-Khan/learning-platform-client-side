import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    const { thumbnail_details, main_thumbnail, about, Main_title, details, details_title, _id } = course;
    return (
        <div ref={ref}>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:py-40 py-10 bg-blue-900 relative'>
                <div className='w-8/12 mx-auto my-auto text-white space-y-5'>
                    <h1 className='text-5xl font-medium text-orange-400'>{Main_title}</h1>
                    <p>{about}</p>
                </div>
                <dir className="px-5">
                    <Pdf targetRef={ref} filename='post.pdf'>
                        {({ toPdf }) => (<button onClick={toPdf} className='px-5 py-2 bg-[#ff7582] absolute top-0 right-0'>Download PDF</button>)}
                    </Pdf>
                    <img src={main_thumbnail} alt="" className='lg:w-10/12 mx-auto my-auto ' />
                </dir>
            </div>
            <dir className='grid lg:grid-cols-2 grid-cols-1 px-5'>
                <dir className='mx-auto pl-0'>
                    <h2 className='text-5xl font-medium lg:mb-12 my-auto'>What you will learn</h2>
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