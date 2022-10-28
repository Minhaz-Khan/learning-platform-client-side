import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOutPage = () => {
    const course = useLoaderData();
    const { Main_title } = course;
    console.log(Main_title);
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-slate-200 h-screen pt-5 '>
            <div className='px-5 py-5 text-black shadow-2xl   bg-slate-100 lg:w-96 text-center'>
                <h3 className='text-xl'>Name:{user?.displayName}</h3>
                <p><span className='text-xl'>ID:</span> {user?.uid}</p>
            </div>
            <h1 className='text-center text-4xl text-[#387b9a] font-medium'>{Main_title}</h1>
            <div className='flex justify-center text-center h-[300px]  space-x-6 mt-10'>
                <div className='w-72 border-2 border-[#387b9a] flex justify-center items-center rounded-tl-3xl rounded-br-3xl'>
                    <div>
                        <h4 className='text-xl font-medium text-[#70afce]'>Get Standard</h4>
                        <p>Unlimited access to 480+</p>
                        <p>Courses and Skill Paths</p>
                        <p><span className='text-[#387b9a]'><span className='text-3xl'>$11</span >.66</span> /<span>month</span></p>
                        <button className='rounded px-8 py-2 bg-blue-500 hover:bg-green-600 duration-150 text-white mt-3'>Purchase</button>
                    </div>
                </div>
                <div className='w-72 border-2 border-[#387b9a] flex justify-center items-center rounded-tr-3xl rounded-bl-3xl'>
                    <div >
                        <h4 className='text-xl font-medium text-[#70afce]'>Get Premium</h4>
                        <p>Unlimited access to 480+</p>
                        <p>Courses and Skill Paths</p>
                        <p><span className='text-[#387b9a]'><span className='text-3xl'>$99</span >.99</span> /<span>Year</span></p>
                        <button className='rounded px-8 py-2 bg-blue-500 hover:bg-green-600 duration-150 text-white mt-3'>Purchase</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOutPage;