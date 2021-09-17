import { Button } from 'bootstrap'
import React from 'react'
import { logout } from '../Features/userSlice'
import "./Logout.css";
import { useDispatch } from 'react-redux';

const Logout = () => {
     const dispatch = useDispatch();
     const handleLogout =(e) => {
         e.preventDefault();

         dispatch(logout());
     };
    return (
        <div>
            
            <button className="logout__button" onClick={(e) => handleLogout(e)}>
            Logout
            </button>
        </div>

    )
}

export default Logout
