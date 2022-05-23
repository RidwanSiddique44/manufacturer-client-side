import React from 'react';
import googleicon from '../../Images/icons/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Googlesignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        toast.error(<p className='text-danger'>Error: {error?.message} {error?.message}</p>)
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()} className="w-full text-center py-3 rounded bg-gray-100 text-gray-800 hover:bg-gray-300 focus:outline-1 my-1 border-solid border-2 border-gray-400"
            > <img className='m-0 w-8 inline' src={googleicon} alt="" /> Google SignIn</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Googlesignin;