import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const handleSignUpForm = (user) => {
        console.log(user);
    }
    return (
        <section className="flex justify-center p-6  text-gray-50">
            <div className=' border-2 w-4/12 bg-gray-400 rounded-lg'>
                <h3 className='text-2xl font-medium text-center border-b-2 py-5'>Sign Up</h3>
                <form onSubmit={handleSubmit(handleSignUpForm)} className="my-10">
                    <div className='flex'>
                        <dir className=''>
                            <p><label htmlFor="">First Name</label></p>
                            <input {...register('firstName')} type="text" placeholder='first' className=' rounded p-2 text-black text-xl' required />
                        </dir>
                        <dir>
                            <p><label htmlFor="">Last Name</label></p>
                            <input {...register('lastName')} type="text" placeholder='last' className=' rounded p-2 text-black text-xl' required />
                        </dir>
                    </div>
                    <div className='ml-10 space-y-5'>
                        <div>
                            <p><label htmlFor="">Photo Url</label></p>
                            <input {...register('photo')} type="text" placeholder='url' className='w-10/12 rounded p-2 text-black text-xl' required />
                        </div>
                        <div>
                            <p><label htmlFor="">Email</label></p>
                            <input {...register('email')} type="email" placeholder='Enter email' className='w-10/12 rounded p-2 text-black text-xl' required />
                        </div>
                        <div>
                            <p><label htmlFor="">Password</label></p>
                            <input {...register('password')} type="password" placeholder='Enter Password' className='w-10/12 rounded p-2 text-black text-xl' required />
                        </div>
                        <div>
                            <p><label htmlFor="">Confirm Password</label></p>
                            <input {...register('Cpassword')} type="password" placeholder='Confirm Password' className='w-10/12 rounded p-2 text-black text-xl' required />
                        </div>
                    </div>
                    <button className='bg-white text-black px-8 py-2 mt-5 ml-10'>Submit</button>
                    <p className=' text-black  mt-5 ml-10'>Already Have an Account Please: <Link to={"/login"} className='text-blue-500'>Log in</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Register;