import React from 'react';
import googleicon from '../../Images/icons/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Googlesignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()} className="w-full text-center py-3 rounded bg-gray-100 text-gray-800 hover:bg-gray-300 focus:outline-1 my-1 border-solid border-2 border-gray-400"
            > <img className='m-0 w-8 inline' src={googleicon} alt="" /> Google SignIn</button>
        </div>
    );
};

export default Googlesignin;