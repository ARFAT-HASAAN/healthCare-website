import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import UseAuth from '../context/UseAuth';
import './SignIn.css'



const Sign = () => {

    const history = useHistory()
    const location = useLocation()

    const redirect_url = location.state?.from || '/home'

    const { SignWithGoogle, getEmail,
        getPass,
        getName,
        NewUser } = UseAuth()




    const GoogleLogin = () => {

        SignWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })

    }


    return (
        <div className='regester-form'>



            <div className='form-container'>
                <h2>Please Sign up</h2>
                <form onSubmit={NewUser} >


                    <input onBlur={getName} type="text" name='name' id="name"
                        placeholder='Name' />
                    <br />
                    <input onBlur={getEmail} placeholder='Email' type="email" name="email" id="email" />
                    <br />
                    <input onBlur={getPass} placeholder='Password' type="password" name="pass" id="pass" />
                    <br />
                    <input placeholder='Confirm Password' type="password" name='pass' id='pass' />
                    <br />


                    <input className='submit-btn' type="submit" value="Sign up" />

                </form>
                <div>
                    <p>or</p>
                    <button onClick={GoogleLogin} className='google-btn' >Sign with Google</button>
                </div>
                <div className='existaccount' >
                    <p>Already have an <Link to='/login' >Account?</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Sign;