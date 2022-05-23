import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Googlesignin from '../Googlesignin/Googlesignin';
import Loading from '../../SharedPages/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error,]
        = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleSignup = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.fullname.value;
        createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    let errorText;
    if (error || updateError) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
        toast.error(errorText);
    }

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl  text-center">Sign up</h1>
                        <form onSubmit={handleSignup}>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name" />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-gray-700 text-white hover:bg-gray-900 focus:outline-none my-1"
                            >Create Account</button>
                        </form>
                        <div className="text-grey-dark mt-6">
                            Already have an account?
                            <Link to="/signin" className="no-underline border-b border-blue text-blue-900"> Sign In </Link>.
                        </div>
                        <Googlesignin></Googlesignin>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;