import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold">How will you improve the performance of a React Application?</h1>
                        <p class="py-6"> There are lots of important ways to optimize the performance of a React application, such as: <br />1.Keeping component state local where necessary. <br />2.Memoizing React components to prevent unnecessary re-renders. <br />3.Code-splitting in React using dynamic import(). <br /> 4.Windowing or list virtualization in React. <br /> 5.Lazy loading images in React.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;