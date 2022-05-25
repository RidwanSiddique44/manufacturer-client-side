import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Review Added Successfully");
            })
    };
    return (
        <div className='container border border-primary p-10'>
            <h3 className="text-center font-bold text-2xl mb-3">Add Review</h3>
            <hr className="bg-secondary mb-5" />
            <form className='flex flex-col text-left ' onSubmit={handleSubmit(onSubmit)}>
                <label>Your Email</label>
                <input placeholder='Email' className='mb-3 input input-bordered' value={user?.email}  {...register("email", { required: true, maxLength: 200 })} />
                <label>Your Name</label>
                <input placeholder='Name' className='mb-3 input input-bordered' value={user?.displayName}  {...register("name", { required: true, maxLength: 100 })} />
                <label>Ratings</label>
                <input placeholder='Ratings' className='mb-3 input input-bordered' type="number" {...register("ratings")} />
                <label>Give Your Review</label>
                <textarea placeholder='Reviews' className='mb-3 input input-bordered'  {...register("reviews")} />
                <input className='mb-3 bg-info py-2 text-white font-bold rounded hover:bg-blue-700' type="submit" />
            </form>
        </div>
    );
};

export default AddReview;