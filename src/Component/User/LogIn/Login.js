import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { googleLogin, githubLogin, login } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleLoginForm = user => {
        const email = user.email;
        const password = user.password;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })

        console.log();
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <section className="flex justify-center p-6  text-gray-50">
            <div className=' border-2 w-4/12 bg-gray-400 rounded-lg'>
                <h3 className='text-2xl font-medium text-center border-b-2 py-5'>Log in</h3>
                <form className=" space-y-10  my-10 ml-20" onSubmit={handleSubmit(handleLoginForm)}>

                    <div>
                        <p><label htmlFor="">Email</label></p>
                        <input {...register('email')} type="email" placeholder='Enter email' className='w-10/12 rounded p-2 text-black text-xl' required />
                    </div>
                    <div>
                        <p><label htmlFor="">Password</label></p>
                        <input {...register('password')} type="password" placeholder='Enter password' className='w-10/12 rounded p-2 text-black text-xl' required />
                    </div>

                    <button className='bg-white text-black px-8 py-2 hover:bg-blue-500 duration-300'>Log in</button>
                    <div className='flex space-x-20'>
                        <p>Don't Have an Account: <Link to={'/signup'} className='text-yellow-500'>Sign Up</Link></p>
                        <div className='flex items-center space-x-3 text-xl text-black'>
                            <GoMarkGithub onClick={handleGithubLogin} className='cursor-pointer hover:scale-150 duration-200'></GoMarkGithub>
                            <AiOutlineGoogle onClick={handleGoogleLogin} className='cursor-pointer hover:scale-150 duration-200'></AiOutlineGoogle>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;