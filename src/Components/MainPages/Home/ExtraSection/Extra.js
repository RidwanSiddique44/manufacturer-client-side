import React from 'react';
import nissan from '../../../Images/icons/nissan.png';
import ford from '../../../Images/icons/ford.png';
import ferarri from '../../../Images/icons/ferrari.png';
import bmw from '../../../Images/icons/bmw.png';
import chevrolet from '../../../Images/icons/chevrolet.png';

const Extra = () => {
    return (
        <div>
            <section className="pb-24 pt-20 bg-gray-800 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
                            <div className="lg:max-w-lg">
                                <span className="text-lg text-blue-400 font-bold">Our Market Place</span>
                                <h2 className="mt-8 mb-12 text-6xl 2xl:text-7xl font-bold font-heading text-white">Trusted by brands all over the world</h2>
                                <p className="text-lg text-gray-200">We supply our products all over the world.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5 px-4">
                            <div className="flex justify-center items-center">
                                <div className="py-8 px-2 sm:px-6 mr-3 bg-gray-600 rounded-lg">
                                    <img className="h-16 mx-auto" src={nissan} alt="" />
                                </div>
                                <div className="flex flex-col mr-3">
                                    <div className="inline-block ml-auto py-12 px-4 sm:px-8 mb-3 bg-gray-600 rounded-lg">
                                        <img className="h-16 mx-auto" src={bmw} alt="" />
                                    </div>
                                    <div className="py-16 px-2 sm:px-12 bg-gray-600 rounded-lg">
                                        <img className="h-16 mx-auto" src={ford} alt="" />
                                    </div>
                                </div>
                                <div className="-mb-32">
                                    <div className="py-8 px-2 sm:px-14 mb-3 bg-gray-600 rounded-lg">
                                        <img className="h-16 mx-auto" src={ferarri} alt="" />
                                    </div>
                                    <div className="inline-block py-14 px-2 sm:px-8 bg-gray-600 rounded-lg">
                                        <img className="h-16 mx-auto" src={chevrolet} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Extra;