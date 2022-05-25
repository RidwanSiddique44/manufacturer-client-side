import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/user`;
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
                alert("Info Added Successfully");
            })
    };
    return (
        <div>
            <div className='container border border-primary p-10'>
                <h3 className="text-center font-bold text-2xl mb-3">Add Information</h3>
                <hr className="bg-secondary mb-5" />
                <form className='flex flex-col text-left ' onSubmit={handleSubmit(onSubmit)}>
                    <label>Your Email</label>
                    <input placeholder='Email' className='mb-3 input input-bordered' value={user?.email}  {...register("email", { required: true, maxLength: 200 })} />
                    <label>Your Name</label>
                    <input placeholder='Name' className='mb-3 input input-bordered' value={user?.displayName}  {...register("name", { required: true, maxLength: 100 })} />
                    <label>Phone</label>
                    <input placeholder='Phone Number' className='mb-3 input input-bordered' type="number" {...register("phone")} />
                    <label>Education</label>
                    <input placeholder='School/College' className='mb-3 input input-bordered' type="text" {...register("education")} />
                    <label>Your Address</label>
                    <textarea placeholder='City/District' className='mb-3 input input-bordered'  {...register("location")} />
                    <input className='mb-3 bg-info py-2 text-white font-bold rounded hover:bg-blue-700' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;