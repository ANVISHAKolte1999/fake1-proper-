import { Button } from 'bootstrap'
import React from 'react'
import { changepass } from '../Features/userSlice'
import "./Logout.css";
import { useDispatch } from 'react-redux';

const Pass = () => {
     const dispatch = useDispatch();
     const handleChangePass =(e) => {
         e.preventDefault();

         dispatch(changepass());
     };
    return (
        <div>
            
            <button className="logout__button" onClick={(e) => handleChangePass(e)}>
           ChangePass
            </button>
        </div>

    )
}

export default Pass