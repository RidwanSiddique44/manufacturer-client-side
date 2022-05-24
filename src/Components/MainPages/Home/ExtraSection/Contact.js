import React from 'react';
import contact from '../../../Images/Image/contact.png';

const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-400">We are happy to hear from you. Your suggestions will improve our marketplace the best.</div>
                    </div>
                    <img src={contact} alt="" className="p-6 h-80 md:h-80" />
                </div>
                <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid text-left">
                    <div>
                        <label htmlFor="name" className="text-sm text-left font-bold">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded text-gray-900 bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-left font-bold">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded text-gray-900  bg-gray-100" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm text-left font-bold">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded text-gray-900  bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;