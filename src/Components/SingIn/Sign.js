import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import UseAuth from '../context/UseAuth';
import './SignIn.css'



const Sign = () => {

    const {
        getEmail,
        getPass,
        getName,
        NewUser,
        error,
        getPhoto
    } = UseAuth()
    console.log(NewUser)
    return (
        <div className='regester-form'>

            <div className='form-container'>
                <h2>Please Sign up</h2>
                <p className='error'>{error} </p>
                <form onSubmit={NewUser} >

                    <input onBlur={getName} type="text" name='name' id="name"
                        placeholder='Name' />
                    <br />
                    <input onBlur={getEmail} placeholder='Email' type="email" name="email" id="email" />
                    <br />
                    <input onBlur={getPass} placeholder='Password' type="password" name="pass" id="pass" />
                    <br />

                    <input onBlur={getPhoto} placeholder='type your picture url' type="url" name="pass" id="pass" />
                    <br />

                    <input className='submit-btn' type="submit" value="Sign up" />

                </form>

                <div className='existaccount' >
                    <p>Already have an account? Please  <Link to='/login' >login</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Sign;