import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import axiosPrivate from '../../../AxiosPrivate/axiosPrivate';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const [myInfo, setMyInfo] = useState([]);
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const myProducts = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/user?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyInfo(data);
                console.log(data)
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        myProducts();
    }, [info])
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
                const showInfo = myInfo;
                setInfo(showInfo);

            })
    };
    return (
        <div>
            <h1 className="font-bold text-3xl text-cyan-700 mt-5">Your Information</h1>
            <div className='border-solid border-2 border-blue-700 m-10'>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Education</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{myInfo[0]?.phone}</td>
                                <td>{myInfo[0]?.location}</td>
                                <td>{myInfo[0]?.education}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container border border-primary p-10 mb-5'>
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