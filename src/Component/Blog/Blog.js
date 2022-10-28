import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center items-center pt-10 dark:bg-slate-700 h-screen'>
            <div className='space-y-10'>
                <div className='flex space-x-10'>
                    <div>
                        <div className="max-w-md p-6 overflow-hidden rounded-lg  dark:bg-gray-900 dark:text-gray-100 shadow-2xl h-[350px]">
                            <article>
                                <h2 className="text-xl font-bold">What is CORS ?</h2>
                                <p className="mt-4 dark:text-gray-400">Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>

                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-md p-6 overflow-hidden rounded-lg  dark:bg-gray-900 dark:text-gray-100 shadow-2xl h-[350px]">
                            <article>
                                <h2 className="text-xl font-bold"> Why are you using firebase? What other options do you have to implement authentication?</h2>
                                <p className="mt-4 dark:text-gray-400">The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. other opthion use Back4app,Quora,supabase</p>
                            </article>
                        </div>
                    </div>

                </div>
                <div className='flex space-x-10'>
                    <div>
                        <div className="max-w-md p-6 overflow-hidden rounded-lg  dark:bg-gray-900 dark:text-gray-100 shadow-2xl h-[350px]">
                            <article>
                                <h2 className="text-xl font-bold">How does the private route work?</h2>
                                <p className="mt-4 dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>

                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="max-w-md p-6 overflow-hidden rounded-lg  dark:bg-gray-900 dark:text-gray-100 shadow-2xl h-[350px]">
                            <article>
                                <h2 className="text-xl font-bold">What is Node? How does Node work?</h2>
                                <p className="mt-4 dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.</p>

                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;