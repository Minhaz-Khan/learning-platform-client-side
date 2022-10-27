import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-xl font-bold">What is CORS ?</h2>
                    <p className="mt-4 dark:text-gray-400">Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blog;