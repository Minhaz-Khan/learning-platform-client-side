import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <section className="flex items-center mt-20 h-full  bg-white text-black">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className=" text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4  dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    {error && <p className='text pb-5 text-red-600'>{error.statusText || error.message}</p>}
                    <Link to={'/'} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;