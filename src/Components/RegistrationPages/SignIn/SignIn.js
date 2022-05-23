import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Googlesignin from '../Googlesignin/Googlesignin';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl  text-center">Sign In</h1>
                        <form onSubmit={handleSignIn}>
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
                            >Sign In</button>
                        </form>
                        <div className="text-grey-dark mt-6">
                            Do not have an account?
                            <Link to="/signup" className="no-underline border-b border-blue text-blue-900"> Sign Up </Link>.
                        </div>
                        <Googlesignin></Googlesignin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;