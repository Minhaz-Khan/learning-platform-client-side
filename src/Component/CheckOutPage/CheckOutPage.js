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
        <div className='bg-blue-900 h-screen'>
            <div className='pt-10 pl-10 text-white'>
                <h3 className='text-xl'>User Name:{user?.displayName}</h3>
                <p>Id: {user?.uid}</p>
            </div>
            <h1 className='text-center text-4xl text-gray-200 font-medium'>{Main_title}</h1>
            <div className='flex justify-center text-center h-[300px] text-gray-200'>
                <div className='w-72 border-2 flex justify-center items-center '>
                    <div>
                        <h4 className='text-xl text-[#c56c86]'>Get Standard</h4>
                        <p>Unlimited access to 480+</p>
                        <p>Courses and Skill Paths</p>
                        <p><span>$11.<span>66</span></span> /<span>month</span></p>
                        <button className='px-8 py-2 bg-[#355c7d] hover:bg-green-700'>Purchase</button>
                    </div>
                </div>
                <div className='w-72 border-2 flex justify-center items-center'>
                    <div >
                        <h4>Get Premium</h4>
                        <p>Unlimited access to 480+</p>
                        <p>Courses and Skill Paths</p>
                        <p>$99.<span>99</span> /<span>Year</span></p>
                        <button className='px-8 py-2 bg-[#725a7a] hover:bg-[#ff7582]'>Purchase</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOutPage;