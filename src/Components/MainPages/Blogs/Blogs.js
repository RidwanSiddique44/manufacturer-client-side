import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold">How will you improve the performance of a React Application?</h1>
                        <p class="py-6">Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application, such as: <br />1.We can spped up react app by using a React.PureComponent. <br /> 2. By Keeping component state local where necessary. <br />3. By Memoizing React components to prevent unnecessary re-renders. <br />4.By Code-splitting in React using dynamic import(). <br /> 5.By Windowing or list virtualization in React. <br /> 6. And binding Functions Early. <br />7.And by using Multiple Chunk Files etc.</p>

                    </div>
                </div>
            </div>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600 mt-5">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold"> What are the different ways to manage a state in a React application?</h1>
                        <p class="py-6">Once your application starts to get a little complex, you need to start managing state. Every React component has a built-in state.There are several ways to manage states in React, including the use of: Hooks,React Context API,Apollo Link State.There are also several ways to manage states in React, such as: Data State,Control State,Session State,Location State etc.There are four main types of state you need to properly manage in your React apps: <br /> <span className="font-bold">Local state:</span> Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. <br /><span className="font-bold">Global state:</span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br /><span className="font-bold">Server state:</span> Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br /><span className="font-bold">URL state:</span>Data that exists on our URLs, including the pathname and query parameters.</p>

                    </div>
                </div>
            </div>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600 mt-5">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold">How does prototypical inheritance work?</h1>
                        <p class="py-6">prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>

                    </div>
                </div>
            </div>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600 mt-5">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h1>
                        <p class="py-6">One should never update the state directly because of the following reasons: <br />1. If you update it directly, calling the setState() afterward may just replace the update you made. <br />When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br /> 3.You will lose control of the state across all components.</p>

                    </div>
                </div>
            </div>
            <div class="hero min-h-fit shadow-xl rounded-xl bg-gray-100 border border-indigo-600 mt-5">
                <div class="hero-content text-center">
                    <div class="max-w-screen">
                        <h1 class="text-3xl font-bold">What is a unit test? Why should write unit tests?</h1>
                        <p class="py-6"><span className="font-bold">Unit test</span>A unit is a single testable part of a software system and tested during the development phase of the application software. The purpose of unit testing is to test the correctness of isolated code. <br /> <span className="font-bold">Why should write unit test:</span> Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;