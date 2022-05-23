import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-cyan-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="*">404</Link></li>
                            <li>{user ? <button className="btn btn-ghost" onClick={handleSignOut} >Sign Out</button> : <Link to="/signin">Sign In</Link>}</li>
                        </ul>
                    </div>
                    <Link to="/home" className="btn btn-ghost normal-case text-xl text-white">daisyUI</Link>
                </div>
                <div className="navbar-end text-white">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="*">404</Link></li>
                            <li>{user ? <button className="btn btn-ghost" onClick={handleSignOut} >Sign Out</button> : <Link to="/signin">Sign In</Link>}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;