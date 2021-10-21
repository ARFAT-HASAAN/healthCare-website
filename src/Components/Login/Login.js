import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../context/UseAuth';
import './Login.css'

const Login = () => {
    const {
        signInWithEmailAndPassword,
        getEmail,
        getPass,
        SignWithGoogle
    } = UseAuth()

    const history = useHistory()
    const location = useLocation()

    const redirect_url = location.state?.from || '/home'

    const GoogleLogin = () => {

        SignWithGoogle()
            .then(result => {
                history.push(redirect_url)
            })

    }
    return (
        <div className='login-container' >
            <div className='login-form' >
                <h2>Login </h2>
                <form onSubmit={signInWithEmailAndPassword} >
                    <input onBlur={getEmail} placeholder='Email' type="email" name="" id="" />
                    <input onBlur={getPass} placeholder='Password' type="password" name="" id="" />
                    <input className='login-btn' type="submit" value="Login" />
                </form>
                <br />
                <div>
                    <h2>or</h2>
                    <button onClick={GoogleLogin} className='google-btn' > Login With Google</button>
                </div>

            </div>



        </div>
    );
};

export default Login;