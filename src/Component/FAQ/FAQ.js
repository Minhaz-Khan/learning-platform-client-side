import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">What skills do I need to become a data engineer?</h3>
                        <p className="mt-1 dark:text-gray-400">You need an excellent command of scripting languages and common scripting tools such as SQL, Cassandra, or Bigtable. You will need to know how to build infrastructure and architecture for data generation. You will also need to have experience working ETL and other data warehouse architecture. Hadoop-based analytic knowledge is helpful, and coding knowledge will give you an advantage. Finally, knowledge of various systems such as UNIX and Linux is vital.

                            If you want to try data engineering, several websites such as Udemy and EdX offer data engineer courses. While you usually cannot get certified via this route, it is a good way to test your skills and learn if you have what it takes to be a certified data engineer.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is Search Engine Optimization?</h3>
                        <p className="mt-1 dark:text-gray-400">Search Engine Optimization, commonly referred to as SEO, is the act of improving content and webpages in order to rank higher on search engine results pages. Search engines have algorithms that determine which webpages hold the most relevant results, and those pages are ranked highest among the search results.

                            Using SEO tactics, such as keywords, meta descriptions, and links, your content will stand out to search engine algorithms as relevant information and ultimately rank higher. Ranking higher leads to increased traffic and consumer trust.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Can a full stack developer work from home?</h3>
                        <p className="mt-1 dark:text-gray-400">Covid-19 has prompted many companies to adopt remote working practices. As such, working from home is technically possible for full stack developers at this time. Following the pandemic, companies may opt to retain their work from home policies in order to provide flexibility for their workforce.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What exactly is UX design?</h3>
                        <p className="mt-1 dark:text-gray-400 
                        bg-[#387b9a] bg-[#70afce] bg-[#a5def1] bg-[#FFFFFF]
                        
                        ">User experience (UX) design is an umbrella term representing the entire process of creating products and services that provide intuitive and delightful experience to their users.

                            People widely use terms like “UI/UX Design” or “Usability Design” to represent User Experience Design. However UI (User Interface) Design and Usability Design are subsets of UX Design.

                            Even though there is User Experience in everything that we use in our everyday lives (like a door, coffee mug or TV remote), off late the term UX Design has been mainly associated with digital/technology products.

                            The objective of user experience designing is not just creating products that are usable but also engaging, efficient and fun to use.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;