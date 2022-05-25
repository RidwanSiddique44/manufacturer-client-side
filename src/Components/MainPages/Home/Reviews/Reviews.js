import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const Reviews = (props) => {
    const { email, name, ratings, reviews } = props.review;
    return (
        <div className='lg:m-10'>
            <div className="card w-96 bg-base-100 shadow-xl border-double border-4 border-cyan-500">
                <div className="card-body">
                    <h2 className="card-title"><span className="font-bold">User:</span>{name}</h2>
                    <p> <span className="font-bold">Review: </span>{reviews}</p>
                    <div className="card-actions justify-end flex flex-row">
                        <h3 className='font-bold'>{ratings}.00</h3>
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;