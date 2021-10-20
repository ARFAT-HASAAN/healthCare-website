import React from 'react';
import UseAuth from '../context/UseAuth';


import './Login.css'

const Login = () => {

    const { signInWithEmailAndPassword, getEmail,
        getPass,
    } = UseAuth()
    return (
        <div className='login-container' >
            <div className='login-form' >
                <h2>Login </h2>
                <form onSubmit={signInWithEmailAndPassword} >
                    <input onBlur={getEmail} placeholder='Email' type="email" name="" id="" />
                    <input onBlur={getPass} placeholder='Password' type="password" name="" id="" />
                    <input className='login-btn' type="submit" value="Login" />
                </form>
            </div>


        </div>
    );
};

export default Login;